'use client'

import { useEffect, useRef } from 'react'

/**
 * Interactive dot-field background for the hero.
 * Dots near the cursor lift and glow orange. Canvas-based (no layout thrashing),
 * disabled on touch devices and when prefers-reduced-motion is set.
 */
export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const GAP = 34
    const BASE_RADIUS = 1.2
    const INFLUENCE = 140

    let width = 0
    let height = 0
    let dots: { x: number; y: number }[] = []
    const mouse = { x: -9999, y: -9999 }
    let rafId = 0

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      dots = []
      for (let x = GAP / 2; x < width; x += GAP) {
        for (let y = GAP / 2; y < height; y += GAP) {
          dots.push({ x, y })
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const dot of dots) {
        const dx = dot.x - mouse.x
        const dy = dot.y - mouse.y
        const dist = Math.hypot(dx, dy)
        const t = Math.max(0, 1 - dist / INFLUENCE)

        // Dots drift slightly away from the cursor (magnetic push)
        const push = t * 10
        const angle = Math.atan2(dy, dx)
        const px = dot.x + Math.cos(angle) * push
        const py = dot.y + Math.sin(angle) * push

        const r = BASE_RADIUS + t * 1.8
        if (t > 0.05) {
          ctx.fillStyle = `rgba(255, 107, 53, ${0.25 + t * 0.65})`
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.10)'
        }
        ctx.beginPath()
        ctx.arc(px, py, r, 0, Math.PI * 2)
        ctx.fill()
      }
      rafId = requestAnimationFrame(draw)
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    build()

    if (prefersReduced || isTouch) {
      // Static render only — no animation loop, no mouse tracking
      draw()
      cancelAnimationFrame(rafId)
    } else {
      window.addEventListener('mousemove', onMove, { passive: true })
      window.addEventListener('mouseout', onLeave)
      rafId = requestAnimationFrame(draw)
    }

    const onResize = () => build()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}

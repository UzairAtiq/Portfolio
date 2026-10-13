'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useScrollTo } from '@/components/lenis-provider'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function SiteNav() {
  const scrollTo = useScrollTo()
  const [active, setActive] = useState('home')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      {/* Scroll progress indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-accent"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <button
          onClick={() => scrollTo('home')}
          className="font-display text-lg font-bold tracking-tight transition-colors hover:text-accent"
        >
          <span className="text-accent">/</span>portfolio
        </button>
        <ul className="hidden items-center gap-7 md:flex">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                data-active={active === s.id}
                className={`link-underline text-sm transition-colors ${
                  active === s.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-current={active === s.id ? 'true' : undefined}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => scrollTo('contact')}
          className="rounded-full border border-accent/40 px-4 py-1.5 text-sm text-accent transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_20px_var(--glow)]"
        >
          Get in Touch
        </button>
      </nav>
    </header>
  )
}

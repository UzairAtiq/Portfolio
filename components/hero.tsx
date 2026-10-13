'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDownToLine, Sparkles } from 'lucide-react'
import { DotGrid } from '@/components/dot-grid'
import { StatCounter } from '@/components/stat-counter'
import { useScrollTo } from '@/components/lenis-provider'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export function Hero() {
  const scrollTo = useScrollTo()

  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <DotGrid />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:min-h-[calc(100vh-4rem)] md:grid-cols-[1.2fr_1fr] md:py-24">
        {/* Left column */}
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">
          <motion.p variants={item} className="text-sm font-medium tracking-widest text-accent uppercase">
            Full-Stack Developer → ML Engineer
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-balance md:text-7xl"
          >
            {'[YOUR NAME]'}
          </motion.h1>

          <motion.p variants={item} className="text-lg text-muted-foreground text-pretty md:text-xl">
            MERN developer transitioning into <span className="text-accent">machine learning and AI</span>,
            based in Islamabad, Pakistan.
          </motion.p>

          <motion.p variants={item} className="max-w-xl leading-relaxed text-muted-foreground text-pretty">
            I spent the last few years building production web applications across the MERN stack — React
            frontends, Node/Express APIs, and MongoDB data layers. Today my focus is on ML and deep learning
            fundamentals: math, models, and the engineering that makes them useful. I&apos;m aiming for roles
            where solid software craft meets applied machine learning.
          </motion.p>

          {/* Stat counters */}
          <motion.div variants={item} className="flex flex-wrap gap-10 pt-2">
            <StatCounter value={12} label="Projects Completed" />
            <StatCounter value={6} label="Certificates Earned" />
            <StatCounter value={3} label="Years Building Software" />
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_0_28px_var(--glow)]"
            >
              <ArrowDownToLine className="size-4" aria-hidden="true" />
              Resume
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
          className="flex flex-col items-center gap-5"
        >
          <div className="relative">
            {/* Ambient glow behind the portrait */}
            <div
              className="absolute -inset-6 rounded-[2.5rem] bg-accent/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[2.5rem] rounded-tr-lg rounded-bl-lg border border-border">
              <Image
                src="/images/portrait-placeholder.png"
                alt="Portrait of [YOUR NAME]"
                width={380}
                height={475}
                priority
                className="h-auto w-72 object-cover md:w-80"
              />
            </div>
          </div>

          {/* Currently learning mini-card */}
          <div className="flex w-72 items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 md:w-80">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Sparkles className="size-4" aria-hidden="true" />
            </span>
            <div className="flex flex-col">
              <span className="text-xs tracking-wide text-muted-foreground uppercase">Currently learning</span>
              <span className="text-sm font-medium">Deep learning with PyTorch</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

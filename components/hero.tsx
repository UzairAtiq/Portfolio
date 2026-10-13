'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDownToLine } from 'lucide-react'
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
            AI engineer
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-balance md:text-7xl"
          >
            Uzair Attiq
          </motion.h1>

          <motion.p variants={item} className="text-lg text-muted-foreground text-pretty md:text-xl">
            AI engineer based in Islamabad, Pakistan.
          </motion.p>

          <motion.p variants={item} className="max-w-xl leading-relaxed text-muted-foreground text-pretty">
            I build AI systems: LLM agents, RAG pipelines, and neural networks.
            <br />
            AI degree, plus Stanford and DeepLearning.AI Machine Learning and Deep Learning specializations.
            <br />
            MERN roots, AI focus.
          </motion.p>

          {/* Stat counters */}
          <motion.div variants={item} className="flex flex-wrap gap-10 pt-2">
            <StatCounter value={12} label="Projects Completed" />
            <StatCounter value={5} suffix="" label="Certifications" />
            <StatCounter value={4} label="Years Building Software" />
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <a
              href="/resume/Muhammad_Uzair_Attiq_Resume (1) copy.pdf"
              download="Muhammad_Uzair_Attiq_Resume.pdf"
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
                src="/pfp/ChatGPT Image Aug 15, 2026, 03_45_22 AM.png"
                alt="Portrait of Uzair Attiq"
                width={380}
                height={475}
                priority
                className="h-auto w-72 object-cover md:w-80"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

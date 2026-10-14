'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.26.72-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.02 11.02 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

type Project = {
  title: string
  subtitle?: string
  screenshotLabel?: string
  image?: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  research?: boolean
}

const PROJECTS: Project[] = [
  {
    title: 'Post Studio',
    subtitle: 'Autonomous LinkedIn AI Publishing Agent (Human-in-the-Loop)',
    image: '/project ss/Screenshot 2026-10-13 at 10.16.08\u202fPM.png',
    repoUrl: 'https://github.com/UzairAtiq/Post-Studio',
    description:
      'An end-to-end agentic publishing pipeline built with LangGraph and Groq LLMs that drafts content, routes it to Slack for human review, and publishes approved posts to LinkedIn. Modular tools run as independent MCP servers over stdio, paired with automated OAuth 2.0 token refreshes and dual PostgreSQL/SQLite state synchronization. Monitored with Langfuse for observability and deployed on Render with an interactive React workflow dashboard.',
    tags: [
      'Python',
      'LangGraph',
      'MCP',
      'Groq API',
      'FastAPI',
      'PostgreSQL',
      'SQLite',
      'Slack API',
      'LinkedIn REST API',
      'Langfuse',
      'Render',
    ],
  },
  {
    title: 'Fitness Bot',
    subtitle: 'Fitness Knowledge Assistant: Domain-Specific RAG Pipeline',
    image: '/project ss/Screenshot 2026-10-13 at 10.14.59\u202fPM.png',
    liveUrl: 'https://d1kipqqm1ofiqs.cloudfront.net/',
    repoUrl: 'https://github.com/UzairAtiq/fitness_bot',
    description:
      'A production-ready fitness RAG pipeline featuring custom markdown cleaning, multi-level header chunking, and rich metadata tagging. It combines Qdrant Cloud vector search with cross-encoder reranking to deliver pinpoint domain context for high-accuracy answers. Powered by Groq and LangChain LCEL via an async FastAPI backend and a live React frontend deployed on AWS.',
    tags: [
      'Python',
      'FastAPI',
      'Qdrant Cloud',
      'LangChain (LCEL)',
      'Sentence-Transformers',
      'Cross-Encoders',
      'Groq',
      'Docker',
    ],
  },
  {
    title: 'Anime Tracker',
    subtitle: 'Retro-Styled Watchlist Manager',
    image: '/project ss/Screenshot 2026-10-14 at 6.58.14\u202fPM.png',
    repoUrl: 'https://github.com/UzairAtiq/Anime-List-Tracker',
    description:
      'A retro-themed anime tracking web app that organizes watched, completed, and in-progress titles with fluid Framer Motion animations. Features real-time cloud data synchronization powered by Supabase alongside an offline-first local fallback so the watchlist never loses state.',
    tags: [
      'React',
      'JavaScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Supabase',
      'Capacitor',
    ],
  },
  {
    title: 'Workout Logger',
    subtitle: 'Mobile-First Fitness Tracker',
    screenshotLabel: 'MOBILE WORKOUT LOGGER',
    repoUrl: 'https://github.com/UzairAtiq/workout-logger',
    description:
      'A mobile-first workout logger tailored for rapid exercise logging with intuitive gesture-based digit inputs and historical volume tracking. Engineered with React and TypeScript, running completely offline and packaged directly into an Android APK with Capacitor.',
    tags: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Capacitor',
      'Android (Gradle)',
    ],
  },
]

function Checkpoint({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reached = useInView(ref, { margin: '-45% 0px -45% 0px' })

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-12">
      {/* Checkpoint marker */}
      <div className="relative flex w-6 shrink-0 justify-center md:w-8">
        <div className="sticky top-[45vh] z-10 size-4" aria-hidden="true">
          <motion.span
            animate={
              reached
                ? { scale: 1, backgroundColor: 'var(--accent)', boxShadow: '0 0 18px var(--glow)' }
                : { scale: 0.6, backgroundColor: 'var(--muted)', boxShadow: '0 0 0px transparent' }
            }
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="absolute inset-0 rounded-full"
          />
          {/* Pulse ring when reached */}
          {reached && (
            <motion.span
              initial={{ scale: 0.6, opacity: 0.8 }}
              animate={{ scale: 2.4, opacity: 0 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full bg-accent/40"
            />
          )}
        </div>
      </div>

      {/* Card */}
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="group mb-24 flex-1 overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_50px_rgba(0,0,0,0.5)]"
      >
        {/* Screenshot / GIF */}
        <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border-b border-border bg-secondary">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="font-mono text-sm text-muted-foreground transition-transform duration-500 group-hover:scale-105">
              {project.screenshotLabel}
            </span>
          )}
          {/* Hover gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-accent/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />
          {/* Drifting particles on hover / when reached */}
          {reached && (
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((p) => (
                <motion.span
                  key={p}
                  initial={{ y: '110%', x: `${15 + p * 18}%`, opacity: 0 }}
                  animate={{ y: '-20%', opacity: [0, 0.6, 0] }}
                  transition={{
                    duration: 4 + p * 0.7,
                    repeat: Infinity,
                    delay: p * 0.9,
                    ease: 'linear',
                  }}
                  className="absolute size-1 rounded-full bg-accent"
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-2xl font-bold">{project.title}</h3>
              {project.subtitle && (
                <p className="text-sm font-medium text-accent">
                  {project.subtitle}
                </p>
              )}
            </div>
            <span className="font-display text-sm font-bold text-accent/60">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <p className="leading-relaxed text-sm text-muted-foreground">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-accent/30 group-hover:text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-2"
              >
                Live Demo <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon className="size-4" /> Source Code
              </a>
            )}
            {project.research && (
              <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                Education / Research
              </span>
            )}
          </div>
        </div>
      </motion.article>
    </div>
  )
}

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.7', 'end 0.6'],
  })
  const pathProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  const percent = useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`)

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex items-end justify-between"
      >
        <div>
          <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">Selected work</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Projects</h2>
        </div>
        <motion.span className="font-display text-2xl font-bold text-accent md:text-3xl" aria-hidden="true">
          {percent}
        </motion.span>
      </motion.div>

      <div ref={sectionRef} className="relative">
        {/* Progress path: track + fill */}
        <div
          className="absolute top-0 bottom-24 left-[11px] w-0.5 bg-border md:left-[15px]"
          aria-hidden="true"
        />
        <motion.div
          className="absolute top-0 bottom-24 left-[11px] w-0.5 origin-top bg-accent shadow-[0_0_12px_var(--glow)] md:left-[15px]"
          style={{ scaleY: pathProgress }}
          aria-hidden="true"
        />

        {PROJECTS.map((project, i) => (
          <Checkpoint key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

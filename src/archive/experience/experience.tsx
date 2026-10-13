'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react'

type Entry = {
  initials: string
  role: string
  type: string
  range: string
  location: string
  summary: string
  full: string
  academic?: boolean
}

const ENTRIES: Entry[] = [
  {
    initials: 'C1',
    role: '[ROLE TITLE — Company 1]',
    type: 'Full-time',
    range: '[Start] – [End]',
    location: '[Location / Remote]',
    summary:
      'Built and shipped full-stack features across a MERN product — React frontends, Node/Express APIs, MongoDB schemas.',
    full: '[Full description placeholder — responsibilities, impact, key technologies, notable outcomes. Replace with real content.]',
  },
  {
    initials: 'C2',
    role: '[ROLE TITLE — Company 2]',
    type: 'Contract',
    range: '[Start] – [End]',
    location: '[Location / Remote]',
    summary:
      'Delivered client-facing web applications end to end, from database design to deployed production UI.',
    full: '[Full description placeholder — responsibilities, impact, key technologies, notable outcomes. Replace with real content.]',
  },
  {
    initials: 'C3',
    role: '[ROLE TITLE — Company 3]',
    type: 'Freelance',
    range: '[Start] – [End]',
    location: '[Location / Remote]',
    summary:
      'Owned smaller product builds solo — scoping, implementation, and iteration with direct stakeholder feedback.',
    full: '[Full description placeholder — responsibilities, impact, key technologies, notable outcomes. Replace with real content.]',
  },
  {
    initials: 'U',
    role: '[DEGREE — University Name]',
    type: 'Academic',
    range: '[Start] – [End]',
    location: 'Islamabad, Pakistan',
    summary:
      'Formal foundation in computer science — algorithms, data structures, and the math now powering the ML transition.',
    full: '[Full description placeholder — degree details, relevant coursework, thesis or final-year project. Replace with real content.]',
    academic: true,
  },
]

export function Experience() {
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState<number | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const go = (dir: number) => {
    const next = Math.min(Math.max(index + dir, 0), ENTRIES.length - 1)
    setIndex(next)
    setExpanded(null)
    const track = trackRef.current
    if (track) {
      const card = track.children[next] as HTMLElement | undefined
      card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex items-end justify-between gap-4"
      >
        <div>
          <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">Where I&apos;ve been</p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Experience</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            disabled={index === 0}
            aria-label="Previous experience"
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            onClick={() => go(1)}
            disabled={index === ENTRIES.length - 1}
            aria-label="Next experience"
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-border disabled:hover:text-foreground"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </motion.div>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {ENTRIES.map((entry, i) => (
          <motion.article
            key={entry.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex w-[85%] shrink-0 snap-center flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] sm:w-[420px]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span
                  className={`flex size-11 items-center justify-center rounded-xl font-display text-sm font-bold ${
                    entry.academic ? 'bg-secondary text-foreground' : 'bg-accent/10 text-accent'
                  }`}
                >
                  {entry.initials}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold leading-tight">{entry.role}</h3>
                  <p className="text-xs text-muted-foreground">
                    {entry.range} · {entry.location}
                  </p>
                </div>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase ${
                  entry.academic
                    ? 'border border-border text-muted-foreground'
                    : 'bg-accent/10 text-accent'
                }`}
              >
                {entry.type}
              </span>
            </div>

            <p className="leading-relaxed text-sm text-muted-foreground">{entry.summary}</p>

            <AnimatePresence initial={false}>
              {expanded === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden leading-relaxed text-sm text-foreground/80"
                >
                  {entry.full}
                </motion.p>
              )}
            </AnimatePresence>

            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm text-accent transition-colors hover:text-foreground"
              aria-expanded={expanded === i}
            >
              {expanded === i ? (
                <>
                  <Minus className="size-4" aria-hidden="true" /> Less
                </>
              ) : (
                <>
                  <Plus className="size-4" aria-hidden="true" /> Full description
                </>
              )}
            </button>
          </motion.article>
        ))}
      </div>

      {/* Dot pagination */}
      <div className="mt-4 flex justify-center gap-2">
        {ENTRIES.map((entry, i) => (
          <button
            key={entry.role}
            onClick={() => {
              setIndex(i)
              const card = trackRef.current?.children[i] as HTMLElement | undefined
              card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
            }}
            aria-label={`Go to experience ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              index === i ? 'w-6 bg-accent' : 'w-2 bg-muted hover:bg-muted-foreground'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

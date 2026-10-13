'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const COURSES = [
  'Artificial Intelligence',
  'Machine Learning',
  'DBMS',
  'Data Communication & Networking',
  'Software Engineering',
]

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
          Academic Background
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Education
        </h2>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="group rounded-2xl border border-border bg-card p-6 md:p-8 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <GraduationCap className="size-6" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="font-display text-xl font-bold leading-tight">
                Bachelor of Science in Artificial Intelligence
              </h3>
              <p className="text-base font-medium text-foreground/90">
                Bahria University, Islamabad, Pakistan
              </p>
            </div>
          </div>

          <div className="self-start">
            <span className="inline-flex items-center rounded-full bg-accent/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-accent">
              CGPA: 3.5 / 4.0
            </span>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-5">
          <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Relevant Coursework
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {COURSES.map((course) => (
              <span
                key={course}
                className="rounded-full border border-border px-3.5 py-1 text-xs text-muted-foreground transition-colors group-hover:border-accent/30 group-hover:text-foreground"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </section>
  )
}

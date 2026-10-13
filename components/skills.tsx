'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Plus, Minus } from 'lucide-react'

type Skill = { name: string; level: 1 | 2 | 3 }

const CATEGORIES: { title: string; skills: Skill[] }[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', level: 3 },
      { name: 'TypeScript', level: 3 },
      { name: 'Python', level: 2 },
      { name: 'SQL', level: 2 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', level: 3 },
      { name: 'Next.js', level: 3 },
      { name: 'Node.js / Express', level: 3 },
      { name: 'Tailwind CSS', level: 3 },
    ],
  },
  {
    title: 'ML & Data',
    skills: [
      { name: 'NumPy / Pandas', level: 2 },
      { name: 'scikit-learn', level: 2 },
      { name: 'PyTorch', level: 1 },
      { name: 'Data Visualization', level: 2 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git / GitHub', level: 3 },
      { name: 'MongoDB', level: 3 },
      { name: 'Docker', level: 2 },
      { name: 'Vercel / CI', level: 2 },
    ],
  },
]

const LEVEL_LABEL = ['', 'Learning', 'Comfortable', 'Strong']

function ProficiencyDots({ level }: { level: number }) {
  return (
    <span className="flex items-center gap-1" aria-label={LEVEL_LABEL[level]}>
      {[1, 2, 3].map((d) => (
        <span
          key={d}
          className={`size-1.5 rounded-full transition-colors ${
            d <= level ? 'bg-accent' : 'bg-muted'
          }`}
          aria-hidden="true"
        />
      ))}
    </span>
  )
}

const EDUCATION = [
  {
    degree: '[DEGREE — e.g. BS Computer Science]',
    institution: '[University Name]',
    dates: '[Start] – [End]',
    coursework: '[Relevant coursework placeholder — e.g. Data Structures, Linear Algebra, Probability, Databases. Replace with real content.]',
  },
  {
    degree: '[CERTIFICATION / PROGRAM — e.g. ML Specialization]',
    institution: '[Provider Name]',
    dates: '[Start] – [End]',
    coursework: '[Relevant coursework placeholder — e.g. Supervised Learning, Neural Networks, Model Evaluation. Replace with real content.]',
  },
]

export function Skills() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">What I work with</p>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Skills <span className="text-accent">&amp;</span> Education
        </h2>
      </motion.div>

      {/* Skill categories */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: ci * 0.08 }}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5"
          >
            <h3 className="font-display text-sm font-bold tracking-wide uppercase text-muted-foreground">
              {cat.title}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {cat.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center justify-between gap-2 rounded-full border border-border px-3.5 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-foreground"
                >
                  <span>{skill.name}</span>
                  <ProficiencyDots level={skill.level} />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Education cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {EDUCATION.map((edu, i) => (
          <motion.article
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold leading-tight">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution} · {edu.dates}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                aria-expanded={expanded === i}
                aria-label={expanded === i ? 'Hide coursework' : 'Show coursework'}
                className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
              >
                {expanded === i ? (
                  <Minus className="size-4" aria-hidden="true" />
                ) : (
                  <Plus className="size-4" aria-hidden="true" />
                )}
              </button>
            </div>
            <AnimatePresence initial={false}>
              {expanded === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden pt-4 leading-relaxed text-sm text-muted-foreground"
                >
                  {edu.coursework}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

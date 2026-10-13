'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

export type Certification = {
  title: string
  issuer: string
  date?: string
  credentialUrl?: string
  description?: string
}

// Will be populated once certifications are provided
const CERTIFICATIONS: Certification[] = []

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
          Credentials &amp; Specializations
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          Certifications
        </h2>
      </motion.div>

      {CERTIFICATIONS.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Award className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold leading-tight">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  {cert.date && <p className="mt-1 text-xs text-muted-foreground">{cert.date}</p>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border p-8 text-center text-muted-foreground">
          <p className="text-sm">Certifications will be displayed here.</p>
        </div>
      )}
    </section>
  )
}

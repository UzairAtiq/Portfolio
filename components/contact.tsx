'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, Check } from 'lucide-react'

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.26.72-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.02 11.02 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle', icon: LinkedinIcon },
  { label: 'GitHub', href: 'https://github.com/your-handle', icon: GithubIcon },
  { label: 'Email', href: 'mailto:you@example.com', icon: Mail },
]

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status !== 'idle') return
    setStatus('sending')
    // Placeholder submit — wire up a real endpoint or email service later.
    setTimeout(() => setStatus('sent'), 1200)
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border bg-surface"
    >
      {/* Distinct texture: faint radial accent wash */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-accent/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-24 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div>
            <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">One last thing</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Let&apos;s build something that <span className="text-accent">learns</span>.
            </h2>
          </div>

          {/* Pull-quote */}
          <blockquote className="border-l-2 border-accent pl-5">
            <p className="font-display text-lg font-medium leading-relaxed text-foreground/90 text-pretty">
              &ldquo;[YOUR PERSONAL QUOTE — one line about how you think about software, learning, or
              building. Replace with your own words.]&rdquo;
            </p>
          </blockquote>

          {/* Social links */}
          <div className="flex flex-wrap gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <social.icon className="size-4" aria-hidden="true" />
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-sm text-muted-foreground">Name</span>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm text-muted-foreground">Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm text-muted-foreground">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about the role or project…"
              className="resize-none rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
            />
          </label>

          {/* Morphing send button */}
          <motion.button
            type="submit"
            layout
            disabled={status !== 'idle'}
            className={`mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full px-7 py-3 text-sm font-semibold transition-all ${
              status === 'sent'
                ? 'bg-accent/15 text-accent'
                : 'bg-accent text-accent-foreground hover:-translate-y-0.5 hover:shadow-[0_0_28px_var(--glow)]'
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {status === 'idle' && (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="inline-flex items-center gap-2"
                >
                  <Send className="size-4" aria-hidden="true" /> Send message
                </motion.span>
              )}
              {status === 'sending' && (
                <motion.span
                  key="sending"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="inline-flex items-center gap-2"
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                    className="size-4 rounded-full border-2 border-accent-foreground/30 border-t-accent-foreground"
                    aria-hidden="true"
                  />
                  Sending…
                </motion.span>
              )}
              {status === 'sent' && (
                <motion.span
                  key="sent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline-flex items-center gap-2"
                >
                  <Check className="size-4" aria-hidden="true" /> Sent!
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.form>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            Designed and built by <span className="text-foreground">{'[YOUR NAME]'}</span>
          </p>
          <p>
            <span className="text-accent">·</span> Islamabad, Pakistan
          </p>
        </div>
      </footer>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

type Skill = { name: string; level: 1 | 2 | 3 }

const CATEGORIES: { title: string; skills: Skill[] }[] = [
  {
    title: 'AI & LLM',
    skills: [
      { name: 'LangChain (LCEL)', level: 3 },
      { name: 'LangGraph', level: 3 },
      { name: 'MCP', level: 3 },
      { name: 'RAG', level: 3 },
      { name: 'Agentic AI / Tool Calling', level: 3 },
      { name: 'Vector Databases & Embeddings', level: 3 },
      { name: 'Cross-Encoder Reranking', level: 3 },
      { name: 'LLM Evaluation', level: 3 },
      { name: 'Langfuse', level: 3 },
      { name: 'OpenAI API', level: 3 },
      { name: 'Groq API', level: 3 },
      { name: 'Gemini Vision API', level: 3 },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'TensorFlow', level: 3 },
      { name: 'Keras', level: 3 },
      { name: 'Scikit-Learn', level: 3 },
      { name: 'NumPy', level: 3 },
      { name: 'Pandas', level: 3 },
      { name: 'Neural Networks (CNN, RNN, LSTM, Transformers)', level: 3 },
    ],
  },
  {
    title: 'Backend & Frontend',
    skills: [
      { name: 'Python', level: 3 },
      { name: 'TypeScript', level: 3 },
      { name: 'JavaScript', level: 3 },
      { name: 'FastAPI', level: 3 },
      { name: 'Node.js', level: 3 },
      { name: 'Express.js', level: 3 },
      { name: 'React.js', level: 3 },
      { name: 'Tailwind CSS', level: 3 },
      { name: 'REST APIs', level: 3 },
      { name: 'PostgreSQL', level: 3 },
      { name: 'MongoDB', level: 3 },
      { name: 'SQLite', level: 3 },
    ],
  },
  {
    title: 'Cloud & Tools',
    skills: [
      { name: 'AWS (EC2, S3, CloudFront)', level: 3 },
      { name: 'Render', level: 3 },
      { name: 'Vercel', level: 3 },
      { name: 'Docker', level: 3 },
      { name: 'Nginx', level: 3 },
      { name: 'Qdrant', level: 3 },
      { name: 'Supabase', level: 3 },
      { name: 'OAuth 2.0', level: 3 },
      { name: 'Git', level: 3 },
      { name: 'GitHub', level: 3 },
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

export function Skills() {
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
          Technical Skills
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
    </section>
  )
}

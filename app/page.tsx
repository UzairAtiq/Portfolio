import { LenisProvider } from '@/components/lenis-provider'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <LenisProvider>
      <SiteNav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </LenisProvider>
  )
}

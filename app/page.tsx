import { LenisProvider } from '@/components/lenis-provider'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Certifications } from '@/components/certifications'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <LenisProvider>
      <SiteNav />
      <main>
        <Hero />
        <Certifications />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </LenisProvider>
  )
}

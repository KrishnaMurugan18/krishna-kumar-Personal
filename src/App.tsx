import { lazy, Suspense } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Loader } from '@/components/Loader'
import { ScrollProgress } from '@/components/ScrollProgress'
import { BackToTop } from '@/components/BackToTop'
import { Hero } from '@/components/sections/Hero'

// Below-the-fold sections are lazy-loaded to keep the initial bundle lean.
const About = lazy(() => import('@/components/sections/About').then((m) => ({ default: m.About })))
const Skills = lazy(() => import('@/components/sections/Skills').then((m) => ({ default: m.Skills })))
const Experience = lazy(() =>
  import('@/components/sections/Experience').then((m) => ({ default: m.Experience }))
)
const Certifications = lazy(() =>
  import('@/components/sections/Certifications').then((m) => ({ default: m.Certifications }))
)
const Projects = lazy(() =>
  import('@/components/sections/Projects').then((m) => ({ default: m.Projects }))
)
const LearningJourney = lazy(() =>
  import('@/components/sections/LearningJourney').then((m) => ({ default: m.LearningJourney }))
)
const Achievements = lazy(() =>
  import('@/components/sections/Achievements').then((m) => ({ default: m.Achievements }))
)
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((m) => ({ default: m.Contact }))
)

function SectionFallback() {
  return <div className="py-24" aria-hidden="true" />
}

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-cyan focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>

      <Loader />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <LearningJourney />
          <Certifications />
          <Achievements />
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

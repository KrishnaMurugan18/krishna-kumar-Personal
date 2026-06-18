import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, ArrowRight } from 'lucide-react'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { Button } from '@/components/ui/Button'

const ROLES = ['Java Developer', 'Cloud Engineer', 'Problem Solver']

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const speed = deleting ? 40 : 70
    const pause = deleting ? 200 : 1400

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      const t = setTimeout(() => {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      }, 200)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      )
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, wordIndex, words])

  return text
}

export function Hero() {
  const typed = useTypewriter(ROLES)

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <AnimatedBackground />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="font-tag text-sm text-cyan mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            open to new opportunities
          </p>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="text-gradient">Krishna Kumar</span>
          </h1>

          <p className="mt-4 font-tag text-lg text-muted sm:text-xl">
            <span className="text-ink">{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] -translate-y-0.5 bg-cyan animate-blink align-middle" />
          </p>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            I build reliable backend systems with Java and Spring Boot, and ship them on Google
            Cloud — currently growing that craft as a Graduate Engineering Trainee at HCL
            Technologies.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button onClick={() => scrollTo('projects')}>
              View Projects <ArrowRight size={16} />
            </Button>
            <Button variant="secondary" onClick={() => window.open('/resume.pdf', '_blank')}>
              <Download size={16} /> Download Resume
            </Button>
            <Button variant="outline" onClick={() => scrollTo('contact')}>
              <Mail size={16} /> Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40 glow-cyan">
            <div className="flex items-center gap-1.5 border-b border-border bg-bg-elevated px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-indigo/70" />
              <div className="ml-3 flex gap-1 font-tag text-xs text-muted">
                <span className="rounded-md bg-surface px-2.5 py-1 text-cyan">about.tsx</span>
                <span className="px-2.5 py-1">skills.json</span>
                <span className="px-2.5 py-1">contact.sh</span>
              </div>
            </div>

            <div className="flex font-tag text-[13px] leading-7">
              <div className="select-none border-r border-border px-3 py-4 text-right text-muted/50">
                {Array.from({ length: 11 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <pre className="flex-1 overflow-x-auto px-4 py-4">
                <code>
                  <span className="text-indigo">const</span> <span className="text-cyan">engineer</span> = {'{'}
                  {'\n'}  name: <span className="text-amber">&apos;Krishna Kumar M&apos;</span>,
                  {'\n'}  role: <span className="text-amber">&apos;Java &amp; Cloud Engineer&apos;</span>,
                  {'\n'}  company: <span className="text-amber">&apos;HCL Technologies&apos;</span>,
                  {'\n'}  certified: [<span className="text-amber">&apos;GCP ACE&apos;</span>],
                  {'\n'}  stack: [
                  {'\n'}    <span className="text-amber">&apos;Java&apos;</span>, <span className="text-amber">&apos;Spring Boot&apos;</span>, <span className="text-amber">&apos;React&apos;</span>,
                  {'\n'}    <span className="text-amber">&apos;MySQL&apos;</span>, <span className="text-amber">&apos;GCP&apos;</span>
                  {'\n'}  ],
                  {'\n'}{'}'};
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

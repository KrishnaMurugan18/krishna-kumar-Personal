import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useActiveSection } from '@/hooks/useActiveSection'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/Button'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(NAV_LINKS.map((l) => l.id))

  function handleNavClick(id: string) {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl border border-border bg-bg/70 px-4 py-3 glass sm:mt-4 sm:px-6">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('home')
          }}
          className="font-tag text-sm font-semibold text-ink"
        >
          <span className="text-cyan">&lt;</span>Krishna<span className="text-cyan">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  active === link.id ? 'text-cyan' : 'text-muted hover:text-ink'
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button size="sm" onClick={() => handleNavClick('contact')}>
            Let&apos;s talk
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-ink"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 rounded-2xl border border-border bg-bg-elevated p-3 glass lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={cn(
                      'block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors',
                      active === link.id ? 'bg-surface text-cyan' : 'text-muted hover:text-ink'
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

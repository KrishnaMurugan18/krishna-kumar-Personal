import { Github, Linkedin, Mail } from 'lucide-react'

const QUICK_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Footer() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:px-6 sm:flex-row sm:justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('home')
          }}
          className="font-tag text-sm font-semibold"
        >
          <span className="text-cyan">&lt;</span>Krishna<span className="text-cyan">/&gt;</span>
        </a>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          {QUICK_LINKS.map((link) => (
            <li key={link.id}>
              <button onClick={() => scrollTo(link.id)} className="transition-colors hover:text-cyan">
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="mailto:krishnakumarm2k26@gmail.com"
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted transition-colors hover:text-cyan hover:border-cyan/40"
          >
            <Mail size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/krishna-kumar-m-b382bb210"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted transition-colors hover:text-cyan hover:border-cyan/40"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="https://github.com/KrishnaMurugan18"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted transition-colors hover:text-cyan hover:border-cyan/40"
          >
            <Github size={15} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center font-tag text-xs text-muted/70">
        © {new Date().getFullYear()} Krishna Kumar M. Built with React, TypeScript & Tailwind CSS.
      </p>
    </footer>
  )
}

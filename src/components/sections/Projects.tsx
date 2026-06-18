import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronDown, FolderGit2 } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { projects } from '@/data/projects'

export function Projects() {
  const [expanded, setExpanded] = useState<string | null>(projects[0]?.id ?? null)

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="05"
          file="projects/"
          title="Featured Projects"
          description="A mix of backend-heavy builds, cloud automation and the full-stack apps that tie everything together."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const isOpen = expanded === project.id
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              >
                <Card className="group h-full overflow-hidden hover:border-cyan/40 transition-colors flex flex-col">
                  <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-bg-elevated to-surface">
                    <div className="absolute inset-0 grid-mask opacity-40" />
                    <FolderGit2
                      size={42}
                      className="relative text-cyan/70 transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="absolute left-3 top-3 font-tag text-[11px] text-muted">
                      ~/{project.id}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                      <Badge tone="cyan">{project.tag}</Badge>
                    </div>

                    <p className="text-sm leading-relaxed text-muted">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>

                    <button
                      onClick={() => setExpanded(isOpen ? null : project.id)}
                      className="mt-5 flex items-center gap-1.5 self-start font-tag text-xs text-cyan"
                      aria-expanded={isOpen}
                    >
                      {isOpen ? 'Hide details' : 'Features, challenges & outcome'}
                      <ChevronDown
                        size={13}
                        className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 space-y-3 border-t border-border pt-4 text-sm">
                            <div>
                              <p className="font-tag text-xs text-cyan mb-1.5">Features</p>
                              <ul className="space-y-1.5">
                                {project.features.map((f, idx) => (
                                  <li key={idx} className="flex gap-2 text-muted">
                                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                                    {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="font-tag text-xs text-amber mb-1.5">Challenge</p>
                              <p className="text-muted">{project.challenges}</p>
                            </div>
                            <div>
                              <p className="font-tag text-xs text-indigo mb-1.5">Outcome</p>
                              <p className="text-muted">{project.outcome}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="mt-auto flex items-center gap-4 pt-5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
                      >
                        <Github size={15} /> Code
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-sm text-cyan transition-colors hover:text-cyan/80"
                        >
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Server, LayoutGrid, Database, Cloud, Terminal } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { skillCategories } from '@/data/skills'
import { cn } from '@/lib/utils'

const ICONS: Record<string, typeof Server> = {
  server: Server,
  layout: LayoutGrid,
  database: Database,
  cloud: Cloud,
  terminal: Terminal,
}

export function Skills() {
  const [active, setActive] = useState(skillCategories[0].id)
  const category = skillCategories.find((c) => c.id === active)!

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          index="02"
          file="skills.json"
          title="Skills & Stack"
          description="Categorized by where I use them — from request handling in Spring Boot to provisioning the cloud they run on."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat) => {
            const Icon = ICONS[cat.icon]
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={cn(
                  'flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all',
                  active === cat.id
                    ? 'border-cyan/50 bg-cyan/10 text-cyan'
                    : 'border-border bg-surface text-muted hover:text-ink hover:border-cyan/30'
                )}
              >
                <Icon size={15} />
                {cat.label}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {category.items.map((skill, i) => (
              <Card
                key={skill.name}
                className="p-5 hover:border-cyan/40 hover:bg-bg-elevated transition-colors group"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="font-tag text-xs text-cyan">{skill.level}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-bg-elevated">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: i * 0.06, ease: 'easeOut' }}
                    className="h-full rounded-full bg-cloud-gradient group-hover:brightness-110"
                  />
                </div>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

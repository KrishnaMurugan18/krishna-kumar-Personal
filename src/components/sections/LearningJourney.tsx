import { motion } from 'framer-motion'
import { CheckCircle2, Circle, Loader2 } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { roadmap } from '@/data/roadmap'
import { cn } from '@/lib/utils'

const STATUS_CONFIG = {
  completed: { icon: CheckCircle2, label: 'Done', color: 'text-cyan' },
  'in-progress': { icon: Loader2, label: 'In progress', color: 'text-amber' },
  planned: { icon: Circle, label: 'Planned', color: 'text-muted' },
} as const

export function LearningJourney() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionHeading
          index="06"
          file="roadmap.md"
          title="Learning Journey"
          description="What I'm actively deepening right now, and what's queued up next."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roadmap.map((item, i) => {
            const { icon: Icon, label, color } = STATUS_CONFIG[item.status]
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Card
                  className={cn(
                    'h-full p-5 transition-colors hover:border-cyan/40',
                    item.status === 'in-progress' && 'border-amber/40'
                  )}
                >
                  <div className={cn('mb-3 flex items-center gap-2 font-tag text-xs', color)}>
                    <Icon size={14} className={item.status === 'in-progress' ? 'animate-spin' : ''} />
                    {label}
                  </div>
                  <h3 className="font-display font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

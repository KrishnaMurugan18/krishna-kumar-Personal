import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { achievements } from '@/data/achievements'

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        <SectionHeading index="07" file="achievements.log" title="Milestones" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Card className="flex items-start gap-4 p-5 hover:border-amber/40 transition-colors">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-amber/10 text-amber">
                  <Trophy size={18} />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display font-semibold">{item.title}</h3>
                    <span className="font-tag text-xs text-muted shrink-0">{item.date}</span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

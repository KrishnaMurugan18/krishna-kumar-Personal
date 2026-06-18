import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <SectionHeading index="03" file="experience.log" title="Experience & Education" />

        <div className="relative ml-3 border-l border-border sm:ml-4">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-12 pl-8 last:pb-0 sm:pl-10"
            >
              <span className="absolute -left-[7px] top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full bg-cloud-gradient ring-4 ring-bg sm:-left-[9px]" />

              <Card className="p-6 hover:border-cyan/40 transition-colors">
                <div className="mb-1 flex items-center gap-2 font-tag text-xs text-cyan">
                  <Briefcase size={13} />
                  {item.period}
                </div>
                <h3 className="font-display text-xl font-semibold">{item.role}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                  {item.company}
                  <span className="mx-1">·</span>
                  <MapPin size={13} /> {item.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

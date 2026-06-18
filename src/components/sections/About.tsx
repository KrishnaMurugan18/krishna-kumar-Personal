import { motion } from 'framer-motion'
import { GraduationCap, Building2, Target, Cloud } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card, CardContent } from '@/components/ui/Card'

const CARDS = [
  {
    icon: Building2,
    title: 'Current Role',
    body: 'Graduate Engineering Trainee at HCL Technologies, working across cybersecurity and cloud/DevOps-adjacent engineering since October 2024.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    body: 'B.Tech in Information Technology from KLN College of Engineering, graduating with a 9.07 CGPA.',
  },
  {
    icon: Cloud,
    title: 'Cloud Focus',
    body: 'Google Cloud Associate Cloud Engineer certified, with a growing interest in infrastructure, security and scalable deployment.',
  },
  {
    icon: Target,
    title: 'Career Objective',
    body: 'Working toward becoming a well-rounded Java Full-Stack and Cloud Engineer, building enterprise-grade applications end to end.',
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading index="01" file="about.tsx" title="About Me" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-muted"
          >
            I&apos;m a Java-leaning full-stack and cloud engineer based in Madurai, Tamil Nadu,
            currently building production support and development skills at{' '}
            <span className="text-ink font-medium">HCL Technologies</span>. My day-to-day blends
            enterprise application support with hands-on exposure to cloud infrastructure on{' '}
            <span className="text-ink font-medium">Google Cloud Platform</span>, where I hold the
            Associate Cloud Engineer certification. I care about writing backend code that holds
            up under real production load — and I&apos;m steadily building toward Spring
            Security, microservices and container orchestration to get there.
          </motion.p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CARDS.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="h-full hover:border-cyan/40 hover:-translate-y-1 transition-all">
                  <CardContent className="pt-6">
                    <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-cyan/10 text-cyan">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-base font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

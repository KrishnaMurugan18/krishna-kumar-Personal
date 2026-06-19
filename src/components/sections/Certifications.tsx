import { motion } from 'framer-motion'
import { BadgeCheck, ExternalLink, ShieldCheck } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <SectionHeading index="04" file="certifications.yaml" title="Certifications" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden p-8 sm:p-10 glow-cyan">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-5">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-cloud-gradient text-white shadow-lg shadow-cyan/30">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <Badge tone="amber" className="mb-2">
                    Google Cloud
                  </Badge>
                  <h3 className="font-display text-2xl font-bold">
                    Associate Cloud Engineer
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    Validates the ability to deploy applications, monitor operations and manage
                    enterprise solutions on Google Cloud Platform.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 font-tag text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <BadgeCheck size={13} className="text-cyan" /> Issued 2024
                    </span>
                    <span>Issuer: Google Cloud</span>
                  </div>
                </div>
              </div>

              <a
                href="https://www.credly.com/badges/b788d33a-8bf8-4fe9-963f-9fcfbba2d6d9/email"
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-cyan/40 bg-cyan/10 px-5 py-3 text-sm font-medium text-cyan transition-colors hover:bg-cyan/20"
              >
                Verify Credential <ExternalLink size={14} />
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

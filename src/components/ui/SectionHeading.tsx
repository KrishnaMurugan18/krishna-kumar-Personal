import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  index: string // e.g. "02"
  file: string // e.g. "skills.ts"
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  index,
  file,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('mb-12 md:mb-16', align === 'center' && 'text-center', className)}
    >
      <p className="font-tag text-sm text-cyan/90 mb-3">
        <span className="text-muted">//</span> {index} — <span className="text-gradient">{file}</span>
      </p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-muted max-w-2xl text-base md:text-lg leading-relaxed',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}

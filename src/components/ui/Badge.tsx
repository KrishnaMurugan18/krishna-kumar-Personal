import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type Tone = 'default' | 'cyan' | 'amber'

const tones: Record<Tone, string> = {
  default: 'bg-bg-elevated text-muted border-border',
  cyan: 'bg-cyan/10 text-cyan border-cyan/30',
  amber: 'bg-amber/10 text-amber border-amber/30',
}

export function Badge({
  className,
  tone = 'default',
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-tag tracking-wide',
        tones[tone],
        className
      )}
      {...props}
    />
  )
}

import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const variants: Record<Variant, string> = {
  primary:
    'bg-cloud-gradient text-white shadow-lg shadow-cyan/20 hover:shadow-cyan/35 hover:brightness-110',
  secondary: 'bg-surface text-ink border border-border hover:border-cyan/50 hover:bg-bg-elevated',
  ghost: 'bg-transparent text-ink hover:bg-surface',
  outline: 'bg-transparent border border-border text-ink hover:border-cyan/60 hover:text-cyan',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300',
          'focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

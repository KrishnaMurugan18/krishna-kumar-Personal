import { Cloud, CloudCog, Cpu, GitBranch } from 'lucide-react'

const FLOATERS = [
  { Icon: Cloud, top: '14%', left: '8%', size: 28, delay: '0s', anim: 'animate-float-slow' },
  { Icon: CloudCog, top: '62%', left: '4%', size: 22, delay: '1.2s', anim: 'animate-float' },
  { Icon: Cpu, top: '20%', left: '88%', size: 24, delay: '0.6s', anim: 'animate-float' },
  { Icon: GitBranch, top: '70%', left: '90%', size: 22, delay: '2s', anim: 'animate-float-slow' },
]

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 grid-mask opacity-60" />

      <div className="absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-cyan/20 blur-[120px]" />
      <div className="absolute top-40 right-0 h-[360px] w-[360px] rounded-full bg-indigo/20 blur-[120px]" />

      {FLOATERS.map(({ Icon, top, left, size, delay, anim }, i) => (
        <span
          key={i}
          className={`absolute text-cyan/30 ${anim}`}
          style={{ top, left, animationDelay: delay }}
        >
          <Icon size={size} />
        </span>
      ))}
    </div>
  )
}

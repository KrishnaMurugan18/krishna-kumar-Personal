import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BOOT_LINES = [
  '$ whoami',
  'krishna-kumar-m',
  '$ status --check',
  'cloud: connected · build: passing',
]

export function Loader() {
  const [visible, setVisible] = useState(true)
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length) {
      const exit = setTimeout(() => setVisible(false), 350)
      return () => clearTimeout(exit)
    }
    const t = setTimeout(() => setLineIndex((i) => i + 1), 280)
    return () => clearTimeout(t)
  }, [lineIndex])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          aria-hidden="true"
        >
          <div className="w-[min(90vw,360px)] rounded-xl border border-border bg-surface font-tag text-sm overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-indigo/70" />
              <span className="ml-2 text-xs text-muted">boot.sh</span>
            </div>
            <div className="px-4 py-4 space-y-1.5 min-h-[120px]">
              {BOOT_LINES.slice(0, lineIndex).map((line, i) => (
                <p key={i} className={line.startsWith('$') ? 'text-muted' : 'text-cyan'}>
                  {line}
                </p>
              ))}
              <span className="inline-block h-4 w-2 bg-cyan animate-blink align-middle" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export function BackToTop() {
  const progress = useScrollProgress()
  const show = progress > 12

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-cloud-gradient text-white shadow-lg shadow-cyan/30 sm:bottom-8 sm:right-8"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

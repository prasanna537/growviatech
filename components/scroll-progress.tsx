'use client'

import { useScroll, useSpring, motion } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      id="scroll-bar"
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100]"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #1D4ED8, #2563EB, #60A5FA, #10B981)',
      }}
    />
  )
}

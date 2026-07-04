'use client'

import { useScroll, useSpring, motion } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-primary origin-left z-[100] shadow-[0_0_8px_rgba(var(--color-primary),0.6)]"
      style={{ scaleX }}
    />
  )
}

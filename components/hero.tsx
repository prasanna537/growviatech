'use client'

import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { heroContainer, heroItem, floatBlob, floatBlobAlt } from '@/lib/motion'

const stats = [
  { value: '0.4s', label: 'Average Load Time' },
  { value: '99+', label: 'Lighthouse Score' },
  { value: '140%', label: 'Conversion Surge' },
]

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(21 54% 54% / 0.12) 0%, transparent 70%)',
          }}
          variants={floatBlob}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(21 54% 54% / 0.09) 0%, transparent 70%)',
          }}
          variants={floatBlobAlt}
          animate="animate"
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, hsl(36 60% 88% / 0.6) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.04, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left – Text Content */}
          <motion.div
            className="space-y-6"
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={heroItem} className="inline-block">
              <motion.span
                className="px-4 py-2 bg-secondary border border-border rounded-full text-sm font-medium text-muted-foreground inline-flex items-center gap-2 cursor-default"
                whileHover={{ scale: 1.04, borderColor: 'hsl(21 54% 54% / 0.5)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <motion.span
                  animate={{ rotate: [0, 20, -10, 20, 0] }}
                  transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 4 }}
                >
                  ✨
                </motion.span>
                Digital Excellence
              </motion.span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={heroItem} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
                We Build{' '}
                <span className="text-primary italic">Digital</span>{' '}
                Experiences{' '}
                <span className="text-primary">That Perform</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={heroItem}
              className="text-lg text-muted leading-relaxed text-pretty max-w-xl font-light"
            >
              We design and build high-performance digital products, custom web applications, and brand experiences. Combining premium aesthetics with clean, scalable code to grow your business.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4 pt-3">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-xl glow-primary-hover group"
                >
                  Start Your Project
                  <motion.span
                    className="inline-flex"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 border border-border bg-card text-foreground px-8 py-4 rounded-full font-semibold hover:bg-secondary transition-all duration-300"
                >
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={heroItem}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
                >
                  <motion.p
                    className="text-3xl font-bold text-primary"
                    initial={{ scale: 0.7 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.1 + i * 0.15, type: 'spring', stiffness: 300 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-xs text-muted uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Illustration */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl"
              animate={{
                filter: ['blur(32px)', 'blur(20px)', 'blur(32px)'],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full max-w-[480px] aspect-square flex items-center justify-center"
              >
                <Image
                  src="/hero-illustration.png"
                  alt="Digital transformation illustration"
                  width={480}
                  height={480}
                  priority
                  className="object-contain w-full h-full rounded-[32px] shadow-lg group-hover:scale-[1.03] transition-transform duration-500"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}

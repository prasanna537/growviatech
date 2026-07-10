'use client'

import Link from 'next/link'
import { ArrowRight, ChevronDown, Sparkles, TrendingUp, Users, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const stats = [
  { value: '150+', label: 'Projects Delivered', icon: TrendingUp },
  { value: '99%',  label: 'Client Satisfaction', icon: Users },
  { value: '0.4s', label: 'Avg. Load Time',  icon: Clock },
]



const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-hero-radial pt-20 pb-16 md:pt-24 md:pb-24"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.022]"
          style={{ backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1, 0.9, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full pt-6 pb-16 md:pt-10 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ─ Left: Copy ─ */}
          <motion.div
            className="space-y-8"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >

            {/* Headline */}
            <motion.div variants={item} className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-slate-900 leading-[1.08] tracking-tight">
                Build{' '}
                <span className="relative">
                  <span className="gradient-text">Digital</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                    style={{ background: 'linear-gradient(90deg, #2563EB, #60A5FA)' }}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
                {' '}Experiences
                <br className="hidden md:block" />
                {' '}That{' '}
                <span className="text-slate-300">Scale.</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p variants={item} className="text-xl text-slate-600 leading-relaxed max-w-lg">
              We engineer high-performance web apps, AI-powered automation, and premium SaaS platforms — with pixel-perfect design and measurable results.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="#contact" className="btn-primary">
                  Start Your Project
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="#services" className="btn-secondary">
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ─ Right: Hero Image/Logo ─ */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 48, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img 
              src="/logo.png" 
              alt="Growvia Logo" 
              className="w-full max-w-lg object-contain drop-shadow-2xl rounded-full"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.7 }}
      >
        <span className="text-[9px] uppercase tracking-[.2em] font-bold">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}

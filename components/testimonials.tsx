'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStartup Co.',
    company: 'TechStartup Co.',
    content: 'Growvia transformed our entire digital presence. Their expertise in scalable architectures and pixel-perfect design were instrumental in our 300% revenue growth. The team truly acts as a strategic partner, not just a vendor.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    result: '300% Revenue Growth',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, Digital Ventures',
    company: 'Digital Ventures',
    content: 'Working with Growvia was seamless from day one. They delivered not just a web application, but a strategic partnership that elevated our entire brand. The speed and quality of delivery is genuinely unmatched.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    result: '4× Faster Time-to-Market',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Director, Innovation Labs',
    company: 'Innovation Labs',
    content: 'Their AI automation solutions cut our operational costs by 60% within the first quarter. I highly recommend Growvia for any enterprise looking to modernize their tech stack with measurable, lasting results.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    result: '60% Cost Reduction',
  },
]

const slideVars = {
  enter: (d: number) => ({ x: d > 0 ? 140 : -140, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1, zIndex: 1 },
  exit: (d: number) => ({ x: d < 0 ? 140 : -140, opacity: 0, scale: 0.96, zIndex: 0 }),
}

const vp = { once: true, margin: '-60px' }

function StarRow({ n }: { n: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(n)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-blue-500 text-blue-500" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  const next = () => { setDir(1);  setIdx(p => (p + 1) % testimonials.length) }
  const prev = () => { setDir(-1); setIdx(p => (p - 1 + testimonials.length) % testimonials.length) }

  const cur = testimonials[idx]

  return (
    <section className="py-24 md:py-32 bg-[#F1F5F9] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.6) 0%, transparent 70%)' }}
        />
        <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: header */}
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-badge section-badge-blue mb-4">Client Success</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
              Trusted by{' '}
              <span className="gradient-text">Industry Leaders</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              Don&apos;t just take our word for it. Read what our partners have to say about their experience working with our team.
            </p>

            {/* Controls */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.button
                onClick={prev}
                className="w-12 h-12 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={next}
                className="w-12 h-12 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              <div className="flex gap-2 ml-1">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
                    className={`h-2 rounded-full transition-all duration-300 ${i === idx ? 'w-7 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                  />
                ))}
              </div>
            </div>

            {/* Logo strip */}
            <div className="hidden lg:flex items-center gap-6 mt-10 pt-8 border-t border-slate-200">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest shrink-0">Partners</p>
              {['TechStartup Co.', 'Digital Ventures', 'Innovation Labs'].map(c => (
                <div key={c} className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-default">{c}</div>
              ))}
            </div>
          </motion.div>

          {/* Right: card carousel */}
          <div className="relative h-[430px]">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={idx}
                custom={dir}
                variants={slideVars}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: 'spring', stiffness: 280, damping: 28 }, opacity: { duration: 0.22 }, scale: { duration: 0.35 } }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100 h-full flex flex-col justify-between overflow-hidden relative">
                  {/* Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-emerald-400" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <Quote className="w-10 h-10 text-blue-100" />
                      <span className="badge-emerald">{cur.result}</span>
                    </div>
                    <StarRow n={cur.rating} />
                    <p className="mt-5 text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                      &ldquo;{cur.content}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100">
                    <img
                      src={cur.avatar}
                      alt={cur.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
                    />
                    <div>
                      <p className="font-bold text-slate-900">{cur.name}</p>
                      <p className="text-sm text-slate-500">{cur.role}</p>
                    </div>
                    <div className="ml-auto hidden sm:block">
                      <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2 text-center">
                        <p className="text-xl font-black text-blue-600">5.0</p>
                        <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wide">Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden justify-center items-center gap-4 -mt-8">
            <button onClick={prev} className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === idx ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

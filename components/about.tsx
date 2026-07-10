'use client'

import { CheckCircle2, Target, TrendingUp, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  'Performance-first architecture',
  'Clean, typed codebase',
  'Pixel-perfect design',
  'Transparent communication',
  'On-time delivery',
  'Long-term partnership',
]

const vp = { once: true, margin: '-60px' }

export function About() {
  return (
    <section id="about" className="py-20 md:py-24 bg-[#F1F5F9] relative overflow-hidden">
      {/* BG blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 -top-64 w-[700px] h-[700px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)' }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 relative z-10">
        <motion.div
          className="text-center space-y-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Headline & Intro */}
          <div className="space-y-4">
            <span className="section-badge section-badge-blue">About Growvia</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight max-w-2xl mx-auto">
              Building <span className="gradient-text">digital futures</span> with precision.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We are a premium digital engineering studio specializing in modern web development, scalable SaaS architectures, and AI automation — transforming complex business challenges into elegant, high-performing digital products.
            </p>
          </div>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
            {values.map((v, i) => (
              <motion.div
                key={v}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-sm font-semibold text-slate-700">{v}</span>
              </motion.div>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
            {[
              { icon: Target, title: 'Our Mission', desc: 'Empower businesses through innovative technology that drives measurable, sustainable growth.' },
              { icon: TrendingUp, title: 'Our Vision', desc: 'To be the global standard for premium, high-performance digital engineering.' },
            ].map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.title}
                  className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group"
                >
                  <div className="icon-box icon-box-blue w-10 h-10 mb-4 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{card.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <a href="#contact" className="btn-primary">
              Work With Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

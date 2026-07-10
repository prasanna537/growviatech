'use client'

import { Target, Zap, Lightbulb, Shield, Code, Handshake, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const reasons = [
  {
    icon: Target,
    title: 'Business Focused',
    description: 'Every solution is engineered with your bottom line in mind. We measure success by your ROI.',
    badge: null,
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    icon: Zap,
    title: 'Scalable Architecture',
    description: 'Systems designed to handle exponential growth without performance degradation.',
    badge: null,
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'We leverage bleeding-edge technologies and AI to solve complex business problems.',
    badge: 'AI Ready',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols, encryption, and compliance built into every layer.',
    badge: null,
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Code,
    title: 'Clean Codebase',
    description: 'Fully typed, documented, and maintainable source code your team will love.',
    badge: null,
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Handshake,
    title: 'True Partnership',
    description: 'Dedicated support and proactive communication long after launch.',
    badge: 'Always On',
    gradient: 'from-blue-700 to-blue-500',
  },
]

const vp = { once: true, margin: '-60px' }

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-24 bg-[#F1F5F9] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge section-badge-blue mb-4">Why Growvia</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
            The <span className="gradient-text">Standard</span> in Digital Engineering
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We don&apos;t just build websites — we engineer scalable, secure, and beautiful digital products that drive measurable business outcomes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                className="group card-premium p-8 relative overflow-hidden"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 group-hover:from-blue-50/50 to-transparent transition-all duration-500 rounded-[1.5rem]" />

                <div className="relative">
                  {r.badge && (
                    <span className="badge-emerald mb-3">{r.badge}</span>
                  )}
                  {/* Gradient icon box */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${r.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{r.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{r.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom strip */}
        <motion.div
          className="mt-14 card-premium p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div>
            <p className="font-bold text-lg text-slate-900 mb-1">Ready to see the difference?</p>
            <p className="text-slate-600 text-sm">Join 150+ companies who chose Growvia for their digital transformation.</p>
          </div>
          <motion.a
            href="#contact"
            className="btn-primary shrink-0 text-sm"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

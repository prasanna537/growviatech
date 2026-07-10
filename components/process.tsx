'use client'

import { Compass, Brain, Palette, Rocket, TrendingUp, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  { number: '01', icon: Compass,    title: 'Discover',         description: 'Deep-dive sessions to understand your business goals, technical landscape, and user needs.' },
  { number: '02', icon: Brain,      title: 'Strategize',       description: 'A comprehensive roadmap with clear milestones, technology choices, and delivery timelines.' },
  { number: '03', icon: Palette,    title: 'Design & Build',   description: 'Pixel-perfect UI and robust engineering using modern, battle-tested tech stacks.' },
  { number: '04', icon: Rocket,     title: 'Launch',           description: 'Zero-downtime precision deployment with thorough QA and smooth client handoff.' },
  { number: '05', icon: TrendingUp, title: 'Grow',             description: 'Ongoing optimization, analytics-driven improvements, and long-term partnership.' },
]

const vp = { once: true, margin: '-60px' }

export function Process() {
  return (
    <section id="process" className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge section-badge-blue mb-4">Our Methodology</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-slate-600">
            A proven, structured approach to delivering exceptional digital products — on time, every time.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                className="relative group"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="card-premium bg-white p-6 h-full overflow-hidden relative"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                >
                  {/* Step number watermark */}
                  <div className="absolute top-3 right-4 text-5xl font-black text-slate-100 group-hover:text-blue-50 transition-colors select-none leading-none">{step.number}</div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-[1.5rem]" />

                  <div className="relative z-10">
                    <div className="icon-box icon-box-blue w-12 h-12 mb-5 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>

                {/* Connector arrow */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/3 right-0 translate-x-[55%] z-10 items-center">
                    <div className="w-5 h-px bg-slate-300" />
                    <div className="w-1.5 h-1.5 border-t border-r border-slate-300 rotate-45 -ml-px" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-20 relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 p-10 md:p-14">
            {/* Dot grid overlay */}
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />
            {/* Emerald glow accent */}
            <div className="absolute top-6 right-8 w-24 h-24 rounded-full bg-emerald-400/20 blur-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-2">Ready to start?</p>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                  Let&apos;s build something extraordinary.
                </h3>
                <p className="text-blue-100">Your vision + our expertise = measurable results.</p>
              </div>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors shadow-xl shrink-0 text-sm"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Get a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

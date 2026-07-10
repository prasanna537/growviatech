'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary by scope. A landing page takes 2–3 weeks; a full SaaS platform takes 2–4 months. We provide a detailed roadmap with milestones during the initial discovery phase.',
  },
  {
    q: 'What is your technology stack?',
    a: 'We specialize in React, Next.js, TypeScript, and Tailwind CSS for the frontend, and Node.js, Python, and PostgreSQL for the backend — plus AI integration using LLM APIs and automation platforms.',
  },
  {
    q: 'Do you offer ongoing support and maintenance?',
    a: 'Yes — we offer comprehensive post-launch support packages including performance monitoring, security updates, bug fixes, and feature enhancements to keep your product growing.',
  },
  {
    q: 'How do you handle project communication?',
    a: 'You get a dedicated project manager, access to a shared Slack/Discord workspace, and weekly progress updates with sprint reviews so you\'re always in the loop.',
  },
  {
    q: 'Can you integrate AI into our existing platform?',
    a: 'Absolutely. We analyze your current workflows and integrate AI features — intelligent chatbots, data analysis pipelines, automated content generation — tailored to your stack.',
  },
  {
    q: 'Do you work with early-stage startups?',
    a: 'Yes! From MVPs to enterprise migrations, we work with companies at every stage. Our Starter plan is specifically designed for startups building their first digital product.',
  },
]

const vp = { once: true, margin: '-60px' }

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)' }}
        />
      </div>

      <div className="mx-auto max-w-3xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge section-badge-blue mb-4">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-slate-600">Everything you need to know about working with us.</p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-colors duration-200 ${
                  isOpen ? 'border-blue-300 bg-blue-50/30' : 'border-slate-200 bg-white hover:border-blue-200'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none gap-4"
                >
                  <span className={`text-base font-bold pr-4 transition-colors ${isOpen ? 'text-blue-700' : 'text-slate-900'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                    isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm pt-0 border-t border-blue-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-slate-600 mb-4">Still have questions? We&apos;re here to help.</p>
          <motion.a
            href="#contact"
            className="btn-primary inline-flex"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Ask Us Anything
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { Check, Sparkles, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses building their first digital presence.',
    price: '$2,500',
    period: '/project',
    features: ['Custom Landing Page', 'Mobile Responsive Design', 'Basic SEO Setup', 'Contact Form Integration', '1 Month Support'],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    description: 'Ideal for growing companies that need advanced features & performance.',
    price: '$7,500',
    period: '/project',
    features: ['Multi-page Web Application', 'CMS Integration', 'Advanced SEO Strategy', 'Performance Optimization', 'Analytics Setup', '3 Months Support'],
    popular: true,
    cta: 'Start Building',
  },
  {
    name: 'Enterprise',
    description: 'Custom scalable architectures for large organizations and SaaS platforms.',
    price: 'Custom',
    period: '',
    features: ['Complex Web Applications', 'AI Automation Workflows', 'Custom API Development', 'Enterprise-grade Security', 'Dedicated Account Manager', '24/7 SLA Support'],
    popular: false,
    cta: 'Contact Sales',
  },
]

const vp = { once: true, margin: '-60px' }

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#F1F5F9] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge section-badge-blue mb-4">Pricing Plans</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
            Transparent pricing for{' '}
            <span className="gradient-text">every stage</span>
          </h2>
          <p className="text-lg text-slate-600">
            No hidden fees — just real value. Choose the plan that fits your growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-3xl p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'bg-white border-blue-400 shadow-2xl shadow-blue-500/10 md:scale-105 z-10'
                  : 'bg-white border-slate-200 shadow-lg z-0 hover:border-blue-200 hover:shadow-xl'
              }`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: plan.popular ? -4 : -6 }}
            >
              {/* Popular badge (Emerald!) */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-emerald-500/30">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Blue top accent on popular */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-gradient rounded-t-3xl" />
              )}

              <div className="text-center mb-7 pt-2">
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-6 min-h-[40px]">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl lg:text-5xl font-black ${plan.popular ? 'gradient-text' : 'text-slate-900'}`}>{plan.price}</span>
                  {plan.period && <span className="text-slate-400 font-medium">{plan.period}</span>}
                </div>
              </div>

              <motion.a
                href="#contact"
                className={`w-full py-3.5 rounded-xl font-bold mb-7 transition-all text-center text-sm block ${
                  plan.popular
                    ? 'btn-primary'
                    : 'bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border hover:border-blue-200'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.a>

              <div className="space-y-3.5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">What&apos;s included</p>
                {plan.features.map(f => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? 'text-emerald-500' : 'text-blue-500'}`} />
                    <span className="text-sm text-slate-700 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ teaser */}
        <motion.p
          className="text-center text-sm text-slate-500 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ delay: 0.4 }}
        >
          Have questions?{' '}
          <a href="#contact" className="text-blue-600 font-semibold hover:underline">
            Talk to our team →
          </a>
        </motion.p>
      </div>
    </section>
  )
}

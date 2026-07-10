'use client'

import { useState } from 'react'
import { Globe, Code2, Zap, TrendingUp, RotateCw, X, Check, Sparkles, LayoutTemplate } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Beautiful, fast, and responsive websites that convert visitors into loyal customers.',
    badge: 'Most Requested',
    badgeColor: 'emerald',
    details: {
      subTitle: 'Modern Web Engineering',
      overview: 'We build websites that are visually stunning, lightning-fast, and optimized for maximum conversions using Next.js and Tailwind CSS — clean architecture that scales with your growth.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      deliverables: ['Marketing & Landing Pages', 'Corporate & Portfolio Sites', 'CMS Integrated Systems', 'Fully Responsive Layouts'],
      benefits: ['Load times under 0.5 seconds', '99+ Lighthouse score', 'SEO-first semantic markup', 'Custom micro-animations'],
    },
  },
  {
    icon: Code2,
    title: 'Custom Web Applications',
    description: 'Scalable web apps built with modern tech stacks, built for performance and security.',
    badge: 'SaaS Ready',
    badgeColor: 'blue',
    details: {
      subTitle: 'Tailored SaaS & Platform Solutions',
      overview: 'From interactive dashboards to complex SaaS architectures, we build custom applications engineered for high performance, security, and rich user experiences.',
      tech: ['React / Next.js', 'Node.js', 'PostgreSQL', 'REST / GraphQL', 'Prisma ORM'],
      deliverables: ['SaaS Platforms', 'Admin Dashboards', 'Client Portals', 'Workflow Tools'],
      benefits: ['Secure authentication', 'Serverless deployment', 'Sub-100ms API latency', 'Optimized data pipelines'],
    },
  },
  {
    icon: Zap,
    title: 'AI Automation',
    description: 'Intelligent workflows that eliminate manual effort and multiply your team\'s output.',
    badge: 'AI Powered',
    badgeColor: 'emerald',
    details: {
      subTitle: 'Intelligent Business Automation',
      overview: 'Integrate AI into your operations with smart pipelines that reduce manual effort, speed up responses, and scale your output — from chatbots to CRM automation.',
      tech: ['LLM Integration', 'Python', 'Zapier / Make', 'LangChain', 'Flow Engineering'],
      deliverables: ['Custom AI Chatbots', 'Auto-responder Pipelines', 'CRM Automation', 'Report Generators'],
      benefits: ['Reduce manual work by 80%', '24/7 instant responses', 'Minimize data errors', 'CRM integrations'],
    },
  },
  {
    icon: TrendingUp,
    title: 'SEO & Performance',
    description: 'Maximize your search visibility and site speed with data-driven optimization.',
    badge: null,
    badgeColor: 'blue',
    details: {
      subTitle: 'Organic Growth & Velocity',
      overview: 'Boost visibility on search engines and improve user experience through technical SEO, speed optimization, and analytics that drive real conversions.',
      tech: ['Core Web Vitals', 'Schema Markup', 'Semantic HTML', 'CDN / Caching', 'Google Analytics'],
      deliverables: ['Site Speed Audits', 'Schema Integrations', 'Keyword Strategy', 'Analytics Reports'],
      benefits: ['Higher search ranking', 'Lighthouse optimization', 'Lower bounce rates', 'Increased organic traffic'],
    },
  },
  {
    icon: RotateCw,
    title: 'Website Modernization',
    description: 'Transform legacy platforms into fast, modern, and maintainable digital products.',
    badge: null,
    badgeColor: 'blue',
    details: {
      subTitle: 'Tech Stack Revitalisation',
      overview: 'Migrate legacy websites to modern React architectures without downtime — rebuilding old platforms into fast, secure, and developer-friendly systems.',
      tech: ['Next.js Rebuilds', 'API Adaptors', 'Tailwind Styling', 'Cloud Hosting', 'Stack Migration'],
      deliverables: ['WordPress → React', 'Design Facelift', 'API Decoupling', 'Zero-Downtime Deploy'],
      benefits: ['Lower hosting costs', 'Remove plugin bloat', 'Robust architecture', 'Easy maintenance'],
    },
  },
  {
    icon: LayoutTemplate,
    title: 'Wordpress Development',
    description: 'Custom WordPress themes, plugins, and headless setups tailored to your business needs.',
    badge: null,
    badgeColor: 'blue',
    details: {
      subTitle: 'Scalable Content Management',
      overview: 'We build fast, secure, and scalable WordPress websites. Whether you need a custom theme, complex plugin integration, or a headless architecture, our solutions empower your content strategy.',
      tech: ['WordPress', 'PHP', 'React', 'Gutenberg', 'MySQL'],
      deliverables: ['Custom Themes', 'Plugin Development', 'Headless Setup', 'Site Migration'],
      benefits: ['Easy content management', 'SEO optimized', 'Secure architecture', 'Scalable performance'],
    },
  },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const cardItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const viewport = { once: true, margin: '-60px' }

export function Services() {
  const [selected, setSelected] = useState<typeof services[0] | null>(null)

  const scrollToContact = () => {
    setSelected(null)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="services" className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge section-badge-blue mb-4">What We Deliver</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight text-balance">
            Services built for{' '}
            <span className="gradient-text">measurable growth</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            From stunning websites to AI-powered workflows — comprehensive digital solutions tailored to your business, designed with precision.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                variants={cardItem}
                className="group card-premium p-8 cursor-pointer relative overflow-hidden"
                onClick={() => setSelected(svc)}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                {/* Hover gradient layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/60 group-hover:to-transparent transition-all duration-500 rounded-[1.5rem]" />

                <div className="relative">
                  {/* Badge */}
                  {svc.badge && (
                    <span className={`badge-${svc.badgeColor === 'emerald' ? 'emerald' : 'blue'} mb-4 ${svc.badgeColor === 'blue' ? '!bg-blue-50 !text-blue-700 !border-blue-200' : ''}`}>
                      <Sparkles className="w-2.5 h-2.5" />{svc.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <motion.div
                    className="icon-box icon-box-blue w-14 h-14 mb-5"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>

                  <h3 className="font-bold text-xl text-slate-900 mb-3">{svc.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{svc.description}</p>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                    Learn More
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.3, repeat: Infinity }}
                    >→</motion.span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            <motion.div
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ type: 'spring', duration: 0.45 }}
            >
              {/* Accent bar */}
              <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500" />

              <div className="p-8">
                {/* Close */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 icon-box icon-box-blue flex-shrink-0">
                    <selected.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">{selected.details.subTitle}</p>
                    <h3 className="text-2xl font-extrabold text-slate-900">{selected.title}</h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">{selected.details.overview}</p>

                {/* Tech pills */}
                <div className="mb-6">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.details.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {[
                    { label: 'Deliverables', items: selected.details.deliverables },
                    { label: 'Key Benefits', items: selected.details.benefits },
                  ].map(col => (
                    <div key={col.label}>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{col.label}</p>
                      <ul className="space-y-2">
                        {col.items.map(it => (
                          <li key={it} className="flex items-start gap-2.5 text-sm text-slate-700">
                            <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 pt-5 border-t border-slate-100">
                  <button
                    onClick={scrollToContact}
                    className="flex-1 btn-primary text-sm py-3 rounded-xl"
                  >
                    Start Your Project
                  </button>
                  <button
                    onClick={() => setSelected(null)}
                    className="px-5 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold text-sm hover:bg-slate-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ALL = 'All'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce solution with AI-powered recommendations and a seamless multi-step checkout flow.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    result: '+140% conversion',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Data Analytics Dashboard',
    category: 'SaaS',
    description: 'Real-time analytics dashboard with complex D3.js visualizations for enterprise-grade data teams.',
    tags: ['React', 'D3.js', 'PostgreSQL'],
    result: '10× faster insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Fintech Mobile App',
    category: 'App Development',
    description: 'Cross-platform personal finance app with investment tracking, budgeting, and automated savings.',
    tags: ['React Native', 'Firebase', 'Plaid'],
    result: '50K+ active users',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Healthcare Portal',
    category: 'Web Development',
    description: 'Secure patient portal for appointment scheduling, health records, and live tele-health sessions.',
    tags: ['Next.js', 'Node.js', 'WebRTC'],
    result: '99.9% uptime',
    image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e9e9c?auto=format&fit=crop&q=80&w=800',
  },
]

const vp = { once: true, margin: '-60px' }

export function Projects() {
  const [active, setActive] = useState(ALL)
  const categories = [ALL, ...Array.from(new Set(projects.map(p => p.category)))]
  const filtered = active === ALL ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <span className="section-badge section-badge-blue mb-4">Selected Work</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Projects that{' '}
              <span className="gradient-text">speak results</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We partner with ambitious companies to build impactful digital products. Here are a few we&apos;re proud of.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-250 ${
                  active === cat
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, type: 'spring' }}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-5 border border-slate-100 shadow-sm">
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Overlays */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="bg-white/95 backdrop-blur-sm text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm border border-white/60">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-5 right-5 z-20">
                    <span className="badge-emerald">
                      {project.result}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

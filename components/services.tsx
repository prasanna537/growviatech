'use client'

import { useState } from 'react'
import { Globe, Code2, Zap, TrendingUp, RotateCw, X, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, staggerItem, cardHover, viewportOnce } from '@/lib/motion'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Beautiful, fast, and responsive websites that convert visitors into customers.',
    details: {
      subTitle: 'Modern Web Engineering',
      overview: 'We build websites that are visually stunning, lightning-fast, and optimized for maximum conversions. Using the latest Next.js and Tailwind CSS frameworks, we deliver clean architecture that scales with your growth.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      deliverables: [
        'Marketing & Landing Pages',
        'Corporate & Portfolio Sites',
        'CMS Integrated Web Systems',
        'Fully Responsive Layouts'
      ],
      benefits: [
        'Load times under 0.5 seconds',
        '100/100 Lighthouse performance',
        'SEO-first semantic markup',
        'Custom interactive micro-animations'
      ]
    }
  },
  {
    icon: Code2,
    title: 'Custom Web Applications',
    description: 'Scalable web apps built with the latest technologies and best practices.',
    details: {
      subTitle: 'Tailored SaaS & Platform Solutions',
      overview: 'From interactive client dashboards to robust SaaS architectures, we build custom applications engineered for high performance, maximum security, and rich user experiences.',
      tech: ['React / Next.js', 'Node.js / Express', 'PostgreSQL', 'REST / GraphQL APIs', 'Prisma ORM'],
      deliverables: [
        'SaaS Platforms',
        'Interactive Admin Dashboards',
        'Client Portals',
        'Custom Workflow Tools'
      ],
      benefits: [
        'Secure token authentication',
        'Scalable serverless deployment',
        'Sub-100ms API response latency',
        'Optimized data workflows'
      ]
    }
  },
  {
    icon: Zap,
    title: 'AI Automation',
    description: 'Intelligent automation solutions that streamline your business processes.',
    details: {
      subTitle: 'Intelligent Business Automation',
      overview: 'Integrate artificial intelligence into your daily operations. We build smart workflows and automated pipelines that reduce manual effort, speed up responses, and scale your output.',
      tech: ['LLM Integration', 'Python', 'Zapier / Make', 'LangChain', 'Flow Engineering'],
      deliverables: [
        'Custom Chatbots & Assistants',
        'Auto-responder Pipelines',
        'CRM & Database Automation',
        'Automated Report Generators'
      ],
      benefits: [
        'Reduce manual labor by up to 80%',
        '24/7 instant client support response',
        'Minimize data entry errors',
        'Easily integrate with existing CRMs'
      ]
    }
  },
  {
    icon: TrendingUp,
    title: 'SEO & Performance',
    description: 'Optimize your online presence for maximum visibility and speed.',
    details: {
      subTitle: 'Organic Growth & Velocity',
      overview: 'Boost your visibility on search engines and improve user experience. We optimize your website speed, implement technical SEO best practices, and build organic channels that drive conversions.',
      tech: ['Core Web Vitals', 'Schema Markup', 'Semantic HTML', 'CDN / Caching', 'Google Analytics'],
      deliverables: [
        'Site Speed Audits & Optimizations',
        'Semantic Schema Integrations',
        'Keyword Strategy Planning',
        'Analytics Setup & Reports'
      ],
      benefits: [
        'Higher search ranking position',
        'Lighthouse performance optimization',
        'Lower page bounce rates',
        'Increased organic acquisition'
      ]
    }
  },
  {
    icon: RotateCw,
    title: 'Website Modernization',
    description: 'Transform legacy systems into modern, efficient digital solutions.',
    details: {
      subTitle: 'Tech Stack Revitalisation',
      overview: 'Migrate legacy websites or custom applications to modern front-end technologies without downtime. We rebuild old platforms into fast, secure, and modern React architectures.',
      tech: ['Stack Migration', 'Next.js React Rebuilds', 'API Adaptors', 'Tailwind Styling', 'Cloud Hosting'],
      deliverables: [
        'WordPress to React Migration',
        'Visual Design Facelift',
        'API & Database decoupling',
        'Zero-Downtime Deployments'
      ],
      benefits: [
        'Significant hosting cost reduction',
        'Remove complex plugins & bloat',
        'Robust, secure architecture',
        'Easiest developer maintenance'
      ]
    }
  }
]

interface ServiceDetail {
  subTitle: string
  overview: string
  tech: string[]
  deliverables: string[]
  benefits: string[]
}

interface Service {
  icon: any
  title: string
  description: string
  details: ServiceDetail
}

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const handleStartProject = () => {
    setSelectedService(null)
    const element = document.getElementById('contact')
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="services" className="py-40 md:py-72 bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/4 top-0 w-[500px] h-[300px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(ellipse, hsl(21 54% 54% / 0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2 variants={staggerItem} className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-balance">
            What We <span className="text-primary">Deliver</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted leading-relaxed text-pretty font-light">
            Comprehensive digital solutions tailored to your business needs, designed with precision and built for performance.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                className="group relative cursor-pointer"
                variants={staggerItem}
                whileHover="hover"
                initial="rest"
                animate="rest"
                onClick={() => setSelectedService(service)}
              >
                <motion.div
                  className="relative p-8 bg-card border border-border rounded-2xl h-full overflow-hidden card-gradient-border"
                  variants={cardHover}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <motion.div
                      className="mb-6 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.15, backgroundColor: 'hsl(21 54% 54%)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <h3 className="font-bold text-xl text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted leading-relaxed text-base font-light">{service.description}</p>
                    <div className="mt-6 pt-6 border-t border-border">
                      <span className="text-sm text-primary font-semibold flex items-center gap-1 group/btn hover:text-primary/80 transition-colors">
                        Learn More
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Modern Detailed Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            {/* Modal backdrop closer */}
            <motion.div
              className="absolute inset-0 cursor-default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            />

            <motion.div
              className="relative w-full max-w-2xl bg-card border border-border rounded-3xl shadow-2xl p-8 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
              <div className="absolute top-6 right-6">
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-full bg-secondary hover:bg-border text-muted hover:text-foreground transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {(() => {
                    const Icon = selectedService.icon
                    return <Icon className="w-7 h-7 text-primary" />
                  })()}
                </div>
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-1">
                    {selectedService.details.subTitle}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-6 font-light">
                {selectedService.details.overview}
              </p>

              {/* Technologies Pills */}
              <div className="mb-6">
                <p className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {selectedService.details.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {/* Deliverables */}
                <div>
                  <p className="text-xs font-bold text-muted uppercase tracking-wider mb-3">Typical Deliverables</p>
                  <ul className="space-y-2">
                    {selectedService.details.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground font-light">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <p className="text-xs font-bold text-muted uppercase tracking-wider mb-3">Key Benefits</p>
                  <ul className="space-y-2">
                    {selectedService.details.benefits.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground font-light">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer / Actions */}
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <button
                  onClick={handleStartProject}
                  className="flex-1 bg-primary text-primary-foreground py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-colors text-sm text-center"
                >
                  Start Your Project
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3.5 bg-secondary text-foreground rounded-full font-semibold hover:bg-border transition-colors text-sm"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

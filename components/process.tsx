'use client'

import { Compass, Brain, Palette, Rocket, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, cardHover, viewportOnce } from '@/lib/motion'

const steps = [
  {
    number: '01',
    icon: Compass,
    title: 'Discover',
    description: 'We understand your business, goals, and challenges through in-depth discovery sessions.'
  },
  {
    number: '02',
    icon: Brain,
    title: 'Strategize',
    description: 'We develop a comprehensive strategy and roadmap tailored to your unique needs.'
  },
  {
    number: '03',
    icon: Palette,
    title: 'Design & Develop',
    description: 'Our team creates beautiful designs and builds robust solutions with cutting-edge technology.'
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description: 'We launch your project with precision and provide full support for a smooth rollout.'
  },
  {
    number: '05',
    icon: TrendingUp,
    title: 'Grow',
    description: 'We continue to optimize and enhance your solution to maximize growth and success.'
  }
]

export function Process() {
  return (
    <section id="process" className="py-12 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#EFE9E0' }}>
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-0 bottom-0 w-96 h-96 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, hsl(21 54% 54% / 0.06) 0%, transparent 70%)' }}
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
          <motion.div variants={staggerItem} className="inline-block mb-6">
            <span className="px-4 py-2 bg-secondary border border-border rounded-full text-sm font-medium text-muted-foreground">
              Our Approach
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-balance">
            Our <span className="text-primary">Process</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted leading-relaxed text-pretty font-light">
            A structured approach to delivering exceptional results every time.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                className="relative group"
                variants={staggerItem}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.div
                  className="relative p-8 bg-card border border-border rounded-2xl h-full overflow-hidden card-gradient-border cursor-default"
                  variants={cardHover}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <motion.div
                      className="text-2xl font-bold text-primary/30 mb-4"
                      variants={{
                        rest: { y: 0, scale: 1 },
                        hover: { y: -2, scale: 1.05, color: 'rgba(217, 119, 6, 0.5)' }
                      }}
                    >
                      {step.number}
                    </motion.div>
                    <motion.div
                      className="mb-6 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.15, backgroundColor: 'hsl(21 54% 54%)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <h3 className="font-bold text-xl text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted leading-relaxed text-sm">{step.description}</p>
                  </div>
                </motion.div>

                {/* Connection line - hidden on mobile and last item */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/3 right-0 w-6 h-0.5 transform translate-x-full z-20"
                    style={{ background: 'linear-gradient(to right, hsl(21 54% 54% / 0.3), transparent)' }}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={viewportOnce}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  />
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { Target, Zap, Handshake, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, cardHover, viewportOnce } from '@/lib/motion'

const reasons = [
  {
    icon: Target,
    title: 'Business Focused',
    description: 'Every solution is designed with your business goals at the core of our strategy.'
  },
  {
    icon: Zap,
    title: 'Scalable Solutions',
    description: 'We build systems that grow with your business, handling increased demands effortlessly.'
  },
  {
    icon: Lightbulb,
    title: 'Performance First',
    description: 'Speed, efficiency, and optimal performance are non-negotiable in everything we deliver.'
  },
  {
    icon: Zap,
    title: 'Modern Technology',
    description: 'We stay ahead of the curve with cutting-edge technologies and industry best practices.'
  },
  {
    icon: Handshake,
    title: 'Long-Term Partnership',
    description: 'We&apos;re invested in your success and committed to ongoing support and optimization.'
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-12 md:py-24 bg-background relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-1/4 bottom-0 w-[600px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse, hsl(21 54% 54% / 0.1) 0%, transparent 70%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-3xl mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div variants={staggerItem} className="inline-block mb-6">
            <span className="px-4 py-2 bg-secondary border border-border rounded-full text-sm font-medium text-muted-foreground">
              Why Growvia
            </span>
          </motion.div>
          <motion.h2 variants={staggerItem} className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-balance">
            Why Choose <span className="text-primary">Growvia</span>
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted leading-relaxed text-pretty font-light">
            We deliver premium digital solutions that drive real business results.
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                className="group relative"
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
                      className="mb-6 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.15, backgroundColor: 'hsl(21 54% 54%)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                      <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                    <h3 className="font-bold text-xl text-foreground mb-3">{reason.title}</h3>
                    <p className="text-muted leading-relaxed text-sm md:text-base">{reason.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, slideRight, staggerContainer, staggerItem, cardHover, viewportOnce } from '@/lib/motion'

const values = [
  {
    title: 'Innovation',
    description: 'Cutting-edge technology and creative solutions'
  },
  {
    title: 'Quality',
    description: 'Meticulous attention to every detail'
  },
  {
    title: 'Partnership',
    description: 'Collaborative approach to your success'
  },
  {
    title: 'Excellence',
    description: 'Premium standards in everything we do'
  }
]

export function About() {
  return (
    <section id="about" className="py-12 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#EFE9E0' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-0 top-1/4 w-96 h-96 rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, hsl(21 54% 54% / 0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="space-y-12 md:space-y-16">
          {/* Header */}
          <motion.div
            className="max-w-4xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={staggerItem} className="inline-block mb-6">
              <span className="px-4 py-2 bg-secondary border border-border rounded-full text-sm font-medium text-muted-foreground">
                About Us
              </span>
            </motion.div>
            <motion.h2
              variants={staggerItem}
              className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-balance leading-tight"
            >
              Technology with <span className="text-primary italic">Purpose</span>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-xl text-muted leading-relaxed text-pretty font-light max-w-2xl"
            >
              At Growvia, we believe that technology should empower businesses to achieve their goals. With over a decade of combined experience, our team transforms digital challenges into opportunities for growth and innovation.
            </motion.p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.div
                  className="group relative p-8 bg-card border border-border rounded-2xl overflow-hidden card-gradient-border cursor-default"
                  variants={cardHover}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-start gap-5">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

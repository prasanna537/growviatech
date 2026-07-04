'use client'

import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, cardHover, viewportOnce } from '@/lib/motion'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStartup Co.',
    content: 'Growvia transformed our entire digital presence. The team&apos;s expertise and dedication were instrumental in our 300% growth.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Founder, Digital Ventures',
    content: 'Working with Growvia was seamless. They delivered not just a product, but a strategic partnership that elevated our brand.',
    rating: 5
  },
  {
    name: 'Emma Williams',
    role: 'Director, Innovation Labs',
    content: 'Their AI automation solution cut our operational costs in half. Highly recommend for any serious growth initiative.',
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 bg-secondary/30 border-t border-border relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted leading-relaxed text-pretty font-light">
            What our partners say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={staggerItem}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                className="p-8 bg-card border border-border rounded-3xl h-full overflow-hidden card-gradient-border cursor-default flex flex-col justify-between"
                variants={cardHover}
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={viewportOnce}
                        transition={{ delay: 0.15 + index * 0.1 + i * 0.05, type: 'spring', stiffness: 300 }}
                      >
                        <Star className="w-4 h-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <p className="text-foreground leading-relaxed mb-6 text-pretty font-light">&quot;{testimonial.content}&quot;</p>
                </div>
                
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted font-light">{testimonial.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

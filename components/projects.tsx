'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, cardHover, viewportOnce } from '@/lib/motion'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce solution with AI-powered recommendations',
    tags: ['React', 'Node.js', 'AI', 'PostgreSQL']
  },
  {
    title: 'Automation Suite',
    category: 'AI Automation',
    description: 'Intelligent workflow automation reducing manual work by 70%',
    tags: ['Python', 'AI', 'APIs', 'Automation']
  },
  {
    title: 'Mobile App',
    category: 'App Development',
    description: 'Cross-platform mobile application for financial management',
    tags: ['React Native', 'Firebase', 'Design', 'Mobile']
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24 bg-secondary/30 border-t border-border relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2 variants={staggerItem} className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Featured Projects
          </motion.h2>
          <motion.p variants={staggerItem} className="text-lg text-muted leading-relaxed text-pretty font-light">
            Showcasing our latest work and successful partnerships.
          </motion.p>
        </motion.div>

        {/* Projects List */}
        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <motion.div
                className="group bg-card border border-border rounded-3xl overflow-hidden card-gradient-border cursor-default p-8"
                variants={cardHover}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-muted leading-relaxed text-pretty max-w-2xl font-light">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    className="h-48 md:h-56 md:w-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-border flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <motion.div
                        className="text-primary text-4xl font-bold mb-2"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
                      >
                        {index + 1}
                      </motion.div>
                      <p className="text-muted text-sm font-light">Project Showcase</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

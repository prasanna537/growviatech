'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Share2, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'
import { viewportOnce } from '@/lib/motion'

export function Footer() {
  return (
    <motion.footer
      className="border-t border-border bg-secondary/30 relative overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <motion.img
                src="/logo.png"
                alt="GrowviaTech Logo"
                className="h-7 w-auto object-contain mix-blend-multiply rounded-md"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              />
              <span className="font-bold text-lg text-foreground tracking-tight">GrowviaTech</span>
            </div>
            <p className="text-muted text-sm font-light">Growing businesses through innovative digital solutions.</p>
            <div className="flex gap-4">
              <motion.div whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link href="#" className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all">
                  <Share2 className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link href="#" className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all">
                  <MessageSquare className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Process', 'Projects'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-muted hover:text-primary transition-colors text-sm font-light animated-underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Web Development', href: '#services' },
                { label: 'AI Automation', href: '#services' },
                { label: 'SEO & Performance', href: '#services' },
                { label: 'Modernization', href: '#services' },
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-muted hover:text-primary transition-colors text-sm font-light animated-underline"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted text-sm font-light">
                <Mail className="w-4 h-4 text-primary" />
                <Link href="mailto:hellogrowviatech@gmail.com" className="hover:text-primary transition-colors">
                  hellogrowviatech@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-2 text-muted text-sm font-light">
                <Phone className="w-4 h-4 text-primary" />
                <Link href="tel:+918825561687" className="hover:text-primary transition-colors">
                  +91 88255 61687
                </Link>
              </li>
              <li className="flex items-start gap-2 text-muted text-sm font-light">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Coimbatore, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-muted text-sm font-light">
              &copy; {new Date().getFullYear()} Growvia. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-muted hover:text-primary transition-colors text-sm font-light animated-underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted hover:text-primary transition-colors text-sm font-light animated-underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

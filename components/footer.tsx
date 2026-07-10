'use client'

import Link from 'next/link'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

const svcLinks = [
  'Website Development',
  'Web Applications',
  'AI Automation',
  'SEO & Performance',
  'Modernization',
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400 overflow-hidden">
      {/* CTA Banner */}
      <div className="relative py-14 px-6 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        {/* Emerald accent glow */}
        <div className="absolute top-4 right-12 w-32 h-32 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-emerald">Now Accepting Projects</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1">
              Ready to transform your digital presence?
            </h3>
            <p className="text-blue-100 text-sm">Let&apos;s build something remarkable together.</p>
          </div>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors shadow-xl shrink-0 text-sm"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="#home" className="inline-flex items-center bg-white px-4 py-2.5 rounded-2xl border border-slate-800 shadow-sm w-fit overflow-hidden">
              <div className="relative overflow-hidden h-6 w-28">
                <img
                  src="/logo.png"
                  alt="GrowviaTech Logo"
                  className="absolute w-auto max-w-none h-[220%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              We engineer scalable, secure, and beautiful digital products that drive measurable business outcomes for companies worldwide.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:hello@growvia.tech" className="flex items-center gap-2.5 text-sm hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />hello@growvia.tech
              </a>
              <a href="tel:+918825561687" className="flex items-center gap-2.5 text-sm hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />+91 88255 61687
              </a>
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />Coimbatore, Tamil Nadu, India
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-2.5">
              {[
                { label: 'Twitter', d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
                { label: 'LinkedIn', d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z' },
                { label: 'GitHub', d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all text-slate-400">
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors animated-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {svcLinks.map(s => (
                <li key={s}>
                  <Link href="#services" className="text-sm text-slate-400 hover:text-blue-400 transition-colors animated-underline">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500">&copy; {year} Growvia Tech. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-xs">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors text-xs">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

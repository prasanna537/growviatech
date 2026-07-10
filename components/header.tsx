'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const navLinks = [
  { href: '#home',     label: 'Home' },
  { href: '#about',    label: 'About' },
  { href: '#process',  label: 'Process' },
  { href: '#services', label: 'Services' },
  { href: '#contact',  label: 'Contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 20))

  return (
    <motion.header
      className="fixed top-0 z-50 w-full"
      animate={scrolled ? 'scrolled' : 'top'}
      variants={{
        top: {
          backgroundColor: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(12px)',
          borderBottomColor: 'rgba(226,232,240,1)',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
        },
        scrolled: {
          backgroundColor: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(24px)',
          borderBottomColor: 'rgba(226,232,240,1)',
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
        },
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderBottomWidth: '1px', borderBottomStyle: 'solid' }}
    >
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="#home" className="inline-flex items-center shrink-0" onClick={() => setMenuOpen(false)}>
          <div className="relative overflow-hidden h-6 w-28">
            <img
              src="/logo.png"
              alt="GrowviaTech Logo"
              className="absolute w-auto max-w-none h-[220%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_24px_rgba(37,99,235,0.45)] transition-shadow"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors text-slate-700"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={menuOpen ? 'x' : 'm'}
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.18 }}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile"
            className="md:hidden border-t border-slate-100 bg-white/96 backdrop-blur-xl overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto max-w-7xl px-6 py-5 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 + 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26 }}
                className="pt-3 border-t border-slate-100"
              >
                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-blue-600/20 w-full"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

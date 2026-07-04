'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { mobileMenu } from '@/lib/motion'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20)
  })

  // Close menu on route change / link click
  const handleNavClick = () => setIsMenuOpen(false)

  return (
    <motion.header
      className="fixed top-0 z-50 w-full"
      animate={scrolled ? 'scrolled' : 'top'}
      variants={{
        top: {
          backgroundColor: 'rgba(239,233,224,0)',
          backdropFilter: 'blur(0px)',
          borderBottomColor: 'hsl(36 40% 83% / 0)',
          boxShadow: 'none',
        },
        scrolled: {
          backgroundColor: 'rgba(239,233,224,0.88)',
          backdropFilter: 'blur(20px)',
          borderBottomColor: 'hsl(36 40% 83% / 0.6)',
          boxShadow: '0 1px 24px 0 rgba(0,0,0,0.06)',
        },
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderBottomWidth: '1px', borderBottomStyle: 'solid' }}
    >
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity group" onClick={handleNavClick}>
          <motion.img
            src="/logo.png"
            alt="GrowviaTech Logo"
            className="h-8 w-auto object-contain mix-blend-multiply rounded-lg"
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          />
          <span className="font-bold text-xl text-foreground tracking-tight">GrowviaTech</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-foreground hover:text-primary px-4 py-2 rounded-lg hover:bg-secondary transition-all animated-underline"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg glow-primary-hover group"
            >
              Start a Project
              <motion.span
                className="inline-flex"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Toggle mobile menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <motion.span
              className="h-0.5 bg-foreground rounded-full block"
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            />
            <motion.span
              className="h-0.5 bg-foreground rounded-full block"
              animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-0.5 bg-foreground rounded-full block"
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl overflow-hidden"
            variants={mobileMenu}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={handleNavClick}
                    className="block text-sm text-foreground hover:text-primary px-4 py-3 rounded-xl hover:bg-secondary transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Link
                  href="#contact"
                  onClick={handleNavClick}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all w-full justify-center mt-2"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

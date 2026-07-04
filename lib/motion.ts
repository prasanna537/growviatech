import type { Variants } from 'framer-motion'

// ─── Fade / Reveal Variants ────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Stagger Container ─────────────────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Card Hover ────────────────────────────────────────────────────────────

export const cardHover: Variants = {
  rest: { scale: 1, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)' },
  hover: {
    scale: 1.03,
    boxShadow: '0 16px 48px 0 rgba(0,0,0,0.12)',
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Navbar ───────────────────────────────────────────────────────────────

export const navbarVariants: Variants = {
  top: {
    backgroundColor: 'rgba(255,255,255,0)',
    backdropFilter: 'blur(0px)',
    borderBottomColor: 'rgba(0,0,0,0)',
  },
  scrolled: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    backdropFilter: 'blur(16px)',
    borderBottomColor: 'rgba(0,0,0,0.08)',
  },
}

// ─── Mobile Menu ───────────────────────────────────────────────────────────

export const mobileMenu: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
  },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Hero Text ─────────────────────────────────────────────────────────────

export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Floating Blob ─────────────────────────────────────────────────────────

export const floatBlob: Variants = {
  animate: {
    y: [0, -24, 0],
    x: [0, 12, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const floatBlobAlt: Variants = {
  animate: {
    y: [0, 20, 0],
    x: [0, -16, 0],
    scale: [1, 0.96, 1],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 2,
    },
  },
}

// ─── View config ───────────────────────────────────────────────────────────

export const viewportOnce = { once: true, margin: '-80px' }

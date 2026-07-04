'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, fadeUp, viewportOnce } from '@/lib/motion'

export function ContactCTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('idle')
    setErrorMessage('')

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY

    if (!accessKey) {
      const errorMsg = 'Web3Forms Access Key (VITE_WEB3FORMS_KEY) is missing. Please check your environment variables.'
      console.error(errorMsg)
      setStatus('error')
      setErrorMessage(errorMsg)
      return
    }

    // Validate required fields
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields.')
      return
    }

    setStatus('loading')

    try {
      const formData = new FormData()
      formData.append('access_key', accessKey)
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('phone', form.phone)
      formData.append('company', form.company)
      formData.append('message', form.message)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        })
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'An error occurred while sending the message.')
      }
    } catch (error: any) {
      console.error('Submission error:', error)
      setStatus('error')
      setErrorMessage(error.message || 'Network error. Please try again later.')
    }
  }

  return (
    <>
      {/* Tagline Section */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#EFE9E0' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-35"
            style={{ background: 'radial-gradient(circle, hsl(21 54% 54% / 0.08) 0%, transparent 70%)' }}
          />
        </div>
        
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <motion.div
            className="text-center space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.h2
              variants={staggerItem}
              className="text-6xl md:text-8xl font-bold text-foreground text-balance leading-tight"
            >
              Let&apos;s Build <span className="text-primary italic">Your Next</span> Digital <span className="text-primary">Success</span>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-2xl md:text-3xl text-muted leading-relaxed text-balance font-light max-w-4xl mx-auto"
            >
              From concept to launch, we&apos;re here to transform your vision into a powerful digital experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-12 md:py-24 relative overflow-hidden" style={{ backgroundColor: '#EFE9E0' }}>
        <div className="mx-auto max-w-4xl px-6 relative z-10">
          <div className="space-y-10">
            {/* Header */}
            <motion.div
              className="text-center space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.h3
                variants={staggerItem}
                className="text-4xl md:text-5xl font-bold text-foreground text-balance leading-tight"
              >
                Get in <span className="text-primary">Touch</span>
              </motion.h3>
              
              <motion.p
                variants={staggerItem}
                className="text-lg text-muted leading-relaxed text-pretty max-w-2xl mx-auto font-light"
              >
                Ready to start your next project? Tell us about your vision and we&apos;ll help bring it to life.
              </motion.p>
            </motion.div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6 }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-current bg-card text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-current bg-card text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-current bg-card text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                      Company Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-current bg-card text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-current bg-card text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></motion.textarea>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-4 font-semibold transition-all duration-300 shadow-md glow-primary-hover"
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>

                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-emerald-600 text-sm font-semibold text-center mt-3"
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm font-semibold text-center mt-3"
                    >
                      {errorMessage}
                    </motion.p>
                  )}
                </form>
              </motion.div>

              {/* Info Column */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Contact Info</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted mb-1">Email</p>
                      <p className="text-foreground font-semibold hover:text-primary transition-colors">
                        <a href="mailto:hellogrowviatech@gmail.com">hellogrowviatech@gmail.com</a>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted mb-1">Phone</p>
                      <p className="text-foreground font-semibold hover:text-primary transition-colors">
                        <a href="tel:+918825561687">+91 88255 61687</a>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted mb-1">Address</p>
                      <p className="text-foreground font-semibold">Coimbatore, India</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Hours</h3>
                  <div className="space-y-2 text-foreground font-light text-sm">
                    <p className="flex justify-between"><span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span></p>
                    <p className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></p>
                    <p className="flex justify-between"><span>Sunday</span> <span>Closed</span></p>
                  </div>
                </div>

                <motion.div
                  className="p-6 bg-secondary rounded-2xl border border-current"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <p className="text-sm text-foreground leading-relaxed font-light">
                    We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

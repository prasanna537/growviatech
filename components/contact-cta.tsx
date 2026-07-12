'use client'

import { useState } from 'react'
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const contactInfo = [
  { icon: Mail,   label: 'Email',  value: 'hello@growvia.tech',  href: 'mailto:hello@growvia.tech' },
  { icon: Phone,  label: 'Phone',  value: '+91 88255 61687',      href: 'tel:+918825561687' },
  { icon: MapPin, label: 'Headquarters', value: 'Coimbatore, Tamilnadu', href: '#' },
]

const services = [
  'Website Development',
  'Web Application',
  'AI Automation',
  'SEO & Performance',
  'Modernization',
  'Other',
]

type State = 'idle' | 'submitting' | 'success' | 'error'

const vp = { once: true, margin: '-60px' }

export function ContactCTA() {
  const [state, setState] = useState<State>('idle')
  const [service, setService] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('submitting')
    const fd = new FormData(e.currentTarget)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '',
          name: fd.get('name'),
          email: fd.get('email'),
          phone: fd.get('phone'),
          service,
          message: fd.get('message'),
        }),
      })
      setState((await res.json()).success ? 'success' : 'error')
    } catch {
      setState('error')
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F1F5F9] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[700px] h-[700px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.7) 0%, transparent 70%)' }}
        />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <span className="section-badge section-badge-blue mb-4">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
                Let&apos;s build something{' '}
                <span className="gradient-text">extraordinary.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Ready to transform your digital presence? Our engineers and designers are here to help you achieve your goals — faster than you imagined.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              {contactInfo.map((ci, i) => {
                const Icon = ci.icon
                return (
                  <motion.a
                    key={ci.label}
                    href={ci.href}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={vp}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                  >
                    <div className="icon-box icon-box-blue w-12 h-12 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{ci.label}</p>
                      <p className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{ci.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>


          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-400 to-emerald-500" />
              <div className="p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {state === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-12"
                    >
                      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border-2 border-emerald-200">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                      <p className="text-slate-600 mb-8 max-w-sm">We&apos;ll review your request and respond within 24 hours.</p>
                      <button
                        onClick={() => setState('idle')}
                        className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-full hover:bg-slate-200 transition-colors text-sm"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">Start a conversation</h3>
                        <p className="text-slate-500 text-sm">Fill out the form and we&apos;ll get back to you ASAP.</p>
                      </div>

                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { id: 'name',  type: 'text',  label: 'Full Name *',  placeholder: 'Rahul Kumar', required: true },
                          { id: 'email', type: 'email', label: 'Email *',       placeholder: 'hellogrowviatech@gmail.com', required: true },
                        ].map(f => (
                          <div key={f.id}>
                            <label htmlFor={f.id} className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{f.label}</label>
                            <input
                              id={f.id} name={f.id} type={f.type}
                              required={f.required}
                              placeholder={f.placeholder}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:bg-white transition-all"
                            />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone</label>
                        <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:bg-white transition-all"
                        />
                      </div>

                      {/* Service chips */}
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Service Needed</p>
                        <div className="flex flex-wrap gap-2">
                          {services.map(s => (
                            <button
                              key={s} type="button"
                              onClick={() => setService(s === service ? '' : s)}
                              className={`px-3.5 py-2 rounded-full text-xs font-semibold border transition-all ${
                                service === s
                                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20'
                                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
                              }`}
                            >{s}</button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Project Details *</label>
                        <textarea id="message" name="message" required rows={4}
                          placeholder="Tell us about your project, goals, and timeline..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none hover:bg-white transition-all"
                        />
                      </div>

                      {state === 'error' && (
                        <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>
                      )}

                      <motion.button
                        type="submit"
                        disabled={state === 'submitting'}
                        className="w-full btn-primary py-4 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
                        whileHover={{ scale: state !== 'submitting' ? 1.01 : 1 }}
                        whileTap={{ scale: state !== 'submitting' ? 0.99 : 1 }}
                      >
                        {state === 'submitting'
                          ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                          : <>Send Message <ArrowRight className="w-5 h-5" /></>
                        }
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

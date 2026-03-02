import { useState } from 'react'
import { motion } from 'framer-motion'
import { mobileViewport } from '../lib/animationUtils'
import Footer from '../components/Footer'
import toast from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.')
      return
    }
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setForm({ name: '', email: '', phone: '', message: '' })
      toast.success('Message sent! We\'ll be in touch soon.')
    }, 1200)
  }

  return (
    <main className="min-h-screen bg-pearl">
      <div className="pt-28 pb-10 bg-snow border-b border-ivory">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="section-eyebrow mb-2">Reach Out</div>
          <h1 className="font-display text-5xl font-light text-ink">Get in Touch</h1>
          <p className="section-subtitle mt-2">Our jewelry consultants are here to assist with enquiries, consultations, and bespoke commissions.</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Form */}
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-2xl font-light text-ink mb-8">Send a Message</h2>
            <div className="space-y-5">
              <div>
                <label className="form-label text-black">Full Name *</label>
                <input className="form-input" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your full name" />
              </div>
              <div>
                <label className="form-label text-black">Email Address *</label>
                <input type="email" className="form-input" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="your@email.com" />
              </div>
              <div>
                <label className="form-label text-black">Phone Number</label>
                <input className="form-input" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="form-label text-black">Message *</label>
                <textarea
                  rows={5}
                  className="form-input resize-none"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell us how we can help — enquiries, bespoke orders, consultations…"
                />
              </div>
            </div>
            <button type="submit" disabled={sending} className="btn-primary mt-6 w-full justify-center">
              {sending ? 'Sending…' : 'Send Message →'}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="space-y-5">
            <h2 className="font-display text-2xl font-light text-ink mb-8">Visit Us</h2>
            {[
              { icon: faLocationDot, label: 'Address',     value: 'Vadgaon (Kapashi Senapati), Tal. Kagal, Dist. Kolhapur, Maharashtra 416218, India' },
              { icon: faPhone,       label: 'Phone',       value: '+91 992 038 4915' },
              { icon: faEnvelope,    label: 'Email',       value: 'pranjalenterprise15@gmail.com' },
              { icon: faClock,       label: 'Store Hours', value: 'Monday – Saturday: 10:00 AM – 8:00 PM\nSunday: 11:00 AM – 6:00 PM' },
            ].map(item => (
              <div key={item.label} className="bg-white border border-ivory p-6">
                <div className="flex items-start gap-4">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-[#C4A35A] text-xl flex-shrink-0 mt-1"
                  />
                  <div>
                    <div className="font-heading text-xs tracking-widest uppercase text-gold mb-1.5">{item.label}</div>
                    <p className="text-charcoal text-sm font-light leading-relaxed whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Map embed */}
<div className="border border-ivory overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d626.8252039049845!2d74.2773618422153!3d16.31027602907545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc08b00479a33fb%3A0xec5b0699938bd50a!2sPranjal%20Enterprise!5e0!3m2!1sen!2sin!4v1772426525890!5m2!1sen!2sin" 
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Store Location"
  />
</div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Anchor, Linkedin } from 'lucide-react';
import Navigation from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-ocean-gradient particle-bg">
      <Navigation activePage="contact" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-8 h-8 text-teal-400" />
              <span className="text-sm text-teal-400 uppercase tracking-widest font-semibold">
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Partner With a Marine Data Excellence Leader
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
              Ready to enhance your fisheries management, vessel monitoring, or marine data analytics capabilities? 
              Let's discuss how my expertise can drive your organization's success.
            </p>
            <p className="text-base text-teal-400/80 max-w-2xl mx-auto">
              Available for consulting • Open to leadership opportunities • Specialized in government, NGO, and private sector fisheries management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card">
                <h3 className="text-2xl font-bold text-gradient mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-lg">
                      <Mail className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-teal-400 font-semibold mb-1">Email</h4>
                      <a href="mailto:maaberny@gmail.com" className="text-gray-300 hover:text-teal-400 transition-colors">
                        maaberny@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-lg">
                      <Phone className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-teal-400 font-semibold mb-1">Phone</h4>
                      <a href="tel:+233266236479" className="text-gray-300 hover:text-teal-400 transition-colors">
                        0266236479
                      </a>
                      <br />
                      <a href="tel:+233559330805" className="text-gray-300 hover:text-teal-400 transition-colors">
                        0559330805
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-lg">
                      <MapPin className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-teal-400 font-semibold mb-1">Location</h4>
                      <p className="text-gray-300">
                        Teshie Nungua Estate<br />
                        Accra, Ghana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-lg">
                      <Linkedin className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-teal-400 font-semibold mb-1">LinkedIn</h4>
                      <a 
                        href="https://www.linkedin.com/in/bernice-tetteh-87a3b491/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-teal-400 transition-colors"
                      >
                        linkedin.com/in/bernice-tetteh-87a3b491
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold text-gradient mb-4">Professional Focus</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <Anchor className="w-4 h-4 text-teal-400" />
                    Marine Data Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <Anchor className="w-4 h-4 text-teal-400" />
                    Vessel Monitoring Systems (VMS)
                  </li>
                  <li className="flex items-center gap-2">
                    <Anchor className="w-4 h-4 text-teal-400" />
                    Fisheries Compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <Anchor className="w-4 h-4 text-teal-400" />
                    Data Visualization & Analytics
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-gradient mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-teal-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-teal-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-teal-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
                    Message sent successfully!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                    Failed to send message. Please try again or contact directly via email.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}


'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, Container } from '@/components/craft';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle,
  Facebook,
  Instagram,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSent(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 10000);
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="pt-20">
      <Section className="bg-gradient-to-b from-[#0d1259] to-[#1a237e] py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/70">
              Have a question or need assistance? We're here to help!
            </p>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-white py-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1a237e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#1a237e]" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Location</p>
                      <p className="text-slate-500 text-sm">
                        105 Moo 4, Chaofa Road<br />
                        Wichit, Muang<br />
                        Phuket 83130, Thailand
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1a237e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#1a237e]" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Phone</p>
                      <a href="tel:+6676391222" className="text-[#1a237e] hover:underline">
                        +66 76 391 222
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1a237e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#1a237e]" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Email</p>
                      <a href="mailto:info@hanumanworldphuket.com" className="text-[#1a237e] hover:underline">
                        info@hanumanworldphuket.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1a237e]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#1a237e]" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">Operating Hours</p>
                      <p className="text-slate-500 text-sm">
                        Daily: 8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 mt-6">
                  <p className="font-semibold text-slate-800 mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    <a
                      href="https://facebook.com/hanumanworld"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="https://instagram.com/hanumanworld"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="https://wa.me/6676391222"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="bg-slate-50 rounded-3xl p-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h2>

                {sent && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="text-green-700 font-medium">Thank you! Your message has been sent successfully.</p>
                      <p className="text-green-600 text-sm">We've also sent you a confirmation email. We'll get back to you within 24-48 hours.</p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-700">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#1a237e] transition-colors text-slate-800 placeholder:text-slate-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#1a237e] transition-colors text-slate-800 placeholder:text-slate-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#1a237e] transition-colors text-slate-800 placeholder:text-slate-400"
                        placeholder="+66 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#1a237e] transition-colors text-slate-800"
                      >
                        <option value="">Select a topic</option>
                        <option value="booking">Booking Inquiry</option>
                        <option value="modification">Booking Modification</option>
                        <option value="cancellation">Cancellation Request</option>
                        <option value="group">Group Booking</option>
                        <option value="general">General Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#1a237e] transition-colors resize-none text-slate-800 placeholder:text-slate-400"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#1a237e] hover:bg-[#0d1259] text-white font-semibold rounded-xl transition-colors disabled:opacity-50"
                  >
                    {sending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50 p-0 h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.7614644989347!2d98.34741!3d7.8621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503a5a5a5a5a5a%3A0x1234567890abcdef!2sHanuman%20World%20Phuket!5e0!3m2!1sen!2sth!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hanuman World Location"
        />
      </Section>
    </main>
  );
}

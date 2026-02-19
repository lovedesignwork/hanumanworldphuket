'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Container, Section, SectionHeader, Card, Button } from '@/components/ui';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen pt-20 bg-[#1a237e]">
      <Section 
        className="relative overflow-hidden min-h-[calc(100vh-80px)]"
        style={{ background: 'linear-gradient(135deg, #2a1a5c 0%, #0d1259 30%, #0d4a4a 60%, #1a237e 100%)' }}
      >
        {/* Big rotating circles */}
        <img 
          src="/images/circlebig.png"
          alt=""
          className="absolute w-[800px] h-[800px] opacity-10 pointer-events-none object-contain top-[-15%] right-[-10%] animate-spin-slow"
        />
        <img 
          src="/images/circlebig.png"
          alt=""
          className="absolute w-[700px] h-[700px] opacity-10 pointer-events-none object-contain top-[30%] left-[-15%] animate-spin-slow-reverse"
        />
        <img 
          src="/images/circlebig.png"
          alt=""
          className="absolute w-[600px] h-[600px] opacity-5 pointer-events-none object-contain bottom-[-15%] right-[20%] animate-spin-slow"
        />
        
        <Container className="relative z-10">
          <SectionHeader
            title="Contact Us"
            subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card padding="lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-foreground-muted">We&apos;ll get back to you as soon as possible.</p>
                    <Button 
                      onClick={() => setIsSubmitted(false)} 
                      className="mt-6"
                      variant="secondary"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-foreground-muted focus:outline-none focus:border-accent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-foreground-muted focus:outline-none focus:border-accent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-foreground-muted focus:outline-none focus:border-accent"
                          placeholder="+66 XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Subject *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#1a237e] border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 12px center',
                            backgroundSize: '20px',
                            paddingRight: '48px',
                          }}
                        >
                          <option value="" className="bg-[#1a237e] text-white">Select a subject</option>
                          <option value="booking" className="bg-[#1a237e] text-white">Booking Inquiry</option>
                          <option value="packages" className="bg-[#1a237e] text-white">Package Information</option>
                          <option value="group" className="bg-[#1a237e] text-white">Group Booking</option>
                          <option value="feedback" className="bg-[#1a237e] text-white">Feedback</option>
                          <option value="other" className="bg-[#1a237e] text-white">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-foreground-muted focus:outline-none focus:border-accent resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-[family-name:var(--font-oswald)] font-normal tracking-wide text-xl text-white uppercase transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: 'linear-gradient(135deg, #f97316, #ea580c, #f97316)',
                        backgroundSize: '200% 200%',
                        animation: 'gradient-shift 3s ease infinite',
                        boxShadow: '0 0 20px rgba(249, 115, 22, 0.5), 0 4px 15px rgba(249, 115, 22, 0.3)',
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                    <p className="text-foreground-muted">
                      105 Moo 4, Chaofa West Road<br />
                      Chalong, Muang, Phuket 83130
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <a href="tel:+66763016110" className="text-foreground-muted hover:text-accent transition-colors">
                      +66 76 301 6110
                    </a>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:info@hanumanworld.com" className="text-foreground-muted hover:text-accent transition-colors">
                      info@hanumanworld.com
                    </a>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Operating Hours</h3>
                    <p className="text-foreground-muted">
                      Daily: 8:00 AM - 5:00 PM<br />
                      Time Slots: 8AM, 10AM, 1PM, 3PM
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

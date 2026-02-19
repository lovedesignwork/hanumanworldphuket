'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, Zap } from 'lucide-react';
import { Section, Container, Button } from '@/components/ui';

export function CTABanner() {
  return (
    <Section className="relative overflow-hidden py-28">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/ctabg.jpeg)' }}
      />
      
      {/* Dark blue and dark purple diagonal overlay */}
      <div 
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(13, 18, 89, 0.92) 0%, rgba(26, 35, 126, 0.85) 25%, rgba(59, 26, 90, 0.8) 50%, rgba(88, 28, 135, 0.75) 75%, rgba(107, 33, 168, 0.7) 100%)' }}
      />
      
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-oswald)] tracking-wide">
              READY FOR YOUR ADVENTURE?
            </h2>
            <p className="text-white/90 text-lg max-w-xl">
              Book now and secure your spot for an unforgettable jungle experience. 
              Free hotel pickup included with all packages!
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6">
              <div className="flex items-center gap-2 text-white/90">
                <Calendar className="w-5 h-5" />
                <span>Flexible Dates</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5" />
                <span>4 Time Slots Daily</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Zap className="w-5 h-5" />
                <span>Instant Confirmation</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            {/* Card with animated border similar to package cards */}
            <div className="p-[3px] rounded-2xl animated-silver-border">
              <div className="relative rounded-2xl overflow-hidden animated-card-bg-deep-blue p-8 min-w-[320px]">
                {/* Circle decoration */}
                <img 
                  src="/images/circlebg.png" 
                  alt="" 
                  className="absolute opacity-10 pointer-events-none"
                  style={{ width: '300px', height: '300px', top: '-50px', right: '-50px' }}
                />
                
                <div className="relative z-10 text-center">
                  <p className="text-white/70 text-sm uppercase tracking-widest mb-2 font-semibold">
                    STARTING FROM
                  </p>
                  <div className="text-7xl font-bold text-white font-[family-name:var(--font-oswald)] mb-1">
                    ฿350
                  </div>
                  <p className="text-white/70 text-lg mb-6">per person</p>
                  
                  <Link href="/booking" className="block">
                    <div className="p-[2px] rounded-xl animated-silver-border-btn transition-all duration-300 hover:scale-105">
                      <button className="relative z-10 w-full flex items-center justify-center gap-3 py-4 px-8 rounded-xl animated-btn-deep-blue text-white transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
                        <span className="text-xl font-bold font-[family-name:var(--font-oswald)] tracking-wider">
                          BOOK NOW
                        </span>
                      </button>
                    </div>
                  </Link>
                  
                  <p className="text-white/60 text-xs mt-4">
                    No booking fees • Free cancellation up to 24h
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

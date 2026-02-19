'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bus } from 'lucide-react';
import { Container, Section, SectionHeader, Badge } from '@/components/ui';
import { getPackagesByCategory } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';
import { staggerContainer, staggerItem } from '@/lib/animations';

const statLabels: Record<string, string> = {
  platforms: 'PLATFORM',
  ziplines: 'ZIPLINES',
  skyBridge: 'SKY BRIDGE',
  abseilPoints: 'ABSEIL POINT',
  dualZipline: 'DUAL ZIPLINE',
  spiralStaircase: 'SPIRAL STAIRCASE',
  rollerZipline: 'ROLLER ZIPLINE',
  skyWalk: 'SKY WALK',
};

const getContentGradient = (packageId?: string): string => {
  if (packageId === 'zipline-32') return 'animated-card-bg-turquoise-mint';
  if (packageId === 'zipline-18') return 'animated-card-bg-turquoise-mint';
  if (packageId === 'zipline-10') return 'animated-card-bg-turquoise-mint';
  return 'animated-card-bg-purple';
};

const getButtonGradient = (packageId?: string): string => {
  return 'animated-btn-turquoise-mint';
};

export default function ZiplinePackagesPage() {
  const packages = getPackagesByCategory('zipline');

  return (
    <main className="min-h-screen pt-20">
      <Section className="relative overflow-hidden" style={{ backgroundColor: '#0d1259' }}>
        {/* Big Circle Background Decorations */}
        <img 
          src="/images/circlebig.png"
          alt=""
          className="absolute w-[800px] h-[800px] opacity-15 pointer-events-none object-contain top-[5%] left-[-10%] animate-spin-slow"
        />
        <img 
          src="/images/circlebig.png"
          alt=""
          className="absolute w-[800px] h-[800px] opacity-15 pointer-events-none object-contain top-[40%] right-[-10%] animate-spin-slow-reverse"
        />
        <img 
          src="/images/circlebig.png"
          alt=""
          className="absolute w-[800px] h-[800px] opacity-15 pointer-events-none object-contain bottom-[5%] left-[20%] animate-spin-slow"
        />
        
        <Container className="relative z-10">
          <SectionHeader
            title="Zipline Packages"
            subtitle="Experience the thrill of flying through the ancient rainforest"
          />
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                className="group relative"
                variants={staggerItem}
              >
                <div className="p-[3px] rounded-2xl animated-silver-border">
                  <div className="relative flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-gradient-to-b lg:bg-gradient-to-r from-primary/90 to-primary-dark transition-all duration-300">
                    {/* Image Section */}
                    <div className="relative h-72 lg:h-auto lg:w-[40%] overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${pkg.image})`, backgroundColor: '#1a237e' }}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge>{pkg.duration}</Badge>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className={`relative p-8 lg:p-10 flex flex-col justify-center lg:w-[60%] min-h-[400px] ${getContentGradient(pkg.id)} overflow-hidden`}>
                      {/* Circle decoration */}
                      <img 
                        src="/images/circlebg.png" 
                        alt="" 
                        className="absolute opacity-10 pointer-events-none animate-circle-orbit-1"
                        style={{ width: '400px', height: '400px', top: '-50px', right: '-50px' }}
                      />
                      
                      <h3 className="text-[50px] lg:text-[65px] font-[family-name:var(--font-oswald)] font-medium tracking-wide text-white mb-4 relative z-10 text-center">
                        {pkg.name}
                      </h3>
                      
                      {/* Stats */}
                      {pkg.stats && (
                        <div className="flex justify-center gap-6 mb-4 relative z-10">
                          {Object.entries(pkg.stats).slice(0, 7).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-3xl font-bold text-white font-[family-name:var(--font-oswald)]">{value}</div>
                              <div className="text-[11px] text-white/80 uppercase font-semibold tracking-wider">{statLabels[key] || key}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Includes badge */}
                      <div className="flex justify-center gap-3 mb-4 relative z-10">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-400 text-black text-sm font-semibold">
                          <Bus className="w-4 h-4 text-black" />
                          Round Trip Transfer
                        </span>
                      </div>
                      
                      {/* Button */}
                      <Link href={`/packages/zipline/${pkg.id}`} className="block relative z-10">
                        <div className="p-[2px] rounded-xl transition-all duration-300 hover:scale-105 animated-silver-border-btn">
                          <button className={`relative z-10 w-full flex items-center justify-center gap-3 py-3.5 rounded-xl ${getButtonGradient(pkg.id)} text-white transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden`}>
                            <span className="font-[family-name:var(--font-oswald)] font-normal text-[23px]">
                              BOOK NOW: {formatPrice(pkg.price)} / PERSON
                            </span>
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}

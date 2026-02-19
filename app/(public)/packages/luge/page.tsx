'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Gauge, Mountain, Users, Shield, Timer, MapPin, Plus, Zap } from 'lucide-react';
import { Container, Section, SectionHeader, Badge } from '@/components/ui';
import { getPackageById } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';
import { staggerContainer, staggerItem } from '@/lib/animations';

const features = [
  {
    icon: Gauge,
    title: '650 METRES',
    description: 'Race down over 650 metres of thrilling downhill track through the jungle.',
  },
  {
    icon: Mountain,
    title: 'GRAVITY-POWERED',
    description: 'No engine needed - pure gravity and your courage control the speed.',
  },
  {
    icon: Users,
    title: 'FAMILY-FRIENDLY',
    description: 'Perfect for all ages - solo rides or tandem with kids from 85cm tall.',
  },
  {
    icon: Shield,
    title: 'FULLY SAFE',
    description: 'Professional-grade equipment with trained guides at every turn.',
  },
];

const comboPackages = [
  {
    name: 'LUGE + ZIPLINE 10',
    description: 'Add luge to your 10 platform zipline adventure',
    savings: 'Save ฿200',
    href: '/contact',
  },
  {
    name: 'LUGE + ZIPLINE 18',
    description: 'Combine luge with 18 platform zipline course',
    savings: 'Save ฿300',
    href: '/contact',
  },
  {
    name: 'LUGE + WORLD A+',
    description: 'The ultimate combo - luge with our complete package',
    savings: 'Save ฿500',
    href: '/contact',
  },
];

export default function LugePage() {
  const pkg = getPackageById('luge');

  if (!pkg) return null;

  return (
    <main className="min-h-screen pt-20">
      {/* Section 1: Hero with YouTube Video */}
      <section className="relative overflow-hidden" style={{ height: '85vh', minHeight: '600px' }}>
        {/* YouTube Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/KhoOn0Ki4Cw?autoplay=1&mute=1&loop=1&playlist=KhoOn0Ki4Cw&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&vq=hd1080"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ 
              border: 0,
              width: '177.78vh',
              height: '100vh',
              minWidth: '100%',
              minHeight: '56.25vw',
            }}
          />
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0d1259]/60" />
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1259]/80 via-transparent to-[#0d1259]" />
        </div>
        
        {/* Rotating circles */}
        <img 
          src="/images/circlebig.png"
          alt=""
          className="absolute w-[800px] h-[800px] opacity-10 pointer-events-none object-contain top-[-15%] right-[-10%] animate-spin-slow z-10"
        />
        <img 
          src="/images/circlebig.png"
          alt=""
          className="absolute w-[600px] h-[600px] opacity-10 pointer-events-none object-contain bottom-[-20%] left-[-10%] animate-spin-slow-reverse z-10"
        />
        
        <Container className="relative z-20 h-full flex flex-col justify-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
          >
            <Badge variant="accent" className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">
              PHUKET'S FIRST & ONLY LUGE
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-oswald)] font-medium text-white mb-4 tracking-wide">
              HANUMAN LUGE
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-2">
              Race down 650 metres of thrilling jungle track on a gravity-powered luge cart. 
              Feel the G-forces as you navigate twists and turns through the rainforest!
            </p>
            <p className="text-lg text-green-400 font-semibold">
              Part of Hanuman World Adventure Park
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mb-10"
          >
            <div className="text-center px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-bold text-green-400 font-[family-name:var(--font-oswald)]">650m</div>
              <div className="text-sm text-white/70 uppercase">Track Length</div>
            </div>
            <div className="text-center px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-bold text-green-400 font-[family-name:var(--font-oswald)]">100%</div>
              <div className="text-sm text-white/70 uppercase">You Control</div>
            </div>
            <div className="text-center px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-4xl font-bold text-green-400 font-[family-name:var(--font-oswald)]">ALL</div>
              <div className="text-sm text-white/70 uppercase">Ages Welcome</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/contact">
              <button className="px-10 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/30">
                BOOK LUGE: {formatPrice(pkg.price)}
              </button>
            </Link>
            <Link href="#combo">
              <button className="px-10 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xl transition-all duration-300 border border-white/20">
                VIEW COMBO DEALS
              </button>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Section 2: Features */}
      <Section 
        className="relative overflow-hidden" 
        style={{ 
          backgroundImage: 'url(/images/lugee2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          paddingTop: '100px',
          paddingBottom: '650px',
        }}
      >
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-[#0d1259]/50" />
        
        <Container className="relative z-10">
          <div className="mb-12 text-center" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-oswald)] font-light tracking-wide text-white mb-4">
              THE LUGE EXPERIENCE
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Phuket's most exciting gravity ride
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#0d1259]/80 to-[#2a1a5c]/80 backdrop-blur-sm border border-white/10 hover:border-green-500/30 transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <item.icon className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-oswald)]">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Section 3: Part of Hanuman World + Combo Packages */}
      <Section id="combo" className="relative overflow-hidden" style={{ backgroundColor: '#0a0f3d' }}>
        {/* Rotating circles */}
        <img 
          src="/images/circlebig.png"
          alt=""
          className="absolute w-[600px] h-[600px] opacity-10 pointer-events-none object-contain top-[-15%] left-[-10%] animate-spin-slow"
        />
        <img 
          src="/images/circlebig.png"
          alt=""
          className="absolute w-[600px] h-[600px] opacity-10 pointer-events-none object-contain bottom-[-15%] right-[-10%] animate-spin-slow-reverse"
        />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="primary" className="mb-4">PART OF HANUMAN WORLD</Badge>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-oswald)] font-medium text-white mb-4">
              COMBINE & SAVE
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Hanuman Luge is part of the Hanuman World adventure park. Add it to any zipline package for an unforgettable day of jungle thrills!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {comboPackages.map((combo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-[2px] rounded-2xl animated-silver-border"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-b from-primary/90 to-primary-dark h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <Plus className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-[family-name:var(--font-oswald)]">
                        {combo.name}
                      </h3>
                      <span className="text-green-400 text-sm font-semibold">{combo.savings}</span>
                    </div>
                  </div>
                  <p className="text-white/70 mb-6 flex-grow">{combo.description}</p>
                  <Link href={combo.href}>
                    <button className="w-full py-3 rounded-xl bg-green-500/20 hover:bg-green-500/30 text-green-400 font-semibold transition-all duration-300 border border-green-500/30">
                      Book Combo
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-oswald)]">
                  LOCATED AT HANUMAN WORLD
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Hanuman Luge is conveniently located within the Hanuman World adventure park, just 20 minutes from Phuket Town. 
                  Book the luge as a standalone experience or add it to any of our zipline packages for the ultimate adventure day. 
                  Free hotel transfers available when combined with zipline packages.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Section 4: SEO Content */}
      <Section className="relative overflow-hidden" style={{ backgroundColor: '#0d1259' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-oswald)] font-medium text-white mb-6 text-center">
              PHUKET'S FIRST & ONLY LUGE ADVENTURE
            </h2>
            <div className="prose prose-lg prose-invert mx-auto text-white/80 space-y-4">
              <p>
                Experience <strong className="text-green-400">Phuket's first and only luge park</strong> at Hanuman World, Thailand's premier adventure destination. Hanuman Luge offers a thrilling <strong className="text-white">gravity-powered downhill ride</strong> through the stunning rainforest, giving you complete control as you navigate over 650 metres of exciting twists, turns, and banked curves.
              </p>
              <p>
                Unlike anything else in <strong className="text-white">Phuket</strong>, the luge combines the thrill of racing with the beauty of nature. Feel the G-forces as you lean into curves, pick up speed on straightaways, and experience the rush of wind as you descend through the jungle. It's the perfect activity for <strong className="text-white">adventure seekers of all ages</strong> - ride solo or tandem with young children.
              </p>
              <p>
                <strong className="text-green-400">Hanuman Luge is part of the Hanuman World adventure park</strong>, home to Thailand's famous zipline courses, roller zipline, skywalk, and slingshot. This means you can combine your luge experience with any of our other attractions for a full day of <strong className="text-white">jungle adventure in Phuket</strong>. Book a combo package and save on the ultimate adventure experience!
              </p>
              <p>
                Open daily from 9AM to 6PM, Hanuman Luge is easily accessible from all major tourist areas including Patong, Kata, Karon, and Phuket Town. Whether you're visiting with family, friends, or looking for a unique <strong className="text-white">solo adventure in Thailand</strong>, the luge delivers an unforgettable experience you won't find anywhere else on the island.
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Section 5: CTA */}
      <Section 
        className="relative overflow-hidden" 
        style={{ 
          backgroundImage: 'url(/images/lugebgg.JPG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '230px',
          paddingBottom: '230px',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0d1259]/70" />
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-oswald)] font-medium text-white mb-4 tracking-wide">
              READY TO RACE?
            </h2>
            <p className="text-xl text-white/80 max-w-xl mx-auto mb-8">
              Experience Phuket's only luge adventure. Book now and feel the rush of gravity racing through the jungle!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="px-10 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/30">
                  BOOK LUGE NOW
                </button>
              </Link>
              <Link href="/packages/combined">
                <button className="px-10 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xl transition-all duration-300 border border-white/20">
                  VIEW ALL PACKAGES
                </button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}

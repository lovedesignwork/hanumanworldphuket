'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Rocket, Zap, Timer, ShieldCheck, ChevronRight, Star } from 'lucide-react';
import { Container, Section, SectionHeader, Badge } from '@/components/ui';
import { getPackageById } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';

export default function SlingshotPage() {
  const pkg = getPackageById('slingshot');

  if (!pkg) return null;

  return (
    <main className="min-h-screen pt-20">
      {/* Section 1: Split Hero - Image Left, Content Right */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 30%, #0d1259 70%, #1a237e 100%)'
          }}
        />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Big rotating circles */}
          <img 
            src="/images/circlebig.png"
            alt=""
            className="absolute w-[900px] h-[900px] opacity-10 pointer-events-none object-contain animate-spin-slow"
            style={{ top: '-20%', right: '-15%' }}
          />
          <img 
            src="/images/circlebig.png"
            alt=""
            className="absolute w-[700px] h-[700px] opacity-10 pointer-events-none object-contain animate-spin-slow-reverse"
            style={{ bottom: '-25%', left: '-10%' }}
          />
          <img 
            src="/images/circlebig.png"
            alt=""
            className="absolute w-[500px] h-[500px] opacity-5 pointer-events-none object-contain animate-spin-slow"
            style={{ top: '30%', left: '40%' }}
          />
          
          <motion.div
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[10%] w-32 h-32 rounded-full bg-orange-500/20 blur-3xl"
          />
          <motion.div
            animate={{ 
              y: [0, 30, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] left-[5%] w-48 h-48 rounded-full bg-purple-500/20 blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] left-[30%] w-24 h-24 rounded-full bg-accent/10 blur-2xl"
          />
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative">
                  <Image
                    src={pkg.image}
                    alt="Slingshot Experience"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/60 via-transparent to-transparent" />
                </div>
                
                {/* Floating Stats Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10"
                >
                  <div className="flex justify-around text-center">
                    <div>
                      <div className="text-3xl font-bold text-orange-400 font-[family-name:var(--font-oswald)]">100%</div>
                      <div className="text-xs text-white/70 uppercase">Pure Adrenaline</div>
                    </div>
                    <div className="w-px bg-white/20" />
                    <div>
                      <div className="text-3xl font-bold text-orange-400 font-[family-name:var(--font-oswald)]">3G</div>
                      <div className="text-xs text-white/70 uppercase">Force</div>
                    </div>
                    <div className="w-px bg-white/20" />
                    <div>
                      <div className="text-3xl font-bold text-orange-400 font-[family-name:var(--font-oswald)]">50M</div>
                      <div className="text-xs text-white/70 uppercase">Height</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-orange-500/30 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500/20 rounded-full blur-xl" />
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
            >
              <Badge variant="accent" className="mb-4 bg-orange-500/20 text-orange-400 border-orange-500/30">
                EXTREME EXPERIENCE
              </Badge>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-oswald)] font-bold mb-6 leading-tight">
                <span className="text-orange-400">SLINGSHOT</span>
                <br />
                <span className="text-white/90">LAUNCH</span>
              </h1>
              
              <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-lg">
                Get catapulted into the sky at incredible speed! Experience the ultimate adrenaline rush as you're launched high above the jungle canopy.
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Timer className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Duration</div>
                    <div className="font-semibold">{pkg.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Safety</div>
                    <div className="font-semibold">100% Safe</div>
                  </div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div>
                  <div className="text-sm text-white/50 mb-1">Starting from</div>
                  <div className="text-5xl font-[family-name:var(--font-oswald)] font-normal text-orange-400">
                    {formatPrice(pkg.price)}
                    <span className="text-lg text-white/50 ml-2">/ person</span>
                  </div>
                </div>
                
                <Link href={`/booking?package=${pkg.id}`} className="flex-shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-lg flex items-center gap-2 shadow-lg shadow-orange-500/30"
                  >
                    BOOK NOW
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Section 2: Features Grid */}
      <Section style={{ background: 'linear-gradient(180deg, #0d1259 0%, #1a0a2e 100%)' }}>
        <Container>
          <SectionHeader
            title="THE ULTIMATE THRILL"
            subtitle="Why our Slingshot is unlike anything else"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Rocket,
                title: 'EXTREME LAUNCH',
                description: 'Catapulted from 0 to max speed in under 2 seconds',
                color: 'from-orange-500 to-red-500',
              },
              {
                icon: Zap,
                title: 'INSTANT RUSH',
                description: 'Feel the G-force as you soar into the sky',
                color: 'from-yellow-500 to-orange-500',
              },
              {
                icon: Star,
                title: 'UNIQUE IN PHUKET',
                description: 'One of the only human slingshots in Thailand',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: ShieldCheck,
                title: 'WORLD-CLASS SAFETY',
                description: 'European equipment with rigorous safety checks',
                color: 'from-blue-500 to-cyan-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                  style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                />
                <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-oswald)]">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 3: SEO Content */}
      <Section 
        className="relative overflow-hidden"
        style={{ 
          backgroundImage: 'url(/images/Hero%20Image/Slingshot2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e]/90 via-[#0d1259]/85 to-[#1a0a2e]/90" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-oswald)] font-medium text-white mb-8 text-center">
                PHUKET'S MOST EXTREME ADVENTURE ATTRACTION
              </h2>
              
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  Experience the <strong className="text-orange-400">ultimate human slingshot in Phuket</strong> at Hanuman World, Thailand's premier adventure park. Our state-of-the-art slingshot attraction launches thrill-seekers high into the sky, delivering an adrenaline rush unlike any other <strong className="text-white">extreme activity in Thailand</strong>.
                </p>
                
                <p>
                  The <strong className="text-white">Hanuman World Slingshot</strong> uses cutting-edge European technology and the highest international safety standards. You'll experience up to 3G of force as you're catapulted from the launch platform, soaring above the ancient rainforest canopy for breathtaking views and heart-pounding excitement.
                </p>
                
                <p>
                  Whether you're an <strong className="text-white">adrenaline junkie visiting Phuket</strong> or looking for the most thrilling experience during your Thailand vacation, our slingshot delivers pure, unfiltered excitement. This <strong className="text-orange-400">extreme launch experience</strong> is perfect for those seeking something beyond traditional ziplines and adventure activities.
                </p>
                
                <p>
                  Located within the stunning Hanuman World adventure park, the slingshot can be enjoyed as a standalone experience or combined with our world-famous zipline courses, roller zipline, and skywalk for the ultimate <strong className="text-white">Phuket adventure day</strong>. Free hotel transfers available from all major tourist areas including Patong, Kata, Karon, and Phuket Town.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Section 4: CTA with Testimonial */}
      <Section 
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #0d1259 50%, #2d1b4e 100%)' }}
      >
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <blockquote className="text-xl text-white/90 mb-6 italic leading-relaxed">
                  "The slingshot was absolutely INSANE! I've done bungee jumps and skydiving, but nothing prepared me for this rush. The launch is so sudden and powerful - my heart was pounding for an hour after. Best ฿350 I've ever spent!"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl">
                    M
                  </div>
                  <div>
                    <div className="font-semibold text-white">Michael T.</div>
                    <div className="text-white/50 text-sm">Sydney, Australia</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
            </motion.div>

            {/* Right - CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-oswald)] font-bold text-white mb-4">
                READY TO <span className="text-orange-400">FLY?</span>
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-md">
                Don't just visit Phuket - launch yourself into an unforgettable adventure!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href={`/booking?package=${pkg.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl shadow-lg shadow-orange-500/30"
                  >
                    BOOK SLINGSHOT
                  </motion.button>
                </Link>
                <Link href="/packages/combined">
                  <button className="px-10 py-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xl transition-all duration-300 border border-white/20">
                    VIEW COMBO DEALS
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

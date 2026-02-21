'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Utensils, Bus } from 'lucide-react';
import { Container, Section, SectionHeader, Badge } from '@/components/ui';
import { packages } from '@/lib/data/packages';
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
  totalActivities: 'TOTAL ACTIVITIES',
  rollerZiplineMetres: 'METRES ROLLER ZIPLINE',
  skywalkMetres: 'METRES SKY WALK',
};

const getContentGradient = (packageId?: string): string => {
  if (packageId === 'world-d-plus') return 'animated-card-bg-blue-green';
  if (packageId === 'world-b-plus') return 'animated-card-bg-mint';
  if (packageId === 'world-a-plus') return 'animated-card-bg-deep-blue';
  if (packageId === 'luge') return 'animated-card-bg-purple';
  if (['zipline-18', 'zipline-32', 'zipline-10', 'roller-zipline', 'skywalk', 'slingshot'].includes(packageId || '')) {
    return 'animated-card-bg-turquoise-mint';
  }
  return 'animated-card-bg-purple';
};

const getButtonGradient = (packageId?: string): string => {
  if (packageId === 'world-d-plus') return 'animated-btn-blue-green';
  if (packageId === 'world-b-plus') return 'animated-btn-mint';
  if (packageId === 'world-a-plus') return 'animated-btn-deep-blue';
  if (packageId === 'luge') return 'animated-btn-purple';
  if (['zipline-18', 'zipline-32', 'zipline-10', 'roller-zipline', 'skywalk', 'slingshot'].includes(packageId || '')) {
    return 'animated-btn-turquoise-mint';
  }
  return 'animated-btn-purple';
};

const getButtonBorder = (): string => {
  return 'animated-silver-border-btn';
};

const getRandomPosition = (index: number) => {
  const positions = [
    { top: '-90px', left: '5%', animationClass: 'animate-circle-orbit-1' },
    { top: '-40px', right: '10%', animationClass: 'animate-circle-orbit-2' },
    { top: '-80px', left: '15%', animationClass: 'animate-circle-orbit-3' },
    { top: '-70px', right: '5%', animationClass: 'animate-circle-orbit-1' },
    { top: '-90px', right: '20%', animationClass: 'animate-circle-orbit-2' },
    { top: '-50px', left: '10%', animationClass: 'animate-circle-orbit-3' },
  ];
  return positions[index % positions.length];
};

export function FeaturedPackages() {
  const worldAPlus = packages.find(pkg => pkg.id === 'world-a-plus');
  const mainPackages = useMemo(() => 
    packages.filter(pkg => !['world-a-plus', 'roller-zipline', 'skywalk', 'slingshot', 'luge'].includes(pkg.id)),
    []
  );
  const threeColumnPackages = useMemo(() => 
    packages.filter(pkg => ['roller-zipline', 'skywalk', 'slingshot'].includes(pkg.id)),
    []
  );
  const lugePackage = packages.find(pkg => pkg.id === 'luge');

  return (
    <Section className="relative overflow-hidden" style={{ backgroundColor: '#0d1259' }}>
      
      {/* Big Circle Background Decorations */}
      <img 
        src="/images/circlebig.png"
        alt=""
        className="absolute w-[800px] h-[800px] opacity-15 pointer-events-none object-contain top-[5%] left-[5%] animate-spin-slow"
      />
      <img 
        src="/images/circlebig.png"
        alt=""
        className="absolute w-[800px] h-[800px] opacity-15 pointer-events-none object-contain top-[25%] right-[8%] animate-spin-slow-reverse"
      />
      <img 
        src="/images/circlebig.png"
        alt=""
        className="absolute w-[800px] h-[800px] opacity-15 pointer-events-none object-contain top-[55%] left-[10%] animate-spin-slow"
      />
      <Container className="relative z-10">
        <SectionHeader
          title="Our Adventure Packages"
          subtitle="Choose from our exciting range of experiences and create unforgettable memories"
        />

        {/* World A+ Featured Horizontal Card */}
        {worldAPlus && (
          <div className="mb-8">
            <motion.div
              className="group relative"
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-[3px] rounded-2xl animated-silver-border">
                <div className="relative flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-gradient-to-b lg:bg-gradient-to-r from-primary/90 to-primary-dark transition-all duration-300">
                  <div className="relative h-72 lg:h-auto lg:w-[40%] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${worldAPlus.image})`, backgroundColor: '#1a237e' }}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge>{worldAPlus.duration}</Badge>
                    </div>
                  </div>
                  
                  <div className={`relative p-5 sm:p-8 lg:p-10 flex flex-col justify-center lg:w-[60%] lg:min-h-[400px] ${getContentGradient(worldAPlus.id)} overflow-hidden`}>
                    <div 
                      className="absolute w-[512px] h-[512px] opacity-10 pointer-events-none animate-circle-orbit-1"
                      style={{
                        backgroundImage: 'url(/images/circlebg.png)',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        top: '-10%',
                        right: '-15%',
                      }}
                    />
                    
                    <h3 className="text-[35px] sm:text-4xl md:text-5xl lg:text-[65px] font-[family-name:var(--font-oswald)] font-medium tracking-wide text-white mb-3 relative z-10 text-center">
                      {worldAPlus.name}
                    </h3>
                    
                    {worldAPlus.stats && (
                      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-3 relative z-10">
                        {Object.entries(worldAPlus.stats).slice(0, 7).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-oswald)]">{value}</div>
                            <div className="text-[10px] sm:text-[10px] md:text-[11px] text-white/80 uppercase font-semibold tracking-wider">{statLabels[key] || key}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-3 relative z-10">
                      {worldAPlus.includesMeal && (
                        <span className="flex items-center gap-1 px-2 py-1 bg-yellow-400 text-black text-xs rounded-full">
                          <Utensils className="w-3 h-3" />
                          Free Meal
                        </span>
                      )}
                      {worldAPlus.includesTransfer && (
                        <span className="flex items-center gap-1 px-2 py-1 bg-yellow-400 text-black text-xs rounded-full">
                          <Bus className="w-3 h-3" />
                          Round Trip Transfer
                        </span>
                      )}
                    </div>
                    
                    <Link href={`/booking?package=${worldAPlus.id}`} className="block relative z-10">
                      <div className="p-[2px] rounded-xl transition-all duration-300 hover:scale-105 animated-silver-border-btn">
                        <button className={`relative z-10 w-full flex items-center justify-center gap-2 py-3 rounded-xl ${getButtonGradient(worldAPlus.id)} text-white transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden`}>
                          <CheckCircle className="w-4 h-4 flex-shrink-0" />
                          <span className="font-[family-name:var(--font-oswald)] font-normal tracking-wide text-xs sm:text-sm md:text-[19px]">
                            BOOK NOW: {formatPrice(worldAPlus.price)} / PERSON
                          </span>
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Main Packages Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {mainPackages.map((pkg, index) => {
            const borderClass = 'p-[3px] rounded-2xl animated-silver-border h-full';
            
            const stats = pkg.stats ? Object.entries(pkg.stats) : [];
            const showStats = stats.length > 2;
            const statsInOneRow = stats.length <= 4;
            
            return (
              <motion.div key={pkg.id} variants={staggerItem} className="group relative h-full">
                <div className={borderClass}>
                  <div className="relative z-10 h-full flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-primary/90 to-primary-dark transition-all duration-300">
                    <div className="relative h-72 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${pkg.image})`, backgroundColor: '#1a237e' }}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge>{pkg.duration}</Badge>
                      </div>
                    </div>
                    
                    <div className={`relative p-5 flex flex-col flex-grow ${getContentGradient(pkg.id)} overflow-hidden`}>
                      <div 
                        className={`absolute w-96 h-96 opacity-10 pointer-events-none ${getRandomPosition(index).animationClass}`}
                        style={{
                          backgroundImage: 'url(/images/circlebg.png)',
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          ...getRandomPosition(index),
                        }}
                      />
                      
                      <h3 className="text-[35px] font-[family-name:var(--font-oswald)] font-normal tracking-wide text-white mb-3 text-center relative z-10">
                        {pkg.name}
                      </h3>
                      
                      {showStats && (
                        <>
                          {pkg.id === 'world-c-plus' ? (
                            <>
                              <div className="grid grid-cols-4 gap-2 mb-3 relative z-10">
                                {stats.slice(0, 4).map(([key, value]) => (
                                  <div key={key} className="text-center">
                                    <div className="text-2xl font-bold text-white font-[family-name:var(--font-oswald)]">{value}</div>
                                    <div className="text-[10px] text-white/80 uppercase font-semibold tracking-wider">{statLabels[key] || key}</div>
                                  </div>
                                ))}
                              </div>
                              {stats.length > 4 && (
                                <div className="flex justify-center gap-4 mb-3 relative z-10">
                                  {stats.slice(4).map(([key, value]) => (
                                    <div key={key} className="text-center">
                                      <div className="text-2xl font-bold text-white font-[family-name:var(--font-oswald)]">{value}</div>
                                      <div className="text-[10px] text-white/80 uppercase font-semibold tracking-wider">{statLabels[key] || key}</div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <>
                              <div className={`grid ${statsInOneRow ? `grid-cols-${Math.min(stats.length, 5)}` : 'grid-cols-5'} gap-2 mb-3 relative z-10`}>
                                {stats.slice(0, statsInOneRow ? stats.length : 5).map(([key, value]) => (
                                  <div key={key} className="text-center">
                                    <div className="text-2xl font-bold text-white font-[family-name:var(--font-oswald)]">{value}</div>
                                    <div className="text-[10px] text-white/80 uppercase font-semibold tracking-wider">{statLabels[key] || key}</div>
                                  </div>
                                ))}
                              </div>
                              {!statsInOneRow && stats.length > 5 && (
                                <div className="flex justify-center gap-4 mb-3 relative z-10">
                                  {stats.slice(5).map(([key, value]) => (
                                    <div key={key} className="text-center">
                                      <div className="text-2xl font-bold text-white font-[family-name:var(--font-oswald)]">{value}</div>
                                      <div className="text-[10px] text-white/80 uppercase font-semibold tracking-wider">{statLabels[key] || key}</div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </>
                          )}
                        </>
                      )}
                      
                      {(pkg.includesMeal || pkg.includesTransfer) && (
                        <div className="flex justify-center gap-2 mb-3 relative z-10">
                          {pkg.includesMeal && (
                            <span className="flex items-center gap-1 px-2 py-1 bg-yellow-400 text-black text-xs rounded-full">
                              <Utensils className="w-3 h-3" />
                              Free Meal
                            </span>
                          )}
                          {pkg.includesTransfer && (
                            <span className="flex items-center gap-1 px-2 py-1 bg-yellow-400 text-black text-xs rounded-full">
                              <Bus className="w-3 h-3" />
                              Round Trip Transfer
                            </span>
                          )}
                        </div>
                      )}
                      
                      <Link href={`/booking?package=${pkg.id}`} className="block mt-auto relative z-10">
                        <div className={`p-[2px] rounded-xl transition-all duration-300 hover:scale-105 ${getButtonBorder()}`}>
                          <button className={`relative z-10 w-full flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-3.5 rounded-xl ${getButtonGradient(pkg.id)} text-white transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden`}>
                            <CheckCircle className="w-4 h-4 sm:w-[19px] sm:h-[19px] flex-shrink-0" />
                            <span className="font-[family-name:var(--font-oswald)] font-normal tracking-wide text-xs sm:text-sm md:text-[19px]">
                              BOOK: {formatPrice(pkg.price)}
                            </span>
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Three Column Section (Roller, Skywalk, Slingshot) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
        >
          {threeColumnPackages.map((pkg, index) => (
            <motion.div key={pkg.id} variants={staggerItem} className="group relative h-full">
              <div className="p-[3px] rounded-2xl animated-silver-border h-full">
                <div className="relative z-10 h-full flex flex-col rounded-2xl overflow-hidden bg-gradient-to-b from-primary/90 to-primary-dark transition-all duration-300">
                  <div className="relative h-72 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${pkg.image})`, backgroundColor: '#1a237e' }}
                    />
                  </div>
                  
                  <div className={`relative p-5 flex flex-col flex-grow ${getContentGradient(pkg.id)} overflow-hidden`}>
                    <div 
                      className={`absolute w-96 h-96 opacity-10 pointer-events-none ${getRandomPosition(index + 10).animationClass}`}
                      style={{
                        backgroundImage: 'url(/images/circlebg.png)',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        ...getRandomPosition(index + 10),
                      }}
                    />
                    
                    <h3 className="text-[35px] font-[family-name:var(--font-oswald)] font-normal tracking-wide text-white mb-3 text-center relative z-10">
                      {pkg.name}
                    </h3>
                    
                    <Link href={`/booking?package=${pkg.id}`} className="block mt-auto relative z-10">
                      <div className={`p-[2px] rounded-xl transition-all duration-300 hover:scale-105 ${getButtonBorder()}`}>
                        <button className={`relative z-10 w-full flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-3.5 rounded-xl ${getButtonGradient(pkg.id)} text-white transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden`}>
                          <CheckCircle className="w-4 h-4 sm:w-[19px] sm:h-[19px] flex-shrink-0" />
                          <span className="font-[family-name:var(--font-oswald)] font-normal tracking-wide text-xs sm:text-sm md:text-[19px]">
                            BOOK: {formatPrice(pkg.price)}
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

        {/* Hanuman Luge - Full Width Single Column */}
        {lugePackage && (
          <div className="mt-8">
            <motion.div
              className="group relative"
              variants={staggerItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-[3px] rounded-2xl animated-silver-border">
                <div className="relative flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-gradient-to-b lg:bg-gradient-to-r from-primary/90 to-primary-dark transition-all duration-300">
                  <div className="relative h-72 lg:h-auto lg:w-[40%] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${lugePackage.image})`, backgroundColor: '#1a237e' }}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge>{lugePackage.duration}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="accent" className="bg-purple-500/90 text-white">NEW ATTRACTION</Badge>
                    </div>
                  </div>
                  
                  <div 
                    className="relative p-5 sm:p-8 lg:p-10 flex flex-col justify-center lg:w-[60%] lg:min-h-[350px] overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #2a1a5c 35%, #0d1259 70%, #1a237e 100%)' }}
                  >
                    <div 
                      className="absolute w-[512px] h-[512px] opacity-10 pointer-events-none animate-circle-orbit-1"
                      style={{
                        backgroundImage: 'url(/images/circlebg.png)',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        top: '-10%',
                        right: '-15%',
                      }}
                    />
                    
                    <div className="text-center mb-2 relative z-10">
                      <span className="text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">Part of Hanuman World</span>
                    </div>
                    
                    <h3 className="text-[35px] sm:text-4xl md:text-[55px] font-[family-name:var(--font-oswald)] font-medium tracking-wide text-white mb-3 relative z-10 text-center">
                      {lugePackage.name}
                    </h3>
                    
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 mb-3 relative z-10">
                      <div className="text-center">
                        <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-oswald)]">650m</div>
                        <div className="text-[10px] sm:text-[10px] md:text-[11px] text-white/80 uppercase font-semibold tracking-wider">TRACK LENGTH</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-oswald)]">100%</div>
                        <div className="text-[10px] sm:text-[10px] md:text-[11px] text-white/80 uppercase font-semibold tracking-wider">YOU CONTROL</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-oswald)]">ALL</div>
                        <div className="text-[10px] sm:text-[10px] md:text-[11px] text-white/80 uppercase font-semibold tracking-wider">AGES WELCOME</div>
                      </div>
                    </div>
                    
                    <p className="text-white/80 text-center text-sm mb-3 relative z-10 max-w-xl mx-auto">
                      Phuket's first gravity luge! Race down 650m of jungle track. Combine with any zipline package for the ultimate adventure.
                    </p>
                    
                    <Link href={`/booking?package=${lugePackage.id}`} className="block relative z-10">
                      <div className="p-[2px] rounded-xl transition-all duration-300 hover:scale-105 animated-silver-border-btn">
                        <button className={`relative z-10 w-full flex items-center justify-center gap-2 py-3 rounded-xl animated-btn-purple text-white transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden`}>
                          <CheckCircle className="w-4 h-4 flex-shrink-0" />
                          <span className="font-[family-name:var(--font-oswald)] font-normal tracking-wide text-xs sm:text-sm md:text-[19px]">
                            BOOK NOW: {formatPrice(lugePackage.price)} / PERSON
                          </span>
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </Container>
    </Section>
  );
}

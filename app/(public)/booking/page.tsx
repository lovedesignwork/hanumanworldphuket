'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Calendar, Clock, Users, Minus, Plus, Car, Navigation, 
  MapPin, ShieldCheck, CalendarDays, ArrowRight, Hotel
} from 'lucide-react';
import { Container, Section, Badge, CalendarPicker } from '@/components/ui';
import { packages } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';

const timeSlots = [
  { time: '08:00', label: '8:00 AM', available: true },
  { time: '09:00', label: '9:00 AM', available: true },
  { time: '10:00', label: '10:00 AM', available: true },
  { time: '13:00', label: '1:00 PM', available: true },
  { time: '14:00', label: '2:00 PM', available: true },
  { time: '15:00', label: '3:00 PM', available: true },
];

const allBookablePackages = packages.filter(pkg => 
  ['world-a-plus', 'world-b-plus', 'world-c-plus', 'world-d-plus', 'zipline-32', 'zipline-18', 'zipline-10', 'roller-zipline', 'skywalk', 'slingshot'].includes(pkg.id)
);

const addonPackages = packages.filter(pkg => 
  ['roller-zipline', 'skywalk', 'slingshot', 'luge'].includes(pkg.id)
);

// Promotional add-ons
const promotionalAddons = [
  {
    id: 'luge-2-rides',
    name: 'Luge 2 Rides',
    description: 'Kids aged 4-9 years must ride the Luge with a guardian. Kids above 10 years can ride alone.',
    price: 800,
    originalPrice: 1000,
    discount: '20% off',
    image: '/images/lugee.jpg',
  },
  {
    id: 'zipline-photos',
    name: 'Zipline Photos',
    description: 'Zipline Photography Services 10% OFF',
    price: 770,
    originalPrice: 856,
    discount: '10% off',
    image: '/images/Package%20image/32PF.JPG',
  },
  {
    id: 'roller-videos',
    name: 'Roller Videos',
    description: 'Roller Videos 20% OFF',
    price: 428,
    originalPrice: 535,
    discount: '20% off',
    image: '/images/Package%20image/roller.jpg',
  },
];

const PRIVATE_TRANSFER_PRICE = 2500;
const NON_PLAYER_PRICE = 300;
const MAX_PRIVATE_PASSENGERS = 10;

function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Selected package
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const selectedPackage = packages.find(p => p.id === selectedPackageId);

  // Auto-select package from URL parameter
  useEffect(() => {
    const packageParam = searchParams.get('package');
    if (packageParam) {
      const foundPackage = packages.find(p => p.id === packageParam);
      if (foundPackage) {
        setSelectedPackageId(packageParam);
      }
    }
  }, [searchParams]);

  // Form state
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  
  // Pickup options
  const [needPickup, setNeedPickup] = useState(true);
  const [hotelName, setHotelName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  
  // Add-ons
  const [privateTransfer, setPrivateTransfer] = useState(false);
  const [privateTransferPassengers, setPrivateTransferPassengers] = useState(1);
  const [nonPlayerCount, setNonPlayerCount] = useState(0);
  
  // Dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Selected add-ons
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  
  // Promotional add-ons with quantity
  const [promoAddonQuantities, setPromoAddonQuantities] = useState<Record<string, number>>({});


  // Update private transfer passengers min when guest count changes
  const handleGuestCountChange = (delta: number) => {
    const newCount = Math.max(1, guestCount + delta);
    setGuestCount(newCount);
    if (privateTransferPassengers < newCount) {
      setPrivateTransferPassengers(newCount);
    }
  };

  // Select package from dropdown
  const handleSelectPackage = (pkgId: string) => {
    setSelectedPackageId(pkgId);
    setIsDropdownOpen(false);
    setSelectedAddons([]);
  };

  // Toggle addon selection
  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  // Get available addons (exclude the selected main package)
  const availableAddons = addonPackages.filter(pkg => pkg.id !== selectedPackageId);

  // Update promo addon quantity
  const updatePromoAddonQty = (addonId: string, delta: number) => {
    setPromoAddonQuantities(prev => {
      const current = prev[addonId] || 0;
      const newQty = Math.max(0, current + delta);
      return { ...prev, [addonId]: newQty };
    });
  };

  // Price calculations
  const prices = useMemo(() => {
    if (!selectedPackage) return { base: 0, addons: 0, promoAddons: 0, transfer: 0, total: 0 };
    
    const base = selectedPackage.price * guestCount;

    let addons = 0;
    selectedAddons.forEach(addonId => {
      const addon = packages.find(p => p.id === addonId);
      if (addon) {
        addons += addon.price * guestCount;
      }
    });

    let promoAddons = 0;
    Object.entries(promoAddonQuantities).forEach(([addonId, qty]) => {
      if (qty > 0) {
        const promo = promotionalAddons.find(p => p.id === addonId);
        if (promo) {
          promoAddons += promo.price * qty;
        }
      }
    });

    let transfer = 0;
    if (privateTransfer) {
      transfer = PRIVATE_TRANSFER_PRICE;
    } else if (!needPickup) {
      transfer = 0;
    } else if (nonPlayerCount > 0) {
      transfer = nonPlayerCount * NON_PLAYER_PRICE;
    }

    return {
      base,
      addons,
      promoAddons,
      transfer,
      total: base + addons + promoAddons + transfer
    };
  }, [selectedPackage, guestCount, selectedAddons, promoAddonQuantities, privateTransfer, needPickup, nonPlayerCount]);

  const isFormValid = selectedPackageId && selectedDate && selectedTime && 
    (selectedPackage?.includesTransfer ? (needPickup ? hotelName.trim() : true) : true);

  // Handle proceed to checkout
  const handleProceedToCheckout = () => {
    if (!isFormValid) return;
    
    // Build promo addons string (format: "id:qty,id:qty")
    const promoAddonsStr = Object.entries(promoAddonQuantities)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => `${id}:${qty}`)
      .join(',');
    
    // Build URL params
    const params = new URLSearchParams({
      package: selectedPackageId!,
      date: selectedDate,
      time: selectedTime,
      guests: guestCount.toString(),
      pickup: needPickup.toString(),
      hotel: hotelName,
      room: roomNumber,
      privateTransfer: privateTransfer.toString(),
      privatePassengers: privateTransferPassengers.toString(),
      nonPlayers: nonPlayerCount.toString(),
    });
    
    if (promoAddonsStr) {
      params.set('promoAddons', promoAddonsStr);
    }
    
    router.push(`/checkout?${params.toString()}`);
  };

  return (
    <main className="min-h-screen pt-20 bg-[#0d1259]">
      <Section 
        className="relative overflow-hidden min-h-[calc(100vh-80px)]"
        style={{ background: 'linear-gradient(135deg, #0d1259 0%, #1a237e 30%, #2a1a5c 60%, #0d1259 100%)' }}
      >
        <Container className="relative z-10">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-10">
            <Badge variant="accent" className="mb-3 sm:mb-4">BOOK YOUR ADVENTURE</Badge>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-[family-name:var(--font-oswald)] font-medium text-white mb-2 sm:mb-4">
              SELECT YOUR PACKAGE
            </h1>
            <p className="text-sm sm:text-lg text-white/70 max-w-2xl mx-auto px-2">
              Choose your adventure package and complete your booking
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Package Selection Dropdown */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-[family-name:var(--font-oswald)] font-medium text-white mb-4">
                  CHOOSE YOUR PACKAGE
                </h2>
                
                {/* Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedPackage 
                        ? 'border-accent bg-accent/10' 
                        : 'border-white/20 bg-white/5 hover:border-white/30'
                    }`}
                  >
                    {selectedPackage ? (
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div 
                          className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg bg-cover bg-center flex-shrink-0"
                          style={{ backgroundImage: `url(${selectedPackage.image})` }}
                        />
                        <div className="flex-grow min-w-0">
                          <h3 className="text-lg sm:text-xl md:text-[29px] font-[family-name:var(--font-oswald)] font-medium text-white truncate">
                            {selectedPackage.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-1 sm:gap-3 text-xs sm:text-sm text-white/60">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {selectedPackage.duration}
                            </span>
                            {selectedPackage.includesMeal && (
                              <span className="text-green-400 text-xs">✓ Meal</span>
                            )}
                            {selectedPackage.includesTransfer && (
                              <span className="text-green-400 text-xs">✓ Transfer</span>
                            )}
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-base sm:text-xl font-[family-name:var(--font-oswald)] font-medium text-accent">
                            {formatPrice(selectedPackage.price)}
                          </div>
                          <div className="text-[10px] sm:text-xs text-white/50">per person</div>
                        </div>
                        <svg className={`w-4 h-4 sm:w-5 sm:h-5 text-white/50 transition-transform flex-shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <span className="text-white/50">Select a package...</span>
                        <svg className={`w-5 h-5 text-white/50 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 w-full mt-2 rounded-xl border-2 border-white/20 bg-[#1a237e] shadow-2xl overflow-hidden max-h-[400px] overflow-y-auto"
                      >
                        {allBookablePackages.map((pkg) => (
                          <div
                            key={pkg.id}
                            onClick={() => handleSelectPackage(pkg.id)}
                            className={`p-4 cursor-pointer transition-all duration-200 border-b border-white/10 last:border-b-0 ${
                              selectedPackageId === pkg.id 
                                ? 'bg-accent/20' 
                                : 'hover:bg-white/10'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div 
                                className="w-14 h-14 rounded-lg bg-cover bg-center flex-shrink-0"
                                style={{ backgroundImage: `url(${pkg.image})` }}
                              />
                              <div className="flex-grow min-w-0">
                                <h3 className="text-base font-[family-name:var(--font-oswald)] font-medium text-white">
                                  {pkg.name}
                                </h3>
                                <div className="flex items-center gap-2 text-xs text-white/60">
                                  <span>{pkg.duration}</span>
                                  {pkg.includesMeal && <span className="text-green-400">✓ Meal</span>}
                                  {pkg.includesTransfer && <span className="text-green-400">✓ Transfer</span>}
                                </div>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <div className="text-lg font-[family-name:var(--font-oswald)] font-medium text-accent">
                                  {formatPrice(pkg.price)}
                                </div>
                              </div>
                              {selectedPackageId === pkg.id && (
                                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                              )}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Popular Packages Preview (when no package selected) */}
                {!selectedPackage && (
                  <div className="mt-6">
                    <h3 className="text-lg font-[family-name:var(--font-oswald)] font-medium text-white/70 mb-3">
                      Popular packages:
                    </h3>
                    <div className="space-y-2">
                      {allBookablePackages.slice(0, 7).map((pkg) => (
                        <div
                          key={pkg.id}
                          onClick={() => handleSelectPackage(pkg.id)}
                          className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                          <div 
                            className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-lg bg-cover bg-center flex-shrink-0"
                            style={{ backgroundImage: `url(${pkg.image})` }}
                          />
                          <div className="flex-grow min-w-0">
                            <h4 className="text-lg sm:text-xl md:text-[30px] font-[family-name:var(--font-oswald)] font-medium text-white truncate">
                              {pkg.name}
                            </h4>
                            <p className="text-xs text-white/50">{pkg.duration}</p>
                          </div>
                          <div className="text-base sm:text-lg md:text-[26px] text-accent font-[family-name:var(--font-oswald)] font-medium flex-shrink-0">
                            {formatPrice(pkg.price)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Promotional Add-ons */}
                <AnimatePresence>
                  {selectedPackage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-6"
                    >
                      {/* Promotional Add-ons */}
                      <div className="mt-6">
                        <h3 className="font-[family-name:var(--font-oswald)] text-white mb-3 flex items-center gap-2" style={{ fontSize: '23px', fontWeight: 400 }}>
                          ADD ON & PROMOTION
                        </h3>
                        <div className="space-y-3">
                          {promotionalAddons
                            .filter((promo) => {
                              if (!selectedPackage) return false;
                              const pkgCategory = selectedPackage.category;
                              const pkgFeatures = selectedPackage.features?.join(' ').toLowerCase() || '';
                              const hasZipline = pkgCategory === 'zipline' || pkgCategory === 'combined' || pkgFeatures.includes('zipline');
                              const hasRoller = pkgCategory === 'roller' || pkgCategory === 'combined' || pkgFeatures.includes('roller');
                              const hasLuge = pkgCategory === 'luge' || pkgFeatures.includes('luge');
                              
                              if (promo.id === 'zipline-photos') return hasZipline;
                              if (promo.id === 'roller-videos') return hasRoller;
                              if (promo.id === 'luge-2-rides') return true;
                              return true;
                            })
                            .map((promo) => {
                            const qty = promoAddonQuantities[promo.id] || 0;
                            return (
                              <div
                                key={promo.id}
                                className="p-3 sm:p-4 rounded-xl border-2 border-white/20 relative overflow-hidden"
                                style={{ background: 'linear-gradient(135deg, #0d1259 0%, #0d4a4a 50%, #2a1a5c 100%)' }}
                              >
                                {/* Rotating circle decoration */}
                                <img 
                                  src="/images/circlebg.png" 
                                  alt=""
                                  className="absolute -right-10 -bottom-10 w-[120px] sm:w-[160px] h-[120px] sm:h-[160px] opacity-20 animate-spin-slow"
                                />
                                <div className="flex gap-2 sm:gap-4 relative z-10">
                                  {/* Image */}
                                  <div 
                                    className="w-[80px] sm:w-[120px] md:w-[50%] aspect-square sm:aspect-[10/8] rounded-lg bg-cover bg-center flex-shrink-0"
                                    style={{ backgroundImage: `url(${promo.image})` }}
                                  />
                                  
                                  {/* Info & Quantity */}
                                  <div className="flex-grow min-w-0">
                                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-1">
                                      <h4 className="text-base sm:text-lg md:text-[23px] font-[family-name:var(--font-oswald)] font-normal text-white">
                                        {promo.name}
                                      </h4>
                                      {promo.discount && (
                                        <span className="px-1.5 sm:px-2 py-0.5 bg-orange-500 text-white text-[10px] sm:text-xs font-medium rounded">
                                          {promo.discount}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[10px] sm:text-xs text-white/60 mb-1 sm:mb-2 line-clamp-2">
                                      {promo.description}
                                    </p>
                                    
                                    {/* Price */}
                                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                                      {promo.originalPrice && (
                                        <span className="text-xs sm:text-base text-white/40 line-through">
                                          {formatPrice(promo.originalPrice)}
                                        </span>
                                      )}
                                      <span className="text-lg sm:text-2xl font-[family-name:var(--font-oswald)] font-medium text-orange-400">
                                        {formatPrice(promo.price)}
                                      </span>
                                    </div>
                                    
                                    {/* Quantity Selector - Below Price */}
                                    <div className="flex items-center gap-2 sm:gap-3">
                                      <p className="text-[9px] sm:text-[10px] text-white/40 uppercase">Player</p>
                                      <div className="flex items-center gap-1 sm:gap-2">
                                        <button
                                          onClick={() => updatePromoAddonQty(promo.id, -1)}
                                          disabled={qty <= 0}
                                          className="h-7 w-7 sm:h-8 sm:w-8 rounded border-2 border-orange-500 bg-orange-500 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 disabled:opacity-30 disabled:cursor-not-allowed"
                                        >
                                          <Minus className="w-3 h-3 text-white" />
                                        </button>
                                        <span className="w-6 sm:w-8 text-center text-base sm:text-lg font-bold text-white">{qty}</span>
                                        <button
                                          onClick={() => updatePromoAddonQty(promo.id, 1)}
                                          className="h-7 w-7 sm:h-8 sm:w-8 rounded border-2 border-orange-500 bg-orange-500 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600"
                                        >
                                          <Plus className="w-3 h-3 text-white" />
                                        </button>
                                      </div>
                                    </div>
                                    
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div>
              <AnimatePresence mode="wait">
                {selectedPackage ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(15,32,60,0.10)]"
                    style={{ border: '2px solid #02134f' }}
                  >
                    {/* Form Header */}
                    <div 
                      className="px-4 sm:px-6 py-4 sm:py-5 relative overflow-hidden"
                      style={{ 
                        background: 'linear-gradient(135deg, #0d4a4a 0%, #0d1259 35%, #2a1a5c 70%, #1a237e 100%)',
                        borderBottom: '3px solid #02134f' 
                      }}
                    >
                      {/* Decorative circle */}
                      <img 
                        src="/images/circlebg.png" 
                        alt=""
                        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-28 sm:w-40 h-28 sm:h-40 opacity-30 animate-spin-slow"
                      />
                      
                      <p className="text-white/70 text-[10px] sm:text-xs uppercase tracking-wider mb-1 relative z-10">BOOK YOUR EXPERIENCE</p>
                      <h2 className="text-white font-[family-name:var(--font-oswald)] relative z-10 text-lg sm:text-xl md:text-[25px]" style={{ fontWeight: 400 }}>
                        {selectedPackage.name}
                      </h2>
                    </div>

                    {/* Form Body */}
                    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                      {/* Section 1: Date & Time */}
                      <div>
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-[#1a237e] flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">1</span>
                          <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1a237e]" />
                          <span className="font-bold text-slate-800 text-xs sm:text-sm">Select Date & Time</span>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] uppercase tracking-wider text-slate-400 mb-1.5">Activity Date</label>
                            <CalendarPicker
                              value={selectedDate}
                              onChange={setSelectedDate}
                              minDate={new Date().toISOString().split('T')[0]}
                            />
                          </div>
                          
                          <div>
                            <label className="block text-[10px] uppercase tracking-wider text-slate-400 mb-1.5">Time Slot</label>
                            <div className="grid grid-cols-2 gap-2">
                              {timeSlots.slice(0, 4).map((slot) => (
                                <button
                                  key={slot.time}
                                  onClick={() => setSelectedTime(slot.time)}
                                  disabled={!slot.available}
                                  className={`h-10 sm:h-11 px-2 sm:px-4 rounded-lg border-2 text-xs sm:text-sm font-medium transition-all ${
                                    selectedTime === slot.time
                                      ? 'border-[#1a237e] bg-[#1a237e] text-white'
                                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                                  } ${!slot.available && 'opacity-40 cursor-not-allowed'}`}
                                >
                                  {slot.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="h-px bg-slate-100" />

                      {/* Section 2: Number of Guests */}
                      <div>
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-[#1a237e] flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">2</span>
                          <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1a237e]" />
                          <span className="font-bold text-slate-800 text-xs sm:text-sm">Number of Players</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-slate-800 font-medium text-sm sm:text-base">Persons</span>
                            <p className="text-[10px] sm:text-xs text-slate-400">{formatPrice(selectedPackage.price)} per person</p>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3">
                            <button
                              onClick={() => handleGuestCountChange(-1)}
                              disabled={guestCount <= 1}
                              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border-2 border-[#1a237e] flex items-center justify-center hover:bg-[#1a237e]/10 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1a237e]" strokeWidth={2.5} />
                            </button>
                            <span className="w-8 sm:w-10 text-center text-xl sm:text-2xl font-bold text-slate-800 tabular-nums">
                              {guestCount}
                            </span>
                            <button
                              onClick={() => handleGuestCountChange(1)}
                              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border-2 border-[#1a237e] flex items-center justify-center hover:bg-[#1a237e]/10"
                            >
                              <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1a237e]" strokeWidth={2.5} />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="h-px bg-slate-100" />

                      {/* Section 3: Transport */}
                      <div>
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-[#1a237e] flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">3</span>
                          <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1a237e]" />
                          <span className="font-bold text-slate-800 text-xs sm:text-sm">Transport Options</span>
                        </div>

                        {/* Show pickup options only if package includes transfer */}
                        {selectedPackage.includesTransfer ? (
                          <>
                            {/* Pickup Toggle */}
                            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                              <button
                                onClick={() => setNeedPickup(true)}
                                className={`p-2.5 sm:p-4 rounded-xl border-2 text-left transition-all ${
                                  needPickup 
                                    ? 'border-[#1a237e] bg-[#1a237e]' 
                                    : 'border-slate-200 bg-slate-50'
                                }`}
                              >
                                <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                                  <Car className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${needPickup ? 'text-white' : 'text-slate-400'}`} />
                                  <span className={`text-xs sm:text-sm font-medium ${needPickup ? 'text-white' : 'text-slate-500'}`}>
                                    Hotel Pickup
                                  </span>
                                </div>
                                <p className={`text-[10px] sm:text-xs font-medium ${needPickup ? 'text-white/80' : 'text-green-600'}`}>FREE SHARED TRANSFER</p>
                              </button>
                              
                              <button
                                onClick={() => setNeedPickup(false)}
                                className={`p-2.5 sm:p-4 rounded-xl border-2 text-left transition-all ${
                                  !needPickup 
                                    ? 'border-[#1a237e] bg-[#1a237e]' 
                                    : 'border-slate-200 bg-slate-50'
                                }`}
                              >
                                <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                                  <Navigation className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${!needPickup ? 'text-white' : 'text-slate-400'}`} />
                                  <span className={`text-xs sm:text-sm font-medium ${!needPickup ? 'text-white' : 'text-slate-500'}`}>
                                    Come Direct
                                  </span>
                                </div>
                                <p className={`text-[10px] sm:text-xs ${!needPickup ? 'text-white/80' : 'text-slate-400'}`}>Self arrange</p>
                              </button>
                            </div>

                            {/* Hotel Details (when pickup selected) */}
                            <AnimatePresence>
                              {needPickup && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="space-y-3"
                            >
                              <div className="grid grid-cols-3 gap-3">
                                <div className="col-span-2">
                                  <label className="block text-[10px] uppercase tracking-wider text-slate-400 mb-1.5">Hotel Name *</label>
                                  <div className="relative">
                                    <Hotel className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a237e]" />
                                    <input
                                      type="text"
                                      value={hotelName}
                                      onChange={(e) => setHotelName(e.target.value)}
                                      placeholder="Your hotel name"
                                      className="w-full h-10 pl-10 pr-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#1a237e]"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label className="block text-[10px] uppercase tracking-wider text-slate-400 mb-1.5">Room #</label>
                                  <input
                                    type="text"
                                    value={roomNumber}
                                    onChange={(e) => setRoomNumber(e.target.value)}
                                    placeholder="101"
                                    className="w-full h-10 px-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#1a237e]"
                                  />
                                </div>
                              </div>

                              {/* Private Transfer Upgrade */}
                              <div 
                                onClick={() => setPrivateTransfer(!privateTransfer)}
                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                  privateTransfer 
                                    ? 'border-[#02134f] bg-blue-50/30' 
                                    : 'border-slate-200 bg-slate-50'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                      privateTransfer ? 'bg-[#02134f]' : 'bg-slate-200'
                                    }`}>
                                      <Car className={`w-5 h-5 ${privateTransfer ? 'text-white' : 'text-slate-500'}`} />
                                    </div>
                                    <div>
                                      <p className="font-medium text-slate-800 text-sm">Upgrade to Private Transfer</p>
                                      <p className="text-xs text-slate-500">Max {MAX_PRIVATE_PASSENGERS} passengers · +{formatPrice(PRIVATE_TRANSFER_PRICE)}</p>
                                    </div>
                                  </div>
                                  <div className={`w-11 h-6 rounded-full transition-colors ${privateTransfer ? 'bg-[#1a237e]' : 'bg-slate-300'}`}>
                                    <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform mt-0.5 ${privateTransfer ? 'translate-x-5 ml-0.5' : 'translate-x-0.5'}`} />
                                  </div>
                                </div>

                                {/* Passenger count when private transfer enabled */}
                                <AnimatePresence>
                                  {privateTransfer && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="mt-4 pt-4 border-t border-slate-200"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                          <div className="w-8 h-8 rounded-lg bg-[#1a237e]/10 flex items-center justify-center">
                                            <Users className="w-4 h-4 text-[#1a237e]" />
                                          </div>
                                          <div>
                                            <p className="text-sm font-medium text-slate-700">Total Passengers</p>
                                            <p className="text-xs text-slate-400">
                                              {guestCount} guests + {privateTransferPassengers - guestCount} additional · Max {MAX_PRIVATE_PASSENGERS}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <button
                                            onClick={() => setPrivateTransferPassengers(Math.max(guestCount, privateTransferPassengers - 1))}
                                            disabled={privateTransferPassengers <= guestCount}
                                            className="h-8 w-8 rounded-full border-2 border-[#1a237e] flex items-center justify-center hover:bg-[#1a237e]/10 disabled:opacity-30"
                                          >
                                            <Minus className="w-3 h-3 text-[#1a237e]" />
                                          </button>
                                          <span className="w-8 text-center font-bold text-slate-800">{privateTransferPassengers}</span>
                                          <button
                                            onClick={() => setPrivateTransferPassengers(Math.min(MAX_PRIVATE_PASSENGERS, privateTransferPassengers + 1))}
                                            disabled={privateTransferPassengers >= MAX_PRIVATE_PASSENGERS}
                                            className="h-8 w-8 rounded-full border-2 border-[#1a237e] flex items-center justify-center hover:bg-[#1a237e]/10 disabled:opacity-30"
                                          >
                                            <Plus className="w-3 h-3 text-[#1a237e]" />
                                          </button>
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>

                              {/* Non-player addon (only when private transfer OFF) */}
                              {!privateTransfer && (
                                <div className="p-4 rounded-xl border-2 border-slate-200 bg-slate-50">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-slate-500" />
                                      </div>
                                      <div>
                                        <p className="font-medium text-slate-800 text-sm">Additional Non-Player</p>
                                        <p className="text-xs text-slate-500">Shared transfer only · +{formatPrice(NON_PLAYER_PRICE)}/person</p>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={() => setNonPlayerCount(Math.max(0, nonPlayerCount - 1))}
                                        disabled={nonPlayerCount <= 0}
                                        className="h-8 w-8 rounded-full border-2 border-[#1a237e] flex items-center justify-center hover:bg-[#1a237e]/10 disabled:opacity-30"
                                      >
                                        <Minus className="w-3 h-3 text-[#1a237e]" />
                                      </button>
                                      <span className="w-8 text-center font-bold text-slate-800">{nonPlayerCount}</span>
                                      <button
                                        onClick={() => setNonPlayerCount(nonPlayerCount + 1)}
                                        className="h-8 w-8 rounded-full border-2 border-[#1a237e] flex items-center justify-center hover:bg-[#1a237e]/10"
                                      >
                                        <Plus className="w-3 h-3 text-[#1a237e]" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Meeting Point (when self-drive) */}
                            <AnimatePresence>
                              {!needPickup && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="p-4 rounded-xl border-2 border-[#1a237e]/30 bg-[#1a237e]/5"
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-[#1a237e]/10 flex items-center justify-center flex-shrink-0">
                                      <MapPin className="w-5 h-5 text-[#1a237e]" />
                                    </div>
                                    <div>
                                      <p className="font-medium text-slate-800">Hanuman World</p>
                                      <p className="text-xs text-slate-500 mt-1">105 Moo 4, Chaofa Road, Wichit, Muang, Phuket 83130</p>
                                      <a 
                                        href="https://maps.app.goo.gl/hkNWgQQi1ksvYY37A" 
                                        target="_blank"
                                        className="mt-2 inline-flex items-center gap-1 px-3 py-1.5 bg-yellow-400 hover:bg-yellow-500 text-black text-xs font-medium rounded-lg transition-colors"
                                      >
                                        Open in Google Maps →
                                      </a>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          /* Package does NOT include transfer - Show self-arrange only */
                          <div className="space-y-3 sm:space-y-4">
                            <div className="p-3 sm:p-4 rounded-xl border-2 border-amber-500/30 bg-amber-500/10">
                              <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                                <Navigation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" />
                                <span className="text-xs sm:text-sm font-medium text-slate-800">Self Transfer</span>
                              </div>
                              <p className="text-[10px] sm:text-xs text-slate-500">This package does not include transfer. Please arrange your own transportation to Hanuman World.</p>
                            </div>
                            
                            <div className="p-3 sm:p-4 rounded-xl border-2 border-[#1a237e]/30 bg-[#1a237e]/5">
                              <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#1a237e]/10 flex items-center justify-center flex-shrink-0">
                                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a237e]" />
                                </div>
                                <div className="min-w-0">
                                  <p className="font-medium text-slate-800 text-sm sm:text-base">Hanuman World</p>
                                  <p className="text-[10px] sm:text-xs text-slate-500 mt-1">105 Moo 4, Chaofa Road, Wichit, Muang, Phuket 83130</p>
                                  <a 
                                    href="https://maps.app.goo.gl/hkNWgQQi1ksvYY37A" 
                                    target="_blank"
                                    className="mt-2 inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 bg-yellow-400 hover:bg-yellow-500 text-black text-[10px] sm:text-xs font-medium rounded-lg transition-colors"
                                  >
                                    Open in Google Maps →
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="h-px bg-slate-100" />

                      {/* Price Summary */}
                      <div className="rounded-xl border border-slate-100 p-3 sm:p-4" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' }}>
                        <div className="space-y-1.5 sm:space-y-2">
                          <div className="flex justify-between text-xs sm:text-sm">
                            <span className="text-slate-500 truncate mr-2">{selectedPackage.name} × {guestCount}</span>
                            <span className="font-semibold text-slate-700 flex-shrink-0">{formatPrice(prices.base)}</span>
                          </div>
                          
                          {selectedAddons.length > 0 && selectedAddons.map(addonId => {
                            const addon = packages.find(p => p.id === addonId);
                            if (!addon) return null;
                            return (
                              <div key={addonId} className="flex justify-between text-xs sm:text-sm">
                                <span className="text-slate-500 truncate mr-2">{addon.name} × {guestCount}</span>
                                <span className="text-green-600 flex-shrink-0">+{formatPrice(addon.price * guestCount)}</span>
                              </div>
                            );
                          })}

                          {Object.entries(promoAddonQuantities).map(([addonId, qty]) => {
                            if (qty <= 0) return null;
                            const promo = promotionalAddons.find(p => p.id === addonId);
                            if (!promo) return null;
                            return (
                              <div key={addonId} className="flex justify-between text-xs sm:text-sm">
                                <span className="text-slate-500 truncate mr-2">{promo.name} × {qty}</span>
                                <span className="text-green-600 flex-shrink-0">+{formatPrice(promo.price * qty)}</span>
                              </div>
                            );
                          })}
                          
                          {privateTransfer && (
                            <div className="flex justify-between text-xs sm:text-sm">
                              <span className="text-slate-500">Private Transfer</span>
                              <span className="text-slate-600 flex-shrink-0">+{formatPrice(PRIVATE_TRANSFER_PRICE)}</span>
                            </div>
                          )}
                          
                          {!privateTransfer && nonPlayerCount > 0 && (
                            <div className="flex justify-between text-xs sm:text-sm">
                              <span className="text-slate-500">Non-Player × {nonPlayerCount}</span>
                              <span className="text-slate-600 flex-shrink-0">+{formatPrice(nonPlayerCount * NON_PLAYER_PRICE)}</span>
                            </div>
                          )}
                          
                          <div className="border-t border-slate-200/80 pt-2 sm:pt-3 mt-2 sm:mt-3 flex justify-between items-center">
                            <span className="font-medium text-slate-400 text-sm">Total</span>
                            <span className="text-xl sm:text-2xl font-extrabold" style={{ color: '#02134f' }}>
                              {formatPrice(prices.total)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="button"
                        onClick={handleProceedToCheckout}
                        disabled={!isFormValid}
                        className="w-full h-11 sm:h-13 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group text-sm sm:text-base"
                        style={{
                          backgroundColor: '#1a237e',
                          boxShadow: isFormValid ? '0 10px 40px rgba(26, 35, 126, 0.3)' : 'none'
                        }}
                      >
                        <span>Proceed to Checkout</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      {/* Trust Badges */}
                      <div className="flex items-center justify-center gap-3 sm:gap-6 text-[9px] sm:text-[10px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          Secure Payment
                        </span>
                        <span className="flex items-center gap-1">
                          <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          Instant Confirmation
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full min-h-[500px] flex items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-white/5"
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                        <CalendarDays className="w-10 h-10 text-white/30" />
                      </div>
                      <p className="text-white/50 text-lg">Select a package to continue</p>
                      <p className="text-white/30 text-sm mt-1">Choose from the options on the left</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen pt-20 bg-[#0d1259]">
        <Section className="relative overflow-hidden">
          <Container className="relative z-10">
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          </Container>
        </Section>
      </main>
    }>
      <BookingContent />
    </Suspense>
  );
}

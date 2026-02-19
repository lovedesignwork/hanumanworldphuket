'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Calendar, Clock, Users, Minus, Plus, Car, Navigation, 
  MapPin, ShieldCheck, CalendarDays, ArrowRight, Hotel
} from 'lucide-react';
import { Container, Section, Badge } from '@/components/ui';
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
  ['world-a-plus', 'world-b-plus', 'world-c-plus', 'world-d-plus', 'zipline-32', 'zipline-18', 'zipline-10', 'roller-zipline', 'skywalk', 'slingshot', 'luge'].includes(pkg.id)
);

const PRIVATE_TRANSFER_PRICE = 2500;
const NON_PLAYER_PRICE = 300;
const MAX_PRIVATE_PASSENGERS = 10;

export default function BookingPage() {
  // Selected package
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const selectedPackage = packages.find(p => p.id === selectedPackageId);

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
  };

  // Price calculations
  const prices = useMemo(() => {
    if (!selectedPackage) return { base: 0, transfer: 0, total: 0 };
    
    const base = selectedPackage.price * guestCount;

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
      transfer,
      total: base + transfer
    };
  }, [selectedPackage, guestCount, privateTransfer, needPickup, nonPlayerCount]);

  const isFormValid = selectedPackageId && selectedDate && selectedTime && (needPickup ? hotelName.trim() : true);

  return (
    <main className="min-h-screen pt-20 bg-[#0d1259]">
      <Section 
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0d1259 0%, #1a237e 30%, #2a1a5c 60%, #0d1259 100%)' }}
      >
        <Container className="relative z-10">
          {/* Header */}
          <div className="text-center mb-10">
            <Badge variant="accent" className="mb-4">BOOK YOUR ADVENTURE</Badge>
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-oswald)] font-medium text-white mb-4">
              SELECT YOUR PACKAGE
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Choose your adventure package and complete your booking
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Package Selection Dropdown */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-[family-name:var(--font-oswald)] font-medium text-white mb-4 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center text-sm font-bold">1</span>
                  Choose Your Package
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
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-16 h-16 rounded-lg bg-cover bg-center flex-shrink-0"
                          style={{ backgroundImage: `url(${selectedPackage.image})` }}
                        />
                        <div className="flex-grow min-w-0">
                          <h3 className="text-lg font-[family-name:var(--font-oswald)] font-medium text-white">
                            {selectedPackage.name}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-white/60">
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
                          <div className="text-xl font-[family-name:var(--font-oswald)] font-medium text-accent">
                            {formatPrice(selectedPackage.price)}
                          </div>
                          <div className="text-xs text-white/50">per person</div>
                        </div>
                        <svg className={`w-5 h-5 text-white/50 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

                {/* Package Description */}
                <AnimatePresence>
                  {selectedPackage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <p className="text-white/70 text-sm">{selectedPackage.description}</p>
                      {selectedPackage.features && selectedPackage.features.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {selectedPackage.features.slice(0, 5).map((feature, idx) => (
                            <span key={idx} className="px-2 py-1 rounded-md bg-white/10 text-xs text-white/80">
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}
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
                      className="px-6 py-5 relative overflow-hidden"
                      style={{ 
                        background: 'linear-gradient(135deg, #0d4a4a 0%, #0d1259 35%, #2a1a5c 70%, #1a237e 100%)',
                        borderBottom: '3px solid #02134f' 
                      }}
                    >
                      {/* Decorative circle */}
                      <img 
                        src="/images/circlebg.png" 
                        alt=""
                        className="absolute right-8 top-1/2 -translate-y-1/2 w-40 h-40 opacity-30 animate-spin-slow"
                      />
                      
                      <p className="text-white/70 text-xs uppercase tracking-wider mb-1 relative z-10">BOOK YOUR EXPERIENCE</p>
                      <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-oswald)] relative z-10">
                        {selectedPackage.name}
                      </h2>
                    </div>

                    {/* Form Body */}
                    <div className="p-6 space-y-6">
                      {/* Section 1: Date & Time */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="w-6 h-6 rounded-lg bg-[#1a237e] flex items-center justify-center text-xs font-bold text-white">1</span>
                          <CalendarDays className="w-4 h-4 text-[#1a237e]" />
                          <span className="font-bold text-slate-800 text-sm">Select Date & Time</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] uppercase tracking-wider text-slate-400 mb-1.5">Activity Date</label>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                min={new Date().toISOString().split('T')[0]}
                                className="w-full h-11 pl-10 pr-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#1a237e]"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-[10px] uppercase tracking-wider text-slate-400 mb-1.5">Time Slot</label>
                            <div className="flex flex-wrap gap-1.5">
                              {timeSlots.slice(0, 4).map((slot) => (
                                <button
                                  key={slot.time}
                                  onClick={() => setSelectedTime(slot.time)}
                                  disabled={!slot.available}
                                  className={`h-9 px-3 rounded-lg border-2 text-xs font-medium transition-all ${
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
                        <div className="flex items-center gap-2 mb-4">
                          <span className="w-6 h-6 rounded-lg bg-[#1a237e] flex items-center justify-center text-xs font-bold text-white">2</span>
                          <Users className="w-4 h-4 text-[#1a237e]" />
                          <span className="font-bold text-slate-800 text-sm">Number of Guests</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-slate-800 font-medium">Persons</span>
                            <p className="text-xs text-slate-400">{formatPrice(selectedPackage.price)} per person</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => handleGuestCountChange(-1)}
                              disabled={guestCount <= 1}
                              className="h-9 w-9 rounded-full border-2 border-[#1a237e] flex items-center justify-center hover:bg-[#1a237e]/10 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              <Minus className="w-4 h-4 text-[#1a237e]" strokeWidth={2.5} />
                            </button>
                            <span className="w-10 text-center text-2xl font-bold text-slate-800 tabular-nums">
                              {guestCount}
                            </span>
                            <button
                              onClick={() => handleGuestCountChange(1)}
                              className="h-9 w-9 rounded-full border-2 border-[#1a237e] flex items-center justify-center hover:bg-[#1a237e]/10"
                            >
                              <Plus className="w-4 h-4 text-[#1a237e]" strokeWidth={2.5} />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="h-px bg-slate-100" />

                      {/* Section 3: Transport */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="w-6 h-6 rounded-lg bg-[#1a237e] flex items-center justify-center text-xs font-bold text-white">3</span>
                          <Car className="w-4 h-4 text-[#1a237e]" />
                          <span className="font-bold text-slate-800 text-sm">Transport Options</span>
                        </div>

                        {/* Pickup Toggle */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <button
                            onClick={() => setNeedPickup(true)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                              needPickup 
                                ? 'border-[#1a237e] bg-[#1a237e]/10' 
                                : 'border-slate-200 bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <Car className={`w-4 h-4 ${needPickup ? 'text-[#1a237e]' : 'text-slate-400'}`} />
                              <span className={`text-sm font-medium ${needPickup ? 'text-slate-800' : 'text-slate-500'}`}>
                                Hotel Pickup
                              </span>
                            </div>
                            <p className="text-xs text-green-600 font-medium">FREE</p>
                          </button>
                          
                          <button
                            onClick={() => setNeedPickup(false)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                              !needPickup 
                                ? 'border-[#1a237e] bg-[#1a237e]/10' 
                                : 'border-slate-200 bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <Navigation className={`w-4 h-4 ${!needPickup ? 'text-[#1a237e]' : 'text-slate-400'}`} />
                              <span className={`text-sm font-medium ${!needPickup ? 'text-slate-800' : 'text-slate-500'}`}>
                                Come Direct
                              </span>
                            </div>
                            <p className="text-xs text-slate-400">Self arrange</p>
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
                                      <p className="font-medium text-slate-800 text-sm">Private Round-Trip Transfer</p>
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
                                            className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 disabled:opacity-30"
                                          >
                                            <Minus className="w-3 h-3" />
                                          </button>
                                          <span className="w-8 text-center font-bold text-slate-800">{privateTransferPassengers}</span>
                                          <button
                                            onClick={() => setPrivateTransferPassengers(Math.min(MAX_PRIVATE_PASSENGERS, privateTransferPassengers + 1))}
                                            disabled={privateTransferPassengers >= MAX_PRIVATE_PASSENGERS}
                                            className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 disabled:opacity-30"
                                          >
                                            <Plus className="w-3 h-3" />
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
                                        className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100 disabled:opacity-30"
                                      >
                                        <Minus className="w-3 h-3" />
                                      </button>
                                      <span className="w-8 text-center font-bold text-slate-800">{nonPlayerCount}</span>
                                      <button
                                        onClick={() => setNonPlayerCount(nonPlayerCount + 1)}
                                        className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-100"
                                      >
                                        <Plus className="w-3 h-3" />
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
                                    className="text-xs text-[#1a237e] font-medium mt-2 inline-block hover:underline"
                                  >
                                    Open in Google Maps →
                                  </a>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="h-px bg-slate-100" />

                      {/* Price Summary */}
                      <div className="rounded-xl border border-slate-100 p-4" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' }}>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-500 truncate">{selectedPackage.name} × {guestCount}</span>
                            <span className="font-semibold text-slate-700">{formatPrice(prices.base)}</span>
                          </div>
                          
                          {privateTransfer && (
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-500">Private Transfer</span>
                              <span className="text-slate-600">+{formatPrice(PRIVATE_TRANSFER_PRICE)}</span>
                            </div>
                          )}
                          
                          {!privateTransfer && nonPlayerCount > 0 && (
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-500">Non-Player × {nonPlayerCount}</span>
                              <span className="text-slate-600">+{formatPrice(nonPlayerCount * NON_PLAYER_PRICE)}</span>
                            </div>
                          )}
                          
                          <div className="border-t border-slate-200/80 pt-3 mt-3 flex justify-between">
                            <span className="font-medium text-slate-400">Total</span>
                            <span className="text-2xl font-extrabold" style={{ color: '#02134f' }}>
                              {formatPrice(prices.total)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        disabled={!isFormValid}
                        className="w-full h-13 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
                        style={{
                          backgroundColor: '#1a237e',
                          boxShadow: isFormValid ? '0 10px 40px rgba(26, 35, 126, 0.3)' : 'none'
                        }}
                      >
                        <span>Proceed to Checkout</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>

                      {/* Trust Badges */}
                      <div className="flex items-center justify-center gap-6 text-[10px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-4 h-4" />
                          Secure Payment
                        </span>
                        <span className="flex items-center gap-1">
                          <CalendarDays className="w-4 h-4" />
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

'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Calendar, Clock, Users, MapPin, Mail, Phone, Package, Car, UserMinus } from 'lucide-react';

interface BookingAddon {
  id: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  promo_addons: {
    id: string;
    name: string;
  };
}

interface BookingData {
  id: string;
  booking_ref: string;
  activity_date: string;
  time_slot: string;
  guest_count: number;
  non_playing_guests: number;
  total_amount: number;
  currency: string;
  packages: {
    name: string;
    slug: string;
  };
  booking_customers: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  };
  booking_addons: BookingAddon[];
  booking_transport: {
    type: string;
    pickup_location: string;
  } | null;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const bookingRef = searchParams.get('booking_ref');
  
  const [booking, setBooking] = useState<BookingData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      if (bookingRef) {
        try {
          const response = await fetch(`/api/bookings/${bookingRef}`);
          if (response.ok) {
            const data = await response.json();
            setBooking(data);
          }
        } catch (error) {
          console.error('Error fetching booking:', error);
        }
      }
      setLoading(false);
    };

    fetchBookingDetails();
  }, [bookingRef]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <main className="min-h-screen bg-[#1a237e]">
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header - Royal Blue Brand */}
          <div className="bg-gradient-to-r from-[#1a237e] to-[#0d1259] px-5 py-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <CheckCircle className="w-8 h-8 text-green-500" />
            </motion.div>
            <h1 className="text-xl md:text-2xl font-bold text-white mb-1 font-[family-name:var(--font-oswald)]">
              BOOKING CONFIRMED!
            </h1>
            <p className="text-white/80 text-sm">Thank you for booking with Hanuman World</p>
          </div>

          <div className="p-5">
            {/* Booking Reference */}
            <div className="bg-[#1a237e]/5 border border-[#1a237e]/10 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-500 uppercase tracking-wide">Booking Reference</span>
                <span className="text-lg font-bold text-[#1a237e]">{bookingRef || 'Loading...'}</span>
              </div>
              {booking?.booking_customers?.email && (
                <p className="text-xs text-slate-600">
                  A confirmation email has been sent to <span className="font-semibold text-[#1a237e]">{booking.booking_customers.email}</span> with all the booking details.
                </p>
              )}
            </div>

            {!loading && booking && (
              <>
                {/* Booking Details - Compact Grid */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">Booking Details</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {/* Package */}
                    <div className="col-span-2 flex items-center gap-2 p-3 bg-[#1a237e]/5 rounded-lg">
                      <Package className="w-4 h-4 text-[#1a237e]" />
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase">Package</p>
                        <p className="text-sm font-semibold text-slate-800">{booking.packages?.name || 'N/A'}</p>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                      <Calendar className="w-4 h-4 text-[#1a237e]" />
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase">Date</p>
                        <p className="text-xs font-medium text-slate-800">
                          {new Date(booking.activity_date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                    
                    {/* Time */}
                    <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                      <Clock className="w-4 h-4 text-[#1a237e]" />
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase">Time</p>
                        <p className="text-xs font-medium text-slate-800">
                          {booking.time_slot === 'flexible' ? '8AM - 6PM' : booking.time_slot}
                        </p>
                      </div>
                    </div>
                    
                    {/* Players */}
                    <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                      <Users className="w-4 h-4 text-[#1a237e]" />
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase">Players</p>
                        <p className="text-xs font-medium text-slate-800">{booking.guest_count} person(s)</p>
                      </div>
                    </div>

                    {/* Non-Playing Guests */}
                    {booking.non_playing_guests > 0 && (
                      <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                        <UserMinus className="w-4 h-4 text-[#1a237e]" />
                        <div>
                          <p className="text-[10px] text-slate-500 uppercase">Non-Players</p>
                          <p className="text-xs font-medium text-slate-800">{booking.non_playing_guests} person(s)</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Add-ons */}
                {booking.booking_addons && booking.booking_addons.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">Add-ons & Upgrades</h3>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-3">
                      <ul className="space-y-1">
                        {booking.booking_addons.map((addon, index) => (
                          <li key={index} className="flex items-center justify-between text-xs">
                            <span className="text-slate-700">
                              {addon.promo_addons?.name || 'Add-on'} × {addon.quantity}
                            </span>
                            <span className="font-medium text-green-700">{formatCurrency(addon.total_price)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Transport */}
                {booking.booking_transport && booking.booking_transport.type !== 'self' && (
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">Transport</h3>
                    <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-100 rounded-lg">
                      <Car className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="text-xs font-medium text-blue-800 capitalize">{booking.booking_transport.type} Transfer</p>
                        {booking.booking_transport.pickup_location && (
                          <p className="text-[10px] text-blue-600">{booking.booking_transport.pickup_location}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Total */}
                <div className="flex items-center justify-between p-3 bg-[#1a237e] rounded-lg mb-4">
                  <span className="text-sm text-white/80">Total Paid</span>
                  <span className="text-lg font-bold text-white">{formatCurrency(booking.total_amount)}</span>
                </div>
              </>
            )}

            {/* Important Information - Compact */}
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 mb-4">
              <h3 className="text-xs font-semibold text-amber-800 mb-2 uppercase tracking-wide">Important Information</h3>
              <ul className="space-y-1 text-xs text-amber-700">
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-500 mt-0.5">•</span>
                  Arrive at least 30 minutes before your scheduled time
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-500 mt-0.5">•</span>
                  Bring your booking confirmation
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-500 mt-0.5">•</span>
                  Wear comfortable light clothes and closed-toe shoes
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-amber-500 mt-0.5">•</span>
                  Weight limit: 120kg maximum for zipline
                </li>
              </ul>
            </div>

            {/* Location - Compact */}
            <div className="bg-slate-50 rounded-lg p-3 mb-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1a237e] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-slate-800">Hanuman World Phuket</p>
                  <p className="text-[10px] text-slate-600">105 Moo 4, Chaofa Road, Wichit, Muang, Phuket 83130</p>
                </div>
              </div>
            </div>

            {/* Single Button */}
            <Link href="/" className="block">
              <button className="w-full px-5 py-3 bg-[#1a237e] hover:bg-[#0d1259] text-white font-semibold rounded-xl transition-colors text-sm">
                Back to Home
              </button>
            </Link>

            {/* Help Section - Compact */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-center text-[10px] text-slate-500 mb-2 uppercase tracking-wide">Need help with your booking?</p>
              <div className="flex flex-col sm:flex-row justify-center gap-2 text-xs">
                <a href="mailto:support@hanumanworldphuket.com" className="flex items-center justify-center gap-1.5 text-[#1a237e] hover:underline">
                  <Mail className="w-3.5 h-3.5" />
                  support@hanumanworldphuket.com
                </a>
                <a href="tel:+66629795533" className="flex items-center justify-center gap-1.5 text-[#1a237e] hover:underline">
                  <Phone className="w-3.5 h-3.5" />
                  +66 62 979 5533
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#1a237e] flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  );
}

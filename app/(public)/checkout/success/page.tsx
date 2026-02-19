'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Calendar, Clock, Users, MapPin, Download, Mail, Phone, ChevronRight } from 'lucide-react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const bookingRef = searchParams.get('booking_ref');
  const sessionId = searchParams.get('session_id');
  
  const [booking, setBooking] = useState<any>(null);
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

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-[#0d1259] to-[#1a237e]">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle className="w-12 h-12 text-green-500" />
            </motion.div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Booking Confirmed!</h1>
            <p className="text-white/90">Thank you for booking with Hanuman World</p>
          </div>

          <div className="p-6 md:p-8">
            <div className="bg-slate-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-slate-500">Booking Reference</span>
                <span className="text-xl font-bold text-[#1a237e]">{bookingRef || 'Loading...'}</span>
              </div>
              
              <p className="text-sm text-slate-600">
                A confirmation email has been sent to your email address with all the booking details.
              </p>
            </div>

            {!loading && booking && (
              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-slate-800">Booking Details</h3>
                <div className="grid gap-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-[#1a237e]/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-[#1a237e]" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Activity Date</p>
                      <p className="font-medium text-slate-800">
                        {new Date(booking.activity_date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-[#1a237e]/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#1a237e]" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Time Slot</p>
                      <p className="font-medium text-slate-800">{booking.time_slot}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-[#1a237e]/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#1a237e]" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Number of Players</p>
                      <p className="font-medium text-slate-800">{booking.guest_count} person(s)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-orange-800 mb-3">Important Information</h3>
              <ul className="space-y-2 text-sm text-orange-700">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Please arrive at least 30 minutes before your scheduled time
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Bring your booking confirmation and valid ID
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Wear comfortable clothes and closed-toe shoes
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Weight limit: 130kg maximum
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold text-slate-800 mb-3">Location</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1a237e] mt-0.5" />
                <div>
                  <p className="font-medium text-slate-800">Hanuman World Phuket</p>
                  <p className="text-sm text-slate-600">105 Moo 4, Chaofa Road, Wichit, Muang, Phuket 83130</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#1a237e] hover:bg-[#0d1259] text-white font-semibold rounded-xl transition-colors">
                <Download className="w-5 h-5" />
                Download Voucher
              </button>
              <Link href="/" className="flex-1">
                <button className="w-full px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors">
                  Back to Home
                </button>
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-center text-sm text-slate-500 mb-3">Need help with your booking?</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
                <a href="mailto:info@hanumanworldphuket.com" className="flex items-center justify-center gap-2 text-[#1a237e] hover:underline">
                  <Mail className="w-4 h-4" />
                  info@hanumanworldphuket.com
                </a>
                <a href="tel:+6676391222" className="flex items-center justify-center gap-2 text-[#1a237e] hover:underline">
                  <Phone className="w-4 h-4" />
                  +66 76 391 222
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
      <main className="min-h-screen pt-20 bg-gradient-to-b from-[#0d1259] to-[#1a237e] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  );
}

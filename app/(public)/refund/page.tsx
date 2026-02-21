'use client';

import { motion } from 'framer-motion';
import { Section, Container } from '@/components/craft';
import { AlertCircle, CheckCircle, XCircle, Clock, FileText, Phone } from 'lucide-react';

export default function RefundPage() {
  return (
    <main className="pt-20">
      <Section className="bg-gradient-to-b from-[#0d1259] to-[#1a237e] py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-oswald)]">Refund Policy</h1>
            <p className="text-white/70">Last updated: February 2026</p>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-white py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            {/* Quick Summary Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
                <h3 className="font-semibold text-green-800 mb-1">Full Refund</h3>
                <p className="text-sm text-green-700">Cancel 24+ hours before activity (5% processing fee applies)</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <Clock className="w-8 h-8 text-amber-600 mb-2" />
                <h3 className="font-semibold text-amber-800 mb-1">Medical Cases</h3>
                <p className="text-sm text-amber-700">Within 48 hours with medical certificate</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <XCircle className="w-8 h-8 text-red-600 mb-2" />
                <h3 className="font-semibold text-red-800 mb-1">No Refund</h3>
                <p className="text-sm text-red-700">Less than 24 hours or no-show</p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <h2>1. Overview</h2>
              <p>
                This Refund Policy applies to all online bookings made through our website. 
                Payments are processed by <strong>Chamnanthang Co., Ltd.</strong> (operating 
                as "ONEBOOKING"). Your credit card statement will display the payment as 
                "ONEBOOKING".
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-6 not-prose">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-blue-800">Important Note</p>
                    <p className="text-sm text-blue-700">
                      A <strong>5% processing fee</strong> will be deducted from all refunds 
                      to cover payment gateway and administrative costs.
                    </p>
                  </div>
                </div>
              </div>

              <h2>2. Standard Cancellation & Refund</h2>
              
              <h3>2.1 More Than 24 Hours Before Activity</h3>
              <ul>
                <li><strong>Refund:</strong> Full refund minus 5% processing fee</li>
                <li><strong>Processing Time:</strong> 5-10 business days</li>
                <li><strong>How to Cancel:</strong> Email support@hanumanworldphuket.com with your booking reference</li>
              </ul>

              <h3>2.2 Less Than 24 Hours Before Activity</h3>
              <ul>
                <li><strong>Refund:</strong> No refund available</li>
                <li><strong>Alternative:</strong> You may reschedule to another date (subject to availability)</li>
              </ul>

              <h3>2.3 No-Show</h3>
              <ul>
                <li><strong>Refund:</strong> No refund under any circumstances</li>
                <li>Missing the scheduled pick-up time without prior notification is considered a no-show</li>
              </ul>

              <h2>3. Medical & Emergency Cancellations</h2>
              <p>
                We understand that emergencies happen. For cancellations due to medical 
                emergencies or accidents within 48 hours of your scheduled activity:
              </p>
              <ul>
                <li>A <strong>valid medical certificate</strong> is required</li>
                <li>The certificate must be dated and clearly state the condition preventing participation</li>
                <li>Submit the certificate to support@hanumanworldphuket.com within 7 days</li>
                <li>Refund will be processed minus the 5% processing fee</li>
              </ul>

              <h2>4. Cancellation by Hanuman World</h2>
              <p>
                In rare cases, we may need to cancel activities due to:
              </p>
              <ul>
                <li>Severe weather conditions (heavy rain, lightning, strong winds)</li>
                <li>Safety concerns or equipment issues</li>
                <li>Natural disasters or unforeseen circumstances</li>
              </ul>
              <p>
                In such cases, you will receive:
              </p>
              <ul>
                <li><strong>Option 1:</strong> Full refund (no processing fee deducted)</li>
                <li><strong>Option 2:</strong> Reschedule to another date at no additional cost</li>
              </ul>

              <h2>5. Third-Party Bookings</h2>
              <p>
                If you purchased tickets through a third-party distributor, travel agent, 
                or online travel agency (OTA):
              </p>
              <ul>
                <li>Their cancellation and refund policies apply, not ours</li>
                <li>Please contact the original point of purchase for refund requests</li>
                <li>We cannot process refunds for bookings not made directly through our website</li>
              </ul>

              <h2>6. Partial Refunds</h2>
              <p>Partial refunds may be issued in the following situations:</p>
              <ul>
                <li>Reducing the number of participants (24+ hours notice required)</li>
                <li>Downgrading to a lower-priced package (24+ hours notice required)</li>
                <li>Activity partially completed due to weather interruption</li>
              </ul>
              <p>
                All partial refunds are subject to the 5% processing fee on the refunded amount.
              </p>

              <h2>7. Refund Process</h2>
              <h3>7.1 How to Request a Refund</h3>
              <ol>
                <li>Email <strong>support@hanumanworldphuket.com</strong> with:
                  <ul>
                    <li>Your booking reference number</li>
                    <li>Reason for cancellation</li>
                    <li>Medical certificate (if applicable)</li>
                  </ul>
                </li>
                <li>You will receive a confirmation email within 24 hours</li>
                <li>Approved refunds are processed within 5-10 business days</li>
              </ol>

              <h3>7.2 Refund Method</h3>
              <p>
                Refunds are issued to the <strong>original payment method</strong> used for 
                the booking. We cannot refund to a different card or payment method.
              </p>
              <ul>
                <li><strong>Credit/Debit Cards:</strong> 5-10 business days (may vary by bank)</li>
                <li>The refund will appear as a credit from "ONEBOOKING" or "STRIPE"</li>
              </ul>

              <h2>8. Non-Refundable Items</h2>
              <p>The following are non-refundable:</p>
              <ul>
                <li>Photo and video packages (once delivered)</li>
                <li>Merchandise purchases</li>
                <li>Food and beverage purchases</li>
                <li>Special promotional or discounted bookings (unless otherwise stated)</li>
              </ul>

              <h2>9. Disputes</h2>
              <p>
                If you believe your refund request was incorrectly denied or you have not 
                received your refund within the stated timeframe:
              </p>
              <ol>
                <li>Contact us at support@hanumanworldphuket.com with your booking reference</li>
                <li>We will investigate and respond within 3 business days</li>
                <li>If the issue remains unresolved, you may contact your bank or card issuer</li>
              </ol>

              <h2>10. Contact Information</h2>
              <div className="not-prose grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-[#1a237e]" />
                    <h3 className="font-semibold text-slate-800">For Refund Requests</h3>
                  </div>
                  <p className="text-sm text-slate-600">support@hanumanworldphuket.com</p>
                  <p className="text-sm text-slate-600">Include your booking reference</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-5 h-5 text-[#1a237e]" />
                    <h3 className="font-semibold text-slate-800">Urgent Inquiries</h3>
                  </div>
                  <p className="text-sm text-slate-600">+66 62 979 5533</p>
                  <p className="text-sm text-slate-600">WhatsApp available</p>
                </div>
              </div>

              <p className="mt-6">
                For payment-related inquiries, you may also contact:
              </p>
              <ul>
                <li><strong>Chamnanthang Co., Ltd. (ONEBOOKING):</strong> support@onebooking.co</li>
              </ul>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}

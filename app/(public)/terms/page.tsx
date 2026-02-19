'use client';

import { motion } from 'framer-motion';
import { Section, Container } from '@/components/craft';

export default function TermsPage() {
  return (
    <main className="pt-20">
      <Section className="bg-gradient-to-b from-[#0d1259] to-[#1a237e] py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
            <p className="text-white/70">Last updated: February 2026</p>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-white py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto prose prose-slate"
          >
            <h2>1. Introduction</h2>
            <p>
              Welcome to Hanuman World Phuket. These Terms and Conditions govern your use 
              of our website, services, and adventure activities. By making a booking or 
              participating in our activities, you agree to be bound by these terms.
            </p>

            <h2>2. Booking and Reservations</h2>
            <h3>2.1 Making a Booking</h3>
            <p>
              All bookings are subject to availability. When you make a booking, you will 
              receive a confirmation email with your booking reference number. Please keep 
              this for your records.
            </p>
            <h3>2.2 Payment</h3>
            <p>
              Full payment is required at the time of booking. We accept major credit cards 
              through our secure payment partner, Stripe. All prices are displayed in Thai 
              Baht (THB).
            </p>
            <h3>2.3 Confirmation</h3>
            <p>
              Your booking is not confirmed until you receive a confirmation email from us. 
              The credit card statement will display the payment as "ONEBOOKING".
            </p>

            <h2>3. Cancellation Policy</h2>
            <h3>3.1 By Customer</h3>
            <ul>
              <li>Cancellations made more than 24 hours before the scheduled activity: Full refund</li>
              <li>Cancellations made within 24 hours of the scheduled activity: No refund</li>
              <li>No-shows: No refund</li>
            </ul>
            <h3>3.2 By Hanuman World</h3>
            <p>
              We reserve the right to cancel activities due to severe weather conditions or 
              safety concerns. In such cases, you will receive a full refund or the option 
              to reschedule to another date.
            </p>

            <h2>4. Participation Requirements</h2>
            <h3>4.1 Physical Requirements</h3>
            <ul>
              <li>Weight: Minimum 15kg, Maximum 130kg</li>
              <li>Age: Minimum 4 years old (with adult supervision)</li>
              <li>Health: Participants must be in good physical health</li>
            </ul>
            <h3>4.2 Not Permitted</h3>
            <p>The following conditions may prevent participation:</p>
            <ul>
              <li>Pregnancy</li>
              <li>Recent surgery or injuries</li>
              <li>Heart conditions</li>
              <li>Under the influence of alcohol or drugs</li>
              <li>Any condition that may be aggravated by physical activity</li>
            </ul>

            <h2>5. Safety and Liability</h2>
            <h3>5.1 Assumption of Risk</h3>
            <p>
              Zipline and adventure activities involve inherent risks. By participating, you 
              acknowledge and accept these risks. You must follow all safety instructions 
              provided by our guides.
            </p>
            <h3>5.2 Insurance</h3>
            <p>
              All participants are covered by our comprehensive insurance policy. This 
              coverage is included in the price of your booking.
            </p>
            <h3>5.3 Waiver</h3>
            <p>
              All participants (or guardians for minors) must sign a liability waiver before 
              participating in any activity.
            </p>

            <h2>6. Code of Conduct</h2>
            <p>Participants must:</p>
            <ul>
              <li>Follow all instructions from guides and staff</li>
              <li>Respect other participants and staff</li>
              <li>Not engage in reckless or dangerous behavior</li>
              <li>Not damage equipment or facilities</li>
              <li>Respect the natural environment</li>
            </ul>

            <h2>7. Photography and Media</h2>
            <p>
              Hanuman World may photograph or film activities for promotional purposes. By 
              participating, you grant us permission to use such images unless you notify 
              us otherwise in writing.
            </p>

            <h2>8. Privacy</h2>
            <p>
              Your personal information is handled in accordance with our Privacy Policy. 
              We do not share your information with third parties except as necessary to 
              provide our services.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be 
              effective immediately upon posting to our website. Continued use of our 
              services constitutes acceptance of the modified terms.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These terms are governed by the laws of Thailand. Any disputes shall be 
              subject to the exclusive jurisdiction of the Thai courts.
            </p>

            <h2>11. Contact</h2>
            <p>
              For questions about these terms, please contact us at:
            </p>
            <ul>
              <li>Email: info@hanumanworldphuket.com</li>
              <li>Phone: +66 76 391 222</li>
              <li>Address: 105 Moo 4, Chaofa Road, Wichit, Muang, Phuket 83130, Thailand</li>
            </ul>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}

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
            <h1 className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-oswald)]">Terms & Conditions</h1>
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
              Welcome to Hanuman World, operated by <strong>Sky World Adventures Co., Ltd.</strong> 
              These Terms and Conditions govern your use of our website, services, and adventure 
              activities. By making a booking or participating in our activities, you agree to 
              be bound by these terms.
            </p>
            <p>
              Online bookings and payments are processed by <strong>Chamnanthang Co., Ltd.</strong> 
              (operating as "ONEBOOKING"). Your credit card statement will display the payment 
              as "ONEBOOKING".
            </p>

            <h2>2. Booking and Reservations</h2>
            <h3>2.1 Making a Booking</h3>
            <p>
              All bookings are subject to availability. When you make a booking, you will 
              receive a confirmation email with your booking reference number. Please keep 
              this for your records and present it upon arrival.
            </p>
            <h3>2.2 Payment</h3>
            <p>
              Full payment is required at the time of booking. We accept major credit cards 
              through our secure payment partner, Stripe. All prices are displayed in Thai 
              Baht (THB) and include applicable taxes.
            </p>
            <h3>2.3 Confirmation</h3>
            <p>
              Your booking is confirmed once payment is successfully processed and you receive 
              a confirmation email. The credit card statement will display the payment as 
              "ONEBOOKING" (Chamnanthang Co., Ltd.).
            </p>

            <h2>3. Cancellation Policy</h2>
            <h3>3.1 Standard Cancellations</h3>
            <p>
              Cancellations are accepted if made at least <strong>24 hours</strong> before 
              the scheduled playtime. A <strong>5% processing fee</strong> will be deducted 
              from the total amount paid for all cancellations and partial refunds.
            </p>
            
            <h3>3.2 Unintentional Cancellations</h3>
            <p>
              For unintentional cancellations due to accidents or illness, a <strong>medical 
              certificate is required</strong> for a refund if the cancellation occurs within 
              48 hours of the scheduled playtime.
            </p>
            
            <h3>3.3 No-Show Policy</h3>
            <p>
              If you miss the scheduled pick-up time without prior notification, or if you 
              are a no-show, <strong>no refund will be issued under any circumstances</strong>.
            </p>
            
            <h3>3.4 Changing Play Date/Time</h3>
            <p>
              If you need to change the play date or time on the activity date, an additional 
              transportation fee may apply depending on the new location within Phuket.
            </p>
            
            <h3>3.5 Third-Party Purchases</h3>
            <p>
              If you purchased tickets from a third-party distributor or agent (not directly 
              from our website), please note that their cancellation policy may differ. Please 
              refer to the distributor or agent for their specific policy.
            </p>
            
            <h3>3.6 Cancellation by Hanuman World</h3>
            <p>
              We reserve the right to cancel activities due to severe weather conditions, 
              safety concerns, or unforeseen circumstances. In such cases, you will receive 
              a full refund or the option to reschedule to another date at no additional cost.
            </p>

            <h2>4. Transfer & Transportation</h2>
            <h3>4.1 Free Transfer Zone</h3>
            <p>
              We offer complimentary shared transfers from selected areas in Phuket. 
              Locations <strong>outside our free transfer zone</strong> include:
            </p>
            <ul>
              <li>Ao Por</li>
              <li>Baan Dorn</li>
              <li>Bangjo</li>
              <li>Layan Beach</li>
              <li>Maikhao Beach</li>
              <li>Naithon Beach</li>
              <li>Naiyang Beach</li>
              <li>Pasak</li>
            </ul>
            <p>
              For these locations, an additional fee applies:
            </p>
            <ul>
              <li>First person: <strong>500 THB</strong></li>
              <li>Each additional person: <strong>200 THB</strong></li>
            </ul>
            
            <h3>4.2 Private Transfer</h3>
            <p>
              Shared transfers are normally included. Private round-trip transfers are 
              available for an additional fee:
            </p>
            <ul>
              <li>In-zone: <strong>1,800 THB</strong></li>
              <li>Out-zone: <strong>2,500 THB</strong></li>
              <li>Maximum: 10 passengers per van</li>
            </ul>
            <p>
              Please submit your request in the booking note or via WhatsApp.
            </p>
            
            <h3>4.3 Luggage, Stroller & Car Seat</h3>
            <p>Additional fees apply for the following items:</p>
            <ul>
              <li>Large luggage (unable to carry on your own): <strong>300 THB per piece</strong></li>
              <li>Stroller: <strong>300 THB</strong></li>
              <li>Car seat: <strong>200 THB</strong></li>
            </ul>
            <p>Please specify the item and quantity in the booking note.</p>
            
            <h3>4.4 Airport Pick-Up and Drop-Off</h3>
            <p>
              We <strong>do not provide airport pick-up</strong> due to fixed activity times 
              and flight unpredictability. Airport drop-off is available; please include your 
              flight time in the booking note.
            </p>
            
            <h3>4.5 Pick-Up from Pier</h3>
            <p>
              If your hotel is on an island, we can arrange pick-up from the pier. Please 
              provide the pier name, confirm your boat schedule in advance, and include a 
              location link in the booking note. Our driver cannot wait beyond the scheduled time.
            </p>
            
            <h3>4.6 Different Pick-Up and Drop-Off Locations</h3>
            <p>
              We offer one different pick-up and one different drop-off location. Please 
              provide the drop-off place name and a location link when booking. If you need 
              to bring luggage or other items due to hotel changes or other activities, 
              additional charges will apply.
            </p>
            
            <h3>4.7 Out of Phuket Area Transfer</h3>
            <p>
              Transfers to and from selected areas in Phang-nga are available with an 
              additional fee based on the zone. Please contact us via WhatsApp at least 
              48 hours before the service date to arrange.
            </p>

            <h2>5. Participation Requirements</h2>
            <h3>5.1 Physical Requirements</h3>
            <ul>
              <li>Weight: Minimum 15kg, Maximum <strong>120kg for zipline activities</strong></li>
              <li>Age: Minimum 4 years old (children must be accompanied by an adult)</li>
              <li>Health: Participants must be in good physical health</li>
            </ul>
            
            <h3>5.2 Not Permitted to Participate</h3>
            <p>The following conditions may prevent participation:</p>
            <ul>
              <li>Pregnancy</li>
              <li>Recent surgery or injuries</li>
              <li>Heart conditions or cardiovascular problems</li>
              <li>Severe fear of heights</li>
              <li>Under the influence of alcohol or drugs</li>
              <li>Any condition that may be aggravated by physical activity</li>
            </ul>
            <p>
              Final determination of fitness to participate is at the discretion of our 
              safety staff.
            </p>
            
            <h3>5.3 What to Wear</h3>
            <ul>
              <li>Comfortable, light clothing suitable for outdoor activities</li>
              <li><strong>Closed-toe shoes required</strong> (no sandals, flip-flops, or heels)</li>
              <li>Long hair should be tied back</li>
              <li>Remove loose jewelry and accessories</li>
            </ul>

            <h2>6. Safety and Liability</h2>
            <h3>6.1 Assumption of Risk</h3>
            <p>
              Zipline and adventure activities involve inherent risks including but not 
              limited to falls, collisions, equipment failure, and physical exertion. By 
              participating, you acknowledge and voluntarily accept these risks.
            </p>
            
            <h3>6.2 Safety Instructions</h3>
            <p>
              All participants must attend the safety briefing and follow all instructions 
              provided by our trained guides. Failure to follow safety instructions may 
              result in removal from the activity without refund.
            </p>
            
            <h3>6.3 Insurance</h3>
            <p>
              All participants are covered by our comprehensive insurance policy for 
              accidents occurring during the activity. This coverage is included in the 
              price of your booking.
            </p>
            
            <h3>6.4 Liability Waiver</h3>
            <p>
              All participants (or legal guardians for minors) must sign a liability waiver 
              before participating in any activity. This waiver does not affect your 
              statutory rights.
            </p>

            <h2>7. Arrival and Check-In</h2>
            <ul>
              <li>Please arrive at least <strong>30 minutes before</strong> your scheduled time</li>
              <li>Bring your booking confirmation (printed or digital)</li>
              <li>Late arrivals may result in reduced activity time or rescheduling</li>
            </ul>

            <h2>8. Code of Conduct</h2>
            <p>Participants must:</p>
            <ul>
              <li>Follow all instructions from guides and staff</li>
              <li>Respect other participants, staff, and the environment</li>
              <li>Not engage in reckless, dangerous, or disruptive behavior</li>
              <li>Not damage equipment, facilities, or natural surroundings</li>
              <li>Dispose of waste properly and respect the rainforest ecosystem</li>
            </ul>
            <p>
              Violation of the code of conduct may result in immediate removal from the 
              activity without refund.
            </p>

            <h2>9. Photography and Media</h2>
            <p>
              Hanuman World may photograph or film activities for promotional, marketing, 
              and safety purposes. By participating, you grant us permission to use such 
              images and videos unless you notify us otherwise in writing before the activity.
            </p>
            <p>
              Professional photo and video packages are available for purchase. Personal 
              cameras and phones may be used at designated areas only, as determined by 
              our safety staff.
            </p>

            <h2>10. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and designs, is 
              the property of Sky World Adventures Co., Ltd. and is protected by copyright 
              and trademark laws. Unauthorized use is prohibited.
            </p>

            <h2>11. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Sky World Adventures Co., Ltd. and 
              Chamnanthang Co., Ltd. shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages arising from your use of our 
              services or participation in activities.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be 
              effective immediately upon posting to our website. The "Last updated" date 
              at the top of this page indicates when the terms were last revised. Continued 
              use of our services constitutes acceptance of the modified terms.
            </p>

            <h2>13. Governing Law and Disputes</h2>
            <p>
              These terms are governed by the laws of the Kingdom of Thailand. Any disputes 
              arising from these terms or your use of our services shall be subject to the 
              exclusive jurisdiction of the courts of Phuket, Thailand.
            </p>

            <h2>14. Severability</h2>
            <p>
              If any provision of these terms is found to be invalid or unenforceable, the 
              remaining provisions shall continue in full force and effect.
            </p>

            <h2>15. Contact Information</h2>
            <p>For questions about these terms, please contact us:</p>
            
            <h3>Sky World Adventures Co., Ltd. (Hanuman World)</h3>
            <ul>
              <li>Email: info@hanumanworldphuket.com</li>
              <li>Phone: +66 62 979 5533</li>
              <li>Address: 105 Moo 4, Chaofa Road, Wichit, Muang, Phuket 83130, Thailand</li>
            </ul>

            <h3>Chamnanthang Co., Ltd. (ONEBOOKING) - For Payment Inquiries</h3>
            <ul>
              <li>Email: support@onebooking.co</li>
              <li>Website: onebooking.co</li>
            </ul>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Section, Container } from '@/components/craft';

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      <Section className="bg-gradient-to-b from-[#0d1259] to-[#1a237e] py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
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
              Hanuman World Phuket ("we," "us," or "our") is committed to protecting your 
              privacy. This Privacy Policy explains how we collect, use, disclose, and 
              safeguard your information when you visit our website or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you provide to us, including:</p>
            <ul>
              <li>Name (first and last)</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Hotel name and room number (for pickup services)</li>
              <li>Payment information (processed securely by Stripe)</li>
              <li>Special requests or dietary requirements</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and manage your bookings</li>
              <li>Send booking confirmations and reminders</li>
              <li>Provide customer support</li>
              <li>Arrange transportation services</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
              <li>Send promotional communications (with your consent)</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Service providers:</strong> Payment processors (Stripe), email 
                services, and transportation partners
              </li>
              <li>
                <strong>Legal authorities:</strong> When required by law or to protect 
                our rights
              </li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third parties 
              for marketing purposes.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect 
              your personal information, including:
            </p>
            <ul>
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure storage with access controls</li>
              <li>Regular security assessments</li>
              <li>PCI-DSS compliant payment processing through Stripe</li>
            </ul>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>

            <h2>7. Cookies</h2>
            <p>
              Our website uses cookies to enhance your experience. Cookies are small 
              files stored on your device that help us:
            </p>
            <ul>
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve our services</li>
            </ul>
            <p>
              You can control cookies through your browser settings. However, disabling 
              cookies may affect website functionality.
            </p>

            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not 
              responsible for the privacy practices of these websites. We encourage 
              you to read their privacy policies.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              We do not knowingly collect personal information from children under 13. 
              If you believe we have collected such information, please contact us 
              immediately.
            </p>

            <h2>10. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide 
              our services and comply with legal obligations. Booking records are 
              typically retained for 7 years for accounting purposes.
            </p>

            <h2>11. International Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other 
              than Thailand. We ensure appropriate safeguards are in place for such 
              transfers.
            </p>

            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be 
              posted on this page with an updated revision date. We encourage you to 
              review this policy periodically.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <ul>
              <li>Email: privacy@hanumanworldphuket.com</li>
              <li>Phone: +66 76 391 222</li>
              <li>Address: 105 Moo 4, Chaofa Road, Wichit, Muang, Phuket 83130, Thailand</li>
            </ul>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}

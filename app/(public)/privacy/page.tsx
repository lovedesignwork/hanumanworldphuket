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
            <h1 className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-oswald)]">Privacy Policy</h1>
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
              This Privacy Policy explains how <strong>Sky World Adventures Co., Ltd.</strong> 
              (operating as "Hanuman World") and <strong>Chamnanthang Co., Ltd.</strong> 
              (operating as "ONEBOOKING" for online payment processing) collect, use, disclose, 
              and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              We are committed to protecting your privacy and complying with the Thailand 
              Personal Data Protection Act (PDPA) and other applicable data protection laws.
            </p>

            <h2>2. Data Controllers</h2>
            <p>For the purposes of this Privacy Policy:</p>
            <ul>
              <li>
                <strong>Sky World Adventures Co., Ltd.</strong> is the data controller for 
                information related to your visit, activities, and general customer service.
              </li>
              <li>
                <strong>Chamnanthang Co., Ltd. (ONEBOOKING)</strong> is the data controller 
                for online booking and payment processing. Your credit card statement will 
                display payments as "ONEBOOKING".
              </li>
            </ul>

            <h2>3. Information We Collect</h2>
            <h3>3.1 Personal Information</h3>
            <p>We may collect personal information that you provide to us, including:</p>
            <ul>
              <li>Name (first and last)</li>
              <li>Email address</li>
              <li>Phone number and country code</li>
              <li>Hotel name and room number (for pickup services)</li>
              <li>Special requests, dietary requirements, or accessibility needs</li>
            </ul>

            <h3>3.2 Payment Information</h3>
            <p>
              Payment information is processed securely by our payment processor, Stripe. 
              We do not store your full credit card details on our servers. Stripe is 
              PCI-DSS Level 1 certified, the highest level of certification in the payment industry.
            </p>

            <h3>3.3 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website or source</li>
              <li>Geographic location (country/region level)</li>
            </ul>

            <h2>4. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and manage your bookings</li>
              <li>Send booking confirmations, reminders, and updates</li>
              <li>Arrange transportation and pickup services</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Process payments and refunds</li>
              <li>Improve our services, website, and user experience</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Send promotional communications (only with your explicit consent)</li>
              <li>Analyze website usage and performance</li>
            </ul>

            <h2>5. Legal Basis for Processing</h2>
            <p>We process your personal data based on:</p>
            <ul>
              <li><strong>Contract:</strong> To fulfill our booking agreement with you</li>
              <li><strong>Consent:</strong> For marketing communications and non-essential cookies</li>
              <li><strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
              <li><strong>Legal Obligation:</strong> To comply with tax, accounting, and safety regulations</li>
            </ul>

            <h2>6. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Payment Processors:</strong> Stripe processes all online payments 
                on behalf of Chamnanthang Co., Ltd. (ONEBOOKING)
              </li>
              <li>
                <strong>Email Service Providers:</strong> To send booking confirmations and 
                communications (e.g., Resend)
              </li>
              <li>
                <strong>Transportation Partners:</strong> Hotel and pickup location details 
                for transfer arrangements
              </li>
              <li>
                <strong>Analytics Providers:</strong> Aggregated, anonymized data for website 
                analytics (e.g., Google Analytics)
              </li>
              <li>
                <strong>Legal Authorities:</strong> When required by law, court order, or to 
                protect our legal rights
              </li>
            </ul>
            <p>
              <strong>We do not sell, rent, or trade your personal information to third 
              parties for marketing purposes.</strong>
            </p>

            <h2>7. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect 
              your personal information, including:
            </p>
            <ul>
              <li>SSL/TLS encryption for all data transmission (HTTPS)</li>
              <li>Secure database storage with access controls</li>
              <li>Regular security assessments and updates</li>
              <li>PCI-DSS compliant payment processing through Stripe</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>

            <h2>8. Your Rights Under PDPA</h2>
            <p>Under the Thailand Personal Data Protection Act, you have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data (subject to legal retention requirements)</li>
              <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
              <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
              <li><strong>Complaint:</strong> Lodge a complaint with the Personal Data Protection Committee</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the details in Section 14.
            </p>

            <h2>9. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies and similar technologies to enhance your experience. 
              For detailed information about the cookies we use and how to manage them, 
              please see our <a href="/cookies" className="text-[#1a237e] hover:underline">Cookie Policy</a>.
            </p>
            <p>Types of cookies we use:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
              <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
            </ul>

            <h2>10. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (e.g., social media, 
              payment providers, map services). We are not responsible for the privacy 
              practices of these websites. We encourage you to read their privacy policies 
              before providing any personal information.
            </p>

            <h2>11. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13 years of age. We do not 
              knowingly collect personal information from children under 13. Bookings for 
              minors must be made by a parent or legal guardian. If you believe we have 
              inadvertently collected information from a child under 13, please contact 
              us immediately.
            </p>

            <h2>12. Data Retention</h2>
            <p>We retain your personal information for:</p>
            <ul>
              <li><strong>Booking Records:</strong> 7 years (for tax and accounting purposes)</li>
              <li><strong>Marketing Preferences:</strong> Until you withdraw consent</li>
              <li><strong>Website Analytics:</strong> 26 months (anonymized)</li>
              <li><strong>Customer Support Records:</strong> 3 years after last interaction</li>
            </ul>
            <p>
              After the retention period, data is securely deleted or anonymized.
            </p>

            <h2>13. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other 
              than Thailand, including:
            </p>
            <ul>
              <li>United States (Stripe payment processing, cloud services)</li>
              <li>European Union (email services)</li>
            </ul>
            <p>
              We ensure appropriate safeguards are in place for such transfers, including 
              standard contractual clauses and adequacy decisions where applicable.
            </p>

            <h2>14. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in 
              our practices or legal requirements. Changes will be posted on this page 
              with an updated revision date. For significant changes, we will notify you 
              by email or prominent notice on our website.
            </p>

            <h2>15. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, wish to exercise your 
              rights, or have concerns about our data practices, please contact us:
            </p>
            
            <h3>For General Inquiries (Sky World Adventures Co., Ltd.)</h3>
            <ul>
              <li>Email: privacy@hanumanworldphuket.com</li>
              <li>Phone: +66 62 979 5533</li>
              <li>Address: 105 Moo 4, Chaofa Road, Wichit, Muang, Phuket 83130, Thailand</li>
            </ul>

            <h3>For Payment & Booking Inquiries (Chamnanthang Co., Ltd. / ONEBOOKING)</h3>
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

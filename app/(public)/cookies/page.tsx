'use client';

import { motion } from 'framer-motion';
import { Section, Container } from '@/components/craft';
import { Cookie, Shield, BarChart3, Target, Settings } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <main className="pt-20">
      <Section className="bg-gradient-to-b from-[#0d1259] to-[#1a237e] py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-oswald)]">Cookie Policy</h1>
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
            {/* Cookie Type Cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-green-800">Essential Cookies</h3>
                </div>
                <p className="text-sm text-green-700">Required for basic website functionality. Cannot be disabled.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-blue-800">Analytics Cookies</h3>
                </div>
                <p className="text-sm text-blue-700">Help us understand how visitors use our website.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-6 h-6 text-purple-600" />
                  <h3 className="font-semibold text-purple-800">Marketing Cookies</h3>
                </div>
                <p className="text-sm text-purple-700">Used for targeted advertising and remarketing.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Settings className="w-6 h-6 text-amber-600" />
                  <h3 className="font-semibold text-amber-800">Preference Cookies</h3>
                </div>
                <p className="text-sm text-amber-700">Remember your settings and preferences.</p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, 
                or mobile phone) when you visit a website. They are widely used to make websites 
                work more efficiently and provide information to website owners.
              </p>
              <p>
                This Cookie Policy explains how <strong>Sky World Adventures Co., Ltd.</strong> 
                (operating as "Hanuman World") uses cookies and similar technologies on our website.
              </p>

              <h2>2. Types of Cookies We Use</h2>

              <h3>2.1 Essential Cookies (Strictly Necessary)</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable 
                basic functions like page navigation, secure areas access, and booking functionality. 
                The website cannot function properly without these cookies.
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-2 bg-slate-100">Cookie Name</th>
                    <th className="text-left p-2 bg-slate-100">Purpose</th>
                    <th className="text-left p-2 bg-slate-100">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b">session_id</td>
                    <td className="p-2 border-b">Maintains your session during booking</td>
                    <td className="p-2 border-b">Session</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">csrf_token</td>
                    <td className="p-2 border-b">Security - prevents cross-site request forgery</td>
                    <td className="p-2 border-b">Session</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">cookie_consent</td>
                    <td className="p-2 border-b">Stores your cookie preferences</td>
                    <td className="p-2 border-b">1 year</td>
                  </tr>
                </tbody>
              </table>

              <h3>2.2 Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by 
                collecting and reporting information anonymously. This helps us improve our 
                website and services.
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-2 bg-slate-100">Cookie Name</th>
                    <th className="text-left p-2 bg-slate-100">Provider</th>
                    <th className="text-left p-2 bg-slate-100">Purpose</th>
                    <th className="text-left p-2 bg-slate-100">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b">_ga</td>
                    <td className="p-2 border-b">Google Analytics</td>
                    <td className="p-2 border-b">Distinguishes unique users</td>
                    <td className="p-2 border-b">2 years</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">_ga_*</td>
                    <td className="p-2 border-b">Google Analytics 4</td>
                    <td className="p-2 border-b">Maintains session state</td>
                    <td className="p-2 border-b">2 years</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">_gid</td>
                    <td className="p-2 border-b">Google Analytics</td>
                    <td className="p-2 border-b">Distinguishes users</td>
                    <td className="p-2 border-b">24 hours</td>
                  </tr>
                </tbody>
              </table>

              <h3>2.3 Marketing Cookies</h3>
              <p>
                These cookies are used to track visitors across websites to display relevant 
                advertisements. They are set by our advertising partners with our permission.
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-2 bg-slate-100">Cookie Name</th>
                    <th className="text-left p-2 bg-slate-100">Provider</th>
                    <th className="text-left p-2 bg-slate-100">Purpose</th>
                    <th className="text-left p-2 bg-slate-100">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b">_fbp</td>
                    <td className="p-2 border-b">Meta (Facebook)</td>
                    <td className="p-2 border-b">Tracks visits for Facebook ads</td>
                    <td className="p-2 border-b">3 months</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">_gcl_au</td>
                    <td className="p-2 border-b">Google Ads</td>
                    <td className="p-2 border-b">Conversion tracking</td>
                    <td className="p-2 border-b">3 months</td>
                  </tr>
                </tbody>
              </table>

              <h3>2.4 Preference Cookies (Functional)</h3>
              <p>
                These cookies enable the website to remember choices you make (such as your 
                language preference or region) and provide enhanced, more personalized features.
              </p>
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left p-2 bg-slate-100">Cookie Name</th>
                    <th className="text-left p-2 bg-slate-100">Purpose</th>
                    <th className="text-left p-2 bg-slate-100">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border-b">language</td>
                    <td className="p-2 border-b">Remembers your language preference</td>
                    <td className="p-2 border-b">1 year</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-b">currency</td>
                    <td className="p-2 border-b">Remembers your currency preference</td>
                    <td className="p-2 border-b">1 year</td>
                  </tr>
                </tbody>
              </table>

              <h2>3. Third-Party Cookies</h2>
              <p>
                Some cookies are placed by third-party services that appear on our pages. 
                We do not control these cookies. The third parties include:
              </p>
              <ul>
                <li><strong>Google Analytics:</strong> Website analytics and performance measurement</li>
                <li><strong>Google Tag Manager:</strong> Tag management for marketing and analytics</li>
                <li><strong>Meta (Facebook) Pixel:</strong> Advertising and conversion tracking</li>
                <li><strong>Stripe:</strong> Secure payment processing</li>
              </ul>
              <p>
                Please refer to these third parties' privacy policies for more information 
                about their cookies:
              </p>
              <ul>
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1a237e] hover:underline">Google Privacy Policy</a></li>
                <li><a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-[#1a237e] hover:underline">Meta Privacy Policy</a></li>
                <li><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1a237e] hover:underline">Stripe Privacy Policy</a></li>
              </ul>

              <h2>4. Managing Cookies</h2>
              <h3>4.1 Cookie Consent</h3>
              <p>
                When you first visit our website, you will see a cookie consent banner that 
                allows you to accept or customize your cookie preferences. You can change 
                your preferences at any time by clicking the "Cookie Settings" link in the 
                footer of our website.
              </p>

              <h3>4.2 Browser Settings</h3>
              <p>
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul>
                <li>View what cookies are stored on your device</li>
                <li>Delete all or specific cookies</li>
                <li>Block cookies from all or specific websites</li>
                <li>Block third-party cookies</li>
                <li>Accept all cookies</li>
                <li>Be notified when a cookie is set</li>
              </ul>
              <p>
                Here are links to cookie management instructions for popular browsers:
              </p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#1a237e] hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[#1a237e] hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#1a237e] hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#1a237e] hover:underline">Microsoft Edge</a></li>
              </ul>

              <h3>4.3 Impact of Disabling Cookies</h3>
              <p>
                Please note that if you disable or block certain cookies, some features of 
                our website may not function properly:
              </p>
              <ul>
                <li><strong>Essential cookies disabled:</strong> You may not be able to complete bookings</li>
                <li><strong>Preference cookies disabled:</strong> Your settings won't be remembered</li>
                <li><strong>Analytics cookies disabled:</strong> No impact on functionality</li>
                <li><strong>Marketing cookies disabled:</strong> You may still see ads, but they won't be personalized</li>
              </ul>

              <h2>5. Similar Technologies</h2>
              <p>
                In addition to cookies, we may use similar technologies such as:
              </p>
              <ul>
                <li><strong>Local Storage:</strong> Stores data in your browser with no expiration date</li>
                <li><strong>Session Storage:</strong> Stores data for the duration of your browser session</li>
                <li><strong>Pixels/Web Beacons:</strong> Small images used to track user behavior</li>
              </ul>
              <p>
                These technologies are subject to the same consent requirements as cookies.
              </p>

              <h2>6. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in 
                technology, legislation, or our business practices. The "Last updated" date 
                at the top of this page indicates when the policy was last revised.
              </p>

              <h2>7. Contact Us</h2>
              <p>
                If you have questions about our use of cookies or this Cookie Policy, 
                please contact us:
              </p>
              <ul>
                <li>Email: privacy@hanumanworldphuket.com</li>
                <li>Phone: +66 62 979 5533</li>
                <li>Address: 105 Moo 4, Chaofa Road, Wichit, Muang, Phuket 83130, Thailand</li>
              </ul>

              <p>
                For more information about how we handle your personal data, please see our{' '}
                <a href="/privacy" className="text-[#1a237e] hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}

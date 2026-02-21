'use client';

import { motion } from 'framer-motion';
import { Section, Container } from '@/components/craft';
import { 
  Shield, 
  Scale, 
  Heart, 
  Shirt, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Baby,
  Umbrella,
  Camera,
  Droplets,
  Wind,
  Sun
} from 'lucide-react';

export default function SafetyPage() {
  return (
    <main className="pt-20">
      <Section className="bg-gradient-to-b from-[#0d1259] to-[#1a237e] py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Shield className="w-16 h-16 text-accent mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4 font-[family-name:var(--font-oswald)]">Safety Information</h1>
            <p className="text-white/70">Your safety is our top priority. Please read this information carefully before your visit.</p>
          </motion.div>
        </Container>
      </Section>

      <Section className="bg-white py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Quick Requirements */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <div className="bg-[#1a237e]/5 border border-[#1a237e]/20 rounded-xl p-5 text-center">
                <Scale className="w-10 h-10 text-[#1a237e] mx-auto mb-3" />
                <h3 className="font-bold text-slate-800 mb-1">Weight Limit</h3>
                <p className="text-2xl font-bold text-[#1a237e]">15 - 120 kg</p>
                <p className="text-xs text-slate-500 mt-1">For zipline activities</p>
              </div>
              <div className="bg-[#1a237e]/5 border border-[#1a237e]/20 rounded-xl p-5 text-center">
                <Baby className="w-10 h-10 text-[#1a237e] mx-auto mb-3" />
                <h3 className="font-bold text-slate-800 mb-1">Minimum Age</h3>
                <p className="text-2xl font-bold text-[#1a237e]">4 Years</p>
                <p className="text-xs text-slate-500 mt-1">With adult supervision</p>
              </div>
              <div className="bg-[#1a237e]/5 border border-[#1a237e]/20 rounded-xl p-5 text-center">
                <Clock className="w-10 h-10 text-[#1a237e] mx-auto mb-3" />
                <h3 className="font-bold text-slate-800 mb-1">Arrive Early</h3>
                <p className="text-2xl font-bold text-[#1a237e]">30 Minutes</p>
                <p className="text-xs text-slate-500 mt-1">Before scheduled time</p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <h2 className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-500" />
                Health Requirements
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    You CAN Participate If:
                  </h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      You are in good general health
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      You weigh between 15kg and 120kg
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      You are at least 4 years old (with guardian)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      You can follow safety instructions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      You have no recent injuries affecting mobility
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    You CANNOT Participate If:
                  </h3>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      You are pregnant
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      You have heart conditions or cardiovascular problems
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      You have had recent surgery (within 6 months)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      You are under the influence of alcohol or drugs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      You have severe fear of heights
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      You have back, neck, or spinal injuries
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      You have epilepsy or seizure disorders
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 not-prose mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">Medical Conditions - Please Inform Us</h3>
                    <p className="text-sm text-amber-700 mb-2">
                      If you have any of the following conditions, please inform our staff before the activity:
                    </p>
                    <ul className="text-sm text-amber-700 grid md:grid-cols-2 gap-1">
                      <li>• Asthma or breathing difficulties</li>
                      <li>• Diabetes</li>
                      <li>• High blood pressure</li>
                      <li>• Joint problems or arthritis</li>
                      <li>• Claustrophobia</li>
                      <li>• Vertigo or balance issues</li>
                    </ul>
                    <p className="text-sm text-amber-700 mt-2">
                      <strong>Final determination of fitness to participate is at the discretion of our safety staff.</strong>
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="flex items-center gap-2">
                <Shirt className="w-6 h-6 text-[#1a237e]" />
                What to Wear
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h3 className="font-semibold text-green-800 mb-3">Recommended</h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <strong>Closed-toe shoes</strong> (sneakers, hiking shoes, sports shoes)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Comfortable, lightweight clothing
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Long pants or shorts (above knee is fine)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      T-shirt or athletic wear
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Hair tied back (if long)
                    </li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <h3 className="font-semibold text-red-800 mb-3">Not Allowed</h3>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      Sandals, flip-flops, or open-toe shoes
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      High heels or platform shoes
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      Loose jewelry (necklaces, dangling earrings)
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      Dresses or skirts
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5" />
                      Loose scarves or accessories
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="flex items-center gap-2">
                <Umbrella className="w-6 h-6 text-blue-500" />
                Weather Conditions
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4 not-prose mb-8">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                  <Droplets className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-800 mb-1">Light Rain</h3>
                  <p className="text-xs text-blue-700">Activities continue normally. Raincoats provided.</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <Wind className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-amber-800 mb-1">Heavy Rain/Wind</h3>
                  <p className="text-xs text-amber-700">May pause temporarily. Wait in covered areas.</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                  <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-red-800 mb-1">Lightning/Storms</h3>
                  <p className="text-xs text-red-700">Activities suspended. Full refund or reschedule.</p>
                </div>
              </div>

              <p>
                We operate rain or shine! Light rain actually makes the experience more 
                exciting. However, for your safety, activities will be suspended during 
                lightning storms or severe weather conditions.
              </p>

              <h2 className="flex items-center gap-2">
                <Camera className="w-6 h-6 text-purple-500" />
                Personal Belongings
              </h2>
              
              <ul>
                <li><strong>Secure Storage:</strong> Free lockers are available for your belongings</li>
                <li><strong>Cameras/Phones:</strong> Must be secured with a strap or kept in lockers during activities</li>
                <li><strong>Glasses:</strong> Sports straps recommended for eyeglasses</li>
                <li><strong>Valuables:</strong> We recommend leaving valuables in your hotel safe</li>
              </ul>
              
              <div className="bg-slate-100 rounded-xl p-4 not-prose">
                <p className="text-sm text-slate-600">
                  <strong>Note:</strong> Hanuman World is not responsible for lost, damaged, 
                  or stolen personal items. Please use the provided lockers.
                </p>
              </div>

              <h2 className="flex items-center gap-2">
                <Sun className="w-6 h-6 text-amber-500" />
                Tips for a Great Experience
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4 not-prose mb-8">
                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="font-semibold text-slate-800 mb-2">Before You Arrive</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Get a good night's sleep</li>
                    <li>• Eat a light meal (not too heavy)</li>
                    <li>• Stay hydrated</li>
                    <li>• Apply sunscreen and insect repellent</li>
                    <li>• Bring a change of clothes (optional)</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <h3 className="font-semibold text-slate-800 mb-2">During the Activity</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Listen carefully to safety briefings</li>
                    <li>• Follow all guide instructions</li>
                    <li>• Stay hydrated (water stations available)</li>
                    <li>• Take breaks if needed</li>
                    <li>• Enjoy the experience!</li>
                  </ul>
                </div>
              </div>

              <h2>Our Safety Standards</h2>
              <p>
                At Hanuman World, safety is our top priority. Our commitment includes:
              </p>
              <ul>
                <li><strong>Certified Equipment:</strong> All equipment meets international safety standards and is inspected daily</li>
                <li><strong>Trained Staff:</strong> All guides are certified and undergo regular safety training</li>
                <li><strong>Regular Inspections:</strong> Equipment and courses are inspected by independent safety auditors</li>
                <li><strong>Insurance:</strong> Comprehensive insurance coverage for all participants</li>
                <li><strong>Emergency Procedures:</strong> Trained first-aid staff and emergency protocols in place</li>
              </ul>

              <h2>Questions?</h2>
              <p>
                If you have any questions about safety requirements or whether you can 
                participate, please contact us before booking:
              </p>
              <ul>
                <li>Email: safety@hanumanworldphuket.com</li>
                <li>Phone: +66 62 979 5533</li>
                <li>WhatsApp: +66 62 979 5533</li>
              </ul>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}

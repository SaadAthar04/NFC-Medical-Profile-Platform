'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { 
  Shield, 
  ArrowRight,
  CheckCircle,
  Zap,
  Heart,
  Lock,
  Activity,
  Smartphone,
  Clock,
  Users,
  Bell,
  AlertCircle,
  Star,
  Check,
  Plus
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function Home() {
  const [isHovering, setIsHovering] = useState(false)
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly')
  
  // Mouse position tracking for 3D effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 20
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 150,
    damping: 20
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div className="bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section - Emotional Storytelling */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 pb-20 bg-gradient-to-b from-white via-primary-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Emotional Story */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-tight text-gray-900 leading-tight">
                  Collapsed at a mall? <span className="bg-gradient-to-r from-primary-600 to-emerald-600 bg-clip-text text-transparent whitespace-nowrap">Your bracelet saves you.</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  Paramedics tap your <strong>InstantWrist</strong> bracelet — your blood type, allergies, medications, and emergency contacts appear in <strong className="text-primary-600">under 2 seconds</strong>.
                </p>

                <div className="bg-primary-50 border-l-4 border-primary-600 p-4 sm:p-5 rounded-r-xl mb-8">
                  <p className="text-sm sm:text-base text-gray-800 italic">
                    "When you're unconscious, you can't speak. Your InstantWrist speaks for you."
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                >
                  <Link href="/auth/signup">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" className="bg-primary-600 text-white hover:bg-primary-700 px-10 py-4 text-lg shadow-xl shadow-primary-500/30 rounded-xl font-bold">
                        Protect Your Family Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/emergency/NFC-DEMO-123">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 px-10 py-4 text-lg rounded-xl font-semibold">
                        See How It Works
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap items-center gap-6 text-sm text-gray-600"
                >
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary-600" />
                    <span className="font-semibold">PIPEDA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-gray-700" />
                    <span className="font-semibold">256-bit Encrypted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇨🇦</span>
                    <span className="font-semibold">Made in Canada</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right: Interactive Product */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
              style={{ perspective: '1000px' }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="relative"
              >
                <div className="relative h-96 flex items-center justify-center">
                  <motion.div
                    className="relative w-full max-w-md"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* The Band */}
                    <motion.div
                      className="relative h-28 mx-auto rounded-full overflow-hidden"
                      style={{ 
                        width: '90%',
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
                        boxShadow: '0 30px 60px -15px rgba(16, 185, 129, 0.5), 0 0 0 1px rgba(255,255,255,0.1) inset'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/20"></div>
                      
                      <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                      />

                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-2xl"
                        style={{ boxShadow: '0 0 0 4px rgba(16, 185, 129, 0.2), 0 8px 16px rgba(0,0,0,0.2)' }}
                      >
                        <motion.div
                          animate={{
                            boxShadow: [
                              '0 0 0 0 rgba(16, 185, 129, 0.7)',
                              '0 0 0 15px rgba(16, 185, 129, 0)',
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full"
                        />
                        <Shield className="h-10 w-10 text-primary-600 relative z-10" />
                      </motion.div>
                      
                      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-500 via-emerald-500 to-primary-500 opacity-30 blur-3xl -z-10"></div>
                      <div className="absolute inset-2 rounded-full border border-white/10"></div>
                    </motion.div>

                    {/* Info Cards */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="absolute -left-4 top-1/3"
                      style={{ transformStyle: 'preserve-3d', transform: 'translateZ(50px)' }}
                    >
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                            <Heart className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Blood Type</p>
                            <p className="text-xl font-bold">O+</p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="absolute -right-4 top-2/3"
                      style={{ transformStyle: 'preserve-3d', transform: 'translateZ(50px)' }}
                    >
                      <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-emerald-600 rounded-xl flex items-center justify-center">
                            <Zap className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Access</p>
                            <p className="text-base font-bold text-primary-600">&lt;2 sec</p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center text-sm text-gray-400 mt-4"
              >
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Hover to see 3D effect
                </motion.span>
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real User Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Real People. Real Emergencies. Real Lives Saved.
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">MedID's InstantWrist has already helped thousands across Canada</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Margaret T.',
                age: 'Toronto, ON',
                story: 'Had a diabetic episode at the grocery store. EMTs tapped my bracelet—saw my glucose levels history and insulin dosage right away. No confusion, no delays.',
                condition: 'Type 1 Diabetes',
                image: '👵'
              },
              {
                name: 'David C.',
                age: 'Vancouver, BC',
                story: 'Anaphylactic shock at a work lunch. Collapsed before I could use my EpiPen. The bracelet told them about my peanut allergy instantly. Saved my life.',
                condition: 'Severe Allergies',
                image: '👨'
              },
              {
                name: 'Sarah M.',
                age: 'Calgary, AB',
                story: 'My 8-year-old son is non-verbal autistic. His bracelet has his photo, my contact, and calming instructions. Gives me peace of mind when he is at school.',
                condition: 'Special Needs Parent',
                image: '👩'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full bg-white hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="text-5xl mr-4">{testimonial.image}</div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.age}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.story}"</p>
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {testimonial.condition}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency-First Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Built for Real Emergencies
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">Every feature designed to save lives</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Smartphone,
                title: 'NFC + QR Backup',
                description: 'First responders tap your bracelet or scan the QR code. Both work offline—no app, no internet required.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Bell,
                title: 'Instant SMS & Email Alerts',
                description: 'When your bracelet is tapped, your family gets notified immediately with timestamp and location.',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: Users,
                title: 'Family Dashboard',
                description: 'Manage medical profiles for your whole family from one secure admin panel. Update info anytime.',
                color: 'from-purple-500 to-indigo-500'
              },
              {
                icon: Lock,
                title: 'Public & Private Data',
                description: 'Control what is visible instantly vs. what requires a PIN. You decide what information to share.',
                color: 'from-gray-700 to-gray-900'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-xl transition-all h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} mb-5`}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual How It Works */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Protection in 3 Simple Steps
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">Set up in under 5 minutes</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                step: '1', 
                icon: '📝',
                title: 'Create Your Medical Profile', 
                desc: 'Add blood type, allergies, medications, conditions, and emergency contacts securely online.',
                action: 'Takes 3 minutes'
              },
              { 
                step: '2', 
                icon: '🔗',
                title: 'Link Your InstantWrist Bracelet', 
                desc: 'Receive your NFC bracelet. Tap it with your phone to link your profile. Done.',
                action: 'Free shipping in Canada'
              },
              { 
                step: '3', 
                icon: '🚑',
                title: 'Wear It. Be Protected.', 
                desc: 'In an emergency, first responders tap your bracelet. Your info appears in seconds.',
                action: 'Works 24/7, no battery needed'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all h-full"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-r from-primary-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-5 mx-auto"
                  >
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </motion.div>
                  <div className="text-6xl mb-5">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                  <div className="inline-block bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {item.action}
                  </div>
                </motion.div>
                
                {index < 2 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    className="hidden md:block absolute top-24 -right-6 w-12 h-1 bg-gradient-to-r from-primary-400 to-emerald-400 origin-left"
                  >
                    <ArrowRight className="absolute -right-3 -top-3 h-4 w-4 text-primary-500" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Choose Your Protection Plan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">One-time bracelet cost + subscription</p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  billingPeriod === 'monthly' ? 'bg-primary-600 text-white' : 'text-gray-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  billingPeriod === 'yearly' ? 'bg-primary-600 text-white' : 'text-gray-600'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Save 20%</span>
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Individual',
                description: 'Perfect for solo protection',
                price: billingPeriod === 'monthly' ? 9.99 : 99,
                braceletCost: 29.99,
                features: [
                  '1 Medical Profile',
                  '1 NFC Bracelet Included',
                  'Emergency SMS & Email Alerts',
                  'QR Code Backup Access',
                  'Blood Type & Allergy Display',
                  'Up to 3 Emergency Contacts',
                  'Email Support'
                ],
                cta: 'Start Individual Plan',
                popular: false
              },
              {
                name: 'Family',
                description: 'Protect everyone you love',
                price: billingPeriod === 'monthly' ? 19.99 : 199,
                braceletCost: 59.99,
                features: [
                  'Up to 5 Family Members',
                  '2 NFC Bracelets Included',
                  'Family Admin Dashboard',
                  'All Individual Features',
                  'Unlimited Emergency Contacts',
                  'Medical History Storage',
                  'Priority Support',
                  'Bracelet Replacement Discount'
                ],
                cta: 'Get Family Plan',
                popular: true
              },
              {
                name: 'Enterprise',
                description: 'For organizations & large families',
                price: billingPeriod === 'monthly' ? 49.99 : 499,
                braceletCost: 99.99,
                features: [
                  'Unlimited Family Members',
                  '5 NFC Bracelets Included',
                  'All Family Features',
                  'Bulk Bracelet Orders',
                  'Dedicated Account Manager',
                  '24/7 Phone Support',
                  'Custom Branding (Coming Soon)',
                  'API Access (Coming Soon)'
                ],
                cta: 'Contact Sales',
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-600 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className={`bg-white rounded-3xl p-8 shadow-lg h-full flex flex-col ${
                  plan.popular ? 'border-2 border-primary-500' : 'border border-gray-200'
                }`}>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600 ml-2">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                    <p className="text-sm text-gray-500">+ ${plan.braceletCost} bracelet (one-time)</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/auth/signup" className="block">
                    <Button 
                      className={`w-full py-4 text-lg font-bold rounded-xl ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-primary-600 to-emerald-600 text-white hover:shadow-xl' 
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-500 mt-12 text-sm"
          >
            All plans include 30-day money-back guarantee • Cancel anytime • Free shipping in Canada
          </motion.p>
        </div>
      </section>

      {/* Final CTA - Less Generic */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-600 to-emerald-600 rounded-3xl p-12 md:p-16 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Your medical info. One tap away.
                </h2>
                <p className="text-lg sm:text-xl text-primary-50 mb-10">
                  Over 1,200 Canadian families already protected. Setup takes 5 minutes. Ships free across Canada.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Link href="/auth/signup">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-primary-700 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all shadow-lg inline-flex items-center"
                    >
                      Create My Profile
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.button>
                  </Link>
                  <Link href="/emergency/NFC-DEMO-123">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all inline-flex items-center"
                    >
                      Try Demo
                    </motion.button>
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-sm text-primary-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Free shipping in Canada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>30-day money back</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

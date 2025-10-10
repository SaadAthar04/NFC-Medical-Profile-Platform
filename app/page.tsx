'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
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

// Load 3D components only on client-side (no SSR)
const BraceletModel = dynamic(() => import('@/components/3d/BraceletModel'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading 3D Model...</p>
      </div>
    </div>
  )
})

const BraceletModal = dynamic(() => import('@/components/3d/BraceletModal'), { 
  ssr: false 
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly')
  const [is3DModalOpen, setIs3DModalOpen] = useState(false)
  
  useEffect(() => {
    // Show loading screen for 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="bg-white overflow-hidden">
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-primary-50/20 to-white"
          >
            <div className="relative flex items-center justify-center">
              {/* Multiple pulse rings */}
              <motion.div
                animate={{
                  scale: [1, 2.5, 1],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute w-20 h-20 rounded-full border-4 border-primary-500"
              />
              <motion.div
                animate={{
                  scale: [1, 2.5, 1],
                  opacity: [0.3, 0, 0.3]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5
                }}
                className="absolute w-20 h-20 rounded-full border-4 border-primary-600"
              />

              {/* Rotating Plus Sign */}
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  rotate: { duration: 1.5, repeat: Infinity, ease: "linear" }
                }}
                className="relative z-10 bg-white rounded-2xl p-4 shadow-2xl"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Plus className="w-16 h-16 text-primary-600" strokeWidth={4} />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Only show after loading */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />

          {/* Scroll Progress Indicator */}
          <motion.div
            className="fixed top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-800 origin-left z-40"
            style={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Hero Section - First Screen (Centered Text) */}
          <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-primary-50/30 to-white overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-primary-200/30 to-primary-300/30 rounded-full blur-3xl animate-blob"
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -top-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-primary-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"
                animate={{
                  x: [0, -80, 0],
                  y: [0, 100, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              <motion.div
                className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-primary-100/20 to-blue-100/20 rounded-full blur-3xl animate-blob animation-delay-4000"
                animate={{
                  x: [0, -50, 0],
                  y: [0, -80, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
                }}
              />
              
              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary-400/40 rounded-full"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${20 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}

              {/* Floating Medical Icons - LARGE & DECORATIVE with drop animation */}
              {[
                { icon: '💊', left: '5%', top: '15%', delay: 0.2, duration: 8 },
                { icon: '🏥', left: '88%', top: '12%', delay: 0.4, duration: 10 },
                { icon: '🩺', left: '10%', top: '65%', delay: 0.6, duration: 9 },
                { icon: '❤️', left: '85%', top: '70%', delay: 0.8, duration: 11 },
                { icon: '🫀', left: '15%', top: '40%', delay: 1, duration: 12 },
                { icon: '⚕️', left: '82%', top: '45%', delay: 1.2, duration: 10 },
                { icon: '💉', left: '8%', top: '85%', delay: 1.4, duration: 9 },
                { icon: '🧬', left: '90%', top: '88%', delay: 1.6, duration: 13 },
              ].map((item, i) => (
                <motion.div
                  key={`medical-${i}`}
                  className="absolute text-6xl sm:text-7xl md:text-8xl opacity-[0.06] pointer-events-none"
                  style={{
                    left: item.left,
                    top: item.top,
                  }}
                  initial={{ 
                    y: -200, 
                    opacity: 0,
                    rotate: -30 
                  }}
                  animate={{
                    y: [0, -40, 0],
                    opacity: 0.06,
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    y: { 
                      duration: item.duration, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: item.delay + 2
                    },
                    opacity: { 
                      duration: 0.8, 
                      delay: item.delay 
                    },
                    rotate: { 
                      duration: item.duration, 
                      repeat: Infinity, 
                      delay: item.delay + 2
                    },
                    scale: { 
                      duration: item.duration, 
                      repeat: Infinity, 
                      delay: item.delay + 2
                    }
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
            
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-20">
              {/* Feature Badges - Floating around content with drop animation */}
              <motion.div
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="absolute top-20 -left-4 lg:left-0 hidden sm:block"
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 3, -3, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  whileHover={{ scale: 1.15, rotate: 0 }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-primary-200 hover:shadow-2xl hover:border-primary-400 transition-all cursor-default"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <motion.span 
                        className="text-sm"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity }}
                      >
                        ♻️
                      </motion.span>
                    </div>
            <div>
                      <p className="text-xs text-gray-500 font-medium">Power</p>
                      <p className="text-sm font-bold text-gray-900">No Battery</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.2, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="absolute top-40 -right-20 lg:-right-16 hidden sm:block"
              >
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, -3, 3, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  whileHover={{ scale: 1.15, rotate: 0 }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-blue-200 hover:shadow-2xl hover:border-blue-400 transition-all cursor-default"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <motion.span 
                        className="text-sm"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        💧
                      </motion.span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Durability</p>
                      <p className="text-sm font-bold text-gray-900">Waterproof</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.4, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="absolute bottom-32 left-4 lg:left-8 hidden md:block"
              >
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
                  whileHover={{ scale: 1.15, rotate: 0 }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-purple-200 hover:shadow-2xl hover:border-purple-400 transition-all cursor-default"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Material</p>
                      <p className="text-sm font-bold text-gray-900">Medical Grade</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.6, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="absolute bottom-32 right-8 lg:right-16 hidden md:block"
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, -2, 2, 0]
                  }}
                  transition={{ duration: 5.5, repeat: Infinity, delay: 1.5 }}
                  whileHover={{ scale: 1.15, rotate: 0 }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-red-200 hover:shadow-2xl hover:border-red-400 transition-all cursor-default"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        🚨
                      </motion.span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Alert</p>
                      <p className="text-sm font-bold text-gray-900">Instant SMS</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Centered Text Content */}
              <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-gray-900 leading-tight">
                    Collapsed at a mall?
                    <br />
                    <motion.span 
                      className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent"
                      animate={{ 
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{ backgroundSize: '200% auto' }}
                    >
                      Your bracelet saves you.
                    </motion.span>
                </h1>

                  <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
                  Paramedics tap your <strong>InstantWrist</strong> bracelet — your blood type, allergies, medications, and emergency contacts appear in <strong className="text-primary-600">under 2 seconds</strong>.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                >
                  <Link href="/auth/signup">
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -2 }} 
                        whileTap={{ scale: 0.95 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ 
                          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                          hover: { duration: 0.2 }
                        }}
                      >
                        <Button size="lg" className="bg-primary-600 text-white hover:bg-primary-700 px-10 py-4 text-lg shadow-xl shadow-primary-500/30 rounded-full font-bold w-full sm:w-auto">
                        Protect Your Family Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </Link>
                  <Link href="/emergency/NFC-DEMO-123">
                      <motion.div 
                        whileHover={{ scale: 1.05, y: -2 }} 
                        whileTap={{ scale: 0.95 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ 
                          y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                          hover: { duration: 0.2 }
                        }}
                      >
                        <Button size="lg" variant="outline" className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-10 py-4 text-lg rounded-full font-semibold w-full sm:w-auto">
                        See How It Works
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>

                  {/* Trust Badges - ANIMATED & CENTERED! */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-4 text-sm"
                  >
                    <motion.div 
                      className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full border border-primary-200"
                      whileHover={{ scale: 1.1, backgroundColor: '#dbeafe' }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div
                        animate={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                    <Shield className="h-5 w-5 text-primary-600" />
                      </motion.div>
                      <span className="font-semibold text-primary-900">PIPEDA Compliant</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-300"
                      whileHover={{ scale: 1.1, backgroundColor: '#f3f4f6' }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                    <Lock className="h-5 w-5 text-gray-700" />
                      </motion.div>
                      <span className="font-semibold text-gray-900">256-bit Encrypted</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full border border-red-200"
                      whileHover={{ scale: 1.1, backgroundColor: '#fee2e2' }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    >
                      <motion.span 
                        className="text-2xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🇨🇦
                      </motion.span>
                      <span className="font-semibold text-red-900">Made in Canada</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
                  </div>

              {/* Scroll Down Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex flex-col items-center gap-2 text-gray-400"
                >
                  <span className="text-sm font-medium">See the product</span>
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ↓
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Second Screen - 3D Bracelet Showcase */}
          <section className="relative min-h-screen flex items-center justify-center py-12 bg-gradient-to-b from-primary-50/30 via-white to-gray-50 overflow-hidden">
            {/* Background effects for bracelet section - ENHANCED! */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-r from-primary-200/20 to-blue-200/20 rounded-full blur-3xl"
                animate={{
                  x: [0, 80, 0],
                  y: [0, -40, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-primary-200/20 rounded-full blur-3xl"
                animate={{
                  x: [0, -60, 0],
                  y: [0, 40, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />

              {/* Additional decorative medical icons for bracelet section */}
              {[
                { icon: '⚕️', left: '8%', top: '20%', delay: 0.5, duration: 10 },
                { icon: '🏥', left: '92%', top: '25%', delay: 1, duration: 12 },
                { icon: '💊', left: '5%', top: '75%', delay: 1.5, duration: 11 },
                { icon: '🩺', left: '88%', top: '80%', delay: 2, duration: 9 },
              ].map((item, i) => (
                <motion.div
                  key={`bracelet-medical-${i}`}
                  className="absolute text-7xl md:text-8xl opacity-[0.05] pointer-events-none"
                  style={{
                    left: item.left,
                    top: item.top,
                  }}
                  initial={{ 
                    y: -150, 
                    opacity: 0,
                    rotate: -20 
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: 0.05,
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    y: { 
                      duration: item.duration, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: item.delay + 2
                    },
                    opacity: { 
                      duration: 0.8, 
                      delay: item.delay 
                    },
                    rotate: { 
                      duration: item.duration, 
                      repeat: Infinity, 
                      delay: item.delay + 2
                    },
                    scale: { 
                      duration: item.duration, 
                      repeat: Infinity, 
                      delay: item.delay + 2
                    }
                  }}
                >
                  {item.icon}
                </motion.div>
              ))}

              {/* Floating particles for depth */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
                  style={{
                    left: `${15 + i * 8}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [0, -80, 0],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 4 + i * 0.4,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left side - Quote Card */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-5 flex items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, x: -5 }}
                    className="bg-gradient-to-br from-primary-50 to-blue-50 border-l-4 border-primary-600 p-8 rounded-r-3xl shadow-2xl hover:shadow-3xl transition-all w-full"
                  >
                    <motion.p 
                      className="text-xl md:text-2xl text-gray-800 italic font-medium leading-relaxed"
                      animate={{ opacity: [0.9, 1, 0.9] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      "When you're unconscious, you can't speak. 
                      <span className="text-primary-700 font-bold"> Your InstantWrist speaks for you.</span>"
                    </motion.p>
                  </motion.div>
                </motion.div>

                {/* Right side - 3D Bracelet Product */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="lg:col-span-7 relative"
                >
                  <div className="relative h-[450px] lg:h-[500px]">
                {/* 3D Bracelet Model - Clickable */}
                <motion.div 
                      className="relative cursor-pointer group h-full"
                  onClick={() => setIs3DModalOpen(true)}
                      whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                >
                  <BraceletModel />
                  
                      {/* Hover overlay hint - Closer to bracelet */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl flex items-center justify-center pointer-events-none"
                      >
                        <motion.div 
                          className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-2xl border border-primary-200"
                          animate={{ 
                            y: [0, -5, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            y: { duration: 1.5, repeat: Infinity },
                            scale: { duration: 2, repeat: Infinity }
                          }}
                        >
                      <span className="text-primary-600 font-semibold text-sm flex items-center gap-2">
                            <motion.div
                              animate={{ rotate: [0, 90, 180, 270, 360] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Plus className="w-5 h-5" />
                            </motion.div>
                        Click to view in 360°
                      </span>
                        </motion.div>
                  </motion.div>
                </motion.div>

                    {/* Floating Info Cards - ANIMATED! */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="absolute -left-4 lg:-left-12 top-1/4 z-10"
                >
                  <motion.div
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [0, 2, -2, 0]
                        }}
                    transition={{ duration: 3, repeat: Infinity }}
                        whileHover={{ scale: 1.15, rotate: 0 }}
                        className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl border border-gray-200 hover:shadow-2xl hover:border-red-300 transition-all cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                          <motion.div 
                            className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Heart className="h-6 w-6 text-white" />
                          </motion.div>
                      <div>
                            <p className="text-xs text-gray-500 font-medium">Blood Type</p>
                            <motion.p 
                              className="text-2xl font-bold text-gray-900"
                              whileHover={{ scale: 1.1, color: '#dc2626' }}
                            >
                              O+
                            </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="absolute -right-4 lg:-right-12 bottom-1/4 z-10"
                >
                  <motion.div
                        animate={{ 
                          y: [0, 10, 0],
                          rotate: [0, -2, 2, 0]
                        }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        whileHover={{ scale: 1.15, rotate: 0 }}
                        className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl border border-gray-200 hover:shadow-2xl hover:border-primary-300 transition-all cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                          <motion.div 
                            className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg"
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Zap className="h-6 w-6 text-white" />
                          </motion.div>
                      <div>
                            <p className="text-xs text-gray-500 font-medium">Access Time</p>
                            <motion.p 
                              className="text-2xl font-bold text-primary-600"
                              whileHover={{ scale: 1.1 }}
                            >
                              &lt;2s
                            </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="text-center text-sm text-gray-400 mt-3"
                  >
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🖱️ Drag to rotate • 🔍 Click for 360° view
                    </motion.span>
                  </motion.p>
                </motion.div>
              </div>

              {/* Additional Feature Highlights around bracelet - Moved UP! */}
              <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { icon: '📱', title: 'NFC Enabled', subtitle: 'Tap to access', color: 'from-blue-500 to-blue-600' },
                  { icon: '🔒', title: 'Encrypted', subtitle: '256-bit secure', color: 'from-gray-600 to-gray-800' },
                  { icon: '⚡', title: 'Instant', subtitle: 'Under 2 sec', color: 'from-yellow-500 to-yellow-600' },
                  { icon: '🌐', title: 'QR Backup', subtitle: 'Always works', color: 'from-green-500 to-green-600' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 1 + index * 0.1,
                      type: "spring",
                      stiffness: 120
                    }}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -5,
                    }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200 hover:shadow-xl hover:border-primary-300 transition-all cursor-default"
                  >
                    <motion.div
                      className="text-4xl mb-2 text-center"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3 + index * 0.5, 
                        repeat: Infinity 
                      }}
                      whileHover={{ scale: 1.3, rotate: 360 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-sm font-bold text-gray-900 text-center mb-1">{feature.title}</h3>
                    <p className="text-xs text-gray-600 text-center">{feature.subtitle}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

      {/* Animated Statistics Section - ULTRA LIVELY! */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 animate-gradient relative overflow-hidden">
        {/* Enhanced Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-white rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          
          {/* Enhanced floating shapes - MORE particles! */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: i % 3 === 0 ? '4px' : '3px',
                height: i % 3 === 0 ? '4px' : '3px',
                left: `${5 + i * 6}%`,
                top: `${10 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, i % 2 === 0 ? 30 : -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              animate={{
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.3)',
                  '0 0 30px rgba(255,255,255,0.5)',
                  '0 0 20px rgba(255,255,255,0.3)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✨ Trusted by Canadians Nationwide ✨
            </motion.h2>
            <motion.p 
              className="text-primary-100 text-xl font-light"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Join thousands protecting their loved ones
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: '12,000', label: 'Active Users', suffix: '+', delay: 0, icon: '👥', color: 'from-blue-400 to-blue-600' },
              { number: '450', label: 'Lives Protected', suffix: '+', delay: 0.1, icon: '❤️', color: 'from-red-400 to-red-600' },
              { number: '98', label: 'Response Rate', suffix: '%', delay: 0.2, icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
              { number: '2', label: 'Seconds Access', suffix: '<', delay: 0.3, icon: '🚀', color: 'from-green-400 to-green-600' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: stat.delay, 
                  type: "spring", 
                  stiffness: 150,
                  damping: 10
                }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.15, 
                    y: -10,
                    rotate: [0, -5, 5, 0]
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: { duration: 2 + index * 0.3, repeat: Infinity, ease: "easeInOut" },
                    hover: { duration: 0.3 }
                  }}
                  className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 hover:border-white/50 hover:bg-white/20 transition-all cursor-pointer relative overflow-hidden group shadow-2xl"
                >
                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Glowing border effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                  />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="text-5xl mb-3"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 2 + index * 0.5, 
                        repeat: Infinity 
                      }}
                      whileHover={{ scale: 1.5, rotate: 360 }}
                    >
                      {stat.icon}
                    </motion.div>

                    {/* Number */}
                    <motion.div 
                      className="text-5xl md:text-6xl font-bold text-white mb-2"
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        delay: index * 0.2 
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        textShadow: '0 0 20px rgba(255,255,255,0.8)'
                      }}
                    >
                      {stat.suffix === '<' ? stat.suffix : ''}{stat.number}{stat.suffix !== '<' ? stat.suffix : ''}
                    </motion.div>

                    {/* Label */}
                    <motion.div 
                      className="text-primary-100 font-semibold text-sm md:text-base"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {stat.label}
                    </motion.div>
                  </div>

                  {/* Corner sparkle */}
                  <motion.div
                    className="absolute top-2 right-2 text-xl"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    ✨
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA - NEW! */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/auth/signup">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  y: [0, -5, 0],
                  boxShadow: [
                    '0 10px 40px rgba(255,255,255,0.2)',
                    '0 15px 50px rgba(255,255,255,0.3)',
                    '0 10px 40px rgba(255,255,255,0.2)',
                  ]
                }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity },
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
                className="bg-white text-primary-700 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transition-colors shadow-2xl inline-flex items-center gap-2"
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎯
                </motion.span>
                Join 12,000+ Protected Canadians
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Real User Testimonials */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <motion.div
            className="absolute top-20 -left-20 w-64 h-64 bg-gradient-to-r from-primary-100 to-blue-100 rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-blue-100 to-primary-100 rounded-full blur-3xl"
            animate={{ x: [0, -80, 0], y: [0, -50, 0] }}
            transition={{ duration: 18, repeat: Infinity }}
          />
        </div>
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
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="relative"
              >
                {/* Floating sparkles on hover */}
                <motion.div
                  className="absolute -top-2 -right-2 text-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1, rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  ✨
                </motion.div>
                
                <Card className="h-full bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 relative overflow-hidden group">
                  {/* Animated gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-50/0 via-primary-50/50 to-primary-50/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  <div className="relative z-10">
                  <div className="flex items-center mb-4">
                      <motion.div 
                        className="text-5xl mr-4"
                        whileHover={{ scale: 1.3, rotate: 15 }}
                      >
                        {testimonial.image}
                      </motion.div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.age}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.story}"</p>
                    <motion.div 
                      className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold"
                      whileHover={{ scale: 1.05, backgroundColor: '#dbeafe' }}
                    >
                    {testimonial.condition}
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency-First Features */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-5"
              style={{
                left: `${20 + i * 18}%`,
                top: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              {i % 2 === 0 ? '🏥' : '💊'}
            </motion.div>
          ))}
        </div>
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
              >
                  <motion.div
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full hover-lift"
                  whileHover={{ 
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} mb-5 shadow-lg`}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual How It Works */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="how-it-works">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '30px 30px'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
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
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full hover-lift"
                  whileHover={{ 
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-lg shadow-primary-500/30"
                  >
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </motion.div>
                  <motion.div 
                    className="text-6xl mb-5"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.div>
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
                    className="hidden md:block absolute top-24 -right-6 w-12 h-1 bg-gradient-to-r from-primary-400 to-primary-600 origin-left"
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
      <section className="py-24 bg-gray-50 relative overflow-hidden" id="pricing">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-primary-300 to-blue-300 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-br from-blue-300 to-primary-300 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, -40, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>
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
            <motion.div 
              className="inline-flex items-center bg-white rounded-full p-1 shadow-md"
              whileHover={{ scale: 1.05, shadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            >
              <motion.button
                onClick={() => setBillingPeriod('monthly')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  billingPeriod === 'monthly' ? 'bg-primary-600 text-white' : 'text-gray-600'
                }`}
              >
                Monthly
              </motion.button>
              <motion.button
                onClick={() => setBillingPeriod('yearly')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  billingPeriod === 'yearly' ? 'bg-primary-600 text-white' : 'text-gray-600'
                }`}
              >
                Yearly
                <motion.span 
                  className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Save 20%
                </motion.span>
              </motion.button>
            </motion.div>
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
                className="relative"
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-600 to-primary-800 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg z-10"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⭐ Most Popular
                  </motion.div>
                )}
                <motion.div 
                  className={`bg-white rounded-3xl p-8 shadow-lg h-full flex flex-col transition-all duration-300 hover-lift ${
                    plan.popular ? 'border-2 border-primary-500 shadow-primary-500/20' : 'border border-gray-200'
                  }`}
                  whileHover={{ 
                    borderColor: plan.popular ? 'rgb(59, 130, 246)' : 'rgba(59, 130, 246, 0.3)',
                  }}
                >
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
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                    <Button 
                        className={`w-full py-4 text-lg font-bold rounded-xl transition-all ${
                        plan.popular 
                            ? 'bg-gradient-to-r from-primary-600 to-primary-800 text-white hover:shadow-xl hover:shadow-primary-500/40' 
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                    </motion.div>
                  </Link>
                </motion.div>
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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl hover-lift"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, delay: 1 }}
              ></motion.div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-primary-700 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all shadow-2xl hover:shadow-white/30 inline-flex items-center"
                    >
                      Create My Profile
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                      <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.div>
                    </motion.button>
                  </Link>
                  <Link href="/emergency/NFC-DEMO-123">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
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
          </motion.div>
        </div>
      </section>

      <Footer />
        </motion.div>
      )}

      {/* 3D Bracelet Modal */}
      <BraceletModal isOpen={is3DModalOpen} onClose={() => setIs3DModalOpen(false)} />
    </div>
  )
}

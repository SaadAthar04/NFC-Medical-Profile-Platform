'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2, Zap, Shield, Sparkles } from 'lucide-react'
import BraceletModel from './BraceletModel'

interface BraceletModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BraceletModal({ isOpen, onClose }: BraceletModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Enhanced Backdrop with particles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 z-50 backdrop-blur-md"
          >
            {/* Floating particles in backdrop */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </motion.div>

          {/* Modal - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 15, y: 50 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateX: 0,
              y: 0,
              transition: {
                type: "spring",
                damping: 25,
                stiffness: 300
              }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8,
              rotateX: -15,
              y: 50,
              transition: { duration: 0.3 }
            }}
            className="fixed inset-4 sm:inset-6 md:inset-10 lg:inset-20 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-primary-500/20"
            style={{ perspective: 1000 }}
          >
            {/* Animated glowing edge effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl sm:rounded-3xl"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                  '0 0 40px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-5">
              <motion.div
                className="w-full h-full"
                style={{
                  backgroundImage: 'linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }}
                animate={{
                  backgroundPosition: ['0px 0px', '40px 40px'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            {/* Floating orbs */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-primary-500/10 to-blue-500/10 blur-2xl"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${10 + i * 15}%`,
                }}
                animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}

            {/* Scan line effect */}
            <motion.div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent"
              animate={{
                top: ['0%', '100%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            {/* Enhanced Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-gray-900/95 via-gray-900/70 to-transparent p-4 sm:p-6">
              <div className="flex justify-between items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                      className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/50"
                    >
                      <Sparkles className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                        InstantWrist Bracelet
                        <motion.span
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-sm bg-primary-500/20 text-primary-300 px-2 py-0.5 rounded-full border border-primary-500/30"
                        >
                          360° View
                        </motion.span>
                      </h3>
                      <motion.p 
                        className="text-gray-400 text-xs sm:text-sm mt-1 hidden sm:block"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        🖱️ Drag to rotate • 🔍 Scroll to zoom
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.button
                  onClick={onClose}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 90,
                    backgroundColor: 'rgba(239, 68, 68, 0.2)'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 hover:bg-white/10 rounded-full transition-all border border-white/10 hover:border-red-500/50"
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            </div>

            {/* 3D Model */}
            <div className="w-full h-full">
              <BraceletModel inModal={true} />
            </div>

            {/* Enhanced Info Cards */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {/* Material Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotateX: 45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                  }}
                  className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 hover:border-primary-400/50 transition-all cursor-default group relative overflow-hidden"
                >
                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <div className="relative z-10 flex items-start gap-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg"
                    >
                      <Shield className="w-4 h-4 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-primary-300 font-semibold text-xs sm:text-sm mb-1 flex items-center gap-1">
                        Material
                        <motion.span
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                          ✨
                        </motion.span>
                      </div>
                      <div className="text-white font-bold text-sm sm:text-base">Medical-Grade Silicone</div>
                    </div>
                  </div>
                </motion.div>

                {/* Technology Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotateX: 45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                  }}
                  className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 hover:border-primary-400/50 transition-all cursor-default group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <div className="relative z-10 flex items-start gap-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      animate={{ 
                        boxShadow: [
                          '0 0 10px rgba(59, 130, 246, 0.5)',
                          '0 0 20px rgba(59, 130, 246, 0.8)',
                          '0 0 10px rgba(59, 130, 246, 0.5)',
                        ]
                      }}
                      className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center"
                    >
                      <Zap className="w-4 h-4 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-primary-300 font-semibold text-xs sm:text-sm mb-1 flex items-center gap-1">
                        Technology
                        <motion.span
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        >
                          ⚡
                        </motion.span>
                      </div>
                      <div className="text-white font-bold text-sm sm:text-base">NFC + QR Backup</div>
                    </div>
                  </div>
                </motion.div>

                {/* Battery Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotateX: 45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    borderColor: 'rgba(34, 197, 94, 0.5)',
                  }}
                  className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 hover:border-green-400/50 transition-all cursor-default group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <div className="relative z-10 flex items-start gap-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center shadow-lg"
                    >
                      <motion.span 
                        className="text-base"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ♾️
                      </motion.span>
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-green-300 font-semibold text-xs sm:text-sm mb-1 flex items-center gap-1">
                        Battery
                        <motion.span
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                        >
                          🔋
                        </motion.span>
                      </div>
                      <div className="text-white font-bold text-sm sm:text-base">No Battery Required</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}


'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2 } from 'lucide-react'
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateX: 0,
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
              transition: { duration: 0.3 }
            }}
            className="fixed inset-4 md:inset-10 z-50 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden"
            style={{ perspective: 1000 }}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-gray-900/90 to-transparent p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">InstantWrist Bracelet</h3>
                  <p className="text-gray-400 text-sm mt-1">Drag to rotate • Scroll to zoom</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* 3D Model */}
            <div className="w-full h-full">
              <BraceletModel inModal={true} />
            </div>

            {/* Info Cards */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="text-primary-400 font-semibold text-sm mb-1">Material</div>
                  <div className="text-white font-bold">Medical-Grade Silicone</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="text-primary-400 font-semibold text-sm mb-1">Technology</div>
                  <div className="text-white font-bold">NFC + QR Backup</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                >
                  <div className="text-primary-400 font-semibold text-sm mb-1">Battery</div>
                  <div className="text-white font-bold">No Battery Required</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}


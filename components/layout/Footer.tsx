'use client'

import Link from 'next/link'
import { Shield, Mail, MapPin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center space-x-2 mb-6 group">
              <motion.div 
                className="p-2 bg-primary-600 rounded-lg group-hover:bg-primary-500 transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <Shield className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">MedID</span>
            </Link>
            
            <p className="text-lg text-primary-400 mb-4 font-semibold">
              Your Life. One Tap Away.
            </p>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Emergency medical information when it matters most. Trusted by over 1,200 Canadian families.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              <a href="mailto:support@instantwrist.ca" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-primary-500" />
                <span>support@instantwrist.ca</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4 text-primary-500" />
                <span>Toronto, Ontario, Canada</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <motion.div 
                className="inline-flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-700 transition-colors cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="h-3 w-3 text-primary-500" />
                PIPEDA Compliant
              </motion.div>
              <motion.div 
                className="inline-flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-700 transition-colors cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <span>🇨🇦</span>
                Made in Canada
              </motion.div>
            </div>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-3">
              {[
                { label: 'How It Works', href: '/#how-it-works' },
                { label: 'Pricing', href: '/#pricing' },
                { label: 'Demo', href: '/emergency/NFC-DEMO-123' },
                { label: 'Features', href: '/#features' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Security', href: '/security' },
                { label: 'Compliance', href: '/compliance' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.div 
          className="border-t border-gray-800 pt-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div 
            className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4"
            whileHover={{ borderColor: 'rgba(202, 138, 4, 0.5)' }}
          >
            <p className="text-xs text-yellow-200/80 leading-relaxed">
              <strong className="text-yellow-200">Medical Disclaimer:</strong> MedID is an information storage service, not a medical device. It does not diagnose, treat, or prevent any medical condition. In emergencies, always call 911 immediately.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} MedID Inc. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <Link href="/sitemap" className="text-gray-500 hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-gray-500 hover:text-white transition-colors">
              Accessibility
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Emergency Notice */}
      <motion.div 
        className="bg-red-900/20 border-t border-red-800/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.p 
            className="text-center text-sm text-red-200"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            🚨 <strong>Emergency?</strong> Call 911 immediately. This service provides information only.
          </motion.p>
        </div>
      </motion.div>
    </footer>
  )
}

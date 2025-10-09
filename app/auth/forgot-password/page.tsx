'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Mail, ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setError('Email is required')
      return
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setError('')
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 2000)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="h-10 w-10 text-green-600" />
            </motion.div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h1>
            <p className="text-gray-600 mb-6">
              We've sent password reset instructions to <strong>{email}</strong>
            </p>
            
            <div className="bg-primary-50 rounded-lg p-4 mb-6 text-sm text-gray-700">
              <p className="mb-2">Didn't receive the email?</p>
              <ul className="text-left space-y-1 text-gray-600">
                <li>• Check your spam folder</li>
                <li>• Verify the email address is correct</li>
                <li>• Wait a few minutes and try again</li>
              </ul>
            </div>

            <div className="space-y-3">
              <Link href="/auth/login">
                <Button variant="primary" size="lg" className="w-full" icon={<ArrowLeft className="h-5 w-5" />}>
                  Back to Login
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                onClick={() => setSuccess(false)}
              >
                Try another email
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="min-h-screen flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link href="/" className="inline-flex items-center space-x-2 mb-8 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-2 bg-primary-600 rounded-lg"
            >
              <Shield className="h-6 w-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
              MedID
            </span>
          </Link>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot password?</h1>
              <p className="text-gray-600">
                No worries, we'll send you reset instructions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                error={error}
                placeholder="john.doe@example.com"
                required
                icon={<Mail className="h-4 w-4" />}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                loading={loading}
                icon={<ArrowRight className="h-5 w-5" />}
              >
                Send Reset Link
              </Button>
            </form>

            <div className="mt-6">
              <Link 
                href="/auth/login"
                className="flex items-center justify-center space-x-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to login</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}


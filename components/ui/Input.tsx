'use client'

import { InputHTMLAttributes, forwardRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, type = 'text', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    
    return (
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {label && (
          <motion.label 
            className="block text-sm font-medium text-gray-700 mb-2"
            animate={{ 
              color: isFocused ? 'rgb(37, 99, 235)' : 'rgb(55, 65, 81)'
            }}
          >
            {label}
            {props.required && (
              <motion.span 
                className="text-red-500 ml-1"
                animate={{ scale: isFocused ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.3 }}
              >
                *
              </motion.span>
            )}
          </motion.label>
        )}
        <div className="relative">
          {icon && (
            <motion.div 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              animate={{ 
                scale: isFocused ? 1.1 : 1,
                color: isFocused ? 'rgb(37, 99, 235)' : 'rgb(156, 163, 175)'
              }}
            >
              {icon}
            </motion.div>
          )}
          <motion.input
            type={type}
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              'w-full px-4 py-2.5 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 transition-all duration-300',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:shadow-lg focus:shadow-primary-500/20',
              'hover:border-gray-400',
              'disabled:bg-gray-100 disabled:cursor-not-allowed',
              error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
              icon && 'pl-10',
              className
            )}
            whileFocus={{ scale: 1.01 }}
            {...props}
          />
          
          {/* Animated bottom border */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isFocused ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        {error && (
          <motion.p 
            className="mt-1.5 text-sm text-red-600 flex items-center gap-1"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span>⚠️</span> {error}
          </motion.p>
        )}
      </motion.div>
    )
  }
)

Input.displayName = 'Input'

export default Input


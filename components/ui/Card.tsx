'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  gradient?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, gradient = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={hover ? { y: -5, shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' } : {}}
        className={cn(
          'bg-white rounded-xl shadow-md p-6 transition-all duration-200',
          gradient && 'bg-gradient-to-br from-white to-primary-50',
          hover && 'hover:shadow-xl cursor-pointer',
          className
        )}
        {...(props as any)}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export default Card


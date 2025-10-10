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
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={hover ? { 
          y: -8, 
          transition: { duration: 0.3, ease: "easeOut" }
        } : {}}
        className={cn(
          'bg-white rounded-xl shadow-md p-6 transition-all duration-300',
          gradient && 'bg-gradient-to-br from-white to-primary-50',
          hover && 'hover:shadow-2xl cursor-pointer hover:border-primary-200',
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


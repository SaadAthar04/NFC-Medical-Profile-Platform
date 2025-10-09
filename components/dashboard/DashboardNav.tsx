'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Shield, 
  LayoutDashboard, 
  User, 
  CreditCard, 
  Activity,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  FileText
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function DashboardNav() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/dashboard', icon: LayoutDashboard, label: 'Overview' },
    { href: '/dashboard/profile', icon: User, label: 'Medical Profile' },
    { href: '/dashboard/bracelet', icon: Activity, label: 'NFC Bracelet' },
    { href: '/dashboard/subscription', icon: CreditCard, label: 'Subscription' },
    { href: '/dashboard/audit-logs', icon: FileText, label: 'Audit Logs' },
    { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="p-2 bg-primary-600 rounded-lg">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">MedID</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-20 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        'fixed top-0 left-0 z-20 h-screen w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out',
        'lg:translate-x-0',
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-primary-600 rounded-lg"
              >
                <Shield className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold text-gray-900">MedID</span>
            </Link>
          </div>

          {/* User Info */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-primary-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
                <p className="text-xs text-gray-500 truncate">john.doe@example.com</p>
              </div>
              <button className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                <Bell className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors',
                    isActive
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <button className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full">
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}


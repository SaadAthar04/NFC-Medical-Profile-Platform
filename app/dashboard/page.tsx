'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Activity, 
  Heart, 
  Shield, 
  Users, 
  ArrowRight,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function DashboardPage() {
  const stats = [
    {
      title: 'Profile Status',
      value: 'Complete',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      change: '+100%',
      changeType: 'positive'
    },
    {
      title: 'NFC Bracelet',
      value: 'Active',
      icon: Activity,
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
      change: 'Linked',
      changeType: 'neutral'
    },
    {
      title: 'Profile Access',
      value: '12',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      change: '+3 this month',
      changeType: 'positive'
    },
    {
      title: 'Subscription',
      value: 'Active',
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      change: '23 days left',
      changeType: 'neutral'
    }
  ]

  const recentActivity = [
    {
      action: 'Profile accessed by Emergency Services',
      location: 'Toronto General Hospital',
      time: '2 hours ago',
      type: 'access'
    },
    {
      action: 'Medical profile updated',
      location: 'Blood type changed to O+',
      time: '1 day ago',
      type: 'update'
    },
    {
      action: 'NFC bracelet linked',
      location: 'Device ID: NFC-123456',
      time: '3 days ago',
      type: 'system'
    },
    {
      action: 'Emergency contact added',
      location: 'Jane Doe - Sister',
      time: '5 days ago',
      type: 'update'
    }
  ]

  const quickActions = [
    {
      title: 'Update Medical Info',
      description: 'Keep your profile current',
      href: '/dashboard/profile',
      icon: Heart,
      color: 'primary'
    },
    {
      title: 'Manage Bracelet',
      description: 'Link or replace your NFC device',
      href: '/dashboard/bracelet',
      icon: Activity,
      color: 'blue'
    },
    {
      title: 'View Audit Logs',
      description: 'See who accessed your profile',
      href: '/dashboard/audit-logs',
      icon: Shield,
      color: 'purple'
    }
  ]

  const healthReminders = [
    {
      title: 'Update Medications',
      description: 'Review and update your current medications list',
      priority: 'high'
    },
    {
      title: 'Annual Checkup',
      description: 'Schedule your yearly health examination',
      priority: 'medium'
    },
    {
      title: 'Emergency Contact Verification',
      description: 'Verify your emergency contacts are up to date',
      priority: 'low'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto space-y-8 relative">
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-300/20 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Header with gradient animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <motion.h1 
          className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent"
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
          Dashboard ✨
        </motion.h1>
        <p className="text-gray-600 flex items-center gap-2">
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            👋
          </motion.span>
          Welcome back! Here's an overview of your medical profile.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 200 
            }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <Card className="hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 relative overflow-hidden group">
              {/* Gradient sweep on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-50/0 via-primary-50/50 to-primary-50/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
              
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <p className="text-sm text-gray-600 mb-1 font-medium">{stat.title}</p>
                  <motion.p 
                    className="text-3xl font-bold text-gray-900"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <motion.p 
                    className={`text-xs mt-1 font-semibold ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-gray-500'
                    }`}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.change}
                  </motion.p>
                </div>
                <motion.div 
                  className={cn('p-3 rounded-xl shadow-lg', stat.bgColor)}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(0,0,0,0.1)',
                      '0 0 20px rgba(59, 130, 246, 0.3)',
                      '0 0 10px rgba(0,0,0,0.1)',
                    ]
                  }}
                >
                  <stat.icon className={cn('h-6 w-6', stat.color)} />
                </motion.div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <Link key={index} href={action.href}>
                  <motion.div 
                    className="p-4 rounded-lg border-2 border-gray-200 hover:border-primary-600 transition-all cursor-pointer group relative overflow-hidden"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background glow on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 shadow-md ${
                          action.color === 'primary' ? 'bg-primary-100 text-primary-600' :
                          action.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          'bg-purple-100 text-purple-600'
                        }`}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                      >
                        <action.icon className="h-5 w-5" />
                      </motion.div>
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Health Reminders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Health Reminders</h2>
            <div className="space-y-3">
              {healthReminders.map((reminder, index) => (
                <motion.div 
                  key={index} 
                  className="p-3 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 hover:border-primary-300 transition-all cursor-pointer"
                  whileHover={{ scale: 1.03, x: 5 }}
                  animate={{
                    borderColor: reminder.priority === 'high' ? 
                      ['rgba(239, 68, 68, 0.2)', 'rgba(239, 68, 68, 0.4)', 'rgba(239, 68, 68, 0.2)'] :
                      ['rgba(229, 231, 235, 1)', 'rgba(229, 231, 235, 1)', 'rgba(229, 231, 235, 1)']
                  }}
                  transition={{ 
                    borderColor: { duration: 2, repeat: Infinity },
                    scale: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-medium text-gray-900 text-sm">{reminder.title}</h3>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      animate={{ 
                        y: reminder.priority === 'high' ? [0, -2, 0] : 0 
                      }}
                      transition={{ 
                        y: { duration: 1.5, repeat: Infinity }
                      }}
                    >
                      <Badge 
                        variant={
                          reminder.priority === 'high' ? 'danger' :
                          reminder.priority === 'medium' ? 'warning' : 'info'
                        }
                      >
                        {reminder.priority}
                      </Badge>
                    </motion.div>
                  </div>
                  <p className="text-xs text-gray-600">{reminder.description}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            <Link href="/dashboard/audit-logs">
              <Button variant="ghost" size="sm" icon={<ArrowRight className="h-4 w-4" />}>
                View All
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                <div className={`p-2 rounded-lg flex-shrink-0 ${
                  activity.type === 'access' ? 'bg-red-100' :
                  activity.type === 'update' ? 'bg-blue-100' :
                  'bg-gray-100'
                }`}>
                  {activity.type === 'access' && <AlertCircle className="h-4 w-4 text-red-600" />}
                  {activity.type === 'update' && <CheckCircle className="h-4 w-4 text-blue-600" />}
                  {activity.type === 'system' && <Activity className="h-4 w-4 text-gray-600" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.location}</p>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-500 flex-shrink-0">
                  <Clock className="h-3 w-3" />
                  <span>{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


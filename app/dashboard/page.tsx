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
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's an overview of your medical profile.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card hover>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-xs mt-1 ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <div className={cn('p-3 rounded-xl', stat.bgColor)}>
                  <stat.icon className={cn('h-6 w-6', stat.color)} />
                </div>
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
                  <div className="p-4 rounded-lg border-2 border-gray-200 hover:border-primary-600 transition-all cursor-pointer group">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                      action.color === 'primary' ? 'bg-primary-100 text-primary-600' :
                      action.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      <action.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
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
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-medium text-gray-900 text-sm">{reminder.title}</h3>
                    <Badge 
                      variant={
                        reminder.priority === 'high' ? 'danger' :
                        reminder.priority === 'medium' ? 'warning' : 'info'
                      }
                    >
                      {reminder.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600">{reminder.description}</p>
                </div>
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


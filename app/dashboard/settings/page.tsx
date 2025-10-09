'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Lock, 
  Bell, 
  Shield, 
  Download,
  Trash2,
  Save
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Badge from '@/components/ui/Badge'

export default function SettingsPage() {
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')

  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567'
  })

  const [notifications, setNotifications] = useState({
    profileAccess: true,
    subscriptionUpdates: true,
    securityAlerts: true,
    marketingEmails: false
  })

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Data', icon: Shield }
  ]

  const handleSave = async () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert('Settings saved successfully!')
    }, 1500)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <nav className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible space-x-2 lg:space-x-0 lg:space-y-1 pb-2 lg:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'flex items-center space-x-3 px-4 py-3 rounded-lg transition-all whitespace-nowrap',
                    'lg:w-full',
                    activeTab === tab.id
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  <tab.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </Card>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <Card>
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="First Name"
                    value={profileData.firstName}
                    onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                  />
                  <Input
                    label="Last Name"
                    value={profileData.lastName}
                    onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                  />
                  <Input
                    label="Email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  />
                  <Input
                    label="Phone"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                  />
                </div>
                <div className="flex justify-end">
                  <Button onClick={handleSave} loading={loading} icon={<Save className="h-4 w-4" />}>
                    Save Changes
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Security Settings</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Change Password</h3>
                    <p className="text-sm text-gray-600 mb-4">Update your password regularly to keep your account secure.</p>
                    <Button variant="outline">Change Password</Button>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account.</p>
                    <Badge variant="warning">Not Enabled</Badge>
                    <Button variant="outline" className="ml-4">Enable 2FA</Button>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Active Sessions</h3>
                    <p className="text-sm text-gray-600 mb-4">Manage devices where you're currently logged in.</p>
                    <Button variant="outline">View Sessions</Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Notification Preferences</h2>
                <div className="space-y-4">
                  {Object.entries({
                    profileAccess: 'Profile Access Alerts',
                    subscriptionUpdates: 'Subscription Updates',
                    securityAlerts: 'Security Alerts',
                    marketingEmails: 'Marketing Emails'
                  }).map(([key, label]) => (
                    <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{label}</p>
                        <p className="text-sm text-gray-600">Receive notifications about {label.toLowerCase()}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications[key as keyof typeof notifications]}
                          onChange={(e) => setNotifications({ ...notifications, [key]: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button onClick={handleSave} loading={loading} icon={<Save className="h-4 w-4" />}>
                    Save Preferences
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Privacy & Data</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Data Export</h3>
                    <p className="text-sm text-gray-600 mb-4">Download a copy of all your personal data in JSON or PDF format.</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" icon={<Download className="h-4 w-4" />}>
                        Export as JSON
                      </Button>
                      <Button variant="outline" icon={<Download className="h-4 w-4" />}>
                        Export as PDF
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Data Retention</h3>
                    <p className="text-sm text-gray-600">
                      Your data is stored securely on Canadian servers and retained for as long as your account is active. 
                      Audit logs are kept for 7 years as per PIPEDA regulations.
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h3 className="font-semibold text-red-900 mb-2">Delete Account</h3>
                    <p className="text-sm text-red-700 mb-4">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <Button variant="danger" icon={<Trash2 className="h-4 w-4" />}>
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


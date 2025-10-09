'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Activity, 
  DollarSign, 
  TrendingUp,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Ban,
  Trash2,
  Download,
  Shield
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Badge from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

interface User {
  id: string
  name: string
  email: string
  plan: 'monthly' | 'yearly'
  status: 'active' | 'inactive' | 'suspended'
  joinDate: string
  lastActive: string
  braceletLinked: boolean
}

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])

  const stats = [
    { label: 'Total Users', value: '1,234', change: '+12%', icon: Users, color: 'primary' },
    { label: 'Active Subscriptions', value: '1,089', change: '+8%', icon: Activity, color: 'green' },
    { label: 'Monthly Revenue', value: '$10,890', change: '+15%', icon: DollarSign, color: 'blue' },
    { label: 'Growth Rate', value: '23%', change: '+5%', icon: TrendingUp, color: 'purple' }
  ]

  const users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      plan: 'yearly',
      status: 'active',
      joinDate: '2024-01-15',
      lastActive: '2024-02-20',
      braceletLinked: true
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      plan: 'monthly',
      status: 'active',
      joinDate: '2024-02-01',
      lastActive: '2024-02-19',
      braceletLinked: true
    },
    {
      id: '3',
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      plan: 'monthly',
      status: 'inactive',
      joinDate: '2023-12-10',
      lastActive: '2024-01-15',
      braceletLinked: false
    },
    {
      id: '4',
      name: 'Alice Williams',
      email: 'alice.williams@example.com',
      plan: 'yearly',
      status: 'active',
      joinDate: '2023-11-20',
      lastActive: '2024-02-21',
      braceletLinked: true
    },
    {
      id: '5',
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      plan: 'monthly',
      status: 'suspended',
      joinDate: '2024-01-05',
      lastActive: '2024-01-30',
      braceletLinked: false
    }
  ]

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  const selectAllUsers = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(filteredUsers.map(u => u.id))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-600 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Manage users and monitor platform activity</p>
              </div>
            </div>
            <Button variant="primary" icon={<Download className="h-4 w-4" />}>
              Export Report
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover>
                <div className="flex items-center justify-between mb-2">
                  <div className={cn(
                    'p-3 rounded-xl',
                    stat.color === 'primary' && 'bg-primary-100',
                    stat.color === 'green' && 'bg-green-100',
                    stat.color === 'blue' && 'bg-blue-100',
                    stat.color === 'purple' && 'bg-purple-100'
                  )}>
                    <stat.icon className={cn(
                      'h-6 w-6',
                      stat.color === 'primary' && 'text-primary-600',
                      stat.color === 'green' && 'text-green-600',
                      stat.color === 'blue' && 'text-blue-600',
                      stat.color === 'purple' && 'text-purple-600'
                    )} />
                  </div>
                  <span className="text-sm font-medium text-green-600">{stat.change}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* User Management */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">User Management</h2>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon={<Search className="h-4 w-4" />}
                  className="w-64"
                />
              </div>
              <Button variant="outline" size="sm" icon={<Filter className="h-4 w-4" />}>
                Filter
              </Button>
            </div>
          </div>

          {selectedUsers.length > 0 && (
            <div className="mb-4 p-3 bg-primary-50 rounded-lg flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                {selectedUsers.length} user(s) selected
              </span>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Suspend</Button>
                <Button variant="danger" size="sm">Delete</Button>
              </div>
            </div>
          )}

          <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4">
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                      onChange={selectAllUsers}
                      className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">User</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Plan</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Bracelet</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Join Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Last Active</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => toggleUserSelection(user.id)}
                        className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={user.plan === 'yearly' ? 'success' : 'info'}>
                        {user.plan}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge 
                        variant={
                          user.status === 'active' ? 'success' : 
                          user.status === 'suspended' ? 'danger' : 'warning'
                        }
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      {user.braceletLinked ? (
                        <span className="text-green-600 text-sm">✓ Linked</span>
                      ) : (
                        <span className="text-gray-400 text-sm">Not linked</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {new Date(user.lastActive).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors">
                          <Ban className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                        <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No users found matching your search.</p>
            </div>
          )}

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Showing {filteredUsers.length} of {users.length} users
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Card>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Signups</h3>
            <div className="space-y-3">
              {users.slice(0, 5).map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Revenue Overview</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">This Month</p>
                <p className="text-2xl font-bold text-gray-900">$10,890</p>
                <p className="text-sm text-green-600 mt-1">+15% from last month</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">This Year</p>
                <p className="text-2xl font-bold text-gray-900">$98,456</p>
                <p className="text-sm text-blue-600 mt-1">+23% from last year</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}


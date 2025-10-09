'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, 
  MapPin, 
  Clock, 
  AlertCircle,
  CheckCircle,
  Download,
  Filter,
  Search,
  Calendar
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Badge from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

interface AuditLog {
  id: string
  timestamp: string
  action: string
  accessor: string
  location: string
  ipAddress: string
  device: string
  status: 'success' | 'failed'
}

export default function AuditLogsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')

  const auditLogs: AuditLog[] = [
    {
      id: '1',
      timestamp: '2024-02-20T14:30:00',
      action: 'Profile Accessed',
      accessor: 'Emergency Services - Toronto General Hospital',
      location: 'Toronto, ON, Canada',
      ipAddress: '192.168.1.100',
      device: 'iPhone 13',
      status: 'success'
    },
    {
      id: '2',
      timestamp: '2024-02-19T09:15:00',
      action: 'Profile Updated',
      accessor: 'John Doe (Self)',
      location: 'Toronto, ON, Canada',
      ipAddress: '192.168.1.50',
      device: 'MacBook Pro',
      status: 'success'
    },
    {
      id: '3',
      timestamp: '2024-02-18T16:45:00',
      action: 'Profile Accessed',
      accessor: 'Emergency Services - Sunnybrook Hospital',
      location: 'Toronto, ON, Canada',
      ipAddress: '192.168.2.100',
      device: 'Samsung Galaxy S21',
      status: 'success'
    },
    {
      id: '4',
      timestamp: '2024-02-15T11:20:00',
      action: 'Bracelet Linked',
      accessor: 'John Doe (Self)',
      location: 'Toronto, ON, Canada',
      ipAddress: '192.168.1.50',
      device: 'MacBook Pro',
      status: 'success'
    },
    {
      id: '5',
      timestamp: '2024-02-14T08:30:00',
      action: 'Login Attempt',
      accessor: 'Unknown',
      location: 'Unknown',
      ipAddress: '10.0.0.1',
      device: 'Unknown',
      status: 'failed'
    }
  ]

  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch = log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.accessor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesType = filterType === 'all' || 
                       (filterType === 'access' && log.action.includes('Accessed')) ||
                       (filterType === 'update' && log.action.includes('Updated')) ||
                       (filterType === 'system' && (log.action.includes('Linked') || log.action.includes('Login')))
    
    const matchesStatus = filterStatus === 'all' || log.status === filterStatus

    return matchesSearch && matchesType && matchesStatus
  })

  const stats = [
    { label: 'Total Accesses', value: '12', icon: FileText, color: 'blue' },
    { label: 'This Month', value: '3', icon: Calendar, color: 'primary' },
    { label: 'Failed Attempts', value: '1', icon: AlertCircle, color: 'red' },
    { label: 'Locations', value: '2', icon: MapPin, color: 'purple' }
  ]

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Audit Logs</h1>
        <p className="text-gray-600">
          Track all access to your medical profile for security and compliance.
        </p>
      </motion.div>

      {/* Stats */}
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
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={cn(
                  'p-3 rounded-xl',
                  stat.color === 'blue' && 'bg-blue-100',
                  stat.color === 'primary' && 'bg-primary-100',
                  stat.color === 'red' && 'bg-red-100',
                  stat.color === 'purple' && 'bg-purple-100'
                )}>
                  <stat.icon className={cn(
                    'h-6 w-6',
                    stat.color === 'blue' && 'text-blue-600',
                    stat.color === 'primary' && 'text-primary-600',
                    stat.color === 'red' && 'text-red-600',
                    stat.color === 'purple' && 'text-purple-600'
                  )} />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <Input
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search className="h-4 w-4" />}
            />
          </div>
          <Select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            options={[
              { value: 'all', label: 'All Types' },
              { value: 'access', label: 'Profile Access' },
              { value: 'update', label: 'Updates' },
              { value: 'system', label: 'System Events' }
            ]}
          />
          <Select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            options={[
              { value: 'all', label: 'All Status' },
              { value: 'success', label: 'Success' },
              { value: 'failed', label: 'Failed' }
            ]}
          />
        </div>
      </Card>

      {/* Logs Table */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Access History</h2>
          <Button variant="outline" size="sm" icon={<Download className="h-4 w-4" />}>
            Export Logs
          </Button>
        </div>

        <div className="space-y-4">
          {filteredLogs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    log.status === 'success' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {log.status === 'success' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{log.action}</h3>
                    <p className="text-sm text-gray-600">{log.accessor}</p>
                  </div>
                </div>
                <Badge variant={log.status === 'success' ? 'success' : 'danger'}>
                  {log.status}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{new Date(log.timestamp).toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{log.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <span className="font-mono text-xs">{log.ipAddress}</span>
                </div>
                <div className="text-gray-600">
                  <span>{log.device}</span>
                </div>
              </div>
            </motion.div>
          ))}

          {filteredLogs.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No logs found matching your filters.</p>
            </div>
          )}
        </div>
      </Card>

      {/* Security Notice */}
      <Card className="bg-primary-50 border border-primary-200">
        <div className="flex items-start space-x-3">
          <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Security & Privacy</h3>
            <p className="text-sm text-gray-700">
              All access to your medical profile is logged and stored securely for 7 years in compliance with PIPEDA regulations. 
              You can export your audit logs at any time. If you notice any suspicious activity, please contact our support team immediately.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}


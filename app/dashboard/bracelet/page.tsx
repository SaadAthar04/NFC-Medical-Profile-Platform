'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Activity, 
  Smartphone, 
  Shield, 
  CheckCircle,
  AlertTriangle,
  Link as LinkIcon,
  Unlink,
  QrCode,
  Wifi
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Badge from '@/components/ui/Badge'
import Modal from '@/components/ui/Modal'

export default function BraceletPage() {
  const [braceletId, setBraceletId] = useState('')
  const [loading, setLoading] = useState(false)
  const [isLinked, setIsLinked] = useState(true)
  const [showLinkModal, setShowLinkModal] = useState(false)
  const [error, setError] = useState('')

  const currentBracelet = {
    id: 'NFC-123456789',
    linkedDate: '2024-01-15',
    lastAccessed: '2024-02-20',
    accessCount: 12,
    status: 'active'
  }

  const handleLinkBracelet = async () => {
    if (!braceletId.trim()) {
      setError('Please enter a bracelet ID')
      return
    }

    setError('')
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setShowLinkModal(false)
      setBraceletId('')
      setIsLinked(true)
      alert('Bracelet linked successfully!')
    }, 2000)
  }

  const handleUnlinkBracelet = async () => {
    if (!confirm('Are you sure you want to unlink this bracelet? Your medical profile will not be accessible via NFC until you link a new bracelet.')) {
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsLinked(false)
    }, 1500)
  }

  const handleTestBracelet = () => {
    alert('Test mode: Scan your NFC bracelet now to verify the link.')
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">NFC Bracelet</h1>
        <p className="text-gray-600">
          Manage your NFC-enabled medical bracelet and emergency access settings.
        </p>
      </motion.div>

      {/* Status Card */}
      <Card gradient={isLinked}>
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-xl ${isLinked ? 'bg-primary-600' : 'bg-gray-400'}`}>
              <Activity className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Bracelet Status</h2>
              <Badge variant={isLinked ? 'success' : 'warning'}>
                {isLinked ? 'Active' : 'Not Linked'}
              </Badge>
            </div>
          </div>
          {isLinked && (
            <Button 
              variant="outline" 
              size="sm" 
              icon={<Unlink className="h-4 w-4" />}
              onClick={handleUnlinkBracelet}
            >
              Unlink
            </Button>
          )}
        </div>

        {isLinked ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Bracelet ID</p>
              <p className="font-mono font-semibold text-gray-900">{currentBracelet.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Linked Date</p>
              <p className="font-semibold text-gray-900">{new Date(currentBracelet.linkedDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Last Accessed</p>
              <p className="font-semibold text-gray-900">{new Date(currentBracelet.lastAccessed).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Accesses</p>
              <p className="font-semibold text-gray-900">{currentBracelet.accessCount} times</p>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <p className="text-gray-700 mb-4">No bracelet linked to your account</p>
            <Button 
              onClick={() => setShowLinkModal(true)}
              icon={<LinkIcon className="h-4 w-4" />}
            >
              Link Bracelet
            </Button>
          </div>
        )}
      </Card>

      {isLinked && (
        <>
          {/* Quick Actions */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={handleTestBracelet}
                className="p-4 border-2 border-gray-200 hover:border-primary-600 rounded-lg transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Test Bracelet</h3>
                <p className="text-sm text-gray-600">Verify NFC functionality</p>
              </button>

              <button
                onClick={() => setShowLinkModal(true)}
                className="p-4 border-2 border-gray-200 hover:border-primary-600 rounded-lg transition-all group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition-colors">
                  <LinkIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Replace Bracelet</h3>
                <p className="text-sm text-gray-600">Link a new device</p>
              </button>

              <button className="p-4 border-2 border-gray-200 hover:border-primary-600 rounded-lg transition-all group">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-colors">
                  <QrCode className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">QR Code</h3>
                <p className="text-sm text-gray-600">Alternative access method</p>
              </button>
            </div>
          </Card>

          {/* How It Works */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-6">How Your NFC Bracelet Works</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary-600">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Tap to Access</h3>
                  <p className="text-gray-600">Emergency responders tap your bracelet with their smartphone to instantly access your medical profile.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary-600">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Secure Access</h3>
                  <p className="text-gray-600">The bracelet opens a secure webpage showing your critical medical information - no app required.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary-600">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Audit Trail</h3>
                  <p className="text-gray-600">Every access is logged with timestamp and location for your security and peace of mind.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Security Features */}
          <Card>
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="h-6 w-6 text-primary-600" />
              <h2 className="text-xl font-bold text-gray-900">Security Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Encrypted Data</p>
                  <p className="text-sm text-gray-600">All information is encrypted at rest and in transit</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">No Personal Data on Device</p>
                  <p className="text-sm text-gray-600">The bracelet only contains a unique ID</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">Audit Logging</p>
                  <p className="text-sm text-gray-600">Every access is tracked and logged</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900">PIPEDA Compliant</p>
                  <p className="text-sm text-gray-600">Meets Canadian privacy standards</p>
                </div>
              </div>
            </div>
          </Card>
        </>
      )}

      {/* Link Bracelet Modal */}
      <Modal
        isOpen={showLinkModal}
        onClose={() => {
          setShowLinkModal(false)
          setBraceletId('')
          setError('')
        }}
        title="Link NFC Bracelet"
        size="md"
      >
        <div className="space-y-6">
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Wifi className="h-5 w-5 text-primary-600 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 mb-1">Find your Bracelet ID</p>
                <p className="text-sm text-gray-700">
                  The unique ID is printed on the back of your NFC bracelet. It starts with "NFC-" followed by 9 digits.
                </p>
              </div>
            </div>
          </div>

          <Input
            label="Bracelet ID"
            value={braceletId}
            onChange={(e) => {
              setBraceletId(e.target.value)
              setError('')
            }}
            error={error}
            placeholder="NFC-123456789"
            icon={<Activity className="h-4 w-4" />}
          />

          <div className="flex justify-end space-x-3">
            <Button 
              variant="ghost" 
              onClick={() => {
                setShowLinkModal(false)
                setBraceletId('')
                setError('')
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={handleLinkBracelet}
              loading={loading}
              icon={<LinkIcon className="h-4 w-4" />}
            >
              Link Bracelet
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}


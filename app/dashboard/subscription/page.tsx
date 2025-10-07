'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CreditCard, 
  CheckCircle,
  Calendar,
  DollarSign,
  FileText,
  Download,
  AlertCircle,
  Crown,
  Shield
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Modal from '@/components/ui/Modal'

export default function SubscriptionPage() {
  const [loading, setLoading] = useState(false)
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)

  const currentPlan = {
    name: 'Monthly Plan',
    price: 9.99,
    interval: 'month',
    status: 'active',
    nextBilling: '2024-03-15',
    startDate: '2024-01-15',
    features: [
      'Unlimited profile updates',
      'Emergency contact management',
      'Audit log access',
      'Email support',
      '1 NFC bracelet included',
      'PIPEDA compliant storage'
    ]
  }

  const billingHistory = [
    { id: '1', date: '2024-02-15', amount: 9.99, status: 'paid', invoice: 'INV-001234' },
    { id: '2', date: '2024-01-15', amount: 9.99, status: 'paid', invoice: 'INV-001233' },
    { id: '3', date: '2023-12-15', amount: 9.99, status: 'paid', invoice: 'INV-001232' },
  ]

  const yearlyPlan = {
    name: 'Yearly Plan',
    price: 99.99,
    interval: 'year',
    savings: 20,
    features: [
      'Everything in Monthly',
      '2 NFC bracelets included',
      'Priority support',
      'Annual health checkup reminder',
      'Family sharing (up to 4)',
      'Premium bracelet designs'
    ]
  }

  const handleCancelSubscription = async () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShowCancelModal(false)
      alert('Subscription cancelled. You will have access until the end of your billing period.')
    }, 2000)
  }

  const handleUpgrade = async () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShowUpgradeModal(false)
      alert('Successfully upgraded to Yearly Plan!')
    }, 2000)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Subscription & Billing</h1>
        <p className="text-gray-600">Manage your subscription plan and payment information.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Plan */}
        <div className="lg:col-span-2 space-y-6">
          <Card gradient>
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-primary-600 rounded-xl">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{currentPlan.name}</h2>
                  <Badge variant="success">Active</Badge>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-gray-900">${currentPlan.price}</p>
                <p className="text-sm text-gray-600">per {currentPlan.interval}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex items-center space-x-2 text-gray-600 mb-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Next Billing Date</span>
                </div>
                <p className="font-semibold text-gray-900">
                  {new Date(currentPlan.nextBilling).toLocaleDateString()}
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-gray-600 mb-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">Member Since</span>
                </div>
                <p className="font-semibold text-gray-900">
                  {new Date(currentPlan.startDate).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Plan Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="primary" 
                onClick={() => setShowUpgradeModal(true)}
                icon={<Crown className="h-4 w-4" />}
              >
                Upgrade to Yearly
              </Button>
              <Button 
                variant="outline"
                onClick={() => setShowCancelModal(true)}
              >
                Cancel Subscription
              </Button>
            </div>
          </Card>

          {/* Billing History */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Billing History</h2>
              <Button variant="ghost" size="sm" icon={<Download className="h-4 w-4" />}>
                Export
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Invoice</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {billingHistory.map((bill) => (
                    <tr key={bill.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-900">
                        {new Date(bill.date).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600 font-mono">{bill.invoice}</td>
                      <td className="py-3 px-4 text-sm text-gray-900 font-semibold">${bill.amount}</td>
                      <td className="py-3 px-4">
                        <Badge variant="success">Paid</Badge>
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-sm text-primary-600 hover:underline flex items-center space-x-1">
                          <FileText className="h-3 w-3" />
                          <span>Download</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Payment Method & Upgrade */}
        <div className="space-y-6">
          {/* Payment Method */}
          <Card>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Payment Method</h2>
            <div className="p-4 bg-gray-50 rounded-lg mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center">
                    <CreditCard className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">•••• 4242</p>
                    <p className="text-xs text-gray-600">Expires 12/25</p>
                  </div>
                </div>
                <Badge variant="success">Primary</Badge>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Update Payment Method
            </Button>
          </Card>

          {/* Upgrade Offer */}
          <Card className="border-2 border-primary-600">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-3">
                <Crown className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Save with Yearly Plan</h3>
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                Save $20/year
              </div>
            </div>
            <div className="space-y-2 mb-4">
              {yearlyPlan.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <div className="text-center mb-4">
              <p className="text-3xl font-bold text-gray-900">${yearlyPlan.price}</p>
              <p className="text-sm text-gray-600">per year</p>
            </div>
            <Button 
              variant="primary" 
              className="w-full"
              onClick={() => setShowUpgradeModal(true)}
            >
              Upgrade Now
            </Button>
          </Card>

          {/* Need Help */}
          <Card>
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-primary-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Contact our support team for billing questions or assistance.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Support
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Cancel Modal */}
      <Modal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        title="Cancel Subscription"
        size="md"
      >
        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 mb-1">Are you sure?</p>
                <p className="text-sm text-gray-700">
                  Your medical profile will no longer be accessible via NFC after your current billing period ends on{' '}
                  <strong>{new Date(currentPlan.nextBilling).toLocaleDateString()}</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-700 font-medium">You will lose access to:</p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Emergency NFC bracelet access</li>
              <li>• Medical profile updates</li>
              <li>• Audit log history</li>
              <li>• Priority support</li>
            </ul>
          </div>

          <div className="flex justify-end space-x-3">
            <Button variant="ghost" onClick={() => setShowCancelModal(false)}>
              Keep Subscription
            </Button>
            <Button 
              variant="danger" 
              onClick={handleCancelSubscription}
              loading={loading}
            >
              Cancel Subscription
            </Button>
          </div>
        </div>
      </Modal>

      {/* Upgrade Modal */}
      <Modal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        title="Upgrade to Yearly Plan"
        size="md"
      >
        <div className="space-y-4">
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
            <div className="text-center">
              <p className="text-sm text-gray-700 mb-2">You're upgrading to</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">${yearlyPlan.price}/year</p>
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Save $20 annually
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Additional Benefits:</h4>
            <div className="space-y-2">
              {yearlyPlan.features.slice(1).map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary-600" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Yearly Plan</span>
              <span className="font-semibold text-gray-900">${yearlyPlan.price}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">Prorated credit</span>
              <span className="font-semibold text-green-600">-$5.00</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Due today</span>
                <span className="font-bold text-gray-900">${(yearlyPlan.price - 5).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Button variant="ghost" onClick={() => setShowUpgradeModal(false)}>
              Cancel
            </Button>
            <Button 
              variant="primary" 
              onClick={handleUpgrade}
              loading={loading}
              icon={<Crown className="h-4 w-4" />}
            >
              Confirm Upgrade
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}


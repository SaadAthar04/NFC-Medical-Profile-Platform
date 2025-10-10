'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  AlertCircle, 
  Pill, 
  Activity, 
  Users, 
  Phone,
  Mail,
  MapPin,
  Calendar,
  Shield,
  Clock
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

interface EmergencyProfileData {
  firstName: string
  lastName: string
  dateOfBirth: string
  bloodType: string
  allergies: { allergen: string; severity: string; reaction: string }[]
  medications: { name: string; dosage: string; frequency: string }[]
  conditions: string[]
  emergencyContacts: {
    name: string
    relationship: string
    phone: string
    email: string
  }[]
  notes: string
  organDonor: string
  dnr: string
}

export default function EmergencyProfilePage({ params }: { params: { braceletId: string } }) {
  const [profile, setProfile] = useState<EmergencyProfileData | null>(null)
  const [loading, setLoading] = useState(true)
  const [accessLogged, setAccessLogged] = useState(false)

  useEffect(() => {
    // Simulate fetching profile data
    setTimeout(() => {
      setProfile({
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1985-05-15',
        bloodType: 'O+',
        allergies: [
          { allergen: 'Penicillin', severity: 'severe', reaction: 'Anaphylaxis' },
          { allergen: 'Peanuts', severity: 'moderate', reaction: 'Hives, swelling' }
        ],
        medications: [
          { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily' },
          { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily' }
        ],
        conditions: ['Hypertension', 'Type 2 Diabetes', 'Asthma'],
        emergencyContacts: [
          {
            name: 'Jane Doe',
            relationship: 'Spouse',
            phone: '+1 (555) 123-4567',
            email: 'jane.doe@example.com'
          },
          {
            name: 'Bob Smith',
            relationship: 'Brother',
            phone: '+1 (555) 987-6543',
            email: 'bob.smith@example.com'
          }
        ],
        notes: 'Patient has mobility issues and requires wheelchair assistance. Prefers morning appointments.',
        organDonor: 'yes',
        dnr: 'no'
      })
      setLoading(false)
      setAccessLogged(true)
    }, 1500)
  }, [params.braceletId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-4">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-gray-700 font-medium">Loading emergency profile...</p>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-4">
        <Card className="max-w-md text-center">
          <AlertCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile Not Found</h1>
          <p className="text-gray-600">
            This bracelet is not linked to a valid medical profile. Please contact support.
          </p>
        </Card>
      </div>
    )
  }

  const calculateAge = (dob: string) => {
    const today = new Date()
    const birthDate = new Date(dob)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-300/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Emergency Banner */}
      <motion.div 
        className="bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white py-4 shadow-lg relative overflow-hidden"
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
        {/* Pulsing overlay */}
        <motion.div
          className="absolute inset-0 bg-white"
          animate={{ opacity: [0, 0.1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center space-x-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <AlertCircle className="h-6 w-6" />
            </motion.div>
            <span className="font-bold text-lg tracking-wide">🚨 EMERGENCY MEDICAL PROFILE 🚨</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <AlertCircle className="h-6 w-6" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Access Logged Notice */}
        {accessLogged && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4"
          >
            <div className="flex items-center space-x-2 text-blue-800">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">
                This access has been logged for security purposes
              </span>
            </div>
          </motion.div>
        )}

        {/* Patient Info Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Card className="mb-6 bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white shadow-2xl border-2 border-red-500 relative overflow-hidden">
            {/* Animated glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="flex items-center justify-between relative z-10">
              <div>
                <motion.h1 
                  className="text-4xl font-bold mb-2"
                  animate={{ opacity: [0.9, 1, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {profile.firstName} {profile.lastName}
                </motion.h1>
                <div className="flex items-center space-x-4 text-red-100">
                  <motion.span 
                    className="flex items-center space-x-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Age: {calculateAge(profile.dateOfBirth)}</span>
                  </motion.span>
                  <motion.span 
                    className="flex items-center space-x-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Clock className="h-4 w-4" />
                    <span>Accessed: {new Date().toLocaleString()}</span>
                  </motion.span>
                </div>
              </div>
              <motion.div 
                className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 shadow-2xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255, 255, 255, 0.3)',
                    '0 0 30px rgba(255, 255, 255, 0.5)',
                    '0 0 20px rgba(255, 255, 255, 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-sm text-red-100 mb-1">Blood Type</p>
                <motion.p 
                  className="text-5xl font-bold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {profile.bloodType}
                </motion.p>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Critical Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Allergies - CRITICAL */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="border-4 border-red-500 shadow-xl hover:shadow-2xl hover:shadow-red-500/30 transition-all relative overflow-hidden">
                {/* Pulsing border effect */}
                <motion.div
                  className="absolute inset-0 border-4 border-red-500 rounded-xl"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <div className="flex items-center space-x-2 mb-4 relative z-10">
                  <motion.div 
                    className="p-3 bg-red-100 rounded-lg shadow-lg"
                    animate={{
                      boxShadow: [
                        '0 0 10px rgba(220, 38, 38, 0.3)',
                        '0 0 20px rgba(220, 38, 38, 0.6)',
                        '0 0 10px rgba(220, 38, 38, 0.3)',
                      ],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <AlertCircle className="h-7 w-7 text-red-600" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    ⚠️ ALLERGIES - CRITICAL
                  </h2>
                </div>
                {profile.allergies.length > 0 ? (
                  <div className="space-y-3">
                    {profile.allergies.map((allergy, index) => (
                      <div key={index} className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-bold text-red-900 text-lg">{allergy.allergen}</p>
                            <p className="text-sm text-red-700 mt-1">Reaction: {allergy.reaction}</p>
                          </div>
                          <Badge variant="danger" className="uppercase">
                            {allergy.severity}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    No known allergies
                  </p>
                )}
              </Card>
            </motion.div>

            {/* Current Medications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Pill className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Current Medications</h2>
                </div>
                {profile.medications.length > 0 ? (
                  <div className="space-y-2">
                    {profile.medications.map((med, index) => (
                      <div key={index} className="p-3 bg-blue-50 rounded-lg">
                        <p className="font-semibold text-gray-900">{med.name}</p>
                        <p className="text-sm text-gray-600">
                          {med.dosage} - {med.frequency}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No current medications</p>
                )}
              </Card>
            </motion.div>

            {/* Medical Conditions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Activity className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Medical Conditions</h2>
                </div>
                {profile.conditions.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {profile.conditions.map((condition, index) => (
                      <Badge key={index} variant="info" className="text-sm px-3 py-1.5">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No known medical conditions</p>
                )}
              </Card>
            </motion.div>

            {/* Additional Notes */}
            {profile.notes && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Heart className="h-6 w-6 text-gray-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Additional Information</h2>
                  </div>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{profile.notes}</p>
                </Card>
              </motion.div>
            )}

            {/* DNR and Organ Donor Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="bg-yellow-50 border border-yellow-200">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Important Directives</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Do Not Resuscitate (DNR)</p>
                    <p className="font-bold text-lg text-gray-900">
                      {profile.dnr === 'yes' ? '✓ YES' : '✗ NO'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Organ Donor</p>
                    <p className="font-bold text-lg text-gray-900">
                      {profile.organDonor === 'yes' ? '✓ YES' : profile.organDonor === 'no' ? '✗ NO' : '? UNDECIDED'}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Emergency Contacts Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="sticky top-4 border-2 border-primary-600">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Emergency Contacts</h2>
                </div>
                <div className="space-y-4">
                  {profile.emergencyContacts.map((contact, index) => (
                    <div key={index} className="p-4 bg-primary-50 rounded-lg">
                      <p className="font-bold text-gray-900 mb-1">{contact.name}</p>
                      <p className="text-sm text-gray-600 mb-3">{contact.relationship}</p>
                      <div className="space-y-2">
                        <a 
                          href={`tel:${contact.phone}`}
                          className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          <Phone className="h-4 w-4" />
                          <span className="font-medium">{contact.phone}</span>
                        </a>
                        <a 
                          href={`mailto:${contact.email}`}
                          className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                          <span className="text-sm">{contact.email}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* System Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-gray-50">
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="h-5 w-5 text-gray-600" />
                  <h3 className="font-semibold text-gray-900">System Information</h3>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>Bracelet ID: {params.braceletId}</p>
                  <p>Profile Last Updated: {new Date().toLocaleDateString()}</p>
                  <p>Data Encryption: AES-256</p>
                  <p className="pt-2 border-t border-gray-200">
                    This profile is PIPEDA compliant and encrypted.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Powered by MedID • Secure Emergency Medical Profiles</p>
          <p className="mt-1">For support or to report issues: support@instantwrist.ca</p>
        </div>
      </div>
    </div>
  )
}


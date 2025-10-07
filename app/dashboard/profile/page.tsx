'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  AlertCircle, 
  Pill, 
  Activity, 
  Users, 
  FileText,
  Save,
  Plus,
  X,
  Phone,
  Mail
} from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Textarea from '@/components/ui/Textarea'
import Badge from '@/components/ui/Badge'

interface EmergencyContact {
  id: string
  name: string
  relationship: string
  phone: string
  email: string
}

interface Medication {
  id: string
  name: string
  dosage: string
  frequency: string
}

interface Allergy {
  id: string
  allergen: string
  severity: string
  reaction: string
}

export default function MedicalProfilePage() {
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('basic')

  // Basic Information
  const [basicInfo, setBasicInfo] = useState({
    bloodType: 'O+',
    height: '170',
    weight: '70',
    organDonor: 'yes',
    dnr: 'no'
  })

  // Allergies
  const [allergies, setAllergies] = useState<Allergy[]>([
    { id: '1', allergen: 'Penicillin', severity: 'severe', reaction: 'Anaphylaxis' }
  ])

  // Medications
  const [medications, setMedications] = useState<Medication[]>([
    { id: '1', name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily' }
  ])

  // Medical Conditions
  const [conditions, setConditions] = useState<string[]>(['Hypertension', 'Type 2 Diabetes'])
  const [newCondition, setNewCondition] = useState('')

  // Emergency Contacts
  const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContact[]>([
    {
      id: '1',
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '+1 (555) 123-4567',
      email: 'jane.doe@example.com'
    }
  ])

  // Additional Notes
  const [notes, setNotes] = useState('Patient prefers morning appointments. Has mobility issues.')

  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: Heart },
    { id: 'allergies', label: 'Allergies', icon: AlertCircle },
    { id: 'medications', label: 'Medications', icon: Pill },
    { id: 'conditions', label: 'Conditions', icon: Activity },
    { id: 'emergency', label: 'Emergency Contacts', icon: Users },
    { id: 'notes', label: 'Additional Notes', icon: FileText },
  ]

  const handleSave = async () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      alert('Profile updated successfully!')
    }, 2000)
  }

  const addAllergy = () => {
    setAllergies([...allergies, { id: Date.now().toString(), allergen: '', severity: 'mild', reaction: '' }])
  }

  const removeAllergy = (id: string) => {
    setAllergies(allergies.filter(a => a.id !== id))
  }

  const addMedication = () => {
    setMedications([...medications, { id: Date.now().toString(), name: '', dosage: '', frequency: '' }])
  }

  const removeMedication = (id: string) => {
    setMedications(medications.filter(m => m.id !== id))
  }

  const addCondition = () => {
    if (newCondition.trim()) {
      setConditions([...conditions, newCondition.trim()])
      setNewCondition('')
    }
  }

  const removeCondition = (condition: string) => {
    setConditions(conditions.filter(c => c !== condition))
  }

  const addEmergencyContact = () => {
    setEmergencyContacts([...emergencyContacts, {
      id: Date.now().toString(),
      name: '',
      relationship: '',
      phone: '',
      email: ''
    }])
  }

  const removeEmergencyContact = (id: string) => {
    setEmergencyContacts(emergencyContacts.filter(c => c.id !== id))
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Medical Profile</h1>
        <p className="text-gray-600">
          Keep your emergency medical information up to date. This information will be accessible via your NFC bracelet.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <Card>
        <div className="flex overflow-x-auto space-x-2 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all',
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              <tab.icon className="h-4 w-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </Card>

      {/* Tab Content */}
      <Card>
        {/* Basic Information */}
        {activeTab === 'basic' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-bold text-gray-900">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Blood Type"
                value={basicInfo.bloodType}
                onChange={(e) => setBasicInfo({ ...basicInfo, bloodType: e.target.value })}
                options={[
                  { value: 'A+', label: 'A+' },
                  { value: 'A-', label: 'A-' },
                  { value: 'B+', label: 'B+' },
                  { value: 'B-', label: 'B-' },
                  { value: 'AB+', label: 'AB+' },
                  { value: 'AB-', label: 'AB-' },
                  { value: 'O+', label: 'O+' },
                  { value: 'O-', label: 'O-' },
                ]}
                required
              />
              <Input
                label="Height (cm)"
                type="number"
                value={basicInfo.height}
                onChange={(e) => setBasicInfo({ ...basicInfo, height: e.target.value })}
                placeholder="170"
              />
              <Input
                label="Weight (kg)"
                type="number"
                value={basicInfo.weight}
                onChange={(e) => setBasicInfo({ ...basicInfo, weight: e.target.value })}
                placeholder="70"
              />
              <Select
                label="Organ Donor"
                value={basicInfo.organDonor}
                onChange={(e) => setBasicInfo({ ...basicInfo, organDonor: e.target.value })}
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                  { value: 'undecided', label: 'Undecided' },
                ]}
              />
              <Select
                label="Do Not Resuscitate (DNR)"
                value={basicInfo.dnr}
                onChange={(e) => setBasicInfo({ ...basicInfo, dnr: e.target.value })}
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                ]}
              />
            </div>
          </motion.div>
        )}

        {/* Allergies */}
        {activeTab === 'allergies' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Allergies</h2>
              <Button onClick={addAllergy} icon={<Plus className="h-4 w-4" />}>
                Add Allergy
              </Button>
            </div>
            <div className="space-y-4">
              {allergies.map((allergy, index) => (
                <div key={allergy.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      label="Allergen"
                      value={allergy.allergen}
                      onChange={(e) => {
                        const updated = [...allergies]
                        updated[index].allergen = e.target.value
                        setAllergies(updated)
                      }}
                      placeholder="e.g., Penicillin"
                      required
                    />
                    <Select
                      label="Severity"
                      value={allergy.severity}
                      onChange={(e) => {
                        const updated = [...allergies]
                        updated[index].severity = e.target.value
                        setAllergies(updated)
                      }}
                      options={[
                        { value: 'mild', label: 'Mild' },
                        { value: 'moderate', label: 'Moderate' },
                        { value: 'severe', label: 'Severe' },
                      ]}
                    />
                    <div className="flex gap-2">
                      <Input
                        label="Reaction"
                        value={allergy.reaction}
                        onChange={(e) => {
                          const updated = [...allergies]
                          updated[index].reaction = e.target.value
                          setAllergies(updated)
                        }}
                        placeholder="e.g., Rash, Anaphylaxis"
                        className="flex-1"
                      />
                      <button
                        onClick={() => removeAllergy(allergy.id)}
                        className="mt-7 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {allergies.length === 0 && (
                <p className="text-center text-gray-500 py-8">No allergies added yet.</p>
              )}
            </div>
          </motion.div>
        )}

        {/* Medications */}
        {activeTab === 'medications' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Current Medications</h2>
              <Button onClick={addMedication} icon={<Plus className="h-4 w-4" />}>
                Add Medication
              </Button>
            </div>
            <div className="space-y-4">
              {medications.map((medication, index) => (
                <div key={medication.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      label="Medication Name"
                      value={medication.name}
                      onChange={(e) => {
                        const updated = [...medications]
                        updated[index].name = e.target.value
                        setMedications(updated)
                      }}
                      placeholder="e.g., Lisinopril"
                      required
                    />
                    <Input
                      label="Dosage"
                      value={medication.dosage}
                      onChange={(e) => {
                        const updated = [...medications]
                        updated[index].dosage = e.target.value
                        setMedications(updated)
                      }}
                      placeholder="e.g., 10mg"
                    />
                    <div className="flex gap-2">
                      <Input
                        label="Frequency"
                        value={medication.frequency}
                        onChange={(e) => {
                          const updated = [...medications]
                          updated[index].frequency = e.target.value
                          setMedications(updated)
                        }}
                        placeholder="e.g., Once daily"
                        className="flex-1"
                      />
                      <button
                        onClick={() => removeMedication(medication.id)}
                        className="mt-7 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {medications.length === 0 && (
                <p className="text-center text-gray-500 py-8">No medications added yet.</p>
              )}
            </div>
          </motion.div>
        )}

        {/* Medical Conditions */}
        {activeTab === 'conditions' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-bold text-gray-900">Medical Conditions</h2>
            <div className="flex gap-2">
              <Input
                label="Add Condition"
                value={newCondition}
                onChange={(e) => setNewCondition(e.target.value)}
                placeholder="e.g., Hypertension"
                onKeyPress={(e) => e.key === 'Enter' && addCondition()}
                className="flex-1"
              />
              <Button onClick={addCondition} icon={<Plus className="h-4 w-4" />} className="mt-7">
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {conditions.map((condition, index) => (
                <Badge key={index} variant="info" className="text-sm px-3 py-1.5">
                  {condition}
                  <button
                    onClick={() => removeCondition(condition)}
                    className="ml-2 hover:text-red-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            {conditions.length === 0 && (
              <p className="text-center text-gray-500 py-8">No medical conditions added yet.</p>
            )}
          </motion.div>
        )}

        {/* Emergency Contacts */}
        {activeTab === 'emergency' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Emergency Contacts</h2>
              <Button onClick={addEmergencyContact} icon={<Plus className="h-4 w-4" />}>
                Add Contact
              </Button>
            </div>
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={contact.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      value={contact.name}
                      onChange={(e) => {
                        const updated = [...emergencyContacts]
                        updated[index].name = e.target.value
                        setEmergencyContacts(updated)
                      }}
                      placeholder="e.g., Jane Doe"
                      icon={<Users className="h-4 w-4" />}
                      required
                    />
                    <Input
                      label="Relationship"
                      value={contact.relationship}
                      onChange={(e) => {
                        const updated = [...emergencyContacts]
                        updated[index].relationship = e.target.value
                        setEmergencyContacts(updated)
                      }}
                      placeholder="e.g., Spouse"
                      required
                    />
                    <Input
                      label="Phone Number"
                      value={contact.phone}
                      onChange={(e) => {
                        const updated = [...emergencyContacts]
                        updated[index].phone = e.target.value
                        setEmergencyContacts(updated)
                      }}
                      placeholder="+1 (555) 123-4567"
                      icon={<Phone className="h-4 w-4" />}
                      required
                    />
                    <div className="flex gap-2">
                      <Input
                        label="Email"
                        type="email"
                        value={contact.email}
                        onChange={(e) => {
                          const updated = [...emergencyContacts]
                          updated[index].email = e.target.value
                          setEmergencyContacts(updated)
                        }}
                        placeholder="jane.doe@example.com"
                        icon={<Mail className="h-4 w-4" />}
                        className="flex-1"
                      />
                      <button
                        onClick={() => removeEmergencyContact(contact.id)}
                        className="mt-7 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Additional Notes */}
        {activeTab === 'notes' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-bold text-gray-900">Additional Notes</h2>
            <Textarea
              label="Medical Notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any additional information that emergency responders should know..."
              rows={8}
            />
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> This information will be visible to emergency responders. 
                Include relevant details like surgical history, implants, or special considerations.
              </p>
            </div>
          </motion.div>
        )}
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          loading={loading}
          size="lg"
          icon={<Save className="h-5 w-5" />}
        >
          Save Changes
        </Button>
      </div>
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


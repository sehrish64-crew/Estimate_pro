'use client'

import { useState, useEffect } from 'react'
import { X, HelpCircle, Key, Hash } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useCountry } from '@/contexts/CountryContext'
import { getPrice, formatCurrency } from '@/lib/prices'

interface GetReportFormProps {
  isOpen: boolean
  onClose: () => void
  preselectedPackage?: string
  prefilledIdentType?: 'vin' | 'plate'
  prefilledIdentValue?: string
}

const vehicleTypes = ['Car', 'Motorcycle', 'Truck', 'Boat', 'ATV', 'Campervan' , 'Caravan' , 'Motorhome' , 'RV' , 'Fifth Wheel', 'Trailer', 'Toy Hauler']
const packageRedirectUrls: Record<string, string> = {
  basic: 'https://digitalpdfgoods.etsy.com/listing/4535044640/digital-pdf-tech',
  standard: 'https://digitalpdfgoods.etsy.com/listing/4535022331/digital-pdf-tech',
  premium: 'https://digitalpdfgoods.etsy.com/listing/4535019180/digital-pdf-tech',
}

export default function GetReportForm({ isOpen, onClose, preselectedPackage, prefilledIdentType, prefilledIdentValue }: GetReportFormProps) {
  const { selectedCountry, setSelectedCountry } = useCountry()
  const [vehicleIdType, setVehicleIdType] = useState<'vin' | 'plate'>('vin')
  const [vehicleType, setVehicleType] = useState('')
  const [vinNumber, setVinNumber] = useState('')
  const [plateNumber, setPlateNumber] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [selectedPackage, setSelectedPackage] = useState(preselectedPackage || '')
  const [selectedCountryCode, setSelectedCountryCode] = useState(selectedCountry?.code || 'US')
  const [countryFilter, setCountryFilter] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Pre-fill package
  useEffect(() => { if (preselectedPackage) setSelectedPackage(preselectedPackage) }, [preselectedPackage])
  useEffect(() => { if (prefilledIdentType && prefilledIdentValue) { setVehicleIdType(prefilledIdentType); prefilledIdentType === 'vin' ? setVinNumber(prefilledIdentValue.toUpperCase()) : setPlateNumber(prefilledIdentValue.toUpperCase()) } }, [prefilledIdentType, prefilledIdentValue])
  useEffect(() => { if (selectedCountry && selectedCountry.code !== selectedCountryCode) setSelectedCountryCode(selectedCountry.code) }, [selectedCountry])

  const validateForm = () => {
    setError('')
    if (!customerName.trim()) return setError('Enter full name'), false
    if (!customerPhone.trim()) return setError('Enter phone number'), false
    const usPhoneRegex = /^\+?1?[-\.\s]?(?:\(\d{3}\)|\d{3})[-\.\s]?\d{3}[-\.\s]?\d{4}$/
    if (!usPhoneRegex.test(customerPhone.trim())) return setError('Enter a valid US phone number'), false
    if (!vehicleType) return setError('Select vehicle type'), false
    if (vehicleIdType === 'vin' && !vinNumber) return setError('Enter VIN'), false
    if (vehicleIdType === 'plate' && !plateNumber) return setError('Enter plate number'), false
    if (!customerEmail) return setError('Enter email'), false
    if (!selectedPackage) return setError('Select a package'), false
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)

    try {
      const requestBody = {
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
        vehicle_type: vehicleType,
        vin_number: vehicleIdType === 'vin' ? vinNumber : null,
        identification_type: vehicleIdType,
        identification_value: vehicleIdType === 'vin' ? vinNumber : plateNumber,
        package_type: selectedPackage,
        country_code: selectedCountryCode,
        currency: selectedCountry.currency,
        amount: getPrice(selectedPackage as any, selectedCountry.currency),
      }

      const res = await fetch('/api/orders/create', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(requestBody) })
      const data = await res.json()
      if (!res.ok || !data.orderId) throw new Error(data.error || 'Order creation failed')

      console.log('Order created:', { orderId: data.orderId, orderNumber: data.orderNumber })
      const redirectUrl = packageRedirectUrls[selectedPackage]
      onClose()

      if (redirectUrl) {
        window.location.assign(redirectUrl)
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to submit order. Please try again.'
      setError(errorMessage)
      console.error('❌ Error in handleSubmit:', errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-[9998]" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 z-[9999] rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-green-500/30">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400">
              Get Vehicle Report
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="block text-sm font-semibold text-gray-100 mb-2">
                Search By
              </Label>
              <div className="mb-2">
                <div className="inline-flex items-center bg-gray-800 rounded-full p-1 gap-1 border border-green-500/20">
                  <button
                    type="button"
                    onClick={() => setVehicleIdType('vin')}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all ${
                      vehicleIdType === 'vin'
                        ? 'bg-green-600 text-white shadow'
                        : 'text-gray-300 hover:bg-gray-700/80'
                    }`}
                  >
                    <Key className="w-4 h-4" />
                    <span className="text-sm font-medium">By VIN</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setVehicleIdType('plate')}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all ${
                      vehicleIdType === 'plate'
                        ? 'bg-green-600 text-white shadow'
                        : 'text-gray-300 hover:bg-gray-700/80'
                    }`}
                  >
                    <Hash className="w-4 h-4" />
                    <span className="text-sm font-medium">By Plate</span>
                  </button>
                </div>
              </div>
            </div>

            {vehicleIdType === 'vin' ? (
              <div>
                <Label htmlFor="vin" className="block text-sm font-semibold text-gray-100 mb-2">
                  VIN Number
                </Label>
                <div className="relative">
                  <Input
                    id="vin"
                    type="text"
                    value={vinNumber}
                    onChange={(e) => setVinNumber(e.target.value.toUpperCase())}
                    placeholder="Enter VIN number"
                    required
                    className="h-12 pr-10 bg-gray-800 border-green-500/30 text-white placeholder-gray-500"
                    maxLength={17}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-400"
                  >
                    <HelpCircle className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Enter your 17-character Vehicle Identification Number
                </p>
              </div>
            ) : (
              <div>
                <Label
                  htmlFor="plate"
                  className="block text-sm font-semibold text-gray-100 mb-2"
                >
                  Plate Number
                </Label>
                <Input
                  id="plate"
                  type="text"
                  value={plateNumber}
                  onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
                  placeholder="Enter Plate Number"
                  required
                  className="h-12 bg-gray-800 border-green-500/30 text-white placeholder-gray-500"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Enter your vehicle&apos;s license plate number
                </p>
              </div>
            )}

            <div>
              <Label htmlFor="vehicleType" className="block text-sm font-semibold text-gray-100 mb-2">
                Vehicle Type
              </Label>
              <Select value={vehicleType} onValueChange={setVehicleType}>
                <SelectTrigger className="h-12 bg-gray-800 border-green-500/30 text-white">
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent className="z-[10000] bg-gray-800 border-green-500/30">
                  {vehicleTypes.map((type) => (
                    <SelectItem key={type} value={type} className="text-white">
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="name" className="block text-sm font-semibold text-gray-100 mb-2">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="John Doe"
                required
                className="h-12 bg-gray-800 border-green-500/30 text-white placeholder-gray-500"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="block text-sm font-semibold text-gray-100 mb-2">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="+1 (555) 555-5555"
                required
                className="h-12 bg-gray-800 border-green-500/30 text-white placeholder-gray-500"
              />
              {/* <p className="text-xs text-gray-400 mt-1">Enter US format: +1 (555) 555-5555</p> */}
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm font-semibold text-gray-100 mb-2">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="h-12 bg-gray-800 border-green-500/30 text-white placeholder-gray-500"
              />
            </div>

          
            {error && (
              <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-lg">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 h-12 bg-gray-800 border-green-500/30 text-gray-100 hover:bg-gray-700"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 h-12 bg-green-600 hover:bg-green-700 text-white"
                disabled={isSubmitting || !selectedPackage}
              >
                {isSubmitting
                  ? 'Processing...'
                  : `Submit Order - ${
                      selectedPackage
                        ? formatCurrency(
                            getPrice(selectedPackage as any, 'USD'),
                            'USD'
                          )
                        : '$0'
                    }`}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
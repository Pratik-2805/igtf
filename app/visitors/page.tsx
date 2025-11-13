'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { ChatBot } from '@/components/chat-bot'
import { CheckCircle2 } from 'lucide-react'

interface VisitorFormData {
  first_name: string
  last_name: string
  company_name: string
  email_address: string
  phone_number: string
  industry_interest: string
}

// ✅ Use the same backend URL pattern as your working exhibitor API
const API_URL = 'http://127.0.0.1:8000/api/visitor-registrations/'

export default function VisitorsPage() {
  const [formData, setFormData] = useState<VisitorFormData>({
    first_name: '',
    last_name: '',
    company_name: '',
    email_address: '',
    phone_number: '',
    industry_interest: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  // auto-dismiss success messages after 3 seconds
  useEffect(() => {
    if (message?.type === 'success') {
      const t = setTimeout(() => setMessage(null), 3000)
      return () => clearTimeout(t)
    }
  }, [message])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // ✅ No CSRF token or auth — same as Exhibitor
        body: JSON.stringify(formData),
        mode: 'cors', // ✅ ensures CORS request
      })

      if (response.ok) {
        setMessage({
          type: 'success',
          text: 'Registration submitted successfully! We will contact you soon.',
        })
        setFormData({
          first_name: '',
          last_name: '',
          company_name: '',
          email_address: '',
          phone_number: '',
          industry_interest: '',
        })
      } else {
        const data = await response.json()
        const errorMsg = Object.values(data).flat().join(', ')
        setMessage({ type: 'error', text: `Error: ${errorMsg}` })
      }
    } catch (error) {
      console.error('Error submitting visitor form:', error)
      setMessage({
        type: 'error',
        text: 'Failed to submit registration. Please ensure the backend is running.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Visit IGTF</h1>
            <p className="text-xl text-muted-foreground">
              Register now for exclusive access to India&apos;s premier B2B trade fair
            </p>
          </div>
        </section>

        {/* Registration Form */}
        <section id="visitor-registration" className="py-20 px-4 bg-background">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Register as Visitor</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below to register for the Indo Global Trade Fair
              </p>
            </div>

            {message && (
              <div
                className={`mb-6 p-4 rounded-lg border ${
                  message.type === 'success'
                    ? 'bg-green-50 border-green-200 text-green-800'
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}
              >
                <p className="font-medium">{message.text}</p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="bg-muted/30 p-8 rounded-lg shadow-xl space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter first name"
                  />
                </div>

                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-md"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company_name" className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter company name"
                />
              </div>

              <div>
                <label htmlFor="email_address" className="block text-sm font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email_address"
                  name="email_address"
                  value={formData.email_address}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label htmlFor="phone_number" className="block text-sm font-medium mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label htmlFor="industry_interest" className="block text-sm font-medium mb-2">
                  Industry Interest <span className="text-red-500">*</span>
                </label>
                <select
                  id="industry_interest"
                  name="industry_interest"
                  value={formData.industry_interest}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md"
                >
                  <option value="">Select an industry</option>
                  <option value="Hardware & Tools">Hardware & Tools</option>
                  <option value="Toys">Toys</option>
                  <option value="Chemical">Chemical</option>
                  <option value="Electronics & Components">Electronics & Components</option>
                  <option value="Auto Parts">Auto Parts</option>
                  <option value="Construction Material">Construction Material</option>
                  <option value="Food & Beverage">Food & Beverage</option>
                  <option value="Pharma">Pharma</option>
                  <option value="Surgical Devices">Surgical Devices</option>
                  <option value="Furniture">Furniture</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-md font-medium text-white ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 transition'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            </form>
          </div>
        </section>
      </div>
      <ChatBot />
    </div>
  )
}

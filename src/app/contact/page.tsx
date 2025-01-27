'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="pt-24">
      {/* Contact Form Section */}
      <section className="py-16 bg-[#FFF5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Get in touch with us for your catering needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#EE3124] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-[#1A1A1A]">Our Location</h3>
                    <p className="text-gray-600">
                      123 Main Street, Sector 17,<br />
                      Chandigarh, 160017
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#EE3124] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-[#1A1A1A]">Phone Number</h3>
                    <p className="text-gray-600">+91 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#EE3124] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-[#1A1A1A]">Email Address</h3>
                    <p className="text-gray-600">info@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#EE3124] focus:border-[#EE3124]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#EE3124] focus:border-[#EE3124]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#EE3124] focus:border-[#EE3124]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#EE3124] focus:border-[#EE3124]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#EE3124] text-white px-6 py-3 rounded-md hover:bg-[#d62b1f] transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.451808588791!2d76.79855887638463!3d30.705696474597403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fecea27086f09%3A0x947c146c0695123!2sNexus%20Elante%20Mall!5e0!3m2!1sen!2sin!4v1737885678191!5m2!1sen!2sin'
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </section>
    </div>
  )
} 
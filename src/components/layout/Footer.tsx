'use client'

import Link from 'next/link'
import { 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter 
} from 'lucide-react'

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
]

const services = [
  { name: 'Intimate Gatherings', href: '/services#intimate' },
  { name: 'Wedding Events', href: '/services#wedding' },
  { name: 'Corporate Events', href: '/services#corporate' },
  { name: 'Media Events', href: '/services#media' },
]

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              We are Chandigarh&apos;s premier catering service, dedicated to creating 
              unforgettable culinary experiences for all your special occasions.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-[#EE3124]">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#EE3124]">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#EE3124]">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-[#EE3124] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-[#EE3124] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EE3124] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Main Street, Sector 17,
                  Chandigarh, 160017
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#EE3124]" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-[#EE3124]">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#EE3124]" />
                <a href="mailto:info@example.com" className="text-gray-300 hover:text-[#EE3124]">
                  info@example.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#EE3124] flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>Mon - Sat: 9:00 AM - 10:00 PM</p>
                  <p>Sunday: 10:00 AM - 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
          <p>© {currentYear} Chandigarh Catering Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 
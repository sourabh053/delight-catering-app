'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showTopBar, setShowTopBar] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {      
      if (window.scrollY > lastScrollY) {
        setShowTopBar(false)
      } else if (window.scrollY < lastScrollY) {
        setShowTopBar(true)
      }
      lastScrollY = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Function to handle link clicks
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      <div 
        className={`bg-[#1A1A1A] text-white transition-all duration-300 ${
          showTopBar ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#EE3124]" />
                <span>Mon - Sat: 9:00 AM - 10:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#EE3124]" />
                <a href="tel:+911234567890" className="hover:text-[#EE3124] transition-colors">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#EE3124]" />
                <a href="mailto:info@example.com" className="hover:text-[#EE3124] transition-colors">
                  info@example.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-[#EE3124] transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-[#EE3124] transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-[#EE3124] transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div 
        className={`bg-white shadow-sm transition-transform duration-300 ${
          showTopBar ? '' : 'transform -translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="text-2xl font-bold text-[#1A1A1A]"
                onClick={handleLinkClick}
              >
                Delight Catering Service
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#1A1A1A] hover:text-[#EE3124] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <button className="bg-[#EE3124] text-white px-6 py-2 rounded-md hover:bg-[#d62b1f] transition-colors">
                Work Together
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} color='#1A1A1A' /> : <Menu size={24} color='#1A1A1A' />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-[#1A1A1A] hover:text-[#EE3124] transition-colors"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </Link>
                ))}
                <button 
                  className="w-full mt-4 bg-[#EE3124] text-white px-6 py-2 rounded-md hover:bg-[#d62b1f] transition-colors"
                  onClick={handleLinkClick}
                >
                  Work Together
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
} 
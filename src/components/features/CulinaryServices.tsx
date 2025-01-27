'use client'

import Image from 'next/image'
import { Users, HandPlatter, Printer } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    id: 1,
    title: 'Intimate Gathering',
    description: 'Perfect for small, cozy celebrations with your loved ones. Our catering service adds a touch of elegance and warmth to create memorable moments for your intimate occasions.',
    icon: HandPlatter,
    image: 'https://media.istockphoto.com/id/911978254/photo/businesspeople-having-meeting-in-a-restaurant.jpg?s=612x612&w=0&k=20&c=WtVaFPnbwLATBtSS3FxnZTFaIEE0nNJ_0b4orOdf0bo=',
    cta: 'View service',
    href: '/about'
  },
  {
    id: 2,
    title: 'Wedding Events',
    description: 'Celebrate your big day with a feast to remember! We provide bespoke catering solutions tailored to your dream wedding, ensuring every detail is flawless.',
    icon: Users,
    image: 'https://media.istockphoto.com/id/1415056757/photo/colorful-wedding-tents-at-night.jpg?s=612x612&w=0&k=20&c=tJ5NgHKJQs1gJuHTEpd1Uv6peTVxGs5puZUm9zpwT64=',
    cta: 'View service',
    href: '/services'
  },
  {
    id: 3,
    title: 'Corporate Events',
    description: 'Elevate your business meetings, conferences, or office parties with our professional catering services, designed to impress and leave a lasting impression.',
    icon: Printer,
    image: 'https://media.istockphoto.com/id/1486287149/photo/group-of-multiracial-asian-business-participants-casual-chat-after-successful-conference-event.jpg?s=612x612&w=0&k=20&c=aWW3omXKHjxBkd58NouVo8GsapvA2KXO9RwuokHhvFk=',
    cta: 'View service',
    href: '/services'
  }
]

export default function CulinaryServices() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover what makes our catering service unique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFF5F5] mb-4">
                  <feature.icon className="w-6 h-6 text-[#EE3124]" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-[#1A1A1A]">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-4">
                  {feature.description}
                </p>
                
                <Link 
                  href={feature.href}
                  className="inline-flex items-center text-[#EE3124] font-medium hover:text-[#d62b1f] transition-colors"
                >
                  {feature.cta}
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
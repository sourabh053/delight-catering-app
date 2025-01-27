import Image from "next/image";
import { ArrowRight } from 'lucide-react'
import CulinaryServices from '@/components/features/CulinaryServices'
import GalleryShowcase from '@/components/features/GalleryShowcase'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/id/42/1920/1080"
            alt="Catering Service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Chandigarh&apos;s #1 Catering Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Where Every Detail is a Masterpiece
          </p>
          <Link href="/services">
            <button className="bg-[#EE3124] text-white px-8 py-3 rounded-md hover:bg-[#d62b1f] transition-colors inline-flex items-center gap-2">
              Explore All Services
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      {/* Culinary Services Section */}
      <CulinaryServices />
      
      {/* Gallery Showcase */}
      <GalleryShowcase />

    </div>
  );
}

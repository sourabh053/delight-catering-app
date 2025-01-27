'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

const galleryImages = [
  // Previous 4 images plus more
  {
    id: 1,
    src: "https://media.istockphoto.com/id/961798406/photo/stylish-champagne-glasses-and-food-appetizers-on-table-at-wedding-reception-luxury-catering-at.jpg?s=612x612&w=0&k=20&c=frEzhVL_VIJDedjN81w2Oj8L6Lj_JG3QhAvDiORCdEU=",
    alt: "Wedding Catering",
     category: "Wedding"
  },
  {
    id: 2,
    src: "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=MOm3sfIfL22URV6juSCxpA3yfr4O63yJUV5vitufR7Y=",
    alt: "Indian Thali",
     category: "Food"
  },
  {
    id: 3,
    src: "https://media.istockphoto.com/id/1340253645/photo/shot-of-an-elegantly-decorated-table-at-a-wedding-reception.jpg?s=612x612&w=0&k=20&c=s88Ri4ao96yKO0XwC6uMPtxxV0PK-iteiRuF3D3ZfDY=",
    alt: "Buffet Setup",
     category: "Corporate"
  },
  {
    id: 4,
    src: "https://media.istockphoto.com/id/2191209244/photo/authentic-maharashtrian-cuisine-delicious-mutton-curry-that-many-locals-love-maharashtra-india.jpg?s=612x612&w=0&k=20&c=Fx1Cp-tST8-wzLfizFKTycAm_55tc9xtQ8jBy6AH504=",
    alt: "Special Thali",
     category: "Food"
  },
  {
    id: 5,
    src: "https://media.istockphoto.com/id/1482843873/photo/close-up-on-hands-of-a-crowd-of-people-clapping-in-dark-conference-hall-during-a-motivational.jpg?s=612x612&w=0&k=20&c=l82b7EN4ml1NOIHsTMrQtEO6FpJbOE5ZbimEG1aeGM0=",
    alt: "Media Events",
    category: "Media"
  },
  {
    id: 6,
    src: "https://media.istockphoto.com/id/1160643624/photo/installation-of-professional-sound-light-video-and-stage-equipment-for-a-concert-backstage.jpg?s=612x612&w=0&k=20&c=Vdn-HdXwJG-KRUljyrKgjMMTMKRBMDA5K7xthrwYBFA=",
    alt: "Event Setup",
    category: "Corporate"
  },
  {
    id: 7,
    src: "https://media.istockphoto.com/id/1184628725/photo/3d-wedding-reception-background-illustration.jpg?s=612x612&w=0&k=20&c=XpFfBNDKM99vaK0N0QkvkvDFNRWIRmJNTkP6qDJbSI8=",
    alt: "Wedding Setup",
    category: "Wedding"
  },
  {
    id: 8,
    src: "https://media.istockphoto.com/id/665776314/photo/wedding-dinner-by-the-sea-wedding-banquet-at-the-sea-donja-las.jpg?s=612x612&w=0&k=20&c=Et1oiTNujeR-b6nkVkfAWoroLy9XUry7amh03Q3nZ-M=",
    alt: "Buffet Display",
    category: "Wedding"
  }
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#1A1A1A]">Our Gallery</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="relative w-full max-w-4xl aspect-square">
            <Image
              src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
              alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
} 
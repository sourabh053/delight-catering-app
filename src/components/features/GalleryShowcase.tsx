"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://media.istockphoto.com/id/961798406/photo/stylish-champagne-glasses-and-food-appetizers-on-table-at-wedding-reception-luxury-catering-at.jpg?s=612x612&w=0&k=20&c=frEzhVL_VIJDedjN81w2Oj8L6Lj_JG3QhAvDiORCdEU=",
    alt: "Wedding Catering",
  },
  {
    id: 2,
    src: "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=MOm3sfIfL22URV6juSCxpA3yfr4O63yJUV5vitufR7Y=",
    alt: "Indian Thali",
  },
  {
    id: 3,
    src: "https://media.istockphoto.com/id/1340253645/photo/shot-of-an-elegantly-decorated-table-at-a-wedding-reception.jpg?s=612x612&w=0&k=20&c=s88Ri4ao96yKO0XwC6uMPtxxV0PK-iteiRuF3D3ZfDY=",
    alt: "Buffet Setup",
  },
  {
    id: 4,
    src: "https://media.istockphoto.com/id/2191209244/photo/authentic-maharashtrian-cuisine-delicious-mutton-curry-that-many-locals-love-maharashtra-india.jpg?s=612x612&w=0&k=20&c=Fx1Cp-tST8-wzLfizFKTycAm_55tc9xtQ8jBy6AH504=",
    alt: "Special Thali",
  },
];

export default function GalleryShowcase() {
  return (
    <section className="py-16 bg-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Our Gallery
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A glimpse of our culinary masterpieces and event setups
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/gallery">
            <button className="bg-[#EE3124] text-white px-8 py-3 rounded-md hover:bg-[#d62b1f] transition-colors inline-flex items-center gap-2">
              View More
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

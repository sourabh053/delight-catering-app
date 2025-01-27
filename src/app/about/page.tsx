import Image from "next/image";
import { Check } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Sunny Sohal",
      role: "Executive Chef",
      image: "https://media.istockphoto.com/id/1054862736/photo/waiter-carrying-plates-with-meat-dish.jpg?s=612x612&w=0&k=20&c=sAPvulfoGCwWvH26kd3dh7WtfMSnYdEB2eqNu3hSMt4=",
    },
    {
      id: 2,
      name: "Harman Sohal",
      role: "Operations Director",
      image: "https://picsum.photos/id/1002/400/400",
    },
    {
      id: 3,
      name: "Lakhvir Chauhan",
      role: "Events Manager",
      image: "https://media.istockphoto.com/id/650655146/photo/catering-food-wedding-event-table.jpg?s=612x612&w=0&k=20&c=ATGYgW8bM_559jJ5aUNO4HlJqpkOWUmNNMMflx5kajo=",
    },
  ];

  const reasons = [
    {
      id: 1,
      title: "Unparalleled Quality",
      description: "We source only the freshest ingredients and deliver top-tier services that exceed expectations.",
    },
    {
      id: 2,
      title: "Customized Services",
      description: "From menu planning to décor, every aspect is tailored to reflect your vision.",
    },
    {
      id: 3,
      title: "Experienced Team",
      description: "Our team of professionals brings years of expertise in catering and wedding planning, ensuring your event is in the best hands.",
    },
    {
      id: 4,
      title: "Attention to Detail",
      description: "We take pride in flawless execution, so you can relax and enjoy your celebration.",
    },
    {
      id: 5,
      title: "Local Expertise",
      description: "Being rooted in Chandigarh, we understand the cultural nuances and preferences that make your events unique.",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-[#1A1A1A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            At Delight Catering, our journey began with a passion for creating
            unforgettable experiences. Based in the vibrant city of Chandigarh,
            we specialize in delivering exceptional catering services and
            curating dream weddings. What started as a humble venture has now
            blossomed into a trusted name in the industry, known for blending
            creativity, tradition, and meticulous attention to detail. From
            intimate gatherings to grand celebrations, we've been part of
            countless cherished moments, turning visions into reality with love
            and dedication.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-[#FFF5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-4 text-[#1A1A1A]">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700">
              Our mission is simple: to craft experiences that linger in hearts
              forever. We aim to elevate every event with our expertise in
              catering and wedding planning by providing personalized services,
              innovative ideas, and unmatched quality. We are committed to
              making your special occasions seamless, memorable, and truly
              magical, ensuring every moment is as unique as you are.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1A1A1A]">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="flex gap-4 p-6 bg-[#FFF5F5] rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#EE3124] flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1A1A1A]">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

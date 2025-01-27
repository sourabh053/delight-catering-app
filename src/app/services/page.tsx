import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Intimate Gathering",
      description:
        "Perfect for small, cozy celebrations with your loved ones. Our catering service adds a touch of elegance and warmth to create memorable moments for your intimate occasions.",
      image:
        "https://media.istockphoto.com/id/911978254/photo/businesspeople-having-meeting-in-a-restaurant.jpg?s=612x612&w=0&k=20&c=WtVaFPnbwLATBtSS3FxnZTFaIEE0nNJ_0b4orOdf0bo=",
    },
    {
      id: 2,
      title: "Wedding Events",
      description:
        "Celebrate your big day with a feast to remember! We provide bespoke catering solutions tailored to your dream wedding, ensuring every detail is flawless.",
      image:
        "https://media.istockphoto.com/id/1415056757/photo/colorful-wedding-tents-at-night.jpg?s=612x612&w=0&k=20&c=tJ5NgHKJQs1gJuHTEpd1Uv6peTVxGs5puZUm9zpwT64=",
    },
    {
      id: 3,
      title: "Corporate Events",
      description:
        "Elevate your business meetings, conferences, or office parties with our professional catering services, designed to impress and leave a lasting impression.",
      image:
        "https://media.istockphoto.com/id/1486287149/photo/group-of-multiracial-asian-business-participants-casual-chat-after-successful-conference-event.jpg?s=612x612&w=0&k=20&c=aWW3omXKHjxBkd58NouVo8GsapvA2KXO9RwuokHhvFk=",
    },
    {
      id: 4,
      title: "Media Events",
      description:
        "From press launches to film shoots, we deliver top-notch catering that complements the glamour and energy of your media event.",
      image:
        "https://media.istockphoto.com/id/1482844702/photo/crowd-of-smart-tech-people-applauding-in-dark-conference-hall-during-a-motivational-keynote.jpg?s=612x612&w=0&k=20&c=MT4NoWUMEWyUpY5kZhknLMrguapPvYgOjrY8ggqcwWg=",
    },
  ];

  return (
    <div className="pt-24">
      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[#1A1A1A]">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-[#EE3124] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#FFF5F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#1A1A1A]">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Basic", "Premium", "Luxury"].map((plan) => (
              <div key={plan} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-[#1A1A1A]">{plan}</h3>
                <p className="text-gray-600 mb-6">Starting from</p>
                <p className="text-3xl font-bold mb-6 text-[#1A1A1A]">
                  €{plan === "Basic" ? "29" : plan === "Premium" ? "49" : "79"}
                </p>
                <button className="w-full bg-[#EE3124] text-white px-6 py-2 rounded-md hover:bg-[#d62b1f] transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

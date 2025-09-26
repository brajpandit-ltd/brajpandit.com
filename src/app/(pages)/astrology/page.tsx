"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common";
const astrologyServices = [
  {
    id: 1,
    title: "Career & Finance Guidance",
    description:
      "Get clarity on your career growth, job opportunities, and financial stability.",
    image: "/assets/astrology/astro_Car.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Love & Marriage Predictions",
    description:
      "Know about your love life, marriage compatibility, and relationship path.",
    image: "/assets/astrology/family.png",
    link: "#",
  },
  {
    id: 3,
    title: "Health Astrology",
    description:
      "Understand planetary influences on your health and remedies for well-being.",
    image: "/assets/astrology/health.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Numerology & Palmistry",
    description:
      "Discover your destiny through numbers, palm lines, and tarot readings.",
    image: "/assets/astrology/astro1.png",
    link: "#",
  },
  {
    id: 4,
    title: "Girlfriend Numerology & Palmistry",
    description:
      "Discover your destiny through numbers, palm lines, and tarot readings.",
    image: "/assets/astrology/relatio_astro.jpg",
    link: "#",
  },
];

export default function AstrologyPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section with Full Background Image */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] flex items-center justify-center text-center text-white">

        


        {/* Background Image */}
        <Image
          src="/assets/astrology/astro1.jpg"
          alt="Astrology"
          fill
          className="object-cover opacity-100"
          priority
        /> 

        


        {/* Content */}
        <div className="relative z-10 px-4 sm:px-8 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-snug md:leading-tight">
            <span className="text-white">
              
              Astrology</span>{" "}
            <span className="text-primary"></span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white-800">
           
          </p>
         <div className="mt-6 flex justify-center">
          <Link href="/pandits" className="mt-15">
  <Button 
    label="Book a Consultation" 
    variant="primary" 
  />
  </Link>
</div>

        </div>
      </section>

      {/* Astrology Services */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Our Astrology Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {astrologyServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#fff5dc] rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="mt-auto inline-block bg-primary hover:bg-red-700 text-white text-xs sm:text-sm px-4 py-2 rounded-full shadow transition"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

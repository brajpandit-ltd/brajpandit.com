"use client";

import Image from "next/image";
import Link from "next/link";


const astrologyServices = [
  {
    id: 1,
    title: "Career & Finance Guidance",
    description:
      "Get clarity on your career growth, job opportunities, and financial stability.",
    image: "/assets/astrology/astro1.png",
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
    image: "/assets/astrology/family.png",
    link: "#",
  },
  {
    id: 4,
    title: "Numerology & Palmistry",
    description:
      "Discover your destiny through numbers, palm lines, and tarot readings.",
    image: "/assets/astrology/family.png",
    link: "#",
  },
];

export default function AstrologyPage() {
  return (
    <>
      

      <main className="w-full overflow-hidden">
        {/* Hero Section */}
        <section className="bg-[#fff5dc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Left */}
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug md:leading-tight text-gray-900">
                Explore the <span className="text-red-600">Science of Astrology</span>
              </h1>
              <p className="text-gray-700 text-base sm:text-lg max-w-lg mx-auto md:mx-0">
                Astrology helps you align with the cosmic energies and find answers
                about love, career, health, and spiritual growth.
              </p>
              <div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transition">
                  Book a Consultation
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/assets/pujas/kundali.png"
                alt="Astrology"
                width={450}
                height={450}
                className="object-contain w-64 sm:w-80 md:w-[400px] lg:w-[500px] h-auto"
              />
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
                    className="mt-auto inline-block bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm px-4 py-2 rounded-full shadow transition"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

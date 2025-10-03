"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common";
import AstrologyService from "./AstrologyService";

export interface IAstrologyService {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const astrologyServices: IAstrologyService[] = [
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
    id: 5,
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
      {/* Hero Section with Full Background Video */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen flex items-center justify-center text-center text-white overflow-hidden">
  {/* Background Video */}
  <video
    src="/assets/astrology/astro_video.mp4"
    className="absolute top-0 left-0  w-full h-full object-cover"
    autoPlay
    muted
    loop
  />

  {/* Overlay Content */}
  <div className="relative z-10 px-4 sm:px-8 max-w-3xl">
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-snug md:leading-tight">
      <span className="text-white">Astrology</span>
    </h1>
    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-100">
      Discover insights about your career, health, love, and future with our expert astrologers.
    </p>
    <div className="mt-6 flex justify-center">
      <Link href="/pandits">
        <Button label="Book a Consultation" variant="primary" />
      </Link>
    </div>
  </div>
</section>


      {/* Astrology Services Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Our Astrology Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {astrologyServices.map((service) => (
              <AstrologyService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

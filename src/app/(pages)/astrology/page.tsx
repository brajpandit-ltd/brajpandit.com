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
      {/* ✅ Responsive Hero Video Section */}
      <section className="relative w-full h-[40vh] sm:h-[60vh] lg:h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Video */}
        <video
  src="/assets/videos/old_astro_video.mp4"
  className="absolute top-0 left-0 w-full h-full object-cover"
 
  autoPlay
  muted
  loop
  playsInline
/>






        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 px-4 sm:px-8 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-snug md:leading-tight">
            Astrology
          </h1>
          <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-100">
            Discover insights about your career, health, love, and future with
            our expert astrologers.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="/pandits">
              <Button label="Book a Consultation" variant="primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Astrology Services Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Our Astrology Services
          </h2>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {astrologyServices.map((service) => (
              <AstrologyService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

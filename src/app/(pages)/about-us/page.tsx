"use client";

import Image from "next/image";
import { C2APrefooter } from "@/components/layout";
import GoogleAd1 from "@/components/google-ads/GoogleAds1";

const teamMembers = [
  {
    id: 1,
    name: "Arjun Singh",
    role: "Senior Adviser & developer",
    image: "/assets/team/arjun_singh.jpeg",
  },
  {
    id: 2,
    name: "Lalit Kumar",
    role: "UI Designer",
    image: "/assets/team/lalit.jpg",
  },
  {
    id: 3,
    name: "Jay Thakur",
    role: "Developer",
    image: "/assets/team/jay.jpg",
  },
  {
    id: 4,
    name: "Krishna Chaudhary",
    role: "Digital marketing",
    image: "/assets/team/krishna_chaudhary.jpeg",
  },
];

export default function AboutUsPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Video Section */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[90vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <video
          src="/assets/videos/geeta_video.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-4 sm:px-8 max-w-3xl text-white">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-snug md:leading-tight">
            <span className="text-primary"></span>
          </h1>
          <p className="mt-4 text-sm sm:text-lg md:text-xl"></p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white border border-primary/20 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                To simplify access to Vedic rituals, pujas, and astrological
                consultations, ensuring authenticity while making it available
                online for everyone across the globe.
              </p>
            </div>
            <div className="bg-white border border-primary/20 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Our Vision
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                To become the most trusted spiritual platform, helping millions
                reconnect with their roots and divine traditions with ease and
                transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GoogleAd1 slot="7350714271" />

      {/* Our Story */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Our Story
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Braj Pandit was founded with the vision of reviving the sacred
            traditions of Vedic culture. From Mathura to Delhi NCR, we have
            served thousands of devotees by performing authentic pujas,
            providing astrology guidance, and supporting temple communities.
          </p>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="bg-white py-16 sm:py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white border border-primary/20 rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center"
              >
                <div className="relative w-28 h-28 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center rounded-full border-4 border-primary/30"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleAd1 slot="7350714271" />

      {/* Call to Action */}
      <C2APrefooter />
    </main>
  );
}

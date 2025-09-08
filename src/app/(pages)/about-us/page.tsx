"use client";

import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "xxxxxxxxxxx",
    role: "Founder & Developer",
    image: "/assets/team/lalit.jpg",
  },
  {
    id: 2,
    name: "xxxxxx",
    role: "Founder & Media",
    image: "/assets/team/lalit.jpg",
  },
  {
    id: 3,
    name: "xxxxxxxx",
    role: "Senior Adviser",
    image: "/assets/team/lalit.jpg",
  },
  {
    id: 4,
    name: "xxxxxxx",
    role: "Co-founder & Developer",
    image: "/assets/team/lalit.jpg",
  },
  {
    id: 5,
    name: "Virendra Singh Rajput",
    role: "Co-founder",
    image: "/assets/team/lalit.jpg",
  },
];

export default function AboutUsPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#fff5dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              About <span className="text-red-600">Braj Pandit</span>
            </h1>
            <p className="text-gray-700 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
              We are dedicated to bringing authentic Vedic rituals, astrology,
              and spiritual guidance to devotees worldwide. Our mission is to
              connect people with divine traditions in a modern way.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/assets/adaptive-icon.png"
              alt="Lord Krishna - Braj"
              width={450}
              height={450}
              className="object-contain w-72 sm:w-80 md:w-[420px] h-auto rounded-xl shadow"
            />
          </div>
        </div>
      </section>

      {/* Sacred Image Section */}
      <section className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[550px]">
        <Image
          src="/assets/premmandir.png" 
          alt="Vrindavan Temple - Symbol of Devotion"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl leading-snug">
            “In the Land of Braj, every corner resonates with the divine flute
            of Lord Krishna.”
          </h2>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#fff5dc] p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                To simplify access to Vedic rituals, pujas, and astrological
                consultations, ensuring authenticity while making it available
                online for everyone across the globe.
              </p>
            </div>
            <div className="bg-[#fff5dc] p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
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

      {/* Our Story */}
      <section className="bg-[#fff5dc] py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Our Story
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Braj Pandit was founded with the goal of reviving the sacred
            traditions of Vedic culture. From Mathura to Delhi NCR, we have
            served thousands of devotees by performing authentic pujas,
            providing astrology guidance, and supporting temple communities.
          </p>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-[#fff5dc] rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
              >
                <div className="relative w-28 h-28 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center rounded-full border-4 border-red-200"
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

      {/* Call to Action */}
      <section className="bg-red-600 text-white py-12 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Want to Connect With Us?
          </h2>
          <p className="text-base sm:text-lg">
            Whether you want to book a puja, get astrology guidance, or know
            more about our services, we are here to help.
          </p>
          <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}

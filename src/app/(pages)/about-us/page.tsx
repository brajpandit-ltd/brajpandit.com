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
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              About <span className="text-primary">Braj Pandit</span>
            </h1>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              We are dedicated to bringing authentic Vedic rituals, astrology,
              and spiritual guidance to devotees worldwide. Our mission is to
              connect people with divine traditions in a modern, accessible, and
              transparent way.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/assets/radhak.jpg"
              alt="Lord Krishna - Braj"
              width={480}
              height={480}
              className="object-contain w-72 sm:w-80 md:w-[420px] h-auto rounded-xl shadow-lg"
              priority
            />
          </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

      {/* Call to Action */}
      <section className="bg-primary text-white py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Want to Connect With Us?
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            Whether you want to book a puja, get astrology guidance, or know
            more about our services, we are here to help you.
          </p>
          <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}

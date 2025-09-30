"use client";

import Image from "next/image";
import { Button } from "@/components/common";
import { Testimonials } from "@/components/layout";

export default function PanditBookingPage() {
  return (
    <>
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center text-center">
        <Image
          src="/assets/pandits/services-hero.jpg"
          alt="Pandit Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-3xl sm:text-5xl md:text-6xl font-bold text-white">
          Book Your Pandit
        </h1>
      </section>

      {/* Booking Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Booking Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Book Your Pandit</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Date of Pooja
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Time of Pooja
                </label>
                <input
                  type="time"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Address
                </label>
                <textarea
                  placeholder="Enter your address"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                />
              </div>
              <Button label="Submit Booking" variant="primary" className="w-full mt-4" />
            </form>
          </div>

          {/* Right: Pandit Image + Contact */}
          <div className="flex flex-col items-center">
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-lg overflow-hidden shadow-lg mb-6">
              <Image
                src="/assets/pandits/Rohini saran ji .jpg"
                alt="Pandit Ji"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+911234567890"
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold text-center hover:bg-green-700 cursor-pointer"
              >
                Call Now 📞 +91 8595009640
              </a>
              <a
                href="https://wa.me/91 8595009640"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold text-center hover:bg-green-600 cursor-pointer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <Testimonials/>
      
      
    </main>
    
  </>
  );
}

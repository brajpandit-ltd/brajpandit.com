"use client";

import Image from "next/image";
import { BrajYatraPlace } from "@/types/brajYatra";
import brajYatraJson from "@/constants/brajYatra.json";

const brajYatraData: BrajYatraPlace[] = brajYatraJson.brajYatraData;

export default function BrajYatraPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ✅ Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[90vh]">
        <Image
          src="/assets/premmandir.png"
          alt="Braj Yatra Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1
            className="
              text-3xl sm:text-4xl md:text-6xl lg:text-7xl
              font-extrabold 
              text-center px-4
              bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 
              bg-clip-text text-transparent 
              drop-shadow-2xl
              tracking-wide
            "
          >
            ✨ Braj Yatra ✨
          </h1>
        </div>
      </div>

      {/* ✅ Temple Cards Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20 space-y-10 lg:space-y-16">
        {brajYatraData.map((place) => (
          <div
            key={place.key}
            className="
              flex flex-col lg:flex-row 
              bg-white border rounded-2xl shadow-md hover:shadow-xl 
              transition-shadow duration-300 overflow-hidden
            "
          >
            {/* Image Section */}
            <div className="relative w-full h-56 sm:h-72 lg:w-1/2 lg:h-auto">
              <Image
                src={place.url}
                alt={place.Name}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-10 w-full lg:w-1/2">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-gray-900">
                  {place.Name}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                  {place.description}
                </p>
              </div>

              {/* Seasonal Info */}
              <div className="text-xs sm:text-sm text-gray-700 mb-4 space-y-1">
                <p>
                  <strong>🌞 Summer:</strong> {place.summer || "N/A"}
                </p>
                <p>
                  <strong>❄️ Winter:</strong> {place.winter || "N/A"}
                </p>
              </div>

              {/* Map Link */}
              <a
                href={place.location}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-auto inline-block 
                  text-blue-600 hover:text-blue-800 
                  text-sm sm:text-base font-medium
                  transition-colors
                "
              >
                📍 View on Map
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

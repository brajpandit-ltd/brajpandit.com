"use client";

import Image from "next/image";
import { BrajYatraPlace } from "@/types/brajYatra";
import brajYatraJson from "@/constants/brajYatra.json";

const brajYatraData: BrajYatraPlace[] = brajYatraJson.brajYatraData;

export default function BrajYatraPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-screen">
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

      {/* Temple Cards List */}
      <section className="container mx-auto px-4 md:px-10 py-12 space-y-10 md:space-y-16">
        {brajYatraData.map((place) => (
          <div
            key={place.key}
            className="
              flex flex-col lg:flex-row 
              bg-white border rounded-xl shadow-md hover:shadow-2xl 
              transition-shadow duration-300 overflow-hidden
            "
          >
            {/* Temple Image */}
            <div className="relative w-full h-60 sm:h-72 lg:w-1/2 lg:h-auto">
              <Image
                src={place.url}
                alt={place.Name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col p-5 sm:p-8 lg:p-10 w-full lg:w-1/2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3">
                {place.Name}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {place.description}
              </p>
              <div className="text-xs sm:text-sm text-gray-700 mb-4 space-y-1">
                <p>
                  <strong>Summer:</strong> {place.summer || "N/A"}
                </p>
                <p>
                  <strong>Winter:</strong> {place.winter || "N/A"}
                </p>
              </div>
              <a
                href={place.location}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-auto inline-block 
                  text-blue-600 hover:text-blue-800 
                  text-sm sm:text-base font-medium
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

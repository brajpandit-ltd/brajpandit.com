"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { BrajYatraPlace } from "@/types/brajYatra";
import brajYatraJson from "@/constants/brajYatra.json";
import GoogleAd1 from "@/components/google-ads/GoogleAds1";

export default function BrajYatraPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(!isMuted);
  };

  const brajYatraData: BrajYatraPlace[] = brajYatraJson.brajYatraData;

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ⭐ FULLY RESPONSIVE VIDEO SECTION */}
      <div className="relative w-full h-[40vh] sm:h-[55vh] md:h-[65vh] lg:h-[90vh] overflow-hidden">
        <video
          ref={videoRef}
          src="/assets/videos/video2.mp4"
          className="
            absolute inset-0
            w-full h-full
            object-cover 
            object-center
          "
          autoPlay
          muted={isMuted}
          loop
          playsInline
        />

        {/* 🔊 Mute / Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-5 right-5 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>

      <GoogleAd1 slot="7350714271" />

      {/* ⭐ TEMPLE CARDS */}
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
            {/* Image */}
            <div className="relative w-full h-56 sm:h-72 lg:w-1/2 lg:h-auto">
              <Image
                src={place.url}
                alt={place.Name}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Content */}
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

      <GoogleAd1 slot="7350714271" />
    </div>
  );
}

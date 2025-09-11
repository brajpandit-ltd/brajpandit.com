"use client";

import Image from "next/image";
import { Pandit } from "@/types/pandit";

interface PanditCardProps {
  pandit: Pandit;
}

export function AllPanditCard({ pandit }: PanditCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] bg-white w-full max-w-xs sm:max-w-sm mx-auto">
      {/* Image */}
      <div className="relative w-full h-72 sm:h-68 md:h-68">
        <Image
          src={pandit.image}
          alt={pandit.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col bg-[#F685008C] w-full p-3 sm:p-4 flex-grow">
        {/* Name */}
        <h3 className="text-sm sm:text-base font-semibold text-gray-700 truncate">
          {pandit.name}
        </h3>

        {/* Specialization + Experience */}
        <div className="flex justify-between items-center mt-1">
          <p className="text-xs sm:text-sm text-gray-800 break-words flex-grow">
            {pandit.specialization}
          </p>
          <p className="text-[10px] sm:text-xs text-gray-600 ml-3 whitespace-nowrap">
            {pandit.experience}
          </p>
        </div>
      </div>
    </div>
  );
}

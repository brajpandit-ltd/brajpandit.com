"use client";

import Image from "next/image";
import { Pandit } from "@/types/pandit";

interface PanditCardProps {
  pandit: Pandit;
}

export function PanditCard({ pandit }: PanditCardProps) {
  return (
    <div
      className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-transform hover:scale-[1.02]"
      style={{
        width: "284px",
        height: "434px",
        borderRadius: "16.25px",
      }}
    >
      {/* Image */}
      <div
        className="relative"
        style={{
          width: "284px",
          height: "340px",
          borderTopLeftRadius: "16.25px",
          borderTopRightRadius: "16.25px",
          overflow: "hidden",
        }}
      >
        <Image
          src={pandit.image}
          alt={pandit.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div
        className="flex flex-col justify-between p-3 text-white"
        style={{
          width: "284.43px",
          height: "94.18px",
          borderBottomLeftRadius: "16.25px",
          borderBottomRightRadius: "16.25px",
          background: "#F685008C", 
        }}
      >
        <div>
          <h3 className="text-base font-bold">{pandit.name}</h3>
          <p className="text-sm opacity-90">{pandit.specialization}</p>
        </div>
        <p className="text-xs opacity-75">{pandit.experience}</p>
      </div>
    </div>
  );
}

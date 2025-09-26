"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";

export default function TopHeader() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className=" pb-0 w-full bg-primary text-white shadow-sm relative z-[10000]">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Left Content */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center">
          <span className="font-medium text-sm md:text-base">
            Book Online Pandit For
          </span>

          <div className="flex items-center gap-2 border border-dotted border-white rounded-full px-4 py-1 bg-white/10">
            <span className="font-semibold text-white text-sm md:text-base">
              Navratri Puja Special
            </span>
          </div>
        </div>

        {/* Right Content: CTA */}
        <div className="flex items-center mt-2 md:mt-0">
          <Link
            href="/services/group-puja"
            className="bg-secondary text-white px-5 py-1.5 rounded-full font-medium shadow-md hover:scale-105 hover:bg-red-700 transition text-sm md:text-base"
          >
            200 /- Book Now
          </Link>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-3 md:top-2.5 md:right-4 text-white hover:text-red-300 transition"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

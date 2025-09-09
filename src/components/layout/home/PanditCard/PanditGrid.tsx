"use client";

import pandits from "@/constants/pandits.json";
import { PanditCard } from "./PanditCard";
import { Pandit } from "@/types/pandit";

export function PanditGrid() {
  return (
    <section className="px-4 md:px-10 py-16 bg-gradient-to-b from-[#fffdf7] to-[#fff5dc]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Meet Our <span className="text-orange-600">Verified Pandits</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg font-medium text-center max-w-3xl mx-auto mb-12">
          All our Pandits are verified experts with years of experience in
          performing authentic Vedic rituals.
        </p>

        {/* Pandit Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(pandits as Pandit[]).map((pandit) => (
            <PanditCard key={pandit.id} pandit={pandit} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PanditGrid;

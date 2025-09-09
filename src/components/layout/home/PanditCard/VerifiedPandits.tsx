"use client";

import Link from "next/link";
import pandits from "@/constants/pandits.json";
import { Pandit } from "@/types/pandit";
import { PanditCard } from "./PanditCard";
import Button from "@/components/common/Button";

export default function VerifiedPanditsSection() {
  return (
    <section className="px-0 md:px-12 py-16 bg-gradient-to-r from-yellow-50 to-orange-50 mb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 ">
            Our <span className="text-red-500">Verified</span> PanditJi
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
            Book highly knowledgeable Vedic Pandits and Purohits, well-versed in
            Sanskrit mantras, Hindu scriptures, and astrology, ensuring a
            spiritually enriching and traditionally accurate ritual experience.
          </p>

      
          <Link href="/pandits">
            <Button
              label="See All PanditJis"
              variant="primary"  
              size="medium"    
              className="rounded-full"
            />
          </Link>


          
        </div>

        {/* Right Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(pandits as Pandit[])
            .slice(0, 6) // only 6 cards (3 + 3)
            .map((pandit) => (
              <PanditCard key={pandit.id} pandit={pandit} />
            ))}
        </div>
      </div>
    </section>
  );
}

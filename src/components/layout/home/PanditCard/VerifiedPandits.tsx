"use client";

import Link from "next/link";
import pandits from "@/constants/pandits.json";
import { Pandit } from "@/types/pandit";
import { PanditCard } from "./PanditCard";
import Button from "@/components/common/Button";

export default function VerifiedPanditsSection() {
  return (
    <section
      id="verified-pandits"
      className="px-4 sm:px-6 md:px-12 py-12 md:py-16 mb-16 bg-gradient-to-br from-orange-50 via-white to-pink-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:items-start">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-start space-y-4 md:space-y-6">
         


          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Book A <span className="text-primary">Pooja</span> With <br />
            <span className="text-secondary">Pandits At Your Home</span>
          </h2>

          
          <div className="h-1 w-20 bg-primary rounded-full mb-2"></div>

          {/* Subheading */}
          <h3 className="text-2xl sm:text-2xl md:text-3xl text-gray-800">

            Meet Our <span className="text-primary">Verified PanditJis</span>
          </h3>

          <ul className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl space-y-2 list-disc pl-5">
            <li>Highly knowledgeable Vedic Pandits & Purohits</li>
            <li>Expertise in Sanskrit mantras & Hindu scriptures</li>
            <li>Astrology & ritual guidance</li>
            <li>Ensuring a spiritually enriching experience</li>
          </ul>



          {/* Button */}
          <Link href="/pandits">
            <Button
              label="See All PanditJis →"
              variant="primary"
              size="medium"
           
            />
          </Link>
        </div>

        {/* Right Grid of Cards */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {(pandits as Pandit[]).slice(0, 6).map((pandit) => (
              <PanditCard key={pandit.id} pandit={pandit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

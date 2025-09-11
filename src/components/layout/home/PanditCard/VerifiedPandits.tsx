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
     className="px-4 sm:px-6 md:px-12 py-12 md:py-16 mb-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:items-start">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-start space-y-6 md:space-y-8">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-primary">Book A Pooja</span> With Pandits At Your Home
          </h2>

          {/* Subheading */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Meet Our <span className="text-primary">Verified PanditJis</span>
          </h3>

          {/* Paragraph */}
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
            Book highly knowledgeable Vedic Pandits and Purohits, well-versed in Sanskrit mantras, Hindu scriptures, and astrology, ensuring a spiritually enriching and traditionally accurate ritual experience.  Connect with knowledgeable and trusted Vedic Pandits for all your religious and spiritual needs. 
            Our verified PanditJis are well-versed in Sanskrit mantras, Hindu rituals, astrology.
          </p>

          {/* Button */}
          <Link href="/pandits">
            <Button
              label="See All PanditJis"
              variant="primary"
              size="medium"
              className="rounded-full mt-2"
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

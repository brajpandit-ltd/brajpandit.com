"use client";

import Link from "next/link";
import pandits from "@/constants/pandits.json";
import { Pandit } from "@/types/pandit";
import { PanditCard } from "./PanditCard";
import Button from "@/components/common/Button";

export default function VerifiedPanditsSection() {
  return (
    <section className="px-4 sm:px-6 md:px-12 py-12 md:py-16 mb-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start lg:items-center">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-10">
            Our <span className="text-red-500">Verified</span> PanditJi
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8">
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
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {(pandits as Pandit[])
              .slice(0, 6) // only 6 cards
              .map((pandit) => (
                <PanditCard key={pandit.id} pandit={pandit} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Pandit } from "@/types/pandit";
import { PanditCard } from "./AllPanditCard";

interface PanditGridProps {
  pandits: Pandit[];
}

export function PanditGrid({ pandits }: PanditGridProps) {
  return (
    <section className="px-4 md:px-10 py-2 ">
      <div className="max-w-7xl mx-auto">
      
        
       

        {/* Grid */}
        <div
          className="
            grid 
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
            justify-items-center
            width[100%]
          "
          style={{
            maxWidth: "1202.43px", // enforce row width
            margin: "0 auto",
          }}
        >
          {pandits.map((pandit) => (
            <Link
              key={pandit.id}
              href={`/pandits/${pandit.slug}`}
              className="block"
            >
              <div
                className="rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-lg transition-transform hover:scale-[1.02]"
                style={{
                  width: "280px", // 4 cards per row (≈1202 / 4 - gap)
                  height: "434px", // fixed row height
                }}
              >
                <PanditCard pandit={pandit} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

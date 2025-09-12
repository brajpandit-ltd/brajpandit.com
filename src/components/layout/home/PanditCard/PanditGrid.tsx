"use client";

import Link from "next/link";
import { Pandit } from "@/types/pandit";
import { AllPanditCard } from "./AllPanditCard";

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
    gap-5
    justify-items-center
    w-full
    px-7
  "
>
  {pandits.map((pandit) => (
    <Link key={pandit.id} href={`/pandits/${pandit.slug}`} className="block w-full">
      <div
        className="
          w-full 
          max-w-[280px] 
          sm:max-w-[320px] 
          lg:max-w-[280px] 
          rounded-2xl 
          shadow-md 
          overflow-hidden 
          bg-white 
          hover:shadow-lg 
          transition-transform 
          hover:scale-[1.02]
        "
      >
        <AllPanditCard pandit={pandit} />
      </div>
    </Link>
  ))}
</div>

      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Pandit } from "@/types/pandit";
import { AllPanditCard } from "./AllPanditCard";

interface PanditGridProps {
  pandits: Pandit[];
  search: string;
  setSearch: (value: string) => void;
}

export function PanditGrid({ pandits, search, setSearch }: PanditGridProps) {
  return (
    <section className="px-4 md:px-10 py-2">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar top right */}
        <div className="flex justify-end mb-6 mr-12 sm:mr-6 lg:mr-10 ">
          <input
            type="text"
            placeholder="Search Pandit Ji"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            w-60
              sm:w-80
              lg:w-80
              
              h-10
              w-40
              px-4
              rounded-full
              border border-gray-300
              text-base
              focus:outline-none
              focus:ring-2 focus:ring-orange-400
              focus:border-[#F68500]
            "
          />
        </div>

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
            px-4
          "
        >
          {pandits.map((pandit) => (
            <Link
              key={pandit.id}
              href={`/pandits/${pandit.slug}`}
              className="block w-full"
            >
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

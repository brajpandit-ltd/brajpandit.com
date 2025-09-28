import Link from "next/link";
import { Pandit } from "@/types/pandit";
import SearchComponent from "./SearchComponent";
import PanditCard from "./PanditCard";

interface PanditGridProps {
  pandits: Pandit[];
  search: string;
}

export function PanditGrid({ pandits, search }: PanditGridProps) {
  return (
    <section className="px-4 md:px-10 py-2">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar top right */}
        <div className="flex justify-end mb-6 mr-12 sm:mr-6 lg:mr-10 ">
          <SearchComponent search={search} />
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
                <PanditCard pandit={pandit} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

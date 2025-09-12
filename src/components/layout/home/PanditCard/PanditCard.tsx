import Link from "next/link";
import Image from "next/image";
import { Pandit } from "@/types/pandit";

export function PanditCard({ pandit }: { pandit: Pandit }) {
  return (
    <Link
      href={`/pandits/${encodeURIComponent(pandit.slug)}`}
      className="rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition flex flex-col cursor-pointer w-full max-w-sm mx-auto"
    >
      {/* Image */}
      <div className="relative w-full h-70 sm:h-40 md:h-44">
        <Image
          src={pandit.image}
          alt={pandit.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>

     {/* Content */}
<div className="flex flex-col bg-[#F685008C] w-full p-2 sm:p-2.5">
  {/* Name on top */}
  <h3 className="text-sm sm:text-base font-semibold text-gray-600 truncate">
    {pandit.name}
  </h3>

  {/* Specialization and experience on the same row */}
  <div className="flex justify-between items-center mt-1">
    <p className="text-xs sm:text-sm text-gray-700 break-words">
      {pandit.specialization}
    </p>
    <p className="text-[10px] sm:text-xs text-gray-600 ml-2 flex-shrink-0">
      {pandit.experience}
    </p>
  </div>
</div>



    </Link>
  );
}

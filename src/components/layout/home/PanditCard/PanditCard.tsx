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
      <div className="relative w-full h-48 sm:h-52 md:h-56">
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
      <div className="p-4 bg-[#F685008C] w-full">
        <h3 className="text-lg font-semibold">{pandit.name}</h3>
        <p className="text-sm text-gray-700">{pandit.specialization}</p>
        <p className="text-xs text-gray-600">{pandit.experience}</p>
      </div>
    </Link>
  );
}

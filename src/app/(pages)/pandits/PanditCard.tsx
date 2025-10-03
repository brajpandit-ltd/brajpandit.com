"use client";

import Image from "next/image";
import { Pandit } from "@/types/pandit";
import Link from "next/link";
import Button from "@/components/common/Button";

interface PanditCardProps {
  pandit: Pandit;
}

function PanditCard({ pandit }: PanditCardProps) {
  return (
    <div className="flex flex-col rounded-lg overflow-hidden w-full max-w-sm mx-2 sm:mx-auto">
      {/* Image */}
      <div className="relative w-full aspect-[5/4]">
        <Image
          src={pandit.image}
          alt={pandit.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col bg-amber-100 w-full p-2">
        <h3 className="text-sm font-medium truncate">{pandit.name}</h3>
        <p className="text-xs break-words">{pandit.specialization}</p>
        <p className="text-xs">{pandit.experience}</p>

        <Link href={`/pandits/${encodeURIComponent(pandit.slug)}`}>
          <Button
            className="mt-1 text-primary"
            label="View Details"
            size="v-small"
            variant="link"
          />
        </Link>
      </div>
    </div>
  );
}

export default PanditCard;

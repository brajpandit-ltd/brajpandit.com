import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IAstrologyService } from "./page";

const AstrologyService = ({ service }: { service: IAstrologyService }) => {
  return (
    <div className="bg-amber-100 rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover object-center rounded-full"
        />
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
        {service.description}
      </p>
      <Link
        href={service.link}
        className="mt-auto inline-block bg-primary hover:bg-red-700 text-white text-xs sm:text-sm px-4 py-2 rounded-full shadow transition"
      >
        Learn More
      </Link>
    </div>
  );
};

export default AstrologyService;

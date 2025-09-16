"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import pujaServices from "@/constants/pujaServices.json";
import { slugify } from "@/utils/unitsFun";

const PujaServices: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Our Puja Services</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Book trusted Vedic rituals for every life event.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {pujaServices.map((service) => (
          <Link
            href={`/puja/${slugify(service.title)}`}
            key={slugify(service.title)}
            className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-4 hover:shadow-xl transition"
          >
            <div className="relative w-full aspect-square mb-4">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>
            <h3 className="text-center text-sm font-semibold text-gray-800 dark:text-gray-100">
              {service.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PujaServices;

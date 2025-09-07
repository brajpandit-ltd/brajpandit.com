"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import services from "@/services/services";

const EPujaServices = () => {
  const params = useSearchParams();
  const [epujas, setEpujas] = React.useState<any>([]);

  useEffect(() => {
    const fetchEpujas = async () => {
      try {
        const { data: pujas } = await services.ePujas(
          "?" + params.toString(),
          false
        );
        setEpujas(pujas);
      } catch (error: any) {
        console.error("Error fetching e-pooja services:", error?.message);
      }
    };

    fetchEpujas();
  }, [params]);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {epujas?.map((puja: any, idx: number) => (
        <div
          key={puja.slug + idx}
          className="w-full min-w-[230px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group snap-start"
        >
          <Link href={`/services/e-puja/${puja.slug}`}>
            <Image
              src={puja?.bannerImage}
              alt={puja?.title}
              width={230}
              height={100}
              className="object-cover h-[150px] group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-2">
              <h3 className="text-sm font-bold">{puja?.title}</h3>
              <p className="text-xs line-clamp-2">{puja.subtitle}</p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default EPujaServices;

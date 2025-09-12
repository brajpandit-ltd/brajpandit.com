"use client";

import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import services from "@/services/services";
import BookingForm from "./BookingForm";
import { useSearchParams } from "next/navigation";

const fetchPujaService: any = async (pujaSlug: string, pujaType: string) => {
  try {
    const { data: pujaService }: { data: any } =
      pujaType === "ePuja"
        ? await services.ePuja(pujaSlug, false)
        : pujaType === "personalisedPuja"
          ? await services.personalisedPuja(pujaSlug, false)
          : { data: null };

    const { data: pujas }: { data: any } =
      pujaType === "ePuja"
        ? await services.ePujas("", false)
        : pujaType === "personalisedPuja"
          ? await services.personalisedPujas("", false)
          : { data: [] };

    return { pujas, pujaService };
  } catch (error) {
    console.error("Error fetching puja service:", error);
    return null;
  }
};

const PageLayout = () => {
  const searchParams: any = useSearchParams();
  const [pageData, sePageData] = useState<any>({
    pujas: [],
    pujaService: null,
  });

  const pujaSlug = searchParams.get("pujaSlug") || "";
  const pujaType = searchParams.get("pujaType") || "ePuja";

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPujaService(pujaSlug, pujaType);
      if (data) {
        sePageData({ pujas: data.pujas, pujaService: data.pujaService });
      }
    };

    loadData();
  }, [pujaSlug, pujaType]);

  const { pujas, pujaService } = pageData;

  return (
    <div className="min-h-screen px-4 py-14 bg-gradient-to-br">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden">
        {/* Puja Information */}
        <div className="p-8 md:p-12">
          <div className="relative rounded-2xl mb-6 w-full h-64 object-cover shadow-xl border border-yellow-300 dark:border-yellow-800">
            <Image
              src={pujaService?.bannerImage || "/assets/pujas/default.jpg"}
              alt={pujaService?.title || "Puja Image"}
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-orange-800 dark:text-primary mb-4">
            {pujaService?.title || "Puja Service"}
          </h2>
          <p className="text-gray-500 dark:text-gray-600 text-lg leading-relaxed">
            {pujaService?.description ||
              "Book an auspicious puja ceremony with verified pandits."}
          </p>
        </div>

        {/* Booking Form */}
        <Suspense fallback={<div>Loading...</div>}>
          <BookingForm pujaService={pujaService} pujas={pujas || []} />
        </Suspense>
      </div>
    </div>
  );
};

export default PageLayout;

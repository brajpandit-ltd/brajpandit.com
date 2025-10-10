"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import services from "@/services/services";
import data from "@/constants/pujaServices.json";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setFilters } from "@/store/features/pujaSeavicesSlice";
// import Button  from "@/components/common/Button";

const categoryMap: Record<string, string> = {
  wealth: "Wealth & Prosperity Pujas",
  career: "self Career",
  study: "Education & Knowledge Pujas",
  health: "Health & Wellbeing Pujas",
  business: "Career, Business & Financial Astrology",
  relationship: "Relationship & Personal Life Astrology",
  family: "Family & Harmony Pujas",
  rudra: "Rudrakshya & Lord Shiva Pujas",
  tantra: "Tantra & Protection Pujas",
  zodiac: "Zodiac Based Pujas",
  others: "Miscellaneous Pujas",
};



const PersonalisedPuja = () => {
  const { pujaCategories } = data;
  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state: any) => state.pujaServices);

  const [pujas, setPujas] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCat = (cat: string) => dispatch(setFilters({ category: cat }));

  const fetchPujas = async (category: string) => {
    setLoading(true);

    try {
      const mappedCategory = categoryMap[category] || "";
  const response: any = await services.personalisedPujas(`?category=${mappedCategory}`, false);
      setPujas(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching pujas:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPujas(filters.category);
  }, [filters]);

  return (
    <section className="relative py-12 px-4 md:px-8 bg-amber-100">
      <div className="flex flex-col justify-between gap-6 border-l-4 border-secondary pl-4 transition-all sm:flex-row sm:items-center">
        <div className="">
          <h4 className="text-sm md:text-base text-primary">
            Braj pandit&apos;s Personalised Pujas
          </h4>
          <h2 className="text-xl font-bold">Personalised Vedic Pujas</h2>
          <p className="text-sm md:base">
            Experience the Power of Vedic Rituals, Anytime, Anywhere. Book
            Expert Pandits for Your Sacred Ceremonies!
          </p>
        </div>

        {/* <Link href="/services/puja">
          <Button
            label="See All"
            size="small"
            variant="primary"
            className="w-max"
          />
        </Link> */}
      </div>

      <div className="overflow-x-auto mt-3 md:mt-4 no-scrollbar">
        <div className="flex gap-3 snap-x snap-mandatory overflow-x-scroll">
          {pujaCategories?.map((cat: any, idx: number) => (
            <div
              key={cat.slug + idx}
              className="w-full min-w-[60px] md:min-w-[100px] cursor-pointer"
              onClick={() => handleCat(cat.slug)}
            >
              <Image
                src={cat?.image}
                alt={cat?.title}
                width={100}
                height={100}
                className={`object-cover w-[60px] h-[60px] md:w-[100px] md:h-[100px] rounded-full ${
                  filters.category === cat?.slug && "border-2 border-primary"
                }`}
              />
              <h4
                className={`text-sm text-center font-medium line-clamp-1 ${filters.category === cat?.slug && "text-primary"}`}
              >
                {cat?.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto mt-5 md:mt-7 no-scrollbar">
        {loading ? (
          <p>Loading...</p>
        ) : pujas?.length === 0 ? (
          <p>No Puja available</p>
        ) : (
          <div className="flex gap-3 snap-x snap-mandatory overflow-x-scroll">
            {pujas?.map((puja: any, index: number) => (
              <div
                key={puja.slug + index}
                className="w-full min-w-[230px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group snap-start"
              >
                <Link
                  href={`/services/puja-booking?pujaSlug=${puja.slug}&packageId=basic&pujaType=personalisedPuja`}
                >
                  <Image
                    src={puja.bannerImage}
                    alt={puja.title}
                    width={230}
                    height={100}
                    className="object-cover h-[150px] group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-2">
                    <h3 className="text-sm font-bold line-clamp-1">
                      {puja?.title}
                    </h3>
                    <p className="text-xs line-clamp-2">{puja.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonalisedPuja;

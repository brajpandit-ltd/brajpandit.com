import Image from "next/image";
import Link from "next/link";
import React from "react";
import services from "@/services/services";
import { Button } from "@/components/common";

const UpcommingPujas = async () => {
  const { data: upcommingPujas, success } = await services.ePujas();

  return (
    <section className="relative py-10 mx-4 md:mx-8">
      <div className="flex flex-col justify-between gap-6 border-l-4 border-secondary pl-4 transition-all sm:flex-row sm:items-center">
        <div>
          <h4 className="text-sm md:text-base text-primary">
            🎶 Live upcomming pujas
          </h4>
          <h2 className="text-xl font-bold">
            Upcomming Vedic Pujas | Online Pooja Booking | Braj Pandit Ji
          </h2>

          <p className="text-sm md:base">
            Experience the Power of Vedic Rituals, Anytime, Anywhere. Book
            Expert Pandits for Your Sacred Ceremonies!
          </p>
        </div>

        <Link href="/services/e-puja">
          <Button
            label="See All"
            size="small"
            variant="primary"
            className="w-max"
          />
        </Link>
      </div>

      <div className="overflow-x-auto mt-3 md:mt-4">
        {!upcommingPujas?.length && <p>No Upcomming Pujas</p>}

        {success && upcommingPujas?.length && (
          <div className="flex gap-3 snap-x snap-mandatory overflow-x-scroll">
            {upcommingPujas?.map((puja: any, index: number) => (
              <div
                key={puja.slug + index}
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
                    <h3 className="text-sm font-bold line-clamp-1">
                      {puja?.title}
                    </h3>
                    <p className="text-xs line-clamp-1">{puja.subtitle}</p>
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

export default UpcommingPujas;

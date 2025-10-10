import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundForward, IoIosShareAlt } from "react-icons/io";
import { TiTick } from "react-icons/ti";

import { Button } from "@/components/common";
import services from "@/services/services";

import { ScrollButton } from "./ClientComponents";
import {
  BookingProcess,
  WhyChooseUs,
  Testimonials,
  FAQs,
} from "@/components/layout";
// import TempleDetails from "./TempleDetails";
import CTASection from "./CTASection";
import { generateStaticParamsEPuja } from "@/services/e-pujaService";

// The key must be pujaSlug, not serviceSlug!
export async function generateStaticParams() {
  return generateStaticParamsEPuja();
}

const page = async ({ params }: any) => {
  const { pujaSlug } = await params;

  const { data, success }: { data: any; success: boolean } =
    await services.ePuja(pujaSlug);

  if (!success) return <h1>Puja Not found, Please try again.</h1>;

  return (
    <>
      <section className="bg-amber-100 relative flex flex-col md:flex-row items-center justify-between py-16 md:py-20 px-6 md:px-8 gap-8">
  {/* Left side - Content */}
  <div className="flex-1 max-w-xl">
    <h1 className="text-primary text-2xl md:text-4xl font-bold">{data?.title}</h1>

    <p className="text-base md:text-lg font-medium mt-3 md:mt-6">
      {data?.subtitle}
    </p>
    

    

    <p className="flex items-center gap-2 mt-4">
      <Button
        label={`${data?.date} : ${data?.time}`}
        variant="primary"
        size="small"
      />
      <span className="text-lg">@ {data?.location}</span>
    </p>

    <ScrollButton className="packages-section" label="Book Now" />

    {/* WhatsApp Share Button */}
    <div className="flex items-center gap-2 mt-6">
      <Link
        href={`https://wa.me/?text=${encodeURIComponent(
          `${data?.title}\n${data?.subtitle}\n Book Now \n\n${process.env.NEXT_PUBLIC_API_BASE_URL}/services/e-puja/${pujaSlug}`
        )}`}
        target="_blank"
      >
        <Button
          label="at whatsapp"
          icon={<IoIosShareAlt color="green" />}
          variant="default"
          size="small"
          className="text-green-600"
        />
      </Link>
    </div>
  </div>

  {/* Right side - Banner Image */}

  <div className="flex-1 flex justify-center">
    <Image
      src={data?.bannerImage || "/assets/pujas/banner.jpg"}
      alt={data?.title || "banner"}

      width={500}       
      height={400}
      className="lg:w-[600] h-auto max-h-[400px] object-cover rounded-lg shadow-md"
    />
  </div>
</section>


      <section className="packages-section relative py-12 px-4 md:px-8 ">
        <div className="border-l-4 border-secondary pl-4 transition-all">
          <h2 className="text-xl font-bold">
            Select your package and experience the power of Vedic Rituals
          </h2>
          <p className="text-sm md:base">
            Experience the Power of Vedic Rituals, Anytime, Anywhere. Book
            Expert Pandits for Your Sacred Ceremonies!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-4 mt-4 justify-items-center md:gap-6 md:mt-8">
          {data?.packages?.map((packageItem: any) => (
            <div
              key={packageItem?.id}
              className="flex flex-col gap-2 p-4 min-w-[300px] max-w-[450px] border rounded-xl border-primary"
            >
              <h4 className="text-lg font-bold">{packageItem?.title}</h4>
              <p className="text-sm">{packageItem?.description}</p>
              <p className="text-lg font-bold">
                Price:{" "}
                <span className="text-primary">{packageItem?.price}</span>
              </p>

              <ul className="space-y-1 text-sm">
                {packageItem?.features?.map((feature: any, idx: number) => (
                  <li key={idx} className="flex items-center gap-2">
                    <TiTick className="text-secondary" /> <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/puja-booking?pujaSlug=${pujaSlug}&packageId=${packageItem?.id}&pujaType=ePuja`}
              >
                <Button
                  label={packageItem?.price + " Participate"}
                  variant="secondary"
                  size="small"
                  icon={<IoIosArrowRoundForward size={20} />}
                  iconPosition="right"
                  className="w-full  "
                />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="packages-section relative py-12 px-4 md:px-8">
        {data?.benefits && (
          <div className="border-l-4 border-secondary pl-4 transition-all">
            <h2 className="text-2xl font-bold">{data?.benefits?.heading}</h2>
            <ul className="space-y-1 text-sm">
              {data?.benefits?.points?.map((point: any, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  <TiTick className="text-secondary" /> <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <BookingProcess />
      {/* <TempleDetails templeDetails={data.templeDetails} /> */}
      {/* <WhyChooseUs /> */}
      
      <CTASection />
      <Testimonials />
      <FAQs />
    </>
  );
};

export default page;

import { Metadata } from "next";
import React, { Suspense } from "react";

import SearchHeader from "../SearchHeader";
import EPujaServices from "./EPujaServices";
// import HeroSection from "../HeroSection";

export const metadata: Metadata = {
  title: "Book Pooja In Temples Across India",
};

const pujaCategories = [
  {
    title: "All",
    slug: "all",
    image: "/assets/pujas/all.jpg",
  },
  {
    title: "Puja",
    slug: "puja",
    image: "/assets/pujas/puja.jpg",
  },
  {
    title: "Rudrabhishek",
    slug: "rudrabhishek",
    image: "/assets/pujas/rudrabhishek.jpg",
  },
];

const page = async () => {
  return (
    <>

    {/* <HeroSection/> */}
      <section className="px-6 py-8 md:py-12 lg:py-16 text-center bg-amber-100">
        <h1 className="text-3xl md:text-5xl font-bold text-primary">
          Sacred Rituals for Your Spiritual Journey
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Experience the sacred rituals of Sanatan Dharma performed by expert
          Vedic pandits. Book a puja that suits your spiritual needs.
        </p>
      </section>

      <div className="flex-1 px-6 py-8 md:py-12">
        <Suspense fallback={<p>Loading...</p>}>
          <SearchHeader
            basePathname="/services/e-puja"
            pujaCategories={pujaCategories}
          />
        </Suspense>

        <Suspense fallback={<p>Loading...</p>}>
          <EPujaServices />
        </Suspense>
      </div>
    </>
  );
};

export default page;

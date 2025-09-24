import { Metadata } from "next";
import { Suspense } from "react";
import PageLayout from "./PageLayout";
import { Testimonials } from "@/components/layout";

export const metadata: Metadata = {
  title: "Puja Booking | Braj Pandit Ji",
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageLayout />
      <Testimonials/>
    </Suspense>
    
  );
};

export default Page;

import { Metadata } from "next";
import { Suspense } from "react";
import PageLayout from "./PageLayout";
import { BookingProcess, Testimonials } from "@/components/layout";
// import { UpcommingPujas } from "@/components/layout/home";
import  UpcommingPujas  from "./upcoming";




export const metadata: Metadata = {
  title: "Puja Booking | Braj Pandit Ji",
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageLayout />

      <BookingProcess/>
      <UpcommingPujas/>

      <Testimonials/>

      
      
    </Suspense>
    
  );
};

export default Page;

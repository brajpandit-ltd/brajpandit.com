



import { Metadata } from "next";
import React, { Suspense } from "react";

import SearchHeader from "./SearchHeader";
import EPujaServices from "./EPujaServices";

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















// import { Metadata } from "next";
// import React, { Suspense } from "react";
// import { PujaService } from "@/types/pujaService";
// import Filter from "./Filter";
// import SearchHeader from "./SearchHeader";
// import PoojaCard from "./PoojaCard";
// import HeroSection from "./HeroSection";
// // import { toast } from "react-toastify";

// export const metadata: Metadata = {
//   title: "Pooja Services | Braj Pandit Ji",
// };

// export default async function Page() {
//   // { searchParams }: { searchParams: any }
//   // const params = searchParams;

//   // const getQueryParams = () => {
//   //   const query = new URLSearchParams();
//   //   if (params.searchQuery) query.set("searchQuery", params.searchQuery);
//   //   if (params.category) query.set("category", params.category);
//   //   if (params.trending) query.set("trending", params.trending);
//   //   if (params.tags && Array.isArray(params.tags)) {
//   //     params.tags.forEach((tag: string) => query.append("tags", tag));
//   //   }

//   //   return query.toString();
//   // };

//   const poojaServices: PujaService[] = [];
//   // try {
//   //   const res = await fetch(
//   //     `${process.env.API_BASE_URL}/api/services/e-pooja?${getQueryParams()}`,
//   //     {}
//   //   );

//   //   if (!res.ok) {
//   //     toast.error("Failed to fetch e-pooja services.");
//   //     return [];
//   //   }

//   //   const json = await res.json();
//   //   poojaServices = json.data || [];
//   // } catch (error: any) {
//   //   console.error("Error fetching e-pooja services:", error?.message);
//   // }

//   return (
//     <>
//       <HeroSection />

//       <section className="flex sticky top-0 pt-8 pb-16 mx-4 md:mx-8">
//         {/* Sidebar filter */}
//         <aside className="hidden md:block">
//           <Suspense fallback={<p>Loading...</p>}>
//             <Filter />
//           </Suspense>
//         </aside>

//         {/* Main content */}
//         <div className="flex-1 px-2">
//           <Suspense fallback={<p>Loading...</p>}>
//             <SearchHeader basePathname={""} pujaCategories={[]} />
//           </Suspense>

//           <Suspense fallback={<p>Loading...</p>}>
//             <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
//               {poojaServices.length > 0 ? (
//                 poojaServices?.map((puja) => (
//                   <PoojaCard key={puja.slug} pooja={puja} />
//                 ))
//               ) : (
//                 <p className="text-gray-500">No services found.</p>
//               )}
//             </div>
//           </Suspense>
//         </div>
//       </section>
//     </>
//   );
// }

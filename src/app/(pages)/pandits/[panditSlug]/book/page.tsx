"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/common";
import { Testimonials } from "@/components/layout";
import { useRef } from "react";
import pandits from "@/constants/pandits.json"; // your pandit data
import GoogleAd1 from "@/components/google-ads/GoogleAds1";

export default function PanditBookingPage() {
  const { panditSlug } = useParams(); // get slug from URL
  const pandit = (pandits as any[]).find((p) => p.slug === panditSlug);

  if (!pandit) {
    return notFound();
  }

  const formRef = useRef<HTMLDivElement | null>(null);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <Image
          src="/assets/pandits/pandithero.jpg"
          alt="Braj Pandit booking hero"
          fill
          priority
          loading="eager"
          className="object-cover -z-1"
        />

        <div className="max-w-[350px] md:max-w-[650px] px-8">
          <h4 className="text-sm md:text-base font-normal">
            Book Pandit Ji in Brajdham
          </h4>
          <h1 className="text-2xl md:text-5xl font-bold">
            <span className="text-primary">Trusted</span> Pandits for Your{" "}
            <span className="text-secondary">Sacred Ceremonies</span>
          </h1>
          <p className="text-sm md:text-xl font-medium mt-3 md:mt-6">
            Perform every ritual the authentic Vedic way. Book verified Pandits
            for Poojas, Havans, and Sanskars in Mathura, Vrindavan & beyond.
          </p>
          <p className="mt-4">Scroll Down </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section
        ref={formRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Booking Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Book {pandit.name}</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-1">
                    Date of Pooja
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-1">
                    Time of Pooja
                  </label>
                  <input
                    type="time"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Address
                </label>
                <textarea
                  placeholder="Enter your address"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                />
              </div>
              <Button
                label="Submit Booking"
                variant="primary"
                className="w-full mt-4"
              />
            </form>
          </div>

          {/* Right: Pandit Details */}
          <div className="flex flex-col items-center">
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-lg overflow-hidden shadow-lg mb-6">
              <Image
                src={pandit.image || "/assets/pandits/pandit_hero.jpg"}
                alt={pandit.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{pandit.name}</h3>
            <p className="mt-2 text-lg md:text-xl text-primary max-w-2xl mx-auto">
              {pandit.experience} years of experience • {pandit.speciality}
            </p>
            <p className="text-gray-700 mb-4">{pandit.bio}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${pandit.phone || "+918595009640"}`}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold text-center hover:bg-green-700 cursor-pointer"
              >
                Call Now 📞 {pandit.phone || "+91 8595009640"}
              </a>
              <a
                href={`https://wa.me/${pandit.phone?.replace("+", "") || "918595009640"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold text-center hover:bg-green-600 cursor-pointer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <GoogleAd1 slot="7350714271" />

      <Testimonials />
    </main>
  );
}

// "use client";

// import Image from "next/image";
// import { Button } from "@/components/common";
// import { Testimonials } from "@/components/layout";
// import { useRef } from "react";

// export default function PanditBookingPage() {
//   // Typed ref so scrollIntoView is available
//   const formRef = useRef<HTMLDivElement | null>(null);

//   const scrollToForm = () => {
//     formRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <main className="w-full overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative py-16 md:py-24">
//   <Image
//     src="/assets/services-hero.jpg"
//     alt="Braj Pandit booking hero"
//     fill
//     priority
//     loading="eager"
//     className="object-cover -z-1"
//   />

//   <div className="max-w-[350px] md:max-w-[650px] px-8">
//     <h4 className="text-sm md:text-base font-normal">
//       Book Pandit Ji in Brajdham
//     </h4>
//     <h1 className="text-2xl md:text-5xl font-bold">
//       <span className="text-primary">Trusted</span> Pandits for Your{" "}
//       <span className="text-secondary">Sacred Ceremonies</span>
//     </h1>
//     <p className="text-sm md:text-xl font-medium mt-3 md:mt-6">
//       Perform every ritual the authentic Vedic way. Book verified Pandits for
//       Poojas, Havans, and Sanskars in Mathura, Vrindavan & beyond.
//     </p>
//     <p className="mt-4">Scroll Down 🔻</p>
//   </div>
// </section>

//       {/* Booking Form Section */}
//       <section
//         ref={formRef}
//         className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Left: Booking Form */}
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-6">Book Your Pandit</h2>
//             <form className="space-y-4">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   placeholder="Enter your phone number"
//                   className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Date of Pooja
//                 </label>
//                 <input
//                   type="date"
//                   className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Time of Pooja
//                 </label>
//                 <input
//                   type="time"
//                   className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Address
//                 </label>
//                 <textarea
//                   placeholder="Enter your address"
//                   className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
//                   rows={3}
//                 />
//               </div>
//               <Button label="Submit Booking" variant="primary" className="w-full mt-4" />
//             </form>
//           </div>

//           {/* Right: Pandit Image + Contact */}
//           <div className="flex flex-col items-center">
//             <div className="relative w-full h-[400px] sm:h-[500px] rounded-lg overflow-hidden shadow-lg mb-6">
//               <Image
//                 src="/assets/pandits/Rohini saran ji .jpg"
//                 alt="Pandit Ji"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <a
//                 href="tel:+911234567890"
//                 className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold text-center hover:bg-green-700 cursor-pointer"
//               >
//                 Call Now 📞 +91 8595009640
//               </a>
//               <a
//                 href="https://wa.me/918595009640"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold text-center hover:bg-green-600 cursor-pointer"
//               >
//                 WhatsApp
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Testimonials />
//     </main>
//   );
// }

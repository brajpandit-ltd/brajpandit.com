
"use client";

import Image from "next/image";

const reasonsLeft = [
  {
    title: "Authentic & Verified Pandits",
    desc: "Our expert and verified Pandits follow Vedic traditions with precision, ensuring your rituals are performed authentically and bring divine blessings.",
  },
  {
    title: "Complete Pooja Arrangements",
    desc: "We take care of everything – from samagri to setup. You only focus on devotion while we handle all the details seamlessly.",
  },
  {
    title: "Hassle-Free Online Booking",
    desc: "Easily book a Pandit Ji from the comfort of your home with our smooth, quick, and transparent process.",
  },
];

const reasonsRight = [
  {
    title: "Customized Rituals for Every Occasion",
    desc: "From Griha Pravesh to Wedding Ceremonies, we offer personalized pooja services based on traditions, region, and your required customs.",
  },
  {
    title: "Auspicious Muhurat & Guidance",
    desc: "Our experts help you choose the best muhurat, ensuring maximum divine benefit and harmony in your rituals.",
  },
  {
    title: "Performed with Purity & Devotion",
    desc: "Every ritual is conducted with proper Vedic chanting, maintaining sanctity, discipline, and devotion at every step.",
  },
];

export default function Why_Choose_Us() {
  return (
    <section className="pb-10  relative bg-[#f6f2e7] pt-10 px-6 md:px-10 overflow-hidden sm:pb-5">

      {/* Mobile: Shiva Image on Top */}
      <div className="relative w-full flex justify-center mb-8 lg:hidden">
        <div className="relative w-[200px] h-[200px]">
          <Image
            src="/assets/shivji.png"
            alt="Lord Shiva illustration"
            fill
            className="object-contain opacity-60"
            priority
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Book with <span className="text-primary">Braj Pandit?</span>
          </h2>
          <p className="text-base md:text-lg mt-4 text-gray-700">
            Experience the divine grace of Lord Krishna through our authentic and trusted
            puja services
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          
          <div className="space-y-8 z-10 relative">
            {reasonsLeft.map((item, i) => (
              <div key={i}>
              <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                <p className="text-gray-700 text-sm mt-2">{item.desc}</p>
               </div>
             ))}
          </div>

          {/* Center Column */}
          <div className="hidden lg:block relative">
  <div className="relative w-full h-full md:w-[400px] md:h-[400px]  lg:w-[600px] lg:h-[550px]  lg:-translate-x-28 lg:-translate-y-17">
    <Image
      src="/assets/shivji.png"
      alt="Lord Shiva illustration"
      fill
      className="opacity-100 object-contain md:opacity-100 "
      priority
    />
  </div>
</div>


          {/* Right Column */}
         <div className="space-y-8 z-10 relative">
            {reasonsRight.map((item, i) => (
              <div key={i}>
              <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                <p className="text-gray-700 text-sm mt-2">{item.desc}</p>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}




// "use client";

// import Image from "next/image";

// const reasonsLeft = [
//   {
//     title: "Authentic & Verified Pandits",
//     desc: "Our expert and verified Pandits follow Vedic traditions with precision, ensuring your rituals are performed authentically and bring divine blessings.",
//   },
//   {
//     title: "Complete Pooja Arrangements",
//     desc: "We take care of everything – from samagri to setup. You only focus on devotion while we handle all the details seamlessly.",
//   },
//   {
//     title: "Hassle-Free Online Booking",
//     desc: "Easily book a Pandit Ji from the comfort of your home with our smooth, quick, and transparent process.",
//   },
// ];

// const reasonsRight = [
//   {
//     title: "Customized Rituals for Every Occasion",
//     desc: "From Griha Pravesh to Wedding Ceremonies, we offer personalized pooja services based on traditions, region, and your required customs.",
//   },
//   {
//     title: "Auspicious Muhurat & Guidance",
//     desc: "Our experts help you choose the best muhurat, ensuring maximum divine benefit and harmony in your rituals.",
//   },
//   {
//     title: "Performed with Purity & Devotion",
//     desc: "Every ritual is conducted with proper Vedic chanting, maintaining sanctity, discipline, and devotion at every step.",
//   },
// ];

// export default function Why_Choose_Us() {
//   return (
//     <section className="relative bg-[#f6f2e7] py-20 px-6 md:px-10 overflow-hidden">

//       {/* Background Image */}

//       <div className="absolute inset-0 flex justify-center items-center pointer-events-none md:pt-20 lg:pt-40">
//         <div className="relative w-full h-full md:w-[400px] md:h-[400px] lg:w-[550px] lg:h-[550px]">
//           <Image
//             src="/assets/shivji.png"
//             alt="Lord Shiva illustration"
//             fill
//             className="object-contain 
//                        md:opacity-100 
//                        opacity-55
//                        lg:opacity-100
//                        "
//             priority
//           />
//         </div>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Why Book with <span className="text-primary">Braj Pandit?</span>
//           </h2>
//           <p className="text-base md:text-lg mt-4 text-gray-700">
//             Experience the divine grace of Lord Krishna through our authentic and trusted
//             puja services
//           </p>
//         </div>

//         {/* Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
//           {/* Left Column */}
//           <div className="space-y-8 z-10 relative">
//             {reasonsLeft.map((item, i) => (
//               <div key={i}>
//                 <h3 className="text-xl font-semibold text-black">{item.title}</h3>
//                 <p className="text-gray-700 text-sm mt-2">{item.desc}</p>
//               </div>
//             ))}
//           </div>

//           {/* Empty center column to preserve spacing */}
//           <div className="hidden lg:block"></div>

//           {/* Right Column */}
//           <div className="space-y-8 z-10 relative">
//             {reasonsRight.map((item, i) => (
//               <div key={i}>
//                 <h3 className="text-xl font-semibold text-black">{item.title}</h3>
//                 <p className="text-gray-700 text-sm mt-2">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";

// const reasonsLeft = [
//   {
//     title: "Authentic & Verified Pandits",
//     desc: "Our expert and verified Pandits follow Vedic traditions with precision, ensuring your rituals are performed authentically and bring divine blessings.",
//   },
//   {
//     title: "Complete Pooja Arrangements",
//     desc: "We take care of everything – from samagri to setup. You only focus on devotion while we handle all the details seamlessly.",
//   },
//   {
//     title: "Hassle-Free Online Booking",
//     desc: "Easily book a Pandit Ji from the comfort of your home with our smooth, quick, and transparent process.",
//   },
// ];

// const reasonsRight = [
//   {
//     title: "Customized Rituals for Every Occasion",
//     desc: "From Griha Pravesh to Wedding Ceremonies, we offer personalized pooja services based on traditions, region, and your required customs.",
//   },
//   {
//     title: "Auspicious Muhurat & Guidance",
//     desc: "Our experts help you choose the best muhurat, ensuring maximum divine benefit and harmony in your rituals.",
//   },
//   {
//     title: "Performed with Purity & Devotion",
//     desc: "Every ritual is conducted with proper Vedic chanting, maintaining sanctity, discipline, and devotion at every step.",
//   },
// ];

// export default function Why_Choose_Us() {
//   return (
//     <section className="relative bg-[#f6f2e7] py-20 px-6 md:px-10 overflow-hidden">
//       {/* Heading */}
//       <div className="text-center  max-w-3xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold">
//           Why Book with <span className="text-primary">Braj Pandit?</span>
//         </h2>
//         <p className="text-base md:text-lg mt-4 text-gray-700">
//           Experience the divine grace of Lord Krishna through our authentic and trusted
//           puja services
//         </p>
//       </div>

//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
//         {/* Left column */}
//         <div className="space-y-8">
//           {reasonsLeft.map((item, i) => (
//             <div key={i}>
//               <h3 className="text-xl font-semibold text-black">{item.title}</h3>
//               <p className="text-gray-700 text-sm mt-2">{item.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Center Image */}
//         <div className="relative flex-wrap flex justify-center ">
//           <div className="relative w-[350px] h-[500px] md:w-[400px] md:h-[600px] lg:w-[650px] lg:h-[450px]">
//             <Image
//               src="/assets/shivji.png"
//               alt="Lord Shiva illustration"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </div>

//         {/* Right column */}
//         <div className="space-y-8">
//           {reasonsRight.map((item, i) => (
//             <div key={i}>
//               <h3 className="text-xl font-semibold text-black">{item.title}</h3>
//               <p className="text-gray-700 text-sm mt-2">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

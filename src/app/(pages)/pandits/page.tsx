




"use client";

import { useState } from "react";
import pandits from "@/constants/pandits.json";
import { Pandit } from "@/types/pandit";
import { PanditGrid } from "@/components/layout/home/PanditCard/PanditGrid";

export default function PanditsPage() {
  const [search, setSearch] = useState("");

  const filteredPandits = (pandits as Pandit[]).filter((pandit) =>
    pandit.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex flex-col items-center w-full">

      {/* Hero Section */}
      <section className="w-full bg-white flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-16">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">

          {/* Heading */}
          <h1 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 max-w-3xl">
            Our <span className="text-[#CD3C49]">Pandit Ji</span>, Your Guide to{" "}
            <span className="text-[#F68500]">Divine Harmony</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-center text-base sm:text-lg md:text-xl text-gray-900 max-w-2xl opacity-90">
            Experience the Power of Vedic Rituals, Anytime, Anywhere. Book Expert
            Pandits for Your Sacred Ceremonies!
          </p>

          {/* Search Bar */}
          <div className="mt-6 w-full max-w-md">
            <input
              type="text"
              placeholder="Search Pandit Ji"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full 
                h-10 
                px-4 
                rounded-full 
                border border-gray-300 
                text-base 
                focus:outline-none 
                focus:ring-2 focus:ring-orange-400 
                focus:border-orange-400
              "
            />
          </div>
        </div>
      </section>

      {/* Pandit Grid Section */}
      <section className="w-full px-4 sm:px-6 lg:px-16 py-16">
        <div className="w-full max-w-[1400px] mx-auto">
          <PanditGrid pandits={filteredPandits} />
        </div>
      </section>
    </main>
  );
}










// "use client";

// import { useState } from "react";
// import pandits from "@/constants/pandits.json";
// import { Pandit } from "@/types/pandit";
// import { PanditGrid } from "@/components/layout/home/PanditCard/PanditGrid";

// export default function PanditsPage() {
//   const [search, setSearch] = useState("");

//   const filteredPandits = (pandits as Pandit[]).filter((pandit) =>
//     pandit.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <main className="flex flex-col items-center">

//       {/* Hero Section */}
//       <section
//         className="w-full flex flex-col justify-center items-center"
//         style={{
//           width: "1400px",
//           height: "373px",
//           margin: "0 auto",
//         }}
//       >
//         {/* Heading */}
//         <h1
//           style={{
//             width: "849px",
//             height: "160px",
//             fontFamily: "Lexend, sans-serif",
//             fontWeight: 700,
//             fontSize: "64px",
//             lineHeight: "100%",
//             textAlign: "center",
//             color: "#110A00",
//           }}
//         >
//           Our <span className="text-orange-500">Pandit Ji</span>, Your Guide to{" "}
//           <span className="text-red-500">Divine Harmony</span>
//         </h1>

//         {/* Subheading */}
//         <p
//           style={{
//             width: "997px",
//             height: "60px",
//             marginTop: "20px",
//             fontFamily: "Lexend, sans-serif",
//             fontWeight: 400,
//             fontSize: "24px",
//             lineHeight: "100%",
//             textAlign: "center",
//             color: "#110A00",
//             opacity: 0.9,
//           }}
//         >
//           Experience the Power of Vedic Rituals, Anytime, Anywhere. Book Expert
//           Pandits for Your Sacred Ceremonies!
//         </p>


//         {/* Search Bar */}
//         <div
//           style={{
//             width: "440px",
//             height: "40px",
//             marginTop: "24px",
            
          
            
//           }}
//         >



//           <input
//             type="text"
//             placeholder="Pandit Ji"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             style={{
//               width: "100%",
//               height: "100%",
//               // border:"Stroke/Border",
//               borderRadius: "9999px", // full radius
//               border: "1px solid #D9D9D9",
//               background: "#FFFFFF",
//               padding: "0 16px",
//               fontFamily: "Lexend, sans-serif",
//               fontSize: "16px",
//               outline: "none",
//             }}
//           />
//         </div>
//       </section>







//       <section className="max-w-[1400px] w-full px-6 py-16">
//         <PanditGrid pandits={filteredPandits} />
//       </section>
//     </main>
//   );
// }






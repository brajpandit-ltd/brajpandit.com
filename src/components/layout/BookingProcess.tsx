// "use client";

// import { Card } from "@/components/ui";
// import { CheckCircle2, ArrowRightCircle } from "lucide-react";
// import { bookingSteps } from "@/constants/static";
// import Link from "next/link";

// const BookingProcess = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-orange-50">
//       <div className="container mx-auto px-6">
//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             How to{" "}
//             <span className="text-primary drop-shadow-md">Book Your Puja?</span>
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
//             A simple and seamless booking process to connect you with divine
//             blessings.
//           </p>
//         </div>

//         {/* Steps */}
//         <div className="max-w-5xl mx-auto space-y-10">
//           {bookingSteps.map((step, index) => (
//             <Card
//               key={index}
//               className="p-6 md:p-8 shadow-lg border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 group bg-white/90 backdrop-blur"
//             >
//               <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
//                 {/* Step Icon & Number */}
//                 <div className="relative flex-shrink-0">
//                   <div className="w-16 h-16 bg-gradient-to-tr from-primary to-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
//                     <step.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center shadow-md">
//                     <span className="text-sm font-bold text-gray-600">
//                       {index + 1}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Step Content */}
//                 <div className="flex-1">
//                   <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
//                     {step.title}
//                   </h3>
//                   <p className="text-gray-600 text-base leading-relaxed">
//                     {step.description}
//                   </p>
//                 </div>

//                 {/* Step Illustration or Fallback Icon */}
//                 <div className="hidden md:block">
//   <CheckCircle2 className="w-8 h-8 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
// </div>

//               </div>
//             </Card>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">

//           <Link href="/services/e-puja">
//           <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:shadow-lg hover:bg-primary/90 transition">
//             Start Booking
//             <ArrowRightCircle className="w-5 h-5" />
//           </button>

//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookingProcess;


"use client";

// import { Card } from "@/components/ui";
// import { CheckCircle2, ArrowRightCircle } from "lucide-react";
// import { bookingSteps } from "@/constants/static";
import Image from "next/image";
// import Link from "next/link";

const BookingProcess = () => {
  return (
    <div className="flex justify-center items-center w-full px-4">
      <div className="w-full max-w-5xl">
        <Image
          src="/assets/booking process21.png"
          // src="/assets/booking process.png"
          alt="process"
          width={1600}
          height={800}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      
    </div>
    
  );
};

export default BookingProcess;

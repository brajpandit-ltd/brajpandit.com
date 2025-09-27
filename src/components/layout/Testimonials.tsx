// import { Card } from "@/components/ui";
// import { Star, Quote } from "lucide-react";
// import { testimonials } from "@/constants/static";

// const Testimonials = () => {
//   return (
//     <section className="py-20 bg-gradient-sacred">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//             What Our <span className="bg-primary">Devotees Say</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Hear from families who experienced divine blessings through our
//             authentic puja services
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <Card
//                 key={index}
//                 className="p-8 shadow-sacred hover:shadow-divine transition-all duration-300 group relative overflow-hidden"
//               >
//                 {/* Quote Icon */}
//                 <div className="absolute top-4 right-4 opacity-20">
//                   <Quote className="w-12 h-12 text-primary" />
//                 </div>

//                 <div className="flex items-start gap-6">
//                   {/* Avatar */}
//                   <div className="w-16 h-16 bg-gradient-divine rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
//                     {testimonial.image}
//                   </div>

//                   <div className="flex-1">
//                     {/* Rating */}
//                     <div className="flex gap-1 mb-4">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <Star
//                           key={i}
//                           className="w-5 h-5 fill-primary text-primary"
//                         />
//                       ))}
//                     </div>

//                     {/* Message */}
//                     <p className="text-foreground leading-relaxed mb-6 text-lg">
//                       &quot;{testimonial.message}&quot;
//                     </p>

//                     {/* Name and Location */}
//                     <div>
//                       <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
//                         {testimonial.name}
//                       </h4>
//                       <p className="text-muted-foreground">
//                         {testimonial.location}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

"use client";

import React from "react";
import Image from "next/image";

type Testimonial = {
  id: string;
  name: string;
  avatar: string;
  quote: string;
  role?: string;
};

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Arjun Singh",
    avatar: "/assets/testimonials/test6.jpg",
    role: "Devotee",
    quote:
      "We believe astrology is pure science, and we aim to create such a social impact. The Pandit Ji performed the ceremony with devotion and clarity. Very satisfied!",
  },
  {
    id: "t2",
    name: "Raman Verma",
    avatar: "/assets/testimonials/test2.webp",
    role: "Devotee",
    quote:
      "Excellent experience — timely, respectful and deeply spiritual. The whole family felt the positive energy after the ritual.",
  },
  {
    id: "t3",
    name: "Madhu sharma",
    avatar: "/assets/testimonials/test1.webp",
    role: "Devotee",
    quote:
      "Professional Pandit, clear explanation of steps and meaningful chants. The service was well organized and sincere.",
  },
  {
    id: "t4",
    name: "Priya Sharma",
    avatar: "/assets/testimonials/test5.jpg",
    role: "Devotee",
    quote:
      "Beautifully conducted puja with all samagri provided. Felt very authentic and calming — highly recommended.",
  },
  {
    id: "t5",
    name: "vivek Rao",
    avatar: "/assets/testimonials/test3.webp",
    role: "Devotee",
    quote:
      "The Panditji was humble and precise in every ritual step. The booking & communication were smooth as well.",
  },
  {
    id: "t6",
    name: "Vikas Mehra",
    avatar: "/assets/testimonials/test4.jpg",
    role: "Devotee",
    quote:
      "I was looking for an authentic ceremony — this was perfect. Great experience for the entire family.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 md:px-12 py-20 bg-amber-100">
      <div className="max-w-7xl mx-auto">
        {/* Top heading + description */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Our <span className="text-primary">Happy Devotees</span>
          </h2>
          <p className="text-base md:text-md max-w-2xl mt-3">
            Discover heartfelt testimonials from devotees about their divine
            experiences — real stories of calm, blessings, and spiritual
            fulfillment after their pujas and rituals.
          </p>
        </div>

        {/* Scrollable row */}
        <div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
          role="list"
        >
          {testimonials.map((t) => (
            <Testimonial key={t.id} t={t} />
          ))}
        </div>

        {/* hint */}
        <div className="mt-2 text-sm text-gray-400 text-right hidden sm:block">
          Scroll to see more
        </div>
      </div>
    </section>
  );
}

const Testimonial = ({ t }: { t: Testimonial }) => {
  return (
    <div
      role="listitem"
      className="flex flex-col items-center w-full min-w-[273px] h-[260px] p-5 rounded-lg bg-text-white"
    >
      {/* avatar */}
      <Image
        src={t.avatar}
        alt={t.name}
        width={66}
        height={66}
        className="w-[66px] h-[66px] object-cover rounded-full block"
      />

      {/* content */}
      <h4 className="text-sm font-medium text-center mt-2 mb-2">{t.name}</h4>
      <p className="text-xs">{t.quote}</p>
    </div>
  );
};

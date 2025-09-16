"use client";

import Image from "next/image";
import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { usePathname } from "next/navigation";

interface HeroSectionProps {
  onBookPanditClick?: () => void;
  onSeeServicesClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onBookPanditClick,
  onSeeServicesClick,
}) => {
  const pathname = usePathname();

  useEffect(() => {
    scroll.scrollToTop({ duration: 0 });
  }, [pathname]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-white dark:bg-black overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/home-hero.jpg"
        alt="Hero Background"
        fill
        className="object-cover object-center opacity-80 z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Content */}
      <div className="relative z-20 p-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
          ब्रज की भक्ति, अब डिजिटल रूप में 🌸
        </h1>
        <p className="mt-4 text-lg md:text-xl text-orange-100">
          अपने जीवन को आध्यात्मिक ऊर्जा से भरें — पंडित बुक करें, पूजा कराएं, और
          भक्ति उत्पाद खरीदें।
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBookPanditClick}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            पंडित बुक करें
          </button>
          <button
            onClick={onSeeServicesClick}
            className="bg-white hover:bg-gray-200 text-orange-700 font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            सेवाएं देखें
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

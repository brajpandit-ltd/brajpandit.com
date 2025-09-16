// ✅ app/(user)/home/page.tsx

import HeroSection from "@/components/layout/home/HeroSection";
import HomeProducts from "@/components/layout/home/HomeProducts";
import VerifiedPanditjis from "@/components/layout/home/VerifiedPanditjis";
import LiveBhajans from "@/components/layout/home/LiveBhajans";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 px-4 md:px-12">
      <HeroSection />
      <HomeProducts />
      <VerifiedPanditjis />
      <LiveBhajans />
    </div>
  );
}

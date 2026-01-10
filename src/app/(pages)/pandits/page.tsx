import { Metadata } from "next";
import pandits from "@/constants/pandits.json";
import { Pandit } from "@/types/pandit";
import PanditCard from "./PanditCard";
import GoogleAd1 from "@/components/google-ads/GoogleAds1";

export const metadata: Metadata = {
  title: "Pandits | Braj Pandit Ji",
  description:
    "Book your Pandit Ji for all your religious needs in Braj - Mathura, Vrindavan, and surrounding areas.",
  keywords: [
    "Braj Pandit Ji",
    "Pandit Ji Booking",
    "Hindu Ceremonies",
    "Online Pooja Booking",
    "Vedic Pujas",
    "Mathura Pandit Ji",
    "Vrindavan Pandit Ji",
    "Religious Services",
    "Puja Services",
  ],
  openGraph: {
    title: "Pandits | Braj Pandit Ji",
    description:
      "Book your Pandit Ji for all your religious needs in Braj - Mathura, Vrindavan, and surrounding areas.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Braj Pandit Ji - Your Trusted Platform for Sacred Hindu Ceremonies",
      },
    ],
    siteName: "Braj Pandit Ji",
  },
  twitter: {
    title: "Pandits | Braj Pandit Ji",
    description:
      "Book your Pandit Ji for all your religious needs in Braj - Mathura, Vrindavan, and surrounding areas.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Braj Pandit Ji - Your Trusted Platform for Sacred Hindu Ceremonies",
      },
    ],
  },
};

async function PanditsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const searchQuery = params?.search ?? "";

  const filteredPandits = (pandits as Pandit[]).filter((pandit) =>
    pandit.name.toLowerCase().includes(searchQuery?.toString()?.toLowerCase())
  );

  return (
    <main className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-white flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-16">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
          <h1 className="text-center font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 max-w-3xl">
            Our <span className="text-[#CD3C49]">Pandit Ji</span>, Your Guide to{" "}
            <span className="text-[#F68500]">Divine Harmony</span>
          </h1>
          <p className="mt-6 text-center text-base sm:text-lg md:text-xl text-gray-900 max-w-2xl opacity-90">
            Experience the Power of Vedic Rituals, Anytime, Anywhere. Book
            Expert Pandits for Your Sacred Ceremonies!
          </p>
        </div>
      </section>

      {/* Pandit Cards Grid */}
      <section className="w-full px-4 sm:px-6 lg:px-16 py-10">
        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-6 
            justify-items-center 
            w-full 
            max-w-[1400px] 
            mx-auto
          "
        >
          {filteredPandits.map((pandit) => (
            <PanditCard key={pandit.id} pandit={pandit} />
          ))}
        </div>
      </section>

      <GoogleAd1 slot="7350714271" />
    </main>
  );
}

export default PanditsPage;

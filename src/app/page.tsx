import Image from "next/image";
import { PersonalisedPujas, UpcommingPujas } from "@/components/layout/home";
import {
  BookingProcess,
  C2APrefooter,
  FAQs,
  Testimonials,
  WhyChooseUs,
} from "@/components/layout";
import { Button } from "@/components/common";
import Link from "next/link";
// import {VerifiedPanditJis} from "@/components/layout/home";

import VerifiedPanditsSection from "@/components/layout/home/PanditCard/VerifiedPandits";
import Why_Choose_Us from "@/components/layout/home/Why_Choose_Us";

export const metadata = {
  title: "Braj Pandit Ji",
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
    title: "Braj Pandit Ji",
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
    card: "summary_large_image",
    title: "Braj Pandit Ji",
    description:
      "Book your Pandit Ji for all your religious needs in Braj - Mathura, Vrindavan, and surrounding areas.",
    images: ["/assets/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/shortcut-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: "https://brajpandit.com/",
    languages: {
      "en-US": "https://brajpandit.com",
      "hi-IN": "https://brajpandit.com/hi",
    },
  },
};

export default async function HomePage() {
  return (
    <>
      {/* Hero Section (Static - No hooks/events) */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 md:py-40">
        <Image
          src="/assets/home-hero-light.jpg"
          alt="Braj Pandit Home Hero"
          fill
          priority
          loading="eager"
          className="cover-image -z-1"
        />

        <div className="relative z-10 mx-4 md:max-w-[900px] md:mx-auto">
          <h4 className="text-sm md:text-base font-normal">
            Welcome to Braj Pandit
          </h4>
          <h1 className="text-2xl md:text-6xl font-bold">
            Your <span className="text-primary">Trusted</span> Platform for
            Sacred <span className="text-secondary">Hindu Ceremonies</span>
          </h1>

          <p className="text-base md:text-xl font-medium mt-3 md:mt-6">
            Experience the Power of Vedic Rituals, Anytime, Anywhere. Book
            Expert Pandits for Your Sacred Ceremonies!
          </p>

          <div className="flex items-center justify-center flex-col md:flex-row mt-8 gap-6 md:gap-14">


            <Link href="/services/e-puja" scroll={true}>
  <Button label="Book Your Pooja" variant="primary" />
</Link>


             <Link  href="/services">
            <Button label="See All Pooja Services" variant="default" />

           
          </div>
        </div>
      </section>

      {/* VEDIC BRAJ-PANDIT UPCOMING POOJAS */}
      <UpcommingPujas />

      {/* VEDIC Braj Pandit'S PERSONALIZE POOJA */}
      <PersonalisedPujas />

      <VerifiedPanditsSection />

      {/* <VerifiedPanditJis />  */}

      {/* <LiveBhajans /> */}

      <BookingProcess />
      {/* <WhyChooseUs /> */}

      <Why_Choose_Us/>
      <Testimonials />
      <FAQs />
      <C2APrefooter />

      {/* Dynamic Sections */}

      {/* <HomeProducts /> */}
    </>
  );
}

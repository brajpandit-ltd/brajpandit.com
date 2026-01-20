import type { Metadata } from "next";
import React from "react";
import NaamJapCounter from "@/components/naam-jap/NaamJapCounter";
import JapStatistics from "@/components/naam-jap/JapStatistics";
import StreakChallengeSection from "@/components/naam-jap/StreakChallengeSection";
import AboutSection from "@/components/naam-jap/AboutSection";

export const metadata: Metadata = {
  title: "Radha Naam Jap",
  description: "Radha Naam Jap Daily and Build Your Spiritual Streak",
  openGraph: {
    title: "Radha Naam Jap",
    description: "Radha Naam Jap Daily and Build Your Spiritual Streak",
  },
  twitter: {
    title: "Radha Naam Jap",
    description: "Radha Naam Jap Daily and Build Your Spiritual Streak",
  },
};

const NaamJapPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 to-white">
      <main className="container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-2">
            राधा नाम जप
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Counter Section */}
        <NaamJapCounter />

        <div className="w-full mt-8">
          <JapStatistics days={30} />
        </div>

        {/* Streak & Challenge Section */}
        <div className="w-full mt-12 mb-12">
          <StreakChallengeSection />
        </div>

        {/* About Section */}
        <div className="w-full mt-16">
          <AboutSection />
        </div>
      </main>
    </div>
  );
};

export default NaamJapPage;

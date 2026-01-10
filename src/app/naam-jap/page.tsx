import type { Metadata } from "next";
import React from "react";
import NaamJapCounter from "@/components/naam-jap/NaamJapCounter";
import StreakChallengeSection from "@/components/naam-jap/StreakChallengeSection";
import AboutSection from "@/components/naam-jap/AboutSection";

export const metadata: Metadata = {
    title: "राधा नाम जप | Radha Naam Jap Counter",
    description: "Digital Radha Naam Jap Counter with stats, timer, and streak tracking. Chant daily and join the challenge.",
};

const NaamJapPage = () => {
    return (
        <div className="min-h-screen bg-white">
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

                {/* Sections Below */}
                <div className="w-full space-y-12 mt-16">
                    <StreakChallengeSection />
                    <AboutSection />
                </div>
            </main>
        </div>
    );
};

export default NaamJapPage;

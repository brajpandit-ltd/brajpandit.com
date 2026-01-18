"use client";

import type { Metadata } from "next";
import React, { useState, useEffect } from "react";
import NaamJapCounter from "@/components/naam-jap/NaamJapCounter";
import JapStatistics from "@/components/naam-jap/JapStatistics";
import StreakChallengeSection from "@/components/naam-jap/StreakChallengeSection";
import AboutSection from "@/components/naam-jap/AboutSection";

const NaamJapPage = () => {
    const [username, setUsername] = useState<string>("");
    const [mobile, setMobile] = useState<string>("");

    // Load username and mobile from localStorage
    useEffect(() => {
        const storedUsername = localStorage.getItem("naamjap_username");
        const storedMobile = localStorage.getItem("naamjap_mobile");

        if (storedUsername) setUsername(storedUsername);
        if (storedMobile) setMobile(storedMobile);
    }, []);

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

                {/* Statistics Section */}
                <div className="w-full max-w-2xl mt-12">
                    <JapStatistics username={username} mobile={mobile} days={7} />
                </div>

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


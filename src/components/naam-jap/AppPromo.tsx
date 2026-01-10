import { Button } from "@/components/common";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGooglePlay } from "react-icons/fa";

const AppPromo = () => {
    return (
        <div className="w-full max-w-4xl mx-auto my-16 px-4">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 justify-between">
                <div className="flex-1 space-y-6 relative z-10 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Carry Your Spiritual Practice Everywhere 📱
                    </h2>
                    <p className="text-orange-50 text-lg">
                        Download our verified mobile app to sync your japa, compete on leaderboards, and never lose your streak.
                    </p>

                    <ul className="space-y-3 text-sm md:text-base font-medium inline-block text-left">
                        <li className="flex items-center gap-2">
                            <span className="bg-white text-orange-600 rounded-full p-1 text-xs">✓</span> Cloud Backup of Japa
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="bg-white text-orange-600 rounded-full p-1 text-xs">✓</span> Global Leaderboard
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="bg-white text-orange-600 rounded-full p-1 text-xs">✓</span> Advanced Statistics
                        </li>
                    </ul>

                    <div className="pt-4 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            href="brajpandit.com"
                            target="_blank"
                            className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors shadow-lg w-fit mx-auto md:mx-0"
                        >
                            <FaGooglePlay className="text-2xl" />
                            <div className="text-left leading-tight">
                                <div className="text-[10px] uppercase">Get it on</div>
                                <div className="text-lg font-bold font-sans">Coming soon</div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Visual Mockup - CSS only if no image available */}
                <div className="relative w-64 h-af-auto md:w-80 flex-shrink-0 z-10">
                    {/* Using a generic placeholder for phone mockup if real image not available. 
                Ideally we would use a real screenshot here. */}
                    <div className="aspect-[9/18] bg-white rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden relative mx-auto">
                        <div className="w-full h-full bg-orange-50 flex flex-col items-center justify-center p-4">
                            <div className="w-20 h-20 rounded-full border-4 border-orange-500 flex items-center justify-center">
                                <span className="text-3xl font-bold text-orange-600">108</span>
                            </div>
                            <div className="mt-8 space-y-2 w-full">
                                <div className="h-2 w-3/4 bg-gray-200 rounded mx-auto"></div>
                                <div className="h-2 w-1/2 bg-gray-200 rounded mx-auto"></div>
                            </div>
                        </div>
                        {/* Notch */}
                        <div className="absolute top-0 w-32 h-6 bg-gray-900 rounded-b-xl left-1/2 -translate-x-1/2"></div>
                    </div>
                </div>

                {/* Decorative circles */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-yellow-300 opacity-20 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default AppPromo;

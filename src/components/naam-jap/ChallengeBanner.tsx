import Link from "next/link";
import React from "react";
import { Button } from "@/components/common";

const ChallengeBanner = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-12 bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-6 shadow-sm relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="animate-pulse text-red-500">🔥</span>
          <h3 className="text-lg font-bold text-orange-800">
            CHALLENGE IS LIVE!
          </h3>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Radha Jap Streak Challenge 2026 🔥
        </h2>

        <p className="text-gray-700 mb-6">
          Jap daily 108 Radha naam and get a chance to win prizes every month.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/60 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">
              📅 Starts Jan 1, 2026
            </h4>
            <h4 className="font-bold text-orange-700 mb-2">
              💰 Year End Prizes *
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex justify-between">
                <span>🥇 1st:</span>{" "}
                <span className="font-medium">₹10,000</span>
              </li>
              <li className="flex justify-between">
                <span>🥈 2nd:</span> <span className="font-medium">₹5,000</span>
              </li>
              <li className="flex justify-between">
                <span>🥉 3rd:</span> <span className="font-medium">₹3,000</span>
              </li>
              <li className="flex justify-between">
                <span>🏅 4th–13th:</span>{" "}
                <span className="font-medium">₹500 each</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/60 p-4 rounded-lg">
            <h4 className="font-bold text-orange-700 mb-2 mt-8 md:mt-0">
              🏆 Monthly prizes *
            </h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex justify-between">
                <span>🥇 1st:</span> <span className="font-medium">₹500</span>
              </li>
              <li className="flex justify-between">
                <span>🥈 2nd:</span> <span className="font-medium">₹300</span>
              </li>
              <li className="flex justify-between">
                <span>🥉 3rd:</span> <span className="font-medium">₹200</span>
              </li>
              <li className="flex justify-between">
                <span>🏅 4th–8th:</span>{" "}
                <span className="font-medium">₹100 each</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          {/* Note: In a real app this might link to a form or login */}
          <div className="w-full md:w-auto">
            <Button
              variant="primary"
              label="Join Now Streak Challenge"
              className="w-full md:w-auto bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 border-none shadow-lg transform hover:-translate-y-0.5 transition-all text-white font-bold py-3 px-8 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
};

export default ChallengeBanner;

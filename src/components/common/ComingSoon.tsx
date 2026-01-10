import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f5e9d7] to-[#e2c7a7]">
      <div className="bg-white/80 rounded-xl shadow-lg p-10 flex flex-col items-center">
        <svg
        
          className="w-16 h-16 text-[#bfa05a] mb-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6l4 2"
          />
        </svg>
        <h1 className="text-3xl font-bold text-[#bfa05a] mb-2">Coming Soon</h1>
        <p className="text-gray-700 text-center max-w-md mb-4">
          We are working hard to bring you something amazing. Stay tuned for
          updates!
        </p>
        <div className="flex space-x-3 mt-4">
          <button className="px-6 py-2 rounded bg-[#bfa05a] text-white font-semibold shadow hover:bg-[#a88c4a] transition">
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

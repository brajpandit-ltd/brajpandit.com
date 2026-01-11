import React from "react";

const StreakChallengeSection = () => {
  return (
    <section
      id="streak-challenge"
      className="w-full max-w-4xl mx-auto py-12 px-4"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
          🔥 Radha Jap Streak Challenge 2026 🔥
        </h2>
        <p className="text-lg text-gray-700 font-medium">
          Jap 108 Radha Naam daily and build your spiritual streak
        </p>
      </div>

      <div className="space-y-8">
        {/* How to Enter */}
        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🎯</span> How to Join the Challenge
          </h3>
          <ul className="space-y-3 font-medium text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">•</span>
              <span>Start doing Radha Naam Jap daily</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">•</span>
              <span>Complete minimum 108 japa (1 mala) each day</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">•</span>
              <span>
                Your streak starts automatically from your first valid day
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">•</span>
              <span>Maintain consistency to increase your streak</span>
            </li>
          </ul>
        </div>

        {/* Rules */}
        <div className="bg-orange-50 rounded-2xl shadow-sm border border-orange-200 p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>⚠️</span> Important Rules
          </h3>
          <ul className="space-y-3 font-medium text-gray-800">
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">•</span>
              <span>
                Minimum 108 japa required daily to count toward streak
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">•</span>
              <span>Missing even one day resets current streak to 0</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">•</span>
              <span>Only one valid session per day counts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">•</span>
              <span>Ranking is based on BEST streak, not current streak</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 mt-1">•</span>
              <span>
                Tie-breakers: earlier streak start date, then random selection
              </span>
            </li>
          </ul>
        </div>

        {/* Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Year End */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-orange-700 mb-4 flex items-center gap-2">
              <span>🏆</span> Year End Prizes
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 font-medium">
              <li className="flex justify-between items-center border-b border-gray-50 pb-2">
                <span>🥇 1st:</span>
                <span className="text-orange-600 font-bold">₹10,000</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-50 pb-2">
                <span>🥈 2nd:</span>
                <span className="text-orange-600 font-bold">₹5,000</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-50 pb-2">
                <span>🥉 3rd:</span>
                <span className="text-orange-600 font-bold">₹3,000</span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span>🏅 4th–13th:</span>
                <span className="text-gray-600">₹500 each</span>
              </li>
            </ul>
          </div>

          {/* Monthly */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-orange-700 mb-4 flex items-center gap-2">
              <span>🏆</span> Monthly Prizes
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 font-medium">
              <li className="flex justify-between items-center border-b border-gray-50 pb-2">
                <span>🥇 1st:</span>
                <span className="text-orange-600 font-bold">₹500</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-50 pb-2">
                <span>🥈 2nd:</span>
                <span className="text-orange-600 font-bold">₹300</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-50 pb-2">
                <span>🥉 3rd:</span>
                <span className="text-orange-600 font-bold">₹200</span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span>🏅 4th–8th:</span>
                <span className="text-gray-600">₹100 each</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>📅</span> Challenge Timeline
          </h3>
          <div className="space-y-3 font-medium text-gray-700">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-gray-50 px-4 py-2 rounded-lg flex-1">
                <span className="text-xs uppercase text-gray-500 block mb-1">
                  Start Date
                </span>
                <span className="font-bold text-gray-900">
                  1st January 2026
                </span>
              </div>
              <div className="bg-gray-50 px-4 py-2 rounded-lg flex-1">
                <span className="text-xs uppercase text-gray-500 block mb-1">
                  End Date
                </span>
                <span className="font-bold text-gray-900">
                  31st December 2026
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 italic pt-2">
              Monthly winners announced on the 1st of every month.
              <br />
              Year-end winners announced on 1st January 2027.
            </p>
          </div>
        </div>

        {/* Devotional Note */}
        <div className="bg-yellow-50 rounded-xl p-6 text-center border border-yellow-100">
          <h4 className="font-bold text-yellow-800 mb-2">🙏 Note</h4>
          <p className="text-yellow-900 text-sm leading-relaxed">
            The true purpose of this challenge is spiritual discipline and
            devotion. Prizes are a blessing, but the real reward is consistency
            in Radha Naam Jap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StreakChallengeSection;

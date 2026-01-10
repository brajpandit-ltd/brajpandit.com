import React from "react";

const AboutSection = () => {
    return (
        <div className="w-full max-w-4xl mx-auto mt-16 px-4">
            <div className="text-center mb-8">
                <span className="text-orange-600 font-medium tracking-wide uppercase text-sm">Spiritual Practice</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                    🌸 About Radha Naam Jap
                </h2>
                <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                    Chanting the holy name of <span className="font-semibold text-orange-700">Radha</span> is a profound spiritual discipline that brings peace, purity, and divine connection to the soul. In the hustle of modern life, taking a moment to connect with the divine is essential for inner tranquility.
                </p>

                <p>
                    This digital <strong>Naam Jap Counter</strong> is designed to aid your spiritual journey, allowing you to maintain your daily vows (vrat) of chanting wherever you are. Whether you are at home, traveling, or taking a short break, you can continue your meditation without the worry of losing count.
                </p>

                <p>
                    Consistency is key in Bhakti Yoga. By tracking your daily japa, you build a habit of remembrance (Smaranam), gradually purifying the heart and awakening the dormant love for the Divine Couple, Shri Radha Krishna.
                </p>

                <div className="flex flex-col md:flex-row gap-6 mt-8 p-6 bg-orange-50 rounded-xl border border-orange-100">
                    <div className="flex-1">
                        <h3 className="font-bold text-orange-800 mb-2">🧘 Focus</h3>
                        <p className="text-sm text-gray-600">Eliminate distractions and center your mind on the sound vibration of the holy name.</p>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-orange-800 mb-2">📅 Consistency</h3>
                        <p className="text-sm text-gray-600">Track your streaks and daily progress to maintain a steady spiritual diet.</p>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-orange-800 mb-2">☮️ Peace</h3>
                        <p className="text-sm text-gray-600">Experience the calming effect of rhythmic chanting and meditative counting.</p>
                    </div>
                </div>

                <p className="text-center italic text-gray-600 pt-4">
                    "In this Age of Kali, there is no other way, no other way, no other way than the chanting of the Holy Name."
                    <br />— <span className="text-sm">Brihan-naradiya Purana</span>
                </p>
            </div>
        </div>
    );
};

export default AboutSection;

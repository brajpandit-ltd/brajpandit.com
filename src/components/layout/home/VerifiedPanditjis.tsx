import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Pandit {
  id: string;
  name: string;
  expertise: string;
  experience: number;
  bio: string;
  status: string;
  imageUrl: string;
  rating?: number;
}

const VerifiedPanditJis: React.FC = () => {
  const loading = false;

  const dummyPandits: Pandit[] = Array.from({ length: 8 }, (_, i) => ({
    id: `dummy-${i}`,
    name: `Pandit Ji ${i + 1}`,
    expertise: "Vedic Rituals, Astrology",
    experience: Math.floor(Math.random() * 20) + 1,
    bio: "Highly experienced in Vedic rituals and Sanskrit chanting.",
    status: "approved",
    imageUrl: "/default-pandit.png",
    rating: +(Math.random() * 5).toFixed(1),
  }));

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 ">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-orange-700 dark:text-orange-400 mb-2">
          🙏 home.verified_panditjis
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          home.verified_panditjis_desc
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-[260px] bg-orange-100 dark:bg-gray-700 animate-pulse rounded-xl"
              />
            ))
          : dummyPandits.map((pandit) => (
              <div
                key={pandit.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Image
                  src={pandit.imageUrl}
                  alt={pandit.name}
                  width={400}
                  height={260}
                  className="w-full h-[200px] object-cover"
                />

                <div className="p-4 space-y-1">
                  <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300">
                    {pandit.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {pandit.expertise}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {pandit.experience} years experience
                  </p>
                  {pandit.rating !== undefined && (
                    <p className="text-sm text-yellow-500 font-medium">
                      ⭐ {pandit.rating}/5
                    </p>
                  )}
                </div>

                <div className="px-4 pb-4">
                  <Link
                    href={`/pandits/${pandit.id}`}
                    className="inline-block mt-2 text-sm font-medium text-orange-600 hover:underline"
                  >
                    View Profile →
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default VerifiedPanditJis;

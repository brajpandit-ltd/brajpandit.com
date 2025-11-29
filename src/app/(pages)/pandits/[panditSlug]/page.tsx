import pandits from "@/constants/pandits.json";
import { Pandit } from "@/types/pandit";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import Button from "@/components/common/Button";
import { IoIosShareAlt } from "react-icons/io";
import { notFound } from "next/navigation";
import GoogleAd1 from "@/components/google-ads/GoogleAds1";

export default function PanditDetailPage({ params }: { params: any }) {
  const panditSlug = params?.panditSlug;

  const pandit = (pandits as Pandit[]).find((p) => p.slug === panditSlug);

  if (!pandit) return notFound();

  // Dummy review data
  const reviews = [
    {
      name: "Rahul Sharma",
      date: "20-09-2025",
      rating: 5,
      text: "Had a wonderful session, very knowledgeable and kind.",
    },
    {
      name: "Sneha Verma",
      date: "19-09-2025",
      rating: 5,
      text: "The guidance was clear and helpful, highly recommend!",
    },
    {
      name: "Amit Singh",
      date: "18-09-2025",
      rating: 5,
      text: "Amazing experience, felt very comfortable throughout.",
    },
  ];

  return (
    <section className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8 text-center md:text-left">
        {/* Profile Image */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border shadow">
          <Image
            src={pandit.image}
            alt={pandit.name}
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Profile Content */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-semibold">{pandit.name}</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            {pandit.experience} of Experience
          </p>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            {pandit.specialization}
          </p>

          {/* Rating */}
          <div className="flex justify-center md:justify-start items-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"
                fill="currentColor"
              />
            ))}
            <span className="ml-2 text-sm sm:text-base font-semibold">5.0</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start">
            <Link
              href={`/pandits/${pandit.slug}/book`}
              className="w-full sm:w-auto"
            >
              <Button
                label="Book Your Session"
                variant="primary"
                size="small"
                className="rounded-full w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white border-none"
              />
            </Link>

            <Link
              href="https://wa.me/918595009640"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                label="at whatsapp"
                icon={<IoIosShareAlt color="green" />}
                variant="default"
                size="small"
                className="text-green-600"
              />
            </Link>
          </div>
        </div>
      </div>

      <GoogleAd1 slot="7350714271" />

      {/* About Me Section */}
      <div className="mt-14">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center md:text-left">
          About Me
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
          {pandit.aboutMe}
        </p>
      </div>

      <GoogleAd1 slot="7350714271" />

      {/* Reviews Section */}
      <div className="mt-14 mb-20">
        <h2 className="text-lg sm:text-xl font-semibold mb-6 text-center md:text-left">
          Reviews & Ratings
        </h2>
        <div className="space-y-5">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="border p-4 sm:p-5 rounded-md shadow-sm bg-gray-50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <span className="font-semibold text-sm sm:text-base">
                  {review.name}
                </span>
                <span className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-0">
                  {review.date}
                </span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-600 mt-3">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <GoogleAd1 slot="7350714271" />
    </section>
  );
}

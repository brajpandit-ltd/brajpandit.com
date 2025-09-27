"use client";

import Image from "next/image";

export default function Why_Choose_Us() {
  return (
    <>
      <div className="bg-[#f6f2e7] pt-25 container mx-auto px-6 relative z-10 pb-1">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why Book with <span className="text-primary">Braj Pandit?</span>
          </h2>
          <p className="text-base md:text-md max-w-2xl mx-auto mt-3">
            Experience the divine grace of Lord Krishna through our authentic
            and trusted puja services
          </p>
        </div>
      </div>

      <section className="relative px-4 md:px-10 py-40 bg-[#f6f2e7] overflow-hidden pt-10">
        {/* Background Image */}
        <div className="absolute inset-0 flex justify-center items-center pt-40">
          <Image
            src="/assets/shivji.png"
            alt="Lord Shiva illustration"
            fill
            className="object-contain pointer-events-none "
            priority
          />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 z-10">
          {/* Left Side */}
          <div className="space-y-8 text-left md:pr-45">
            <div>
              <h3 className="text-xl font-semibold text-black">
                Authentic & Verified Pandits
              </h3>
              <p className="text-gray-700 text-sm">
                Our expert and verified Pandits follow Vedic traditions with
                precision, ensuring your rituals are performed authentically and
                bring divine blessings.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Complete Pooja Arrangements
              </h3>
              <p className="text-gray-700 text-sm">
                We take care of everything – from samagri to setup. You only
                focus on devotion while we handle all the details seamlessly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Hassle-Free Online Booking
              </h3>
              <p className="text-gray-700 text-sm">
                Easily book a Pandit Ji from the comfort of your home with our
                smooth, quick, and transparent process.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-8 text-left md:pl-45">
            <div>
              <h3 className="text-xl font-semibold text-black">
                Customized Rituals for Every Occasion
              </h3>
              <p className="text-gray-700 text-sm">
                From Griha Pravesh to Wedding Ceremonies, we offer personalized
                pooja services based on traditions, region, and your required
                customs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Auspicious Muhurat & Guidance
              </h3>
              <p className="text-gray-700 text-sm">
                Our experts help you choose the best muhurat, ensuring maximum
                divine benefit and harmony in your rituals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Performed with Purity & Devotion
              </h3>
              <p className="text-gray-700 text-sm">
                Every ritual is conducted with proper Vedic chanting,
                maintaining sanctity, discipline, and devotion at every step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

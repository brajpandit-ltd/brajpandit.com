"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Clay Diyas",
    image: "/assets/pujas/diya.jpg",
    price: "₹199",
  },
  {
    id: 2,
    name: "Shivji Idol",
    image: "/assets/pujas/shivji.png",
    price: "₹499",
  },
  {
    id: 3,
    name: "Bhagwat Gita Book",
    image: "/assets/pujas/bhagwat.jpg",
    price: "₹299",
  },
  {
    id: 4,
    name: "Sacred Havan Kit",
    image: "/assets/pujas/havan.gif",
    price: "₹799",
  },
  {
    id: 5,
    name: "Marriage Puja Kit",
    image: "/assets/pujas/marriage.jpg",
    price: "₹999",
  },
  {
    id: 6,
    name: "Palmistry Guide",
    image: "/assets/pujas/palmistry.jpg",
    price: "₹349",
  },
];

export default function BrajShopPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#fff5dc] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug md:leading-tight">
              Welcome to <span className="text-red-600">Braj Shop</span>
            </h1>
            <p className="text-gray-700 text-base sm:text-lg max-w-lg mx-auto md:mx-0">
              Discover sacred items from Braj – Diyas, Idols, Puja Samagri and
              more. Bring divine blessings into your home with authentic
              spiritual products.
            </p>
            <div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg transition">
                Explore Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/assets/temple.jpg"
              alt="Braj Shop Temple"
              width={450}
              height={450}
              className="object-contain w-64 sm:w-80 md:w-[400px] lg:w-[500px] h-auto rounded-xl shadow"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Our Spiritual Collection
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-[#fff5dc] rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
              >
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-red-600 font-bold text-sm sm:text-base mt-1">
                  {product.price}
                </p>
                <Link
                  href="#"
                  className="mt-3 inline-block bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm px-4 py-2 rounded-full shadow transition"
                >
                  Buy Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

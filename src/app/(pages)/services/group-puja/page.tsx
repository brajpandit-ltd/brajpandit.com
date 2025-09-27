"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { toast } from "react-toastify";

import services from "@/services/services";
import { sendBookingEmails } from "@/services/bookingByEmailjs";
import BookedPujaToast from "@/components/BookedPujaToast";

export default function NavratriPuja() {
  const [readMore, setReadMore] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    puja: "Navratri Puja (Online)",
    price: "₹150",
  });

  const [loading, setLoading] = useState(false);

  const description = `
Navratri Puja e-Puja
Navratri is one of the most sacred Hindu festivals dedicated to Goddess Durga and her nine divine forms. During these nine days, devotees worship Maa Durga to seek her blessings for health, wealth, and prosperity.

Performing Navratri Puja brings peace, strength, and removes negativity from life. Our verified pandits will conduct the puja online with authentic rituals, mantras, and offerings. Devotees can join live through camera screen and experience the divine blessings at home.

This special puja will be conducted on Navratri days, between 11:00 AM to 12:00 PM, ensuring Maa Durga’s blessings reach your family.
  `;

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const bookingDetails = {
        ...formData,
        date: new Date().toLocaleDateString(),
        time: "11:00 AM - 12:00 PM",
        orderNumber: `ORD-${Date.now()}`,
        trackingNumber: `TRK-${Math.random().toString(36).substring(2, 15)}`,
      };

      // save booking
      await services.pujaBooking(bookingDetails);

      // toast popup
      toast.success(<BookedPujaToast bookingData={bookingDetails} />, {
        className:
          "bg-white text-gray-800 border-l-4 border-green-500 shadow-lg rounded-md p-4",
        autoClose: 8000,
      });

      // send emails
      await sendBookingEmails(bookingDetails);

      // reset
      setFormData({ name: "", email: "", puja: "Navratri Puja (Online)", price: "₹150" });
    } catch (err: any) {
      toast.error("Failed to confirm booking. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-lg shadow-md">
        {/* Left Text */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-primary">Navratri Puja e-Puja</h1>
          <p className="text-gray-700">
            {readMore ? description : `${description.slice(0, 280)}...`}
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button
              onClick={() => setReadMore(!readMore)}
              className="text-primary font-medium underline"
            >
              {readMore ? "Read Less" : "Read More"}
            </button>
            <Link
              href="#booking-form"
              className="bg-primary text-white px-6 py-3 rounded-full font-medium shadow hover:bg-red-500 transition"
            >
              Book Now ₹150
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex flex-col items-center w-full">
          <div className="relative w-full aspect-[5/4] md:aspect-[16/9]">
            <Image
              src="/assets/group-puja/navratri1.jpg"
              alt="Navratri Puja"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-4">
            <a
              href="https://youtube.com/@vedagyanam?si=587Ev8d_yQzUOVE4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-red-700 transition"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/vedagyanam_official/?igsh=ODkyNHhmczZiYnhh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">About Navratri Puja</h2>
        <p className="text-gray-700 leading-relaxed">
          Navratri is celebrated to worship Maa Durga and her nine forms. Performing
          this puja ensures protection from negative energies, prosperity in life,
          and spiritual upliftment. The puja will be conducted live via camera
          screen from 11:00 AM to 12:00 PM, allowing you to experience the divine
          blessings of Maa Durga from your home.
        </p>
      </section>

      {/* Booking Form */}
      <section
        id="booking-form"
        className="bg-white p-6 rounded-lg shadow-md grid md:grid-cols-2 gap-8 items-center"
      >
        {/* Left Image */}
        <div className="relative w-full aspect-[4/3] hidden md:block">
          <Image
            src="/assets/group-puja/navratri2.jpg"
            alt="Durga Maa Navratri"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Form */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold mb-2">Book Navratri Puja</h2>
          <p className="text-gray-600 text-sm">
            Join the live online puja on Navratri day, from <b>11:00 AM to 12:00 PM</b>.  
            Contribution: <b>₹150</b>
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 rounded"
              required
            />
            <input
              type="text"
              value={formData.puja}
              readOnly
              className="border p-3 rounded bg-gray-100 text-gray-600"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-red-500 transition disabled:opacity-50"
            >
              {loading ? "Booking..." : "Confirm Booking ₹150"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { toast } from "react-toastify";

import services from "@/services/services";
import { sendBookingEmails } from "@/services/bookingByEmailjs";
import BookedPujaToast from "@/components/BookedPujaToast";

export default function DhanterasPuja() {
  const [readMore, setReadMore] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    puja: "Dhanteras Puja (Online)",
    price: "₹201",
  });

  const [loading, setLoading] = useState(false);

  const description = `
Dhanteras marks the first day of the five-day Diwali festival. 
It is considered highly auspicious for purchasing gold, silver, and other valuable items. 
Devotees worship Lord Dhanvantari, the god of Ayurveda, and Goddess Lakshmi for health, 
wealth, and prosperity. Performing Dhanteras Puja invites divine blessings, protection, 
and abundance into your home. 

Through our online Dhanteras Puja, you can join live from your home and witness the sacred rituals 
performed by verified Braj Pandits directly from Mathura–Vrindavan. 
This Puja will be conducted on <b>Dhanteras day</b>, between <b>6:00 PM to 8:00 PM</b>, 
to invoke Goddess Lakshmi’s blessings and ensure prosperity and well-being for your family.
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
        time: "6:00 PM - 8:00 PM",
        orderNumber: `ORD-${Date.now()}`,
        trackingNumber: `TRK-${Math.random().toString(36).substring(2, 15)}`,
      };

      await services.pujaBooking(bookingDetails);

      toast.success(<BookedPujaToast bookingData={bookingDetails} />, {
        className:
          "bg-white text-gray-800 border-l-4 border-green-500 shadow-lg rounded-md p-4",
        autoClose: 8000,
      });

      await sendBookingEmails(bookingDetails);

      setFormData({ name: "", email: "", puja: "Dhanteras Puja (Online)", price: "₹201" });
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
          <h1 className="text-3xl font-bold text-primary">Dhanteras Puja e-Puja</h1>
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
              Book Now ₹201
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex flex-col items-center w-full">
          <div className="relative w-full aspect-[5/4] md:aspect-[16/9]">
            <Image
              src="/assets/group-puja/dhanteras1.jpg"
              alt="Dhanteras Puja"
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
        <h2 className="text-2xl font-semibold">About Dhanteras Puja</h2>
        <p className="text-gray-700 leading-relaxed">
          Dhanteras, the first day of Diwali, is celebrated for wealth, prosperity, and health. 
          Devotees worship Lord Dhanvantari and Goddess Lakshmi, perform rituals, and offer precious items 
          as a symbol of gratitude and devotion. Participating in Dhanteras Puja brings abundance, removes obstacles, 
          and ensures prosperity and well-being for the entire family.
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
            src="/assets/group-puja/e-puja.jpg"
            alt="Dhanteras Puja Ceremony"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Form */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold mb-2">Book Dhanteras Puja</h2>
          <p className="text-gray-600 text-sm">
            Join the live online Dhanteras Puja on the auspicious day, from{" "}
            <b>6:00 PM to 8:00 PM</b>. Contribution: <b>₹201</b>
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
              {loading ? "Booking..." : "Confirm Booking ₹201"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

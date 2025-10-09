"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import services from "@/services/services";
import { sendBookingEmails } from "@/services/bookingByEmailjs";
import BookedPujaToast from "@/components/BookedPujaToast";

export default function DhanterasPuja() {
  const [readMore, setReadMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    puja: { value: "dhanteras-puja", label: "Dhanteras Puja (Online)" },
    price: "₹ 201",
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        puja: formData.puja,
      };

      // Save booking via backend API
      await services.pujaBooking(bookingDetails);

      // Toast popup for success
      toast.success(<BookedPujaToast bookingData={bookingDetails} />, {
        className:
          "bg-white text-gray-800 border-l-4 border-green-500 shadow-lg rounded-md p-4",
        autoClose: 8000,
      });

      // Send email to user + admin
      await sendBookingEmails(bookingDetails);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        puja: { value: "dhanteras-puja", label: "Dhanteras Puja (Online)" },
        price: "₹201",
      });
    } catch (err: any) {
      console.error("Booking Error:", err);
      toast.error("Failed to confirm booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 bg-amber-100 p-6 rounded-lg shadow-md">
        {/* Left Text */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-primary">Dhanteras Puja e-Puja</h1>
          <p className="text-gray-700">
            {readMore ? (
              <span dangerouslySetInnerHTML={{ __html: description }} />
            ) : (
              `${description.slice(0, 280)}...`
            )}
          </p>
          <button
            onClick={() => setReadMore(!readMore)}
            className="text-primary font-medium underline mt-2 mr-60  lg:mr-100"
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
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

      {/* Booking Form Section */}
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
              type="phone"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
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
              name="puja"
              value={formData.puja.label}
              readOnly
              className="border p-3 rounded bg-gray-100 text-gray-600"
            />
            <input
              
              type="text"
              name="price"
              value={formData.price}
              readOnly
              className="border p-3 rounded bg-gray-100 text-gray-600"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-red-400 transition disabled:opacity-50"
            >
              {loading ? "Booking..." : "Confirm Booking ₹201"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

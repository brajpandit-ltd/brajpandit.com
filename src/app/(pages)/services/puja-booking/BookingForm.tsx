"use client";

import React, { FormEvent, memo, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/common";
import { TextInput, TextareaInput } from "@/components/input";
import services from "@/services/services";
import { toast } from "react-toastify";
import SelectInput from "./SelectInput";
import BookedPujaToast from "@/components/BookedPujaToast";

//  Email + WhatsApp helpers
import { sendBookingEmails } from "@/services/bookingByEmailjs";
// import { sendWhatsAppMessage } from "@/helper/messaging";
import { sendWhatsApp } from "@/helper/messaging";


type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  temple: string;
  address: string;
  gotra: string;
  packageId: string;
  puja: {
    value: string;
    label: string;
  };
};

const BookingForm = memo(({ pujaService, pujas = [] }: any) => {
  const searchParams = useSearchParams();
  const pujaSlug = searchParams.get("pujaSlug") || "";
  const packageId = searchParams.get("packageId") || "";

  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    temple: "",
    address: "",
    gotra: "",
    packageId: packageId || "",
    puja: {
      value: pujaSlug || "",
      label: pujaSlug || "",
    },
  });

  const [apiStatus, setApiStatus] = useState({
    success: false,
    message: "",
    error: "",
    loading: false,
  });

  const adminNumber = process.env.NEXT_PUBLIC_ADMIN_WHATSAPP_NUMBER!;

  // Generate dropdown for pujas
  const serviceOptions = useMemo(() => {
    return pujas?.map((puja: any) => ({
      value: puja.slug,
      label: puja.title,
    }));
  }, [pujas]);

  //  Auto-fill when user navigates via pujaSlug + packageId
  useEffect(() => {
    if (!pujaService) return;

    const pujaPackage = pujaService?.packages?.find(
      (pkg: any) => pkg.id === packageId
    );

    setFormData((prevData) => ({
      ...prevData,
      packageId: `${pujaPackage?.title} : ${pujaPackage?.price}`,
      puja: {
        value: pujaService.slug,
        label: pujaService.title,
      },
    }));
  }, [pujaService, packageId]);

  const handleChange = (key: string, value: any): void => {
    setFormData({ ...formData, [key]: value });
  };

  //  MAIN SUBMIT HANDLER
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setApiStatus({ ...apiStatus, loading: true });

    try {
      const bookingDetails = {
        ...formData,
        day: new Date(formData?.date).toLocaleDateString("en-US", {
          weekday: "long",
        }),
        price: formData?.packageId?.split(":")[1]?.trim(),
        orderNumber: `ORD-${Date.now()}`,
        trackingNumber: `TRK-${Math.random().toString(36).substring(2, 15)}`,
      };

      //  Save booking via backend API
      const data = await services.pujaBooking(bookingDetails);

      // Toast popup for success
      toast.success(<BookedPujaToast bookingData={bookingDetails} />, {
        className:
          "bg-white text-gray-800 border-l-4 border-green-500 shadow-lg rounded-md p-4",
        autoClose: 8000,
        closeButton: true,
      });

      //  Send Email confirmations (User + Admin)
      await sendBookingEmails(bookingDetails);

      // Send WhatsApp messages
      const { name, phone, email, puja, date, time, address, packageId } =
        bookingDetails;

      const [pkgTitle, pkgPrice] = packageId.split(":").map((s: string) => s.trim());

      // Message to User
      // await sendWhatsAppMessage(
      //   phone,
      //   `🙏 Namaste ${name}, your pooja booking for "${puja.label}" is confirmed!\n🗓 Date: ${date} (${bookingDetails.day})\n⏰ Time: ${time}\n💰 Package: ${pkgTitle} - ${pkgPrice}\n📍 Address: ${address}\n\nThank you for booking with BrajPandit.com 🌸`
      // );

      // Message to Admin
      // await sendWhatsAppMessage(
      //   adminNumber,
      //   `📩 New Pooja Booking Confirmed!\n👤 Name: ${name}\n📞 Phone: ${phone}\n📧 Email: ${email}\n🛕 Pooja: ${puja.label}\n💰 Package: ${pkgTitle} - ${pkgPrice}\n🗓 Date: ${date} (${bookingDetails.day})\n⏰ Time: ${time}\n📍 Address: ${address}`
      // );

      setApiStatus({
        ...apiStatus,
        success: true,
        message: data?.message || "Booking successful!",
      });
    } catch (error: any) {
      console.error("❌ Booking Error:", error);
      setApiStatus({
        ...apiStatus,
        error: error.message || "Booking failed",
      });
      toast.error("Failed to complete booking. Please try again.");
    } finally {
      setApiStatus({ ...apiStatus, loading: false });
    }
  };

  return (
    <div className="w-full max-w-[450px] p-4 flex flex-col justify-center mx-auto">
      <div className="mb-6">
        <h2 className="text-4xl font-extrabold text-center mb-2 text-primary">
          Book Your Puja
        </h2>
        <p className="text-sm text-gray-500 text-center">
          For any queries, contact us at{" "}
          <a
            href="mailto:brajpandit123@gmail.com"
            className="text-blue-600 hover:underline"
          >
            brajpandit123@gmail.com
          </a>{" "}
          or call us at{" "}
          <a href="tel:+918595009640" className="text-blue-600 hover:underline">
            +91 8595009640
          </a>
          .
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <TextInput
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        />
        <TextInput
          label="Phone (with country code)"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="e.g. 919876543210"
        />

        <SelectInput
          label="Select Puja"
          name="puja"
          value={formData.puja}
          options={serviceOptions}
          onChange={(option) => handleChange("puja", option)}
        />

        <TextInput
          label="Selected Package"
          name="packageId"
          value={formData.packageId}
          onChange={handleChange}
          type="text"
          required
          disabled
        />

        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="Date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
            required
          />
          <TextInput
            label="Time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            type="time"
            required
          />
        </div>

        {/* <TextInput
          label="Temple (optional)"
          name="temple"
          value={formData.temple}
          onChange={handleChange}
        /> */}

        <TextareaInput
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <TextInput
          label="Gotra (optional)"
          name="gotra"
          value={formData.gotra}
          onChange={handleChange}
        />

        <Button
          type="submit"
          label="Confirm Booking"
          loading={apiStatus.loading}
          disabled={apiStatus.loading}
        />

        {apiStatus.success && (
          <p className="text-green-600">{apiStatus.message}</p>
        )}
        {apiStatus.error && <p className="text-red-600">{apiStatus.error}</p>}
      </form>
    </div>
    
  );
});

BookingForm.displayName = "BookingForm";
export default BookingForm;

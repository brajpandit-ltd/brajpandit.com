"use client";

import React, { FormEvent, memo, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/common";
import { TextInput, SelectInput, TextareaInput } from "@/components/input";
import services from "@/services/services";
import { toast } from "react-toastify";

type BookingFormData = {
  name: string;
  email: string;
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

  const serviceOptions = useMemo(() => {
    return pujas?.map((puja: any) => ({
      value: puja.slug,
      label: puja.title,
    }));
  }, [pujas]);

  useEffect(() => {
    if (!pujaService) return;

    const pujaPackage = pujaService?.packages?.find(
      (pkg: any) => pkg.id === packageId
    );
    console.log(pujaPackage);
    setFormData((prevData) => ({
      ...prevData,
      packageId: `${pujaPackage.title} : ${pujaPackage?.price}`,
      puja: {
        value: pujaService.slug,
        label: pujaService.title,
      },
    }));
  }, [pujaService, packageId]);

  const handleChange = (key: string, value: any): void => {
    setFormData({ ...formData, [key]: value });
  };

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

      const data = await services.pujaBooking(bookingDetails);

      setApiStatus({ ...apiStatus, success: true, message: data.message });
      toast.success(`Booking successful!`);
    } catch (error: any) {
      setApiStatus({ ...apiStatus, error: error.message || "Booking failed" });
      console.error("Error:", error);
      toast.error("Failed to book puja. Please try again.");
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
        <p className="text-sm text-gray-500">
          For any queries, contact us at{" "}
          <a
            href="mailto:brajpandit123@gmail.com"
            className="text-blue-600 hover:underline"
          >
            brajpandit123@gmail.com
          </a>{" "}
          or call us at{" "}
          <a href="tel:+918595009640" className="text-blue-600 hover:underline">
            +918595009640
          </a>
          .
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <TextInput
          label="Name"
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
        <SelectInput
          label="Service"
          name="service"
          value={formData.puja.value}
          options={serviceOptions}
          onChange={handleChange}
        />

        <TextInput
          label="Selected Package Service"
          name="packageId"
          value={formData.packageId}
          onChange={handleChange}
          required
          type="text"
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
        <TextInput
          label="Temple"
          name="temple"
          value={formData.temple}
          onChange={handleChange}
        />
        <TextareaInput
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Gotra"
          name="gotra"
          value={formData.gotra}
          onChange={handleChange}
        />
        {/* <SelectInput
          label="Pandit"
          name="pandit"
          value={formData.pandit}
          onChange={handleChange}
          options={panditOptions}
        /> */}
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

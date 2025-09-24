// src/components/BookedPujaToast.tsx
import React from "react";

// interface BookedPujaToastProps {
//   bookingData: any; // your form data
// }

const BookedPujaToast = ({ bookingData }: { bookingData: any }) => {
  if (!bookingData) return null;

  return (
    <div>
      <h3 className=" text-black text-lg font-bold mb-2">Booking Confirmed!</h3>
      <p><strong>Name:</strong> {bookingData.name}</p>
      <p><strong>Email:</strong> {bookingData.email}</p>
      <p><strong>Puja:</strong> {bookingData.puja?.label}</p>
      <p><strong>Package:</strong> {bookingData.packageId}</p>
      <p><strong>Date & Time:</strong> {bookingData.date} at {bookingData.time}</p>
      {bookingData.temple && <p><strong>Temple:</strong> {bookingData.temple}</p>}
      <p><strong>Address:</strong> {bookingData.address}</p>
      {bookingData.gotra && <p><strong>Gotra:</strong> {bookingData.gotra}</p>}
      <p><strong>Order Number:</strong> {bookingData.orderNumber}</p>
      <p><strong>Tracking Number:</strong> {bookingData.trackingNumber}</p>
    </div>
  );
};


export default BookedPujaToast;

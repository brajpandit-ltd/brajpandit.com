import React from "react";
import { Button } from "../common";

const C2APrefooter = () => {
  return (
    <section className="bg-primary-light text-text-white py-16 sm:py-20 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Want to Connect With Us?
        </h2>
        <p className="text-base sm:text-lg text-white/90">
          Whether you want to book a puja, get astrology guidance, or know more
          about our services, we are here to help you.
        </p>
        <a
          href="https://wa.me/918595009640"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button
            label="📞 Connect us at WhatsApp"
            size="small"
            className="!bg-green-500 !border-green"
          />
        </a>
      </div>
    </section>
  );
};

export default C2APrefooter;

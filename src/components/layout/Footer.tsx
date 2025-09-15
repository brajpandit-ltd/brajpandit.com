"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-2">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <Image
            src="/assets/braj-pandit-logo.svg"
            alt="Braj Pandit Logo"
            width={160}
            height={60}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed">
            Welcome to <span className="font-semibold">Braj Pandit</span> – your
            trusted source for online puja services, astrology consultations,
            prasad delivery, and spiritual essentials like Rudraksha, Shaligrams,
            and Yantras.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services/e-puja" className="hover:text-primary transition">
                E Pujas
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition">
                Our Premium Services
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📞 +91 8595009640</li>
            <li>📞 +91 8595009640</li>
            <li>
              📧{" "}
              <a
                href="mailto:brajpandit123@gmail.com"
                className="hover:text-primary transition"
              >
                brajpandit123@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links with Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaFacebookF className="text-blue-600" /> 
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-pink-500" /> 
              <a
                href="https://www.instagram.com/vedagyanam_official/?igsh=ODkyNHhmczZiYnhh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaYoutube className="text-red-600" /> 
              <a
                href="https://youtube.com/@vedagyanam?si=587Ev8d_yQzUOVE4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-sm text-gray-600 border-t border-gray-300 pt-2">
        © {new Date().getFullYear()} <span className="font-semibold">BrajPandit</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

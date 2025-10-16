import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import staticData from "@/constants/static.json";

const Footer = () => {
  const {
    footer: { logo, quickLinks, contactInfo, socialLinks },
  } = staticData;

  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-2">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <Link href="/">
            <Image
              src={logo}
              alt="Braj Pandit Logo"
              width={160}
              height={60}
              className="mb-4"
            />
          </Link>
          <p className="text-sm leading-relaxed">
            Welcome to <span className="font-semibold">Braj Pandit</span> – your
            trusted source for online puja services, astrology consultations,
            prasad delivery, and spiritual essentials like Rudraksha,
            Shaligrams, and Yantras.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, idx) => (
              <li key={link.label + idx}>
                <Link
                  href={link.link}
                  className="hover:text-primary transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            {contactInfo.map((info, idx) => (
              <li key={info.label + idx}>
                <a href={info.link} className="hover:text-primary transition">
                  {info.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links with Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            {socialLinks.map((link, idx) => (
              <SocialLink key={link.label + idx} {...link} />
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-sm text-gray-600 border-t border-gray-300 pt-2">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">BrajPandit</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

const SocialLink = ({ label, link }: { label: string; link: string }) => {
  let icon;
  switch (label) {
    case "facebook":
      icon = <FaFacebookF className="text-blue-600" />;
      break;
    case "instagram":
      icon = <FaInstagram className="text-pink-500" />;
      break;
    case "youtube":
      icon = <FaYoutube className="text-red-600" />;
      break;
    case "linkedin":
      icon = <FaLinkedin className="text-blue-600" />;
      break;
    case "threads":
      icon = <FaSquareThreads className="text-black" />;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <li className="flex items-center gap-2">
      {icon}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition"
      >
        {label}
      </a>
    </li>
  );
};

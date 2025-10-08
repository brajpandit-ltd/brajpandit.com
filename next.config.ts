import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  eslint: {
    ignoreDuringBuilds: true, // ⬅ disables eslint check at build
  },
  images: {
    unoptimized: true,
    domains: [
      "i.pinimg.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;

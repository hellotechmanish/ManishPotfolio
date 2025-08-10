// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "raw.githubusercontent.com",
      // add more domains if needed
    ],
  },
  // ...other config options
};

export default nextConfig;

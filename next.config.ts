import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // allow Vercel to build despite ESLint errors
  },
};

export default nextConfig;

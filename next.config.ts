import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // This setting applies to Next.js 13+ (App Router)
    // It tells Vercel to only include the required server files.
    serverComponentsExternalPackages: ["@prisma/client", "prisma"],
  },
};

export default nextConfig;

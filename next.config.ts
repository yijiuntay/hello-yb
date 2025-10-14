import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // This tells Next.js to treat these packages as Node.js dependencies
    // only to be included in the server environment (API Routes, Server Components).
    serverComponentsExternalPackages: ["@prisma/client", "prisma"],
  },
};

export default nextConfig;

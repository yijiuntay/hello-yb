// src/app/layout.tsx
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

export const metadata = {
  // ... other metadata
  description: {
    en: "HelloYB.my is a fast, data-focused web application providing voters in Sabah with clear, structured election information for the 2025 state elections. Explore constituencies, candidates, past election results, and trends in one easy-to-use interface.",
    bm: "HelloYB.my ialah aplikasi web pantas dan berfokus data yang menyediakan pengundi di Sabah dengan maklumat pilihan raya yang jelas dan tersusun untuk Pilihan Raya Negeri Sabah 2025. Terokai kawasan pilihan raya, calon, keputusan lalu, dan tren dalam satu antara muka yang mudah digunakan.",
  },
  keywords: [
    // English
    "Sabah elections",
    "17th Sabah state election",
    "PRN Sabah 2025",
    "voter information",
    "constituency results",
    "candidate information",
    "election transparency",
    "election trends",
    "election data",
    "HelloYB.my",
    // Bahasa Malaysia
    "Pilihan Raya Umum Dewan Undangan Negeri Sabah ke-17",
    "pilihan raya Sabah",
    "calon pilihan raya",
    "keputusan pilihan raya",
    "maklumat pengundi",
    "PRN Sabah",
    "Pilihan Raya Negeri Sabah 2025",
  ],
  openGraph: {
    title: "HelloYB.my – Sabah Election Information 2025",
    description:
      "Access clear, structured election information for the 2025 Sabah state elections. Explore constituencies, candidates, past results, and trends with HelloYB.my.",
    url: "https://helloyb.my",
    siteName: "HelloYB.my",
    images: [
      {
        url: "https://github.com/user-attachments/assets/affc9a6a-f599-4688-abe9-1b04592a7daf",
        width: 1920,
        height: 726,
        alt: "HelloYB.my banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HelloYB.my – Sabah Election Information 2025",
    description:
      "Explore constituencies, candidates, and past election results for the 2025 Sabah state elections in one easy-to-use interface.",
    images: [
      "https://github.com/user-attachments/assets/affc9a6a-f599-4688-abe9-1b04592a7daf",
    ],
    site: "@TayYiJiun",
    creator: "@TayYiJiun",
  },
  icons: {
    icon: "/favicon.png", // Reference the file in the public directory
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

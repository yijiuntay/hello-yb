// src/app/layout.tsx
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { LanguageProvider } from "./context/LanguageContext";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

// Helper function to detect language from headers
const detectLang = (acceptLanguage: string | null) => {
  if (!acceptLanguage) return "en";
  return acceptLanguage.toLowerCase().startsWith("ms") ? "ms" : "en";
};

// Dynamic metadata generation
export async function generateMetadata({
  headers,
}: {
  headers?: Headers;
}): Promise<Metadata> {
  const acceptLanguage = headers?.get("accept-language") ?? "en"; // fallback
  const lang = detectLang(acceptLanguage);

  // Common keywords (both languages included)
  const keywords = [
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
  ];

  // SEO-optimized titles and descriptions per language
  const titles = {
    en: "HelloYB.my – Sabah Election Information 2025",
    ms: "HelloYB.my – Maklumat Pilihan Raya Sabah 2025",
  };

  const descriptions = {
    en: "Access clear, structured election information for the 2025 Sabah state elections. Explore constituencies, candidates, past results, and trends with HelloYB.my.",
    ms: "Akses maklumat pilihan raya yang jelas dan tersusun bagi Pilihan Raya Negeri Sabah 2025. Terokai kawasan pilihan raya, calon, keputusan terdahulu, dan tren dengan HelloYB.my.",
  };

  return {
    title: titles[lang],
    description: descriptions[lang],
    keywords,
    openGraph: {
      title: titles[lang],
      description: descriptions[lang],
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
      title: titles[lang],
      description: descriptions[lang],
      images: [
        "https://github.com/user-attachments/assets/affc9a6a-f599-4688-abe9-1b04592a7daf",
      ],
      site: "@TayYiJiun",
      creator: "@TayYiJiun",
    },
    icons: {
      icon: "/favicon.png",
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
}

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
        <LanguageProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </LanguageProvider>
      </body>
    </html>
  );
}
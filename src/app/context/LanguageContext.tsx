// src/app/context/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "../../messages/en.json";
import ms from "../../messages/ms.json";

// Define valid languages
type Locale = "en" | "ms";

// Define the context shape
interface LanguageContextType {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Locale>("en");

  // Optional: Load saved language from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("app-language") as Locale;
    if (saved === "en" || saved === "ms") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Locale) => {
    setLanguageState(lang);
    localStorage.setItem("app-language", lang);
  };

  // The magic translation function
  const t = (key: string, params?: Record<string, string | number>) => {
    const messages = language === "en" ? en : ms;
    
    // Split "Header.title" into ["Header", "title"] and find the text
    const keys = key.split(".");
    let value: any = messages;

    for (const k of keys) {
      value = value?.[k as keyof typeof value];
      if (!value) break;
    }

    if (typeof value !== "string") return key; // Fallback if missing

    // Replace parameters like {year}
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        value = value.replace(`{${paramKey}}`, String(paramValue));
      });
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use it easily
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
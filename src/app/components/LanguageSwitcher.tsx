"use client";

import { useLanguage } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ms" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-yellow-300 border-4 border-black text-black px-4 py-2 font-bold shadow-[2px_2px_0px_#000] hover:bg-yellow-400 transition-all"
      style={{ fontFamily: "'Press Start 2P', cursive", fontSize: "0.75rem" }}
    >
      {language === "en" ? "BM" : "EN"}
    </button>
  );
}
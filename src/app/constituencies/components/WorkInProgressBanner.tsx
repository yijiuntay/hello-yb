"use client";

import { useLanguage } from "@/app/context/LanguageContext";

export default function WorkInProgressBanner() {
  const { t } = useLanguage();

  return (
    <div className="bg-yellow-300 border-y-4 border-black py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <div className="w-8 h-8 bg-black flex items-center justify-center text-yellow-300 text-xl animate-pulse">
            ⚠
          </div>
          <p className="text-black text-xs md:text-sm font-bold text-center">
            🚧 {t("WorkInProgress.banner")} 🚧
          </p>
        </div>
      </div>
    </div>
  );
}
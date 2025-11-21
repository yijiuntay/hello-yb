"use client";

import Image from "next/image";
import { Candidate } from "@/types";
import { imageMap } from "@/lib/imageMap";
import { useLanguage } from "@/app/context/LanguageContext";

export default function CandidateCard({ candidate }: { candidate: Candidate }) {
  const { t } = useLanguage();

  return (
    <div className="bg-white text-black border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,0.8)] p-4 md:p-6 flex flex-col items-center transition-all hover:scale-105 max-w-xs mx-auto">
      {/* Ballot Number */}
      <div className="w-12 h-12 flex items-center justify-center bg-yellow-300 text-black font-bold text-xl md:text-2xl rounded-full mb-4 shadow-[2px_2px_0px_#000]">
        {candidate.number}
      </div>

      {/* Candidate Name */}
      <h4 className="text-lg md:text-xl font-bold text-center mb-3 break-words">
        {candidate.name}
      </h4>

      {/* Party Logo + Name */}
      {candidate.logo_path &&
        imageMap[candidate.logo_path as keyof typeof imageMap] && (
          <div className="flex flex-col items-center">
            <div className="mb-1">
              <Image
                src={imageMap[candidate.logo_path as keyof typeof imageMap]}
                alt={t("CandidateCard.partyLogoAlt", { party: candidate.party })}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-xs md:text-sm text-center text-gray-700 break-words">
              {candidate.party}
            </p>
          </div>
        )}
    </div>
  );
}
"use client";

import Image from "next/image";
import { Candidate } from "@/types";
import { imageMap } from "@/lib/imageMap";
import { BadgeCheck } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function CandidateCard({ candidate }: { candidate: Candidate }) {
  const { t } = useLanguage();
  const isIncumbent = String(candidate.wasIncumbent).toUpperCase() === "TRUE";

  return (
    <div className="bg-white text-black border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,0.8)] p-4 md:p-6 flex flex-col items-center transition-all hover:scale-105 max-w-xs mx-auto relative">
      {/* Ballot Number */}
      <div className="w-12 h-12 flex items-center justify-center bg-yellow-300 text-black font-bold text-xl md:text-2xl rounded-full mb-4 shadow-[2px_2px_0px_#000]">
        {candidate.number}
      </div>

      {/* Incumbent Badge */}
      {isIncumbent && (
        <div className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 border-2 border-blue-600 shadow-[2px_2px_0px_#2563eb] mb-4 -rotate-2 transform transition-transform hover:rotate-0">
          <BadgeCheck size={16} strokeWidth={2.5} />
          <span className="text-xs font-extrabold uppercase tracking-widest">
            Incumbent
          </span>
        </div>
      )}

      {/* Candidate Image Placeholder (hidden for now) */}
      {/* <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 mb-4 flex items-center justify-center border-2 border-black">
        <span className="text-xs text-gray-500">Photo</span>
      </div> */}

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
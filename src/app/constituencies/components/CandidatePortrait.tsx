import Image from "next/image";
import React, { memo } from "react";
import type { Candidate } from "@/types";
import { imageMap } from "@/lib/imageMap";
import { partyColors } from "@/lib/partyColors";

// PartyBadge Component
{
  /* const partyColors: { [key: string]: string } = {
  WARISAN: "bg-orange-500",
  BN: "bg-blue-900",
  PN: "bg-sky-600",
  PBS: "bg-indigo-600",
  LDP: "bg-yellow-600 text-blue-950",
  PCS: "bg-red-700",
  BEBAS: "bg-gray-500",
  DEFAULT: "bg-gray-700",
}; */
}

interface Props {
  candidate: Candidate;
}

const CandidatePortrait: React.FC<Props> = ({ candidate }) => {
  const badge = partyColors[candidate.logo_path] || {
    bg: "bg-gray-700",
    text: "text-white",
  };

  return (
    <div className="group bg-blue-800 p-1 border-4 border-blue-900 transition-transform duration-150 hover:-translate-y-1 hover:border-yellow-300 w-full">
      <div className="flex justify-center items-center h-20 bg-blue-900 border-2 border-blue-950 mb-2 p-1 relative w-full">
        <Image
          src={
            imageMap[candidate.logo_path as keyof typeof imageMap] ||
            "/logos/placeholder.png"
          }
          alt={`${candidate.party} Logo`}
          width={80}
          height={80}
          className="object-contain pixelated-image"
        />
      </div>
      <div className="text-center">
        <p className="text-xs font-bold text-yellow-300 leading-tight text-center break-words">
          {candidate.name}
        </p>
        <span
          className={`inline-block px-2 py-1 text-xs border-2 border-blue-950 ${badge.bg} ${badge.text} break-words`}
        >
          {candidate.party}
        </span>
      </div>
    </div>
  );
};

// Memoize to avoid re-renders
export default memo(CandidatePortrait);

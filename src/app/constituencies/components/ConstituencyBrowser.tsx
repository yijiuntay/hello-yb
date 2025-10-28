"use client";

import React, { useState } from "react";
import type { Candidate, Constituency } from "../data";

interface Props {
  sabahElectionData: Constituency[];
}

// Party colors for badges
const partyColors: { [key: string]: string } = {
  WARISAN: "bg-orange-500",
  BN: "bg-blue-900",
  PN: "bg-sky-600",
  PBS: "bg-indigo-600",
  LDP: "bg-yellow-600 text-blue-950",
  PCS: "bg-red-700",
  BEBAS: "bg-gray-500",
  DEFAULT: "bg-gray-700",
};

// PartyBadge Component
const PartyBadge: React.FC<{ party: string }> = ({ party }) => {
  const colorClass = partyColors[party] || partyColors.DEFAULT;
  return (
    <span
      className={`inline-block px-2 py-1 text-xs text-white border-2 border-blue-950 ${colorClass}`}
    >
      {party}
    </span>
  );
};

// CandidatePortrait Component
const CandidatePortrait: React.FC<{ candidate: Candidate }> = ({
  candidate,
}) => {
  return (
    <div className="group bg-blue-800 p-1 border-4 border-blue-900 transition-transform duration-150 hover:-translate-y-1 hover:border-yellow-300">
      <div className="flex justify-center items-center h-20 bg-blue-900 border-2 border-blue-950 mb-2 p-1">
        <img
          src={candidate.imageUrl}
          alt={`${candidate.party} Logo`}
          className="w-full h-full object-contain pixelated-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "https://placehold.co/100x100/333333/000000?text=ERR";
          }}
        />
      </div>
      <div className="text-center">
        <p className="text-xs font-bold text-yellow-300 min-h-[2.5rem] flex items-center justify-center leading-tight">
          {candidate.name}
        </p>
        <PartyBadge party={candidate.party} />
      </div>
    </div>
  );
};

// ## UPDATED: ConstituencyCard with rotation animation removed ##
const ConstituencyCard: React.FC<{
  code: string;
  name: string;
  candidates: Candidate[];
}> = ({ code, name, candidates }) => {
  return (
    <div className="bg-blue-900 text-white border-4 border-blue-950 shadow-[8px_8px_0px_#172554] transition-all duration-200 ease-in-out hover:-translate-y-2 hover:shadow-[8px_8px_0px_#facc15]">
      <div className="bg-blue-950 p-3 border-b-4 border-yellow-400">
        <h3 className="text-md font-bold text-center text-yellow-300 truncate">
          {`${code} ${name}`}
        </h3>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 gap-2">
          {candidates.map((candidate) => (
            <CandidatePortrait key={candidate.name} candidate={candidate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ConstituencyBrowser({ sabahElectionData }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = sabahElectionData.filter((constituency) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      constituency.name.toLowerCase().includes(searchTermLower) ||
      constituency.code.toLowerCase().includes(searchTermLower) ||
      constituency.candidates.some((c) =>
        c.name.toLowerCase().includes(searchTermLower)
      )
    );
  });

  return (
    <>
      <div className="mb-12 text-center">
        <input
          type="text"
          placeholder="SEARCH CHALLENGER OR ARENA..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg p-4 bg-blue-900 border-4 border-blue-950 text-yellow-300 placeholder-gray-400 text-center text-lg input-focus-pixel transition-shadow"
        />
      </div>

      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredData.map((constituency) => (
            <ConstituencyCard
              key={constituency.code}
              code={constituency.code}
              name={constituency.name}
              candidates={constituency.candidates}
            />
          ))}
        </div>
      ) : (
        <div className="text-center bg-blue-900 border-4 border-dashed border-red-500 p-10 max-w-2xl mx-auto shadow-[8px_8px_0px_#172554]">
          <p
            className="text-2xl text-red-500"
            style={{ textShadow: "2px 2px 0px #172554" }}
          >
            NO CHALLENGERS FOUND!
          </p>
          <p className="mt-4 text-lg text-gray-300">
            Try a different name or arena code.
          </p>
        </div>
      )}
    </>
  );
}

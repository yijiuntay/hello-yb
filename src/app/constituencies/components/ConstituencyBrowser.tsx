"use client";

import React, { useState } from "react";
import type { Constituency, Candidate } from "@/types";
import ConstituencyCard from "./ConstituencyCard";
import { useLanguage } from "@/app/context/LanguageContext";

// Extend Constituency to include candidates
type ConstituencyWithCandidates = Constituency & {
  candidates: Candidate[];
};

interface Props {
  constituencies: ConstituencyWithCandidates[];
}

export default function ConstituencyBrowser({ constituencies }: Props) {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = constituencies.filter((c) => {
    const term = searchTerm.toLowerCase();
    return (
      c.name.toLowerCase().includes(term) ||
      c.code.toLowerCase().includes(term) ||
      c.candidates.some(
        (cand) =>
          cand.name.toLowerCase().includes(term) ||
          cand.party.toLowerCase().includes(term)
      )
    );
  });

  return (
    <>
      <div className="mb-12 text-center">
        <input
          type="text"
          placeholder={t("ConstituencyBrowser.placeholder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg p-4 bg-blue-900 border-4 border-blue-950 text-yellow-300 placeholder-gray-400 text-center text-lg input-focus-pixel transition-shadow"
        />
      </div>

      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
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
            {t("ConstituencyBrowser.notFound.title")}
          </p>
          <p className="mt-4 text-lg text-gray-300">
            {t("ConstituencyBrowser.notFound.description")}
          </p>
        </div>
      )}
    </>
  );
}
"use client";

import { useState } from "react";
import CandidateCard from "./CandidateCard";
// import CandidateComparison from "./CandidateComparison";
import { Candidate } from "@/types";

export default function CandidatesSection({
  candidates,
}: {
  candidates: Candidate[];
}) {
  // 🟡 Comparison-related logic (hidden)
  /*
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  const toggleCandidate = (id: string) => {
    if (selectedCandidates.includes(id)) {
      setSelectedCandidates(selectedCandidates.filter((c) => c !== id));
    } else if (selectedCandidates.length < 4) {
      setSelectedCandidates([...selectedCandidates, id]);
    }
  };

  const handleCompare = () => {
    if (selectedCandidates.length >= 2) {
      setShowComparison(true);
    }
  };

  const handleCloseComparison = () => {
    setShowComparison(false);
    setSelectedCandidates([]);
  };
  */

  const noCandidates = !candidates || candidates.length === 0;

  return (
    <section className="py-12 md:py-16 bg-blue-600 border-y-4 border-black">
      <div className="container mx-auto px-4">
        <h3
          className="text-2xl md:text-4xl text-center text-yellow-300 mb-8"
          style={{ textShadow: "3px 3px 0px #000" }}
        >
          Candidates
        </h3>

        {/* Default empty state */}
        {noCandidates && (
          <div className="max-w-3xl mx-auto bg-yellow-300 text-black border-4 border-black p-6 rounded shadow-[6px_6px_0px_rgba(0,0,0,0.8)] text-center">
            <p className="font-bold text-sm md:text-base">
              No candidates found for this constituency.
            </p>
          </div>
        )}

        {/* Candidate Grid */}
        {!noCandidates && (
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidates.map((candidate) => (
              <CandidateCard
                key={candidate.candidate}
                candidate={candidate}
                // isSelected={selectedCandidates.includes(candidate.id)}
                // onToggleSelect={toggleCandidate}
              />
            ))}
          </div>
        )}

        {/* Data Source */}
        <div className="max-w-5xl mx-auto mt-8">
          <p className="text-xs md:text-sm text-center opacity-75">
            📊 Data Source: Electoral Commission of Malaysia
          </p>
        </div>
      </div>

      {/* 🟡 Comparison Modal (hidden)
      {showComparison && (
        <CandidateComparison
          candidates={candidates.filter((c) =>
            selectedCandidates.includes(c.id)
          )}
          onClose={handleCloseComparison}
        />
      )} */}
    </section>
  );
}

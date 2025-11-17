"use client";

import CandidateCard from "./CandidateCard";
import { Candidate } from "@/types";

export default function CandidatesSection({
  candidates,
}: {
  candidates: Candidate[];
}) {
  const noCandidates = !candidates || candidates.length === 0;

  return (
    <section className="py-12 md:py-16 bg-blue-600 border-y-8 border-black">
      <div className="container mx-auto px-4">
        <h3
          className="text-2xl md:text-4xl text-center text-yellow-300 mb-8"
          style={{ textShadow: "3px 3px 0px #000" }}
        >
          Candidates
        </h3>

        {/* Empty state */}
        {noCandidates && (
          <div className="max-w-3xl mx-auto bg-yellow-300 text-black border-4 border-black p-6 rounded shadow-[6px_6px_0px_rgba(0,0,0,0.8)] text-center">
            <p className="font-bold text-sm md:text-base">
              No candidates found for this constituency.
            </p>
          </div>
        )}

        {/* Multi-column Ballot Grid */}
        {!noCandidates && (
          <div className="max-w-6xl mx-auto border-4 border-black rounded-lg overflow-hidden p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {candidates.map((candidate, index) => (
              <div
                key={index}
                className={`rounded border-2 border-black p-2 ${
                  index % 2 === 0 ? "bg-blue-500" : "bg-blue-600"
                }`}
              >
                <CandidateCard candidate={candidate} />
              </div>
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
    </section>
  );
}

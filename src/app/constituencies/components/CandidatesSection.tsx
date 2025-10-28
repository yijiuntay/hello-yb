"use client";

import { useState } from "react";
import CandidateCard from "./CandidateCard";
import CandidateComparison from "./CandidateComparison";

// Dummy data - replace with actual data fetching
const DUMMY_CANDIDATES = [
  {
    id: "1",
    name: "Azmi Abdullah",
    party: "Parti Kebangsaan",
    partyLogo: "🏛️",
    age: 26,
    occupation: "Lawyer",
    education: "LLB, University of Malaya",
  },
  {
    id: "2",
    name: "Esther Richard",
    party: "Parti Reformasi",
    partyLogo: "🌟",
    age: 18,
    occupation: "Social Worker",
    education: "MSc Social Work, UKM",
  },
  {
    id: "3",
    name: "Hassanel Zachary",
    party: "Parti Progresif",
    partyLogo: "🚀",
    age: 25,
    occupation: "Business Owner",
    education: "MBA, Nottingham",
  },
  {
    id: "4",
    name: "Tay",
    party: "Independent",
    partyLogo: "⭐",
    age: 50,
    occupation: "Engineer",
    education: "BEng Civil, UMS",
  },
];

export default function CandidatesSection({
  constituencyId,
}: {
  constituencyId: string;
}) {
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

  return (
    <section className="py-12 md:py-16 bg-blue-600 border-y-4 border-black">
      <div className="container mx-auto px-4">
        <h3
          className="text-2xl md:text-4xl text-center text-yellow-300 mb-8"
          style={{ textShadow: "3px 3px 0px #000" }}
        >
          Candidates
        </h3>

        {/* Comparison Trigger */}
        {selectedCandidates.length > 0 && (
          <div className="max-w-5xl mx-auto mb-6 bg-yellow-300 border-4 border-black p-4 shadow-[6px_6px_0px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-black text-xs md:text-sm font-bold text-center sm:text-left">
                {selectedCandidates.length} candidate(s) selected
                {selectedCandidates.length < 2 &&
                  " • Select at least 2 to compare"}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedCandidates([])}
                  className="px-4 py-2 bg-white text-black border-4 border-black text-xs md:text-sm font-bold hover:bg-gray-200 transition-colors shadow-[4px_4px_0px_#000]"
                >
                  Clear
                </button>
                <button
                  onClick={handleCompare}
                  disabled={selectedCandidates.length < 2}
                  className={`px-4 py-2 border-4 border-black text-xs md:text-sm font-bold shadow-[4px_4px_0px_#000] transition-colors ${
                    selectedCandidates.length >= 2
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-400 text-gray-700 cursor-not-allowed"
                  }`}
                >
                  Compare
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Candidate Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DUMMY_CANDIDATES.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              isSelected={selectedCandidates.includes(candidate.id)}
              onToggleSelect={toggleCandidate}
            />
          ))}
        </div>

        {/* Data Source */}
        <div className="max-w-5xl mx-auto mt-8">
          <p className="text-xs md:text-sm text-center opacity-75">
            📊 Data Source: Electoral Commission of Malaysia (Dummy Data)
          </p>
        </div>
      </div>

      {/* Comparison Modal */}
      {showComparison && (
        <CandidateComparison
          candidates={DUMMY_CANDIDATES.filter((c) =>
            selectedCandidates.includes(c.id)
          )}
          onClose={handleCloseComparison}
        />
      )}
    </section>
  );
}

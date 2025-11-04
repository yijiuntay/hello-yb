interface Candidate {
  id: string;
  name: string;
  party: string;
  partyLogo: string;
  age: number;
  occupation: string;
  education: string;
}

export default function CandidateCard({
  candidate,
  isSelected,
  onToggleSelect,
}: {
  candidate: Candidate;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
}) {
  return (
    <div
      className={`bg-white text-black p-4 md:p-6 border-4 transition-all ${
        isSelected
          ? "border-yellow-300 shadow-[8px_8px_0px_rgba(253,224,71,0.8)]"
          : "border-black shadow-[6px_6px_0px_rgba(0,0,0,0.8)]"
      }`}
    >
      {/* Party Logo */}
      <div className="text-4xl md:text-5xl text-center mb-3">
        {candidate.partyLogo}
      </div>

      {/* Candidate Name */}
      <h4 className="text-base md:text-lg font-bold text-center mb-2 break-words">
        {candidate.name}
      </h4>

      {/* Party Name */}
      <p className="text-xs md:text-sm text-center mb-4 text-gray-700 break-words">
        {candidate.party}
      </p>

      {/* Details */}
      <div className="space-y-2 mb-4 text-xs md:text-sm">
        <div className="flex justify-between border-b border-gray-300 pb-1">
          <span className="font-bold">Age:</span>
          <span>{candidate.age}</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 pb-1">
          <span className="font-bold">Job:</span>
          <span className="text-right truncate ml-2">
            {candidate.occupation}
          </span>
        </div>
        <div className="border-b border-gray-300 pb-1">
          <span className="font-bold block mb-1">Education:</span>
          <span className="text-xs break-words">{candidate.education}</span>
        </div>
      </div>

      {/* Select Button */}
      <button
        onClick={() => onToggleSelect(candidate.id)}
        className={`w-full py-2 px-3 border-4 border-black text-xs md:text-sm font-bold transition-colors shadow-[4px_4px_0px_#000] ${
          isSelected
            ? "bg-yellow-300 text-black hover:bg-yellow-400"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {isSelected ? "✓ Selected" : "Select to Compare"}
      </button>
    </div>
  );
}

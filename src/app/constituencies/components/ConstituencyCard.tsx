import React, { memo } from "react";
import type { Candidate } from "@/types";
import CandidatePortrait from "./CandidatePortrait";

interface Props {
  code: string;
  name: string;
  candidates: Candidate[];
}

const ConstituencyCard: React.FC<Props> = ({ code, name, candidates }) => (
  <div className="bg-blue-900 text-white border-4 border-blue-950 shadow-[8px_8px_0px_#172554] transition-all duration-200 ease-in-out hover:-translate-y-2 hover:shadow-[8px_8px_0px_#facc15]">
    <div className="bg-blue-950 p-3 border-b-4 border-yellow-400">
      <h3 className="text-md font-bold text-center text-yellow-300 truncate">
        {`${code} ${name}`}
      </h3>
    </div>

    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {candidates.map((candidate) => (
          <CandidatePortrait key={candidate.name} candidate={candidate} />
        ))}
      </div>
    </div>
  </div>
);

export default memo(ConstituencyCard);

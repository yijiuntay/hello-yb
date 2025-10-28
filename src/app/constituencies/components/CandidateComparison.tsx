interface Candidate {
  id: string;
  name: string;
  party: string;
  partyLogo: string;
  age: number;
  occupation: string;
  education: string;
}

export default function CandidateComparison({
  candidates,
  onClose,
}: {
  candidates: Candidate[];
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="bg-blue-500 border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,0.8)] max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-yellow-300 border-b-4 border-black p-4 flex justify-between items-center z-10">
          <h3 className="text-lg md:text-2xl text-black font-bold">
            Candidate Comparison
          </h3>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-black text-yellow-300 border-4 border-black text-xl font-bold hover:bg-gray-800 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Comparison Table */}
        <div className="p-4 md:p-6 overflow-x-auto">
          <table className="w-full text-xs md:text-sm border-4 border-black bg-white">
            <thead>
              <tr className="bg-yellow-300 border-b-4 border-black">
                <th className="p-2 md:p-3 text-left border-r-4 border-black font-bold">
                  Attribute
                </th>
                {candidates.map((candidate) => (
                  <th
                    key={candidate.id}
                    className="p-2 md:p-3 text-center border-r-4 border-black last:border-r-0 font-bold"
                  >
                    <div className="text-2xl md:text-3xl mb-2">
                      {candidate.partyLogo}
                    </div>
                    <div className="break-words">{candidate.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-black">
              <tr className="border-b-2 border-black">
                <td className="p-2 md:p-3 font-bold border-r-4 border-black bg-gray-100">
                  Party
                </td>
                {candidates.map((candidate) => (
                  <td
                    key={candidate.id}
                    className="p-2 md:p-3 text-center border-r-4 border-black last:border-r-0 break-words"
                  >
                    {candidate.party}
                  </td>
                ))}
              </tr>
              <tr className="border-b-2 border-black">
                <td className="p-2 md:p-3 font-bold border-r-4 border-black bg-gray-100">
                  Age
                </td>
                {candidates.map((candidate) => (
                  <td
                    key={candidate.id}
                    className="p-2 md:p-3 text-center border-r-4 border-black last:border-r-0"
                  >
                    {candidate.age}
                  </td>
                ))}
              </tr>
              <tr className="border-b-2 border-black">
                <td className="p-2 md:p-3 font-bold border-r-4 border-black bg-gray-100">
                  Occupation
                </td>
                {candidates.map((candidate) => (
                  <td
                    key={candidate.id}
                    className="p-2 md:p-3 text-center border-r-4 border-black last:border-r-0 break-words"
                  >
                    {candidate.occupation}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-2 md:p-3 font-bold border-r-4 border-black bg-gray-100">
                  Education
                </td>
                {candidates.map((candidate) => (
                  <td
                    key={candidate.id}
                    className="p-2 md:p-3 text-center border-r-4 border-black last:border-r-0 break-words"
                  >
                    {candidate.education}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t-4 border-black p-4 bg-blue-600">
          <button
            onClick={onClose}
            className="w-full md:w-auto px-6 py-3 bg-yellow-300 text-black border-4 border-black text-sm md:text-base font-bold hover:bg-yellow-400 transition-colors shadow-[4px_4px_0px_#000]"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
}

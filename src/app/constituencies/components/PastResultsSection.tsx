import { parseBool } from "@/lib/utils";
import { SabahDunBallot, SabahDunSummary } from "@/types";

interface VoteSplit {
  name: string;
  party: string;
  percentage: number;
  wasIncumbent: boolean;
}

interface ElectionResult {
  year: string;
  winner: string;
  party: string;
  majorityPerc: number;
  turnout: number;
  voteSplit: VoteSplit[];
}

interface PastResultsData {
  elections: ElectionResult[];
  dataSource: string;
}

/**
 * Transforms the raw ballot and summary data into a structured format
 * suitable for the PastResultsSection component.
 */
const transformElectionData = (
  ballots: SabahDunBallot[],
  summary: SabahDunSummary[]
): PastResultsData => {
  if (!summary || summary.length === 0) {
    return {
      elections: [],
      dataSource: "Official Election Results",
    };
  }

  // 1. Group Ballots by Election (based on 'election' code)
  const ballotsByElection = ballots.reduce((acc, ballot) => {
    const electionCode = ballot.election;
    if (!acc[electionCode]) acc[electionCode] = [];
    acc[electionCode].push(ballot);
    return acc;
  }, {} as Record<string, SabahDunBallot[]>);

  // 2. Process each Election
  const elections: ElectionResult[] = summary.map((s) => {
    const electionCode = s.election;
    const electionBallots = ballotsByElection[electionCode] || [];

    const winnerBallot = electionBallots.find((b) => b.result === "won");

    const voteSplit: VoteSplit[] = electionBallots
      .filter((b) => b.votes_perc > 0)
      .sort((a, b) => b.votes_perc - a.votes_perc)
      .map((b) => ({
        name: b.name,
        party: b.party,
        percentage: Math.round(b.votes_perc * 100) / 100,
        wasIncumbent: parseBool(b.wasIncumbent),
      }));

    const year = s.date.substring(0, 4);

    return {
      year,
      winner: winnerBallot ? winnerBallot.name : "N/A",
      party: winnerBallot ? winnerBallot.party : "N/A",
      majorityPerc: Math.round(s.majority_perc * 100) / 100,
      turnout: Math.round(s.voter_turnout * 100) / 100,
      voteSplit,
    };
  });

  // Sort elections by year (most recent first)
  const sortedElections = elections.sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  );

  return {
    elections: sortedElections,
    dataSource: "Official Election Results",
  };
};

export default function PastResultsSection({
  ballots,
  summary,
}: {
  ballots: SabahDunBallot[];
  summary: SabahDunSummary[];
}) {
  const results = transformElectionData(ballots, summary);

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h3
          className="text-2xl md:text-4xl text-center text-yellow-300 mb-8"
          style={{ textShadow: "3px 3px 0px #000" }}
        >
          Past Election Results
        </h3>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Election Results Cards */}
          {results.elections.map((election) => (
            <div
              key={election.year}
              className="bg-white text-black p-6 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.8)]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-xl md:text-2xl font-bold mb-2">
                    {election.year} Election
                  </h4>
                  <p className="text-sm md:text-base">
                    <span className="font-bold">Winner:</span> {election.winner}
                  </p>
                  <p className="text-sm md:text-base">
                    <span className="font-bold">Party:</span> {election.party}
                  </p>
                  <p className="text-sm md:text-base">
                    <span className="font-bold">Majority:</span>{" "}
                    {election.majorityPerc.toFixed(2)}%
                  </p>
                </div>
                <div className="bg-green-100 border-2 border-black p-3 text-center">
                  <p className="text-xs font-bold mb-1">VOTER TURNOUT</p>
                  <p className="text-2xl font-bold">{election.turnout}%</p>
                </div>
              </div>

              {/* Vote Split */}
              <div>
                <h5 className="font-bold mb-3 text-sm md:text-base">
                  Vote Distribution:
                </h5>
                <div className="space-y-2">
                  {election.voteSplit.map((split, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1 text-xs md:text-sm">
                        <span className="font-bold">
                          {split.name} ({split.party})
                          {split.wasIncumbent && (
                            <span className="ml-2 px-1 py-0.5 bg-yellow-300 text-black border-2 border-black text-[10px] uppercase">
                              Was Incumbent
                            </span>
                          )}
                        </span>
                        <span>{split.percentage}%</span>
                      </div>
                      <div className="h-4 md:h-6 bg-gray-200 border-2 border-black">
                        <div
                          className="h-full bg-purple-500 border-r-2 border-black transition-all duration-500"
                          style={{ width: `${split.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Source */}
        <div className="max-w-5xl mx-auto mt-6">
          <p className="text-xs md:text-sm text-center opacity-75">
            📊 Data Source: {results.dataSource}
          </p>
        </div>
      </div>
    </section>
  );
}

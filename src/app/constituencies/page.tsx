import { getConstituencies, getCandidates } from "@/lib/data";
import { Constituency, Candidate } from "@/types";
import ConstituenciesView from "../components/ConstituenciesView";

export const metadata = {
  title: "All Constituencies",
};

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    
    .pixel-art-container {
      font-family: 'Press Start 2P', cursive;
      background-color: #1e3a8a; /* Deep retro blue */
      background-image:
        linear-gradient(rgba(30, 58, 138, 0.25) 50%, transparent 0),
        linear-gradient(rgba(30, 58, 138, 0.2) 2px, transparent 2px),
        linear-gradient(90deg, rgba(30, 58, 138, 0.2) 2px, transparent 2px);
      background-size: 100% 4px, 15px 15px, 15px 15px;
      color: #ffffff;
      -webkit-font-smoothing: none;
      -moz-osx-font-smoothing: grayscale;
      font-smooth: never;
    }

    .input-focus-pixel:focus {
        outline: none;
        box-shadow: 0 0 0 4px #1e3a8a, 0 0 0 8px #facc15;
    }
  `}</style>
);

type ConstituencyWithCandidates = Constituency & {
  candidates: Candidate[];
};

export default async function ConstituenciesPage() {
  const [constituencies, candidates] = await Promise.all([
    getConstituencies(),
    getCandidates(),
  ]);

  const mappedConstituencies: ConstituencyWithCandidates[] = constituencies.map(
    (c: Constituency) => ({
      ...c,
      candidates: candidates.filter(
        (candidate: Candidate) =>
          candidate.constituency_id.toString() === c.id.toString()
      ),
    })
  );

  return (
    <>
      <GlobalStyles />
      <ConstituenciesView constituencies={mappedConstituencies} />
    </>
  );
}
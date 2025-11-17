import Header from "../components/Header";
import Footer from "../components/Footer";
import ConstituencyBrowser from "./components/ConstituencyBrowser";
import { getConstituencies, getCandidates } from "@/lib/data";
import { Constituency, Candidate } from "@/types";

export const metadata = {
  title: "All Constituencies",
};

// ## GlobalStyles with Thematic Blue Scanlines ##
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    
    .pixel-art-container {
      font-family: 'Press Start 2P', cursive;
      background-color: #1e3a8a; /* Deep retro blue */
      /* Scanlines effect uses dark blue instead of black */
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

    .pixelated-image {
      image-rendering: pixelated;
      image-rendering: -moz-crisp-edges;
      image-rendering: crisp-edges;
    }

    .input-focus-pixel:focus {
        outline: none;
        box-shadow: 0 0 0 4px #1e3a8a, 0 0 0 8px #facc15;
    }
  `}</style>
);

// Extend Constituency to include candidates
type ConstituencyWithCandidates = Constituency & {
  candidates: Candidate[];
};

export default async function ConstituenciesPage() {
  // Fetch constituencies and candidates concurrently
  const [constituencies, candidates] = await Promise.all([
    getConstituencies(),
    getCandidates(),
  ]);

  // Map candidates to their constituency
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
      <div className="flex flex-col min-h-screen pixel-art-container">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h2
              className="text-4xl md:text-5xl text-yellow-300 mb-4"
              style={{ textShadow: "4px 4px 0px #172554" }}
            >
              CHOOSE YOUR ARENA
            </h2>
            <p
              className="text-xl text-white mb-10"
              style={{ textShadow: "2px 2px 0px #172554" }}
            >
              Sabah State Election 2020 Challengers
            </p>
          </div>

          <ConstituencyBrowser constituencies={mappedConstituencies} />
        </main>
        <Footer />
      </div>
    </>
  );
}

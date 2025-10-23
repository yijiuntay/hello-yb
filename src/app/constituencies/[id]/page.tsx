import React from "react";
import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import DemographicsSection from "../components/DemographicsSection";
// import CandidatesSection from "../components/CandidatesSection";
// import PastResultsSection from "../components/PastResultsSection";
// import AccountabilitySection from "../components/AccountabilitySection";
import WorkInProgressBanner from "../components/WorkInProgressBanner";
import { getConstituencies, getCensus } from "@/lib/data";
import { Constituency, CensusDataRecord } from "@/types";

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    
    .pixel-art-container {
      font-family: 'Press Start 2P', cursive;
      background-color: #3b82f6;
      background-image: 
        linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
      background-size: 10px 10px;
      color: #ffffff;
      -webkit-font-smoothing: none;
      -moz-osx-font-smoothing: grayscale;
      font-smooth: never;
    }
  `}</style>
);

export default async function ConstituencyPage({
  params,
}: {
  params: { id: string };
}) {
  // Use Promise.all to fetch multiple data sources concurrently
  const [constituencies, censusData] = await Promise.all([
    getConstituencies(),
    getCensus(),
    // Add more async data fetching functions here
  ]);

  const constituency = constituencies.find(
    (c: Constituency) => c.id === params.id
  );

  if (!constituency) {
    notFound();
  }

  const censusDataRecord = censusData.find(
    (record: CensusDataRecord) => record.constituency_id === params.id
  );

  return (
    <>
      <GlobalStyles />
      <div className="flex flex-col min-h-screen pixel-art-container">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="text-center py-12 md:py-20">
            <div className="container mx-auto px-4">
              <h1
                className="text-3xl md:text-5xl text-yellow-300 mb-4"
                style={{ textShadow: "4px 4px 0px #000" }}
              >
                {constituency.code}
              </h1>
              <h2 className="text-xl md:text-3xl mb-2">{constituency.name}</h2>
              <p className="text-sm md:text-base opacity-90">
                {constituency.state}
              </p>
            </div>
          </section>

          {/* Work In Progress Banner */}
          <WorkInProgressBanner />

          {/* Demographics Section */}
          <DemographicsSection censusDataRecord={censusDataRecord} />

          {/* Candidates Section */}
          {/* <CandidatesSection constituencyId={params.id} /> */}

          {/* Past Results Section */}
          {/* <PastResultsSection results={constituency.pastResults} /> */}

          {/* Accountability Section */}
          {/* <AccountabilitySection constituencyId={params.id} /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}

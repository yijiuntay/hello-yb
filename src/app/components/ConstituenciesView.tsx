"use client";

import Header from "./Header";
import Footer from "./Footer";
import ConstituencyBrowser from "../constituencies/components/ConstituencyBrowser";
import { useLanguage } from "../context/LanguageContext";
import { Constituency, Candidate } from "@/types";

type ConstituencyWithCandidates = Constituency & {
  candidates: Candidate[];
};

export default function ConstituenciesView({ 
  constituencies 
}: { 
  constituencies: ConstituencyWithCandidates[] 
}) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen pixel-art-container">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center">
          <h2
            className="text-4xl md:text-5xl text-yellow-300 mb-4"
            style={{ textShadow: "4px 4px 0px #172554" }}
          >
            {t("ConstituenciesPage.title")}
          </h2>
          <p
            className="text-xl text-white mb-10"
            style={{ textShadow: "2px 2px 0px #172554" }}
          >
            {t("ConstituenciesPage.subtitle")}
          </p>
        </div>

        <ConstituencyBrowser constituencies={constituencies} />
      </main>
      <Footer />
    </div>
  );
}
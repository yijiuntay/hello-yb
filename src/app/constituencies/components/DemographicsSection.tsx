"use client";

import { CensusDataRecord } from "@/types";
import { useLanguage } from "@/app/context/LanguageContext";

export default function DemographicsSection({
  censusDataRecord,
}: {
  censusDataRecord: CensusDataRecord;
}) {
  const { t } = useLanguage();

  // Helper: safely coerce percentage-like values
  const safePercent = (value: unknown): number => {
    const n = typeof value === "number" ? value : Number(value);
    if (!Number.isFinite(n)) return 0;
    return Math.max(0, Math.min(100, n));
  };

  const under18 = Math.max(0, 100 - safePercent(censusDataRecord.age_proportion_18_above));
  const between18and64 = Math.max(0, safePercent(censusDataRecord.age_proportion_18_above) - safePercent(censusDataRecord.age_proportion_65_above));
  const age65Above = safePercent(censusDataRecord.age_proportion_65_above);

  const formattedPopulation = censusDataRecord.population_total.toLocaleString();

  const demographics = {
    ageGroups: [
      { label: t("Demographics.ageGroups.under18"), percentage: under18 },
      { label: t("Demographics.ageGroups.between18and64"), percentage: between18and64 },
      { label: t("Demographics.ageGroups.above65"), percentage: age65Above },
    ],
    ethnicity: [
      { label: t("Demographics.ethnicity.bumiputera"), percentage: censusDataRecord.ethnicity_proportion_bumi },
      { label: t("Demographics.ethnicity.chinese"), percentage: censusDataRecord.ethnicity_proportion_chinese },
      { label: t("Demographics.ethnicity.indian"), percentage: censusDataRecord.ethnicity_proportion_indian },
      { label: t("Demographics.ethnicity.other"), percentage: censusDataRecord.ethnicity_proportion_other },
    ],
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-4xl text-center text-yellow-300 mb-8" style={{ textShadow: "3px 3px 0px #000" }}>
          {t("Demographics.title")}
        </h3>

        <div className="max-w-3xl mx-auto mb-10 text-center">
          <p className="text-lg md:text-2xl font-bold text-white">
            {t("Demographics.totalPopulation")} <span className="text-yellow-300">{formattedPopulation}</span>
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Age Groups */}
          <div className="bg-white text-black p-6 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.8)]">
            <h4 className="text-lg md:text-xl font-bold mb-6 text-center">{t("Demographics.ageDistributionTitle")}</h4>
            <div className="space-y-4">
              {demographics.ageGroups.map((group) => (
                <div key={group.label}>
                  <div className="flex justify-between mb-2 text-xs md:text-sm">
                    <span className="font-bold">{group.label}</span>
                    <span>{safePercent(group.percentage).toFixed(1)}%</span>
                  </div>
                  <div className="h-6 bg-gray-200 border-2 border-black">
                    <div className="h-full bg-blue-500 border-r-2 border-black transition-all duration-500" style={{ width: `${safePercent(group.percentage)}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ethnicity */}
          <div className="bg-white text-black p-6 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.8)]">
            <h4 className="text-lg md:text-xl font-bold mb-6 text-center">{t("Demographics.ethnicCompositionTitle")}</h4>
            <div className="space-y-4">
              {demographics.ethnicity.map((group) => (
                <div key={group.label}>
                  <div className="flex justify-between mb-2 text-xs md:text-sm">
                    <span className="font-bold">{group.label}</span>
                    <span>{safePercent(group.percentage).toFixed(1)}%</span>
                  </div>
                  <div className="h-6 bg-gray-200 border-2 border-black">
                    <div className="h-full bg-green-500 border-r-2 border-black transition-all duration-500" style={{ width: `${safePercent(group.percentage)}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-6">
          <p className="text-xs md:text-sm text-center opacity-75">
            📊 {t("Demographics.dataSourcePrefix")} {t("Demographics.dataSource", { year: censusDataRecord.year })}
          </p>
        </div>
      </div>
    </section>
  );
}
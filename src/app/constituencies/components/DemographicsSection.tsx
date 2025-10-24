import { CensusDataRecord } from "@/types";

export default function DemographicsSection({
  censusDataRecord,
}: {
  censusDataRecord: CensusDataRecord;
}) {
  // Helper: safely coerce percentage-like values (number | string | null | undefined)
  const safePercent = (value: unknown): number => {
    // Convert strings / numbers to numeric value
    const n = typeof value === "number" ? value : Number(value);
    // If conversion failed, fallback to 0
    if (!Number.isFinite(n)) return 0;
    // Clamp to [0, 100]
    return Math.max(0, Math.min(100, n));
  };

  // Calculate derived values
  const under18 = Math.max(
    0,
    100 - safePercent(censusDataRecord.age_proportion_18_above)
  );
  const between18and64 = Math.max(
    0,
    safePercent(censusDataRecord.age_proportion_18_above) -
      safePercent(censusDataRecord.age_proportion_65_above)
  );
  const age65Above = safePercent(censusDataRecord.age_proportion_65_above);

  // Format population nicely
  const formattedPopulation =
    censusDataRecord.population_total.toLocaleString();

  // Map the record fields into structures the UI expects
  const demographics = {
    ageGroups: [
      {
        label: "Under 18 years",
        percentage: under18,
      },
      {
        label: "18–64 years",
        percentage: between18and64,
      },
      {
        label: "65 years and above",
        percentage: age65Above,
      },
    ],
    ethnicity: [
      {
        label: "Bumiputera",
        percentage: censusDataRecord.ethnicity_proportion_bumi,
      },
      {
        label: "Chinese",
        percentage: censusDataRecord.ethnicity_proportion_chinese,
      },
      {
        label: "Indian",
        percentage: censusDataRecord.ethnicity_proportion_indian,
      },
      {
        label: "Other",
        percentage: censusDataRecord.ethnicity_proportion_other,
      },
    ],
    dataSource: `Department of Statistics Malaysia — ${censusDataRecord.year}`,
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h3
          className="text-2xl md:text-4xl text-center text-yellow-300 mb-8"
          style={{ textShadow: "3px 3px 0px #000" }}
        >
          Demographics
        </h3>

        {/* Total Population */}
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <p className="text-lg md:text-2xl font-bold text-white">
            Total Population:{" "}
            <span className="text-yellow-300">{formattedPopulation}</span>
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Age Groups */}
          <div className="bg-white text-black p-6 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.8)]">
            <h4 className="text-lg md:text-xl font-bold mb-6 text-center">
              Age Distribution
            </h4>

            <div className="space-y-4">
              {demographics.ageGroups.map((group) => {
                const pct = safePercent(group.percentage);

                return (
                  <div key={group.label}>
                    <div className="flex justify-between mb-2 text-xs md:text-sm">
                      <span className="font-bold">{group.label}</span>
                      <span>{pct.toFixed(1)}%</span>
                    </div>
                    <div className="h-6 bg-gray-200 border-2 border-black">
                      <div
                        className="h-full bg-blue-500 border-r-2 border-black transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ethnicity */}
          <div className="bg-white text-black p-6 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.8)]">
            <h4 className="text-lg md:text-xl font-bold mb-6 text-center">
              Ethnic Composition
            </h4>
            <div className="space-y-4">
              {demographics.ethnicity.map((group) => {
                const pct = safePercent(group.percentage);

                return (
                  <div key={group.label}>
                    <div className="flex justify-between mb-2 text-xs md:text-sm">
                      <span className="font-bold">{group.label}</span>
                      <span>{pct.toFixed(1)}%</span>
                    </div>
                    <div className="h-6 bg-gray-200 border-2 border-black">
                      <div
                        className="h-full bg-green-500 border-r-2 border-black transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Data Source */}
        <div className="max-w-5xl mx-auto mt-6">
          <p className="text-xs md:text-sm text-center opacity-75">
            📊 Data Source: {demographics.dataSource}
          </p>
        </div>
      </div>
    </section>
  );
}

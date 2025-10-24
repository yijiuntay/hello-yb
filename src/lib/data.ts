import fs from "fs";
import path from "path";

export function readData(file: string) {
  const filePath = path.join(process.cwd(), "data/processed", `${file}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return data;
}

// Example usage:
export const getConstituencies = () => readData("constituencies");
export const getCensus = () => readData("census_dun_sabah");
export const getDunBallots = () => readData("sabah_dun_ballots_fuzzy_cleaned");
export const getDunSummary = () => readData("sabah_dun_summary");
// export const getCandidates = () => readData("candidates");

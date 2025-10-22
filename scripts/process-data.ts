import fs from "fs-extra";
import path from "path";
import { parse } from "csv-parse/sync";
import chokidar from "chokidar";

const RAW_DIR = path.join(process.cwd(), "data/raw");
const OUT_DIR = path.join(process.cwd(), "data/processed");

async function processCSV(file: string) {
  const csvPath = path.join(RAW_DIR, file);
  const jsonPath = path.join(OUT_DIR, file.replace(/\.csv$/, ".json"));

  const csvContent = await fs.readFile(csvPath, "utf-8");
  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });

  await fs.ensureDir(OUT_DIR);
  await fs.writeJson(jsonPath, records, { spaces: 2 });
  console.log(
    `✅ Processed: ${file} → ${path.relative(process.cwd(), jsonPath)}`
  );
}

async function processAllCSVs() {
  const files = (await fs.readdir(RAW_DIR)).filter((f) => f.endsWith(".csv"));
  for (const file of files) {
    await processCSV(file);
  }
  console.log("✨ All CSV files processed.");
}

if (process.argv.includes("--watch")) {
  processAllCSVs();
  console.log("👀 Watching for changes in /data/raw...");
  const watcher = chokidar.watch(`${RAW_DIR}/*.csv`, { ignoreInitial: true });
  watcher.on("change", (file) => processCSV(path.basename(file)));
  watcher.on("add", (file) => processCSV(path.basename(file)));
} else {
  processAllCSVs();
}

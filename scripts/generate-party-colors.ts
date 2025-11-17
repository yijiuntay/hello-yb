#!/usr/bin/env tsx
import fs from "fs";
import path from "path";
import chokidar from "chokidar";
import getColors from "get-image-colors";

const logosDir = path.join(process.cwd(), "public/logos");
const outputFile = path.join(process.cwd(), "src/lib/partyColors.ts");

// Calculate readable text color based on background luminance
const getTextColorForBg = (hex: string): "text-white" | "text-black" => {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  // Perceived brightness
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.6 ? "text-black" : "text-white";
};

const generatePartyColors = async () => {
  const files = fs
    .readdirSync(logosDir)
    .filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f));

  const colors: Record<string, { bg: string; text: string }> = {};

  for (const file of files) {
    try {
      const filePath = path.join(logosDir, file);
      const palette = await getColors(filePath);
      const dominant = palette[0].hex();

      const textColor = getTextColorForBg(dominant);

      // Keep full filename (with extension) as key
      colors[file] = {
        bg: `bg-[${dominant}]`,
        text: textColor,
      };
    } catch (err) {
      console.error(`⚠️ Failed to process ${file}:`, err);
    }
  }

  const output = `
// AUTO-GENERATED FILE — DO NOT EDIT
export const partyColors: Record<string, { bg: string; text: string }> = ${JSON.stringify(
    colors,
    null,
    2
  )};
`;

  fs.writeFileSync(outputFile, output);
  console.log(
    `✅ Generated partyColors.ts with ${Object.keys(colors).length} parties.`
  );
};

// Watch mode for dev
const watchMode = process.argv.includes("--watch");

if (watchMode) {
  console.log("👀 Watching /public/logos for changes...");
  const watcher = chokidar.watch(logosDir, { ignoreInitial: true });

  watcher.on("add", generatePartyColors);
  watcher.on("change", generatePartyColors);
  watcher.on("unlink", generatePartyColors);

  generatePartyColors(); // initial run
} else {
  generatePartyColors(); // build-time
}

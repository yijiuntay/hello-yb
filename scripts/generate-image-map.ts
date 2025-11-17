import fs from "fs";
import path from "path";

const imagesDir = path.join(process.cwd(), "public/logos");
const outputFile = path.join(process.cwd(), "src/lib/imageMap.ts");

// Read all image files
const files = fs
  .readdirSync(imagesDir)
  .filter((f) => /\.(png|jpg|jpeg|webp|gif|svg)$/i.test(f));

const mapEntries = files.map((file) => `  "${file}": "/logos/${file}",`);

const output = `
// AUTO-GENERATED FILE — DO NOT EDIT
export const imageMap = {
${mapEntries.join("\n")}
} as const;

export type ImageFilename = keyof typeof imageMap;
`;

fs.writeFileSync(outputFile, output);
console.log(`✅ Generated imageMap.ts with ${files.length} images.`);

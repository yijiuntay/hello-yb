import fs from "fs";
import path from "path";

const imagesDir = path.join(process.cwd(), "src/images");
const outputFile = path.join(process.cwd(), "src/lib/imageMap.ts");

// Read all image files
const files = fs
  .readdirSync(imagesDir)
  .filter((f) => /\.(png|jpg|jpeg|webp|gif|svg)$/i.test(f));

const imports: string[] = [];
const mapEntries: string[] = [];

files.forEach((file) => {
  const varName = file.replace(/[^a-zA-Z0-9]/g, "_"); // safe TS variable name
  imports.push(`import ${varName} from "@/images/${file}";`);
  mapEntries.push(`  "${file}": ${varName},`);
});

const output = `
// AUTO-GENERATED FILE — DO NOT EDIT
${imports.join("\n")}

export const imageMap = {
${mapEntries.join("\n")}
} as const;

export type ImageFilename = keyof typeof imageMap;
`;

fs.writeFileSync(outputFile, output);
console.log(`✅ Generated imageMap.ts with ${files.length} images.`);

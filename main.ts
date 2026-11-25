// Fortune Cookie for the Liquidated Trader — entry program.
// Reads entry.txt (the single fortune) and copies it to /output.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_BOT_DIR || "/output";
const entry = readFileSync(join(here, "entry.txt"), "utf8");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote ${entry.length} characters to ${join(outDir, "entry.txt")}`);

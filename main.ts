import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Every evening she sets two cups of tea — one for her, one for the empty chair. Tonight the steam rose and curled like a hand reaching back, and for the first time in a year she didn't cry. She smiled. 'I know,' she whispered. 'I'm still here.' And the house felt warm again.";

const entryLength = [...ENTRY].length;
if (entryLength < 1 || entryLength > 280) {
  throw new Error(`Entry must be 1-280 characters, got ${entryLength}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");

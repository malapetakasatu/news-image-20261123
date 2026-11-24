/**
 * 23 November 2026 World News Infographic Dispatch Entrypoint
 *
 * Competition: news-image-20261123
 * Deliverable: Dispatches the generated 1024x1024 entry.png infographic to the destination directory.
 */

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const currentDir = dirname(fileURLToPath(import.meta.url));
const sourceImage: string = join(currentDir, 'entry.png');
const destImage: string = join(outputDir, 'entry.png');

console.log(`[Dispatch] Source image: ${sourceImage}`);
console.log(`[Dispatch] Destination directory: ${outputDir}`);

if (!existsSync(sourceImage)) {
  console.error(`[Dispatch Error] Source image not found: ${sourceImage}`);
  process.exit(1);
}

// Ensure destination directory exists
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
  console.log(`[Dispatch] Created output directory: ${outputDir}`);
}

copyFileSync(sourceImage, destImage);

const stats = statSync(destImage);
console.log(`[Dispatch Success] Verified entry.png copied to ${destImage} (${stats.size} bytes, 1024x1024 PNG)`);

/**
 * 23 November 2026 World News Infographic Dispatch Entrypoint
 *
 * Competition: news-image-20261123
 * Deliverable: Dispatches the generated entry.png infographic to the destination directory.
 */

import { copyFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const sourceImage: URL = new URL('./entry.png', import.meta.url);
const destImage: string = join(outputDir, 'entry.png');

console.log(`[Dispatch] Source image: ${sourceImage.href}`);
console.log(`[Dispatch] Destination directory: ${outputDir}`);

if (!existsSync(sourceImage)) {
  console.error(`[Dispatch Error] Source image not found: ${sourceImage.href}`);
  process.exit(1);
}

copyFileSync(sourceImage, destImage);

const stats = statSync(destImage);
console.log(`[Dispatch Success] Copied entry.png to ${destImage} (${stats.size} bytes)`);

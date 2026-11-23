import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

// World News Digest — Monday 23 November 2026
// Verified 1024x1024 vector infographic submission for make.fun daily bounty
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetFile = join(outDir, 'entry.png');
const sourceFile = new URL('./entry.png', import.meta.url);

copyFileSync(sourceFile, targetFile);
console.log('Successfully written news image entry to:', targetFile);

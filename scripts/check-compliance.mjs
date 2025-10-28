// Why:
// - Provide a simple, CI-friendly scanner for HPCSA-problematic terms in MDX content
// - Help prevent risky language (superlatives, guarantees, inducements) from merging
// - Outputs file:line and exits non-zero on violations for easy CI integration
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOT = process.cwd();
const CONTENT_DIR = join(ROOT, 'content');

// Regex with word boundaries for single words; phrases match anywhere.
// eslint-disable-next-line no-useless-escape
const banned = new RegExp(
  String.raw`\b(best|guaranteed|cure|superior|miracle)\b|#1|testimonial(s)?|before and after|free consultation|lowest price|no risk`,
  'i',
);

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(p);
    } else if (e.isFile() && p.endsWith('.mdx')) {
      yield p;
    }
  }
}

async function main() {
  // Ensure content directory exists
  try {
    const s = await stat(CONTENT_DIR);
    if (!s.isDirectory()) throw new Error('content is not a directory');
  } catch (e) {
    console.error('No content directory found. Skipping.');
    process.exit(0);
  }

  let count = 0;
  for await (const file of walk(CONTENT_DIR)) {
    const data = await readFile(file, 'utf8');
    const lines = data.split(/\r?\n/);
    lines.forEach((line, idx) => {
      const m = line.match(banned);
      if (m) {
        count++;
        const col = line.toLowerCase().indexOf(m[0].toLowerCase()) + 1;
        const rel = relative(ROOT, file);
        // Print in a grep-like format
        console.log(`${rel}:${idx + 1}:${col} banned-term: "${m[0]}"`);
      }
    });
  }

  if (count > 0) {
    console.error(`\nFound ${count} potential compliance issues.`);
    process.exit(1);
  } else {
    console.log('No compliance issues found.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

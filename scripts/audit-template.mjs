// Why:
// - Provide a quick audit to confirm template features are present
// - Prints a simple checklist and exits 0 (informational)
import { access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const checks = [
  ['BookingWidget component', 'app/components/BookingWidget.tsx'],
  ['MapEmbed component', 'app/components/map/MapEmbed.tsx'],
  ['LocalBusinessSchema component', 'app/components/seo/LocalBusinessSchema.tsx'],
  ['AnalyticsHead component', 'app/components/analytics/AnalyticsHead.tsx'],
  ['MDX page: index', 'content/pages/index.mdx'],
  ['MDX page: services', 'content/pages/services.mdx'],
  ['MDX page: contact', 'content/pages/contact.mdx'],
  ['OG API route', 'app/api/og/route.tsx'],
];

async function exists(p) {
  try {
    await access(join(root, p), constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const rows = await Promise.all(
    checks.map(async ([label, path]) => {
      const ok = await exists(path);
      return { label, path, ok };
    }),
  );
  const width = Math.max(...rows.map((r) => r.label.length)) + 4;
  for (const r of rows) {
    const pad = ' '.repeat(width - r.label.length);
    console.log(`${r.ok ? '✅' : '❌'}  ${r.label}${pad}${r.path}`);
  }
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

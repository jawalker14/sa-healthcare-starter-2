// Why:
// - Provide a dynamic Open Graph image for pages without a custom ogImage
// - Ensure brand consistency and readable typography
// - Avoid secrets; rely on public env and fallbacks
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

const brandBg = '#27287B'; // vv.navy
const brandText = '#F5F7FA'; // vv.bg as light text

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'SA Healthcare';
  const site = process.env.NEXT_PUBLIC_SITE_URL || '';
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: brandBg,
          color: brandText,
          padding: '64px',
        }}
      >
        <div style={{ fontSize: 48, opacity: 0.9 }}>SA Healthcare</div>
        <div style={{ fontSize: 86, fontWeight: 700, lineHeight: 1.1, marginTop: 12, maxWidth: 1000 }}>{title}</div>
        {site ? (
          <div style={{ fontSize: 28, opacity: 0.7, marginTop: 24 }}>{site.replace(/^https?:\/\//, '')}</div>
        ) : null}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

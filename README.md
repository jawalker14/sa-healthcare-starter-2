# SA Healthcare Starter

This is a Next.js starter template designed for South African healthcare practices, ensuring compliance with HPCSA and POPIA regulations. It utilizes TypeScript, Tailwind CSS, and MDX for content management.

## Features

- **Next.js with App Router**: Leverage the latest features of Next.js for routing and server-side rendering.
- **MDX Support**: Create content pages and blog posts using MDX, allowing for rich formatting and components.
- **Tailwind CSS**: Utilize Tailwind for styling, ensuring a responsive and modern design.
- **Compliance**: Includes microcopy for HPCSA and POPIA compliance.

## UI Style Guide

This starter ships with a minimal, premium aesthetic suitable for healthcare, emphasizing clarity, calm, and accessibility.

### Theme tokens

- Font: Montserrat (via next/font). Base sizing ~17px for comfortable reading.
- Palette:
   - brand.navy: #0B1F3B (primary)
   - brand.slate: #334155 with slateLight #64748B for muted text
   - brand.white: #FFFFFF
- Radii: rounded-2xl default for surfaces; subtle rounded-xl on controls.
- Shadows: soft, soft-lg for gentle elevation without harsh blur.

Configured in `tailwind.config.ts` with utilities like:
- `.focus-ring` for accessible focus outlines
- `.card-base` shared card surface
- `.container-x` consistent page gutters

### Components

All in `app/components/ui/` and also available inside MDX via `app/mdx-components.tsx`:
- Hero: page-leading header with optional eyebrow, subtitle, and actions.
- Section: vertical rhythm and container; handles title/subtitle.
- Card: surface with soft shadow and subtle hover lift (reduced-motion aware).
- CTA: buttons/links in primary, secondary, and ghost variants with AA contrast.

### Accessibility

- Skip to content link becomes visible on focus and targets `#main-content`.
- Focus styles use high-contrast ring on brand navy with offset for visibility.
- Color contrast meets WCAG AA for text and interactive states in light mode.
- Motion respects `prefers-reduced-motion` to remove nonessential animation.

### Usage examples

Hero + CTAs:

```
import Hero from '@/app/components/ui/Hero';
import CTA from '@/app/components/ui/CTA';

<Hero eyebrow="Welcome" title="Your health, our priority" subtitle="Compassionate, evidence-based care for the whole family.">
   <CTA href="/contact" variant="primary">Book an appointment</CTA>
   <CTA href="/services" variant="secondary">Explore services</CTA>
   <CTA href="/about" variant="ghost">Meet the team</CTA>
</Hero>
```

Section + Card grid:

```
import Section from '@/app/components/ui/Section';
import Card from '@/app/components/ui/Card';

<Section title="Our services" subtitle="Comprehensive primary care and preventative medicine.">
   <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card title="General Checkups" eyebrow="Primary Care">Routine assessments and health optimization.</Card>
      <Card title="Women’s Health">Cervical screening, contraception, and counseling.</Card>
      <Card title="Chronic Care">Evidence-based management plans and follow-ups.</Card>
   </div>
  
</Section>
```

### Notes

- Ensure Montserrat is loaded via `(site)/layout.tsx` or the shared `Layout` component (pre-wired with next/font).
- For body copy in MDX, `.prose` styles are available via Tailwind Typography.

## Project Structure

```
sa-healthcare-starter
├── app
│   ├── api
│   ├── health
│   ├── (site)
│   ├── components
│   ├── lib
│   ├── mdx-components.tsx
│   └── globals.css
├── content
│   ├── data
│   ├── pages
│   ├── posts
│   └── partials
├── public
├── types
├── .env.example
├── .gitignore
├── cwv-budget.json
├── eslint.config.mjs
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/sa-healthcare-starter.git
   cd sa-healthcare-starter
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Development Server

To start the development server, run:
```
npm run dev
```
This will start the application at `http://localhost:3000`.

### Building for Production

To build the application for production, run:
```
npm run build
```

### Editing Content

Content is managed through MDX files located in the `content/pages` and `content/posts` directories. You can create new pages or blog posts by adding new `.mdx` files.

## What’s editable without a CMS

You can update content and settings directly in the repo:

- content/data/settings.json
   - analytics.googleAnalytics: GA4 Measurement ID (or UA; GA4 preferred)
   - analytics.schemaEnabled: enables FAQ schema when true
   - analytics.enableGA4 / analytics.enableGSC: feature toggles for GA4 and Google Search Console
   - analytics.gscVerification: Google Search Console site verification token
- MDX pages under `content/pages`
   - team.mdx exports an array for <TeamList />
   - faq.mdx exports an array for <FaqList />; schema follows the toggle
   - resources.mdx is a blog index scaffold; add posts later under `content/posts`
- MDX posts under `content/posts` (optional)

Guardrails (HPCSA/POPIA) remain in the components and microcopy; avoid testimonials or claims of superiority.

## GA4 + Google Search Console

Preferred: environment variables

Create `.env.local`:

```
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_VERIFICATION=your-verification-token
```

Then enable toggles in `content/data/settings.json`:

```
{
   "analytics": {
      "enableGA4": true,
      "enableGSC": true
   }
}
```

Fallback: set IDs only in settings.json, leaving env vars unset.

Wiring:

- GA4 is injected via `app/components/analytics/AnalyticsHead.tsx` and included in `(site)/layout.tsx`.
- GSC is added via a verification meta tag when enabled.

If env vars are not present, the components gracefully do not render any scripts/meta tags.

### Health Check

The application includes a health check route at `/health` that returns a JSON response:
```
{ "ok": true }
```

## Compliance

Ensure that all content adheres to HPCSA and POPIA regulations. The compliance microcopy can be found in `content/partials/compliance.mdx`.

### HPCSA Compliance Checklist

- Avoid superlatives or guarantees (e.g., “best”, “#1”, “guaranteed”, “miracle”).
- Do not promise outcomes or cures; do not use “before and after” or testimonials.
- No inducements such as “free consultation” or “lowest price”.
- Provide balanced, factual information; describe suitability and limitations.
- Ensure POPIA-aligned handling of personal information.

You can run an automated check locally:

```
npm run check:compliance
```

The script scans `content/**/*.mdx` and reports file:line for flagged terms.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
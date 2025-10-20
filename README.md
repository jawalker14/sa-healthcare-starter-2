# SA Healthcare Starter

This is a Next.js starter template designed for South African healthcare practices, ensuring compliance with HPCSA and POPIA regulations. It utilizes TypeScript, Tailwind CSS, and MDX for content management.

## Features

- **Next.js with App Router**: Leverage the latest features of Next.js for routing and server-side rendering.
- **MDX Support**: Create content pages and blog posts using MDX, allowing for rich formatting and components.
- **Tailwind CSS**: Utilize Tailwind for styling, ensuring a responsive and modern design.
- **Compliance**: Includes microcopy for HPCSA and POPIA compliance.

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

### Health Check

The application includes a health check route at `/health` that returns a JSON response:
```
{ "ok": true }
```

## Compliance

Ensure that all content adheres to HPCSA and POPIA regulations. The compliance microcopy can be found in `content/partials/compliance.mdx`.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
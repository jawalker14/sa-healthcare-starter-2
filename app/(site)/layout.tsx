// Why:
// - Apply Montserrat via next/font at the root to avoid CLS and ensure consistent typography
// - Provide default metadata shell for SEO; set sensible site-wide defaults
// - Establish base background and structure for App Router layout
import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipToContent from '../components/SkipToContent';
import ConsentNotice from '../components/ConsentNotice';
import { AnalyticsScripts, GoogleSiteVerificationMeta } from '../components/analytics/AnalyticsHead';
import { Montserrat } from 'next/font/google';
import WhatsAppCTA from '../components/WhatsAppCTA';

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', weight: ['300','400','500','600','700'] });

const siteName = 'SA Healthcare';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s · ${siteName}`,
  },
  description: 'Accessible healthcare information and services in South Africa.',
  applicationName: siteName,
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  openGraph: {
    siteName,
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA" suppressHydrationWarning>
      <head>
        <GoogleSiteVerificationMeta />
      </head>
      <body className={`${montserrat.className} bg-vv-bg text-brand-slate antialiased`}>
        <SkipToContent />
        <Header />
        <main id="main-content" className="min-h-[60vh]">
          {children}
        </main>
        <Footer />
        <ConsentNotice />
        {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ? (
          <WhatsAppCTA phone={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER} />
        ) : null}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
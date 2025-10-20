import React from 'react';
import Script from 'next/script';
import siteSettings from '@/content/data/settings.json';

const ga4Id = process.env.NEXT_PUBLIC_GA4_ID || siteSettings.analytics?.googleAnalytics || '';

export function AnalyticsScripts() {
  // Toggle must be on and an ID present
  const enabled = Boolean(siteSettings.analytics?.enableGA4 && ga4Id);
  if (!enabled) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${ga4Id}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}

export function GoogleSiteVerificationMeta() {
  const token = process.env.NEXT_PUBLIC_GSC_VERIFICATION || siteSettings.analytics?.gscVerification || '';
  const enabled = Boolean(siteSettings.analytics?.enableGSC && token);
  if (!enabled) return null;
  return <meta name="google-site-verification" content={token} />;
}

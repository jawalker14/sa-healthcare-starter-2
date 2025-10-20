import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipToContent from '../components/SkipToContent';
import ConsentNotice from '../components/ConsentNotice';
import { AnalyticsScripts, GoogleSiteVerificationMeta } from '../components/analytics/AnalyticsHead';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', weight: ['300','400','500','600','700'] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={montserrat.className}>
      <GoogleSiteVerificationMeta />
      <SkipToContent />
      <Header />
      <main id="main-content" className="min-h-[60vh]">
        {children}
      </main>
      <Footer />
      <ConsentNotice />
  <AnalyticsScripts />
    </div>
  );
};

export default Layout;
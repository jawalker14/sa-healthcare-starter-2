import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipToContent from '../components/SkipToContent';
import ConsentNotice from '../components/ConsentNotice';
import { AnalyticsScripts, GoogleSiteVerificationMeta } from '../components/analytics/AnalyticsHead';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <GoogleSiteVerificationMeta />
      <SkipToContent />
      <Header />
      <main>{children}</main>
      <Footer />
      <ConsentNotice />
  <AnalyticsScripts />
    </div>
  );
};

export default Layout;
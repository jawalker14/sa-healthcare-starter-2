import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Header from './components/Header';
import Footer from './components/Footer';
import SkipToContent from './components/SkipToContent';
import ConsentNotice from './components/ConsentNotice';
import WhatsAppCTA from './components/WhatsAppCTA';
import MapLink from './components/MapLink';

const components = {
  // Add custom components here
  MapLink,
  WhatsAppCTA,
};

const MDXComponents = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <Header />
      <SkipToContent />
      <main>{children}</main>
      <Footer />
      <ConsentNotice />
    </MDXProvider>
  );
};

export default MDXComponents;
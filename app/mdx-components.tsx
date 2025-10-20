import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Header from './components/Header';
import Footer from './components/Footer';
import SkipToContent from './components/SkipToContent';
import ConsentNotice from './components/ConsentNotice';
import WhatsAppCTA from './components/WhatsAppCTA';
import MapLink from './components/MapLink';
import Hero from './components/ui/Hero';
import Section from './components/ui/Section';
import Card from './components/ui/Card';
import CTA from './components/ui/CTA';

const components = {
  // Add custom components here
  MapLink,
  WhatsAppCTA,
  Hero,
  Section,
  Card,
  CTA,
};

const MDXComponents: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
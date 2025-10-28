// Why:
// - Provide a consistent page frame when used inside non-App Router contexts/components
// - Ensure base background and spacing with container widths
// - Avoid font CLS by relying on next/font (still included for safety here)
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SkipToContent from './SkipToContent';
import ConsentNotice from './ConsentNotice';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', weight: ['300','400','500','600','700'] });

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={`flex min-h-screen flex-col bg-vv-bg text-brand-slate ${montserrat.className}`}>
            <SkipToContent />
            <Header />
            <main id="main-content" className="flex-grow">
                <div className="container-x py-8 sm:py-10">
                    {children}
                </div>
            </main>
            <Footer />
            <ConsentNotice />
        </div>
    );
};

export default Layout;
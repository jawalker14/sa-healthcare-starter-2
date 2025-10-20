import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SkipToContent from './SkipToContent';
import ConsentNotice from './ConsentNotice';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap', weight: ['300','400','500','600','700'] });

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={`flex flex-col min-h-screen ${montserrat.className}`}>
            <SkipToContent />
            <Header />
            <main id="main-content" className="flex-grow">
                {children}
            </main>
            <Footer />
            <ConsentNotice />
        </div>
    );
};

export default Layout;
import React from 'react';

const SkipToContent: React.FC = () => {
    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-navy focus:text-white focus:px-4 focus:py-2 focus:rounded-xl focus:shadow-soft focus-ring"
        >
            Skip to main content
        </a>
    );
};

export default SkipToContent;
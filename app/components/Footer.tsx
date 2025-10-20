import React from 'react';
import Compliance from '../../content/partials/compliance.mdx';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-navy text-white mt-16" role="contentinfo">
            <div className="container-x py-10">
                <div className="prose prose-invert max-w-none">
                    <Compliance />
                </div>
                <div className="mt-6 flex flex-col items-center gap-2 text-sm text-white/80">
                    <p>&copy; {new Date().getFullYear()} Your Practice Name. All rights reserved.</p>
                    <p className="flex gap-3">
                        <a href="/privacy-policy" className="underline underline-offset-4 hover:text-white focus-ring">Privacy Policy</a>
                        <span aria-hidden="true">·</span>
                        <a href="/terms-of-service" className="underline underline-offset-4 hover:text-white focus-ring">Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
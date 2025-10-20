import React from 'react';
import Compliance from '../../content/partials/compliance.mdx';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <Compliance />
                <div className="mt-4">
                    <p>&copy; {new Date().getFullYear()} Your Practice Name. All rights reserved.</p>
                    <p>
                        <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a> | 
                        <a href="/terms-of-service" className="text-gray-400 hover:text-white"> Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
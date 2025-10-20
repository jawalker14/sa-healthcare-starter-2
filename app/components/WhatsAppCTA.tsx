import React from 'react';

const WhatsAppCTA: React.FC = () => {
    const whatsappNumber = 'YOUR_WHATSAPP_NUMBER'; // Replace with actual WhatsApp number
    const message = 'Hello, I would like to get in touch!';

    return (
        <div className="fixed bottom-4 right-4">
            <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
                aria-label="Contact us on WhatsApp"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3 3h18v18H3z" />
                    <path d="M3 3l18 18" />
                </svg>
            </a>
        </div>
    );
};

export default WhatsAppCTA;
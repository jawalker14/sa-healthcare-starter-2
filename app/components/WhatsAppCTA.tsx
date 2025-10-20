import React from 'react';
import Link from 'next/link';

const WhatsAppCTA: React.FC<{ phone?: string; message?: string }> = ({ phone = 'YOUR_WHATSAPP_NUMBER', message = 'Hello, I would like to get in touch!' }) => {
    const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    return (
        <div className="fixed bottom-4 right-4">
            <Link
                href={href}
                aria-label="Contact us on WhatsApp"
                className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25D366] text-white shadow-soft transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg focus-ring motion-reduce:transition-none motion-reduce:hover:transform-none"
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
                    <path d="M16.72 13.06c-.24-.12-1.41-.69-1.63-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.97-1.21-.73-.65-1.22-1.45-1.36-1.69-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.74-1.77-.2-.48-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01s-.42.06-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.59 4.12 3.63.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.41-.57 1.61-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28z" />
                    <path d="M20.52 3.49A10 10 0 1 0 3.5 20.51l.26.16 2.29-.61a1 1 0 0 1 .76.09l1.33.71a10 10 0 0 0 12.4-15.37l-.02.01z" />
                </svg>
            </Link>
        </div>
    );
};

export default WhatsAppCTA;
// Why:
// - Provide an embeddable Google Map for contact/visit context
// - Prefer Place ID via env to avoid fragile query strings; degrade to address when missing
// - Responsive wrapper maintains aspect ratio and accessibility
import React from 'react';

type Props = {
  title?: string;
  address?: string; // fallback address if placeId not configured
  className?: string;
  height?: number;
};

const placeId = process.env.NEXT_PUBLIC_MAPS_EMBED_PLACE_ID;

const MapEmbed: React.FC<Props> = ({ title = 'Map', address, className, height = 420 }) => {
  const api = 'https://www.google.com/maps/embed/v1/place';
  const q = address || 'South Africa';
  // Use keyless public embed when possible via URL format with pb param; else use simple place search
  const src = placeId
    ? `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1s0x0:0x0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5m2!1sen!2sza&q=place_id:${encodeURIComponent(
        placeId,
      )}`
    : `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

  return (
    <section className={className} aria-label="Location map">
      {title ? <h2 className="text-xl font-semibold text-brand-navy mb-3">{title}</h2> : null}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 shadow-soft" style={{ height }}>
        <iframe
          title={title}
          src={src}
          loading="lazy"
          className="absolute inset-0 h-full w-full"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default MapEmbed;
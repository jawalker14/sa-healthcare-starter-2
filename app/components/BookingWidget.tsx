// Why:
// - Provide an inline booking option via Calendly or EHR, driven by env
// - Gracefully fallback to mailto if URL not configured
// - Compact mode enables smaller embed for homepage usage
import React from 'react';

type Props = {
  compact?: boolean;
  title?: string;
  className?: string;
};

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || process.env.CALENDLY_URL;

const BookingWidget: React.FC<Props> = ({ compact, title = 'Book an appointment', className }) => {
  if (!CALENDLY_URL) {
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@example.com';
    return (
      <div className={className}>
        {title ? <h2 className="text-xl font-semibold text-brand-navy mb-3">{title}</h2> : null}
        <p className="text-brand-slate">
          Online booking is currently unavailable. Please contact us at{' '}
          <a className="underline" href={`mailto:${email}`}>{email}</a> to request an appointment.
        </p>
      </div>
    );
  }

  const height = compact ? 520 : 720;

  return (
    <section className={className} aria-label="Booking widget">
      {title ? <h2 className="text-xl font-semibold text-brand-navy mb-3">{title}</h2> : null}
      <div className="card-base overflow-hidden">
        <iframe
          title="Appointment booking"
          src={CALENDLY_URL}
          loading="lazy"
          width="100%"
          height={height}
          className="block w-full"
          style={{ border: 0 }}
        />
      </div>
    </section>
  );
};

export default BookingWidget;
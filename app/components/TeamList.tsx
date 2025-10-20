import Image from 'next/image';
import React from 'react';

export type TeamMember = {
  name: string;
  role: string;
  credentials?: string;
  registrationNumber?: string;
  avatarUrl?: string;
  bio?: string;
};

export default function TeamList({ items }: { items: TeamMember[] }) {
  if (!items || items.length === 0) return null;
  return (
    <section aria-label="Our Team">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((m) => (
          <li key={m.name} className="rounded-lg border p-4">
            {m.avatarUrl ? (
              <div className="mb-3">
                <Image
                  src={m.avatarUrl}
                  alt={`${m.name} portrait`}
                  width={256}
                  height={256}
                  className="h-32 w-32 rounded-full object-cover"
                />
              </div>
            ) : null}
            <h3 className="text-lg font-semibold">{m.name}</h3>
            <p className="text-sm text-gray-600">
              {m.role}
              {m.credentials ? ` • ${m.credentials}` : ''}
            </p>
            {m.registrationNumber ? (
              <p className="mt-1 text-xs text-gray-500">Registration: {m.registrationNumber}</p>
            ) : null}
            {m.bio ? <p className="mt-3 text-sm">{m.bio}</p> : null}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs text-gray-500">
        Note: Profiles are informational only and do not constitute medical advice. In an emergency,
        call 112 or 10177. Content adheres to HPCSA advertising guidelines; no testimonials or claims
        of superiority are presented.
      </p>
    </section>
  );
}

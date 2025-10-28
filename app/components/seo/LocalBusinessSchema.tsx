// Why:
// - Provide structured data for LocalBusiness (MedicalClinic/Physician) to enhance search visibility
// - Flexible props with graceful omission of optional fields
// - Avoid duplicates and ensure valid JSON-LD in App Router
import React from 'react';

type Address = {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
};

type Geo = {
  latitude: number;
  longitude: number;
};

type Props = {
  type?: 'MedicalClinic' | 'Physician';
  name: string;
  telephone: string;
  address: Address;
  geo?: Geo;
  sameAs?: string[];
  url?: string;
  openingHours?: string[]; // e.g., ["Mo-Fr 08:00-17:00", "Sa 09:00-13:00"]
};

const LocalBusinessSchema: React.FC<Props> = ({
  type = 'MedicalClinic',
  name,
  telephone,
  address,
  geo,
  sameAs,
  url,
  openingHours,
}) => {
  const jsonLd: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    telephone,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
  };

  if (url) jsonLd.url = url;
  if (sameAs && sameAs.length) jsonLd.sameAs = sameAs;
  if (geo) jsonLd.geo = { '@type': 'GeoCoordinates', ...geo };
  if (openingHours && openingHours.length) jsonLd.openingHours = openingHours;

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default LocalBusinessSchema;
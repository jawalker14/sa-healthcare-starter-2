import React from 'react';

type FaqItem = {
  question: string;
  answerText: string;
};

export default function FaqSchema({ items, enabled }: { items: FaqItem[]; enabled: boolean }) {
  if (!enabled || !items || items.length === 0) return null;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.question,
      acceptedAnswer: { '@type': 'Answer', text: i.answerText },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

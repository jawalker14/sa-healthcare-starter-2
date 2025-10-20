import React, { ReactNode } from 'react';
import FaqSchema from './seo/FaqSchema';

export type FaqItem = {
  question: string;
  answer: ReactNode;
  answerText?: string;
};

export default function FaqList({ items, enableSchema = false }: { items: FaqItem[]; enableSchema?: boolean }) {
  return (
    <section aria-label="Frequently Asked Questions">
      <dl className="space-y-6">
        {items.map((f) => (
          <div key={String(f.question)}>
            <dt className="font-medium">{f.question}</dt>
            <dd className="mt-2 text-sm text-gray-700">{f.answer}</dd>
          </div>
        ))}
      </dl>

      <FaqSchema
        enabled={enableSchema}
        items={items.map((i) => ({
          question: i.question,
          answerText: i.answerText ?? (typeof i.answer === 'string' ? i.answer : ''),
        }))}
      />

      <p className="mt-6 text-xs text-gray-500">
        Information is general in nature and not a substitute for professional medical advice, diagnosis, or
        treatment. For emergencies, call 112 or 10177.
      </p>
    </section>
  );
}

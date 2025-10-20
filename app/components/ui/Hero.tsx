import React from 'react';
import clsx from 'clsx';

type HeroProps = {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  children?: React.ReactNode; // actions or extra
  align?: 'left' | 'center';
};

const Hero: React.FC<HeroProps> = ({ eyebrow, title, subtitle, children, align = 'center' }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="container-x py-16 sm:py-20">
        <div className={clsx('mx-auto', align === 'center' ? 'text-center max-w-3xl' : 'max-w-3xl')}
          style={{
            viewTransitionName: 'hero',
          }}
        >
          {eyebrow && (
            <p className="text-sm font-semibold tracking-wide text-brand-slate/80 uppercase mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className={clsx('text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-navy')}>{title}</h1>
          {subtitle && (
            <p className="mt-4 text-lg text-brand-slate/90">
              {subtitle}
            </p>
          )}
          {children && (
            <div className={clsx('mt-8 flex flex-wrap gap-3', align === 'center' ? 'justify-center' : '')}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

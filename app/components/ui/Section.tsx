import React, { ElementType } from 'react';
import clsx from 'clsx';

type SectionProps<T extends ElementType = 'section'> = {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: T;
};

const Section = <T extends ElementType = 'section'>({ title, subtitle, children, className, containerClassName, as }: SectionProps<T>) => {
  const Tag = (as || 'section') as ElementType;
  return (
    <Tag className={clsx('py-12 sm:py-16', className)}>
      <div className={clsx('container-x', containerClassName)}>
        {(title || subtitle) && (
          <header className="max-w-3xl mb-8">
            {title && <h2 className="text-2xl sm:text-3xl font-semibold text-brand-navy">{title}</h2>}
            {subtitle && <p className="mt-2 text-brand-slate/90">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </Tag>
  );
};

export default Section;

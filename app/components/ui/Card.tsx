import React, { ElementType } from 'react';
import clsx from 'clsx';

type CardProps<T extends ElementType = 'article'> = {
  title?: string | React.ReactNode;
  eyebrow?: string;
  children?: React.ReactNode;
  as?: T;
  className?: string;
  footer?: React.ReactNode;
};

const Card = <T extends ElementType = 'article'>({ title, eyebrow, children, as, className, footer }: CardProps<T>) => {
  const Tag = (as || 'article') as ElementType;
  return (
    <Tag
      className={clsx(
        'card-base p-6 sm:p-8 transition-transform duration-300 will-change-transform',
        'hover:-translate-y-0.5 hover:shadow-soft-lg',
        'motion-reduce:transition-none motion-reduce:hover:transform-none',
        className,
      )}
    >
      {(eyebrow || title) && (
        <header className="mb-4">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-slate/70 mb-1">{eyebrow}</p>
          )}
          {title && (
            <h3 className="text-lg sm:text-xl font-semibold text-brand-navy">{title}</h3>
          )}
        </header>
      )}
      {children && <div className="text-brand-slate/90">{children}</div>}
      {footer && <div className="mt-6">{footer}</div>}
    </Tag>
  );
};

export default Card;

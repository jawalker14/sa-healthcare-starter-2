import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'ghost';

type CTAProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  as?: 'button' | 'a';
};

const base = 'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold focus-ring transition-colors duration-250';

const styles: Record<Variant, string> = {
  primary: 'bg-brand-navy text-white hover:bg-brand-navy/90',
  secondary: 'bg-white text-brand-navy border border-slate-200/70 hover:bg-slate-50',
  ghost: 'bg-transparent text-brand-navy hover:bg-slate-100',
};

const CTA: React.FC<CTAProps> = ({ href, onClick, children, variant = 'primary', className, as }) => {
  const cls = clsx(base, styles[variant], 'motion-reduce:transition-none', className);
  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
};

export default CTA;

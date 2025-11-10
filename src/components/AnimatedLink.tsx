import Link, { LinkProps } from 'next/link';
import React from 'react';

type AnimatedLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedLink({ children, className, ...linkProps }: AnimatedLinkProps) {
  const base = 'inline-flex items-center gap-2 text-base font-regular tracking-normal group relative cursor-pointer';

  return (
    // merge with provided className (preserve base)
    <Link {...linkProps} className={`${base} ${className ?? ''}`}>
      <span>{children}</span>
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
      <span
        aria-hidden
        className="absolute left-0 bottom-0 h-px bg-current w-[20%] group-hover:w-full transition-all duration-300 ease-in-out translate-y-1"
      />
    </Link>
  );
}

import React from 'react';

type Variant = 'primary' | 'secondary';

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}

export default function ButtonLink({
  href,
  variant = 'primary',
  children,
  className = '',
}: ButtonLinkProps) {
  const base = 'inline-block px-6 py-3 text-center';
  const styles =
		variant === 'primary'
			? 'bg-[#8B6B4E] text-white shadow'
			: 'bg-[#F5EBDD] text-[#3C2F28]';

  return (
    <a href={href} role="button" className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

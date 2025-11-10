import React from 'react';

type Props = {
  eyebrow: React.ReactNode;
  heading: React.ReactNode;
  className?: string;
  animate?: boolean;
};

export default function SectionHeader({
  eyebrow,
  heading,
  className = '',
  animate = true,
}: Props) {
  return (
    <div className={`col-span-12 text-center ${className}`}>
      <p
        className={`uppercase tracking-[0.06em] text-base text-[#9C8F80] ${
          animate ? 'animate-fadeUp' : ''
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-4xl tracking-[0.08em] md:text-4xl text-[#2F2A23] ${
          animate ? 'animate-fadeUp delay-100' : ''
        }`}
      >
        {heading}
      </h2>
    </div>
  );
}

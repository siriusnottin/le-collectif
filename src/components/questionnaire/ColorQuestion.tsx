'use client';

import { QuestionComponentProps } from './types';

const hexToRgb = (hex?: string) => {
	if (!hex) return null;
	const cleaned = hex.replace('#', '');
	if (cleaned.length !== 6) return null;
	const value = Number.parseInt(cleaned, 16);
	if (Number.isNaN(value)) return null;
	const r = (value >> 16) & 255;
	const g = (value >> 8) & 255;
	const b = value & 255;
	return `${r}, ${g}, ${b}`;
};

export default function ColorQuestion({ options, isSelected, onSelect }: QuestionComponentProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {options.map(option => {
        const rgbValue = hexToRgb(option.color);
        const handleClick = () => onSelect(option.value);
        return (
					<button
						key={option.id}
						onClick={handleClick}
						className={`relative overflow-hidden rounded-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-fench-bistre/50 ${
							isSelected(option.value)
								? 'ring-4 ring-brand-fench-bistre shadow-soft-lg'
								: 'hover:shadow-soft-lg'
						} bg-white border border-[#ede2d4]`}
					>
						<div className="flex h-full flex-col gap-4 p-5 bg-white">
							<div className="w-full aspect-4/3 rounded-md border border-[#f2e7da] overflow-hidden">
								<div
									className="h-full w-full"
									style={{backgroundColor: option.color}}
									aria-label={option.label}
								/>
							</div>
							<div className="space-y-1 text-left">
								<p className="font-serif text-base text-brand-floral-white tracking-tight">
									{option.label}
								</p>
								<p className="font-mono text-xs uppercase text-brand-floral-white/70">
									{option.color}
								</p>
								{rgbValue && (
									<p className="font-sans text-[11px] uppercase tracking-[0.2em] text-brand-floral-white/45">
										{rgbValue}
									</p>
								)}
							</div>
						</div>
					</button>
				);
      })}
    </div>
  );
}

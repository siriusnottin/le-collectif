'use client';

import Image from 'next/image';
import { QuestionComponentProps } from './types';

export default function PieceQuestion({ options, isSelected, onSelect }: QuestionComponentProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
      {options.map((option, index) => {
        const handleClick = () => onSelect(option.value);
        return (
					<button
						key={option.id}
						onClick={handleClick}
						className={`relative overflow-hidden rounded-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-fench-bistre/50 group ${
							isSelected(option.value)
								? 'ring-4 ring-brand-fench-bistre shadow-soft-lg transform scale-105'
								: 'hover:shadow-soft-lg'
						} w-full h-full ${
							index === 0 || index === options.length - 1 ? 'md:col-span-2' : ''
						}`}
					>
						{option.image ? (
							<div className="relative overflow-hidden">
								<div
									className="relative w-full"
									style={{
										paddingBottom: `${
											((option.height || 300) / (option.width || 300)) * 100
										}%`,
									}}
								>
									<Image
										src={option.image}
										alt={option.label}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-110"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									/>
								</div>
								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
								<div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4">
									<p className="font-sans text-white font-medium">
										{option.label}
									</p>
								</div>
							</div>
						) : null}
					</button>
				);
      })}
    </div>
  );
}

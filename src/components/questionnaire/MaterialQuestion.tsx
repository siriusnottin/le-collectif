'use client';

import Image from 'next/image';
import { QuestionComponentProps } from './types';

export default function MaterialQuestion({ options, isSelected, onSelect }: QuestionComponentProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {options.map(option => {
          const handleClick = () => onSelect(option.value);
          return (
            <button
              key={option.id}
              onClick={handleClick}
              className={`relative overflow-hidden rounded-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-collective-accent/50 group ${
                isSelected(option.value)
                  ? 'ring-4 ring-collective-accent shadow-soft-lg'
                  : 'hover:shadow-soft-lg'
              } h-full`}
            >
              {option.image ? (
                <div className="relative w-full">
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
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div
                    className={`absolute inset-0 flex items-center justify-center text-center transition-colors duration-300 ${
                      isSelected(option.value)
                        ? 'bg-black/45'
                        : 'bg-black/15 group-hover:bg-black/30'
                    }`}
                  >
                    <span className="px-4 text-white font-serif text-lg tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]">
                      {option.label}
                    </span>
                  </div>
                </div>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

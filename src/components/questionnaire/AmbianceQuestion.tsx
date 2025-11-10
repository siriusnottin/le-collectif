'use client';

import Image from 'next/image';
import { QuestionComponentProps } from './types';

export default function AmbianceQuestion({ options, isSelected, onSelect }: QuestionComponentProps) {
  return (
    <div className="grid h-full grid-cols-1 md:h-full">
      {options.map((option, index) => {
        const selected = isSelected(option.value);

        return (
          <button
            key={option.id}
            onClick={() => onSelect(option.value)}
            aria-pressed={selected}
            className={`relative w-full overflow-hidden transition-all duration-300 h-[220px] md:h-full md:min-h-[20rem] group`}
            type="button"
          >
            <span className="sr-only">{option.label}</span>
            <Image
              src={option.image ?? ''}
              alt=""
              fill
              className="object-cover transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
            />
            <div className="absolute inset-0 pointer-events-none">
              <div
                className={`absolute inset-0 transition-colors duration-300 ${
                  selected ? 'bg-black/20' : 'bg-black/0 group-hover:bg-black/15'
                }`}
              />
              <div className="absolute inset-y-0 left-0 flex">
                <div
                  className={`flex h-full w-[34%] max-w-[220px] items-center bg-black/90 pl-8 pr-6 transition-all duration-300 ease-out ${
                    selected ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                  } group-hover:translate-x-0 group-hover:opacity-100`}
                >
                  <p className="font-serif text-lg md:text-xl leading-snug text-[#fcfcf9]">{option.label}</p>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

'use client';

import Image from 'next/image';
import {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Moodboard({images}:{images: Array<{src:string; alt:string; className:string}>}){
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const tiles = gsap.utils.toArray('.mood-tile') as HTMLElement[];

      const timelines: gsap.core.Timeline[] = [];

  tiles.forEach((tile) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: tile,
            start: 'top 100%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        });

        tl.fromTo(tile as gsap.TweenTarget, {
          y: 60,
          autoAlpha: 0,
          scale: 0.98,
        }, {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
        });

        timelines.push(tl);
      });

      // small/no-scroll fallback: play tiles immediately when page isn't scrollable
      const docHeight = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      const isScrollable = docHeight > winH + 8;

      if (!isScrollable) {
        timelines.forEach(t => t.play(0));
      } else {
        timelines.forEach((t, idx) => {
          const el = tiles[idx];
          const rect = el.getBoundingClientRect();
          const inView = rect.top < winH && rect.bottom > 0;
          if (inView) t.play(0);
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, [images]);

  return (
    <div ref={containerRef} className="grid grid-cols-subgrid col-span-12 mt-12 auto-rows-[20px] gap-4 md:gap-2 md:auto-rows-[220px]">
      {images.map(({src, alt, className}) => (
        <div key={src} className={`relative overflow-hidden bg-[#E7DCCC] ${className} mood-tile`}>
          <div className="relative h-full w-full">
            <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 20vw" />
          </div>
        </div>
      ))}
    </div>
  );
}

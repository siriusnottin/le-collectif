'use client';

import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CatalogueGrid({items}:{items: Array<{src:string; alt:string; title:string; price:string; description:string}>}){
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(!containerRef.current) return;
    const ctx = gsap.context(() => {
      const articles = gsap.utils.toArray('.catalogue-article') as HTMLElement[];

      const timelines: gsap.core.Timeline[] = [];

      articles.forEach((el, i) => {
        const fromX = (i % 2 === 0) ? -120 : 120; // alternate left/right

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          }
        });

        tl.fromTo(el as gsap.TweenTarget, {
          x: fromX,
          autoAlpha: 0,
          scale: 0.98,
        }, {
          x: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
        });

        timelines.push(tl);
      });

      // Fallback for small screens / insufficient scroll: play timelines immediately
      const docHeight = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      const isScrollable = docHeight > winH + 8;

      if (!isScrollable) {
        timelines.forEach(t => t.play(0));
      } else {
        timelines.forEach((t, idx) => {
          const el = articles[idx];
          const rect = el.getBoundingClientRect();
          const inView = rect.top < winH && rect.bottom > 0;
          if (inView) t.play(0);
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <div ref={containerRef} className="grid grid-cols-subgrid col-span-12 mt-12 gap-4">
  {items.map(({src, alt, title, price, description}) => (
        <article key={src} tabIndex={0} className={`relative group grid grid-cols-subgrid col-span-2 aspect-3/4 overflow-hidden catalogue-article`}>
          <div className="order-2 relative col-span-full h-full w-full group-hover:row-span-48 group-focus:row-span-48 transition-all duration-300">
            <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 15vw" />
          </div>
          <div className="order-1 hidden col-span-full group-hover:row-span-2 group-hover:flex group-focus:row-span-2 group-focus:flex flex-col justify-between p-4 transition-all duration-300">
            <div className="flex items-start justify-between text-base uppercase tracking-tighter text-[#8B6B4E] font-bold">
              <span>{title}</span>
              <span>{price}</span>
            </div>
            <p className="text-sm leading-tight tracking-wider font-extralight">
              {description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

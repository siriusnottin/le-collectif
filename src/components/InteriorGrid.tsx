'use client';

import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function InteriorGrid({items}:{items: Array<{src:string; alt:string; title:string; description:string; classNameMobile?:string; classNameDesktop?:string;} >}){
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(!containerRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.interior-item') as HTMLElement[];

      const timelines: gsap.core.Timeline[] = [];

      cards.forEach((card, i) => {
        const img = card.querySelector('.interior-image');
        const txt = card.querySelector('.interior-text');

        // alternate entrance from left/right
        const fromX = (i % 2 === 0) ? -160 : 160;

        // timeline so animation can play/reverse on scroll in/out
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 95%',
            end: 'bottom 5%',
            toggleActions: 'play reverse play reverse',
          },
        });

        tl.fromTo(card as gsap.TweenTarget,
          {autoAlpha: 0, x: fromX},
          {autoAlpha: 1, x: 0, duration: 0.75, ease: 'power3.out'}
        );

        // image subtle parallax & scale (slight counter-movement)
        if (img) {
          tl.fromTo(img as gsap.TweenTarget,
            {x: fromX * 0.15, scale: 1.03},
            {x: 0, scale: 1, duration: 0.9, ease: 'power3.out'},
            0 // synchronize with card reveal
          );
        }

        // text rises a bit after the card
        if (txt) {
          tl.fromTo(txt as gsap.TweenTarget,
            {y: 8, autoAlpha: 0},
            {y: 0, autoAlpha: 1, duration: 0.55, ease: 'power3.out'},
            '>-0.2'
          );
        }

        timelines.push(tl);
      });

      // small-screen / no-scroll fallback: play timelines immediately when page isn't scrollable
      const docHeight = document.documentElement.scrollHeight;
      const winH = window.innerHeight;
      const isScrollable = docHeight > winH + 8;

      if (!isScrollable) {
        timelines.forEach(t => t.play(0));
      } else {
        timelines.forEach((t, idx) => {
          const el = cards[idx];
          const rect = el.getBoundingClientRect();
          const inView = rect.top < winH && rect.bottom > 0;
          if (inView) t.play(0);
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <div ref={containerRef} className="mt-12 grid grid-cols-subgrid col-span-12 md:grid-cols-24 auto-rows-[38px] md:auto-rows-[48px] gap-4 md:gap-2">
      {items.map((item) => {
        const combinedContainerClass = `relative overflow-hidden ${item.classNameMobile ?? ''}  ${item.classNameDesktop ?? ''} grid grid-cols-1 md:grid-cols-12 items-stretch interior-item`;

        return (
          <article key={item.src} className={combinedContainerClass}>
            {/* Image */}
            <div className={`col-span-1 md:col-span-6 relative h-56 md:h-full w-full interior-image`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className={`col-span-1 md:col-span-6 flex flex-col justify-end px-2 interior-text`}>
              <h3 className="text-sm uppercase tracking-wider text-[#8B6B4E] font-bold">{item.title}</h3>
              <p className="mt-2 text-base md:text-lg leading-relaxed text-[#4A4238]">{item.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

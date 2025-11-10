'use client';

import {useEffect, useRef} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Item = {src:string; alt:string; title:string; price:string; id:string; category?: string};

export default function CataloguePageGrid({items, selectedCategory}:{items: Item[]; selectedCategory: string}){
  const containerRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if(!containerRef.current) return;

    let cancelled = false;
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray('.catalogue-page-item') as HTMLElement[];

      // Only consider visible items (respecting selectedCategory) to avoid manipulating hidden elements
      const visibleEls = els.filter((el) => {
        const cat = el.getAttribute('data-category') || '';
        return selectedCategory === 'Toutes' || selectedCategory === cat;
      });

      // Helper: wait for visible images to load, with a timeout fallback
      const waitForImages = () => {
        const imgs: HTMLImageElement[] = Array.from(containerRef.current!.querySelectorAll('.catalogue-page-image-wrap img'))
          .filter((img) => {
            // only include images whose parent li is currently visible
            const li = img.closest('.catalogue-page-item') as HTMLElement | null;
            if (!li) return false;
            const cat = li.getAttribute('data-category') || '';
            return selectedCategory === 'Toutes' || selectedCategory === cat;
          }) as HTMLImageElement[];

        if (imgs.length === 0) return Promise.resolve();

        const loaders = imgs.map(img => {
          return new Promise<void>((resolve) => {
            if (img.complete && img.naturalWidth !== 0) return resolve();
            const onLoad = () => {
              img.removeEventListener('load', onLoad);
              img.removeEventListener('error', onLoad);
              resolve();
            };
            img.addEventListener('load', onLoad);
            img.addEventListener('error', onLoad);
          });
        });

        // timeout fallback: resolve after 1000ms even if images not loaded
        const timeout = new Promise<void>((resolve) => setTimeout(resolve, 1000));

        return Promise.race([Promise.all(loaders).then(() => {}), timeout]);
      };

      // Wait for images, then initialize GSAP for visible items
      let mounted = true;
      waitForImages().then(() => {
        if (!mounted || cancelled) return;

        // set starting state only for visible elements
        gsap.set(visibleEls, {autoAlpha: 0, y: 18});

        const timelines: gsap.core.Timeline[] = [];

        visibleEls.forEach((el, i) => {
          const imgWrap = el.querySelector('.catalogue-page-image-wrap') as HTMLElement | null;
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: 'top 95%',
              toggleActions: 'play none none reverse',
            }
          });

          tl.to(el, {autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: i * 0.04});

          if (imgWrap) {
            const img = imgWrap.querySelector('img');
            tl.fromTo(img as gsap.TweenTarget, {scale: 1.04}, {scale: 1, duration: 0.9, ease: 'power3.out'}, '-=0.6');

            const onEnter = () => gsap.to(img as gsap.TweenTarget, {scale: 1.06, duration: 0.35, ease: 'power2.out'});
            const onLeave = () => gsap.to(img as gsap.TweenTarget, {scale: 1, duration: 0.45, ease: 'power2.out'});

            imgWrap.addEventListener('mouseenter', onEnter);
            imgWrap.addEventListener('mouseleave', onLeave);
          }

          timelines.push(tl);
        });

        // If the document is not scrollable, play timelines immediately
        const docHeight = document.documentElement.scrollHeight;
        const winH = window.innerHeight;
        const isScrollable = docHeight > winH + 8;

        if (!isScrollable) {
          timelines.forEach(t => t.play(0));
        } else {
          timelines.forEach((t, idx) => {
            const el = visibleEls[idx];
            const rect = el.getBoundingClientRect();
            const inView = rect.top < winH && rect.bottom > 0;
            if (inView) t.play(0);
          });
        }
      });

      return () => {
        mounted = false;
        cancelled = true;
      };

    }, containerRef);

    return () => ctx.revert();
  }, [items, selectedCategory]);

  return (
    <ul ref={containerRef} className="m-0 p-0 grid grid-cols-subgrid col-span-12">
      {items.map(({src, alt, title, price, id, category}) => {
        const visible = selectedCategory === 'Toutes' || selectedCategory === category;
        return (
          <li
              key={id}
              data-category={category}
              className={`inline-block w-full mb-6 break-inside-avoid col-span-2 list-none catalogue-page-item transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
            <article className="group">
              <figure className="overflow-hidden bg-[#EDE1D4]">
                <div className="relative catalogue-page-image-wrap">
                  <Image src={src} alt={alt} width={1200} height={900} className="object-cover" />
                </div>
              </figure>

              <figcaption className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-[#6E5745] mt-3">
                <span>{title}</span>
                <span>{price}</span>
              </figcaption>
            </article>
          </li>
        );
      })}
    </ul>
  );
}

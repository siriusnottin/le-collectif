'use client';

import Image from 'next/image';
import AnimatedLink from '@/components/AnimatedLink';
import {useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const bgWrapRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const triggerEl = rootRef.current as Element;

      // paused timeline; we'll control play/reverse via ScrollTrigger callbacks
      const tl = gsap.timeline({paused: true});

      // subtle background zoom
      tl.fromTo(
        bgWrapRef.current,
        {scale: 1.08},
        {scale: 1, duration: 1.6, ease: 'power2.out'}
      );

      // overlay fades in slightly on top of bg
      tl.fromTo(
        overlayRef.current,
        {autoAlpha: 0},
        {autoAlpha: 1, duration: 0.9, ease: 'power2.out'},
        '-=1.1'
      );

      // content appears with small upward motion
      tl.fromTo(
        contentRef.current,
        {y: 12, autoAlpha: 0},
        {y: 0, autoAlpha: 1, duration: 0.9, ease: 'power3.out'},
        '-=0.9'
      );

      // subtitle, title, link stagger (CTA selected by class .hero-cta)
      tl.fromTo(
        subtitleRef.current,
        {y: 8, autoAlpha: 0},
        {y: 0, autoAlpha: 1, duration: 0.6, ease: 'power3.out'},
        '-=0.6'
      );

      tl.fromTo(
        titleRef.current,
        {y: 18, autoAlpha: 0},
        {y: 0, autoAlpha: 1, duration: 1.0, ease: 'power3.out'},
        '-=0.5'
      );

      tl.fromTo(
        '.hero-cta',
        {y: 6, autoAlpha: 0, scale: 0.98},
        {y: 0, autoAlpha: 1, scale: 1, duration: 0.6, ease: 'power3.out'},
        '-=0.4'
      );

      // Use IntersectionObserver instead of ScrollTrigger callbacks for
      // more reliable cross-direction visibility handling. When the hero
      // intersects we restart the timeline; when it leaves we reverse it.

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // restart from the beginning so the animation always shows
              tl.restart();
            } else {
              tl.reverse();
            }
          });
        },
        { root: null, rootMargin: '0px', threshold: 0 }
      );

      observer.observe(triggerEl);

      // if the hero is already in view on mount, restart the animation
      const rect = triggerEl.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        tl.restart();
      }

    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="grid min-h-[70vh] md:min-h-[90vh] grid-cols-subgrid col-span-12 grid-rows-1 isolate">
      {/* Background image wrapper to allow scaling animation */}
      <div ref={bgWrapRef} className="col-span-full row-span-full relative h-full w-full z-0 overflow-hidden">
        <Image
          src="/images/profile/nature-contemporaine/nature-contemporary-1.jpg"
          alt="Entrée végétalisée au style contemporain"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Overlay gradient */}
      <div ref={overlayRef} className="col-span-full row-span-full h-full w-full pointer-events-none z-10 bg-gradient-to-b from-[rgba(62,43,34,0.45)] via-[rgba(62,43,34,0.25)] to-[rgba(62,43,34,0.55)]" />

      {/* Content layer */}
      <div className="col-span-full row-span-full z-20">
        <div ref={contentRef} className="max-w-[1200px] mx-auto px-4 grid h-full place-items-center py-16 md:py-24">
          <div className="flex h-full w-full max-w-[40rem] flex-col items-center text-center text-[#F6F1EA]">
            <div className="flex flex-1 items-center justify-center">
              <div className="space-y-6">
                <p ref={subtitleRef} className="text-base">Votre ambiance</p>
                <h1 ref={titleRef} className="font-serif text-4xl md:text-[3.75rem] lg:text-[4.5rem] uppercase leading-[1.05]">
                  Nature <span className="block md:inline">Contemporaine</span>
                </h1>
              </div>
            </div>
            <AnimatedLink href="/profil/nature-contemporary" className="mt-10 hero-cta">
              Découvrir l’ambiance
            </AnimatedLink>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import {PropsWithChildren, useEffect, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {usePathname} from 'next/navigation';
gsap.registerPlugin(ScrollTrigger);

export default function MainAnimator({children}: PropsWithChildren) {
	const mainRef = useRef<HTMLElement | null>(null);
	const pathname = usePathname();

	useEffect(() => {
		// Respect user preference for reduced motion
		if (
			typeof window !== 'undefined' &&
			window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
		) {
			if (mainRef.current) mainRef.current.style.opacity = '1';
			return;
		}

		if (!mainRef.current) return;

		const ctx = gsap.context(() => {
			// Kill any existing tweens on this element before re-animating
			gsap.killTweensOf(mainRef.current);

			const tl = gsap.timeline();
			const fromY =
				typeof window !== 'undefined' ? window.innerHeight * 0.9 : 600;

			// Ensure the element is reset so the entrance animation is visible
			gsap.set(mainRef.current, {y: fromY, autoAlpha: 0});

			// Animate into place
			tl.to(mainRef.current, {
				y: 0,
				autoAlpha: 1,
				duration: 0.8,
				ease: 'power3.out',
			});

			tl.call(() => {
				try {
					ScrollTrigger.refresh();
				} catch {
					// no-op
				}
			});
		}, mainRef);

		return () => ctx.revert();
		// Re-run animation when the pathname changes (layout may persist across pages)
	}, [pathname]);

	return (
		<main
			ref={mainRef}
			className="min-h-screen grid grid-cols-subgrid col-span-12 gap-2 m-2"
		>
			{children}
		</main>
	);
}

'use client';

import {PropsWithChildren, useEffect, useRef} from 'react';
import {usePathname} from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function SiteFrame({children}: PropsWithChildren) {
	const pathname = usePathname();
	const isQuestionnaire = pathname?.startsWith('/questionnaire');
	const mainRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (isQuestionnaire) return; // skip anim for questionnaire pages

		const ctx = gsap.context(() => {
			const tl = gsap.timeline();

			const fromY =
				typeof window !== 'undefined' ? window.innerHeight * 0.9 : 600;
			tl.fromTo(
				mainRef.current,
				{y: fromY, autoAlpha: 0},
				{y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out'}
			);

			// After the main entrance completes, refresh ScrollTrigger so
			// all child ScrollTrigger-based animations recalculate their
			// start/end positions (prevents mis-timed reveals because the
			// main element was translated during mount).
			tl.call(() => {
				try {
					ScrollTrigger.refresh();
				} catch {
					// no-op if ScrollTrigger isn't present for any reason
				}
			});
		}, mainRef);

		return () => ctx.revert();
	}, [pathname, isQuestionnaire]);

	if (isQuestionnaire) {
		return <main className="min-h-screen">{children}</main>;
	}

	return (
		<div className="grid grid-cols-12">
			<Header />
			<main
				ref={mainRef}
				className="min-h-screen grid grid-cols-subgrid col-span-12 gap-2 m-2"
			>
				{children}
			</main>
			<Footer />
		</div>
	);
}

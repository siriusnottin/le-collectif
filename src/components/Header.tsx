'use client';

import Link from 'next/link';
import Logo from './Logo';
import {usePathname} from 'next/navigation';
import {useRef, useEffect} from 'react';
import gsap from 'gsap';

export default function Header() {
	const pathname = usePathname();
	const isHome = pathname === '/';
	const wrapperClasses = isHome
		? 'absolute inset-x-0 top-0 z-50'
		: 'relative inset-x-0 top-0 z-50 col-span-12 bg-white backdrop-blur';
	const navTextClasses = isHome
? 'text-brand-floral-white'
: 'text-brand-fench-bistre';
	const logoAltLabel =
"Logo reading 'le collectif' with tagline 'studio design d'intérieur'";

	// refs for animation context
	const rootRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		// create a timeline that plays the header + nav items
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({paused: true});

			tl.fromTo('[data-header]', {y: -20, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 0.45, ease: 'power3.out'});
			tl.fromTo('[data-nav-item]', {y: -10, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 0.35, stagger: 0.08, ease: 'power3.out'}, '-=0.35');

					// Use IntersectionObserver to reliably play/reverse the header animation
					// when the header becomes visible/invisible in the viewport. This works
					// better when coming back from the bottom of the page.
					const rootMargin = ' -60% 0px -20% 0px';
					const observer = new IntersectionObserver(
						(entries) => {
							entries.forEach((entry) => {
								if (entry.isIntersecting) {
									tl.play(0);
								} else {
									tl.reverse();
								}
							});
						},
						{root: null, rootMargin, threshold: 0}
					);

					observer.observe(document.querySelector('[data-header]') || rootRef.current!);

					// initial check: if already visible, play
					const initialEl = document.querySelector('[data-header]') || rootRef.current;
					if (initialEl && initialEl.getBoundingClientRect().top < window.innerHeight && initialEl.getBoundingClientRect().bottom > 0) {
						tl.play(0);
					}

					return () => {
						observer.disconnect();
						tl.kill();
					};
		}, rootRef);

		return () => ctx.revert();
	}, [pathname]);

	return (
		<header ref={rootRef} className={`${wrapperClasses} p-8`} data-header>
			<nav
				data-nav
				className={`${navTextClasses} flex items-center justify-around gap-10`}
			>
				<Link
					href="/catalogue"
					className="transition hover:opacity-75 p-3 cursor-pointer"
					data-nav-item
				>
					Catalogue
				</Link>
				<Link
					href="/about"
					className="transition hover:opacity-75 p-3 cursor-pointer"
					data-nav-item
				>
					À propos
				</Link>
				<Link
					href="/"
					aria-label="Le Collectif — Studio design d'intérieur"
					className="flex flex-col items-center cursor-pointer"
					data-nav-item
				>
					<Logo
						variant={isHome ? 'light' : 'dark'}
						ariaLabel={logoAltLabel}
						className="h-12 w-auto"
					/>
				</Link>
				<Link
					href="/contact"
					className="transition hover:opacity-75 p-3 cursor-pointer"
					data-nav-item
				>
					Contact
				</Link>
				<button
					type="button"
					className="transition hover:opacity-75 p-3 cursor-pointer"
					data-nav-item
				>
					Panier
				</button>
			</nav>
		</header>
	);
}

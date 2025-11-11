'use client';

import Link from 'next/link';
import Logo from './Logo';
import {usePathname} from 'next/navigation';

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

	return (
		<header className={`${wrapperClasses} p-8`}>
			<nav
				className={`${navTextClasses} flex items-center justify-around gap-10`}
			>
				<Link
					href="/catalogue"
					className="transition hover:opacity-75 p-3 cursor-pointer"
				>
					Catalogue
				</Link>
				<Link
					href="/about"
					className="transition hover:opacity-75 p-3 cursor-pointer"
				>
					À propos
				</Link>
				<Link
					href="/"
					aria-label="Le Collectif — Studio design d'intérieur"
					className="flex flex-col items-center cursor-pointer"
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
				>
					Contact
				</Link>
				<button
					type="button"
					className="transition hover:opacity-75 p-3 cursor-pointer"
				>
					Panier
				</button>
			</nav>
		</header>
	);
}

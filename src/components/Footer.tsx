import Link from 'next/link';
import ButtonLink from './ButtonLink';
import Logo from './Logo';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-brand-cola text-brand-floral-white py-8 grid grid-cols-3 md:grid-cols-subgrid col-span-12 gap-6 px-6 text-sm">
			<div className="col-span-1 md:col-span-2 mt-6 sm:mt-0 md:mb-6">
				<Link href="/" aria-label="Le Collectif - accueil">
					<Logo
						variant="light"
						ariaLabel="Le Collectif"
						className="block h-16 w-auto"
					/>
				</Link>
			</div>
			<div className="md:py-10 col-span-3 md:col-span-12 grid grid-cols-subgrid">
				<ul className="col-span-1 md:col-span-2 space-y-1">
					<li>
						<Link href="/catalogue">Catalogue</Link>
					</li>
					<li>
						<Link href="/about">À propos</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>

				<div className="md:col-start-4 col-span-2 md:col-span-3 md:mb-4 space-y-1">
					<p>18 Rue de la Nation, 75 012 Paris</p>
					<p>lecollectif@studio.fr</p>
					<p>01.34.57.68.92</p>
				</div>

				<ButtonLink
					href="/questionnaire"
					variant="secondary"
					className="col-span-3 md:col-span-3 md:-col-end-1 md:h-fit md:justify-self-end md:max-w-72"
				>
					Répondre au questionnaire
				</ButtonLink>
			</div>
			<div className="col-span-2 md:col-span-12 flex flex-col md:flex-row justify-between space-y-1 md:space-y-0 mt-10 md:mt-0">
				<Link
					href="/mentions-legales"
					className="hover:text-collective-accent-light transition-colors"
				>
					Mentions légales
				</Link>
				<p>Copyright {currentYear}</p>
				<Link
					href="/politique-de-confidentialite"
					className="hover:text-collective-accent-light transition-colors"
				>
					Politiques de confidentialité
				</Link>
			</div>
		</footer>
	);
}

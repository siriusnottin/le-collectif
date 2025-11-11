import Link from 'next/link';
import Image from 'next/image';
import ButtonLink from './ButtonLink';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-brand-cola text-brand-floral-white py-8 grid grid-cols-1 md:grid-cols-subgrid col-span-12 gap-6 px-6 text-sm font-sans">
			<div className="col-span-2 mb-6">
				<Link href="/" aria-label="Le Collectif - accueil">
					<Image
						src="/logo-light.svg"
						alt="Le Collectif"
						width={220}
						height={64}
						priority={false}
						className="block"
					/>
				</Link>
			</div>
			<div className="py-10 col-span-12 grid grid-cols-subgrid">
				<ul className="col-span-2 space-y-1">
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

				<div className="col-start-4 col-span-3 mb-4 space-y-1">
					<p>18 Rue de la Nation, 75 012 Paris</p>
					<p>lecollectif@studio.fr</p>
					<p>01.34.57.68.92</p>
				</div>

				<ButtonLink
					href="/questionnaire"
					variant="secondary"
					className="col-span-3 -col-end-1 h-fit justify-self-end max-w-72"
				>
					Répondre au questionnaire
				</ButtonLink>
			</div>
			<div className="col-span-12 flex flex-row justify-between items-center">
				<Link href="/mentions-legales">Mentions légales</Link>

				<p className="opacity-80">Copyright {currentYear}</p>

				<Link href="/politique-de-confidentialite">
					Politiques de confidentialité
				</Link>
			</div>
		</footer>
	);
}

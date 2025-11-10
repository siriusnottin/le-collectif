import AnimatedLink from '@/components/AnimatedLink';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import CTASection from '@/components/CTASection';
import Moodboard from '@/components/Moodboard';
import CatalogueGrid from '@/components/CatalogueGrid';
import InteriorGrid from '@/components/InteriorGrid';
// inlined styles from page.module.css to avoid separate css module

const moodboardImages = [
	{
		src: '/images/profile/nature-contemporaine/nature-contemporary-1.jpg',
		alt: 'Salon végétalisé baigné de lumière naturelle',
		// large left block on desktop
		className:
			'col-start-1 col-span-4 row-start-2 row-span-11 md:col-span-3 md:row-start-2 md:row-span-2',
	},
	{
		src: '/images/questionnaire/pieces/room-bedroom-minimal.jpg',
		alt: 'Chambre minimaliste aux tons sable',
		// wide top center
		className:
			'col-start-5 col-span-5 row-start-9 row-span-4 md:col-start-4 md:col-span-5 md:row-start-3 md:row-span-1',
	},
	{
		src: '/images/questionnaire/ambiance/ambiance-nature-kitchen.jpg',
		alt: 'Cuisine épurée ouverte sur la nature',
		// small tall tile under the top center
		className:
			'col-span-3 row-start-1 row-span-12 md:col-start-9 md:col-span-2 md:row-start-1 md:row-span-3',
	},
	{
		src: '/images/questionnaire/priorites/space-light.jpg',
		alt: 'Escalier flottant dans un espace lumineux',
		// small tall tile next to previous
		className:
			'col-span-6 row-span-5 md:col-start-11 md:col-span-2 md:row-start-2 md:row-span-3',
	},
	{
		src: '/images/questionnaire/priorites/details-materials.jpg',
		alt: 'Rideaux en lin dans une lumière douce',
		// tall right stack
		className:
			'-col-end-1 col-span-3 row-span-11 md:col-start-1 md:col-span-4 md:row-start-4 md:row-span-1',
	},
	{
		src: '/images/questionnaire/pieces/room-living-cozy.jpg',
		alt: 'Salon chaleureux et minimaliste',
		// larger central-bottom block
		className:
			'col-span-4 row-span-5 md:col-start-3 md:col-span-4 md:row-start-5 md:row-span-2',
	},
	{
		src: '/images/profile/convivialite-lumineuse/luminous-hallway.jpg',
		alt: 'Couloir lumineux avec niches décoratives',
		// small tile near bottom-center
		className:
			'col-span-3 row-span-4 md:col-span-4 md:row-start-4 md:row-span-2',
	},
];

const catalogueImages = [
	{
		src: '/images/questionnaire/materials/material-ceramic.jpg',
		alt: 'Vase organique en céramique blanche',
		title: 'Kumo',
		price: '95€',
		description: 'Formes organiques, texture douce, présence apaisante.',
	},
	{
		src: '/images/profile/chaleur-artisanale/artisanal-living.jpg',
		alt: 'Salon chaleureux avec éléments artisanaux',
		title: 'Dodu',
		price: '87€',
		description: 'Pot rond et élégant, parfait pour sublimer vos plantes.',
	},
	{
		src: '/images/questionnaire/priorites/comfort-softness.jpg',
		alt: 'Lampe minimaliste en lin',
		title: 'Aube',
		price: '114€',
		description: 'Abat-jour en tissu drapé, lumière douce et diffuse.',
	},
	{
		src: '/images/questionnaire/materials/material-wood-parquet.jpg',
		alt: 'Parquet en bois clair éclairé naturellement',
		title: 'Flot',
		price: '79€',
		description:
			'Des rideaux en lin léger aux teintes claires, flottant délicatement.',
	},
	{
		src: '/images/questionnaire/priorites/details-materials.jpg',
		alt: 'Rideau en lin beige',
		title: 'In-chair',
		price: '1 250€',
		description:
			'Structure en bois noble, assise généreuse tapissée de lin clair.',
	},
	{
		src: '/images/questionnaire/ambiance/ambiance-modern-chair.jpg',
		alt: 'Fauteuil sculptural en bois',
		title: 'Cloud',
		price: '1 832€',
		description: 'Table basse aux formes abstraites évoquant un galet sculpté.',
	},
];

const interiorItems = [
	{
		src: '/images/questionnaire/pieces/room-bedroom-minimal.jpg',
		alt: 'Chambre minimaliste aux tons sable',
		title: '01 - La chambre',
		description:
			'Une atmosphère douce et organique, où simplicité rime avec élégance.',
		classNameMobile: 'col-span-6 row-span-6',
		classNameDesktop:
			'md:col-start-1 md:col-span-11 md:row-start-1 md:row-span-9',
		// alignments
		textAlignMobile: 'right',
		textAlignDesktop: 'right',
	},
	{
		src: '/images/profile/convivialite-lumineuse/luminous-hallway.jpg',
		alt: 'Salon chaleureux et minimaliste',
		title: '02 - Le salon',
		description:
			'Un salon calme et accueillant, où la nature s\u2019invite dans un design minimal et élégant.',
		classNameMobile: 'col-span-7 row-span-4',
		classNameDesktop:
			'md:-col-end-1 md:col-span-11 md:row-start-1 md:row-span-6',
		textAlignMobile: 'left',
		textAlignDesktop: 'left',
	},
	{
		src: '/images/questionnaire/ambiance/ambiance-nature-kitchen.jpg',
		alt: 'Cuisine épurée ouverte sur la nature',
		title: '03 - La cuisine',
		description:
			'Une ambiance douce et élégante, pensée pour cuisiner dans la sérénité.',
		classNameMobile: 'col-span-6 row-span-4',
		classNameDesktop:
			'md:-col-end-1 md:col-span-12 md:row-start-7 md:row-span-6',
		textAlignMobile: 'right',
		textAlignDesktop: 'left',
	},
	{
		src: '/images/questionnaire/pieces/room-living-cozy.jpg',
		alt: 'Salle à manger conviviale',
		title: '04 - La salle à manger',
		description:
			'Un lieu convivial où bois clair et formes douces invitent au partage.',
		classNameMobile: 'col-span-7 row-span-4',
		classNameDesktop:
			'md:col-start-3 md:col-span-13 md:row-start-10 md:row-span-6',
		textAlignMobile: 'left',
		textAlignDesktop: 'right',
	},
	{
		src: '/images/questionnaire/priorites/details-materials.jpg',
		alt: 'Salle de bain apaisante',
		title: '05 - La salle de bain',
		description:
			'Un espace de bien-être où pierre douce et bois clair créent une atmosphère apaisante.',
		classNameMobile: 'col-span-7 row-span-2',
		classNameDesktop: 'md:-col-end-1 md:col-span-22 md:row-span-4',
		textAlignMobile: 'right',
		textAlignDesktop: 'left',
	},
];

export default function Home() {
	return (
		<>
			<Hero />

			<section className="grid grid-cols-subgrid col-span-12 py-16 md:py-24">
				<SectionHeader eyebrow="Une ambiance" heading="un moodboard" />
				<Moodboard images={moodboardImages} />
			</section>

			<section className="grid grid-cols-subgrid col-span-12 py-16 md:py-20">
				<SectionHeader eyebrow="Un catalogue" heading="fait pour vous !" />
				<CatalogueGrid items={catalogueImages} />
				<div className="mt-10 col-span-12 text-center">
					<AnimatedLink href="/inspirations">En découvrir plus</AnimatedLink>
				</div>
			</section>

			<section className="grid grid-cols-subgrid col-span-12 py-16 md:py-24">
				<SectionHeader eyebrow="et si c’était" heading="votre intérieur ?" />
				<InteriorGrid items={interiorItems} />
			</section>
			<CTASection />
		</>
	);
}

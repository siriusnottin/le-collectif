/* eslint-disable @next/next/no-img-element */
"use client";

import {useState} from 'react';
import CataloguePageGrid from '@/components/CataloguePageGrid';
// using native <img> so cards can have natural variable heights for a masonry layout

const categories = ['Toutes', 'Meubles', 'Literies', 'Décorations', 'Assises', 'Luminaires'] as const;

type Category = (typeof categories)[number];

type CatalogueItem = {
	src: string;
	alt: string;
	title: string;
	price: string;
	width?: number;
	height?: number;
	category: Category;
};

type CatalogueKey = 'kumo' | 'aube' | 'inChair' | 'dodu' | 'flot' | 'cloud' | 'nova' | 'lumen';

const catalogueBase: Record<CatalogueKey, CatalogueItem> = {
	kumo: {
		src: '/images/questionnaire/materials/material-ceramic.jpg',
		alt: 'Vase organique en céramique blanche',
		title: 'Kumo',
		price: '95€',
		width: 1200,
		height: 900,
		category: 'Décorations',
	},
	aube: {
		src: '/images/profile/chaleur-artisanale/artisanal-living.jpg',
		alt: 'Composition végétale sur étagère artisanale',
		title: 'Aube',
		price: '114€',
		width: 1200,
		height: 900,
		category: 'Meubles',
	},
	inChair: {
		src: '/images/questionnaire/priorites/comfort-softness.jpg',
		alt: 'Fauteuil confortable',
		title: 'In-chair',
		price: '1 250€',
		width: 1200,
		height: 900,
		category: 'Assises',
	},
	dodu: {
		src: '/images/questionnaire/priorites/details-materials.jpg',
		alt: 'Rideaux en lin beige filtrant la lumière',
		title: 'Dodu',
		price: '87€',
		width: 1200,
		height: 900,
		category: 'Décorations',
	},
	flot: {
		src: '/images/questionnaire/ambiance/ambiance-modern-chair.jpg',
		alt: 'Fauteuil en bois aux lignes modernes',
		title: 'Flot',
		price: '79€',
		width: 1200,
		height: 900,
		category: 'Assises',
	},
	cloud: {
		src: '/images/questionnaire/priorites/history-personality.jpg',
		alt: 'Table basse sculpturale blanche',
		title: 'Cloud',
		price: '1 832€',
		width: 1200,
		height: 900,
		category: 'Meubles',
	},
	// mock extra items
	nova: {
		src: '/images/questionnaire/ambiance/ambiance-modern-chair.jpg',
		alt: 'Suspension lumineuse en verre',
		title: 'Nova',
		price: '199€',
		width: 1200,
		height: 900,
		category: 'Luminaires',
	},
	lumen: {
		src: '/images/questionnaire/materials/material-ceramic.jpg',
		alt: 'Ensemble de coussins douillets',
		title: 'Lumen',
		price: '45€',
		width: 1200,
		height: 900,
		category: 'Literies',
	},
};

const catalogueOrder: CatalogueKey[] = [
	'kumo',
	'aube',
	'inChair',
	'dodu',
	'flot',
	'cloud',
	'nova',
	'lumen',
	'flot',
	'cloud',
	'flot',
	'cloud',
];

const catalogueItems = catalogueOrder.map((key, index) => ({
	...catalogueBase[key],
	id: `${key}-${index}`,
}));

export default function CataloguePage() {
	const [selectedCategory, setSelectedCategory] = useState<Category>('Toutes');

	return (
		<>
			{/* filter */}
			<aside
				className="grid grid-cols-subgrid col-span-12 gap-6 text-xs uppercase tracking-[0.4em] text-[#AA907A] pt-20 pb-11"
				aria-labelledby="catalogue-filter-heading"
			>
				<h2 id="catalogue-filter-heading" className="sr-only">
					Filtrer les catégories
				</h2>

				<nav aria-label="Catégories" className="grid grid-cols-subgrid col-span-12">
					<p className="col-span-2 mb-2 text-sm text-[#AA907A] w-fit">Catégories</p>
					<ul className="col-start-4 flex flex-col gap-4 text-[#8E7763]">
						{categories.map((label) => {
							const active = label === selectedCategory;
							return (
								<li key={label} className="text-sm tracking-[0.32em]">
									<button
										type="button"
										aria-pressed={active}
										onClick={() => setSelectedCategory(label)}
										className={`flex items-center whitespace-nowrap text-left ${active ? 'text-[#5C4334] before:content-["►"] before:inline-block before:mr-2 before:w-4 before:visible' : 'before:content-[""] before:inline-block before:mr-2 before:w-4 before:invisible'}`}
										>
										{label}
									</button>
								</li>
							);
						})}
					</ul>
				</nav>
			</aside>

			{/* catalogue items */}
			<section className="grid grid-cols-subgrid col-span-12" aria-label="Catalogue des produits">
				<CataloguePageGrid items={catalogueItems} selectedCategory={selectedCategory} />
			</section>
		</>
	);
}

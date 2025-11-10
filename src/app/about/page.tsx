import React from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import AnimatedLink from '@/components/AnimatedLink';

export default function AboutPage() {
	return (
		<>
			{/* Hero / Title (full-width section) */}
			<section className="col-span-12 text-center mt-12">
				<h1 className="font-serif text-4xl md:text-5xl text-[#2F2A23]">
					Créer des intérieurs à ceux qui y vivent
				</h1>
				<p className="text-xs uppercase tracking-widest text-[#9C8F80] mt-2">
					Nous croyons que chaque espace a une âme.
				</p>
			</section>

			<section className="py-10 grid grid-cols-subgrid col-span-12">
				{/* center the two paragraphs as a group */}
				<div className="col-span-12 flex justify-center gap-8 px-4">
					<p className="text-sm text-[#4B3F32] max-w-md">
						Notre mission : rendre accessible ce que l’on admire sur Pinterest,
						à travers des créations uniques, inspirantes et profondément
						humaines.
					</p>
					<p className="text-sm text-[#4B3F32] max-w-md">
						Nous dessinons des intérieurs modernes, immersifs et chaleureux, où
						les couleurs douces, les matières naturelles et la lumière trouvent
						leur juste place.
					</p>
				</div>
			</section>

			{/* Intro two-column concept (mobile stacked -> md subgrid) */}
			<section className="col-span-12 mt-8 grid grid-cols-1 md:grid-cols-subgrid gap-4 items-start">
				<div className="col-span-1 md:col-span-6">
					<h3 className="font-serif text-4xl text-[#2F2A23] mb-4">
						Le concept
					</h3>
					<p className="text-sm text-[#4B3F32] mb-4">
						N&eacute; d&apos;un collectif de cr&eacute;atifs passionn&eacute;s,
						notre studio repense la mani&egrave;re de concevoir le design
						d&apos;int&eacute;rieur.
					</p>
					<p className="text-sm text-[#4B3F32] mb-4">
						Gr&acirc;ce &agrave; une exp&eacute;rience digitale intuitive, nous
						aidons chacun &agrave; identifier son univers d&eacute;coratif et
						&agrave; imaginer des espaces qui lui ressemblent.
					</p>
					<p className="text-sm text-[#4B3F32]">
						Du diagnostic au conseil, nous pla&ccedil;ons l&apos;&eacute;motion,
						la simplicit&eacute; et la coh&eacute;rence au c&oelig;ur de chaque
						projet.
					</p>
				</div>

				<div className="col-span-1 md:col-span-6">
					<div className="w-full h-64 relative">
						<Image
							src="/images/profile/convivialite-lumineuse/luminous-fireplace.jpg"
							alt="Le collectif boutique"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</section>

			{/* Method section */}
			<SectionHeader
				eyebrow="Notre approche repose sur"
				heading="La méthode"
				className="col-span-12 mt-12"
			/>

			<section className="col-span-12 mt-6 grid grid-cols-1 md:grid-cols-subgrid gap-4">
				<div className="col-span-1 md:col-span-3">
					<div className="w-full h-40 md:h-56 relative">
						<Image
							src="/images/questionnaire/ambiance/ambiance-artisanal-wood.jpg"
							alt="method 1"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 flex items-center justify-center text-white font-semibold uppercase">
							<span className="text-sm md:text-base">
								COMPRENDRE
								<br />
								VOTRE BESOIN
							</span>
						</div>
					</div>
				</div>
				<div className="col-span-1 md:col-span-3">
					<div className="w-full h-40 md:h-56 relative">
						<Image
							src="/images/questionnaire/materials/material-linen.jpg"
							alt="method 2"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 flex items-center justify-center text-white font-semibold uppercase">
							<span className="text-sm md:text-base">
								IMAGINER
								<br />
								VOTRE INTÉRIEUR
							</span>
						</div>
					</div>
				</div>
				<div className="col-span-1 md:col-span-3">
					<div className="w-full h-40 md:h-56 relative">
						<Image
							src="/images/profile/nature-contemporaine/nature-contemporary-2.jpg"
							alt="method 3"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 flex items-center justify-center text-white font-semibold uppercase">
							<span className="text-sm md:text-base">
								ACCOMPAGNER
								<br />
								LE CHANGEMENT
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Team */}
			<SectionHeader
				eyebrow="Derrière vos intérieurs"
				heading="L'équipe"
				className="col-span-12 mt-12"
			/>

			<section className="col-span-12 mt-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Member 1 */}
					<div className="flex items-center md:flex-col md:items-center gap-4">
						<div className="w-20 h-16 md:w-40 md:h-28 relative shrink-0">
							<Image
								src="/images/profile/ton-interieur.jpg"
								alt="Manon Duprés"
								fill
								className="object-cover rounded"
							/>
						</div>
						<div className="md:text-center">
							<p className="text-sm font-semibold">MANON DUPR&Eacute;S</p>
							<p className="text-xs text-[#9C8F80]">
								CEO de &quot;le collectif&quot;
							</p>
						</div>
					</div>

					{/* Member 2 */}
					<div className="flex items-center md:flex-col md:items-center gap-4">
						<div className="w-20 h-16 md:w-40 md:h-28 relative shrink-0">
							<Image
								src="/images/profile/chaleur-artisanale/artisanal-living.jpg"
								alt="Nicolas Rouije"
								fill
								className="object-cover rounded"
							/>
						</div>
						<div className="md:text-center">
							<p className="text-sm font-semibold">NICOLAS ROUJIE</p>
							<p className="text-xs text-[#9C8F80]">Architecte Manager</p>
						</div>
					</div>

					{/* Member 3 */}
					<div className="flex items-center md:flex-col md:items-center gap-4">
						<div className="w-20 h-16 md:w-40 md:h-28 relative shrink-0">
							<Image
								src="/images/profile/elegance-moderne/elegance-kitchen-marble.jpg"
								alt="Angélique Vutel"
								fill
								className="object-cover rounded"
							/>
						</div>
						<div className="md:text-center">
							<p className="text-sm font-semibold">ANGÉLIQUE VUTEL</p>
							<p className="text-xs text-[#9C8F80]">Alternante architecte</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA (full-width) */}
			<section className="col-span-12 text-center my-12">
				<h3 className="font-serif text-2xl">
					Et si votre intérieur révélait votre personnalité ?
				</h3>
				<AnimatedLink href="/questionnaire" className="mt-4 inline-block">
					Découvrir votre profil décoratif
				</AnimatedLink>
			</section>
		</>
	);
}

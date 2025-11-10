'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Questionnaire() {
	return (
		<div className="min-h-screen grid grid-cols-1 md:grid-cols-[1.15fr_1fr]">
			<div className="bg-[#3b2a21] text-collective-cream px-6 py-8 md:px-8 md:py-12 flex">
				<div className="flex flex-col w-full min-h-full">
					<div className="flex justify-end">
						<Link
							href="/questionnaire/questions/1"
							className="text-xs italic md:text-sm text-collective-cream/70 hover:text-collective-cream transition"
						>
							Commencer le questionnaire →
						</Link>
					</div>

					<div className="flex-1 flex items-center justify-center py-10 md:py-12">
						<div
							className="relative w-full max-w-sm md:max-w-md"
							style={{aspectRatio: '3 / 4'}}
						>
							<Image
								src="/images/interior-living-room.jpg"
								alt="ton interieur"
								fill
								sizes="(max-width: 768px) 80vw, 24rem"
								priority
								className="h-full w-full object-cover"
							/>

							<span className="pointer-events-none absolute inset-x-0 -top-6 flex justify-center font-serif text-4xl md:text-5xl uppercase tracking-[0.2em] whitespace-nowrap">
								Ton Intérieur
							</span>

							<span className="pointer-events-none absolute inset-x-0 -bottom-4 flex justify-center font-serif text-3xl md:text-4xl uppercase tracking-[0.35em] whitespace-nowrap">
								Ton Reflet
							</span>
						</div>
					</div>

					<div className="text-left text-sm md:text-base leading-6 text-collective-cream/80 max-w-md">
						<p>
							Et si votre intérieur révélait votre personnalité ? Répondez à
							quelques questions simples et découvrez l’ambiance qui vous
							correspond.
						</p>
					</div>
				</div>
			</div>

			<div
				className="flex items-center justify-center"
				style={{
					backgroundImage:
						"linear-gradient(rgba(0,0,0,0.12), rgba(0,0,0,0.12)), url('/images/bathroom-mirror.jpg')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<figure
					className="flex items-center justify-center"
					aria-labelledby="questionnaire-logo-description"
				>
					<Image
						src="/logo-dark.svg"
						alt=""
						role="presentation"
						width={260}
						height={116}
						priority
					/>
					<figcaption id="questionnaire-logo-description" className="sr-only">
						Text reads “le collectif” with the tagline “studio design
						d’intérieur”.
					</figcaption>
				</figure>
			</div>
		</div>
	);
}

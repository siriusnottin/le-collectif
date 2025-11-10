import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import AnimatedLink from '@/components/AnimatedLink';
import Image from 'next/image';

export default function ContactPage() {
	return (
		<>
			<SectionHeader eyebrow="Une question, une envie, un projet ?" heading="Et si on imaginait ensemble votre intérieur idéal ?" className="col-span-12 mt-12" />

					<section className="col-span-12 mt-8 grid grid-cols-1 md:grid-cols-subgrid gap-6 items-start">
						{/* Left: form (mobile full-width, md uses subgrid) */}
						<div className="col-span-1 md:col-span-7">
					<form className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<label className="block">
								<span className="text-xs text-[#4B3F32]">Votre nom</span>
								<input className="w-full border-b border-[#D8CFC6] py-2 focus:outline-none" />
							</label>
							<label className="block">
								<span className="text-xs text-[#4B3F32]">Votre prénom</span>
								<input className="w-full border-b border-[#D8CFC6] py-2 focus:outline-none" />
							</label>
						</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<label className="block">
								<span className="text-xs text-[#4B3F32]">Votre numéro de téléphone</span>
								<input className="w-full border-b border-[#D8CFC6] py-2 focus:outline-none" />
							</label>
							<label className="block">
								<span className="text-xs text-[#4B3F32]">Votre adresse email</span>
								<input className="w-full border-b border-[#D8CFC6] py-2 focus:outline-none" />
							</label>
						</div>

									<div>
										<span className="text-xs text-[#4B3F32]">Vous êtes</span>
														<div className="flex flex-col md:flex-row gap-4 mt-2">
															<label className="inline-flex items-center gap-2 text-sm cursor-pointer">
																<input type="radio" name="who" value="particulier" className="peer sr-only" defaultChecked />
																<span className="inline-block w-4 h-4 rounded-full border border-[#C9BDB2] peer-checked:border-transparent peer-checked:bg-[#8B6B4E]" aria-hidden />
																<span>Un particulier</span>
															</label>
															<label className="inline-flex items-center gap-2 text-sm cursor-pointer">
																<input type="radio" name="who" value="entreprise" className="peer sr-only" />
																<span className="inline-block w-4 h-4 rounded-full border border-[#C9BDB2] peer-checked:border-transparent peer-checked:bg-[#8B6B4E]" aria-hidden />
																<span>Une entreprise</span>
															</label>
														</div>
									</div>

						<div>
											<label className="block">
												<span className="text-xs text-[#4B3F32]">Vous voulez</span>
												<select name="request" className="w-full border-b border-[#D8CFC6] py-2 bg-transparent focus:outline-none">
													<option value="">...</option>
													<option>Poser une question</option>
													<option>Demander un devis</option>
													<option>Faire parti de notre équipe</option>
												</select>
											</label>
						</div>

						<div>
							<label className="block">
								<span className="text-xs text-[#4B3F32]">Objet</span>
								<input className="w-full border-b border-[#D8CFC6] py-2 focus:outline-none" />
							</label>
						</div>

						<div>
							<label className="block">
								<span className="text-xs text-[#4B3F32]">Votre message</span>
								<textarea className="w-full border-b border-[#D8CFC6] py-4 focus:outline-none" rows={6} />
							</label>
						</div>

									<div>
										<button type="submit" className="bg-[#8B6B4E] text-white px-6 py-3 w-full md:w-auto">Envoyer</button>
									</div>
					</form>
				</div>

							{/* Right: contact card (mobile stacked under form, md uses subgrid) */}
							<aside className="col-span-1 md:col-span-3">
					<div className="bg-[#8B6B4E] text-white p-6">
						<p className="text-xs font-semibold">ADRESSE DU STUDIO</p>
						<p className="text-sm mt-2">12 Rue des Ateliers, 75011 Paris</p>

						<p className="mt-4 text-xs font-semibold">TÉLÉPHONE</p>
						<p className="text-sm mt-1">01 42 56 78 90</p>

						<p className="mt-4 text-xs font-semibold">EMAIL</p>
						<p className="text-sm mt-1">contact@lecollectif.fr</p>

						<p className="mt-4 text-xs font-semibold">HORAIRES D&apos;OUVERTURE</p>
						<p className="text-sm mt-1">MAR - VEN : 10h00 - 18h00</p>
						<p className="text-sm">SAM : 11h00 - 17h00</p>
						<p className="text-sm">Fermé les lundis et dimanches</p>

									<div className="mt-4 w-full h-40 md:h-24 relative overflow-hidden">
										<Image src="/images/bathroom-mirror.jpg" alt="studio" fill className="object-cover" />
									</div>
					</div>
				</aside>
			</section>

			<section className="col-span-12 text-center my-12">
				<h3 className="font-serif text-2xl">Vous ne savez pas par où commencez ?</h3>
				<AnimatedLink href="/questionnaire" className="mt-4 inline-block">Découvrir votre univers décoratif</AnimatedLink>
			</section>
		</>
	);
}

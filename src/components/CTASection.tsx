import ButtonLink from './ButtonLink';
import SectionHeader from './SectionHeader';

export default function CTASection() {
  return (
		<section className="col-span-12 my-30">
			<SectionHeader eyebrow="C&apos;est à" heading="votre tour !" />
			<div className="mt-6 flex flex-col md:flex-row gap-x-80 justify-center">
				<ButtonLink href="/download/moodboard.pdf" variant="primary">
					Télécharger la planche d&apos;ambiance
				</ButtonLink>
				<ButtonLink href="/contact" variant="primary">
					Nous contacter pour un devis
				</ButtonLink>
			</div>
		</section>
	);
}

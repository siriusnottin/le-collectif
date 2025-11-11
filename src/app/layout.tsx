import type {Metadata} from 'next';
import {Playfair_Display, DM_Sans} from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-playfair',
	display: 'swap',
});

const dmSans = DM_Sans({
	subsets: ['latin'],
	weight: ['200', '400', '700'],
	variable: '--font-dm-sans',
	display: 'swap',
});

export const metadata: Metadata = {
	title: "Le Collectif - Studio design d'intérieur",
	description:
		"Studio design d'intérieur - Découvrez l'ambiance qui vous correspond",
	keywords: ['design intérieur', 'décoration', 'aménagement', 'studio design'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
			<body className="antialiased">{children}</body>
		</html>
	);
}

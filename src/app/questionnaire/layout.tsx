import type {Metadata} from 'next';
import type {PropsWithChildren} from 'react';
import MainAnimator from '@/components/MainAnimator';

export const metadata: Metadata = {
	title: 'Questionnaire - Le Collectif',
};

export default function QuestionnaireLayout({children}: PropsWithChildren) {
	return (
		<MainAnimator className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
			{children}
		</MainAnimator>
	);
}

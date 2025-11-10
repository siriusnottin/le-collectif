import QuestionnaireFlow from '@/components/questionnaire/QuestionnaireFlow';

export const metadata = {
  title: 'Questionnaire – Questions',
  description: "Répondez aux questions pour découvrir votre profil d'intérieur.",
};

export default function QuestionnaireQuestionsPage() {
  return <QuestionnaireFlow step={1} />;
}

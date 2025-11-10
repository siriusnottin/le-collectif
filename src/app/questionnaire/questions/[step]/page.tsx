import QuestionnaireFlow from '@/components/questionnaire/QuestionnaireFlow';
import {questions} from '@/lib/questionnaire-data';
import {notFound} from 'next/navigation';

interface QuestionnaireStepPageProps {
  params: Promise<{
    step: string;
  }>;
}

export default async function QuestionnaireStepPage({params}: QuestionnaireStepPageProps) {
  const {step} = await params;
  const stepNumber = Number(step);

  if (!Number.isFinite(stepNumber) || stepNumber < 1) {
    notFound();
  }

  if (stepNumber > questions.length) {
    notFound();
  }

  return <QuestionnaireFlow step={stepNumber} />;
}

 'use client';

 import { useCallback, useMemo, useState } from 'react';
 import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { questions } from '@/lib/questionnaire-data';
 import { QuestionnaireAnswers, QuestionnaireAnswerValue } from './types';
 import { HEADER_STRIPS, QUESTIONNAIRE_ROUTES } from './constants';
 import AmbianceQuestion from './AmbianceQuestion';
 import ColorQuestion from './ColorQuestion';
 import MaterialQuestion from './MaterialQuestion';
 import InterieurQuestion from './InterieurQuestion';
 import PieceQuestion from './PieceQuestion';

 interface QuestionnaireFlowProps {
   step?: number;
 }

function Sidebar({
  questionTitle,
  questionIndex,
  totalQuestions,
}: {
  questionTitle?: string;
  questionIndex: number;
  totalQuestions: number;
}) {

  return (
		<aside className="flex flex-col justify-between gap-6 p-6 lg:p-8 bg-[#3C2F28] text-[#E7C9B2]">
			<header className="space-y-2">
        {HEADER_STRIPS.map(({src, alt, label, align}) => (
          <div key={src} className={`w-full flex ${align === 'left' ? 'flex-row-reverse' : 'flex-row'} gap-2`}>
            <Image
              src={src}
              alt={alt}
              width={444}
              height={32}
              sizes="(min-width:1024px) 444px, 100vw"
              className="object-cover w-full h-auto"
              priority
            />
            <span className="text-white text-sm md:text-base font-serif uppercase tracking-widest block">
              {label}
            </span>
          </div>
        ))}
			</header>

			{/* Decorative large Question text */}
			<div className="flex flex-col gap-2">
				<div className="pointer-events-none font-serif text-[7.8rem] font-normal leading-[0.9] text-[#E7C9B2] tracking-[-2px]">
					Question
				</div>
				<div className="font-serif text-[2.5rem] text-[rgba(231,201,178,0.9)]">
					n° {questionIndex + 1}
				</div>
			</div>

			<div className="">
				<div className="pb-6">
					<div className="text-collective-cream/95">
						<p className="text-base md:text-lg">{questionTitle ?? ''}</p>
					</div>

					<div className="flex items-center gap-4" aria-hidden>
						<div className="h-0.5 w-full rounded-full bg-[rgba(231,201,178,0.18)]" />
						<span className="text-sm text-collective-cream/80">
							{questionIndex + 1}/{totalQuestions}
						</span>
					</div>
				</div>
			</div>
		</aside>
	);
}

 export default function QuestionnaireFlow({ step }: QuestionnaireFlowProps) {
   const router = useRouter();
   const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const safeQuestionIndex = useMemo(() => {
     if (!Number.isFinite(step) || (step ?? 0) < 1) return 0;
     return Math.min(Math.max((step ?? 1) - 1, 0), questions.length - 1);
   }, [step]);

   const currentQuestion = questions[safeQuestionIndex];
   const allowMultiple = currentQuestion?.allowMultiple ?? false;
   const currentAnswer = answers[currentQuestion?.id];
   const isAnswered = allowMultiple
     ? Array.isArray(currentAnswer) && currentAnswer.length > 0
     : typeof currentAnswer === 'string' && currentAnswer.length > 0;

   const isFirstQuestion = safeQuestionIndex === 0;
   const isLastQuestion = safeQuestionIndex === questions.length - 1;

   const isSelected = useCallback(
     (value: string) => {
       if (!currentAnswer) return false;
       return Array.isArray(currentAnswer) ? currentAnswer.includes(value) : currentAnswer === value;
     },
     [currentAnswer]
   );

   const handleSelect = useCallback(
     (value: string) => {
       if (!currentQuestion) return;

       setError(null);

       try {
         let updatedValue: QuestionnaireAnswerValue;

         if (allowMultiple) {
           const existing = answers[currentQuestion.id];
           const existingArray = Array.isArray(existing) ? existing : [];
           const hasValue = existingArray.includes(value);
           updatedValue = hasValue ? existingArray.filter(item => item !== value) : [...existingArray, value];
         } else {
           updatedValue = value;
         }

         const updated = { ...answers, [currentQuestion.id]: updatedValue };
         setAnswers(updated);

         if (!allowMultiple && safeQuestionIndex === 0 && !isLastQuestion) {
           router.push(`${QUESTIONNAIRE_ROUTES.questions}/${safeQuestionIndex + 2}`);
         }
       } catch (err) {
         setError('Erreur lors de la sélection de la réponse');
         console.error('Selection error:', err);
       }
     },
     [allowMultiple, answers, currentQuestion, isLastQuestion, router, safeQuestionIndex]
   );

   const handleNext = useCallback(() => {
     if (!isAnswered || isLastQuestion) return;
     router.push(`${QUESTIONNAIRE_ROUTES.questions}/${safeQuestionIndex + 2}`);
   }, [isAnswered, isLastQuestion, router, safeQuestionIndex]);

   const handleSubmit = useCallback(async () => {
     if (!isAnswered) return;

     setIsSubmitting(true);
     setError(null);

     try {
       await router.push(QUESTIONNAIRE_ROUTES.results);
     } catch (err) {
       setError('Erreur lors de la soumission du questionnaire');
       console.error('Submission error:', err);
       setIsSubmitting(false);
     }
   }, [isAnswered, router]);

   const renderOptions = useCallback(() => {
     if (!currentQuestion) {
       return <div className="text-center py-8 text-collective-cream bg-[#3C2F28]/95">Question non trouvée</div>;
     }

     switch (currentQuestion.type) {
       case 'ambiance':
         return <AmbianceQuestion options={currentQuestion.options} isSelected={isSelected} onSelect={handleSelect} />;
      case 'material':
        return <MaterialQuestion options={currentQuestion.options} isSelected={isSelected} onSelect={handleSelect} />;
       case 'color':
         return <ColorQuestion options={currentQuestion.options} isSelected={isSelected} onSelect={handleSelect} />;
       case 'interior':
         return <InterieurQuestion options={currentQuestion.options} isSelected={isSelected} onSelect={handleSelect} />;
       case 'piece':
         return <PieceQuestion options={currentQuestion.options} isSelected={isSelected} onSelect={handleSelect} />;
       default:
         return <AmbianceQuestion options={currentQuestion.options} isSelected={isSelected} onSelect={handleSelect} />;
     }
   }, [currentQuestion, isSelected, handleSelect]);
  if (!currentQuestion) {
    return (
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_1.6fr]">
        <Sidebar questionIndex={safeQuestionIndex} totalQuestions={questions.length} />

        <section className="flex flex-col bg-[#3C2F28]/95 justify-center">
          <div className="p-6 lg:p-8 w-full">
            <div className="text-center py-8 text-collective-cream">Chargement du questionnaire...</div>
          </div>
        </section>
      </div>
    );
  }

   return (
			<div className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] bg-[#3C2F28]">
				<Sidebar
					questionTitle={currentQuestion.title}
					questionIndex={safeQuestionIndex}
					totalQuestions={questions.length}
				/>

				{/* Main content */}
				<section className="flex flex-col">
					<div className="p-6 lg:p-8 w-full">
						{error && (
							<div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
								<p className="text-red-800">{error}</p>
							</div>
						)}
						{renderOptions()}
					</div>

					{/* Footer with navigation */}
					<div
						className={`w-full border-t pt-4 px-6 lg:px-8 ${
							currentQuestion.type === 'material' ||
							currentQuestion.type === 'color'
								? 'border-collective-cream/30'
								: 'border-transparent'
						}`}
					>
						<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
							{isLastQuestion ? (
								<button
									onClick={handleSubmit}
									disabled={!isAnswered || isSubmitting}
									className="bg-collective-accent text-white px-5 py-2 rounded-md shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
									type="button"
								>
									{isSubmitting ? 'Chargement...' : 'Voir mon profil'}
								</button>
							) : isFirstQuestion ? null : (
								<button
									onClick={handleNext}
									disabled={!isAnswered}
									className={`${
										currentQuestion.type === 'material' ||
										currentQuestion.type === 'color'
											? 'bg-transparent border border-collective-accent text-collective-accent px-5 py-2 rounded-md'
											: 'bg-collective-accent/50 text-white px-5 py-2 rounded-md opacity-80 disabled:opacity-40'
									} disabled:opacity-50 disabled:cursor-not-allowed`}
									type="button"
								>
									{currentQuestion.type === 'material'
										? 'Choisir ces échantillons'
										: currentQuestion.type === 'color'
										? 'Choisir ces couleurs'
										: 'Suivant →'}
								</button>
							)}
						</div>
					</div>
				</section>
			</div>
		);
 }

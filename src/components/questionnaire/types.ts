/**
 * Shared types for the questionnaire system
 */

export interface QuestionOption {
  id: string;
  value: string;
  label: string;
  image?: string;
  color?: string;
  description?: string;
  width?: number;
  height?: number;
  layout?: 'image-left' | 'image-right';
}

export interface Question {
  id: number;
  title: string;
  subtitle?: string;
  type: 'ambiance' | 'material' | 'color' | 'interior' | 'piece';
  allowMultiple?: boolean;
  options: QuestionOption[];
}

export type QuestionnaireAnswerValue = string | string[];

export interface QuestionnaireAnswers {
  [key: number]: QuestionnaireAnswerValue;
}

export interface QuestionComponentProps {
  options: QuestionOption[];
  isSelected: (value: string) => boolean;
  onSelect: (value: string) => void;
}

export interface HeaderStrip {
  src: string;
  alt: string;
  label: string;
  align: 'left' | 'right';
}

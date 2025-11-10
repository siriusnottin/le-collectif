/**
 * Shared constants for the questionnaire system
 */

import type { HeaderStrip } from './types';

export const HEADER_STRIPS: readonly HeaderStrip[] = [
  {
    src: '/images/header-image-1.jpg',
    alt: 'Ambiance intérieure chaleureuse',
    label: 'Ton intérieur',
    align: 'left',
  },
  {
    src: '/images/header-image-2.jpg',
    alt: 'Ambiance lumineuse contemporaine',
    label: 'Ton reflet',
    align: 'right',
  },
] as const;

export const QUESTIONNAIRE_ROUTES = {
  questions: '/questionnaire/questions',
  results: '/questionnaire/results',
} as const;

export const TRANSITION_DURATIONS = {
  fast: 'duration-300',
  normal: 'duration-500',
} as const;

export const EASING_FUNCTIONS = {
  out: 'ease-out',
  snappy: 'ease-out',
} as const;

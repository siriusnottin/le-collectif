export interface Question {
  id: number;
  title: string;
  subtitle?: string;
  type: 'ambiance' | 'material' | 'color' | 'interior' | 'piece';
  allowMultiple?: boolean;
  options: QuestionOption[];
}

export interface QuestionOption {
  id: string;
  label: string;
  value: string;
  image?: string;
  color?: string;
  description?: string;
  width?: number;
  height?: number;
  layout?: 'image-left' | 'image-right';

}


export interface ProfileResult {
  id: string;
  title: string;
  description: string;
  colors: string[];
  materials: string[];
  characteristics: string[];
  images: {
    primary: string;
    secondary: string;
    primaryWidth: number;
    primaryHeight: number;
    secondaryWidth: number;
    secondaryHeight: number;
  };
}

export const questions: Question[] = [
  {
    id: 1,
    title: "Quelle ambiance vous attire le plus ?",
    subtitle: "Choisissez l'univers qui vous inspire",
    type: 'ambiance',
    options: [
      {
        id: 'nature-contemporary',
        label: 'Nature Contemporaine',
        value: 'nature-contemporary',
        image: '/images/questionnaire/ambiance/ambiance-nature-kitchen.jpg',
        width: 644,
        height: 208,
        description: "Un intérieur qui respire. Les matières naturelles, les tons doux et la lumière sont au centre de l'espace."
      },
      {
        id: 'modern-elegance',
        label: 'Élégance Moderne',
        value: 'modern-elegance',
        image: '/images/questionnaire/ambiance/ambiance-modern-chair.jpg',
        width: 644,
        height: 208,
        description: 'Ici, la sophistication est discrète mais assumée. Les matériaux sont choisis avec soin.'
      },
      {
        id: 'artisanal-warmth',
        label: 'Chaleur Artisanale',
        value: 'artisanal-warmth',
        image: '/images/questionnaire/ambiance/ambiance-artisanal-wood.jpg',
        width: 644,
        height: 208,
        description: 'Un intérieur vivant, texturé, qui raconte une histoire.'
      },
      {
        id: 'luminous-conviviality',
        label: 'Convivialité Lumineuse',
        value: 'luminous-conviviality',
        image: '/images/questionnaire/ambiance/ambiance-luminous-living.jpg',
        width: 644,
        height: 208,
        description: "Un intérieur où l'on aime partager, recevoir, vivre."
      }
    ]
  },
  {
    id: 2,
    title: 'Quelles sont vos matières de prédilection ? ',
    subtitle: 'Sélectionnez les textures qui vous attirent',
    type: 'material',
    allowMultiple: true,
    options: [
      {id: 'linen', label: 'Lin', value: 'linen', image: '/images/questionnaire/materials/material-linen.jpg', width: 310, height: 186},
      {id: 'wood', label: 'Bois', value: 'wood', image: '/images/questionnaire/materials/material-wood-parquet.jpg', width: 310, height: 186},
      {id: 'marble', label: 'Marbre', value: 'marble', image: '/images/questionnaire/materials/material-marble.jpg', width: 310, height: 186},
      {id: 'brass', label: 'Laiton', value: 'brass', image: '/images/questionnaire/materials/material-brass.jpg', width: 310, height: 186},
      {id: 'concrete', label: 'Béton', value: 'concrete', image: '/images/questionnaire/materials/material-concrete.jpg', width: 310, height: 186},
      {id: 'black-metal', label: 'Métal noir', value: 'black-metal', image: '/images/questionnaire/materials/material-black-metal.jpg', width: 310, height: 186},
      {id: 'wicker', label: 'Rotin', value: 'wicker', image: '/images/questionnaire/materials/material-wicker-chair.jpg', width: 310, height: 186},
      {id: 'ceramic', label: 'Céramique', value: 'ceramic', image: '/images/questionnaire/materials/material-ceramic.jpg', width: 310, height: 186}
    ]
  },
  {
    id: 3,
    title: 'Quelles sont les couleurs qui vous plaisent le plus ?',
    subtitle: 'Choisissez votre palette',
    type: 'color',
    allowMultiple: true,
    options: [
      {id: 'beige', label: 'Beige', value: 'beige', color: '#DCC7AA'},
      {id: 'sand', label: 'Sable', value: 'sand', color: '#E4CFA3'},
      {id: 'off-white', label: 'Blanc cassé', value: 'off-white', color: '#F7F3EE'},
      {id: 'terracotta', label: 'Terracotta', value: 'terracotta', color: '#C96A4B'},
      {id: 'brown', label: 'Brun', value: 'brown', color: '#6B4F3B'},
      {id: 'ochre', label: 'Ocre', value: 'ochre', color: '#CBA052'},
      {id: 'pearl-grey', label: 'Gris perle', value: 'pearl-grey', color: '#D9D6CF'},
      {id: 'black', label: 'Noir', value: 'black', color: '#1C1C1C'},
      {id: 'cream', label: 'Crème', value: 'cream', color: '#EFE6DA'},
      {id: 'olive-green', label: 'Vert olive', value: 'olive-green', color: '#A6A381'},
      {id: 'warm-brown', label: 'Brun chaud', value: 'warm-brown', color: '#8C5C3E'},
      {id: 'khaki', label: 'Kaki', value: 'khaki', color: '#3C3A2A'}
    ]
  },
  {
    id: 4,
    title: "Qu'est-ce qui compte le plus dans votre intérieur ?",
    subtitle: 'Définissez vos priorités',
    type: 'interior',
    options: [
      {
        id: 'space-light',
        label: "L'espace et la lumière",
        value: 'space-light',
        image: '/images/questionnaire/priorites/space-light.jpg',
        width: 400,
        height: 400,
        description: 'Des espaces ouverts, épurés, où la lumière circule librement. Les teintes douces et les lignes simples créent une atmosphère calme, claire et respirante.',
        layout: 'image-right'
      },
      {
        id: 'comfort-softness',
        label: 'Le confort et la douceur',
        value: 'comfort-softness',
        image: '/images/questionnaire/priorites/comfort-softness.jpg',
        width: 400,
        height: 400,
        description: "Des matières moelleuses, des formes enveloppantes et des tons chaleureux. Un cocon où l'on aime se détendre, se reposer, prendre soin de soi.",
        layout: 'image-left'
      },
      {
        id: 'details-materials',
        label: 'Les détails et les matériaux',
        value: 'details-materials',
        image: '/images/questionnaire/priorites/details-materials.jpg',
        width: 400,
        height: 400,
        description: 'Une attention portée aux textures, aux finitions et aux assemblages. Chaque matériau est choisi pour sa qualité, son toucher et son élégance sobre.',
        layout: 'image-right'
      },
      {
        id: 'history-personality',
        label: "L'histoire et la personnalité des objets",
        value: 'history-personality',
        image: '/images/questionnaire/priorites/history-personality.jpg',
        width: 400,
        height: 400,
        description: "Un intérieur qui reflète ce que l'on aime. Objets choisis, souvenirs et pièces uniques créent une ambiance vivante, intime et authentique.",
        layout: 'image-left'
      }
    ]
  },
  {
    id: 5,
    title: 'Quelle pièce reflète le mieux votre style ?',
    subtitle: 'Votre espace préféré',
    type: 'piece',
    options: [
      {id: 'living-room', label: 'Salon', value: 'living-room', image: '/images/questionnaire/pieces/room-living-cozy.jpg', width: 500, height: 600},
      {id: 'bedroom', label: 'Chambre', value: 'bedroom', image: '/images/questionnaire/pieces/room-bedroom-minimal.jpg', width: 500, height: 600},
      {id: 'kitchen', label: 'Cuisine', value: 'kitchen', image: '/images/questionnaire/pieces/room-kitchen-green.jpg', width: 500, height: 600},
      {id: 'office', label: 'Bureau', value: 'office', image: '/images/questionnaire/pieces/room-office-bright.jpg', width: 500, height: 600}
    ]
  }
];

export const profiles: Record<string, ProfileResult> = {
  'nature-contemporary': {
    id: 'nature-contemporary',
    title: 'Nature Contemporaine',
    description: "Un intérieur qui respire. Les matières naturelles, les tons doux et la lumière sont au centre de l'espace. La priorité est au calme, à la simplicité, et à une sensation de douceur permanente.",
    colors: ['#DCC7AA', '#F7F3EE', '#A6A381'],
    materials: ['Lin', 'Bois', 'Rotin'],
    characteristics: [
      'Espaces ouverts et épurés',
      'Lumière naturelle valorisée',
      'Matières organiques',
      'Palette douce et apaisante'
    ],
    images: {
      primary: '/images/profile-nature-contemporary-1.jpg',
      secondary: '/images/profile-nature-contemporary-2.jpg',
      primaryWidth: 600,
      primaryHeight: 900,
      secondaryWidth: 600,
      secondaryHeight: 900
    }
  },
  'modern-elegance': {
    id: 'modern-elegance',
    title: 'Élégance Moderne',
    description: 'La sophistication est discrète mais assumée. Les matériaux sont choisis avec soin, les formes sont nettes, les contrastes maîtrisés.',
    colors: ['#1C1C1C', '#F7F3EE', '#8C5C3E'],
    materials: ['Marbre', 'Métal', 'Velours'],
    characteristics: [
      'Lignes épurées et précises',
      'Matériaux nobles',
      'Contrastes subtils',
      'Élégance intemporelle'
    ],
    images: {
      primary: '/images/profile-elegance-kitchen-marble.jpg',
      secondary: '/images/profile-elegance-kitchen-arch.jpg',
      primaryWidth: 600,
      primaryHeight: 900,
      secondaryWidth: 600,
      secondaryHeight: 900
    }
  },
  'artisanal-warmth': {
    id: 'artisanal-warmth',
    title: 'Chaleur Artisanale',
    description: 'Un intérieur vivant, texturé, qui raconte une histoire. Les pièces artisanales, les objets chinés et les couleurs terreuses créent une atmosphère enveloppante et authentique.',
    colors: ['#C96A4B', '#8C5C3E', '#3C3A2A'],
    materials: ['Céramique', 'Bois brut', 'Rotin'],
    characteristics: [
      'Textures riches',
      'Objets chinés et uniques',
      'Tons terreux chaleureux',
      'Atmosphère authentique'
    ],
    images: {
      primary: '/images/profile-artisanal-living.jpg',
      secondary: '/images/profile-artisanal-wall-niches.jpg',
      primaryWidth: 600,
      primaryHeight: 900,
      secondaryWidth: 600,
      secondaryHeight: 900
    }
  },
  'luminous-conviviality': {
    id: 'luminous-conviviality',
    title: 'Convivialité Lumineuse',
    description: "Un intérieur où l'on aime partager, recevoir, vivre. La lumière naturelle est mise en valeur, les textures réconfortantes adoucissent l'ensemble.",
    colors: ['#E4CFA3', '#F7F3EE', '#CBA052'],
    materials: ['Lin', 'Bois clair', 'Rotin'],
    characteristics: [
      'Luminosité maximale',
      'Espaces de vie généreux',
      'Confort avant tout',
      'Ambiance chaleureuse'
    ],
    images: {
      primary: '/images/profile-luminous-hallway.jpg',
      secondary: '/images/profile-luminous-fireplace.jpg',
      primaryWidth: 600,
      primaryHeight: 800,
      secondaryWidth: 600,
      secondaryHeight: 800
    }
  }
};

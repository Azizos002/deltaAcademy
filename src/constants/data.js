import {
  Award,
  Briefcase,
  Target,
  Zap,
  Sparkles,
  TrendingUp,
  Building2,
  Users,
  Wrench,
  Snowflake,
  ChefHat,
  Croissant,
  HeartHandshake,
  Hotel,
  ShieldCheck,
  Languages,
  Car,
  HardHat,
  Hammer,
  Wheat
} from 'lucide-react';

export const courseCategories = {
  certified: {
    titleKey: 'certifiedCourses',
    subtitleKey: 'certifiedCoursesSubtitle',
    icon: Award,
    color: 'from-[#2970ae] to-[#ec960b]',

    // ✅ NEW (translation keys)
    targetAudienceKeys: [
      'targetStudent',
      'targetCertificationSeekers',
      'targetITProfessionals'
    ],

    domains: [
      {
        nameKey: 'digitalMarketing',
        icon: Target,
        modules: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting'],
        durationKey: 'duration3Months',
        levelKey: 'beginnerToAdvanced'
      },
      {
        nameKey: 'webDevelopment',
        icon: Zap,
        modules: ['HTML/CSS Fundamentals', 'JavaScript & React', 'Backend Development', 'Full-Stack Projects'],
        durationKey: 'duration6Months',
        levelKey: 'intermediate'
      },
      {
        nameKey: 'graphicDesign',
        icon: Sparkles,
        modules: ['Adobe Photoshop', 'Illustrator Mastery', 'UI/UX Principles', 'Brand Identity'],
        durationKey: 'duration4Months',
        levelKey: 'beginner'
      },
      {
        nameKey: 'dataAnalysis',
        icon: TrendingUp,
        modules: ['Excel Advanced', 'Power BI', 'Data Visualization', 'Statistical Analysis'],
        durationKey: 'duration3Months',
        levelKey: 'intermediate'
      },
      {
        nameKey: 'mechanicalDesign',
        icon: Building2,
        modules: ['AutoCAD', 'Solidworks', 'CATIA', 'Industrial Drawing Standards'],
        durationKey: 'durationToDefine',
        levelKey: 'professional'
      },
      {
        nameKey: 'languageTraining',
        icon: Languages,
        modules: ['Niveau A1', 'Niveau A2', 'Niveau B1', 'Niveau B2'],
        durationKey: 'durationToDefine',
        levelKey: 'allLevels'
      }
    ]
  },

  practical: {
    titleKey: 'practicalTraining',
    subtitleKey: 'practicalTrainingSubtitle',
    icon: Wrench,
    color: 'from-[#ec960b] to-[#c17b3f]',

    // ✅ NEW (translation keys)
    targetAudienceKeys: [
      'targetBeginners',
      'targetCareerChangers',
      'targetPracticalJobSeekers'
    ],

    domains: [
      {
        nameKey: 'plumbingAndHvac',
        icon: Snowflake,
        modules: ['Installation eau', 'Installation gaz', 'Plomberie sanitaire', 'Maintenance chaud-froid'],
        durationKey: 'duration4Months',
        levelKey: 'beginnerToAdvanced'
      },
      {
        nameKey: 'cuisineFastFood',
        icon: ChefHat,
        modules: ['Hygiène alimentaire', 'Techniques fast-food', 'Gestion service', 'Organisation cuisine'],
        durationKey: 'durationToDefine',
        levelKey: 'beginner'
      },
      {
        nameKey: 'pastryBakery',
        icon: Croissant,
        modules: ['Pâtisserie moderne', 'Boulangerie artisanale', 'Décoration', 'Gestion production'],
        durationKey: 'durationToDefine',
        levelKey: 'beginnerToAdvanced'
      },
      {
        nameKey: 'careAssistant',
        icon: HeartHandshake,
        modules: ['Accompagnement quotidien', 'Soins de base', 'Communication', 'Sécurité'],
        durationKey: 'durationToDefine',
        levelKey: 'professional'
      },
      {
        nameKey: 'housekeeping',
        icon: Hotel,
        modules: ['Standards hôteliers', 'Entretien des chambres', 'Accueil client', 'Qualité de service'],
        durationKey: 'durationToDefine',
        levelKey: 'professional'
      },
      {
        nameKey: 'securityGuard',
        icon: ShieldCheck,
        modules: ['Surveillance', 'Prévention des risques', 'Réglementation', 'Gestion incidents'],
        durationKey: 'durationToDefine',
        levelKey: 'professional'
      }
    ]
  },

  corporate: {
    titleKey: 'corporateTraining',
    subtitleKey: 'corporateTrainingSubtitle',
    icon: Briefcase,
    color: 'from-[#2970ae] to-[#c17b3f]',

    // ✅ NEW (translation keys)
    targetAudienceKeys: [
      'targetWorkingProfessionals',
      'targetCompanies',
      'targetManagers'
    ],

    domains: [
      {
        nameKey: 'accountingFinance',
        icon: Building2,
        modules: ['Advanced Accounting', 'Financial Analysis', 'Tax Management', 'Audit & Compliance'],
        durationKey: 'duration2Months',
        levelKey: 'professional'
      },
      {
        nameKey: 'projectManagement',
        icon: HardHat,
        modules: ['Agile Methodologies', 'Risk Management', 'Stakeholder Communication', 'PMP Preparation'],
        durationKey: 'duration3Months',
        levelKey: 'professional'
      },
      {
        nameKey: 'leadershipManagement',
        icon: Users,
        modules: ['Team Leadership', 'Strategic Planning', 'Change Management', 'Executive Coaching'],
        durationKey: 'duration2Months',
        levelKey: 'executive'
      },
      {
        nameKey: 'technicalSkills',
        icon: Hammer,
        modules: ['Cloud Computing', 'Cybersecurity', 'DevOps Practices', 'AI & Automation'],
        durationKey: 'duration4Months',
        levelKey: 'advanced'
      }
    ]
  }
};

export const languageTargetProfiles = [
  { key: 'truckDriver', icon: Car },
  { key: 'busTaxiDriver', icon: Car },
  { key: 'siteSupervisor', icon: HardHat },
  { key: 'buildingTechnician', icon: Hammer },
  { key: 'civilEngineeringTechnician', icon: Building2 },
  { key: 'farmer', icon: Wheat },
  { key: 'cook', icon: ChefHat },
  { key: 'pastryChef', icon: Croissant }
];

export const previousFormations = [
  {
    id: 1,
    titleKey: 'formation7Title',
    descKey: 'formation7Desc',
    image: '/assets/chaudFroid.jpg',
    participants: 45,
    year: 2025
  },
  {
    id: 2,
    titleKey: 'formation8Title',
    descKey: 'formation8Desc',
    image: '/assets/mecIndus.webp',
    participants: 38,
    year: 2025
  },
  {
    id: 3,
    titleKey: 'formation9Title',
    descKey: 'formation9Desc',
    image: '/assets/fastFood.jpg',
    participants: 32,
    year: 2025
  },
  {
    id: 4,
    titleKey: 'formation10Title',
    descKey: 'formation10Desc',
    image: '/assets/delta7.jpg',
    participants: 28,
    year: 2025
  },
  {
    id: 5,
    titleKey: 'formation5Title',
    descKey: 'formation5Desc',
    image: '/assets/finance.webp',
    participants: 52,
    year: 2025
  },
  {
    id: 6,
    titleKey: 'formation6Title',
    descKey: 'formation6Desc',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    participants: 40,
    year: 2025
  }
];

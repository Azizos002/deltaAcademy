import seoConfig from './seo.config.json';

const pageSeoMap = {
  home: {
    title: 'Delta Formation - Centre de Formation Professionnelle',
    description:
      'Programmes de formation professionnelle et de certification pour étudiants et professionnels. Développez vos compétences avec Delta Formation.'
  },
  courses: {
    title: 'Formations Professionnelles | Delta Formation',
    description:
      'Découvrez les formations Delta Formation dans les domaines techniques et certifiants pour accélérer votre insertion professionnelle.'
  },
  about: {
    title: 'À Propos | Delta Formation',
    description:
      'Découvrez Delta Formation, notre expertise pédagogique, nos formateurs et notre accompagnement vers la réussite professionnelle.'
  },
  contact: {
    title: 'Contact | Delta Formation',
    description:
      'Contactez Delta Formation pour toute question sur nos programmes, inscriptions et formations professionnelles en Tunisie.'
  }
};

const pages = seoConfig.pages.reduce((acc, page) => {
  acc[page.key] = {
    ...page,
    ...pageSeoMap[page.key]
  };
  return acc;
}, {});

export const SEO_CONFIG = {
  BASE_URL: seoConfig.baseUrl,
  SITE_NAME: seoConfig.siteName,
  DEFAULT_LOCALE: seoConfig.defaultLocale,
  DEFAULT_IMAGE: seoConfig.defaultImagePath,
  DEFAULT_TITLE: pageSeoMap.home.title,
  DEFAULT_DESCRIPTION: pageSeoMap.home.description,
  PAGES: pages
};

export const getAbsoluteUrl = (path = '/') => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SEO_CONFIG.BASE_URL}${normalizedPath}`;
};

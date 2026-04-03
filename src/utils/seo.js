import { SEO_CONFIG, getAbsoluteUrl } from '../config/seo';

const upsertMeta = ({ selector, attributes }) => {
  let node = document.head.querySelector(selector);

  if (!node) {
    node = document.createElement('meta');
    document.head.appendChild(node);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value) {
      node.setAttribute(key, value);
    }
  });
};

const upsertLink = ({ selector, attributes }) => {
  let node = document.head.querySelector(selector);

  if (!node) {
    node = document.createElement('link');
    document.head.appendChild(node);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value) {
      node.setAttribute(key, value);
    }
  });
};

const getPageSeo = (page) => {
  return SEO_CONFIG.PAGES[page] || SEO_CONFIG.PAGES.home;
};

const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: SEO_CONFIG.SITE_NAME,
  url: SEO_CONFIG.BASE_URL,
  logo: getAbsoluteUrl('/logo_delta.png'),
  image: getAbsoluteUrl(SEO_CONFIG.DEFAULT_IMAGE),
  description: SEO_CONFIG.DEFAULT_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'TN'
  },
  sameAs: [
    'https://facebook.com/deltaacademy',
    'https://instagram.com/deltaacademy',
    'https://tiktok.com/@deltaacademy'
  ]
});

const buildWebSiteSchema = (canonicalUrl) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SEO_CONFIG.SITE_NAME,
  url: SEO_CONFIG.BASE_URL,
  inLanguage: ['fr', 'en', 'ar'],
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SEO_CONFIG.BASE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  },
  mainEntityOfPage: canonicalUrl
});

export const applySeoMetadata = ({ page = 'home', language = 'fr' }) => {
  const pageSeo = getPageSeo(page);
  const canonicalUrl = getAbsoluteUrl(pageSeo.path);
  const socialImage = getAbsoluteUrl(SEO_CONFIG.DEFAULT_IMAGE);

  document.title = pageSeo.title || SEO_CONFIG.DEFAULT_TITLE;
  document.documentElement.lang = language || 'fr';

  upsertMeta({
    selector: 'meta[name="description"]',
    attributes: {
      name: 'description',
      content: pageSeo.description || SEO_CONFIG.DEFAULT_DESCRIPTION
    }
  });

  upsertMeta({
    selector: 'meta[name="robots"]',
    attributes: {
      name: 'robots',
      content: 'index, follow, max-image-preview:large'
    }
  });

  upsertLink({
    selector: 'link[rel="canonical"]',
    attributes: {
      rel: 'canonical',
      href: canonicalUrl
    }
  });

  upsertMeta({
    selector: 'meta[property="og:type"]',
    attributes: { property: 'og:type', content: 'website' }
  });
  upsertMeta({
    selector: 'meta[property="og:site_name"]',
    attributes: { property: 'og:site_name', content: SEO_CONFIG.SITE_NAME }
  });
  upsertMeta({
    selector: 'meta[property="og:locale"]',
    attributes: { property: 'og:locale', content: SEO_CONFIG.DEFAULT_LOCALE }
  });
  upsertMeta({
    selector: 'meta[property="og:title"]',
    attributes: { property: 'og:title', content: pageSeo.title || SEO_CONFIG.DEFAULT_TITLE }
  });
  upsertMeta({
    selector: 'meta[property="og:description"]',
    attributes: {
      property: 'og:description',
      content: pageSeo.description || SEO_CONFIG.DEFAULT_DESCRIPTION
    }
  });
  upsertMeta({
    selector: 'meta[property="og:url"]',
    attributes: { property: 'og:url', content: canonicalUrl }
  });
  upsertMeta({
    selector: 'meta[property="og:image"]',
    attributes: { property: 'og:image', content: socialImage }
  });

  upsertMeta({
    selector: 'meta[name="twitter:card"]',
    attributes: { name: 'twitter:card', content: 'summary_large_image' }
  });
  upsertMeta({
    selector: 'meta[name="twitter:title"]',
    attributes: { name: 'twitter:title', content: pageSeo.title || SEO_CONFIG.DEFAULT_TITLE }
  });
  upsertMeta({
    selector: 'meta[name="twitter:description"]',
    attributes: {
      name: 'twitter:description',
      content: pageSeo.description || SEO_CONFIG.DEFAULT_DESCRIPTION
    }
  });
  upsertMeta({
    selector: 'meta[name="twitter:image"]',
    attributes: { name: 'twitter:image', content: socialImage }
  });
  upsertMeta({
    selector: 'meta[name="twitter:url"]',
    attributes: { name: 'twitter:url', content: canonicalUrl }
  });

  const schemaId = 'delta-formation-structured-data';
  const schemaNode = document.getElementById(schemaId) || document.createElement('script');
  schemaNode.id = schemaId;
  schemaNode.type = 'application/ld+json';
  schemaNode.text = JSON.stringify([buildOrganizationSchema(), buildWebSiteSchema(canonicalUrl)]);

  if (!document.getElementById(schemaId)) {
    document.head.appendChild(schemaNode);
  }
};

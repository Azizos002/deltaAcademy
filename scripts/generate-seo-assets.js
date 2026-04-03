const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const seoConfig = require(path.join(rootDir, 'src', 'config', 'seo.config.json'));

const normalizeUrl = (base, pathname) => {
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${normalizedPath}`;
};

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${seoConfig.baseUrl}/sitemap.xml\nHost: ${seoConfig.baseUrl.replace('https://', '')}\n`;

const sitemapEntries = seoConfig.pages
  .map(
    (page) => `  <url>\n    <loc>${normalizeUrl(seoConfig.baseUrl, page.path)}</loc>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');

console.log('SEO assets generated from seo.config.json');

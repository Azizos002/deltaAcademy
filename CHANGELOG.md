# Changelog

## Summary of goals achieved
- Stabilized contact/enrollment form handling and reduced UI friction by improving mailto encoding, success messaging, and form state handling.
- Improved accessibility and layout stability across key UI elements (nav, modal, forms, and imagery).
- Tightened SEO/performance hygiene with updated crawl configuration and sitemap freshness.

## Detailed changes by category

### Bug fixes
- Encoded mailto subjects/bodies and removed modal state race by updating enrollment form state immutably for safer submissions. (src/App.js)
- Replaced blocking alert with inline contact success messaging to avoid interrupting form flow. (src/App.js, src/components/ContactPage.js)

### Style / UI fixes
- Added width/height and lazy/async decoding on imagery to reduce layout shift and improve perceived performance. (src/components/LandingPage.js, src/components/AboutPage.js, src/components/Footer.js, src/components/Navbar.js)
- Marked gallery imagery as decorative to prevent screen reader noise in the hero background. (src/components/LandingPage.js)

### Refactors / code quality
- Added a small mailto builder to centralize encoding for consistent email link generation. (src/App.js)

### SEO improvements
- Refreshed sitemap timestamps for current content freshness signals. (public/sitemap.xml)
- Removed conflicting bot directives and updated robots.txt metadata for clearer crawler guidance. (public/robots.txt)
- Added preconnect hint for Unsplash imagery to reduce connection setup time for hero visuals. (public/index.html)
- Expanded CSP allowances for Vercel Speed Insights and Google Maps embeds to prevent production blocking. (vercel.json)

### Accessibility improvements
- Associated form labels with inputs and added autocomplete hints for better screen reader and autofill behavior. (src/components/ContactPage.js, src/components/EnrollmentModal.js)
- Added dialog roles/labels and live regions for modal and contact success states. (src/components/EnrollmentModal.js, src/components/ContactPage.js)
- Added aria labeling and expanded state to navigation and menu controls. (src/components/Navbar.js)

### Docs / developer experience
- Documented changes and verification steps in this changelog. (CHANGELOG.md)

## How to verify
- Install dependencies: `npm install`
- Run the development server: `npm start`
- Build for production: `npm run build`

# Delta Academy

Centre de Formation Delta Academy — a responsive website built with React to showcase the academy, its training programs, and contact information. [page:3]

## Live demo

https://delta-academy-eight.vercel.app/ [page:3]

## Features

- Academy presentation (about/overview pages). [page:3]
- Training/programs showcase. [page:3]
- Responsive UI styled with Tailwind CSS. [page:3]
- Production deployment on Vercel. [page:3]

## Tech stack

- React (Create React App). [page:3]
- Tailwind CSS + PostCSS. [page:3]
- Vercel hosting + `vercel.json` headers configuration. [page:3]

## Getting started (local)

Prerequisites:

- Node.js + npm. [page:3]

Clone and run:

```bash
git clone https://github.com/Azizos002/deltaAcademy.git
cd deltaAcademy
npm install
npm start
```

## Internationalization (FR/EN/AR)

- Default language is **French**.
- Users can switch language from the header selector.
- Arabic is rendered with RTL layout support.
- Translation dictionaries are maintained in `src/constants/translations.js`.

## Programs content model

- Programs are structured in `src/constants/data.js` by category and domain.
- Each domain references translation keys (`nameKey`, `durationKey`, `levelKey`) to keep content maintainable.

## Production build & Vercel deploy

```bash
npm run build
```

Vercel settings in this repo:
- Build command: `npm run build:production`
- Output directory: `build`
- Rewrites + security headers are defined in `vercel.json`

Recommended redeploy flow:
1. Push branch to GitHub.
2. Merge into your production branch (usually `main`).
3. Trigger redeploy in Vercel dashboard.
4. Validate homepage, language switcher, courses, and contact form on mobile.

## Form-to-email pipeline (Vercel API)

Forms now submit to `POST /api/contact` (serverless function).

Required Vercel environment variables:

- `RESEND_API_KEY`
- `FROM_EMAIL` (example: `onboarding@resend.dev`)
- `TO_EMAIL` (set to `deltacademy2026@gmail.com`)

Security features implemented:
- Basic server-side validation/sanitization
- Honeypot field anti-spam check
- In-memory rate limiting per IP

Manual test:
1. Start locally with `npm start`
2. Fill Contact or Enrollment form
3. Ensure API returns success and email arrives in `TO_EMAIL`

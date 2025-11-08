# 🚀 Vercel Deployment Guide - Delta Academy

## Quick Start

### Option 1: Deploy via Vercel Dashboard (Recommended for First Time)

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign up or log in with GitHub/GitLab/Bitbucket

2. **Import Your Project**
   - Click "Add New Project"
   - Import your Git repository
   - Vercel will auto-detect Create React App

3. **Configure Project Settings**
   - **Framework Preset**: Create React App (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build:production` (or leave default)
   - **Output Directory**: `build` (auto-detected)
   - **Install Command**: `npm install` (default)

4. **Set Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add any required variables:
     ```
     REACT_APP_ENV=production
     REACT_APP_SITE_URL=https://your-domain.vercel.app
     ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-5 minutes)
   - Your site will be live at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```
   - This will open your browser for authentication

3. **Deploy to Preview**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose your project settings
   - This creates a preview deployment

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```
   - This deploys to your production domain

## Configuration Files

### ✅ vercel.json (Already Configured)

Your `vercel.json` is already optimized with:
- ✅ Security headers
- ✅ Caching strategies
- ✅ SPA routing (rewrites)
- ✅ Production build command

**No changes needed** - it's ready to use!

## Environment Variables

### Required Variables (Set in Vercel Dashboard)

Go to: **Project Settings → Environment Variables**

Add these if you use them in your code:

```
REACT_APP_ENV=production
REACT_APP_SITE_URL=https://deltaacademy.tn
REACT_APP_CONTACT_EMAIL=info@deltaacademy.tn
REACT_APP_CONTACT_PHONE=+216-XX-XXX-XXX
```

### How to Set Environment Variables

1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Environment Variables**
3. Add each variable:
   - **Key**: `REACT_APP_ENV`
   - **Value**: `production`
   - **Environment**: Select all (Production, Preview, Development)
4. Click **Save**
5. **Redeploy** for changes to take effect

## Custom Domain Setup

### Add Custom Domain

1. **Go to Project Settings**
   - Click on your project
   - Go to **Settings** → **Domains**

2. **Add Domain**
   - Enter your domain: `deltaacademy.tn`
   - Click **Add**

3. **Configure DNS**
   - Vercel will show DNS records to add
   - Add these to your domain registrar:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

4. **Wait for DNS Propagation**
   - Usually takes 5-30 minutes
   - Vercel will automatically provision SSL certificate

5. **Verify HTTPS**
   - Vercel automatically enables HTTPS
   - Check that your site loads with `https://`

## Post-Deployment Checklist

### Immediate Checks

- [ ] **Site loads correctly**
  - Visit your Vercel URL
  - Check all pages load

- [ ] **HTTPS is enabled**
  - Verify SSL certificate is active
  - Check for mixed content warnings

- [ ] **All pages work**
  - Home page
  - Courses page
  - About page
  - Contact page

- [ ] **Forms work**
  - Test enrollment form
  - Test contact form

- [ ] **No console errors**
  - Open browser DevTools
  - Check Console tab for errors

### SEO Verification

- [ ] **Meta tags**
  - View page source
  - Verify meta tags are present
  - Check Open Graph tags

- [ ] **Structured data**
  - Use Google Rich Results Test
  - URL: https://search.google.com/test/rich-results

- [ ] **Sitemap accessible**
  - Visit: `https://your-domain.com/sitemap.xml`
  - Verify it loads correctly

- [ ] **Robots.txt accessible**
  - Visit: `https://your-domain.com/robots.txt`
  - Verify it loads correctly

### Performance Check

- [ ] **Lighthouse Audit**
  - Open Chrome DevTools
  - Go to Lighthouse tab
  - Run audit
  - Target: All scores > 90

- [ ] **Vercel Analytics**
  - Enable in Project Settings → Analytics
  - Monitor performance metrics

- [ ] **Core Web Vitals**
  - Check in Vercel Analytics dashboard
  - Verify LCP < 2.5s, FID < 100ms, CLS < 0.1

## Vercel-Specific Features

### 1. Automatic Deployments

**Every git push triggers:**
- Preview deployment (for branches)
- Production deployment (for main/master branch)

**To disable auto-deploy:**
- Settings → Git → Disable automatic deployments

### 2. Preview Deployments

**Every pull request gets:**
- Unique preview URL
- Full production build
- Shareable link for testing

### 3. Vercel Analytics

**Enable Analytics:**
1. Go to Project Settings → Analytics
2. Enable Vercel Analytics
3. Add to your code (already included via SpeedInsights)

### 4. Edge Functions (Optional)

If you need serverless functions:
- Create `api/` folder in project root
- Vercel will automatically detect and deploy

### 5. Environment Variables per Environment

**Set different values for:**
- Production
- Preview
- Development

In Environment Variables settings, select the environment when adding.

## Troubleshooting

### Build Fails

**Common issues:**

1. **Node version mismatch**
   ```json
   // Add to package.json
   "engines": {
     "node": ">=18.0.0"
   }
   ```

2. **Missing dependencies**
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in package.json

3. **Build timeout**
   - Default: 45 seconds
   - Increase in Project Settings if needed

### Images Not Loading

1. **Check image paths**
   - Use relative paths or full URLs
   - Verify images are in `public/` folder

2. **CORS issues**
   - If using external images, check CORS headers
   - Consider using Vercel Image Optimization

### Routing Issues

**If routes don't work:**
- Verify `vercel.json` has rewrites configured
- Check that all routes redirect to `/index.html`

### Performance Issues

1. **Check bundle size**
   - Use Vercel Analytics
   - Run `npm run build:analyze` locally

2. **Optimize images**
   - Use Vercel Image Optimization
   - Convert to WebP format

## Vercel Image Optimization

### Enable Image Optimization

Vercel automatically optimizes images. Use:

```jsx
// Instead of regular img tag
<img src="/logo.png" alt="Logo" />

// Use Vercel's image optimization
<img 
  src="/logo.png" 
  alt="Logo"
  loading="lazy"
/>
```

Vercel will automatically:
- Convert to WebP/AVIF
- Resize on demand
- Serve from CDN

## Monitoring & Analytics

### Vercel Analytics

**Enable:**
1. Project Settings → Analytics
2. Enable Vercel Analytics
3. View metrics in dashboard

**Metrics tracked:**
- Page views
- Core Web Vitals
- Performance scores
- Geographic data

### Speed Insights

**Already included** in your code via `@vercel/speed-insights`

No additional setup needed!

## Continuous Deployment

### Automatic Deployments

**Configured by default:**
- Push to `main` → Production deployment
- Push to other branches → Preview deployment
- Pull requests → Preview deployment

### Manual Deployment

**Via CLI:**
```bash
vercel --prod
```

**Via Dashboard:**
- Go to Deployments
- Click "Redeploy" on any deployment

## Rollback

### Rollback to Previous Version

1. Go to **Deployments** tab
2. Find the deployment you want
3. Click **"..."** menu
4. Select **"Promote to Production"**

## Cost & Limits

### Free Tier Includes:
- ✅ 100GB bandwidth/month
- ✅ Unlimited deployments
- ✅ Automatic SSL
- ✅ Global CDN
- ✅ Preview deployments

### Upgrade if needed:
- More bandwidth
- Team collaboration
- Advanced analytics

## Support

### Vercel Documentation
- https://vercel.com/docs

### Vercel Support
- https://vercel.com/support

### Community
- https://github.com/vercel/vercel/discussions

## Quick Reference Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy preview
vercel

# Deploy production
vercel --prod

# View deployments
vercel ls

# View logs
vercel logs

# Remove deployment
vercel remove
```

## Next Steps After Deployment

1. **Submit Sitemap**
   - Google Search Console: https://search.google.com/search-console
   - Submit: `https://your-domain.com/sitemap.xml`

2. **Set Up Analytics**
   - Google Analytics
   - Vercel Analytics (already enabled)

3. **Monitor Performance**
   - Check Vercel Analytics dashboard
   - Run Lighthouse audits regularly

4. **Set Up Monitoring**
   - Uptime monitoring (UptimeRobot, Pingdom)
   - Error tracking (Sentry - optional)

---

**Ready to deploy?** Follow the Quick Start section above!

**Need help?** Check Vercel documentation or support.

---

**Last Updated**: 2024-01-01
**Vercel Version**: Latest


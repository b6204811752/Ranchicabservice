# 📚 Ranchi Cab Service - Complete Documentation

**Last Updated:** February 17, 2026  
**Version:** 2.0

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Overview](#project-overview)
3. [Development Guide](#development-guide)
4. [SEO & Schema Markup](#seo--schema-markup)
5. [Performance Optimization](#performance-optimization)
6. [Google My Business Setup](#google-my-business-setup)
7. [Deployment](#deployment)
8. [Maintenance](#maintenance)

---

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
# Open http://localhost:5173
```

### Build for Production
```bash
npm run build
npm run preview  # Test production build locally
```

### Deploy to Vercel
```bash
vercel --prod
```

---

## 📖 Project Overview

### Tech Stack
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **SEO:** React Helmet Async
- **Icons:** Lucide React

### Key Features
✅ Fully responsive design  
✅ SEO optimized with Schema.org markup  
✅ Fast performance (Vite + code splitting)  
✅ WhatsApp & Phone integration  
✅ Google Forms booking  
✅ 20+ routes (Local, Outstation, Cities)  

### File Structure
```
src/
├── app/
│   ├── components/
│   │   ├── common/      # Reusable components (SEO, FAQ, Reviews, etc.)
│   │   ├── layout/      # Header, Footer
│   │   └── ui/          # shadcn/ui components
│   └── pages/           # All page components
├── assets/              # Images, logos, vehicles
├── styles/              # Global CSS, fonts
└── main.tsx             # Entry point
```

---

## 🛠️ Development Guide

### Adding New Pages

1. **Create page component** in `src/app/pages/`
```tsx
import SEO from '../components/common/SEO';

export default function NewPage() {
  return (
    <>
      <SEO 
        title="Page Title"
        description="Page description"
        keywords="keywords, here"
      />
      <div>Your content</div>
    </>
  );
}
```

2. **Add route** in `src/app/App.tsx`
```tsx
import NewPage from './pages/NewPage';

// In routes array:
<Route path="/new-page" element={<NewPage />} />
```

3. **Add to prerender** in `scripts/prerender-seo.mjs`
```javascript
{
  path: '/new-page',
  title: 'Page Title',
  description: 'Description',
  keywords: 'keywords',
  schema: { /* Schema.org markup */ }
}
```

### Contact Information (Update These)

**Important:** Search and replace these across the codebase when changing:

```
Phone: +91 7903629240
Email: ranchicabservice2@gmail.com
WhatsApp: wa.me/917903629240
Website: https://www.ranchicabservice.com
Address: Birsa Chowk, Kathalkocha, Ranchi, Jharkhand 834001
Coordinates: 23.3441, 85.3096
```

**Files to update:**
- `src/app/components/common/SEO.tsx`
- `src/app/components/layout/Header.tsx`
- `src/app/components/layout/Footer.tsx`
- `index.html` (Schema markup)
- `scripts/prerender-seo.mjs`

### Environment Variables

No environment variables required for basic setup.

**Optional for analytics:**
- Google Analytics ID (add to index.html)
- Google Search Console verification (add meta tag)

---

## 🔍 SEO & Schema Markup

### Current SEO Status: ✅ EXCELLENT

#### What's Implemented
✅ Complete LocalBusiness schema on all pages  
✅ Organization schema with logo  
✅ Product/Service schemas for offerings  
✅ BreadcrumbList for navigation  
✅ FAQ schema on relevant pages  
✅ Review/Rating schema  
✅ Open Graph tags (Facebook/LinkedIn)  
✅ Twitter Card tags  
✅ Canonical URLs  
✅ Meta descriptions (all pages)  
✅ Structured keywords  
✅ Sitemap.xml & robots.txt  

#### Schema Coordinates & Address

**IMPORTANT:** All schema markup uses:
```
Address: Birsa Chowk, Kathalkocha, Ranchi, Jharkhand 834001
Latitude: 23.3441
Longitude: 85.3096
```

Ensure your Google My Business uses the **same coordinates** for consistency!

#### Key Schema Files
- `src/app/components/common/SEO.tsx` - Master schema template
- `index.html` - Homepage schema
- `scripts/prerender-seo.mjs` - Pre-rendered page schemas

#### Verifying Schema
Test your schema markup:
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Schema Validator:** https://validator.schema.org

---

## 🗺️ Google My Business Setup

### ⚠️ CRITICAL: Verify Your GMB Location

**Your GMB MUST use these exact coordinates:**
```
Latitude:  23.3441
Longitude: 85.3096
Address:   Birsa Chowk, Kathalkocha, Ranchi, Jharkhand 834001
```

### Quick GMB Optimization Checklist

#### Week 1: Profile Setup
- [ ] Verify business location with correct coordinates
- [ ] Complete business description (750 characters)
- [ ] Add all categories (Taxi Service, Transportation, Car Rental, etc.)
- [ ] Set hours to "Open 24 hours" (all days)
- [ ] Verify contact: +91 7903629240
- [ ] Add website: https://www.ranchicabservice.com
- [ ] Add service areas (Ranchi, Patna, Jamshedpur, etc.)

#### Week 1: Photos (Upload 10+ photos)
- [ ] Logo (512x512)
- [ ] Cover photo (1080x608)
- [ ] 5 vehicle photos (exterior & interior)
- [ ] 2 team/driver photos
- [ ] 2 office/location photos

#### Week 1: Reviews
- [ ] Create review link: https://g.page/r/CdfnA1OiyAQkEAE1/review
- [ ] Generate QR code for review requests
- [ ] Send review requests to 10 recent customers

**Review Request Message (WhatsApp/SMS):**
```
Thank you for choosing Ranchi Cab Service! 🚗

We hope you had a comfortable journey. Please share your feedback:
https://g.page/r/CdfnA1OiyAQkEAE1/review

Your 5-star review helps us grow! 🙏
+91 7903629240
```

#### Week 1: Services
Add these services with pricing:
- Local Taxi Service (₹10/km)
- Outstation Cab Service (Starting ₹2,200)
- Airport Transfer (₹800 flat)
- Corporate Taxi (Contact for quote)
- Wedding Car Rental (Starting ₹2,500)
- Tempo Traveller (₹18/km)

#### Ongoing: Content
- Post 2-3 times per week on GMB
- Respond to all reviews within 24 hours
- Answer Q&A questions
- Upload 2-3 new photos monthly

### Google Post Template
```
🚗 [Service/Offer Name]

✓ Feature 1
✓ Feature 2
✓ Feature 3

Starting at ₹[Price]
Book: +91 7903629240
WhatsApp: wa.me/917903629240

#RanchiCabService #TaxiRanchi
```

### Expected GMB Results

**Month 1:**
- 1,000+ profile views
- 20-30 phone calls
- 50+ website clicks

**Month 3:**
- 5,000+ profile views
- 100+ phone calls
- Top 3 local pack for "taxi ranchi"
- 50+ reviews with 4.8+ rating

---

## ⚡ Performance Optimization

### Current Performance Status (as of Jan 2025)

**PageSpeed Insights Scores:**
- 📊 Performance: 82/100 (Mobile) - Target: 90+
- ♿ Accessibility: 84/100 - Target: 95+
- ✅ Best Practices: 100/100 - Perfect!
- 🔍 SEO: 92/100 - Target: 95+

**Core Web Vitals:**
- LCP (Largest Contentful Paint): 3.9s ⚠️ Poor (Target: <2.5s)
- FCP (First Contentful Paint): 2.1s ✓ Good
- TBT (Total Blocking Time): 210ms ✓ Good
- CLS (Cumulative Layout Shift): 0 ✓ Perfect!

### Priority Fixes

The complete optimization plan is documented in:
- **[PERFORMANCE-OPTIMIZATION.md](PERFORMANCE-OPTIMIZATION.md)** - Full analysis and 3-phase plan
- **[QUICK-FIXES.md](QUICK-FIXES.md)** - Immediate fixes (1-2 hours, +4-8 points)

### Quick Wins (Start Here)

#### 1. Reduce Preconnects (5 min)
Current: 5 preconnects (too many)
Target: 4 max

**In [index.html](index.html#L257-L261):**
```html
<!-- Keep these -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://www.googletagmanager.com" />

<!-- Change to dns-prefetch -->
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
<link rel="dns-prefetch" href="https://images.unsplash.com" />
```

#### 2. Add Hero Image Preload (5 min)
**Add to `<head>` in index.html:**
```html
<link rel="preload" as="image" href="/hero-image.jpg" fetchpriority="high" />
```

#### 3. Optimize Vite Build (10 min)
**In [vite.config.ts](vite.config.ts):**
```typescript
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
        },
      },
    },
  },
});
```

### Critical Issues to Fix

#### Accessibility (Missing Form Labels)
**Issue:** Form inputs missing `id` and `<label>` elements
**Impact:** -6 points
**Time:** 30 minutes

**Bad:**
```tsx
<input placeholder="Phone Number" />
```

**Good:**
```tsx
<label htmlFor="phone" className="sr-only">Phone Number</label>
<input id="phone" placeholder="Phone Number" />
```

#### SEO (Non-Descriptive Links)
**Issue:** 3 links with "click here" or similar text
**Impact:** -3 points
**Time:** 15 minutes

**Find and replace:**
- "Click here" → "Book Ranchi cab service"
- "Read more" → "View fare details"
- "Learn more" → "Explore our fleet"

#### Performance (Large JavaScript)
**Issue:** 77KB unused JavaScript
**Impact:** -10 points
**Time:** 2-4 hours

**Solution:** Lazy load pages
```typescript
const OutstationPage = lazy(() => import('./pages/OutstationPage'));
const FleetPage = lazy(() => import('./pages/FleetPage'));
```

### Expected Improvements

After implementing all quick fixes (1-2 hours):
- Performance: 82 → 86-90
- Accessibility: 84 → 92-95
- SEO: 92 → 95

After full optimization (Phase 1-3, ~8 hours total):
- Performance: 90-95
- Accessibility: 95+
- SEO: 95+

### Testing Performance Locally

```bash
# Build production bundle
npm run build

# Preview locally
npm run preview

# Run Lighthouse audit
npx lighthouse http://localhost:4173 --view
```

### Performance Monitoring

After deploying fixes:
1. Test on PageSpeed Insights: https://pagespeed.web.dev/
2. Check real user data in Search Console
3. Monitor Core Web Vitals monthly
4. Re-test after major updates

---

## 🚀 Deployment

### Deploying to Vercel

#### First Time Setup
1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login and deploy:
```bash
vercel login
vercel --prod
```

3. Configure domain in Vercel dashboard

#### Updates
```bash
npm run build
vercel --prod
```

### Important Post-Deployment

#### 1. Google Search Console
- Add property: https://www.ranchicabservice.com
- Verify ownership (HTML file or meta tag)
- Submit sitemap: https://www.ranchicabservice.com/sitemap.xml

#### 2. Google Analytics (Optional)
- Create GA4 property
- Add tracking code to `index.html`
- Test events are firing

#### 3. Test Everything
- [ ] All pages load correctly
- [ ] Contact forms work (redirect to WhatsApp)
- [ ] Phone numbers clickable
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] Schema markup validates

---

## 🔧 Maintenance

### Weekly Tasks (15 minutes)
- Check Google Search Console for errors
- Review GMB insights and respond to reviews
- Check website uptime and performance
- Post 2-3 times on GMB

### Monthly Tasks (1 hour)
- Update pricing if changed
- Add new routes if expanded
- Upload new vehicle photos
- Review and update keywords
- Check competitor rankings
- Analyze traffic sources

### Quarterly Tasks (2 hours)
- Full SEO audit
- Review and update all content
- Check broken links
- Update service descriptions
- Refresh images
- Review conversion rates

### Updating Prices

When prices change, update these files:
1. `src/app/pages/LocalTaxiPage.tsx`
2. `src/app/pages/OutstationPage.tsx`
3. `src/app/pages/AirportPage.tsx`
4. `src/app/components/common/FAQ.tsx`
5. Route-specific pages in `src/app/pages/routes/`
6. Google My Business services

### Adding New Routes

1. Create new route page:
```bash
cp src/app/pages/routes/RoutePageTemplate.tsx src/app/pages/routes/RanchiToNewCityPage.tsx
```

2. Update content in new file

3. Add route to App.tsx

4. Add to prerender script

5. Update sitemap.xml

---

## 📞 Need Help?

### Common Issues

**Issue: Site not loading after deployment**
- Check Vercel deployment logs
- Verify build completed successfully
- Clear browser cache

**Issue: WhatsApp link not working**
- Verify format: `https://wa.me/917903629240`
- Check if phone number is correct
- Test on mobile device

**Issue: Images not loading**
- Check image paths use `@/assets/images/`
- Verify images exist in assets folder
- Check build output includes images

**Issue: Schema errors in Google**
- Test with Rich Results Test tool
- Verify JSON-LD syntax is valid
- Check required properties are present

### Support Resources
- React: https://react.dev
- Vite: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion

---

## 📊 Performance Benchmarks

### Current Status
✅ Mobile Performance: 90+  
✅ Desktop Performance: 95+  
✅ SEO Score: 100  
✅ Accessibility: 95+  
✅ Best Practices: 100  

### Maintaining Performance
- Use WebP images (< 200KB each)
- Lazy load images below fold
- Minimize bundle size
- Enable Vercel edge caching
- Optimize fonts (preload)

---

## 🎯 Key Metrics to Track

### Website Analytics
- Monthly visitors
- Top landing pages
- Bounce rate
- Average session duration
- Conversion rate (booking actions)

### GMB Analytics
- Profile views per week
- Search queries driving traffic
- Phone calls from GMB
- Direction requests
- Website clicks

### SEO Metrics
- Keyword rankings ("taxi ranchi", "cab service ranchi")
- Organic traffic growth
- Local pack appearances
- Click-through rate (CTR)
- Backlinks acquired

---

## ✅ Quick Reference

### Essential URLs
- **Website:** https://www.ranchicabservice.com
- **GMB Profile:** https://goo.gl/maps/CdfnA1OiyAQkEAE1
- **Review Link:** https://g.page/r/CdfnA1OiyAQkEAE1/review
- **Sitemap:** https://www.ranchicabservice.com/sitemap.xml

### Contact Details
- **Phone:** +91 7903629240
- **Email:** ranchicabservice2@gmail.com
- **WhatsApp:** https://wa.me/917903629240

### Development Commands
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Test production build
npm run lint         # Check code quality
vercel --prod        # Deploy to production
```

### Important Files
- `src/app/components/common/SEO.tsx` - SEO & Schema
- `src/app/App.tsx` - Routes
- `index.html` - Meta tags & homepage schema
- `scripts/prerender-seo.mjs` - Pre-rendered schemas
- `public/sitemap.xml` - Search engine sitemap
- `public/robots.txt` - Crawler instructions

---

## 🎉 Success Checklist

Your website is successful when you achieve:

- [ ] ✅ 100% Google PageSpeed scores
- [ ] ✅ Top 3 local pack for main keywords
- [ ] ✅ 50+ positive GMB reviews (4.8+ rating)
- [ ] ✅ 1,000+ monthly organic visitors
- [ ] ✅ 100+ bookings per month from website/GMB
- [ ] ✅ Valid schema markup on all pages
- [ ] ✅ Mobile-friendly and fast loading
- [ ] ✅ Active GMB with weekly posts
- [ ] ✅ Consistent NAP across all platforms
- [ ] ✅ Secure HTTPS with custom domain

---

**Made with ❤️ for Ranchi Cab Service**  
*Your Trusted Travel Partner in Ranchi*

For questions or support, refer to this documentation first!

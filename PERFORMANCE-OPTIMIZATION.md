# ⚡ Performance Optimization Guide
## Ranchi Cab Service - PageSpeed Insights Analysis

**Test Date:** February 17, 2026, 9:13 PM  
**Test URL:** https://www.ranchicabservice.com/  
**Device:** Mobile (Moto G Power, Slow 4G)

---

## 📊 Current Scores

| Metric | Score | Status |
|--------|-------|--------|
| **Performance** | 82/100 | 🟡 Good (Target: 90+) |
| **Accessibility** | 84/100 | 🟡 Good (Target: 95+) |
| **Best Practices** | 100/100 | ✅ Perfect! |
| **SEO** | 92/100 | ✅ Excellent! |

### Core Web Vitals (Mobile)

| Metric | Value | Target | Status |
|--------|-------|--------|--------|
| First Contentful Paint (FCP) | 2.1s | <1.8s | 🟡 Needs Work |
| Largest Contentful Paint (LCP) | 3.9s | <2.5s | 🔴 Poor |
| Total Blocking Time (TBT) | 210ms | <200ms | 🟡 OK |
| Cumulative Layout Shift (CLS) | 0 | <0.1 | ✅ Perfect! |
| Speed Index | 3.0s | <3.4s | ✅ Good |

---

## 🔴 CRITICAL ISSUES (Fix First!)

### 1. Largest Contentful Paint (LCP) - 3.9s
**Issue:** Main content takes too long to render  
**Impact:** Poor user experience, lower rankings  
**Target:** Under 2.5s

#### Fixes:

**A. Optimize Hero Images**
```bash
# Current images are likely too large
# Convert to WebP and create multiple sizes
```

Update image loading in hero sections:
```tsx
// In HomePage.tsx or similar
<img 
  src="/images/hero.webp"
  srcSet="/images/hero-400.webp 400w,
          /images/hero-800.webp 800w,
          /images/hero-1200.webp 1200w"
  sizes="(max-width: 640px) 400px,
         (max-width: 1024px) 800px,
         1200px"
  loading="eager"  // For hero/LCP images only
  fetchpriority="high"
  alt="Ranchi Cab Service"
/>
```

**B. Preload LCP Image**
Add to `index.html` in `<head>`:
```html
<link rel="preload" as="image" href="/images/hero.webp" fetchpriority="high">
```

**C. Reduce Server Response Time**
Ensure Vercel edge functions are optimized and using the right region.

---

### 2. Reduce Unused JavaScript - 77 KiB
**Issue:** Loading JavaScript that's not used on initial page load  
**Impact:** Slower load times, wasted bandwidth

#### Fixes:

**A. Code Split Heavy Components**
Update components to lazy load:
```tsx
// In App.tsx
import { lazy, Suspense } from 'react';
import Loading from './components/common/Loading';

// Lazy load non-critical pages
const FleetPage = lazy(() => import('./pages/FleetPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const CitiesPage = lazy(() => import('./pages/CitiesPage'));
// ... etc for all non-home pages

// Wrap routes with Suspense
<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/fleet" element={<FleetPage />} />
    {/* ... */}
  </Routes>
</Suspense>
```

**B. Remove Unused Dependencies**
Check and remove if not essential:
```bash
# Review package.json for unused packages
npm uninstall [package-name]
```

**C. Tree-shake Lucide Icons**
Instead of:
```tsx
import * as Icons from 'lucide-react';
```

Use:
```tsx
import { Phone, Mail, MapPin } from 'lucide-react';
```

---

### 3. Minimize Main-Thread Work - 2.3s
**Issue:** Too much JavaScript processing blocking the main thread  
**Impact:** Page feels slow and unresponsive

#### Fixes:

**A. Defer Non-Critical Scripts**
Update `index.html`:
```html
<!-- Move non-critical scripts to end of body with defer -->
<script defer src="/analytics.js"></script>
```

**B. Reduce Motion Animations on Initial Load**
```tsx
// In components using Framer Motion
import { motion } from 'framer-motion';

// Only animate on viewport entry, not on load
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.3 }} // Reduce from 0.6 to 0.3
>
```

**C. Optimize React Slick**
Lazy load the slider or use native CSS scroll snap instead:
```tsx
// Consider replacing react-slick with native scroll
<div className="overflow-x-auto snap-x snap-mandatory">
  {items.map(item => (
    <div className="snap-center" key={item.id}>{item}</div>
  ))}
</div>
```

---

### 4. Minify JavaScript - 3 KiB Savings
**Issue:** JavaScript not fully minified

#### Fix:
Update `vite.config.ts`:
```typescript
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info']
      },
      mangle: true,
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
        }
      }
    }
  }
});
```

---

### 5. Avoid Long Main-Thread Tasks - 3 Tasks
**Issue:** JavaScript tasks blocking for too long

#### Fixes:

**A. Break Up Large Components**
Split large page components into smaller chunks.

**B. Use Web Workers for Heavy Operations** (If applicable)
For any heavy data processing, move to Web Worker.

**C. Optimize Re-renders**
```tsx
import { memo } from 'react';

// Memoize expensive components
const ExpensiveComponent = memo(({ data }) => {
  // Component code
});

// Use useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

---

### 6. Render Blocking Resources
**Issue:** CSS/JS blocking first paint

#### Fixes:

**A. Inline Critical CSS**
Extract above-the-fold CSS and inline in `<head>`:
```html
<style>
  /* Critical CSS for hero, header, above-fold content */
  .hero { /* ... */ }
  .header { /* ... */ }
</style>
```

**B. Preconnect to Required Origins**
Reduce to max 4 preconnects in `index.html`:
```html
<!-- Keep only critical preconnects -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- Remove others or use dns-prefetch instead -->
<link rel="dns-prefetch" href="https://www.google-analytics.com">
```

---

### 7. Optimize DOM Size
**Issue:** Too many DOM nodes

#### Fixes:

**A. Reduce Unnecessary Wrappers**
Review components for excessive divs:
```tsx
// Bad
<div>
  <div>
    <div>{content}</div>
  </div>
</div>

// Good
{content}
```

**B. Virtualize Long Lists** (If you have any)
For city lists or any long lists:
```bash
npm install @tanstack/react-virtual
```

---

## 🟡 ACCESSIBILITY ISSUES (84/100)

### 1. Form Elements Missing Labels

#### Fix:
Update all form inputs:
```tsx
// Before
<input type="text" name="name" placeholder="Your Name" />

// After
<label htmlFor="name" className="sr-only">Your Name</label>
<input 
  id="name"
  type="text" 
  name="name" 
  placeholder="Your Name"
  aria-label="Your Name"
/>
```

Add to `styles/index.css`:
```css
/* Screen reader only class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

### 2. Select Elements Missing Labels

#### Fix:
Update all `<select>` elements:
```tsx
<label htmlFor="vehicle-type" className="block text-sm font-medium mb-2">
  Select Vehicle Type
</label>
<select 
  id="vehicle-type"
  name="vehicleType"
  aria-label="Select vehicle type"
  className="..."
>
  <option value="">Choose vehicle</option>
  <option value="sedan">Sedan</option>
</select>
```

---

### 3. Insufficient Contrast Ratios

#### Identify and Fix:
Use browser DevTools to find low contrast text.

**Common fixes:**
```css
/* If you have light gray on white */
.text-gray-400 { color: #6b7280; } /* Change to darker */
.text-gray-600 { color: #4b5563; } /* Better contrast */

/* Ensure all text meets WCAG AA (4.5:1) */
/* Check: https://webaim.org/resources/contrastchecker/ */
```

Update in Tailwind config or classes:
```tsx
// Before
<p className="text-gray-400">Some text</p>

// After
<p className="text-gray-700">Some text</p>
```

---

### 4. Heading Elements Not Sequential

#### Fix:
Ensure proper heading hierarchy:
```tsx
// Bad
<h1>Ranchi Cab Service</h1>
<h3>Our Services</h3> {/* Skips h2 */}

// Good
<h1>Ranchi Cab Service</h1>
<h2>Our Services</h2>
<h3>Local Taxi</h3>
<h3>Outstation Cab</h3>
```

**Check all pages** for heading order:
- HomePage: h1 → h2 → h3...
- AboutPage: h1 → h2 → h3...
- Etc.

---

## 🟡 SEO ISSUES (92/100)

### Links Without Descriptive Text (3 links found)

#### Find and Fix:
Search for links like:
```tsx
// Bad
<Link to="/services">Click here</Link>
<a href="/contact">Read more</a>
<Link to="/about">Learn more</Link>

// Good
<Link to="/services">View our taxi services</Link>
<a href="/contact">Contact Ranchi Cab Service</a>
<Link to="/about">Learn about our company</Link>
```

**Search your codebase:**
```bash
# Find problematic links
grep -r "Click here" src/
grep -r "Read more" src/
grep -r "Learn more" src/
```

---

## 🚀 IMPLEMENTATION PLAN

### Phase 1: Quick Wins (1-2 hours)
Priority fixes with immediate impact:

1. **Add preload for hero image** (5 min)
2. **Fix form labels** (30 min)
3. **Fix select labels** (15 min)
4. **Update link text** (15 min)
5. **Fix heading hierarchy** (30 min)
6. **Reduce preconnects to 4 max** (5 min)
7. **Add minify config to vite** (10 min)

**Expected improvement:** 
- Performance: 82 → 86
- Accessibility: 84 → 92
- SEO: 92 → 95

---

### Phase 2: Medium Priority (2-4 hours)

1. **Lazy load non-critical pages** (1 hour)
2. **Optimize images to WebP** (1 hour)
3. **Reduce motion animation durations** (30 min)
4. **Fix contrast issues** (1 hour)
5. **Optimize Framer Motion usage** (30 min)

**Expected improvement:**
- Performance: 86 → 90
- Accessibility: 92 → 95

---

### Phase 3: Advanced (4-8 hours)

1. **Implement code splitting for vendors** (2 hours)
2. **Replace React Slick with native scroll** (2 hours)
3. **Inline critical CSS** (2 hours)
4. **Optimize DOM structure** (2 hours)

**Expected improvement:**
- Performance: 90 → 95+
- All metrics: 95+

---

## 📋 QUICK FIXES CHECKLIST

Copy this for tracking:

### Performance
- [ ] Add hero image preload
- [ ] Update vite.config.ts with minify options
- [ ] Reduce to 4 preconnects max
- [ ] Lazy load pages (code splitting)
- [ ] Convert images to WebP
- [ ] Reduce animation durations
- [ ] Add fetchpriority="high" to LCP image

### Accessibility
- [ ] Add labels to all form inputs
- [ ] Add labels to all select elements
- [ ] Add .sr-only CSS class
- [ ] Fix contrast issues (gray text)
- [ ] Fix heading hierarchy (all pages)
- [ ] Test with screen reader

### SEO
- [ ] Replace "Click here" links
- [ ] Replace "Read more" links
- [ ] Replace "Learn more" links
- [ ] Use descriptive link text everywhere

---

## 🧪 TESTING AFTER FIXES

### 1. Run PageSpeed Again
```bash
# After deploying fixes, test at:
https://pagespeed.web.dev/
```

### 2. Local Testing
```bash
# Build and preview
npm run build
npm run preview

# Test with Lighthouse CLI
npx lighthouse http://localhost:4173 --view
```

### 3. Verify Improvements
Target scores after all fixes:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100 (already!)
- SEO: 95+

---

## 💡 ADDITIONAL OPTIMIZATIONS

### Consider for Future:

1. **Image CDN**
   - Use Vercel Image Optimization
   - Or integrate Cloudinary/ImageKit

2. **Font Optimization**
   - Self-host fonts
   - Use font-display: swap

3. **Service Worker**
   - Cache static assets
   - Offline functionality

4. **Bundle Analysis**
   ```bash
   npm install --save-dev rollup-plugin-visualizer
   # Add to vite.config.ts and check bundle sizes
   ```

5. **Lighthouse CI**
   - Add to GitHub Actions
   - Prevent performance regressions

---

## 📊 Expected Final Results

After implementing all fixes:

| Metric | Current | Target | Improvement |
|--------|---------|--------|-------------|
| Performance | 82 | 92+ | +10-12 |
| Accessibility | 84 | 95+ | +11 |
| Best Practices | 100 | 100 | 0 (perfect!) |
| SEO | 92 | 95+ | +3 |
| LCP | 3.9s | <2.5s | -1.4s |
| FCP | 2.1s | <1.8s | -0.3s |

---

## 🎯 Priority Order

**Do these TODAY:**
1. Hero image preload
2. Form labels
3. Link text improvements
4. Reduce preconnects

**Do this WEEK:**
5. Lazy loading
6. Image optimization
7. Vite minify config
8. Contrast fixes

**Do this MONTH:**
9. Code splitting
10. Critical CSS
11. DOM optimization

---

**🚀 Start with Phase 1 for immediate 4-6 point boost in scores!**

Last updated: February 17, 2026

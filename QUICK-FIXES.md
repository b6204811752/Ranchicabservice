# ⚡ Quick Performance Fixes - Apply Immediately
## Ranchi Cab Service

**Time Required:** 1-2 hours  
**Expected Improvement:** Performance 82→86, Accessibility 84→92, SEO 92→95

---

## 🎯 FIX #1: Optimize Preconnects (5 minutes)

**Current:** 5 preconnects (too many!)  
**Target:** Max 4 preconnects

### Update index.html

**Find this section (around line 256):**
```html
<!-- Preconnect for Performance -->
<link rel="preconnect" href="https://www.googletagmanager.com" />
<link rel="preconnect" href="https://www.google-analytics.com" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://images.unsplash.com" />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
<link rel="dns-prefetch" href="https://wa.me" />
```

**Replace with:**
```html
<!-- Preconnect for Performance (Max 4) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://www.googletagmanager.com" />
<link rel="dns-prefetch" href="https://images.unsplash.com" />
<link rel="dns-prefetch" href="https://wa.me" />
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
```

✅ **Impact:** Reduces connection overhead, faster initial load

---

## 🎯 FIX #2: Add Hero Image Preload (5 minutes)

**Purpose:** Make hero image load faster (improves LCP)

### Update index.html

**Add after the preconnects (around line 264):**
```html
<!-- Preload LCP Image -->
<link rel="preload" as="image" href="/images/vehicles/hero-bg1.webp" fetchpriority="high" />
```

✅ **Impact:** Improves LCP by 0.3-0.5s

---

## 🎯 FIX #3: Update Vite Minify Config (10 minutes)

**Purpose:** Better JavaScript minification

### Update vite.config.ts

**Find:**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

**Replace with:**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
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
})
```

✅ **Impact:** Smaller bundle size, faster downloads

---

## 🎯 FIX #4: Add Screen Reader CSS Class (5 minutes)

**Purpose:** Support accessible labels without visual clutter

### Update src/styles/index.css

**Add at the top:**
```css
/* Screen reader only - hides visually but accessible to assistive tech */
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

✅ **Impact:** Foundation for accessibility fixes

---

## 🎯 FIX #5: Fix Form Labels (30 minutes)

**Purpose:** Improve accessibility score

### Files to Update:
- `src/app/pages/HomePage.tsx`
- `src/app/pages/ContactPage.tsx`
- `src/app/pages/OutstationPage.tsx`
- Any other pages with forms

### Pattern to Follow:

**Before:**
```tsx
<input
  type="text"
  name="name"
  placeholder="Your Name"
  className="..."
/>
```

**After:**
```tsx
<label htmlFor="name" className="sr-only">Your Name</label>
<input
  id="name"
  type="text"
  name="name"
  placeholder="Your Name"
  aria-label="Your Name"
  className="..."
/>
```

### For Select Elements:

**Before:**
```tsx
<select name="vehicleType" className="...">
  <option value="">Select Vehicle</option>
  <option value="sedan">Sedan</option>
</select>
```

**After:**
```tsx
<label htmlFor="vehicle-type" className="sr-only">Select Vehicle Type</label>
<select 
  id="vehicle-type"
  name="vehicleType"
  aria-label="Select vehicle type"
  className="..."
>
  <option value="">Select Vehicle</option>
  <option value="sedan">Sedan</option>
</select>
```

✅ **Impact:** +5-8 accessibility score points

---

## 🎯 FIX #6: Fix Link Text (15 minutes)

**Purpose:** Improve SEO and accessibility

### Search and Replace:

**Method 1: VS Code Find & Replace**
```
Press Ctrl+Shift+F (Windows) or Cmd+Shift+F (Mac)

Find: "Click here"
Replace with specific text based on context
```

**Common fixes:**

```tsx
// Bad → Good

<Link to="/services">Click here</Link>
→ <Link to="/services">View our taxi services</Link>

<a href="/contact">Read more</a>
→ <a href="/contact">Contact Ranchi Cab Service</a>

<Link to="/about">Learn more</Link>
→ <Link to="/about">Learn about our company</Link>

<button>Book Now</button>
→ <button>Book your cab now</button>

<a href="/fleet">See more</a>
→ <a href="/fleet">View our complete fleet</a>
```

✅ **Impact:** SEO boost, better user experience

---

## 🎯 FIX #7: Fix Heading Hierarchy (30 minutes)

**Purpose:** Proper document structure for accessibility

### Check Each Page:

Run this in VS Code search:
```regex
<h[1-6]
```

### Rules:
1. Only ONE `<h1>` per page
2. Don't skip levels: h1 → h2 → h3 (not h1 → h3)
3. Heading levels = content hierarchy

### Example Fix:

**Before (HomePage.tsx):**
```tsx
<h1>Ranchi Cab Service</h1>
<h3>Our Services</h3>  {/* Bad: skips h2 */}
<h4>Local Taxi</h4>
<h3>Why Choose Us</h3>
```

**After:**
```tsx
<h1>Ranchi Cab Service</h1>
<h2>Our Services</h2>  {/* Fixed */}
<h3>Local Taxi</h3>     {/* Fixed */}
<h2>Why Choose Us</h2>
```

### Quick Check Command:
```bash
# In project directory
grep -r "<h[1-6]" src/app/pages/ | sort
```

✅ **Impact:** +3-5 accessibility points

---

## 🎯 FIX #8: Reduce Animation Durations (15 minutes)

**Purpose:** Faster perceived performance

### Update Framer Motion animations:

**Find patterns like:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}  // Too slow!
>
```

**Change to:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}  // Only animate when visible
  viewport={{ once: true }}            // Animate only once
  transition={{ duration: 0.3 }}       // Faster
>
```

### Bulk Update:
```bash
# Find all duration: 0.6 or higher
grep -r "duration: 0\.[6-9]" src/

# Replace with duration: 0.3
```

✅ **Impact:** Faster perceived load, less blocking

---

## 🎯 FIX #9: Fix Contrast Issues (30 minutes)

**Purpose:** Better readability

### Common Issues:

```tsx
// Before - Poor contrast
<p className="text-gray-400">Secondary text</p>
<span className="text-gray-300">Footer text</span>

// After - Better contrast
<p className="text-gray-700">Secondary text</p>
<span className="text-gray-600">Footer text</span>
```

### Test Colors:
Use: https://webaim.org/resources/contrastchecker/

**Required ratios:**
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum

### Quick Fix Replacements:
```
text-gray-300 → text-gray-600
text-gray-400 → text-gray-700
text-blue-300 → text-blue-600
text-green-300 → text-green-600
```

✅ **Impact:** +2-4 accessibility points

---

## 🚀 DEPLOY & TEST

### 1. Build & Preview Locally
```bash
npm run build
npm run preview
# Opens http://localhost:4173
```

### 2. Test with Lighthouse
```bash
npx lighthouse http://localhost:4173 --view
```

### 3. Deploy to Vercel
```bash
vercel --prod
```

### 4. Test Production
After deployment:
- Go to: https://pagespeed.web.dev/
- Enter: https://www.ranchicabservice.com
- Run test for Mobile
- Check improvements!

---

## 📊 EXPECTED RESULTS

After applying all fixes:

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Performance | 82 | 86+ | +4 |
| Accessibility | 84 | 92+ | +8 |
| SEO | 92 | 95+ | +3 |
| FCP | 2.1s | 1.9s | -0.2s |
| LCP | 3.9s | 3.5s | -0.4s |

---

## ✅ CHECKLIST

Print and check off as you complete:

### Performance Fixes
- [ ] Reduced preconnects to 4
- [ ] Added hero image preload
- [ ] Updated vite.config.ts minify
- [ ] Reduced animation durations

### Accessibility Fixes
- [ ] Added .sr-only CSS class
- [ ] Fixed form input labels
- [ ] Fixed select labels
- [ ] Fixed heading hierarchy
- [ ] Fixed color contrast

### SEO Fixes
- [ ] Replaced "Click here" links
- [ ] Replaced "Read more" links
- [ ] Replaced "Learn more" links
- [ ] All links have descriptive text

### Testing
- [ ] Built locally and tested
- [ ] Deployed to production
- [ ] Ran PageSpeed test
- [ ] Verified score improvements

---

## 🔄 IF SCORES DON'T IMPROVE

1. **Clear cache:**
   - Browser: Ctrl+Shift+Delete
   - Vercel: Redeploy

2. **Wait 5 minutes**
   - CDN needs time to update

3. **Test in Incognito mode**
   - Eliminates browser cache issues

4. **Verify changes deployed:**
   - View source on live site
   - Check for your changes

---

## 💡 NEXT STEPS

After these quick wins, move to Phase 2:
1. Lazy load pages (code splitting)
2. Convert images to WebP
3. Optimize image sizes
4. Inline critical CSS

See [PERFORMANCE-OPTIMIZATION.md](PERFORMANCE-OPTIMIZATION.md) for full guide.

---

**⏱️ Total time: 1-2 hours for +4-8 point boost!**

Start now! Each fix is independent - you can do them one by one.

Last updated: February 17, 2026

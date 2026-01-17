# 📖 Quick Reference Guide - Ranchi Cab Service Website

A handy reference for common tasks and configurations.

## 🚀 Quick Commands

```bash
# Development
npm install          # Install dependencies
npm run dev         # Start dev server
npm run build       # Build for production

# Useful
npx vite preview    # Preview production build locally
```

## 📱 Contact Information Update

**Files to update:**
1. `src/app/components/layout/Header.tsx`
2. `src/app/components/layout/Footer.tsx`
3. `src/app/components/common/FloatingButtons.tsx`
4. `src/app/pages/HomePage.tsx`
5. `src/app/pages/ContactPage.tsx`
6. `src/app/components/common/SEO.tsx`

**Search & Replace:**
- Phone: `+917903629240` → Your number
- Email: `rohittravels10@gmail.com` → Your email
- WhatsApp: `https://wa.me/917903629240` → Your WhatsApp

## 🎨 Color Scheme

```css
Primary Blue:    #2563eb (blue-600)
Dark Blue:       #1e40af (blue-800)
Yellow Accent:   #fbbf24 (yellow-400)
Green (WhatsApp): #10b981 (green-500)
Gray Background: #f9fafb (gray-50)
```

## 📝 Booking Form Configuration

**File:** `src/app/pages/HomePage.tsx`

```typescript
// Google Form Integration
const formId = 'YOUR_FORM_ID';
const formUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

// Field Entry IDs (get from Google Form)
const formBody = new URLSearchParams({
  'entry.XXXXXX': formData.name,      // Name field
  'entry.XXXXXX': formData.phone,     // Phone field
  'entry.XXXXXX': formData.pickup,    // Pickup field
  'entry.XXXXXX': formData.drop,      // Drop field
  'entry.XXXXXX': formData.date,      // Date field
  'entry.XXXXXX': formData.time,      // Time field
});
```

## 🚗 Vehicle Management

**Add/Edit Vehicles:**

File: `src/app/pages/HomePage.tsx` and `src/app/pages/FleetPage.tsx`

```typescript
const vehicles = [
  {
    name: 'Vehicle Name',
    image: 'https://image-url.com',
    seats: '4+1',
    ac: true,
    luggage: '2-3 Bags',
    localRate: '₹10/km',
    outstationRate: '₹12/km',
    features: ['AC', 'Feature 2', 'Feature 3'],
  },
  // Add more vehicles...
];
```

## 🗺️ Routes & Pricing

**File:** `src/app/pages/HomePage.tsx` and `src/app/pages/OutstationPage.tsx`

```typescript
const routes = [
  { 
    from: 'Ranchi',
    to: 'Destination',
    distance: '100 km',
    duration: '2 hours',
    oneWay: '₹1,500',
    roundTrip: '₹2,800'
  },
  // Add more routes...
];
```

## 🏷️ SEO Meta Tags

**File:** `src/app/components/common/SEO.tsx`

```tsx
<Helmet>
  <title>Your Title - Ranchi Cab Service</title>
  <meta name="description" content="Your description here" />
  <meta name="keywords" content="keyword1, keyword2, keyword3" />
  <link rel="canonical" href="https://your-domain.com" />
</Helmet>
```

**Page-specific SEO:** Each page has its own Helmet configuration at the top of the component.

## 📍 Google Maps Update

**File:** `src/app/components/layout/Footer.tsx`

1. Go to [Google Maps](https://maps.google.com)
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe URL
5. Replace in Footer.tsx:

```tsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="250"
  // ...
/>
```

## 🎨 Customizing Styles

### Colors
**File:** Create `tailwind.config.js` (if needed)

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      }
    }
  }
}
```

### Fonts
**File:** `src/styles/fonts.css`

```css
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/your-font.woff2');
}
```

## 📱 Social Media Links

**File:** `src/app/components/layout/Footer.tsx`

```tsx
<a href="https://facebook.com/your-page">
  <Facebook className="w-5 h-5" />
</a>
<a href="https://twitter.com/your-handle">
  <Twitter className="w-5 h-5" />
</a>
<a href="https://instagram.com/your-profile">
  <Instagram className="w-5 h-5" />
</a>
```

## 🖼️ Image Optimization

**Recommended Services:**
- [TinyPNG](https://tinypng.com) - Compress images
- [Squoosh](https://squoosh.app) - Image optimization
- [Cloudinary](https://cloudinary.com) - Image CDN

**Best Practices:**
- Use WebP format
- Compress images before upload
- Use appropriate sizes
- Lazy load below-fold images

## 🔍 Analytics Setup

### Google Analytics

**File:** `public/index.html` or `src/main.tsx`

```html
<!-- Add to index.html before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📊 Performance Optimization

### Image Loading
```tsx
// Lazy load images
<img 
  loading="lazy" 
  src="image.jpg" 
  alt="Description"
/>
```

### Code Splitting
```tsx
// Lazy load components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
```

## 🛠️ Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf node_modules dist .vite
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
vite --port 3000
```

### Module Not Found
```bash
# Check imports use '@' alias
import Component from '@/app/components/Component'

# Not './../../../../'
```

## 📁 File Structure Quick Ref

```
src/
├── app/
│   ├── components/
│   │   ├── common/      → Reusable utilities
│   │   ├── layout/      → Header, Footer
│   │   └── ui/          → UI primitives
│   └── pages/           → Route pages
├── styles/              → Global styles
└── main.tsx            → Entry point
```

## 🔗 Important Links

- **Figma Design:** https://www.figma.com/design/DG1R5OIDP4e89TWbyEgUPj/
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Vite:** https://vitejs.dev
- **React Router:** https://reactrouter.com

## 💡 Pro Tips

1. **Use browser DevTools** - Inspect elements, check console
2. **Test mobile first** - Most users on mobile
3. **Optimize images** - Smaller = faster
4. **Use semantic HTML** - Better SEO and accessibility
5. **Keep components small** - Easier to maintain
6. **Comment complex code** - Future you will thank you
7. **Test before deploy** - Always test in production build
8. **Monitor analytics** - Know your users

## 🆘 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| White screen | Check console for errors |
| 404 on refresh | Configure routing redirects |
| Slow loading | Optimize images, enable CDN |
| Form not submitting | Check Google Form IDs |
| Mobile menu stuck | Clear browser cache |
| Build fails | Check TypeScript errors |

## 📞 Need Help?

- **Email:** rohittravels10@gmail.com
- **Phone:** +91 7903629240
- **Documentation:** Check README.md

---

**Pro Tip:** Bookmark this page for quick reference! 🔖

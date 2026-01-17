# 🚀 Deployment Guide - Ranchi Cab Service Website

This guide will walk you through deploying your Ranchi Cab Service website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] Updated all contact information (phone, email)
- [ ] Configured Google Forms IDs (if using)
- [ ] Updated Google Maps embed URL
- [ ] Tested all pages locally
- [ ] Optimized images
- [ ] Updated SEO meta tags
- [ ] Configured analytics (if needed)
- [ ] Set up custom domain (optional)

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel provides the best developer experience with instant deployments and automatic HTTPS.

#### Steps:

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

#### Alternative: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub, GitLab, or Bitbucket
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

**Build Settings for Vercel:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

### Option 2: Netlify

Netlify is another excellent choice with drag-and-drop deployment.

#### Steps:

1. **Install Netlify CLI** (optional)
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Initialize**
   ```bash
   netlify init
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

#### Alternative: Using Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Drag and drop the `dist` folder (after building)
4. Or connect your Git repository for automatic deployments

**Build Settings for Netlify:**
- Build Command: `npm run build`
- Publish Directory: `dist`

**netlify.toml Configuration:**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

#### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Select `gh-pages` branch
   - Save

---

### Option 4: AWS S3 + CloudFront

For enterprise-grade hosting with CDN.

#### Prerequisites:
- AWS Account
- AWS CLI installed and configured

#### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://ranchicabservice.com
   ```

3. **Enable Static Website Hosting**
   ```bash
   aws s3 website s3://ranchicabservice.com --index-document index.html --error-document index.html
   ```

4. **Upload Files**
   ```bash
   aws s3 sync dist/ s3://ranchicabservice.com --acl public-read
   ```

5. **Create CloudFront Distribution** (for CDN and HTTPS)
   - Go to CloudFront in AWS Console
   - Create new distribution
   - Set origin to your S3 bucket
   - Configure SSL certificate
   - Wait for deployment (15-20 minutes)

---

### Option 5: Firebase Hosting

Google's hosting with global CDN.

#### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login**
   ```bash
   firebase login
   ```

3. **Initialize**
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Set public directory to: `dist`
   - Configure as single-page app: Yes
   - Set up automatic builds: No

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

**firebase.json Configuration:**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

## 🔧 Build Configuration

### Standard Build Process

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview build locally (optional)
npx vite preview
```

### Environment-Specific Builds

Create `.env.production` file:
```env
VITE_PHONE_NUMBER=+917903629240
VITE_EMAIL=rohittravels10@gmail.com
VITE_GOOGLE_FORM_ID=your-form-id
```

Access in code:
```typescript
const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
```

---

## 🌍 Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as shown

### For Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

### DNS Configuration:

**For www subdomain:**
```
Type: CNAME
Name: www
Value: your-site.vercel.app (or netlify.app)
```

**For root domain:**
```
Type: A
Name: @
Value: [IP provided by hosting]
```

---

## 📊 Post-Deployment

### 1. Test Your Website

- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] All links work
- [ ] Mobile responsiveness
- [ ] WhatsApp integration works
- [ ] Call buttons work
- [ ] Google Maps loads

### 2. Set Up Analytics

**Google Analytics:**
1. Create GA4 property
2. Add tracking code to `index.html`

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 3. Set Up Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap (create one if needed)

### 4. Performance Optimization

**Lighthouse Audit:**
```bash
npm install -g lighthouse
lighthouse https://your-site.com --view
```

**Recommended Scores:**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

---

## 🔒 Security Headers

Add these headers to your hosting platform:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

**For Netlify (_headers file):**
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

**For Vercel (vercel.json):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

---

## 🚨 Troubleshooting

### Issue: 404 on page refresh

**Solution:** Configure routing redirects

For Vercel - create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

For Netlify - create `_redirects` file in `public/`:
```
/*    /index.html   200
```

### Issue: Build fails

**Common causes:**
- TypeScript errors
- Missing dependencies
- Environment variables not set

**Solution:**
```bash
# Check for errors
npm run build

# Clear cache
rm -rf node_modules dist
npm install
npm run build
```

### Issue: Slow performance

**Solutions:**
- Enable CDN
- Optimize images (use WebP)
- Enable compression (gzip/brotli)
- Use lazy loading
- Minimize bundle size

---

## 📝 Maintenance Checklist

### Weekly:
- [ ] Check analytics
- [ ] Monitor uptime
- [ ] Review form submissions

### Monthly:
- [ ] Update dependencies (`npm update`)
- [ ] Review performance
- [ ] Check SEO rankings
- [ ] Update content if needed

### Quarterly:
- [ ] Security audit
- [ ] Performance optimization
- [ ] Content refresh
- [ ] Feature updates

---

## 📞 Support

For deployment assistance:
- Email: rohittravels10@gmail.com
- Phone: +91 7903629240

---

## 🎉 Congratulations!

Your Ranchi Cab Service website is now live! 🚀

Remember to:
1. Share your website URL on social media
2. Add to Google My Business
3. Submit to local directories
4. Monitor analytics regularly
5. Keep content updated

**Happy Deploying! 🎊**

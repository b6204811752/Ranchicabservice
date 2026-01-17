# 🚖 Ranchi Cab Service Website

A modern, fully-responsive cab booking website built with React, TypeScript, Tailwind CSS, and Vite. This professional-grade website features smooth animations, SEO optimization, and a complete booking system for a taxi service in Ranchi, Jharkhand.

![Ranchi Cab Service](https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200)

## 🌟 Features

### Core Features
- ✅ **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- ✅ **Modern UI/UX** - Clean, professional design with smooth animations
- ✅ **SEO Optimized** - Complete meta tags, OpenGraph, and Schema.org markup
- ✅ **Fast Performance** - Built with Vite for lightning-fast loading
- ✅ **Type Safety** - Written in TypeScript for better code quality

### Page Components
- 🏠 **Home Page** - Hero slider, booking form, services showcase, fleet display, testimonials
- ℹ️ **About Page** - Company story, values, statistics
- 🚗 **Services Page** - Detailed service offerings
- 🛣️ **Outstation Taxi** - Popular routes, pricing, booking form
- 🏙️ **Local Taxi** - Hourly packages, city travel options
- ✈️ **Airport Transfer** - Airport taxi rates and features
- 💼 **Corporate Service** - Business transportation solutions
- 🚙 **Fleet Page** - Vehicle showcase with pricing
- 📍 **Cities Page** - Service coverage areas
- 📞 **Contact Page** - Contact form, location map
- 📄 **Privacy Policy** - Comprehensive privacy policy
- 📋 **Terms & Conditions** - Detailed terms of service
- ❌ **404 Page** - User-friendly error page

### Interactive Features
- 📱 **Floating Action Buttons** - WhatsApp and Call buttons always accessible
- ⬆️ **Scroll to Top** - Smooth scroll to top button
- 🎨 **Smooth Animations** - Motion animations using Framer Motion
- 🖼️ **Image Slider** - Hero section carousel with Slick Slider
- 📝 **Booking Forms** - Google Forms integration and WhatsApp booking
- 🗺️ **Google Maps** - Embedded location map in footer

### Technical Features
- ⚡ **Fast Development** - Vite for instant HMR
- 🎨 **Tailwind CSS** - Utility-first styling
- 🔒 **Type Safety** - Full TypeScript support
- 📱 **Mobile First** - Responsive from the ground up
- ♿ **Accessibility** - ARIA labels and semantic HTML
- 🔍 **SEO Ready** - React Helmet for dynamic meta tags

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm package manager

### Installation

1. **Clone or download the repository**
   ```bash
   cd "Ranchi Cab Service Website/Ranchicabservice"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

The development server will start at `http://localhost:5173` (or another port if 5173 is busy).

## 📁 Project Structure

```
Ranchicabservice/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── common/           # Reusable components
│   │   │   │   ├── FloatingButtons.tsx
│   │   │   │   ├── ScrollToTop.tsx
│   │   │   │   ├── ScrollToTopOnNavigation.tsx
│   │   │   │   ├── Loading.tsx
│   │   │   │   └── SEO.tsx
│   │   │   ├── layout/           # Layout components
│   │   │   │   ├── Header.tsx
│   │   │   │   └── Footer.tsx
│   │   │   └── ui/               # UI components library
│   │   ├── pages/                # Page components
│   │   │   ├── HomePage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   ├── ServicesPage.tsx
│   │   │   ├── OutstationPage.tsx
│   │   │   ├── LocalTaxiPage.tsx
│   │   │   ├── AirportPage.tsx
│   │   │   ├── CorporatePage.tsx
│   │   │   ├── FleetPage.tsx
│   │   │   ├── CitiesPage.tsx
│   │   │   ├── ContactPage.tsx
│   │   │   ├── PrivacyPage.tsx
│   │   │   ├── TermsPage.tsx
│   │   │   └── NotFoundPage.tsx
│   │   └── App.tsx               # Main app component
│   ├── styles/                   # Global styles
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   ├── fonts.css
│   │   └── theme.css
│   └── main.tsx                  # Application entry point
├── public/                       # Static assets
├── index.html                    # HTML template
├── package.json                  # Dependencies
├── vite.config.ts               # Vite configuration
├── postcss.config.mjs           # PostCSS configuration
└── README.md                     # This file
```

## 🎨 Tech Stack

### Frontend Framework
- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **React Router DOM 7.12.0** - Client-side routing

### Styling
- **Tailwind CSS 4.1.12** - Utility-first CSS
- **@tailwindcss/vite** - Tailwind Vite plugin
- **Motion (Framer Motion) 12.23.24** - Animations

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Slick** - Carousel/slider
- **Slick Carousel** - Carousel styles

### Forms & SEO
- **React Helmet Async** - SEO meta tags
- **React Hook Form** - Form handling

### Build Tools
- **Vite 6.3.5** - Build tool and dev server
- **@vitejs/plugin-react** - React plugin for Vite

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React and Tailwind CSS plugins. Path alias `@` is configured to point to the `src` directory.

### Environment Variables
No environment variables required for the basic setup. For production:
- Update contact phone numbers
- Update email addresses
- Update Google Forms IDs (if using)
- Update Google Maps embed URL

## 📱 Key Features Implementation

### 1. Booking System
The website integrates multiple booking methods:
- **Google Forms** - Primary booking form submission
- **WhatsApp Integration** - Fallback and direct messaging
- **Phone Calls** - Direct call buttons throughout

### 2. SEO Optimization
- Dynamic meta tags with React Helmet
- OpenGraph tags for social sharing
- Schema.org structured data for local business
- Semantic HTML structure
- Proper heading hierarchy

### 3. Performance
- Code splitting with React Router
- Lazy loading for images
- Optimized bundle size with Vite
- Tree-shaking unused code

### 4. Accessibility
- ARIA labels on interactive elements
- Semantic HTML5 elements
- Keyboard navigation support
- Focus management

## 🌐 Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Landing page with hero, booking form |
| `/about` | AboutPage | About company, values, stats |
| `/services` | ServicesPage | All services overview |
| `/outstation-taxi` | OutstationPage | Outstation cab service |
| `/local-taxi-ranchi` | LocalTaxiPage | Local taxi service |
| `/airport-taxi` | AirportPage | Airport transfer service |
| `/corporate-taxi` | CorporatePage | Corporate taxi service |
| `/fleet` | FleetPage | Vehicle fleet showcase |
| `/cities` | CitiesPage | Service coverage areas |
| `/contact` | ContactPage | Contact form and info |
| `/privacy-policy` | PrivacyPage | Privacy policy |
| `/terms-conditions` | TermsPage | Terms and conditions |
| `/*` | NotFoundPage | 404 error page |

## 📞 Contact Information

**Phone:** +91 7903629240  
**Email:** rohittravels10@gmail.com  
**Location:** Ranchi, Jharkhand, India

## 🎯 Customization Guide

### Update Contact Details
1. Search for `+917903629240` and replace with your number
2. Search for `rohittravels10@gmail.com` and replace with your email
3. Update Google Maps embed in `Footer.tsx`

### Update Branding
1. Update logo in `Header.tsx`
2. Change color scheme in Tailwind configuration
3. Update company name throughout the site

### Update Google Forms
1. Create your Google Form
2. Get form ID and field entry IDs
3. Update in `HomePage.tsx` booking form

### Add More Vehicles
Edit the `vehicles` array in:
- `HomePage.tsx`
- `FleetPage.tsx`

### Modify Routes/Pricing
Edit the `routes` array in:
- `HomePage.tsx`
- `OutstationPage.tsx`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist` folder, ready for deployment.

### Recommended Hosting
- **Vercel** - Best for instant deployment
- **Netlify** - Easy continuous deployment
- **GitHub Pages** - Free static hosting
- **AWS S3 + CloudFront** - Scalable hosting

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📊 Performance Tips

1. **Image Optimization** - Use WebP format for images
2. **Lazy Loading** - Implement lazy loading for below-fold images
3. **Code Splitting** - Already implemented via React Router
4. **CDN** - Use a CDN for static assets
5. **Caching** - Configure proper cache headers

## 🔒 Security Best Practices

1. **Form Validation** - Client and server-side validation
2. **HTTPS** - Always use HTTPS in production
3. **CSP Headers** - Configure Content Security Policy
4. **XSS Protection** - React handles this by default
5. **Rate Limiting** - Implement on booking endpoints

## 🐛 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Change port in vite.config.ts or kill the process
npx kill-port 5173
```

**Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build fails**
```bash
# Check TypeScript errors
npx tsc --noEmit
```

## 📝 License

This project is created for Ranchi Cab Service. All rights reserved.

## 🤝 Credits

- **Images:** Unsplash
- **Icons:** Lucide React
- **UI Components:** Radix UI
- **Design:** Figma Design File

## 📈 Future Enhancements

- [ ] User authentication and profiles
- [ ] Real-time cab tracking
- [ ] Online payment gateway integration
- [ ] Admin dashboard for bookings
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Ride history and receipts
- [ ] Driver rating system
- [ ] Push notifications
- [ ] Real-time pricing calculator

## 💡 Contributing

This is a private project. For suggestions or improvements, contact the development team.

---

**Built with ❤️ for Ranchi Cab Service**

*Last Updated: January 17, 2026*

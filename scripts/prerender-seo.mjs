/**
 * Pre-render SEO Meta Tags for Each Route
 * 
 * This script runs AFTER `vite build` and creates route-specific HTML files
 * with correct <title>, <meta description>, <link rel="canonical">, 
 * Open Graph, Twitter Card, and Schema.org markup baked into the static HTML.
 * 
 * This ensures Google can see page-specific SEO tags WITHOUT executing JavaScript.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const baseUrl = 'https://www.ranchicabservice.com';

// ─── Route SEO Configuration ────────────────────────────────────────────────
const routes = [
  {
    path: '/about',
    title: 'About Us - Ranchi Cab Service | Best Taxi Service Provider in Ranchi Since 2010',
    description: 'Learn about Ranchi Cab Service - Ranchi\'s most trusted taxi service provider. 10+ years experience, 500+ happy customers, verified drivers & 24/7 service. Book reliable cabs in Ranchi.',
    keywords: 'about ranchi cab service, ranchi taxi company, best cab service ranchi, trusted taxi ranchi, ranchi travels company, professional cab service ranchi',
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Ranchi Cab Service",
      "description": "Learn about Ranchi Cab Service - Ranchi's most trusted taxi service provider since 2010.",
      "url": `${baseUrl}/about`,
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Ranchi Cab Service",
        "telephone": "+917903629240",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ranchi",
          "addressRegion": "Jharkhand",
          "addressCountry": "IN"
        }
      }
    }
  },
  {
    path: '/services',
    title: 'Our Taxi Services in Ranchi | Local, Outstation, Airport & Corporate Cabs',
    description: 'Explore all taxi services by Ranchi Cab Service - Local taxi, outstation cabs, airport transfers, corporate taxi & wedding car rental. Affordable rates & 24/7 availability.',
    keywords: 'ranchi taxi services, cab services ranchi, local taxi ranchi, outstation cab ranchi, airport taxi ranchi, corporate taxi ranchi',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ranchi Cab Services",
      "description": "Complete range of taxi and cab services in Ranchi - Local, Outstation, Airport & Corporate.",
      "url": `${baseUrl}/services`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Ranchi Cab Service",
        "telephone": "+917903629240"
      },
      "areaServed": { "@type": "City", "name": "Ranchi" }
    }
  },
  {
    path: '/contact',
    title: 'Contact Ranchi Cab Service | Book Taxi Now | Call +91 7903629240',
    description: 'Contact Ranchi Cab Service for taxi booking. Call +91 7903629240 or WhatsApp for instant booking. 24/7 customer support. Get quotes for local, outstation & airport taxi.',
    keywords: 'contact ranchi cab service, ranchi taxi phone number, book cab ranchi, ranchi cab booking, taxi booking ranchi, cab service contact',
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Ranchi Cab Service",
      "description": "Get in touch with Ranchi Cab Service for taxi bookings and inquiries.",
      "url": `${baseUrl}/contact`,
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Ranchi Cab Service",
        "telephone": "+917903629240",
        "email": "rohittravels10@gmail.com"
      }
    }
  },
  {
    path: '/fleet',
    title: 'Our Fleet - Ranchi Cab Service | Dzire, Ertiga, Innova Crysta & Luxury Cars',
    description: 'View our well-maintained fleet of vehicles - Maruti Dzire, Ertiga, Toyota Innova Crysta, Audi & BMW. Choose the perfect car for your journey in Ranchi.',
    keywords: 'ranchi cab fleet, taxi vehicles ranchi, innova crysta ranchi, dzire cab ranchi, ertiga taxi ranchi, luxury car rental ranchi',
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Ranchi Cab Service Fleet",
      "description": "Our fleet of well-maintained vehicles for taxi service in Ranchi.",
      "url": `${baseUrl}/fleet`,
      "numberOfItems": 6,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Maruti Dzire" },
        { "@type": "ListItem", "position": 2, "name": "Hyundai Aura" },
        { "@type": "ListItem", "position": 3, "name": "Maruti Ertiga" },
        { "@type": "ListItem", "position": 4, "name": "Toyota Innova Crysta" },
        { "@type": "ListItem", "position": 5, "name": "Audi" },
        { "@type": "ListItem", "position": 6, "name": "BMW" }
      ]
    }
  },
  {
    path: '/cities',
    title: 'Cities We Serve | Ranchi Cab Service | Taxi to Patna, Kolkata, Jamshedpur & More',
    description: 'Ranchi Cab Service operates in major cities - Patna, Kolkata, Jamshedpur, Bokaro, Dhanbad, Hazaribagh & more. Book outstation taxi from Ranchi to any city.',
    keywords: 'ranchi to patna taxi, ranchi to kolkata cab, ranchi to jamshedpur taxi, cities served ranchi cab, outstation destinations ranchi',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Outstation Taxi from Ranchi",
      "description": "Taxi service from Ranchi to major cities in Jharkhand, Bihar and West Bengal.",
      "url": `${baseUrl}/cities`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [
        { "@type": "City", "name": "Patna" },
        { "@type": "City", "name": "Kolkata" },
        { "@type": "City", "name": "Jamshedpur" },
        { "@type": "City", "name": "Bokaro" },
        { "@type": "City", "name": "Dhanbad" }
      ]
    }
  },
  {
    path: '/airport-taxi',
    title: 'Ranchi Airport Taxi Service | 24/7 Airport Transfer & Pickup | Birsa Munda Airport Cab',
    description: 'Book reliable Ranchi airport taxi service for Birsa Munda Airport. 24/7 airport pickup and drop. Flight tracking, meet & greet service. Call +91 7903629240.',
    keywords: 'ranchi airport taxi, birsa munda airport cab, ranchi airport transfer, airport pickup ranchi, airport drop ranchi, ranchi airport cab service',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Ranchi Airport Taxi Service",
      "description": "24/7 airport pickup and drop service at Birsa Munda Airport, Ranchi. Punctual, reliable, and hassle-free airport transfers.",
      "url": `${baseUrl}/airport-taxi`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": { "@type": "City", "name": "Ranchi" },
      "serviceType": "Airport Taxi Transfer"
    }
  },
  {
    path: '/corporate-taxi',
    title: 'Corporate Taxi Service Ranchi | Business Travel & Employee Transport Solutions',
    description: 'Professional corporate taxi service in Ranchi. Employee transport, business travel, event transportation. Dedicated fleet with GST billing. Call +91 7903629240.',
    keywords: 'corporate taxi ranchi, business taxi ranchi, employee transport ranchi, corporate cab service, office cab ranchi, company taxi ranchi',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Corporate Taxi Service Ranchi",
      "description": "Professional corporate taxi and employee transportation solutions in Ranchi.",
      "url": `${baseUrl}/corporate-taxi`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": { "@type": "City", "name": "Ranchi" },
      "serviceType": "Corporate Transportation"
    }
  },
  {
    path: '/outstation-taxi',
    title: 'Outstation Taxi from Ranchi | Book One-Way & Round Trip Cabs | Best Rates',
    description: 'Book outstation taxi from Ranchi at best rates. One-way & round trip cabs to Patna, Kolkata, Jamshedpur, Bokaro, Dhanbad & more. AC vehicles, experienced drivers.',
    keywords: 'outstation taxi ranchi, outstation cab ranchi, ranchi to patna taxi, ranchi to kolkata cab, one way taxi ranchi, round trip cab ranchi',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Outstation Taxi from Ranchi",
      "description": "Comfortable outstation cab service from Ranchi to major cities. One-way and round trip available.",
      "url": `${baseUrl}/outstation-taxi`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [
        { "@type": "City", "name": "Patna" },
        { "@type": "City", "name": "Kolkata" },
        { "@type": "City", "name": "Jamshedpur" }
      ],
      "serviceType": "Outstation Taxi"
    }
  },
  {
    path: '/local-taxi-ranchi',
    title: 'Local Taxi Service in Ranchi | Hourly Rental & City Cab | Best Rates',
    description: 'Book affordable local taxi in Ranchi for city travel. Hourly rental packages, sightseeing tours, shopping trips & daily commute. Starting ₹10/km. Call +91 7903629240.',
    keywords: 'local taxi ranchi, city cab ranchi, hourly taxi ranchi, ranchi sightseeing cab, ranchi city tour taxi, auto taxi ranchi',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Local Taxi Service Ranchi",
      "description": "Affordable local cab service for city travel in Ranchi. Hourly rental packages available.",
      "url": `${baseUrl}/local-taxi-ranchi`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": { "@type": "City", "name": "Ranchi" },
      "serviceType": "Local Taxi"
    }
  },
  {
    path: '/ranchi-to-patna-cab',
    title: 'Ranchi to Patna Cab | Book One-Way & Round Trip Taxi | ₹3,500 Starting',
    description: 'Book Ranchi to Patna cab at best rates starting ₹3,500. One-way & round trip taxi. 320 km, 5-6 hrs drive. AC vehicles, experienced drivers. Call +91 7903629240.',
    keywords: 'ranchi to patna cab, ranchi to patna taxi, ranchi patna taxi fare, cab from ranchi to patna, taxi ranchi to patna',
    schema: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Ranchi to Patna Cab Service",
      "description": "Comfortable taxi service from Ranchi to Patna. 320 km journey with experienced drivers.",
      "url": `${baseUrl}/ranchi-to-patna-cab`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [{ "@type": "City", "name": "Ranchi" }, { "@type": "City", "name": "Patna" }]
    }
  },
  {
    path: '/ranchi-to-kolkata-taxi',
    title: 'Ranchi to Kolkata Taxi | Book Cab at Best Rates | ₹5,500 Starting',
    description: 'Book Ranchi to Kolkata taxi at best rates starting ₹5,500. One-way & round trip cab. 400 km, 6-7 hrs drive. AC vehicles, GPS tracking. Call +91 7903629240.',
    keywords: 'ranchi to kolkata taxi, ranchi to kolkata cab, ranchi kolkata taxi fare, cab from ranchi to kolkata',
    schema: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Ranchi to Kolkata Taxi Service",
      "description": "Reliable taxi service from Ranchi to Kolkata. 400 km comfortable journey.",
      "url": `${baseUrl}/ranchi-to-kolkata-taxi`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [{ "@type": "City", "name": "Ranchi" }, { "@type": "City", "name": "Kolkata" }]
    }
  },
  {
    path: '/ranchi-to-jamshedpur-cab',
    title: 'Ranchi to Jamshedpur Cab | Book Taxi at Best Rates | ₹2,200 Starting',
    description: 'Book Ranchi to Jamshedpur cab starting ₹2,200. One-way & round trip taxi. 130 km, 2.5-3 hrs drive. AC vehicles, professional drivers. Call +91 7903629240.',
    keywords: 'ranchi to jamshedpur cab, ranchi to jamshedpur taxi, ranchi jamshedpur taxi fare, cab from ranchi to jamshedpur',
    schema: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Ranchi to Jamshedpur Cab Service",
      "description": "Quick and comfortable taxi from Ranchi to Jamshedpur. 130 km journey.",
      "url": `${baseUrl}/ranchi-to-jamshedpur-cab`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [{ "@type": "City", "name": "Ranchi" }, { "@type": "City", "name": "Jamshedpur" }]
    }
  },
  {
    path: '/ranchi-to-bokaro-taxi',
    title: 'Ranchi to Bokaro Taxi | Book Cab at Best Rates | ₹2,000 Starting',
    description: 'Book Ranchi to Bokaro taxi starting ₹2,000. One-way & round trip cab. 110 km, 2-2.5 hrs drive. AC vehicles, experienced drivers. Call +91 7903629240.',
    keywords: 'ranchi to bokaro taxi, ranchi to bokaro cab, ranchi bokaro taxi fare, cab from ranchi to bokaro',
    schema: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Ranchi to Bokaro Taxi Service",
      "description": "Affordable taxi service from Ranchi to Bokaro Steel City. 110 km journey.",
      "url": `${baseUrl}/ranchi-to-bokaro-taxi`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [{ "@type": "City", "name": "Ranchi" }, { "@type": "City", "name": "Bokaro" }]
    }
  },
  {
    path: '/ranchi-to-dhanbad-cab',
    title: 'Ranchi to Dhanbad Cab | Book Taxi at Best Rates | ₹2,500 Starting',
    description: 'Book Ranchi to Dhanbad cab starting ₹2,500. One-way & round trip taxi. 170 km, 3-3.5 hrs drive. AC vehicles, GPS tracked. Call +91 7903629240.',
    keywords: 'ranchi to dhanbad cab, ranchi to dhanbad taxi, ranchi dhanbad taxi fare, cab from ranchi to dhanbad',
    schema: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Ranchi to Dhanbad Cab Service",
      "description": "Reliable taxi service from Ranchi to Dhanbad. 170 km comfortable journey.",
      "url": `${baseUrl}/ranchi-to-dhanbad-cab`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [{ "@type": "City", "name": "Ranchi" }, { "@type": "City", "name": "Dhanbad" }]
    }
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Ranchi Cab Service',
    description: 'Read the privacy policy of Ranchi Cab Service. Learn how we collect, use, and protect your personal information.',
    keywords: 'ranchi cab service privacy policy, taxi service privacy policy',
    robots: 'noindex, nofollow'
  },
  {
    path: '/terms-conditions',
    title: 'Terms & Conditions | Ranchi Cab Service',
    description: 'Read the terms and conditions of Ranchi Cab Service. Understand our booking policies, cancellation rules, and service terms.',
    keywords: 'ranchi cab service terms, taxi service terms and conditions',
    robots: 'noindex, nofollow'
  }
];

// ─── HTML Transformation ────────────────────────────────────────────────────

function injectSEO(html, route) {
  const canonicalUrl = `${baseUrl}${route.path}`;
  const ogImage = 'https://www.ranchicabservice.com/logo-1200x630.png';
  const robotsContent = route.robots || 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  
  let result = html;
  
  // Replace <title>
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`
  );
  
  // Replace meta description
  result = result.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${route.description}" />`
  );
  
  // Replace meta keywords
  result = result.replace(
    /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/,
    `<meta name="keywords" content="${route.keywords}" />`
  );
  
  // Replace meta robots
  result = result.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${robotsContent}" />`
  );
  
  // Replace canonical
  result = result.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );
  
  // Replace og:url
  result = result.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  
  // Replace og:title (add if not present, or inject before og:url)
  if (result.includes('property="og:title"')) {
    result = result.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${route.title}" />`
    );
  } else {
    result = result.replace(
      /<meta\s+property="og:url"/,
      `<meta property="og:title" content="${route.title}" />\n      <meta property="og:description" content="${route.description}" />\n      <meta property="og:url"`
    );
  }
  
  // Replace og:description (add if not present)
  if (result.includes('property="og:description"')) {
    result = result.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${route.description}" />`
    );
  }
  
  // Replace twitter:title
  result = result.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  
  // Replace twitter:description
  result = result.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${route.description}" />`
  );
  
  // Replace/inject Schema.org JSON-LD (replace the first one with route-specific)
  if (route.schema) {
    // Add a page-specific schema BEFORE the existing Organization schema
    const schemaTag = `<script type="application/ld+json">\n      ${JSON.stringify(route.schema, null, 2).replace(/\n/g, '\n      ')}\n      </script>\n      <script type="application/ld+json">`;
    result = result.replace(
      /<script type="application\/ld\+json">/,
      schemaTag
    );
  }
  
  return result;
}

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  const indexPath = join(distDir, 'index.html');
  
  if (!existsSync(indexPath)) {
    console.error('❌ dist/index.html not found! Run `vite build` first.');
    process.exit(1);
  }
  
  const baseHtml = readFileSync(indexPath, 'utf-8');
  let count = 0;
  
  console.log('🔍 Pre-rendering SEO meta tags for all routes...\n');
  
  for (const route of routes) {
    const routeDir = join(distDir, route.path);
    const routeHtml = join(routeDir, 'index.html');
    
    // Create directory
    mkdirSync(routeDir, { recursive: true });
    
    // Generate route-specific HTML
    const html = injectSEO(baseHtml, route);
    writeFileSync(routeHtml, html, 'utf-8');
    
    count++;
    console.log(`  ✅ ${route.path}/index.html → canonical: ${baseUrl}${route.path}`);
  }
  
  console.log(`\n🎉 Pre-rendered ${count} routes with SEO meta tags!`);
  console.log('   Google will now see correct canonical, title, and description WITHOUT JavaScript.\n');
}

main();

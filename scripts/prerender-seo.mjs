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
  // ─── HOMEPAGE ───
  {
    path: '/',
    title: 'Ranchi Cab Service | Car Rental in Ranchi | Taxi Hire 24x7 | Book Sedan, SUV, Innova',
    description: '\u2B50 Book Car Rental in Ranchi \u2713 Chauffeur Driven Cabs 24x7 \u2713 One Way & Round Trip \u2713 Airport Taxi \u2713 Local Hire \u2713 Sedan \u20B910/km \u2713 SUV \u20B914/km \u2713 Innova Crysta \u2713 Govt Verified Drivers \u2713 2000+ Routes. Call: 7903629240',
    keywords: 'car rental ranchi, car rental in ranchi, taxi service ranchi, taxi service in ranchi, cab service in ranchi, cab booking ranchi, ranchi taxi, ranchi cabs, ranchi cab, near me taxi service, near me cab service, 7 seater taxi service, chauffeur driven car rental ranchi, ranchi airport taxi, birsa munda airport taxi, outstation taxi ranchi, one way cab ranchi, one way taxi ranchi, round trip taxi ranchi, local taxi ranchi, ranchi local cab service, ranchi to patna cab, ranchi to kolkata taxi, ranchi to jamshedpur cab, ranchi to bokaro cab, ranchi to dhanbad taxi',
    ogTitle: 'Ranchi Cab Service | Book Best Taxi in Ranchi 24/7',
    ogDescription: "\u2B50 Ranchi's #1 Cab Service - Safe, Reliable & Affordable. Book Local Taxi, Outstation Cabs & Airport Transfer. Call +91 7903629240",
    twitterTitle: 'Ranchi Cab Service | Best Taxi in Ranchi 24/7',
    twitterDescription: 'Book Safe & Affordable Taxi in Ranchi. Local, Outstation, Airport & Corporate Cabs Available 24/7',
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.ranchicabservice.com/#business",
        "name": "Ranchi Cab Service",
        "alternateName": "Ranchi Taxi Service",
        "description": "Premier car rental and taxi service in Ranchi offering chauffeur-driven cabs for local trips, outstation journeys, airport transfers, and corporate transportation. Available 24x7 with verified drivers.",
        "url": "https://www.ranchicabservice.com",
        "telephone": "+917903629240",
        "email": "rohittravels10@gmail.com",
        "priceRange": "\u20B9\u20B9",
        "image": "https://www.ranchicabservice.com/logo-512x512.png",
        "logo": "https://www.ranchicabservice.com/logo-512x512.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ranchi",
          "addressLocality": "Ranchi",
          "addressRegion": "Jharkhand",
          "postalCode": "834001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "23.3441",
          "longitude": "85.3096"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "areaServed": [
          { "@type": "City", "name": "Ranchi", "containedIn": { "@type": "State", "name": "Jharkhand" } },
          { "@type": "City", "name": "Patna" },
          { "@type": "City", "name": "Kolkata" },
          { "@type": "City", "name": "Jamshedpur" },
          { "@type": "City", "name": "Bokaro" },
          { "@type": "City", "name": "Dhanbad" },
          { "@type": "City", "name": "Gaya" },
          { "@type": "City", "name": "Hazaribagh" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Taxi Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Local Taxi Service", "description": "Hourly car rental in Ranchi for local trips" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outstation Taxi Service", "description": "One way and round trip cab service from Ranchi" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airport Taxi Service", "description": "Birsa Munda Airport pickup and drop service" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Taxi Service", "description": "Monthly corporate car rental packages" } }
          ]
        },
        "sameAs": [
          "https://www.facebook.com/ranchicabservice",
          "https://www.instagram.com/ranchicabservice",
          "https://twitter.com/ranchicabservice"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ranchicabservice.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.ranchicabservice.com/services" },
          { "@type": "ListItem", "position": 3, "name": "Fleet", "item": "https://www.ranchicabservice.com/fleet" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How can I book a cab in Ranchi?",
            "acceptedAnswer": { "@type": "Answer", "text": "You can book a cab by calling +91 7903629240, sending a WhatsApp message, or using our online booking form. We provide instant confirmation and 24/7 booking service." }
          },
          {
            "@type": "Question",
            "name": "What are your taxi rates in Ranchi?",
            "acceptedAnswer": { "@type": "Answer", "text": "Our local taxi rates start from \u20B910/km for sedans and \u20B914/km for SUVs. Outstation rates are \u20B912/km for sedans and \u20B916/km for SUVs. We offer special packages for hourly rentals and airport transfers." }
          },
          {
            "@type": "Question",
            "name": "Do you provide outstation cab service from Ranchi?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide outstation cab service to all major cities including Patna (\u20B94,500), Kolkata (\u20B96,000), Jamshedpur (\u20B92,200), Bokaro, Dhanbad, and more. Both one-way and round trip options are available." }
          },
          {
            "@type": "Question",
            "name": "Are your drivers verified and experienced?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! All our drivers are government-verified, police-verified, and have extensive experience. They are professional, courteous, and well-trained in customer service and safe driving." }
          },
          {
            "@type": "Question",
            "name": "What types of vehicles do you have?",
            "acceptedAnswer": { "@type": "Answer", "text": "We have a wide range of vehicles including Maruti Dzire, Hyundai Aura, Maruti Ertiga, Toyota Innova Crysta, Audi, and BMW. All vehicles are well-maintained, clean, and air-conditioned." }
          },
          {
            "@type": "Question",
            "name": "Do you provide 24/7 taxi service?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, we are available 24 hours a day, 7 days a week, including all holidays. You can book a cab anytime for emergency travel, airport transfers, or outstation trips." }
          },
          {
            "@type": "Question",
            "name": "What is your cancellation policy?",
            "acceptedAnswer": { "@type": "Answer", "text": "Cancellations made 24 hours before the scheduled trip are free. Cancellations within 24 hours may incur a small charge. Please contact us for specific details." }
          },
          {
            "@type": "Question",
            "name": "Do you provide airport taxi service?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide reliable airport pickup and drop services for Ranchi airport (Birsa Munda Airport). We offer flight tracking, meet & greet service, and luggage assistance 24/7." }
          },
          {
            "@type": "Question",
            "name": "What payment methods do you accept?",
            "acceptedAnswer": { "@type": "Answer", "text": "We accept all major payment methods including cash, UPI, Google Pay, PhonePe, Paytm, credit/debit cards, and bank transfers. You can choose your preferred payment method at the time of booking." }
          },
          {
            "@type": "Question",
            "name": "Do you offer corporate taxi services?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide customized corporate taxi solutions including monthly packages, dedicated vehicles, professional drivers, and customized billing. Contact us for corporate inquiries and special rates." }
          }
        ]
      }
    ]
  },

  // ─── ABOUT ───
  {
    path: '/about',
    title: 'About Us - Ranchi Cab Service | Best Taxi Service Provider in Ranchi Since 2010',
    description: "Learn about Ranchi Cab Service - Ranchi's most trusted taxi service provider. 10+ years experience, 500+ happy customers, verified drivers & 24/7 service. Book reliable cabs in Ranchi.",
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
        "address": { "@type": "PostalAddress", "addressLocality": "Ranchi", "addressRegion": "Jharkhand", "addressCountry": "IN" }
      }
    }
  },

  // ─── SERVICES ───
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
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": { "@type": "City", "name": "Ranchi" }
    }
  },

  // ─── CONTACT ───
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

  // ─── FLEET ───
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

  // ─── CITIES ───
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

  // ─── AIRPORT TAXI ───
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

  // ─── CORPORATE TAXI ───
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

  // ─── OUTSTATION TAXI ───
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

  // ─── LOCAL TAXI ───
  {
    path: '/local-taxi-ranchi',
    title: 'Local Taxi Service in Ranchi | Hourly Rental & City Cab | Best Rates',
    description: 'Book affordable local taxi in Ranchi for city travel. Hourly rental packages, sightseeing tours, shopping trips & daily commute. Starting \u20B910/km. Call +91 7903629240.',
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

  // ─── ROUTE PAGES ───
  {
    path: '/ranchi-to-patna-cab',
    title: 'Ranchi to Patna Cab | Book One-Way & Round Trip Taxi | \u20B93,500 Starting',
    description: 'Book Ranchi to Patna cab at best rates starting \u20B93,500. One-way & round trip taxi. 320 km, 5-6 hrs drive. AC vehicles, experienced drivers. Call +91 7903629240.',
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
    title: 'Ranchi to Kolkata Taxi | Book Cab at Best Rates | \u20B95,500 Starting',
    description: 'Book Ranchi to Kolkata taxi at best rates starting \u20B95,500. One-way & round trip cab. 400 km, 6-7 hrs drive. AC vehicles, GPS tracking. Call +91 7903629240.',
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
    title: 'Ranchi to Jamshedpur Cab | Book Taxi at Best Rates | \u20B92,200 Starting',
    description: 'Book Ranchi to Jamshedpur cab starting \u20B92,200. One-way & round trip taxi. 130 km, 2.5-3 hrs drive. AC vehicles, professional drivers. Call +91 7903629240.',
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
    title: 'Ranchi to Bokaro Taxi | Book Cab at Best Rates | \u20B92,000 Starting',
    description: 'Book Ranchi to Bokaro taxi starting \u20B92,000. One-way & round trip cab. 110 km, 2-2.5 hrs drive. AC vehicles, experienced drivers. Call +91 7903629240.',
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
    title: 'Ranchi to Dhanbad Cab | Book Taxi at Best Rates | \u20B92,500 Starting',
    description: 'Book Ranchi to Dhanbad cab starting \u20B92,500. One-way & round trip taxi. 170 km, 3-3.5 hrs drive. AC vehicles, GPS tracked. Call +91 7903629240.',
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
    path: '/ranchi-to-deoghar-cab',
    title: 'Ranchi to Deoghar Cab | Baidyanath Dham Taxi \u20B94,000 | 24/7 Booking',
    description: 'Book Ranchi to Deoghar cab for Baidyanath Dham darshan. 250 km taxi with AC vehicles. One-way \u20B94,000, Round trip \u20B97,500. Call +91 7903629240!',
    keywords: 'ranchi to deoghar cab, ranchi to deoghar taxi, baidyanath dham taxi from ranchi, ranchi deoghar cab service, shravan mela cab',
    schema: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Ranchi to Deoghar Cab Service",
      "description": "Comfortable taxi for Baidyanath Dham pilgrimage from Ranchi. 250 km journey.",
      "url": `${baseUrl}/ranchi-to-deoghar-cab`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [{ "@type": "City", "name": "Ranchi" }, { "@type": "City", "name": "Deoghar" }]
    }
  },
  {
    path: '/ranchi-to-hazaribagh-cab',
    title: 'Ranchi to Hazaribagh Cab | Book Taxi at \u20B91,500 | 24/7 Service',
    description: 'Book Ranchi to Hazaribagh cab service. 90 km taxi with AC vehicles, experienced drivers. One-way \u20B91,500. Call +91 7903629240!',
    keywords: 'ranchi to hazaribagh cab, ranchi to hazaribagh taxi, ranchi hazaribagh cab service, hazaribagh wildlife sanctuary taxi',
    schema: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Ranchi to Hazaribagh Cab Service",
      "description": "Quick taxi service from Ranchi to Hazaribagh hill station. 90 km journey.",
      "url": `${baseUrl}/ranchi-to-hazaribagh-cab`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [{ "@type": "City", "name": "Ranchi" }, { "@type": "City", "name": "Hazaribagh" }]
    }
  },
  {
    path: '/ranchi-to-gaya-cab',
    title: 'Ranchi to Gaya Cab | Bodh Gaya Taxi \u20B94,500 | Pind Daan Taxi',
    description: 'Book Ranchi to Gaya cab for Bodh Gaya darshan & Pind Daan. 280 km taxi. One-way \u20B94,500, Round trip \u20B98,500. Call +91 7903629240!',
    keywords: 'ranchi to gaya cab, ranchi to gaya taxi, ranchi to bodh gaya cab, pind daan taxi from ranchi, gaya pilgrimage taxi',
    schema: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Ranchi to Gaya Cab Service",
      "description": "Pilgrimage taxi from Ranchi to Gaya and Bodh Gaya. 280 km journey.",
      "url": `${baseUrl}/ranchi-to-gaya-cab`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [{ "@type": "City", "name": "Ranchi" }, { "@type": "City", "name": "Gaya" }]
    }
  },
  {
    path: '/ranchi-to-varanasi-cab',
    title: 'Ranchi to Varanasi Cab | Kashi Taxi \u20B96,800 | 24/7 Booking',
    description: 'Book Ranchi to Varanasi cab for Kashi Vishwanath darshan. 420 km taxi with AC. One-way \u20B96,800. Call +91 7903629240!',
    keywords: 'ranchi to varanasi cab, ranchi to varanasi taxi, ranchi to kashi cab, kashi vishwanath taxi from ranchi, ganga aarti taxi',
    schema: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Ranchi to Varanasi Cab Service",
      "description": "Long distance taxi from Ranchi to Varanasi for Kashi pilgrimage. 420 km journey.",
      "url": `${baseUrl}/ranchi-to-varanasi-cab`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [{ "@type": "City", "name": "Ranchi" }, { "@type": "City", "name": "Varanasi" }]
    }
  },
  {
    path: '/ranchi-to-giridih-cab',
    title: 'Ranchi to Giridih Cab | Parasnath Taxi \u20B92,800 | 24/7 Service',
    description: 'Book Ranchi to Giridih cab for Parasnath Temple trek. 175 km taxi. One-way \u20B92,800. Call +91 7903629240!',
    keywords: 'ranchi to giridih cab, ranchi to giridih taxi, ranchi to parasnath cab, sammed shikharji taxi, parasnath temple taxi',
    schema: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Ranchi to Giridih Cab Service",
      "description": "Taxi for Jain pilgrimage to Parasnath/Sammed Shikharji from Ranchi. 175 km journey.",
      "url": `${baseUrl}/ranchi-to-giridih-cab`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [{ "@type": "City", "name": "Ranchi" }, { "@type": "City", "name": "Giridih" }]
    }
  },
  {
    path: '/ranchi-to-netarhat-cab',
    title: 'Ranchi to Netarhat Cab | Queen of Chotanagpur Taxi \u20B92,500',
    description: 'Book Ranchi to Netarhat cab to visit Queen of Chotanagpur. 155 km hill station taxi. Sunrise point tours. \u20B92,500. Call +91 7903629240!',
    keywords: 'ranchi to netarhat cab, ranchi to netarhat taxi, netarhat hill station taxi, queen of chotanagpur cab, netarhat sunrise point taxi',
    schema: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Ranchi to Netarhat Cab Service",
      "description": "Scenic taxi ride to Netarhat hill station from Ranchi. 155 km journey.",
      "url": `${baseUrl}/ranchi-to-netarhat-cab`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [{ "@type": "City", "name": "Ranchi" }, { "@type": "City", "name": "Netarhat" }]
    }
  },
  {
    path: '/ranchi-to-daltonganj-cab',
    title: 'Ranchi to Daltonganj Cab | Betla Safari Taxi \u20B93,000 | 24/7',
    description: 'Book Ranchi to Daltonganj cab for Betla National Park safari. 185 km taxi. One-way \u20B93,000. Call +91 7903629240!',
    keywords: 'ranchi to daltonganj cab, ranchi to daltonganj taxi, ranchi to betla cab, betla national park taxi, palamau tiger reserve cab',
    schema: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Ranchi to Daltonganj Cab Service",
      "description": "Taxi to Daltonganj and Betla National Park from Ranchi. 185 km journey.",
      "url": `${baseUrl}/ranchi-to-daltonganj-cab`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [{ "@type": "City", "name": "Ranchi" }, { "@type": "City", "name": "Daltonganj" }]
    }
  },
  {
    path: '/ranchi-to-dumka-cab',
    title: 'Ranchi to Dumka Cab | Santhal Taxi \u20B94,800 | 24/7 Service',
    description: 'Book Ranchi to Dumka cab service. 290 km taxi. Santhal Pargana headquarters. One-way \u20B94,800. Call +91 7903629240!',
    keywords: 'ranchi to dumka cab, ranchi to dumka taxi, ranchi dumka cab service, santhal pargana cab, maluti temple taxi',
    schema: {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Ranchi to Dumka Cab Service",
      "description": "Taxi to Dumka and Santhal Pargana from Ranchi. 290 km journey.",
      "url": `${baseUrl}/ranchi-to-dumka-cab`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [{ "@type": "City", "name": "Ranchi" }, { "@type": "City", "name": "Dumka" }]
    }
  },

  // ─── BLOG ───
  {
    path: '/blog',
    title: 'Travel Blog | Ranchi Cab Service | Road Trip Guides & Taxi Tips',
    description: 'Read travel guides for Ranchi, Jharkhand road trips, hill stations, pilgrimages. Expert tips from Ranchi\'s trusted cab service.',
    keywords: 'ranchi travel blog, jharkhand tourism guide, ranchi road trips, deoghar guide, netarhat travel, ranchi taxi tips',
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Ranchi Cab Service Travel Blog",
      "description": "Travel guides, road trip tips, and taxi information for Ranchi and Jharkhand.",
      "url": `${baseUrl}/blog`,
      "publisher": { "@type": "Organization", "name": "Ranchi Cab Service" }
    }
  },

  // ─── HIGH-VALUE SERVICE PAGES ───
  {
    path: '/tempo-traveller-ranchi',
    title: 'Tempo Traveller in Ranchi | 9,12,17,26 Seater Rental | ₹18/km',
    description: 'Book tempo traveller in Ranchi for group travel. 9, 12, 17, 26 seater AC tempo. Weddings, pilgrimages, corporate. From ₹18/km. Call +91 7903629240!',
    keywords: 'tempo traveller ranchi, tempo traveller hire ranchi, 12 seater tempo ranchi, 17 seater tempo ranchi, tempo traveller on rent ranchi, mini bus rental ranchi, tempo traveller for wedding ranchi, tempo traveller for pilgrimage, group travel ranchi',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tempo Traveller Rental Ranchi",
      "description": "Tempo traveller on rent in Ranchi. 9, 12, 17, 26 seater AC tempo for weddings, pilgrimages, corporate travel.",
      "url": `${baseUrl}/tempo-traveller-ranchi`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": { "@type": "City", "name": "Ranchi" },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "3500",
        "highPrice": "12000",
        "priceCurrency": "INR",
        "offerCount": "4"
      }
    }
  },
  {
    path: '/wedding-car-ranchi',
    title: 'Wedding Car Rental Ranchi | Audi, BMW, Innova | Decorated Cars',
    description: 'Book wedding car in Ranchi. Luxury Audi, BMW, Mercedes for Dulha. Innova, Ertiga for family. Decorated cars with driver. Call +91 7903629240!',
    keywords: 'wedding car ranchi, wedding car rental ranchi, marriage car ranchi, dulha car ranchi, audi for wedding ranchi, bmw for wedding ranchi, decorated wedding car, baraat car ranchi, wedding tempo traveller',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Wedding Car Rental Ranchi",
      "description": "Luxury and decorated wedding cars in Ranchi. Audi, BMW, Mercedes, Innova for weddings.",
      "url": `${baseUrl}/wedding-car-ranchi`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": { "@type": "City", "name": "Ranchi" },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "5000",
        "highPrice": "25000",
        "priceCurrency": "INR"
      }
    }
  },
  {
    path: '/cab-near-me-ranchi',
    title: 'Cab Near Me Ranchi | Book Taxi in 10 Minutes | 24/7 Service',
    description: 'Find cab near me in Ranchi. Quick taxi pickup from your location in 10 minutes. All areas covered - Ratu Road, Lalpur, Doranda, Kanke. Call +91 7903629240!',
    keywords: 'cab near me ranchi, taxi near me ranchi, cab booking near me, taxi booking near me, ranchi cab service near me, nearest taxi ranchi, local cab ranchi, auto near me ranchi',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Cab Near Me - Ranchi Taxi Service",
      "description": "Quick taxi pickup service across all Ranchi localities. Book cab near your location.",
      "url": `${baseUrl}/cab-near-me-ranchi`,
      "provider": { "@type": "LocalBusiness", "name": "Ranchi Cab Service", "telephone": "+917903629240" },
      "areaServed": [
        { "@type": "Place", "name": "Ratu Road, Ranchi" },
        { "@type": "Place", "name": "Lalpur, Ranchi" },
        { "@type": "Place", "name": "Doranda, Ranchi" },
        { "@type": "Place", "name": "Kanke, Ranchi" },
        { "@type": "Place", "name": "Bariatu, Ranchi" },
        { "@type": "Place", "name": "Main Road, Ranchi" }
      ]
    }
  },

  // ─── NOINDEX PAGES ───
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

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function injectSEO(html, route) {
  const canonicalUrl = route.path === '/' ? `${baseUrl}/` : `${baseUrl}${route.path}`;
  const robotsContent = route.robots || 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  const ogTitle = route.ogTitle || route.title;
  const ogDesc = route.ogDescription || route.description;
  const twTitle = route.twitterTitle || route.title;
  const twDesc = route.twitterDescription || route.description;
  
  let result = html;
  
  // Replace <title>
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`
  );
  
  // Replace meta description
  result = result.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(route.description)}" />`
  );
  
  // Replace meta keywords
  result = result.replace(
    /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/,
    `<meta name="keywords" content="${escapeHtml(route.keywords)}" />`
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
  
  // Replace/add og:title
  if (result.includes('property="og:title"')) {
    result = result.replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${escapeHtml(ogTitle)}" />`
    );
  } else {
    result = result.replace(
      /<meta\s+property="og:url"/,
      `<meta property="og:title" content="${escapeHtml(ogTitle)}" />\n      <meta property="og:description" content="${escapeHtml(ogDesc)}" />\n      <meta property="og:url"`
    );
  }
  
  // Replace/add og:description
  if (result.includes('property="og:description"')) {
    result = result.replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${escapeHtml(ogDesc)}" />`
    );
  }
  
  // Replace twitter:title
  result = result.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(twTitle)}" />`
  );
  
  // Replace twitter:description
  result = result.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(twDesc)}" />`
  );
  
  // Handle Schema.org JSON-LD
  if (route.schemas) {
    // Multiple schemas (homepage) — inject all BEFORE the existing Organization schema
    const schemaBlocks = route.schemas.map(s => 
      `<script type="application/ld+json">\n      ${JSON.stringify(s)}\n      </script>`
    ).join('\n      ');
    
    result = result.replace(
      /(<script type="application\/ld\+json">)/,
      `${schemaBlocks}\n      $1`
    );
  } else if (route.schema) {
    // Single schema (subpages) — inject BEFORE the existing Organization schema
    const schemaTag = `<script type="application/ld+json">\n      ${JSON.stringify(route.schema)}\n      </script>`;
    result = result.replace(
      /(<script type="application\/ld\+json">)/,
      `${schemaTag}\n      $1`
    );
  }
  
  return result;
}

// ─── Main ───────────────────────────────────────────────────────────────────

function main() {
  const indexPath = join(distDir, 'index.html');
  
  if (!existsSync(indexPath)) {
    console.error('\u274C dist/index.html not found! Run `vite build` first.');
    process.exit(1);
  }
  
  const baseHtml = readFileSync(indexPath, 'utf-8');
  let count = 0;
  
  console.log('\uD83D\uDD0D Pre-rendering SEO meta tags for all routes...\n');
  
  for (const route of routes) {
    // Generate route-specific HTML from original base template
    const html = injectSEO(baseHtml, route);
    
    if (route.path === '/') {
      // Homepage — update dist/index.html in place
      writeFileSync(indexPath, html, 'utf-8');
      count++;
      console.log(`  \u2705 / (homepage index.html updated) \u2192 canonical: ${baseUrl}/`);
      continue;
    }
    
    const routeDir = join(distDir, route.path);
    const routeHtml = join(routeDir, 'index.html');
    
    mkdirSync(routeDir, { recursive: true });
    writeFileSync(routeHtml, html, 'utf-8');
    
    count++;
    console.log(`  \u2705 ${route.path}/index.html \u2192 canonical: ${baseUrl}${route.path}`);
  }
  
  console.log(`\n\uD83C\uDF89 Pre-rendered ${count} routes with SEO meta tags!`);
  console.log('   Google will now see correct canonical, title, description & schemas WITHOUT JavaScript.\n');
}

main();

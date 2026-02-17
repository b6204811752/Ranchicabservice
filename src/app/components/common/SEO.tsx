import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  schema?: object;
  robots?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image = 'https://www.ranchicabservice.com/logo-512x512.png',
  type = 'website',
  schema,
  robots
}: SEOProps = {}) {
  const location = useLocation();
  const baseUrl = 'https://www.ranchicabservice.com';
  // Normalize canonical: strip trailing slash except for homepage
  const pathname = location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, '');
  const canonicalUrl = pathname === '/' ? `${baseUrl}/` : `${baseUrl}${pathname}`;
  
  const defaultTitle = 'Ranchi Cab Service | Taxi & Car Rental @ ₹10/km | 24/7 Booking ⭐5.0';
  const defaultDescription = '#1 Ranchi Cab Service & Taxi Booking 24/7 ⭐5.0 Rated - Local Taxi ₹10/km, Airport Cab ₹800, Ranchi to Patna ₹4500, Ranchi to Dhanbad ₹2400. Innova, Ertiga, Dzire. 10,000+ Rides. Verified Drivers. Free Cancellation. Call +91 7903629240!';
  const defaultKeywords = 'ranchi cab service, ranchi taxi, ranchi cab, taxi service ranchi, cab service ranchi, car rental ranchi, ranchi taxi service, cab booking ranchi, taxi booking ranchi, online cab booking ranchi, best cab service ranchi, best taxi service ranchi, cheap taxi ranchi, cheapest cab ranchi, affordable cab ranchi, ranchi to dhanbad cab, ranchi to patna cab, ranchi to kolkata taxi, ranchi to jamshedpur cab, ranchi to bokaro taxi, ranchi airport taxi, birsa munda airport taxi, airport cab ranchi, outstation taxi ranchi, local taxi ranchi, cab near me ranchi, taxi near me ranchi, car hire ranchi, 24 hour taxi ranchi, innova on rent ranchi, ertiga taxi ranchi, dzire cab ranchi, one way taxi ranchi, round trip cab ranchi, jharkhand taxi service, tempo traveller ranchi, wedding car ranchi, corporate cab ranchi, ranchi cab phone number, ranchi cab service contact number, ola uber alternative ranchi, cab service in ranchi jharkhand, ranchi gaadi kiraya, ranchi me taxi, ranchi cab rate, taxi fare ranchi, safe cab ranchi, reliable taxi ranchi, night taxi ranchi, ranchi station taxi, cab on rent ranchi, chauffeur driven car ranchi, ranchi sightseeing taxi, ranchi tour taxi';
  
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="robots" content={robots || "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Ranchi Cab Service" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Ranchi Cab Service - Best Taxi Service" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@RanchiCabService" />
      <meta name="twitter:creator" content="@RanchiCabService" />
      
      {/* Enhanced Schema.org JSON-LD */}
      {schema ? (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ) : (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${baseUrl}/#organization`,
                "name": "Ranchi Cab Service",
                "alternateName": "Ranchi Taxi Service",
                "url": baseUrl,
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.ranchicabservice.com/logo-512x512.png",
                  "width": 512,
                  "height": 512,
                  "caption": "Ranchi Cab Service Logo"
                },
                "image": {
                  "@type": "ImageObject",
                  "url": "https://www.ranchicabservice.com/logo-512x512.png",
                  "width": 512,
                  "height": 512
                },
                "sameAs": [
                  "https://maps.app.goo.gl/kHZc2RRdUo5TsbdU9",
                  "https://www.facebook.com/ranchicabservice",
                  "https://www.instagram.com/ranchicabservice",
                  "https://twitter.com/ranchicabs",
                  "https://www.linkedin.com/company/ranchicabservice",
                  "https://wa.me/917903629240"
                ]
              },
              {
                "@type": "LocalBusiness",
                "@id": `${baseUrl}/#business`,
                "name": "Ranchi Cab Service",
                "alternateName": ["Ranchi Taxi Service", "Ranchi Cab", "RCS Taxi"],
                "description": "Best cab and taxi service in Ranchi offering local taxi, outstation cabs, airport transfers and corporate taxi services 24/7. Verified drivers, clean AC vehicles, and affordable rates.",
                "url": baseUrl,
                "logo": "https://www.ranchicabservice.com/logo-512x512.png",
                "image": [
                  "https://www.ranchicabservice.com/logo-512x512.png",
                  "https://www.ranchicabservice.com/logo-1200x630.png"
                ],
                "telephone": "+917903629240",
                "email": "ranchicabservice2@gmail.com",
                "priceRange": "₹₹",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Birsa Chowk, Kathalkocha",
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
                  {
                    "@type": "City",
                    "name": "Ranchi"
                  },
                  {
                    "@type": "State",
                    "name": "Jharkhand"
                  },
                  {
                    "@type": "State",
                    "name": "Bihar"
                  },
                  {
                    "@type": "State",
                    "name": "West Bengal"
                  }
                ],
                "sameAs": [
                  "https://maps.app.goo.gl/kHZc2RRdUo5TsbdU9",
                  "https://www.facebook.com/ranchicabservice",
                  "https://www.instagram.com/ranchicabservice",
                  "https://twitter.com/ranchicabs",
                  "https://www.linkedin.com/company/ranchicabservice",
                  "https://wa.me/917903629240"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Taxi Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Local Taxi Service Ranchi",
                        "description": "Affordable local cab service for city travel in Ranchi"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Outstation Taxi from Ranchi",
                        "description": "Comfortable outstation cabs to Patna, Kolkata, Jamshedpur and more"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Airport Taxi Ranchi",
                        "description": "24/7 airport pickup and drop service for Ranchi airport"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Corporate Taxi Service",
                        "description": "Professional corporate transportation solutions"
                      }
                    }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5.0",
                  "reviewCount": "500",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Google Pay", "PhonePe", "Paytm"],
                "currenciesAccepted": "INR",
                "hasMap": "https://maps.app.goo.gl/kHZc2RRdUo5TsbdU9",
                "slogan": "Your Trusted Travel Partner in Ranchi",
                "foundingDate": "2010",
                "knowsAbout": ["Taxi Service", "Car Rental", "Airport Transfers", "Outstation Travel", "Corporate Transportation"],
                "makesOffer": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "24/7 Taxi Service",
                      "description": "Round-the-clock cab service in Ranchi"
                    },
                    "availability": "https://schema.org/InStock"
                  }
                ],
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+917903629240",
                    "contactType": "customer service",
                    "availableLanguage": ["English", "Hindi"],
                    "areaServed": "IN",
                    "contactOption": "TollFree",
                    "hoursAvailable": {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                      "opens": "00:00",
                      "closes": "23:59"
                    }
                  },
                  {
                    "@type": "ContactPoint",
                    "contactType": "customer support",
                    "telephone": "+917903629240",
                    "email": "ranchicabservice2@gmail.com",
                    "url": "https://wa.me/917903629240"
                  }
                ],
                "keywords": "ranchi cab service, taxi ranchi, cab booking ranchi, airport taxi ranchi, outstation taxi"
              },
              {
                "@type": "TaxiService",
                "name": "Ranchi Cab Service - Taxi Booking",
                "provider": {
                  "@id": `${baseUrl}/#business`
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Ranchi",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Jharkhand"
                  }
                },
                "serviceType": ["Local Taxi", "Outstation Cab", "Airport Transfer", "Corporate Taxi"],
                "availableChannel": {
                  "@type": "ServiceChannel",
                  "serviceUrl": baseUrl,
                  "servicePhone": "+917903629240",
                  "availableLanguage": ["English", "Hindi"]
                }
              },
              {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                "url": baseUrl,
                "name": "Ranchi Cab Service",
                "description": "Best Taxi Service in Ranchi - Book Local, Outstation, Airport & Corporate Cabs 24/7",
                "publisher": {
                  "@id": `${baseUrl}/#organization`
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": `${baseUrl}/?s={search_term_string}`,
                  "query-input": "required name=search_term_string"
                }
              }
            ]
          })}
        </script>
      )}
    </Helmet>
  );
}

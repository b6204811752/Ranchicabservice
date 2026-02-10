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
  image = 'https://www.ranchicabservice.com/logo-1200x630.png',
  type = 'website',
  schema,
  robots
}: SEOProps = {}) {
  const location = useLocation();
  const baseUrl = 'https://www.ranchicabservice.com';
  // Normalize canonical: strip trailing slash except for homepage
  const pathname = location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, '');
  const canonicalUrl = pathname === '/' ? `${baseUrl}/` : `${baseUrl}${pathname}`;
  
  const defaultTitle = 'Ranchi Cab Service - #1 Taxi Service in Ranchi | Book AC Cabs 24/7 @ ₹10/km';
  const defaultDescription = 'Ranchi Cab Service ⭐5.0 Rating - Book affordable taxis 24/7. Local cab ₹10/km, Outstation from ₹4500, Airport pickup ₹800. AC Sedan, Ertiga, Innova Crysta. 100% verified drivers. Free cancellation. Call +91 7903629240 for instant booking!';
  const defaultKeywords = 'ranchi cab service, ranci cab, cab in ranchi, ranchi taxi, taxi service in ranchi, ranchi taxi, cab booking ranchi, ranchi airport taxi, outstation taxi ranchi, local taxi ranchi, birsa munda airport taxi, ranchi to patna cab, ranchi to kolkata taxi, ranchi to jamshedpur cab, car rental ranchi, cab near me ranchi, taxi near me ranchi, cheap taxi ranchi, best cab service ranchi, 24 hour taxi ranchi, online cab booking ranchi, innova on rent ranchi, ertiga taxi ranchi, one way taxi ranchi, round trip cab ranchi, jharkhand taxi service, ranchi to bokaro cab, ranchi to dhanbad taxi, cab in doranda, taxi lalpur ranchi, kanke cab service, harmu taxi, bariatu cab, morabadi taxi service, hinoo cab booking, hec ranchi cab, mecon ranchi taxi, ranchi lake taxi, pahari mandir cab, tagore hill taxi, dassam falls cab, rock garden ranchi taxi, hundru falls cab service, ranchi station taxi, airport transfer ranchi, wedding car ranchi, corporate taxi ranchi, tempo traveller ranchi 12 seater, dzire cab ranchi, aura taxi ranchi, crysta on rent ranchi, chauffeur driven car ranchi, reliable taxi jharkhand, safe cab ranchi';
  
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
                "@type": "LocalBusiness",
                "@id": `${baseUrl}/#organization`,
                "name": "Ranchi Cab Service",
                "alternateName": "Ranchi Taxi Service",
                "description": "Best cab and taxi service in Ranchi offering local taxi, outstation cabs, airport transfers and corporate taxi services 24/7",
                "url": baseUrl,
                "telephone": "+917903629240",
                "email": "ranchicabservice2@gmail.com",
                "priceRange": "₹₹",
                "address": {
                  "@type": "PostalAddress",
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
                  "https://g.page/r/CdfnA1OiyAQkEAE",
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
                "hasMap": "https://www.google.com/maps/place/Ranchi,+Jharkhand",
                "slogan": "Your Trusted Travel Partner in Ranchi",
                "keywords": "ranchi cab service, taxi ranchi, cab booking ranchi, airport taxi ranchi, outstation taxi"
              },
              {
                "@type": "TaxiService",
                "name": "Ranchi Cab Service - Taxi Booking",
                "provider": {
                  "@id": `${baseUrl}/#organization`
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

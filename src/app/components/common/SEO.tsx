import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  schema?: object;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image = 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200',
  type = 'website',
  schema
}: SEOProps = {}) {
  const location = useLocation();
  const baseUrl = 'https://ranchicabservice.vercel.app';
  const canonicalUrl = `${baseUrl}${location.pathname}`;
  
  const defaultTitle = 'Ranchi Cab Service - Best Taxi Service in Ranchi | Book Now 24/7';
  const defaultDescription = 'Book reliable, safe & affordable taxi services in Ranchi. Local taxi, outstation cabs, airport transfers & corporate taxi. Available 24/7. Call +91 7903629240';
  const defaultKeywords = 'ranchi cab service, taxi service in ranchi, ranchi taxi, cab booking ranchi, ranchi airport taxi, outstation taxi ranchi, local taxi ranchi';
  
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
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
                "email": "rohittravels10@gmail.com",
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
                  "ratingValue": "4.8",
                  "reviewCount": "500",
                  "bestRating": "5",
                  "worstRating": "1"
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

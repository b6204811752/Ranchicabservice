import { Helmet } from 'react-helmet-async';

export default function SEO() {
  return (
    <Helmet>
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href="https://ranchicabservice.vercel.app" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Ranchi Cab Service - Best Taxi Service in Ranchi | Book Now 24/7" />
      <meta property="og:description" content="Book reliable, safe & affordable taxi services in Ranchi. Local taxi, outstation cabs, airport transfers & corporate taxi. Available 24/7. Call +91 7903629240" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ranchicabservice.vercel.app" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Ranchi Cab Service" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ranchi Cab Service - Best Taxi Service in Ranchi" />
      <meta name="twitter:description" content="Book reliable & affordable cab services 24/7. Local, outstation, airport & corporate taxi in Ranchi." />
      
      {/* Enhanced Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://ranchicabservice.vercel.app/#organization",
              "name": "Ranchi Cab Service",
              "alternateName": "Ranchi Taxi Service",
              "description": "Best cab and taxi service in Ranchi offering local taxi, outstation cabs, airport transfers and corporate taxi services 24/7",
              "url": "https://ranchicabservice.vercel.app",
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
              }
            },
            {
              "@type": "WebSite",
              "@id": "https://ranchicabservice.vercel.app/#website",
              "url": "https://ranchicabservice.vercel.app",
              "name": "Ranchi Cab Service",
              "description": "Best Taxi Service in Ranchi - Book Local, Outstation, Airport & Corporate Cabs 24/7",
              "publisher": {
                "@id": "https://ranchicabservice.vercel.app/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ranchicabservice.vercel.app/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
}

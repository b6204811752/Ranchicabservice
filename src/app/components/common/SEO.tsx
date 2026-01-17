import { Helmet } from 'react-helmet-async';

export default function SEO() {
  return (
    <Helmet>
      <title>Ranchi Cab Service - Best Taxi Service in Ranchi | 24/7 Available</title>
      <meta name="description" content="Ranchi Cab Service offers reliable, safe, and affordable taxi services in Ranchi, Jharkhand. Book outstation cabs, local taxis, airport transfers, and corporate taxi services. Available 24/7." />
      <meta name="keywords" content="Ranchi cab service, taxi service in Ranchi, cab booking Ranchi, Ranchi taxi service, outstation cab from Ranchi, Ranchi airport taxi, cab service in Jharkhand" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://ranchicabservice.com" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Ranchi Cab Service - Best Taxi Service in Ranchi" />
      <meta property="og:description" content="Book reliable and affordable cab services in Ranchi. Available 24/7 for local, outstation, airport, and corporate travel." />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Ranchi Cab Service",
          "description": "Best cab and taxi service in Ranchi",
          "url": "https://ranchicabservice.com",
          "telephone": "+917903629240",
          "email": "rohittravels10@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ranchi",
            "addressRegion": "Jharkhand",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "23.3441",
            "longitude": "85.3096"
          },
          "openingHours": "Mo-Su 00:00-23:59",
          "priceRange": "₹₹",
          "areaServed": ["Ranchi", "Jharkhand", "West Bengal", "Bihar"]
        })}
      </script>
    </Helmet>
  );
}

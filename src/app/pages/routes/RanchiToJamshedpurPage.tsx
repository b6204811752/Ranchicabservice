import RoutePageTemplate from './RoutePageTemplate';

export default function RanchiToJamshedpurPage() {
  return (
    <RoutePageTemplate
      route={{
        from: 'Ranchi',
        to: 'Jamshedpur',
        distance: '135 km',
        duration: '3-4 Hours',
        sedanOneWay: '₹2,200',
        sedanRoundTrip: '₹4,000',
        suvOneWay: '₹2,800',
        suvRoundTrip: '₹5,200',
        innovaOneWay: '₹3,500',
        innovaRoundTrip: '₹6,500',
        slug: 'ranchi-to-jamshedpur-cab',
        metaTitle: 'Ranchi to Jamshedpur Cab | Book Taxi at ₹2,200 | 24/7 Available',
        metaDescription: 'Book Ranchi to Jamshedpur cab service at best rates. 135 km one-way & round trip taxi available 24/7. Clean AC vehicles, verified drivers. Call +91 7903629240!',
        metaKeywords: 'ranchi to jamshedpur cab, ranchi to jamshedpur taxi, ranchi jamshedpur cab service, ranchi to jamshedpur car rental, ranchi jamshedpur taxi fare',
        aboutText: [
          'Looking for a reliable <strong>Ranchi to Jamshedpur cab service</strong>? Ranchi Cab Service offers the most comfortable and affordable taxi service from Ranchi to Jamshedpur. With experienced drivers and well-maintained AC vehicles, your 135 km journey is guaranteed to be smooth and safe.',
          'Jamshedpur, also known as the Steel City of India, is one of the most popular destinations from Ranchi. The journey takes approximately 3-4 hours via NH-33. Whether you\'re traveling for business to Tata Steel Plant or visiting Jubilee Park, our cab service ensures punctual pickup and comfortable travel.'
        ],
        stops: [
          'Ranchi - Starting Point',
          'Tamar - First Highway Stop',
          'Gamharia - Approaching Jamshedpur',
          'Jamshedpur - Destination (Tata Steel City)'
        ],
        faqs: [
          { question: 'What is the distance from Ranchi to Jamshedpur?', answer: 'The distance between Ranchi and Jamshedpur is approximately 135 kilometers via NH-33.' },
          { question: 'How much does a Ranchi to Jamshedpur cab cost?', answer: 'The fare starts from ₹2,200 for a sedan (one-way). Round trip and SUV options are also available.' },
          { question: 'How long does it take to reach Jamshedpur from Ranchi?', answer: 'It typically takes 3-4 hours depending on traffic and road conditions.' },
          { question: 'Is one-way taxi available from Ranchi to Jamshedpur?', answer: 'Yes, we offer both one-way and round trip taxi services from Ranchi to Jamshedpur.' }
        ]
      }}
    />
  );
}

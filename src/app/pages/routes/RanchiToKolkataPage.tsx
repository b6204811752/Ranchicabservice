import RoutePageTemplate from './RoutePageTemplate';

export default function RanchiToKolkataPage() {
  return (
    <RoutePageTemplate
      route={{
        from: 'Ranchi',
        to: 'Kolkata',
        distance: '425 km',
        duration: '8-9 Hours',
        sedanOneWay: '₹6,000',
        sedanRoundTrip: '₹11,500',
        suvOneWay: '₹7,200',
        suvRoundTrip: '₹13,800',
        innovaOneWay: '₹8,500',
        innovaRoundTrip: '₹16,000',
        slug: 'ranchi-to-kolkata-taxi',
        metaTitle: 'Ranchi to Kolkata Cab @ ₹6,000 | One-Way & Round Trip Taxi 24/7',
        metaDescription: '🚗 Book Ranchi to Kolkata cab @ ₹6,000 (425 km) ✓ One-Way & Round Trip ✓ AC Sedan, Ertiga, Innova ✓ Safe Highway Drivers ✓ Door-to-Door ✓ Free Cancellation. Call +91 7903629240!',
        metaKeywords: 'ranchi to kolkata cab, ranchi to kolkata taxi, ranchi to kolkata cab service, ranchi kolkata cab fare, ranchi to kolkata car rental, ranchi kolkata taxi fare, cab from ranchi to kolkata, kolkata to ranchi cab, kolkata to ranchi taxi, ranchi to kolkata one way cab, ranchi to kolkata round trip, ranchi to kolkata innova, ranchi to kolkata ertiga, ranchi to kolkata dzire, ranchi se kolkata gaadi, ranchi se kolkata taxi, ranchi to kolkata cab booking, ranchi to kolkata cab price, cheapest cab ranchi to kolkata, ranchi kolkata highway taxi, ranchi to howrah cab, ranchi to kolkata airport taxi, ranchi to kolkata cab phone number, best taxi ranchi to kolkata',
        aboutText: [
          'Looking for a reliable and comfortable <strong>Ranchi to Kolkata cab service</strong>? Ranchi Cab Service offers the best taxi service from Ranchi to Kolkata with professional drivers, clean AC vehicles, and transparent pricing. Whether you need a one-way taxi or round trip, we\'ve got you covered 24/7.',
          'The distance from Ranchi to Kolkata is approximately 425 kilometers, and the journey takes around 8-9 hours via NH-33 and NH-19. Our experienced drivers know the best routes including the Jamshedpur bypass to ensure a safe and comfortable journey through Jharkhand and West Bengal.'
        ],
        stops: [
          'Ranchi - Starting Point',
          'Jamshedpur - Major City Stop',
          'Dhanbad - Highway Restaurants Available',
          'Asansol - Rest Point',
          'Durgapur - Last Major Stop',
          'Kolkata - Destination'
        ],
        faqs: [
          { question: 'What is the distance from Ranchi to Kolkata?', answer: 'The distance between Ranchi and Kolkata is approximately 425 kilometers via NH-33 and NH-19.' },
          { question: 'How much does a Ranchi to Kolkata cab cost?', answer: 'The fare starts from ₹6,000 for a sedan (one-way). Round trip and larger vehicles are also available at competitive rates.' },
          { question: 'How long does it take to reach Kolkata from Ranchi by cab?', answer: 'It typically takes 8-9 hours depending on traffic and road conditions.' },
          { question: 'Can I book a one-way taxi from Ranchi to Kolkata?', answer: 'Yes, we provide both one-way and round trip taxi services from Ranchi to Kolkata at the best rates.' }
        ]
      }}
    />
  );
}

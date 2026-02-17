import RoutePageTemplate from './RoutePageTemplate';

export default function RanchiToPatnaPage() {
  return (
    <RoutePageTemplate
      route={{
        from: 'Ranchi',
        to: 'Patna',
        distance: '330 km',
        duration: '6-7 Hours',
        sedanOneWay: '₹4,500',
        sedanRoundTrip: '₹8,500',
        suvOneWay: '₹5,200',
        suvRoundTrip: '₹9,800',
        innovaOneWay: '₹6,000',
        innovaRoundTrip: '₹11,500',
        slug: 'ranchi-to-patna-cab',
        metaTitle: 'Ranchi to Patna Cab @ ₹4500 | Book Taxi 24/7 | One-Way & Round Trip',
        metaDescription: '🚗 Book Ranchi to Patna cab at ₹4500 (330 km). ✓ One-way & Round Trip ✓ AC Sedan, Ertiga, Innova ✓ Experienced Highway Drivers ✓ Door-to-Door Service ✓ 24/7 Available. Call +91 7903629240!',
        metaKeywords: 'ranchi to patna cab, ranchi to patna taxi, ranchi patna cab service, ranchi to patna car rental, ranchi patna taxi fare, cab from ranchi to patna, ranchi to patna one way cab, ranchi patna round trip taxi, ranchi to patna cab fare, ranchi to patna dzire cab, ranchi to patna ertiga, ranchi to patna innova, patna to ranchi taxi, patna ranchi cab booking, ranchi patna highway taxi, ranchi to patna cab price, cheapest cab ranchi to patna, ranchi to patna cab contact number, book taxi ranchi to patna online, ranchi patna cab 24 hours',
        aboutText: [
          'Looking for a reliable and comfortable <strong>Ranchi to Patna cab service</strong>? Ranchi Cab Service offers the best taxi service from Ranchi to Patna with professional drivers, clean AC vehicles, and transparent pricing. Whether you need a one-way taxi or round trip, we\'ve got you covered 24/7.',
          'The distance from Ranchi to Patna is approximately 330 kilometers, and the journey takes around 6-7 hours depending on traffic and road conditions. Our experienced drivers know the best routes to ensure a safe and comfortable journey.'
        ],
        stops: [
          'Ranchi - Starting Point',
          'Ramgarh - Highway Restaurants Available',
          'Hazaribagh - Midway Refreshment Stop',
          'Koderma - Last Major Stop',
          'Patna - Destination'
        ],
        faqs: [
          { question: 'What is the distance from Ranchi to Patna?', answer: 'The distance between Ranchi and Patna is approximately 330 kilometers via NH-33 and NH-2.' },
          { question: 'How much does a Ranchi to Patna cab cost?', answer: 'The fare starts from ₹4,500 for a sedan (one-way). Round trip and larger vehicles are also available.' },
          { question: 'How long does it take to reach Patna from Ranchi by cab?', answer: 'It typically takes 6-7 hours depending on traffic and road conditions.' },
          { question: 'Do you provide one-way taxi service?', answer: 'Yes, we provide both one-way and round trip taxi services from Ranchi to Patna.' }
        ]
      }}
    />
  );
}

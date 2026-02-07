import RoutePageTemplate from './RoutePageTemplate';

export default function RanchiToHazaribaghPage() {
  return (
    <RoutePageTemplate
      route={{
        from: 'Ranchi',
        to: 'Hazaribagh',
        distance: '90 km',
        duration: '2-2.5 Hours',
        sedanOneWay: '₹1,500',
        sedanRoundTrip: '₹2,800',
        suvOneWay: '₹2,100',
        suvRoundTrip: '₹3,900',
        innovaOneWay: '₹2,600',
        innovaRoundTrip: '₹4,800',
        slug: 'ranchi-to-hazaribagh-cab',
        metaTitle: 'Ranchi to Hazaribagh Cab | Book Taxi at ₹1,500 | 24/7',
        metaDescription: 'Book Ranchi to Hazaribagh cab service. 90 km taxi with AC vehicles, experienced drivers. One-way ₹1,500, Round trip ₹2,800. Call +91 7903629240!',
        metaKeywords: 'ranchi to hazaribagh cab, ranchi to hazaribagh taxi, ranchi hazaribagh cab service, hazaribagh taxi from ranchi, ranchi to hazaribagh car rental, hazaribagh cab booking, ranchi hazaribagh one way taxi',
        aboutText: [
          'Looking for a reliable <strong>Ranchi to Hazaribagh cab service</strong>? Ranchi Cab Service offers comfortable taxi service to Hazaribagh, one of the most beautiful hill stations in Jharkhand. Known for its pleasant climate and Hazaribagh Wildlife Sanctuary, it\'s a popular weekend getaway destination.',
          'The 90 km journey from Ranchi to Hazaribagh takes approximately 2-2.5 hours via NH-33. Our professional drivers ensure a safe and comfortable journey through the scenic route. We offer both one-way drops and round trip packages.',
          'Hazaribagh is famous for its <strong>Hazaribagh Wildlife Sanctuary</strong>, Canary Hill, and various temples. Book our cab service for sightseeing tours or business trips with flexible packages tailored to your needs.'
        ],
        stops: [
          'Ranchi - Starting Point',
          'Ramgarh Cantonment - Midway',
          'Hazaribagh - Destination'
        ],
        faqs: [
          { question: 'What is the distance from Ranchi to Hazaribagh?', answer: 'The distance between Ranchi and Hazaribagh is approximately 90 kilometers via NH-33.' },
          { question: 'How much does a Ranchi to Hazaribagh cab cost?', answer: 'The fare starts from ₹1,500 for a sedan (one-way). Round trip options start from ₹2,800.' },
          { question: 'How long does the Ranchi to Hazaribagh journey take?', answer: 'It typically takes 2-2.5 hours depending on traffic conditions.' },
          { question: 'Can I visit Hazaribagh Wildlife Sanctuary by cab?', answer: 'Yes, we offer sightseeing packages that include visits to Hazaribagh Wildlife Sanctuary and other attractions.' },
          { question: 'Is Hazaribagh good for a day trip from Ranchi?', answer: 'Yes, Hazaribagh is perfect for a day trip. Our round trip package with waiting time allows you to explore the town comfortably.' }
        ]
      }}
    />
  );
}

import RoutePageTemplate from './RoutePageTemplate';

export default function RanchiToDaltonganjPage() {
  return (
    <RoutePageTemplate
      route={{
        from: 'Ranchi',
        to: 'Daltonganj',
        distance: '185 km',
        duration: '4-5 Hours',
        sedanOneWay: '₹3,000',
        sedanRoundTrip: '₹5,600',
        suvOneWay: '₹4,000',
        suvRoundTrip: '₹7,600',
        innovaOneWay: '₹5,000',
        innovaRoundTrip: '₹9,500',
        slug: 'ranchi-to-daltonganj-cab',
        metaTitle: 'Ranchi to Daltonganj Cab | Betla Safari Taxi ₹3,000 | 24/7',
        metaDescription: 'Book Ranchi to Daltonganj cab for Betla National Park safari. 185 km taxi service. One-way ₹3,000, Round trip ₹5,600. Call +91 7903629240!',
        metaKeywords: 'ranchi to daltonganj cab, ranchi to daltonganj taxi, ranchi to betla cab, betla national park taxi, ranchi to palamau car rental, daltonganj taxi booking, betla tiger reserve cab',
        aboutText: [
          'Explore <strong>Betla National Park</strong> with our <strong>Ranchi to Daltonganj cab service</strong>. Daltonganj is the gateway to Palamau Tiger Reserve (Betla), one of the first tiger reserves in India under Project Tiger.',
          'The 185 km journey from Ranchi to Daltonganj takes approximately 4-5 hours. From Daltonganj, Betla National Park is just 25 km. Our drivers can arrange your safari permits and guide you through the wildlife sanctuary.',
          'Perfect for wildlife enthusiasts and nature lovers. Betla offers elephant safaris and jeep safaris to spot tigers, elephants, leopards, and various bird species. We offer <strong>weekend wildlife packages</strong> with stay options near the park.'
        ],
        stops: [
          'Ranchi - Starting Point',
          'Lohardaga - Refreshment Break',
          'Daltonganj - District HQ',
          'Betla - National Park Gate'
        ],
        faqs: [
          { question: 'What is the distance from Ranchi to Daltonganj?', answer: 'The distance between Ranchi and Daltonganj is approximately 185 kilometers.' },
          { question: 'How much does a Ranchi to Daltonganj cab cost?', answer: 'The fare starts from ₹3,000 for a sedan (one-way). Round trip starts from ₹5,600.' },
          { question: 'How far is Betla from Daltonganj?', answer: 'Betla National Park is about 25 km from Daltonganj town.' },
          { question: 'Can you help book Betla safari?', answer: 'Yes, we can guide you with safari timings and permit arrangements at Betla National Park.' },
          { question: 'What is the best time for Betla safari?', answer: 'November to April is the best time. The park is closed during monsoons (July to October).' },
          { question: 'Do you offer Betla weekend packages?', answer: 'Yes, we offer 2-day Betla wildlife packages including cab, safari timing assistance, and hotel suggestions.' }
        ]
      }}
    />
  );
}

import RoutePageTemplate from './RoutePageTemplate';

export default function RanchiToDumkaPage() {
  return (
    <RoutePageTemplate
      route={{
        from: 'Ranchi',
        to: 'Dumka',
        distance: '290 km',
        duration: '6-7 Hours',
        sedanOneWay: '₹4,800',
        sedanRoundTrip: '₹9,000',
        suvOneWay: '₹6,400',
        suvRoundTrip: '₹12,200',
        innovaOneWay: '₹7,800',
        innovaRoundTrip: '₹14,800',
        slug: 'ranchi-to-dumka-cab',
        metaTitle: 'Ranchi to Dumka Cab | Santhal Taxi ₹4,800 | 24/7 Service',
        metaDescription: 'Book Ranchi to Dumka cab service. 290 km one-way & round trip taxi. Santhal Pargana headquarters. One-way ₹4,800. Call +91 7903629240!',
        metaKeywords: 'ranchi to dumka cab, ranchi to dumka taxi, ranchi dumka cab service, dumka taxi from ranchi, ranchi to dumka car rental, santhal pargana cab, ranchi dumka one way taxi',
        aboutText: [
          'Travel to the heart of <strong>Santhal Pargana</strong> with our <strong>Ranchi to Dumka cab service</strong>. Dumka, the divisional headquarters of Santhal Pargana, is known for its rich tribal culture and the famous Maluti temples complex.',
          'The 290 km journey from Ranchi to Dumka takes approximately 6-7 hours via Giridih and Deoghar. Our comfortable AC vehicles and experienced drivers ensure a smooth journey through the scenic landscapes of East Jharkhand.',
          'Dumka is the cultural capital of Santhal community with the famous <strong>Maluti Temple complex</strong> (72 terracotta temples) nearby. Perfect for cultural enthusiasts and those exploring tribal Jharkhand.'
        ],
        stops: [
          'Ranchi - Starting Point',
          'Giridih - Refreshment Break',
          'Deoghar - Lunch Stop',
          'Dumka - Destination'
        ],
        faqs: [
          { question: 'What is the distance from Ranchi to Dumka?', answer: 'The distance between Ranchi and Dumka is approximately 290 kilometers via Giridih and Deoghar.' },
          { question: 'How much does a Ranchi to Dumka cab cost?', answer: 'The fare starts from ₹4,800 for a sedan (one-way). Round trip starts from ₹9,000.' },
          { question: 'How long does the Ranchi to Dumka journey take?', answer: 'It typically takes 6-7 hours depending on road and traffic conditions.' },
          { question: 'Can we visit Maluti temples during the trip?', answer: 'Yes, Maluti temples are about 55 km from Dumka. We can include it in your itinerary.' },
          { question: 'Is there an alternative route via Dhanbad?', answer: 'Yes, an alternative route via Dhanbad is possible but takes similar time. We recommend the Giridih route.' },
          { question: 'Do you offer multi-city packages?', answer: 'Yes, we offer Ranchi-Deoghar-Dumka combined packages for those wanting to explore multiple destinations.' }
        ]
      }}
    />
  );
}

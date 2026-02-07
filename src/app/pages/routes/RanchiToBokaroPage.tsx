import RoutePageTemplate from './RoutePageTemplate';

export default function RanchiToBokaroPage() {
  return (
    <RoutePageTemplate
      route={{
        from: 'Ranchi',
        to: 'Bokaro',
        distance: '110 km',
        duration: '2-3 Hours',
        sedanOneWay: '₹1,800',
        sedanRoundTrip: '₹3,300',
        suvOneWay: '₹2,400',
        suvRoundTrip: '₹4,500',
        innovaOneWay: '₹3,000',
        innovaRoundTrip: '₹5,600',
        slug: 'ranchi-to-bokaro-taxi',
        metaTitle: 'Ranchi to Bokaro Cab | Book Taxi at ₹1,800 | 24/7 Service',
        metaDescription: 'Book Ranchi to Bokaro cab service at best rates. 110 km one-way & round trip taxi available 24/7. AC vehicles, experienced drivers. Call +91 7903629240!',
        metaKeywords: 'ranchi to bokaro cab, ranchi to bokaro taxi, ranchi bokaro cab service, ranchi to bokaro car rental, ranchi bokaro taxi fare, cab from ranchi to bokaro',
        aboutText: [
          'Need a reliable <strong>Ranchi to Bokaro cab service</strong>? Ranchi Cab Service provides comfortable and affordable taxi service from Ranchi to Bokaro Steel City. Our well-maintained AC vehicles and professional drivers ensure a pleasant 110 km journey every time.',
          'Bokaro Steel City is an important industrial town in Jharkhand, home to Bokaro Steel Plant. The journey from Ranchi to Bokaro takes approximately 2-3 hours via NH-23. We offer both one-way and round trip options with transparent pricing and no hidden charges.'
        ],
        stops: [
          'Ranchi - Starting Point',
          'Ramgarh - Midway Refreshment Stop',
          'Bokaro Steel City - Destination'
        ],
        faqs: [
          { question: 'What is the distance from Ranchi to Bokaro?', answer: 'The distance between Ranchi and Bokaro is approximately 110 kilometers via NH-23.' },
          { question: 'How much does a Ranchi to Bokaro cab cost?', answer: 'The fare starts from ₹1,800 for a sedan (one-way). Round trip options start from ₹3,300.' },
          { question: 'How long does the Ranchi to Bokaro journey take?', answer: 'It typically takes 2-3 hours depending on traffic and road conditions.' },
          { question: 'Do you provide round trip taxi from Ranchi to Bokaro?', answer: 'Yes, we offer both one-way and round trip taxi services from Ranchi to Bokaro at competitive rates.' }
        ]
      }}
    />
  );
}

import RoutePageTemplate from './RoutePageTemplate';

export default function RanchiToDhanbadPage() {
  return (
    <RoutePageTemplate
      route={{
        from: 'Ranchi',
        to: 'Dhanbad',
        distance: '150 km',
        duration: '3-4 Hours',
        sedanOneWay: '₹2,400',
        sedanRoundTrip: '₹4,500',
        suvOneWay: '₹3,000',
        suvRoundTrip: '₹5,600',
        innovaOneWay: '₹3,800',
        innovaRoundTrip: '₹7,000',
        slug: 'ranchi-to-dhanbad-cab',
        metaTitle: 'Ranchi to Dhanbad Cab | Book Taxi at ₹2,400 | 24/7 Available',
        metaDescription: 'Book Ranchi to Dhanbad cab service at best rates. 150 km one-way & round trip taxi available 24/7. Safe AC vehicles, verified drivers. Call +91 7903629240!',
        metaKeywords: 'ranchi to dhanbad cab, ranchi to dhanbad taxi, ranchi dhanbad cab service, ranchi to dhanbad car rental, ranchi dhanbad taxi fare, cab from ranchi to dhanbad',
        aboutText: [
          'Looking for a comfortable <strong>Ranchi to Dhanbad cab service</strong>? Ranchi Cab Service offers reliable taxi service from Ranchi to Dhanbad, the Coal Capital of India. Enjoy a smooth 150 km journey in our clean AC vehicles driven by experienced professionals.',
          'Dhanbad is known as the Coal Capital of India and is an important industrial city in Jharkhand. The journey from Ranchi to Dhanbad takes approximately 3-4 hours via NH-23 through Bokaro. Our drivers are well-versed with the route and ensure safe, comfortable travel.'
        ],
        stops: [
          'Ranchi - Starting Point',
          'Ramgarh - First Major Stop',
          'Bokaro - Midway Rest Point',
          'Dhanbad - Destination (Coal Capital)'
        ],
        faqs: [
          { question: 'What is the distance from Ranchi to Dhanbad?', answer: 'The distance between Ranchi and Dhanbad is approximately 150 kilometers via NH-23 through Bokaro.' },
          { question: 'How much does a Ranchi to Dhanbad cab cost?', answer: 'The fare starts from ₹2,400 for a sedan (one-way). Round trip fares start from ₹4,500.' },
          { question: 'How long does the Ranchi to Dhanbad journey take?', answer: 'The journey typically takes 3-4 hours depending on traffic and road conditions.' },
          { question: 'Can I book a one-way cab from Ranchi to Dhanbad?', answer: 'Yes, we offer both one-way and round trip taxi services from Ranchi to Dhanbad with best-in-class rates.' }
        ]
      }}
    />
  );
}

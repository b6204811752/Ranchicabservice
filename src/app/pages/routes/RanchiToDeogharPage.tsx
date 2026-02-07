import RoutePageTemplate from './RoutePageTemplate';

export default function RanchiToDeogharPage() {
  return (
    <RoutePageTemplate
      route={{
        from: 'Ranchi',
        to: 'Deoghar',
        distance: '250 km',
        duration: '5-6 Hours',
        sedanOneWay: '₹4,000',
        sedanRoundTrip: '₹7,500',
        suvOneWay: '₹5,500',
        suvRoundTrip: '₹10,500',
        innovaOneWay: '₹6,500',
        innovaRoundTrip: '₹12,000',
        slug: 'ranchi-to-deoghar-cab',
        metaTitle: 'Ranchi to Deoghar Cab | Baidyanath Dham Taxi ₹4,000 | 24/7',
        metaDescription: 'Book Ranchi to Deoghar cab for Baidyanath Dham darshan. 250 km taxi service with AC vehicles. One-way ₹4,000, Round trip ₹7,500. Call +91 7903629240!',
        metaKeywords: 'ranchi to deoghar cab, ranchi to deoghar taxi, ranchi deoghar cab service, baidyanath dham taxi from ranchi, ranchi to deoghar car rental, deoghar taxi booking, ranchi deoghar one way cab, ranchi to baba baidyanath cab',
        aboutText: [
          'Planning a pilgrimage to <strong>Baidyanath Dham</strong>? Our <strong>Ranchi to Deoghar cab service</strong> offers comfortable and reliable transportation for your spiritual journey. Deoghar, home to one of the 12 Jyotirlingas, attracts millions of devotees annually, especially during Shravan month.',
          'The 250 km journey from Ranchi to Deoghar takes approximately 5-6 hours via NH-33 and NH-114. Our experienced drivers are familiar with the route and can help you with darshan timings. We offer both one-way drops and round trip packages with waiting time included for temple visits.',
          'Book our <strong>Baidyanath Dham taxi service</strong> for a hassle-free pilgrimage experience. Our vehicles are well-maintained with AC, and drivers respect your religious sentiments. Special packages available for Shravan Mela and Mahashivratri.'
        ],
        stops: [
          'Ranchi - Starting Point',
          'Ramgarh - Refreshment Break',
          'Giridih - Midway Stop',
          'Deoghar - Baidyanath Dham Temple'
        ],
        faqs: [
          { question: 'What is the distance from Ranchi to Deoghar?', answer: 'The distance between Ranchi and Deoghar is approximately 250 kilometers via NH-33 and NH-114.' },
          { question: 'How much does a Ranchi to Deoghar cab cost?', answer: 'The fare starts from ₹4,000 for a sedan (one-way). Round trip with waiting time starts from ₹7,500.' },
          { question: 'How long does the Ranchi to Deoghar journey take?', answer: 'It typically takes 5-6 hours depending on traffic and road conditions.' },
          { question: 'Do you provide waiting time at Baidyanath Dham temple?', answer: 'Yes, our round trip packages include 4-6 hours waiting time for darshan at the temple.' },
          { question: 'Is early morning pickup available for Deoghar trip?', answer: 'Yes, we offer 24/7 pickup. Early morning departures (4-5 AM) are recommended for comfortable darshan.' },
          { question: 'Can I book a cab during Shravan Mela?', answer: 'Yes, we provide special Shravan Mela packages. Book in advance as demand is high during this period.' }
        ]
      }}
    />
  );
}

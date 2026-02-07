import RoutePageTemplate from './RoutePageTemplate';

export default function RanchiToGayaPage() {
  return (
    <RoutePageTemplate
      route={{
        from: 'Ranchi',
        to: 'Gaya',
        distance: '280 km',
        duration: '5-6 Hours',
        sedanOneWay: '₹4,500',
        sedanRoundTrip: '₹8,500',
        suvOneWay: '₹6,000',
        suvRoundTrip: '₹11,500',
        innovaOneWay: '₹7,200',
        innovaRoundTrip: '₹13,500',
        slug: 'ranchi-to-gaya-cab',
        metaTitle: 'Ranchi to Gaya Cab | Bodh Gaya Taxi ₹4,500 | Pind Daan Taxi',
        metaDescription: 'Book Ranchi to Gaya cab for Bodh Gaya darshan & Pind Daan. 280 km taxi service. One-way ₹4,500, Round trip ₹8,500. Call +91 7903629240!',
        metaKeywords: 'ranchi to gaya cab, ranchi to gaya taxi, ranchi to bodh gaya cab, pind daan taxi from ranchi, ranchi to gaya car rental, bodh gaya taxi booking, ranchi gaya one way cab, gaya pilgrimage taxi',
        aboutText: [
          'Planning a pilgrimage to <strong>Bodh Gaya</strong> or <strong>Pind Daan ceremony</strong>? Our <strong>Ranchi to Gaya cab service</strong> provides reliable and comfortable transportation for your spiritual journey. Gaya is one of the most sacred pilgrimage sites in India, where Lord Buddha attained enlightenment.',
          'The 280 km journey from Ranchi to Gaya takes approximately 5-6 hours via NH-33 and NH-83. Our experienced drivers help you navigate the pilgrimage sites including Mahabodhi Temple, Vishnupad Temple, and Phalgu River for Pind Daan rituals.',
          'We offer special packages for <strong>Pind Daan ceremonies</strong> with multiple day bookings available. Our drivers are familiar with local pandas and can assist with temple visits. Book our Bodh Gaya taxi service for a spiritually fulfilling experience.'
        ],
        stops: [
          'Ranchi - Starting Point',
          'Hazaribagh - Refreshment Break',
          'Gaya Junction - Drop Point',
          'Bodh Gaya - Mahabodhi Temple'
        ],
        faqs: [
          { question: 'What is the distance from Ranchi to Gaya?', answer: 'The distance between Ranchi and Gaya is approximately 280 kilometers via NH-33 and NH-83.' },
          { question: 'How much does a Ranchi to Gaya cab cost?', answer: 'The fare starts from ₹4,500 for a sedan (one-way). Round trip with waiting time starts from ₹8,500.' },
          { question: 'How long does the Ranchi to Gaya journey take?', answer: 'It typically takes 5-6 hours depending on traffic and road conditions.' },
          { question: 'Do you provide cab for Pind Daan ceremony?', answer: 'Yes, we offer special multi-day packages for Pind Daan ceremony at Gaya and Bodh Gaya with waiting time and local sightseeing.' },
          { question: 'Can you take us to Bodh Gaya from Gaya?', answer: 'Yes, Bodh Gaya is 17 km from Gaya. Our packages include visits to both Gaya and Bodh Gaya.' },
          { question: 'Is Vishnupad Temple visit included?', answer: 'Our round trip packages include visits to Vishnupad Temple, Mahabodhi Temple, and other pilgrimage sites.' }
        ]
      }}
    />
  );
}

import RoutePageTemplate from './RoutePageTemplate';

export default function RanchiToVaranasiPage() {
  return (
    <RoutePageTemplate
      route={{
        from: 'Ranchi',
        to: 'Varanasi',
        distance: '420 km',
        duration: '8-9 Hours',
        sedanOneWay: '₹6,800',
        sedanRoundTrip: '₹13,000',
        suvOneWay: '₹9,000',
        suvRoundTrip: '₹17,500',
        innovaOneWay: '₹11,000',
        innovaRoundTrip: '₹21,000',
        slug: 'ranchi-to-varanasi-cab',
        metaTitle: 'Ranchi to Varanasi Cab | Kashi Taxi ₹6,800 | 24/7 Booking',
        metaDescription: 'Book Ranchi to Varanasi cab for Kashi Vishwanath darshan. 420 km taxi service with AC vehicles. One-way ₹6,800. Call +91 7903629240!',
        metaKeywords: 'ranchi to varanasi cab, ranchi to varanasi taxi, ranchi to kashi cab, kashi vishwanath taxi from ranchi, ranchi to banaras car rental, varanasi taxi booking, ranchi varanasi one way cab, ganga aarti taxi',
        aboutText: [
          'Experience the spiritual capital of India with our <strong>Ranchi to Varanasi cab service</strong>. Varanasi (Kashi/Banaras), one of the oldest living cities in the world, is the ultimate pilgrimage destination for Hindus. Witness the mesmerizing Ganga Aarti and seek blessings at Kashi Vishwanath Temple.',
          'The 420 km journey from Ranchi to Varanasi takes approximately 8-9 hours via NH-33 and NH-2. Our comfortable AC vehicles and experienced drivers ensure a smooth journey. We recommend starting early morning for a comfortable trip.',
          'Our <strong>Kashi pilgrimage packages</strong> include visits to Kashi Vishwanath Temple, Ganga Ghats, Sarnath (where Buddha gave his first sermon), and other sacred sites. Book multi-day packages for a complete spiritual experience.'
        ],
        stops: [
          'Ranchi - Starting Point',
          'Hazaribagh - Breakfast Stop',
          'Gaya - Lunch Break',
          'Varanasi - Kashi Vishwanath Temple'
        ],
        faqs: [
          { question: 'What is the distance from Ranchi to Varanasi?', answer: 'The distance between Ranchi and Varanasi is approximately 420 kilometers via NH-33 and NH-2.' },
          { question: 'How much does a Ranchi to Varanasi cab cost?', answer: 'The fare starts from ₹6,800 for a sedan (one-way). Round trip packages start from ₹13,000.' },
          { question: 'How long does the Ranchi to Varanasi journey take?', answer: 'It typically takes 8-9 hours depending on traffic and road conditions.' },
          { question: 'Do you offer multi-day Varanasi packages?', answer: 'Yes, we offer 2-day and 3-day Varanasi pilgrimage packages including hotel recommendations and local sightseeing.' },
          { question: 'Can you take us to Sarnath from Varanasi?', answer: 'Yes, Sarnath is 10 km from Varanasi. Our packages include visits to Sarnath Buddhist sites.' },
          { question: 'Is night driving available for Varanasi?', answer: 'Yes, we have experienced drivers for night journeys. However, we recommend day travel for safety and sightseeing.' }
        ]
      }}
    />
  );
}

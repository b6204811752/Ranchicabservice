import RoutePageTemplate from './RoutePageTemplate';

export default function RanchiToGiridihPage() {
  return (
    <RoutePageTemplate
      route={{
        from: 'Ranchi',
        to: 'Giridih',
        distance: '175 km',
        duration: '4-4.5 Hours',
        sedanOneWay: '₹2,800',
        sedanRoundTrip: '₹5,200',
        suvOneWay: '₹3,800',
        suvRoundTrip: '₹7,200',
        innovaOneWay: '₹4,500',
        innovaRoundTrip: '₹8,500',
        slug: 'ranchi-to-giridih-cab',
        metaTitle: 'Ranchi to Giridih Cab @ ₹2,800 | Parasnath & Sammed Shikharji Taxi',
        metaDescription: '🙏 Book Ranchi to Giridih cab @ ₹2,800 for Parasnath Temple & Sammed Shikharji ✓ 175 km ✓ AC Sedan, Ertiga, Innova ✓ Trek Base Drop. Call +91 7903629240!',
        metaKeywords: 'ranchi to giridih cab, ranchi to giridih taxi, ranchi to giridih cab service, ranchi giridih taxi fare, ranchi to parasnath cab, ranchi to parasnath taxi, parasnath temple taxi from ranchi, ranchi to giridih car rental, giridih taxi booking, ranchi giridih one way cab, sammed shikharji taxi, giridih to ranchi cab, giridih to ranchi taxi, ranchi to giridih round trip, ranchi se giridih gaadi, ranchi to madhuban cab, ranchi to parasnath hill cab, ranchi to giridih cab booking, ranchi to giridih cab price, cheapest cab ranchi to giridih, jain tirth yatra taxi ranchi, ranchi to giridih cab phone number',
        aboutText: [
          'Planning a trip to <strong>Parasnath Hill</strong> or <strong>Sammed Shikharji</strong>? Our <strong>Ranchi to Giridih cab service</strong> provides reliable transportation to one of the holiest Jain pilgrimage sites in India. Parasnath Peak (1,365m) is the highest point in Jharkhand and home to 24 Jain temples.',
          'The 175 km journey from Ranchi to Giridih takes approximately 4-4.5 hours. From Giridih, the Parasnath temple trek base is about 25 km. Our drivers are familiar with the route and can drop you at Madhuban for the trek.',
          'We offer special <strong>Parasnath pilgrimage packages</strong> with flexible waiting times for the trek (typically 6-8 hours for the 27 km round trip). Book our cab service for a spiritually enriching Jain pilgrimage experience.'
        ],
        stops: [
          'Ranchi - Starting Point',
          'Ramgarh - Refreshment Break',
          'Giridih Town - Midway Point',
          'Madhuban - Parasnath Trek Base'
        ],
        faqs: [
          { question: 'What is the distance from Ranchi to Giridih?', answer: 'The distance between Ranchi and Giridih is approximately 175 kilometers via NH-33.' },
          { question: 'How much does a Ranchi to Giridih cab cost?', answer: 'The fare starts from ₹2,800 for a sedan (one-way). Round trip with waiting time starts from ₹5,200.' },
          { question: 'How long does the Ranchi to Giridih journey take?', answer: 'It typically takes 4-4.5 hours depending on traffic conditions.' },
          { question: 'Can you drop us at Parasnath trek base?', answer: 'Yes, we drop passengers at Madhuban which is the base for Parasnath/Sammed Shikharji trek, about 25 km from Giridih town.' },
          { question: 'Do you wait during the Parasnath trek?', answer: 'Yes, our round trip packages include waiting time (6-8 hours) for the trek. Extra waiting time can be arranged.' },
          { question: 'Is early morning departure recommended?', answer: 'Yes, we recommend 4-5 AM departure from Ranchi to reach Madhuban early for a comfortable trek.' }
        ]
      }}
    />
  );
}

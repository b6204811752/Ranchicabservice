import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { Phone, Users, MapPin, Clock, Shield, Star, Check, Calendar, Car } from 'lucide-react';
import FAQ from '../components/common/FAQ';

const heroImg = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&auto=format&fit=crop';
const tempo9Img = 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&auto=format&fit=crop';
const tempo12Img = 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=600&auto=format&fit=crop';
const tempo17Img = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop';
const miniBusImg = 'https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=600&auto=format&fit=crop';

export default function TempoTravellerPage() {
  const vehicles = [
    {
      name: '9 Seater Tempo Traveller',
      seats: '9+1',
      luggage: '9 bags',
      localRate: '₹18/km',
      outstationRate: '₹20/km',
      features: ['AC', 'Push Back Seats', 'Music System', 'Charging Points'],
      bestFor: 'Small groups, family trips',
    },
    {
      name: '12 Seater Tempo Traveller',
      seats: '12+1',
      luggage: '12 bags',
      localRate: '₹20/km',
      outstationRate: '₹22/km',
      features: ['AC', 'Push Back Seats', 'LCD TV', 'Charging Points', 'Ice Box'],
      bestFor: 'Office outings, pilgrimages',
    },
    {
      name: '17 Seater Tempo Traveller',
      seats: '17+1',
      luggage: '17 bags',
      localRate: '₹22/km',
      outstationRate: '₹25/km',
      features: ['AC', 'Push Back Seats', 'LCD TV', 'Charging Points', 'Ice Box', 'First Aid'],
      bestFor: 'Large groups, weddings',
    },
    {
      name: '26 Seater Mini Bus',
      seats: '26+1',
      luggage: '26 bags',
      localRate: '₹28/km',
      outstationRate: '₹32/km',
      features: ['AC', 'Push Back Seats', 'LCD TV', 'Mic System', 'Charging Points'],
      bestFor: 'Corporate events, school trips',
    },
  ];

  const packages = [
    { name: 'Ranchi Local (8 hrs/80 km)', price9: '₹3,500', price12: '₹4,000', price17: '₹4,500' },
    { name: 'Ranchi to Deoghar', price9: '₹8,000', price12: '₹9,000', price17: '₹10,000' },
    { name: 'Ranchi to Patna', price9: '₹12,000', price12: '₹14,000', price17: '₹16,000' },
    { name: 'Ranchi to Kolkata', price9: '₹16,000', price12: '₹18,000', price17: '₹20,000' },
    { name: 'Ranchi to Gaya', price9: '₹10,000', price12: '₹11,500', price17: '₹13,000' },
  ];

  const faqs = [
    {
      question: 'What is the seating capacity of tempo travellers available in Ranchi?',
      answer: 'We offer tempo travellers in 9 seater, 12 seater, 17 seater, and 26 seater (mini bus) variants. All vehicles come with AC, push-back seats, and modern amenities.',
    },
    {
      question: 'What is the tempo traveller rental rate in Ranchi?',
      answer: 'Tempo traveller rates in Ranchi start from ₹18/km for 9 seaters. 12 seater costs ₹20/km, 17 seater ₹22/km, and 26 seater mini bus ₹28/km. Minimum 250 km per day for outstation trips.',
    },
    {
      question: 'Can I book tempo traveller for wedding in Ranchi?',
      answer: 'Yes, we provide tempo traveller and mini bus rental for weddings in Ranchi. We offer decorated vehicles with flowers and ribbons. Book in advance for wedding season availability.',
    },
    {
      question: 'Do you provide tempo traveller for Deoghar pilgrimage?',
      answer: 'Yes, tempo traveller is ideal for group pilgrimage to Deoghar/Baidyanath Dham. Our 12 seater and 17 seater are most popular for Shravan Mela trips.',
    },
    {
      question: 'Is driver allowance extra for tempo traveller?',
      answer: 'For outstation trips, driver allowance of ₹400-500/night is charged extra. Toll, parking, and state permit charges are also extra and paid directly.',
    },
    {
      question: 'Can 17 seater tempo traveller go to hilly areas like Netarhat?',
      answer: 'Yes, our tempo travellers are well-suited for hilly terrain. Our experienced drivers are familiar with routes to Netarhat, McCluskieganj, and other hill stations.',
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tempo Traveller Rental in Ranchi - 9, 12, 17, 26 Seater",
    "description": "Book tempo traveller in Ranchi for group travel. 9, 12, 17, 26 seater AC vehicles available for weddings, pilgrimages to Deoghar, corporate outings, and family trips.",
    "url": "https://www.ranchicabservice.com/tempo-traveller-ranchi",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ranchi Cab Service",
      "telephone": "+917903629240",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ranchi",
        "addressRegion": "Jharkhand",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {"@type": "City", "name": "Ranchi"},
      {"@type": "State", "name": "Jharkhand"},
      {"@type": "State", "name": "Bihar"}
    ],
    "serviceType": "Tempo Traveller & Mini Bus Rental",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "18",
      "highPrice": "32",
      "priceCurrency": "INR",
      "offerCount": "4",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <SEO
        title="Tempo Traveller in Ranchi | 12, 17 Seater @ ₹18/km | Mini Bus Rental"
        description="🚐 Book Tempo Traveller in Ranchi ✓ 9 Seater ₹18/km ✓ 12 Seater ₹20/km ✓ 17 Seater ₹22/km ✓ 26 Seater Mini Bus ✓ AC Push-back Seats ✓ Deoghar Pilgrimage ✓ Wedding ✓ Corporate. Call +91 7903629240"
        keywords="tempo traveller ranchi, 12 seater tempo ranchi, 17 seater tempo traveller ranchi, mini bus rental ranchi, tempo traveller for wedding ranchi, tempo traveller deoghar, group travel ranchi, 9 seater tempo traveller ranchi, 26 seater bus rental ranchi, tempo traveller hire ranchi, tempo traveller booking ranchi, ranchi to deoghar tempo traveller, ranchi to patna tempo traveller, ranchi to kolkata tempo, tempo for pilgrimage ranchi, corporate bus rental ranchi, school trip bus ranchi, tempo traveller rate per km ranchi, ac tempo traveller ranchi, luxury tempo traveller ranchi, tempo traveller jharkhand, mini bus for wedding ranchi, tempo traveller near me ranchi"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Tempo Traveller Ranchi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-blue-900/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
              <Users className="w-5 h-5" />
              <span className="font-medium">Group Travel Specialist</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tempo Traveller Rental in Ranchi
            </h1>
            <p className="text-xl mb-6 opacity-90">
              9, 12, 17, 26 Seater Tempo Traveller & Mini Bus for Weddings, Pilgrimages & Corporate Outings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917903629240"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7903629240
              </a>
              <a
                href="https://wa.me/917903629240?text=Hi,%20I%20want%20to%20book%20a%20tempo%20traveller"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
              >
                WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Choose Your Tempo Traveller
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            All vehicles are AC, well-maintained with push-back seats and modern amenities
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {vehicles.map((vehicle, idx) => {
              const vehicleImages = [tempo9Img, tempo12Img, tempo17Img, miniBusImg];
              return (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 relative overflow-hidden">
                  <img src={vehicleImages[idx]} alt={vehicle.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{vehicle.name}</h3>
                  <div className="flex gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" /> {vehicle.seats}
                    </span>
                    <span>📦 {vehicle.luggage}</span>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm"><strong>Local:</strong> {vehicle.localRate}</p>
                    <p className="text-sm"><strong>Outstation:</strong> {vehicle.outstationRate}</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {vehicle.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">Best for: {vehicle.bestFor}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Package Rates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Popular Package Rates
          </h2>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-left">Package</th>
                  <th className="p-4 text-center">9 Seater</th>
                  <th className="p-4 text-center">12 Seater</th>
                  <th className="p-4 text-center">17 Seater</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-medium">{pkg.name}</td>
                    <td className="p-4 text-center text-green-600 font-bold">{pkg.price9}</td>
                    <td className="p-4 text-center text-green-600 font-bold">{pkg.price12}</td>
                    <td className="p-4 text-center text-green-600 font-bold">{pkg.price17}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            * Toll, parking, driver allowance extra. Prices may vary during peak season.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Perfect For Every Occasion
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: '🙏', title: 'Pilgrimages', desc: 'Deoghar, Gaya, Varanasi, Parasnath trips with experienced drivers' },
              { icon: '💒', title: 'Weddings', desc: 'Decorated tempo travellers for baraat and guest transportation' },
              { icon: '🏢', title: 'Corporate', desc: 'Office outings, team building trips, conference transportation' },
              { icon: '🎓', title: 'School/College', desc: 'Educational tours, picnics, sports events transportation' },
              { icon: '🏔️', title: 'Hill Stations', desc: 'Netarhat, McCluskieganj, weekend getaways for groups' },
              { icon: '👨‍👩‍👧‍👦', title: 'Family Events', desc: 'Family reunions, mundan, birthday parties, anniversaries' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} title="Tempo Traveller FAQs" />

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Book Your Tempo Traveller Now
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the best rates for group travel. 24/7 booking available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917903629240"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call: +91 7903629240
            </a>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

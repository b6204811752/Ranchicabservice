import SEO from '../components/common/SEO';
import FAQ from '../components/common/FAQ';
import InternalLinks from '../components/common/InternalLinks';
import { Plane, Clock, Shield, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import airportImg from '@/assets/images/vehicles/airport.avif';

export default function AirportPage() {
  const rates = [
    { vehicle: 'Maruti Dzire', rate: '₹800 - ₹1,000' },
    { vehicle: 'Maruti Ertiga', rate: '₹1,000 - ₹1,200' },
    { vehicle: 'Toyota Innova Crysta', rate: '₹1,400 - ₹1,600' },
  ];

  const features = [
    { icon: <Clock className="w-8 h-8" />, title: '24/7 Available', description: 'Round the clock airport service' },
    { icon: <Plane className="w-8 h-8" />, title: 'Flight Tracking', description: 'We track your flight status' },
    { icon: <Shield className="w-8 h-8" />, title: 'Meet & Greet', description: 'Driver will meet you at arrival' },
    { icon: <Star className="w-8 h-8" />, title: 'Luggage Assist', description: 'Help with your luggage' },
  ];

  return (
    <>
      <SEO
        title="Ranchi Airport Taxi @ ₹800 | Birsa Munda Airport Cab | 24/7 Pickup & Drop"
        description="✈️ Book Ranchi Airport Taxi ✓ Birsa Munda Airport Pickup & Drop @ ₹800 ✓ 24/7 Service ✓ Flight Tracking ✓ Meet & Greet ✓ AC Sedan, Ertiga, Innova Crysta ✓ Luggage Assist ✓ 5.0★ Rated ✓ No Hidden Charges. Call +91 7903629240"
        keywords="ranchi airport taxi, birsa munda airport cab, ranchi airport transfer, airport pickup ranchi, airport drop ranchi, ranchi airport cab service, birsa munda airport taxi fare, ranchi airport to city taxi, airport cab booking ranchi, cheap airport taxi ranchi, ranchi airport taxi contact number, ranchi airport taxi phone number, flight taxi ranchi, ranchi airport pickup service, prepaid taxi ranchi airport, ranchi airport to railway station cab, ranchi airport to doranda cab, airport to lalpur taxi, ranchi airport to hazaribagh cab, ranchi airport to bokaro taxi, ranchi airport to jamshedpur cab, airport to ranchi city center, birsa munda airport to hotel taxi, ranchi airport sedan, ranchi airport innova, ranchi airport ertiga, 24 hour airport taxi ranchi, night airport pickup ranchi, early morning flight taxi ranchi, ranchi airport se taxi, airport se ghar taxi ranchi, ranchi airport cab rate, taxi near ranchi airport, cab near birsa munda airport, airport taxi service jharkhand, airport transfer booking ranchi, ranchi domestic airport cab"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": "Ranchi Airport Taxi Service - Birsa Munda Airport Pickup & Drop",
              "description": "24/7 airport pickup and drop service at Birsa Munda Airport, Ranchi. Punctual, reliable, and hassle-free airport transfers with flight tracking.",
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
              "areaServed": {
                "@type": "City",
                "name": "Ranchi"
              },
              "serviceType": "Airport Taxi Transfer",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Airport Transfer Vehicles",
                "itemListElement": [
                  { "@type": "Offer", "name": "Sedan Airport Transfer", "priceCurrency": "INR", "price": "800" },
                  { "@type": "Offer", "name": "SUV Airport Transfer", "priceCurrency": "INR", "price": "1000" },
                  { "@type": "Offer", "name": "Innova Crysta Airport Transfer", "priceCurrency": "INR", "price": "1400" }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "95",
                "bestRating": "5",
                "worstRating": "1"
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ranchicabservice.com/" },
                { "@type": "ListItem", "position": 2, "name": "Airport Taxi Ranchi" }
              ]
            }
          ]
        }}
      />

      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={airportImg} alt="Ranchi Airport Taxi Service - Birsa Munda Airport Pickup and Drop" className="w-full h-full object-cover opacity-30" loading="eager" width="1200" height="600" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ranchi Airport Taxi Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            24/7 airport pickup and drop service. Punctual, reliable, and hassle-free airport transfers.
          </motion.p>
        </div>
      </section>

      <section className="py-16 overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Airport Transfer Rates</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {rates.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, x: 10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                className="flex justify-between items-center p-6 bg-gradient-to-r from-white via-blue-50 to-white rounded-lg shadow-md border-l-4 border-blue-600">
                <span className="text-lg font-semibold">{item.vehicle}</span>
                <span className="text-2xl font-bold text-blue-600">{item.rate}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Services Section */}
      <section className="py-12 bg-white overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Explore More Services
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Besides airport transfers, we offer comprehensive taxi services for all your travel needs in and around Ranchi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link to="/local-taxi-ranchi" className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-blue-800 group-hover:text-blue-900 text-lg mb-2">Local Taxi</h3>
              <p className="text-sm text-gray-600">Hourly rental for city travel</p>
            </Link>
            <Link to="/outstation-taxi" className="group p-6 bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-purple-800 group-hover:text-purple-900 text-lg mb-2">Outstation Taxi</h3>
              <p className="text-sm text-gray-600">Long-distance travel</p>
            </Link>
            <Link to="/corporate-taxi" className="group p-6 bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-green-800 group-hover:text-green-900 text-lg mb-2">Corporate Service</h3>
              <p className="text-sm text-gray-600">Business travel solutions</p>
            </Link>
            <Link to="/fleet" className="group p-6 bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-bold text-orange-800 group-hover:text-orange-900 text-lg mb-2">View Fleet</h3>
              <p className="text-sm text-gray-600">Our vehicle options</p>
            </Link>
          </div>
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Popular Routes from Airport
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Link to="/ranchi-to-patna-cab" className="p-4 bg-gray-50 hover:bg-blue-50 rounded-lg text-center transition-all">
              <p className="font-semibold text-gray-800 text-sm">Airport to Patna</p>
            </Link>
            <Link to="/ranchi-to-kolkata-taxi" className="p-4 bg-gray-50 hover:bg-blue-50 rounded-lg text-center transition-all">
              <p className="font-semibold text-gray-800 text-sm">Airport to Kolkata</p>
            </Link>
            <Link to="/ranchi-to-jamshedpur-cab" className="p-4 bg-gray-50 hover:bg-blue-50 rounded-lg text-center transition-all">
              <p className="font-semibold text-gray-800 text-sm">Airport to Jamshedpur</p>
            </Link>
            <Link to="/ranchi-to-bokaro-taxi" className="p-4 bg-gray-50 hover:bg-blue-50 rounded-lg text-center transition-all">
              <p className="font-semibold text-gray-800 text-sm">Airport to Bokaro</p>
            </Link>
            <Link to="/cities" className="p-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-center transition-all">
              <p className="font-semibold text-gray-800 text-sm">All Destinations →</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Book Airport Taxi</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#booking-form">
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
                Book Online
              </button>
            </Link>
            <a
              href="tel:+917903629240"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call: +91 7903629240
            </a>
            <a
              href="https://wa.me/917903629240"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ customFaqs={[
        { question: "How much does Ranchi airport taxi cost?", answer: "Ranchi Airport (Birsa Munda Airport) taxi starts at ₹800 for sedan (Dzire/Aura). Ertiga SUV costs ₹1,000-₹1,200. Innova Crysta costs ₹1,500-₹1,800. Rates apply for airport to city center (up to 15 km). Beyond city limits, per-km charges apply." },
        { question: "Do you track flight timings for airport pickup?", answer: "Yes, we track all flight arrivals in real-time. Our driver arrives at the airport before your flight lands. If your flight is delayed or arrives early, we adjust the pickup time automatically at no extra charge." },
        { question: "Is 24/7 airport taxi available in Ranchi?", answer: "Yes, our airport taxi service operates 24 hours, 7 days a week including early morning flights and late night arrivals. Night charges (10 PM - 6 AM) of 10% extra apply. We are available for all domestic airline arrivals and departures." },
        { question: "How do I book airport taxi to Ranchi Airport?", answer: "Call +91 7903629240 or WhatsApp your flight details (flight number, date, time). We'll confirm your booking with driver name and vehicle number. You can also book through our website. Pre-booking recommended for guaranteed availability." },
        { question: "Can I get an airport taxi from Ranchi to other cities?", answer: "Yes, we provide direct airport pickup to outstation destinations: Airport to Jamshedpur (₹2,500), Airport to Bokaro (₹2,000), Airport to Dhanbad (₹2,800), Airport to Hazaribagh (₹1,800). Convenient direct drop without city stop." },
        { question: "Where does the driver meet me at Ranchi Airport?", answer: "Our driver waits at the arrival gate exit with a name placard. We share the driver's name, photo, phone number, and car details via WhatsApp before pickup. Luggage assistance provided. Meet & greet service included at no extra cost." }
      ]} title="Airport Taxi FAQs" />

      {/* Internal Links */}
      <InternalLinks />
    </>
  );
}

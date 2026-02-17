import SEO from '../components/common/SEO';
import FAQ from '../components/common/FAQ';
import InternalLinks from '../components/common/InternalLinks';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Navigation, Car, Star, Shield, Check } from 'lucide-react';

const heroImg = 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&auto=format&fit=crop';

export default function CabNearMePage() {
  const areas = [
    { name: 'Ranchi Railway Station', distance: '0 km', time: '5-10 min', popular: true },
    { name: 'Birsa Munda Airport', distance: '7 km', time: '15-20 min', popular: true },
    { name: 'Lalpur', distance: '3 km', time: '10 min', popular: true },
    { name: 'Doranda', distance: '4 km', time: '10-15 min', popular: true },
    { name: 'Harmu', distance: '5 km', time: '12-15 min', popular: false },
    { name: 'Kanke', distance: '6 km', time: '15 min', popular: false },
    { name: 'Bariatu', distance: '4 km', time: '10-12 min', popular: false },
    { name: 'Morabadi', distance: '3 km', time: '8-10 min', popular: false },
    { name: 'Hinoo', distance: '5 km', time: '12-15 min', popular: false },
    { name: 'Hatia', distance: '8 km', time: '20 min', popular: true },
    { name: 'Namkum', distance: '10 km', time: '25 min', popular: false },
    { name: 'Kokar', distance: '4 km', time: '10 min', popular: false },
    { name: 'Argora', distance: '5 km', time: '12 min', popular: false },
    { name: 'Booty More', distance: '6 km', time: '15 min', popular: false },
    { name: 'Ratu Road', distance: '7 km', time: '18 min', popular: false },
    { name: 'Dhurwa', distance: '5 km', time: '12 min', popular: false },
    { name: 'Tupudana', distance: '12 km', time: '30 min', popular: false },
    { name: 'HEC', distance: '8 km', time: '20 min', popular: false },
    { name: 'MECON', distance: '6 km', time: '15 min', popular: false },
    { name: 'Main Road', distance: '2 km', time: '5-8 min', popular: true },
  ];

  const landmarks = [
    { name: 'Ranchi Railway Station', type: 'Transport Hub' },
    { name: 'Birsa Munda Airport', type: 'Airport' },
    { name: 'Albert Ekka Chowk', type: 'City Center' },
    { name: 'Firayalal Chowk', type: 'Business Area' },
    { name: 'Ranchi Club', type: 'Landmark' },
    { name: 'Sujata Chowk', type: 'Junction' },
    { name: 'Kanta Toli', type: 'Residential' },
    { name: 'Circular Road', type: 'Main Road' },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cab Near Me in Ranchi",
    "description": "Book a cab near you in Ranchi. Instant pickup from Railway Station, Airport, Lalpur, Doranda, Harmu, Kanke and all areas. 24/7 available.",
    "url": "https://www.ranchicabservice.com/cab-near-me-ranchi",
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
    "areaServed": areas.map(area => ({
      "@type": "Place",
      "name": area.name + ", Ranchi"
    })),
    "serviceType": "Local Taxi Service"
  };

  return (
    <>
      <SEO
        title="Cab Near Me in Ranchi | Taxi Near Me @ ₹10/km | 10 Min Pickup | 24/7"
        description="📍 Looking for cab near me in Ranchi? Get instant taxi pickup within 10 min! ✓ Railway Station ✓ Airport ✓ Lalpur ✓ Doranda ✓ Harmu ✓ Kanke ✓ Bariatu ✓ Morabadi ✓ All Areas. Best ola uber alternative. Call +91 7903629240"
        keywords="cab near me ranchi, taxi near me ranchi, cab near ranchi railway station, taxi near ranchi airport, cab service near me ranchi, taxi service near me ranchi, auto near me ranchi, uber alternative ranchi, ola alternative ranchi, cab booking near me ranchi, taxi near lalpur, cab near doranda, taxi near harmu, cab near kanke, taxi near bariatu, cab near morabadi, taxi near hinoo, cab near hec ranchi, taxi near mecon, cab near hatia, taxi near namkum, cab near kokar, taxi near argora, cab near booty more, taxi near ratu road, instant cab ranchi, quick taxi ranchi, fast cab service ranchi, budget taxi near me ranchi, cab near ranchi station, nearest cab ranchi, closest taxi ranchi, cab near ranchi bus stand, taxi near ranchi mall, cab near albert ekka chowk, taxi near firayalal chowk, cab near main road ranchi, taxi near piska more, cab near ormanjhi, taxi near itki ranchi, cab near tatisilwai, nearby taxi service ranchi, mere paas taxi ranchi, pass me cab ranchi, ranchi me cab chahiye"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Cab Near Me Ranchi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 animate-pulse">
              <Navigation className="w-5 h-5" />
              <span className="font-medium">Instant Pickup Available</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cab Near Me in Ranchi
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Get a taxi at your location within 10-15 minutes. Available 24/7 across Ranchi.
            </p>
            
            {/* Quick Book Options */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <p className="text-lg mb-4">📍 Where are you? Get a cab instantly!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+917903629240"
                  className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +91 7903629240
                </a>
                <a
                  href="https://wa.me/917903629240?text=Hi,%20I%20need%20a%20cab%20near%20me%20in%20Ranchi"
                  className="bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-800 transition-colors flex items-center justify-center gap-2"
                >
                  📍 Share Location on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-white overflow-x-hidden w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Get a Cab in 3 Simple Steps
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-bold mb-2">Call or WhatsApp</h3>
              <p className="text-gray-600 text-sm">Contact us with your location</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-bold mb-2">Share Location</h3>
              <p className="text-gray-600 text-sm">Send your exact pickup point</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="font-bold mb-2">Cab Arrives</h3>
              <p className="text-gray-600 text-sm">Driver reaches in 10-15 min</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Cab Available Near These Areas
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We cover all localities in Ranchi. Instant pickup available 24/7.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {areas.map((area, idx) => (
              <div 
                key={idx} 
                className={`p-4 rounded-xl text-center transition-all hover:shadow-md ${
                  area.popular ? 'bg-blue-50 border-2 border-blue-200' : 'bg-white border border-gray-200'
                }`}
              >
                {area.popular && (
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full mb-2 inline-block">
                    Popular
                  </span>
                )}
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{area.name}</h3>
                <p className="text-xs text-gray-500">
                  <Clock className="w-3 h-3 inline mr-1" />
                  {area.time} pickup
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-8 text-gray-600">
            Don't see your area? <strong>We cover ALL of Ranchi!</strong> Just call us.
          </p>
        </div>
      </section>

      {/* Landmark Pickups */}
      <section className="py-16 bg-white overflow-x-hidden w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Popular Pickup Points
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {landmarks.map((landmark, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 text-center">
                <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-800">{landmark.name}</h3>
                <p className="text-sm text-gray-500">{landmark.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50 overflow-x-hidden w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Book Cab With Us
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Clock, title: 'Quick Pickup', desc: '10-15 min arrival time' },
              { icon: Shield, title: 'Verified Drivers', desc: 'Police verified, safe travel' },
              { icon: Star, title: '5.0★ Rated', desc: 'Google verified reviews' },
              { icon: Car, title: 'Clean AC Cabs', desc: 'Well-maintained vehicles' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="py-16 bg-white overflow-x-hidden w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Local Taxi Rates in Ranchi
          </h2>
          
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-xl mb-4 text-blue-600">Sedan (Dzire/Aura)</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Base Fare</span>
                    <span className="font-bold">₹100</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Per Kilometer</span>
                    <span className="font-bold">₹10/km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Waiting (per hour)</span>
                    <span className="font-bold">₹100/hr</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 text-green-600">SUV (Ertiga/Innova)</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Base Fare</span>
                    <span className="font-bold">₹150</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Per Kilometer</span>
                    <span className="font-bold">₹14-18/km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Waiting (per hour)</span>
                    <span className="font-bold">₹150/hr</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-6 text-sm">
              * Night charges (10 PM - 6 AM): 10% extra
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Cab Right Now?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're available 24/7. Just call or WhatsApp your location!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917903629240"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call: +91 7903629240
            </a>
            <a
              href="https://wa.me/917903629240?text=Hi,%20I%20need%20a%20cab%20near%20me"
              className="bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-800 transition-colors border-2 border-white"
            >
              📍 WhatsApp Location
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Cab Near Me in Ranchi - Your Reliable Local Taxi Service
            </h2>
            <p className="text-gray-600 mb-4">
              Looking for a <strong>cab near me in Ranchi</strong>? Ranchi Cab Service provides instant taxi pickup from 
              any location in Ranchi city. Whether you're at Ranchi Railway Station, Birsa Munda Airport, 
              Lalpur, Doranda, Harmu, or any other locality, our cabs can reach you within 10-15 minutes.
            </p>
            <p className="text-gray-600 mb-4">
              Unlike app-based services like Ola and Uber that may have surge pricing, we offer <strong>fixed rates</strong> 
              for local taxi service in Ranchi. Our verified drivers, clean AC vehicles, and 24/7 availability 
              make us the preferred choice for <strong>taxi near me</strong> searches in Ranchi.
            </p>
            <p className="text-gray-600">
              Simply call <a href="tel:+917903629240" className="text-blue-600 font-bold">+91 7903629240</a> or 
              WhatsApp your live location, and our nearest available cab will be dispatched to your pickup point immediately.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ customFaqs={[
        { question: "How do I find a cab near me in Ranchi?", answer: "Simply call +91 7903629240 or WhatsApp your live location. Our nearest available cab will be dispatched to your pickup point within 10-15 minutes. We cover all areas of Ranchi including Doranda, Lalpur, Kanke, Harmu, Bariatu, Morabadi, Hinoo, HEC, Railway Station, and Airport." },
        { question: "How fast can I get a taxi near me in Ranchi?", answer: "Our average pickup time is 10-15 minutes in most Ranchi locations. For areas near our driver hubs (Railway Station, Airport, Birsa Chowk), pickup can be as fast as 5-7 minutes. We have 50+ drivers stationed across the city for quick response." },
        { question: "Is Ranchi Cab Service available at night?", answer: "Yes, we provide 24/7 taxi service including late night and early morning. Night charges (10 PM - 6 AM) are just 10% extra. Our verified drivers ensure safe night travel anywhere in Ranchi." },
        { question: "How much does a cab near me cost in Ranchi?", answer: "Our rates start at ₹10/km for sedan (Dzire/Aura). Minimum fare is ₹150. Base fare applies for first 4 km. No surge pricing unlike Ola/Uber. SUV starts at ₹14/km. We offer the most transparent and affordable rates in Ranchi." },
        { question: "Can I get a cab near Ranchi Railway Station?", answer: "Yes, we have multiple cabs stationed near Ranchi Junction Railway Station 24/7. Pickup from station exit within 5-10 minutes. We also serve Hatia Railway Station. Pre-booking recommended for assured availability during peak hours." },
        { question: "Do you offer cab service at Birsa Munda Airport?", answer: "Yes, we provide 24/7 airport taxi service at Birsa Munda Airport. Airport to city starts at ₹800. We track your flight timing and wait at the arrival gate. No extra charge for flight delays. Pre-book for guaranteed availability." }
      ]} title="Cab Near Me FAQs" />

      {/* Internal Links */}
      <InternalLinks />
    </>
  );
}

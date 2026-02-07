import SEO from '../components/common/SEO';
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
        title="Ranchi Airport Taxi Service | 24/7 Airport Transfer & Pickup | Birsa Munda Airport Cab"
        description="Book reliable Ranchi airport taxi service for Birsa Munda Airport. 24/7 airport pickup and drop. Flight tracking, meet & greet service. Call +91 7903629240."
        keywords="ranchi airport taxi, birsa munda airport cab, ranchi airport transfer, airport pickup ranchi, airport drop ranchi, ranchi airport cab service"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Ranchi Airport Taxi Service",
          "description": "24/7 airport pickup and drop service at Birsa Munda Airport, Ranchi. Punctual, reliable, and hassle-free airport transfers.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Ranchi Cab Service",
            "telephone": "+917903629240"
          },
          "areaServed": {
            "@type": "City",
            "name": "Ranchi"
          },
          "serviceType": "Airport Taxi Transfer"
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

      <section className="py-16">
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

      <section className="py-16 bg-gray-50">
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

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
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
    </>
  );
}

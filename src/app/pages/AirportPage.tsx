import { Helmet } from 'react-helmet-async';
import { Plane, Clock, Shield, Star } from 'lucide-react';

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
      <Helmet>
        <title>Ranchi Airport Taxi Service | 24/7 Airport Transfer & Pickup</title>
        <meta
          name="description"
          content="Book reliable Ranchi airport taxi service. 24/7 airport pickup and drop. Flight tracking, meet & greet service. Call +91 7903629240 for airport transfer."
        />
      </Helmet>

      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ranchi Airport Taxi Service
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            24/7 airport pickup and drop service. Punctual, reliable, and hassle-free airport transfers.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Airport Transfer Rates</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {rates.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-6 bg-white rounded-lg shadow-md">
                <span className="text-lg font-semibold">{item.vehicle}</span>
                <span className="text-2xl font-bold text-blue-600">{item.rate}</span>
              </div>
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

import { Helmet } from 'react-helmet-async';
import { Clock, MapPin, DollarSign, Shield } from 'lucide-react';

export default function LocalTaxiPage() {
  const packages = [
    { duration: '4 Hours / 40 km', sedan: '₹1,200', suv: '₹1,600' },
    { duration: '8 Hours / 80 km', sedan: '₹2,000', suv: '₹2,800' },
    { duration: '12 Hours / 120 km', sedan: '₹2,800', suv: '₹3,800' },
  ];

  const features = [
    { icon: <Clock className="w-8 h-8" />, title: 'Hourly Packages', description: 'Flexible hourly rental options' },
    { icon: <MapPin className="w-8 h-8" />, title: 'Multiple Stops', description: 'Visit multiple locations' },
    { icon: <DollarSign className="w-8 h-8" />, title: 'Fixed Rates', description: 'No surprise charges' },
    { icon: <Shield className="w-8 h-8" />, title: 'Safe Travel', description: 'Verified drivers' },
  ];

  return (
    <>
      <Helmet>
        <title>Local Taxi Service in Ranchi | Hourly Car Rental | Ranchi Cab Service</title>
        <meta
          name="description"
          content="Book local taxi in Ranchi for hourly rentals. Best rates for city travel, shopping, appointments, and local sightseeing. AC cars, verified drivers. Call +91 7903629240"
        />
      </Helmet>

      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Local Taxi Service in Ranchi
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Hourly car rental for all your local travel needs. Perfect for shopping, appointments, city tours, and more.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Hourly Rental Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-100">
                <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">{pkg.duration}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Sedan</span>
                    <span className="font-bold text-xl">{pkg.sedan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SUV</span>
                    <span className="font-bold text-xl">{pkg.suv}</span>
                  </div>
                </div>
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
          <h2 className="text-3xl font-bold mb-6">Book Local Taxi Now</h2>
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

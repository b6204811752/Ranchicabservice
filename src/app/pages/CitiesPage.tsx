import { Helmet } from 'react-helmet-async';
import { MapPin } from 'lucide-react';

export default function CitiesPage() {
  const cities = {
    jharkhand: ['Ranchi', 'Jamshedpur', 'Bokaro', 'Dhanbad', 'Hazaribagh', 'Deoghar', 'Giridih', 'Ramgarh'],
    westBengal: ['Kolkata', 'Durgapur', 'Asansol', 'Siliguri', 'Howrah', 'Bardhaman'],
    bihar: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga'],
  };

  return (
    <>
      <Helmet>
        <title>Cities We Serve - Cab Service in Jharkhand, West Bengal & Bihar</title>
        <meta
          name="description"
          content="Ranchi Cab Service operates in Ranchi, Jamshedpur, Bokaro, Patna, Kolkata, and many more cities across Jharkhand, West Bengal, and Bihar."
        />
      </Helmet>

      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cities We Serve
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive cab service across Jharkhand, West Bengal, and Bihar
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-blue-600 flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                Jharkhand
              </h2>
              <ul className="space-y-3">
                {cities.jharkhand.map((city, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-lg">{city}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-blue-600 flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                West Bengal
              </h2>
              <ul className="space-y-3">
                {cities.westBengal.map((city, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-lg">{city}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-blue-600 flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                Bihar
              </h2>
              <ul className="space-y-3">
                {cities.bihar.map((city, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-lg">{city}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Book Your Ride</h2>
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

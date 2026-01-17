import { Helmet } from 'react-helmet-async';
import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import heroImg from '@/assets/images/vehicles/hero-bg2.webp';

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

      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Cities We Serve" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Cities We Serve
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Comprehensive cab service across Jharkhand, West Bengal, and Bihar
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, rotateY: -20, y: 30 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 p-8 rounded-xl shadow-lg border-2 border-blue-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full filter blur-3xl opacity-20"></div>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center relative z-10">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                </motion.div>
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
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, rotateY: -20, y: 30 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              whileHover={{ y: -10, scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative bg-gradient-to-br from-white via-green-50 to-teal-50 p-8 rounded-xl shadow-lg border-2 border-green-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-300 to-teal-300 rounded-full filter blur-3xl opacity-20"></div>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent flex items-center relative z-10">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <MapPin className="w-6 h-6 mr-2 text-green-600" />
                </motion.div>
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
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, rotateY: -20, y: 30 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative bg-gradient-to-br from-white via-orange-50 to-yellow-50 p-8 rounded-xl shadow-lg border-2 border-orange-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full filter blur-3xl opacity-20"></div>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent flex items-center relative z-10">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <MapPin className="w-6 h-6 mr-2 text-orange-600" />
                </motion.div>
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
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Book Your Ride</h2>
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

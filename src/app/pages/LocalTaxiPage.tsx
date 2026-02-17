import SEO from '../components/common/SEO';
import { Clock, MapPin, DollarSign, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import heroImg from '@/assets/images/vehicles/hero-bg.webp';

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
      <SEO
        title="Local Taxi Ranchi @ ₹10/km | Hourly Cab Rental | City Tour 24/7"
        description="🚖 Book Local Taxi in Ranchi ✓ Hourly Rental @ ₹10/km ✓ 4Hr Package ₹1200 ✓ 8Hr ₹2000 ✓ Full Day ₹3000 ✓ AC Sedan, Ertiga, Innova ✓ Verified Drivers ✓ City Tours ✓ Shopping ✓ Hospital ✓ All Areas Covered. Call +91 7903629240"
        keywords="local taxi ranchi, hourly cab rental ranchi, 4 hour taxi ranchi, 8 hour cab ranchi, full day taxi ranchi, half day cab ranchi, local cab service ranchi, city taxi ranchi, ranchi local cab rate, ac taxi ranchi, cab for shopping ranchi, ranchi sightseeing taxi, taxi for wedding ranchi, cab for hospital ranchi, local car hire ranchi, ranchi city tour taxi, cab near me ranchi, taxi near me ranchi, book taxi online ranchi, doranda taxi, lalpur cab service, kanke taxi, harmu cab booking, bariatu taxi service, morabadi cab ranchi, hinoo taxi booking, hec area cab, mecon ranchi taxi, ranchi lake cab, pahari mandir taxi, tagore hill cab service, rock garden taxi, sedan on rent ranchi, ertiga local ranchi, innova hourly rental ranchi, ranchi local taxi rate per km, ranchi me taxi, ranchi sheher ki taxi, ranchi city ride, daily cab rental ranchi, hourly cab ranchi price, ranchi local auto, ranchi within city cab, taxi for darshan ranchi, cab for school ranchi, taxi for office ranchi, local gaadi ranchi, ghante pe taxi ranchi"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "serviceType": "Local Taxi Service",
              "name": "Local Taxi Service Ranchi",
              "description": "Hourly cab rental service in Ranchi with flexible packages for city travel, shopping, hospital visits, and sightseeing. Starting at ₹10/km.",
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
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Local Taxi Packages",
                "itemListElement": [
                  { "@type": "Offer", "name": "4Hr / 40km Package", "priceCurrency": "INR", "price": "1200" },
                  { "@type": "Offer", "name": "8Hr / 80km Package", "priceCurrency": "INR", "price": "2000" },
                  { "@type": "Offer", "name": "12Hr / 120km Package", "priceCurrency": "INR", "price": "2800" }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "85",
                "bestRating": "5",
                "worstRating": "1"
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ranchicabservice.com/" },
                { "@type": "ListItem", "position": 2, "name": "Local Taxi Ranchi" }
              ]
            }
          ]
        }}
      />

      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Local Taxi" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Local Taxi Service in Ranchi
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Hourly car rental for all your local travel needs. Perfect for shopping, appointments, city tours, and more.
          </motion.p>
        </div>
      </section>

      <section className="py-16 overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Hourly Rental Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, rotateY: -20, y: 30 }}
                whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg border-2 border-blue-100 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">{pkg.duration}</h3>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotateY: 10, y: -10 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md text-center border border-blue-100"
              >
                <motion.div 
                  className="text-blue-600 mb-4 flex justify-center"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Outstation Travel Section */}
      <section className="py-12 bg-white overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Need Outstation Travel?
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Planning a trip outside Ranchi? We offer comfortable and affordable outstation taxi services to all major cities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link to="/outstation-taxi" className="group p-4 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-lg shadow hover:shadow-lg transition-all text-center">
              <h3 className="font-semibold text-blue-800 text-sm">Outstation Taxi</h3>
            </Link>
            <Link to="/ranchi-to-patna-cab" className="group p-4 bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-lg shadow hover:shadow-lg transition-all text-center">
              <h3 className="font-semibold text-purple-800 text-sm">Ranchi to Patna</h3>
            </Link>
            <Link to="/ranchi-to-kolkata-taxi" className="group p-4 bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-lg shadow hover:shadow-lg transition-all text-center">
              <h3 className="font-semibold text-green-800 text-sm">Ranchi to Kolkata</h3>
            </Link>
            <Link to="/ranchi-to-jamshedpur-cab" className="group p-4 bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-lg shadow hover:shadow-lg transition-all text-center">
              <h3 className="font-semibold text-orange-800 text-sm">Ranchi to Jamshedpur</h3>
            </Link>
            <Link to="/ranchi-to-deoghar-cab" className="group p-4 bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 rounded-lg shadow hover:shadow-lg transition-all text-center">
              <h3 className="font-semibold text-pink-800 text-sm">Ranchi to Deoghar</h3>
            </Link>
            <Link to="/cities" className="group p-4 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-lg shadow hover:shadow-lg transition-all flex items-center justify-center">
              <h3 className="font-semibold text-gray-800 text-sm">All Routes →</h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Book Local Taxi Now</h2>
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

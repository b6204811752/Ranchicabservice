import SEO from '../components/common/SEO';
import { Car, Users, Wind } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import heroImg from '@/assets/images/vehicles/hero-bg1.webp';
import ertigaImg from '@/assets/images/vehicles/ertiga.webp';
import auraImg from '@/assets/images/vehicles/aura.webp';
import dezireImg from '@/assets/images/vehicles/dezire.webp';
import cristaImg from '@/assets/images/vehicles/crista.webp';
import audiImg from '@/assets/images/vehicles/audi.webp';
import bmwImg from '@/assets/images/vehicles/bmw.webp';

const fleetSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Ranchi Cab Service Fleet",
  "description": "Our fleet of well-maintained vehicles for taxi service in Ranchi",
  "numberOfItems": 6,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Maruti Ertiga - 6+1 Seater SUV" },
    { "@type": "ListItem", "position": 2, "name": "Hyundai Aura - 4+1 Seater Sedan" },
    { "@type": "ListItem", "position": 3, "name": "Maruti Dzire - 4+1 Seater Sedan" },
    { "@type": "ListItem", "position": 4, "name": "Toyota Innova Crysta - 7+1 Seater" },
    { "@type": "ListItem", "position": 5, "name": "Audi - 4+1 Seater Luxury" },
    { "@type": "ListItem", "position": 6, "name": "BMW - 4+1 Seater Luxury" }
  ]
};

export default function FleetPage() {
  const vehicles = [
    {
      name: 'Maruti Ertiga',
      image: ertigaImg,
      seats: '6+1 Seater',
      ac: true,
      luggage: '3-4 Bags',
      localRate: '₹12/km',
      outstationRate: '₹14/km',
      features: ['AC', 'Music System', 'Spacious', 'Family Car'],
    },
    {
      name: 'Hyundai Aura',
      image: auraImg,
      seats: '4+1 Seater',
      ac: true,
      luggage: '2-3 Bags',
      localRate: '₹10/km',
      outstationRate: '₹12/km',
      features: ['AC', 'Comfortable', 'Fuel Efficient', 'Sedan'],
    },
    {
      name: 'Maruti Dzire',
      image: dezireImg,
      seats: '4+1 Seater',
      ac: true,
      luggage: '2-3 Bags',
      localRate: '₹10/km',
      outstationRate: '₹12/km',
      features: ['AC', 'Popular Choice', 'Reliable', 'Sedan'],
    },
    {
      name: 'Toyota Innova Crysta',
      image: cristaImg,
      seats: '7+1 Seater',
      ac: true,
      luggage: '5-6 Bags',
      localRate: '₹16/km',
      outstationRate: '₹18/km',
      features: ['AC', 'Premium', 'Spacious', 'SUV'],
    },
    {
      name: 'Audi',
      image: audiImg,
      seats: '4+1 Seater',
      ac: true,
      luggage: '3-4 Bags',
      localRate: 'On Request',
      outstationRate: 'On Request',
      features: ['Luxury', 'Premium', 'High-end', 'Executive'],
    },
    {
      name: 'BMW',
      image: bmwImg,
      seats: '4+1 Seater',
      ac: true,
      luggage: '3-4 Bags',
      localRate: 'On Request',
      outstationRate: 'On Request',
      features: ['Luxury', 'Premium', 'High-end', 'Executive'],
    },
  ];

  return (
    <>
      <SEO
        title="Our Fleet - Car Rental Options | Ranchi Cab Service"
        description="Explore our fleet of well-maintained vehicles. From sedans to SUVs and luxury cars. Maruti Dzire, Ertiga, Toyota Innova, Audi, BMW available. Call +91 7903629240"
        keywords="ranchi cab fleet, car rental ranchi, dzire taxi ranchi, ertiga cab ranchi, innova crysta ranchi, luxury car rental ranchi, sedan taxi ranchi, suv cab ranchi, tempo traveller ranchi, 7 seater cab ranchi, 12 seater tempo traveller ranchi, ac cab ranchi, premium taxi ranchi, audi on rent ranchi, fortuner on rent ranchi, wedding car ranchi"
        schema={fleetSchema}
      />

      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Our Fleet" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Fleet of Vehicles
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Wide range of well-maintained, clean, and comfortable vehicles to suit every need and budget
          </p>
        </div>
      </section>

      <section className="py-16 relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -15,
                  rotateY: 5,
                  scale: 1.05,
                  boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)"
                }}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-700"></div>
                <div className="relative overflow-hidden h-64">
                  <motion.img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">{vehicle.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div 
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-xl"
                      whileHover={{ scale: 1.05, x: 2 }}
                    >
                      <Users className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-700">{vehicle.seats}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl"
                      whileHover={{ scale: 1.05, x: 2 }}
                    >
                      <Wind className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-semibold text-gray-700">AC</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2 bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-xl col-span-2"
                      whileHover={{ scale: 1.05, x: 2 }}
                    >
                      <Car className="w-5 h-5 text-orange-600" />
                      <span className="text-sm font-semibold text-gray-700">{vehicle.luggage}</span>
                    </motion.div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <motion.div 
                      className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <span className="text-gray-700 font-semibold">Local Rate:</span>
                      <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{vehicle.localRate}</span>
                    </motion.div>
                    <motion.div 
                      className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <span className="text-gray-700 font-semibold">Outstation:</span>
                      <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{vehicle.outstationRate}</span>
                    </motion.div>
                  </div>
                  <Link to="/#booking-form">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                      Book Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-12 bg-white overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Book Our Fleet for Popular Routes
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Our well-maintained vehicles are available for all popular routes from Ranchi. Choose your destination and book now!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link to="/ranchi-to-patna-cab" className="group p-4 bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-semibold text-blue-800 group-hover:text-blue-900">Ranchi to Patna</h3>
              <p className="text-sm text-gray-600">330 km • From ₹4,500</p>
            </Link>
            <Link to="/ranchi-to-kolkata-taxi" className="group p-4 bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-semibold text-purple-800 group-hover:text-purple-900">Ranchi to Kolkata</h3>
              <p className="text-sm text-gray-600">420 km • From ₹6,000</p>
            </Link>
            <Link to="/ranchi-to-jamshedpur-cab" className="group p-4 bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-semibold text-green-800 group-hover:text-green-900">Ranchi to Jamshedpur</h3>
              <p className="text-sm text-gray-600">135 km • From ₹2,200</p>
            </Link>
            <Link to="/ranchi-to-bokaro-taxi" className="group p-4 bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-semibold text-orange-800 group-hover:text-orange-900">Ranchi to Bokaro</h3>
              <p className="text-sm text-gray-600">110 km • From ₹1,800</p>
            </Link>
            <Link to="/ranchi-to-dhanbad-cab" className="group p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-semibold text-indigo-800 group-hover:text-indigo-900">Ranchi to Dhanbad</h3>
              <p className="text-sm text-gray-600">165 km • From ₹2,800</p>
            </Link>
            <Link to="/ranchi-to-deoghar-cab" className="group p-4 bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-semibold text-pink-800 group-hover:text-pink-900">Ranchi to Deoghar</h3>
              <p className="text-sm text-gray-600">252 km • From ₹4,200</p>
            </Link>
            <Link to="/ranchi-to-hazaribagh-cab" className="group p-4 bg-gradient-to-br from-teal-50 to-teal-100 hover:from-teal-100 hover:to-teal-200 rounded-lg shadow hover:shadow-lg transition-all">
              <h3 className="font-semibold text-teal-800 group-hover:text-teal-900">Ranchi to Hazaribagh</h3>
              <p className="text-sm text-gray-600">92 km • From ₹1,600</p>
            </Link>
            <Link to="/cities" className="group p-4 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-lg shadow hover:shadow-lg transition-all flex items-center justify-center">
              <h3 className="font-semibold text-gray-800 group-hover:text-gray-900">View All Routes →</h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Book Your Preferred Vehicle</h2>
          <p className="text-xl mb-8 text-blue-100">
            Call us now to check availability and book your ride
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#booking-form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg"
              >
                Book Online
              </motion.button>
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

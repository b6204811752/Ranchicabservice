import SEO from '../components/common/SEO';
import { Shield, Users, Award, Heart, Target, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import heroImg1 from '@/assets/images/vehicles/hero-bg1.webp';
import heroImg2 from '@/assets/images/vehicles/hero-bg2.webp';

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Safety First',
      description: 'Your safety is our top priority with verified drivers and well-maintained vehicles',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Customer Satisfaction',
      description: 'We go the extra mile to ensure every journey exceeds expectations',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Quality Service',
      description: 'Professional service with attention to detail in every aspect',
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Reliability',
      description: 'On-time pickups and dependable service you can count on',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '50,000+', label: 'Trips Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Vehicles' },
  ];

  return (
    <>
      <SEO
        title="About Us - Ranchi Cab Service | Best Taxi Service Provider in Ranchi Since 2010"
        description="Learn about Ranchi Cab Service - Ranchi's most trusted taxi service provider. 10+ years experience, 500+ happy customers, verified drivers & 24/7 service. Book reliable cabs in Ranchi."
        keywords="about ranchi cab service, ranchi taxi company, best cab service ranchi, trusted taxi ranchi, ranchi travels company, professional cab service ranchi"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg1} alt="About Us" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Ranchi Cab Service
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner for safe, reliable, and affordable taxi services in Ranchi and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Ranchi Cab Service was founded with a simple mission: to provide safe, reliable, and affordable taxi services to the people of Ranchi and nearby cities. Over the years, we have grown from a small startup to one of the most trusted cab service providers in Jharkhand.
                </p>
                <p>
                  With over 15 years of experience in the transportation industry, we have served thousands of satisfied customers, completed over 50,000 successful trips, and built a reputation for excellence that speaks for itself.
                </p>
                <p>
                  Our commitment to customer satisfaction, safety, and reliability has made us the preferred choice for both personal and corporate travel in Ranchi, West Bengal, and Bihar.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImg2}
                alt="Ranchi Cab Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.1,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-2xl filter blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 group-hover:border-white/40 transition-all">
                    <motion.div 
                      className="text-5xl md:text-6xl font-bold mb-2 text-yellow-300"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-lg text-blue-100 font-medium">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -15,
                  rotateY: 8,
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="group relative bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl transition-all border border-white/20 overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-700"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="text-blue-600 mb-6 flex justify-center"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent text-center">{value.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800"
                alt="Why Choose Us"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Ranchi Cab Service?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Verified & Experienced Drivers</h3>
                    <p className="text-gray-600">All our drivers are background-verified, licensed, and experienced professionals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Well-Maintained Fleet</h3>
                    <p className="text-gray-600">Regular maintenance and cleaning ensure a comfortable and safe ride every time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">No hidden charges. What you see is what you pay.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">24/7 Customer Support</h3>
                    <p className="text-gray-600">Round-the-clock support to assist you whenever you need help.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience the best cab service in Ranchi
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#booking-form">
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
                Book Online
              </button>
            </Link>
            <a
              href="tel:+917903629240"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call: +91 7903629240
            </a>
            <a
              href="https://wa.me/917903629240"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

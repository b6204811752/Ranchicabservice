import { Helmet } from 'react-helmet-async';
import { Phone, Clock, Shield, Users, Star, MapPin, Car, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'motion/react';
import TrustBadges from '@/app/components/common/TrustBadges';
import FareCalculator from '@/app/components/common/FareCalculator';
import FAQ from '@/app/components/common/FAQ';
import ComparisonTable from '@/app/components/common/ComparisonTable';
import heroImg1 from '@/assets/images/vehicles/hero-bg1.webp';
import heroImg2 from '@/assets/images/vehicles/hero-bg2.webp';
import heroImg3 from '@/assets/images/vehicles/hero-bg.jpg';
import ertigaImg from '@/assets/images/vehicles/ertiga.jpg';
import auraImg from '@/assets/images/vehicles/aura.jpg';
import dezireImg from '@/assets/images/vehicles/dezire.jpg';
import cristaImg from '@/assets/images/vehicles/crista.jpeg';
import audiImg from '@/assets/images/vehicles/audi.jpg';
import bmwImg from '@/assets/images/vehicles/bmw.jpg';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: '',
    time: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Google Forms submission
    const formId = '1FAIpQLSeKQs7fzcpvRyNkHvxxxehYWkwXHk_gX9XDx9XEx2ptaw609g';
    const formUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
    
    const formBody = new URLSearchParams({
      'entry.533887689': formData.name,
      'entry.354045119': formData.phone,
      'entry.1860281689': formData.pickup,
      'entry.1418006924': formData.drop,
      'entry.993924594': formData.date,
      'entry.594137324': formData.time,
    });

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });
      
      alert('Booking request submitted successfully! We will contact you soon.');
      setFormData({ name: '', phone: '', pickup: '', drop: '', date: '', time: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback to WhatsApp
      const message = `New Booking Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nPickup: ${formData.pickup}\nDrop: ${formData.drop}\nDate: ${formData.date}\nTime: ${formData.time}`;
      const whatsappUrl = `https://wa.me/917903629240?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const heroSlides = [
    {
      image: heroImg1,
      title: 'Best Cab Service in Ranchi',
      subtitle: 'Safe, Reliable & Affordable',
    },
    {
      image: heroImg2,
      title: 'Outstation Taxi Service',
      subtitle: 'Travel Comfortably to Any City',
    },
    {
      image: heroImg3,
      title: '24/7 Airport Transfer',
      subtitle: 'Punctual Pickup & Drop Service',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const vehicles = [
    {
      name: 'Maruti Ertiga',
      image: ertigaImg,
      seats: '6+1',
      ac: true,
      local: '₹12/km',
      outstation: '₹14/km',
    },
    {
      name: 'Hyundai Aura',
      image: auraImg,
      seats: '4+1',
      ac: true,
      local: '₹10/km',
      outstation: '₹12/km',
    },
    {
      name: 'Maruti Dzire',
      image: dezireImg,
      seats: '4+1',
      ac: true,
      local: '₹10/km',
      outstation: '₹12/km',
    },
    {
      name: 'Toyota Innova Crysta',
      image: cristaImg,
      seats: '7+1',
      ac: true,
      local: '₹16/km',
      outstation: '₹18/km',
    },
    {
      name: 'Audi',
      image: audiImg,
      seats: '4+1',
      ac: true,
      local: 'On Request',
      outstation: 'On Request',
    },
    {
      name: 'BMW',
      image: bmwImg,
      seats: '4+1',
      ac: true,
      local: 'On Request',
      outstation: 'On Request',
    },
  ];

  const services = [
    {
      icon: <Car className="w-12 h-12" />,
      title: 'Local Taxi Service',
      description: 'Affordable local cab service for city travel in Ranchi',
      link: '/local-taxi-ranchi',
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: 'Outstation Taxi',
      description: 'Comfortable outstation cabs to nearby cities',
      link: '/outstation-taxi',
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Airport Transfer',
      description: '24/7 airport pickup and drop service',
      link: '/airport-taxi',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Corporate Taxi',
      description: 'Professional taxi service for corporate clients',
      link: '/corporate-taxi',
    },
  ];

  const routes = [
    { from: 'Ranchi', to: 'Patna', distance: '330 km', fare: '₹4,500' },
    { from: 'Ranchi', to: 'Kolkata', distance: '425 km', fare: '₹6,000' },
    { from: 'Ranchi', to: 'Jamshedpur', distance: '135 km', fare: '₹2,200' },
    { from: 'Ranchi', to: 'Bokaro', distance: '110 km', fare: '₹1,800' },
    { from: 'Ranchi', to: 'Dhanbad', distance: '150 km', fare: '₹2,400' },
    { from: 'Ranchi', to: 'Hazaribagh', distance: '90 km', fare: '₹1,500' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Excellent service! The driver was punctual and the car was clean. Highly recommended for Ranchi taxi service.',
      location: 'Ranchi',
    },
    {
      name: 'Priya Singh',
      rating: 5,
      text: 'Best cab service in Ranchi. Used for airport pickup and the experience was smooth and professional.',
      location: 'Ranchi',
    },
    {
      name: 'Amit Sharma',
      rating: 5,
      text: 'Great outstation taxi service from Ranchi to Patna. Driver was friendly and the journey was comfortable.',
      location: 'Patna',
    },
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Verified Drivers',
      description: 'All drivers are verified and experienced',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Service',
      description: 'Available round the clock for your convenience',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Best Rates',
      description: 'Competitive and transparent pricing',
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Easy Booking',
      description: 'Book via call, WhatsApp or online form',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ranchi Cab Service | Book Best Taxi in Ranchi 24/7 | Local, Outstation & Airport Cabs</title>
        <meta
          name="description"
          content="⭐ Ranchi's #1 Cab Service ✓ 24/7 Available ✓ Safe & Verified Drivers ✓ Best Rates ✓ Local Taxi ✓ Outstation Cabs ✓ Airport Transfer ✓ Corporate Taxi. Book Now: +91 7903629240"
        />
        <meta
          name="keywords"
          content="ranchi cab service, taxi service in ranchi, cab booking ranchi, ranchi taxi, ranchi airport taxi, outstation taxi ranchi, local taxi ranchi, ranchi to patna cab, ranchi to kolkata taxi, ranchi to jamshedpur cab, cab service near me ranchi, best taxi service ranchi, cheap cab ranchi, 24/7 taxi ranchi, ranchi cab booking online, corporate taxi ranchi, ranchi travels, taxi fare ranchi"
        />
        <link rel="canonical" href="https://ranchicabservice.vercel.app/" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:title" content="Ranchi Cab Service | Book Best Taxi in Ranchi 24/7" />
        <meta property="og:description" content="⭐ Ranchi's #1 Cab Service - Safe, Reliable & Affordable. Book Local Taxi, Outstation Cabs & Airport Transfer. Call +91 7903629240" />
        <meta property="og:url" content="https://ranchicabservice.vercel.app/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ranchi Cab Service | Best Taxi in Ranchi 24/7" />
        <meta name="twitter:description" content="Book Safe & Affordable Taxi in Ranchi. Local, Outstation, Airport & Corporate Cabs Available 24/7" />
        
        {/* Structured Data for HomePage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            "name": "Ranchi Cab Service",
            "description": "Best taxi and cab service in Ranchi offering 24/7 local taxi, outstation cabs, airport transfers and corporate transportation",
            "url": "https://ranchicabservice.vercel.app",
            "telephone": "+917903629240",
            "priceRange": "₹₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "500"
            },
            "areaServed": {
              "@type": "City",
              "name": "Ranchi",
              "containedIn": {
                "@type": "State",
                "name": "Jharkhand"
              }
            }
          })}
        </script>
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How can I book a cab in Ranchi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can book a cab by calling +91 7903629240, sending a WhatsApp message, or using our online booking form. We provide instant confirmation and 24/7 booking service."
                }
              },
              {
                "@type": "Question",
                "name": "What are your taxi rates in Ranchi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our local taxi rates start from ₹10/km for sedans and ₹14/km for SUVs. Outstation rates are ₹12/km for sedans and ₹16/km for SUVs."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide 24/7 taxi service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we are available 24 hours a day, 7 days a week, including all holidays for emergency travel, airport transfers, or outstation trips."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Hero Section with Image Slider */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Floating Bubbles */}
        <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${100 + Math.random() * 20}%`,
                background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1}), rgba(147, 197, 253, ${Math.random() * 0.3 + 0.1}))`,
                boxShadow: `inset -2px -2px 8px rgba(255, 255, 255, 0.3), 0 4px 20px rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})`,
              }}
              animate={{
                y: [-100, -window.innerHeight - 200],
                x: [0, Math.sin(i) * 100],
                scale: [1, 1.2, 1],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <Slider {...sliderSettings} className="h-full">
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative h-[600px] md:h-[700px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent" />
              </div>
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-2xl text-white"
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-2xl md:text-3xl mb-8 text-blue-100">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="tel:+917903629240"
                      className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call: +91 7903629240</span>
                    </a>
                    <a
                      href="https://wa.me/917903629240"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
                    >
                      WhatsApp Now
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Booking Form Section */}
      <section id="booking-form" className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 -mt-20 relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5, boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)" }}
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border-t-4 border-blue-600 relative overflow-hidden"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
            <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Book Your Cab Now
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 Your Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Pickup Location</label>
                <input
                  type="text"
                  required
                  value={formData.pickup}
                  onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                  placeholder="Enter pickup location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Drop Location</label>
                <input
                  type="text"
                  required
                  value={formData.drop}
                  onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                  placeholder="Enter drop location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Time</label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
              Why Choose Ranchi Cab Service?
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for safe and reliable taxi services
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="group relative bg-gradient-to-br from-white via-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform border border-blue-100 backdrop-blur-sm"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="text-blue-600 mb-4"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Our Taxi Services in Ranchi
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive cab solutions for all your travel needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -15,
                  rotateY: 8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Link
                  to={service.link}
                  className="block relative bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all group overflow-hidden border border-white/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <motion.div 
                    className="text-blue-600 mb-4 relative z-10"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 relative z-10 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all">{service.title}</h3>
                  <p className="text-gray-600 mb-4 relative z-10">{service.description}</p>
                  <span className="text-blue-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform relative z-10">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-purple-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Fleet of Vehicles
            </h2>
            <p className="text-xl text-gray-600">
              Wide range of vehicles to suit your needs and budget
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -12,
                  rotateY: 5,
                  scale: 1.03,
                  boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)"
                }}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-100"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-700"></div>
                <div className="relative overflow-hidden">
                  <motion.img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-56 object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-4 right-4">
                    <motion.div 
                      className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      AC Available
                    </motion.div>
                  </div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">{vehicle.name}</h3>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-semibold">{vehicle.seats} Seater</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <motion.div 
                      className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <span className="text-gray-700 font-medium">Local:</span>
                      <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{vehicle.local}</span>
                    </motion.div>
                    <motion.div 
                      className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <span className="text-gray-700 font-medium">Outstation:</span>
                      <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{vehicle.outstation}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/fleet"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              View Full Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16 relative bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Popular Outstation Routes from Ranchi
            </h2>
            <p className="text-xl text-gray-600">
              Best rates for outstation cab service
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                whileHover={{ 
                  y: -8,
                  rotateY: 5,
                  scale: 1.03,
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="group relative bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <motion.h3 
                      className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.05 }}
                    >
                      {route.from}
                    </motion.h3>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                    </motion.div>
                    <motion.h3 
                      className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.05 }}
                    >
                      {route.to}
                    </motion.h3>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">{route.distance}</span>
                    <motion.span 
                      className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.15 }}
                    >
                      {route.fare}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-yellow-50 to-orange-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from satisfied customers
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.4)"
                }}
                className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-yellow-100 overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-orange-500/0 to-amber-500/0 group-hover:from-yellow-500/10 group-hover:via-orange-500/10 group-hover:to-amber-500/10 transition-all duration-700"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full filter blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="flex mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: index * 0.15 + 0.4 + i * 0.1, type: "spring" }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="border-t border-yellow-200 pt-4">
                    <p className="font-bold text-lg bg-gradient-to-r from-gray-900 to-orange-900 bg-clip-text text-transparent">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fare Calculator Section */}
      <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Calculate Your Fare
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get instant fare estimates for your journey. Transparent pricing with no hidden charges.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Transparent Pricing</h4>
                    <p className="text-gray-600 text-sm">No surge pricing, no hidden costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Multiple Payment Options</h4>
                    <p className="text-gray-600 text-sm">Cash, UPI, Cards - your choice</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Best Rate Guarantee</h4>
                    <p className="text-gray-600 text-sm">Competitive rates for all routes</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FareCalculator />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Book Your Cab?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            Call us now or book via WhatsApp for instant confirmation
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+917903629240"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center space-x-2 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>+91 7903629240</span>
            </motion.a>
            <motion.a
              href="https://wa.me/917903629240"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-xl"
            >
              WhatsApp Now
            </motion.a>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-xl inline-block"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

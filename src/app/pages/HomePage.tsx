import { Phone, Clock, Shield, Users, Star, MapPin, Car, ArrowRight, MessageCircle } from 'lucide-react';
import SEO from '@/app/components/common/SEO';
import { Link } from 'react-router-dom';
import { useState, lazy, Suspense } from 'react';
import Slider from 'react-slick';
import '@/styles/slick-theme.css';
import { motion } from 'motion/react';
import TrustBadges from '@/app/components/common/TrustBadges';
import TrustIndicators from '@/app/components/common/TrustIndicators';
import PromoBanner from '@/app/components/common/PromoBanner';

// Lazy-load below-the-fold components to reduce initial bundle & TBT
const FareCalculator = lazy(() => import('@/app/components/common/FareCalculator'));
const FAQ = lazy(() => import('@/app/components/common/FAQ'));
const ComparisonTable = lazy(() => import('@/app/components/common/ComparisonTable'));
const Reviews = lazy(() => import('@/app/components/common/Reviews'));
const Newsletter = lazy(() => import('@/app/components/common/Newsletter'));
const CTABanner = lazy(() => import('@/app/components/common/CTABanner'));
const SocialShare = lazy(() => import('@/app/components/common/SocialShare'));
const ServiceAreas = lazy(() => import('@/app/components/common/ServiceAreas'));
const BlogSection = lazy(() => import('@/app/components/common/BlogSection'));
const HowToBook = lazy(() => import('@/app/components/common/HowToBook'));
const InternalLinks = lazy(() => import('@/app/components/common/InternalLinks'));
import heroImg1 from '@/assets/images/vehicles/hero-bg1.webp';
import heroImg2 from '@/assets/images/vehicles/hero-bg2.webp';
import heroImg3 from '@/assets/images/vehicles/hero-bg.webp';
import ertigaImg from '@/assets/images/vehicles/ertiga.webp';
import auraImg from '@/assets/images/vehicles/aura.webp';
import dezireImg from '@/assets/images/vehicles/dezire.webp';
import cristaImg from '@/assets/images/vehicles/crista.webp';
import audiImg from '@/assets/images/vehicles/audi.webp';
import bmwImg from '@/assets/images/vehicles/bmw.webp';

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
      title: 'Ranchi Taxi & Car Rental Service',
      subtitle: 'Top-Rated Cab & Taxi Service | 24/7 Available @ ₹10/km',
    },
    {
      image: heroImg2,
      title: 'Ranchi to Dhanbad Taxi @ ₹2400',
      subtitle: 'Outstation Cab Service to All Cities | AC Cars Available',
    },
    {
      image: heroImg3,
      title: 'Airport Taxi Service @ ₹800',
      subtitle: 'Birsa Munda Airport Pickup & Drop | 24/7 Available',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    pauseOnHover: true,
    lazyLoad: 'ondemand' as const,
    accessibility: true,
    swipe: true,
    waitForAnimate: false,
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
      <SEO
        title="Ranchi Cab Service | Taxi & Car Rental @ ₹10/km | 24/7 Booking ⭐5.0"
        description="⭐ #1 Ranchi Cab Service & Taxi Booking 24/7 ✓ Local Taxi ₹10/km ✓ Ranchi to Patna ₹4500 ✓ Ranchi to Dhanbad ₹2400 ✓ Airport Cab ₹800 ✓ Innova, Ertiga, Dzire ✓ 5.0★ Google Rated ✓ 10,000+ Rides ✓ Verified Drivers ✓ Free Cancellation. Call +91 7903629240!"
        keywords="ranchi cab service, ranchi taxi, ranchi cab, taxi service ranchi, cab service ranchi, car rental ranchi, ranchi taxi service, ranchi cab booking, online cab booking ranchi, cab booking ranchi, taxi booking ranchi, best cab service ranchi, best taxi service ranchi, cheap taxi ranchi, cheapest cab ranchi, affordable cab ranchi, budget taxi ranchi, ranchi to dhanbad cab, ranchi to patna cab, ranchi to kolkata taxi, ranchi to jamshedpur cab, ranchi to bokaro taxi, ranchi to deoghar cab, ranchi to hazaribagh cab, ranchi to gaya cab, ranchi to varanasi cab, ranchi airport taxi, birsa munda airport taxi, airport cab ranchi, airport pickup ranchi, outstation taxi ranchi, outstation cab ranchi, local taxi ranchi, local cab ranchi, cab near me ranchi, taxi near me ranchi, car hire ranchi, 24 hour taxi ranchi, 24x7 cab ranchi, innova on rent ranchi, ertiga taxi ranchi, dzire cab ranchi, one way taxi ranchi, round trip cab ranchi, jharkhand taxi service, tempo traveller ranchi, wedding car ranchi, corporate cab ranchi, ranchi cab phone number, taxi ranchi contact number, ola uber alternative ranchi, cab service in ranchi jharkhand, ranchi gaadi kiraya, ranchi me taxi, ranchi cab rate, taxi fare ranchi, safe cab service ranchi, reliable taxi ranchi, night taxi ranchi, early morning cab ranchi, ranchi cab service near me, ranchi station taxi, ranchi railway station cab, cab for hospital visit ranchi, monthly cab ranchi, cab on rent ranchi, chauffeur driven car ranchi, ranchi sightseeing taxi, ranchi tour taxi, cab for shopping ranchi"
      />

      {/* Promo Banner */}
      <PromoBanner 
        promoCode="FIRST20" 
        discount="20% OFF" 
        message="on your first booking!" 
        expiryText="Limited time offer"
      />

      {/* Hero Section with Image Slider */}
      <section className="hero-slider relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden w-full" style={{ containIntrinsicSize: '100vw 700px', contentVisibility: 'visible' }}>
        <Slider {...sliderSettings} className="h-full">
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative h-[500px] sm:h-[600px] md:h-[700px]">
              {index === 0 ? (
                <img
                  src={slide.image}
                  alt={slide.title}
                  width={466}
                  height={240}
                  fetchPriority="high"
                  decoding="sync"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent" />
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="max-w-2xl text-white">
                  {index === 0 ? (
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                      {slide.title}
                    </h1>
                  ) : (
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                      {slide.title}
                    </h2>
                  )}
                  <p className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-blue-100">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                    <a
                      href="tel:+917903629240"
                      tabIndex={index !== 0 ? -1 : undefined}
                      aria-label="Call Ranchi Cab Service for booking"
                      className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call: +91 7903629240</span>
                    </a>
                    <a
                      href="https://wa.me/917903629240"
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={index !== 0 ? -1 : undefined}
                      aria-label="Book a cab via WhatsApp"
                      className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg text-center"
                    >
                      WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Trust Indicators - Stats & Certifications */}
      <TrustIndicators />

      {/* Booking Form Section */}
      <section id="booking-form" className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
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
            <div className="text-center mb-4">
              <span className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-xs font-semibold animate-pulse">
                🔥 500+ Bookings This Month
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent px-4">
              Book Your Cab Now - Get Instant Confirmation
            </h2>
            <p className="text-center text-gray-600 mb-4 text-sm">
              ⏱️ Booking takes less than 60 seconds • ✓ No advance payment required
            </p>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-name" className="block text-sm font-semibold mb-2">Your Name</label>
                <input
                  id="booking-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="booking-phone" className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  id="booking-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 Your Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="booking-pickup" className="block text-sm font-semibold mb-2">Pickup Location</label>
                <input
                  id="booking-pickup"
                  type="text"
                  required
                  value={formData.pickup}
                  onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                  placeholder="Enter pickup location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="booking-drop" className="block text-sm font-semibold mb-2">Drop Location</label>
                <input
                  id="booking-drop"
                  type="text"
                  required
                  value={formData.drop}
                  onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                  placeholder="Enter drop location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="booking-date" className="block text-sm font-semibold mb-2">Date</label>
                <input
                  id="booking-date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="booking-time" className="block text-sm font-semibold mb-2">Time</label>
                <input
                  id="booking-time"
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
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                >
                  <Car className="w-5 h-5" />
                  Book Now - Get Instant Confirmation
                </button>
                <p className="text-center text-xs text-gray-500 mt-2">
                  ✓ No advance payment • ✓ Free cancellation up to 24hrs before
                </p>
              </div>
            </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 relative overflow-hidden overflow-x-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-3 sm:mb-4">
              Why Choose Ranchi Cab Service?
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
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
      <section className="py-16 relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-x-hidden w-full">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              Our Taxi Services in Ranchi
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              Comprehensive cab solutions for all your travel needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
                  <div className="absolute top-4 right-4 z-20">
                    <span className="flex items-center gap-1 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      Available Now
                    </span>
                  </div>
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

      {/* How to Book Section */}
      <Suspense fallback={null}><HowToBook /></Suspense>

      {/* Our Fleet */}
      <section className="py-16 relative overflow-hidden overflow-x-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-purple-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              Our Fleet of Vehicles
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              Wide range of vehicles to suit your needs and budget
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                    alt={`${vehicle.name} - Car Rental in Ranchi - ${vehicle.seats} Seater AC Cab`}
                    loading="lazy"
                    width="600"
                    height="400"
                    className="w-full h-48 sm:h-56 object-cover"
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
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/fleet"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              View Full Fleet
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
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
            className="text-center mb-8 sm:mb-12 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              Popular Outstation Routes from Ranchi
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              Best rates for outstation cab service
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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



      {/* Live Chat Prompt */}
      <section className="py-12 bg-gradient-to-r from-green-500 to-green-600 overflow-x-hidden w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="text-white text-left">
              <h3 className="text-2xl font-bold mb-2">Need Help Choosing the Right Cab?</h3>
              <p className="text-white">Chat with us on WhatsApp for instant assistance & best deals</p>
            </div>
            <a
              href="https://wa.me/917903629240?text=Hi, I need help booking a cab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp for cab assistance"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all shadow-xl flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Fare Calculator Section */}
      <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-white overflow-x-hidden w-full">
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
                    <h3 className="font-semibold text-gray-800">Transparent Pricing</h3>
                    <p className="text-gray-600 text-sm">No surge pricing, no hidden costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Multiple Payment Options</h3>
                    <p className="text-gray-600 text-sm">Cash, UPI, Cards - your choice</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Best Rate Guarantee</h3>
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
              <Suspense fallback={null}><FareCalculator /></Suspense>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <Suspense fallback={null}><ComparisonTable /></Suspense>

      {/* FAQ Section */}
      <Suspense fallback={null}><FAQ /></Suspense>

      {/* SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Car Rental & Taxi Service in Ranchi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Your Trusted Travel Partner</p>
          </motion.div>

          {/* Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-10 mb-12 border border-white/20"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to <span className="font-bold text-blue-600">Ranchi Cab Service</span>, your premier destination for reliable and affordable <span className="font-semibold">car rental in Ranchi</span>. 
              We are a leading <span className="font-semibold">taxi service provider in Ranchi, Jharkhand</span>, offering chauffeur-driven cab services for local trips, 
              outstation journeys, airport transfers, and corporate transportation. With over <span className="font-bold text-purple-600">2000+ routes covered</span> and <span className="font-bold text-purple-600">500+ satisfied customers</span>, 
              we have established ourselves as the most trusted <span className="font-semibold">cab booking service in Ranchi</span>.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Our Comprehensive Car Rental Services in Ranchi
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)" }}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-blue-100 overflow-hidden transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3">🚖</div>
                  <h4 className="text-xl font-bold text-blue-600 mb-3">Local Taxi Service in Ranchi</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Book <strong>local taxi in Ranchi</strong> for hourly rental packages. Perfect for city tours, shopping, business meetings, 
                    or daily commute. Our flexible packages include 4-hour, 8-hour, and 12-hour rentals starting at just <span className="font-bold text-blue-600">₹10/km</span> for sedans.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)" }}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-purple-100 overflow-hidden transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3">🛣️</div>
                  <h4 className="text-xl font-bold text-purple-600 mb-3">Outstation Taxi from Ranchi</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Planning an outstation trip? Book <strong>outstation cab from Ranchi</strong> with both one-way and round-trip options. 
                    We cover popular routes like Ranchi to Patna, Ranchi to Kolkata, Ranchi to Jamshedpur, Ranchi to Bokaro, and <span className="font-bold text-purple-600">2000+ more destinations</span>.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)" }}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-indigo-100 overflow-hidden transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3">✈️</div>
                  <h4 className="text-xl font-bold text-indigo-600 mb-3">Airport Taxi Service</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Need <strong>Birsa Munda Airport taxi</strong>? Our 24x7 <strong>airport cab service in Ranchi</strong> ensures punctual pickup 
                    and drop with flight tracking, meet & greet service, and comfortable rides to/from the airport.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)" }}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-pink-100 overflow-hidden transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3">💼</div>
                  <h4 className="text-xl font-bold text-pink-600 mb-3">Corporate Taxi Solutions</h4>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Corporate taxi service in Ranchi</strong> with customized monthly packages, dedicated vehicles, professional chauffeurs, 
                    and flexible billing options for businesses and organizations.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Fleet Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">Wide Range of Vehicles for Every Need</h3>
                <p className="text-lg text-blue-50 leading-relaxed">
                  Our fleet includes <span className="font-bold text-white">Sedan taxi (Maruti Dzire, Hyundai Aura)</span>, <span className="font-bold text-white">SUV cab (Maruti Ertiga)</span>, 
                  <span className="font-bold text-white"> Innova Crysta</span>, and luxury cars including <span className="font-bold text-white">Audi and BMW</span>. All vehicles are well-maintained, 
                  air-conditioned, and driven by government-verified professional chauffeurs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Routes Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Top Outstation Cab Routes & Fares
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-100"
              >
                <ul className="space-y-3">
                  <li className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-md transition-shadow">
                    <span className="font-medium text-gray-800"><strong>Ranchi to Patna cab</strong></span>
                    <span className="text-sm text-gray-600">350 km • <span className="font-bold text-blue-600">₹4,500</span></span>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-md transition-shadow">
                    <span className="font-medium text-gray-800"><strong>Ranchi to Kolkata taxi</strong></span>
                    <span className="text-sm text-gray-600">420 km • <span className="font-bold text-blue-600">₹6,000</span></span>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-md transition-shadow">
                    <span className="font-medium text-gray-800"><strong>Ranchi to Jamshedpur</strong></span>
                    <span className="text-sm text-gray-600">140 km • <span className="font-bold text-blue-600">₹2,200</span></span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-100"
              >
                <ul className="space-y-3">
                  <li className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-md transition-shadow">
                    <span className="font-medium text-gray-800"><strong>Ranchi to Bokaro taxi</strong></span>
                    <span className="text-sm text-gray-600">110 km • <span className="font-bold text-purple-600">₹1,800</span></span>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-md transition-shadow">
                    <span className="font-medium text-gray-800"><strong>Ranchi to Dhanbad cab</strong></span>
                    <span className="text-sm text-gray-600">160 km • <span className="font-bold text-purple-600">₹2,500</span></span>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:shadow-md transition-shadow">
                    <span className="font-medium text-gray-800"><strong>Ranchi to Gaya taxi</strong></span>
                    <span className="text-sm text-gray-600">200 km • <span className="font-bold text-purple-600">₹3,000</span></span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-100"
              >
                <ul className="space-y-3">
                  <li className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg hover:shadow-md transition-shadow">
                    <span className="font-medium text-gray-800"><strong>Ranchi to Hazaribagh</strong></span>
                    <span className="text-sm text-gray-600">90 km • <span className="font-bold text-pink-600">₹1,500</span></span>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg hover:shadow-md transition-shadow">
                    <span className="font-medium text-gray-800"><strong>Ranchi to Deoghar</strong></span>
                    <span className="text-sm text-gray-600">250 km • <span className="font-bold text-pink-600">₹3,500</span></span>
                  </li>
                  <li className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg hover:shadow-md transition-shadow">
                    <span className="font-medium text-gray-800"><strong>Ranchi to Dumka</strong></span>
                    <span className="text-sm text-gray-600">270 km • <span className="font-bold text-pink-600">₹3,800</span></span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Why Choose Us Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Our Key Advantages
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '⏰', title: '24x7 Availability', desc: 'Book cab anytime, anywhere' },
                { icon: '✅', title: 'Verified Drivers', desc: 'Safe and secure travel' },
                { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges' },
                { icon: '🚗', title: 'Well-Maintained Fleet', desc: 'Clean, comfortable AC vehicles' },
                { icon: '⚡', title: 'Instant Confirmation', desc: 'Call, WhatsApp or online' },
                { icon: '🗺️', title: '2000+ Routes', desc: 'One-way and round-trip' },
                { icon: '🏆', title: 'Best Price Guarantee', desc: 'Lowest per km rates' },
                { icon: '👔', title: 'Expert Chauffeurs', desc: 'Professional and courteous' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-4 border border-gray-100 text-center group hover:shadow-xl transition-all"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Booking CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Easy Cab Booking in Ranchi</h3>
                <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                  Booking a <span className="font-bold text-white">taxi in Ranchi</span> is now easier than ever! Simply call us at <span className="font-bold text-white">+91 7903629240</span>, 
                  send a WhatsApp message, or use our <span className="font-bold text-white">online cab booking</span> form. We provide instant confirmation and ensure 
                  your cab arrives on time, every time.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="tel:+917903629240" aria-label="Call now to book a Ranchi cab" className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all shadow-xl inline-flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a href="https://wa.me/917903629240" target="_blank" rel="noopener noreferrer" aria-label="Book via WhatsApp instant messaging" className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-all shadow-xl inline-flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 text-center">
                Service Areas in Ranchi
              </h3>
              <p className="text-gray-700 leading-relaxed text-center max-w-5xl mx-auto">
                We provide <span className="font-semibold">taxi service near Ranchi Railway Station, Ranchi Airport, Namkum, Doranda, Kanke, Lalpur, Harmu, 
                Bariatu, Booty More, Hinoo, Hatia, Tatisilwai, Ratu Road, Kokar, Argora, Morabadi, Dhurwa, Tupudana, Patratu</span> 
                and all major localities in Ranchi city.
              </p>
            </div>
          </motion.div>


        </div>
      </section>



      {/* Reviews Section */}
      <Suspense fallback={null}><Reviews /></Suspense>

      {/* Service Areas */}
      <Suspense fallback={null}><ServiceAreas /></Suspense>

      {/* Blog Section */}
      <Suspense fallback={null}><BlogSection /></Suspense>

      {/* Social Share */}
      <section className="bg-gray-50 py-12 overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <Suspense fallback={null}><SocialShare /></Suspense>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Suspense fallback={null}><Newsletter /></Suspense>

      {/* Internal Links for SEO */}
      <Suspense fallback={null}><InternalLinks /></Suspense>

      {/* Final CTA Banner */}
      <Suspense fallback={null}><CTABanner 
        variant="dark"
        title="Book Your Next Ride with Confidence"
        description="Trusted by 500+ customers. Professional drivers. Best rates guaranteed."
      /></Suspense>
    </>
  );
}

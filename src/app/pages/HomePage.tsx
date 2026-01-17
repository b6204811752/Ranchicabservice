import { Helmet } from 'react-helmet-async';
import { Phone, Clock, Shield, Users, Star, MapPin, Car, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'motion/react';

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
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200',
      title: 'Best Cab Service in Ranchi',
      subtitle: 'Safe, Reliable & Affordable',
    },
    {
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=1200',
      title: 'Outstation Taxi Service',
      subtitle: 'Travel Comfortably to Any City',
    },
    {
      image: 'https://images.unsplash.com/photo-1573474542-c8d1d2f63ec4?w=1200',
      title: '24/7 Airport Transfer',
      subtitle: 'Punctual Pickup & Drop Service',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const vehicles = [
    {
      name: 'Maruti Ertiga',
      image: 'https://images.unsplash.com/photo-1573474542-c8d1d2f63ec4?w=400',
      seats: '6+1',
      ac: true,
      local: '₹12/km',
      outstation: '₹14/km',
    },
    {
      name: 'Hyundai Aura',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400',
      seats: '4+1',
      ac: true,
      local: '₹10/km',
      outstation: '₹12/km',
    },
    {
      name: 'Maruti Dzire',
      image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400',
      seats: '4+1',
      ac: true,
      local: '₹10/km',
      outstation: '₹12/km',
    },
    {
      name: 'Toyota Innova Crysta',
      image: 'https://images.unsplash.com/photo-1748215210939-ad8b6c8c086d?w=400',
      seats: '7+1',
      ac: true,
      local: '₹16/km',
      outstation: '₹18/km',
    },
    {
      name: 'Audi',
      image: 'https://images.unsplash.com/photo-1692098861062-e6b4b4ec96bc?w=400',
      seats: '4+1',
      ac: true,
      local: 'On Request',
      outstation: 'On Request',
    },
    {
      name: 'BMW',
      image: 'https://images.unsplash.com/photo-1731142582229-e0ee70302c02?w=400',
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
        <title>Best Cab Service in Ranchi – Safe, Reliable & Affordable Taxi | Ranchi Cab Service</title>
        <meta
          name="description"
          content="Ranchi Cab Service offers best taxi service in Ranchi. Book outstation cabs, local taxi, airport transfer, and corporate taxi service. Available 24/7. Call +91 7903629240"
        />
        <meta
          name="keywords"
          content="Ranchi cab service, taxi service in Ranchi, cab booking Ranchi, Ranchi taxi service, outstation cab from Ranchi, Ranchi airport taxi"
        />
      </Helmet>

      {/* Hero Section with Image Slider */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
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

      {/* Booking Form Section */}
      <section className="py-16 bg-gray-50 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-blue-600"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ranchi Cab Service?
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for safe and reliable taxi services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-blue-100"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Taxi Services in Ranchi
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive cab solutions for all your travel needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 group bg-gradient-to-br from-white to-blue-50"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-blue-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Fleet of Vehicles
            </h2>
            <p className="text-xl text-gray-600">
              Wide range of vehicles to suit your needs and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{vehicle.seats} Seater</span>
                    <span className="text-green-600 font-semibold">AC Available</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Local:</span>
                      <span className="font-semibold text-blue-600">{vehicle.local}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Outstation:</span>
                      <span className="font-semibold text-blue-600">{vehicle.outstation}</span>
                    </div>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Outstation Routes from Ranchi
            </h2>
            <p className="text-xl text-gray-600">
              Best rates for outstation cab service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-blue-100 hover:border-blue-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{route.from}</h3>
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold">{route.to}</h3>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{route.distance}</span>
                  <span className="text-xl font-bold text-blue-600">{route.fare}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-yellow-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Cab?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Call us now or book via WhatsApp for instant confirmation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917903629240"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center space-x-2 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>+91 7903629240</span>
            </a>
            <a
              href="https://wa.me/917903629240"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              WhatsApp Now
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

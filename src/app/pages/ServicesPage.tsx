import SEO from '../components/common/SEO';
import { Car, MapPin, Plane, Briefcase, Clock, Users, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '@/assets/images/vehicles/hero-bg.webp';
import airportImg from '@/assets/images/vehicles/airport.avif';
import corporateImg from '@/assets/images/vehicles/crista.webp';

export default function ServicesPage() {
  const services = [
    {
      icon: <Car className="w-16 h-16" />,
      title: 'Local Taxi Service in Ranchi',
      description: 'Affordable and convenient local cab service for all your city travel needs. Perfect for shopping, appointments, or city tours.',
      features: [
        'Hourly packages available',
        'Full day and half day rentals',
        'Multiple pickup and drop points',
        'Experienced local drivers',
      ],
      link: '/local-taxi-ranchi',
      buttonText: 'Book Local Taxi',
    },
    {
      icon: <MapPin className="w-16 h-16" />,
      title: 'Outstation Taxi from Ranchi',
      description: 'Comfortable and reliable outstation cab service to nearby cities like Patna, Kolkata, Jamshedpur, and more.',
      features: [
        'One-way and round trip options',
        'Well-maintained AC vehicles',
        'Experienced highway drivers',
        'Competitive pricing',
      ],
      link: '/outstation-taxi',
      buttonText: 'Book Outstation Cab',
    },
    {
      icon: <Plane className="w-16 h-16" />,
      title: 'Airport Transfer Service',
      description: '24/7 airport pickup and drop service for Ranchi airport. Punctual and hassle-free transfers.',
      features: [
        'Flight tracking',
        'Meet and greet service',
        'Available 24/7',
        'Luggage assistance',
      ],
      link: '/airport-taxi',
      buttonText: 'Book Airport Taxi',
    },
    {
      icon: <Briefcase className="w-16 h-16" />,
      title: 'Corporate Taxi Service',
      description: 'Professional corporate transportation solutions for businesses. Ideal for employee transport, client meetings, and events.',
      features: [
        'Monthly packages available',
        'Dedicated vehicles',
        'Professional drivers',
        'Customized solutions',
      ],
      link: '/corporate-taxi',
      buttonText: 'Corporate Inquiries',
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safe & Secure',
      description: 'Verified drivers and GPS-enabled vehicles',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Availability',
      description: 'Round-the-clock service for your convenience',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Best Rates',
      description: 'Competitive pricing with no hidden charges',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Professional Service',
      description: 'Courteous drivers and well-maintained vehicles',
    },
  ];

  return (
    <>
      <SEO
        title="Taxi Services Ranchi | Local, Outstation & Airport Cab"
        description="✓ Local Taxi Ranchi ₹10/km ✓ Outstation Cabs to Patna, Kolkata ✓ 24/7 Airport Transfer ✓ Corporate Taxi Service. Book Now: +91 7903629240. Best rates guaranteed!"
        keywords="taxi services ranchi, local cab ranchi, outstation taxi ranchi, airport transfer ranchi, corporate taxi service, ranchi cab rates, taxi fare ranchi, hourly cab rental ranchi, cab service ranchi contact number"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Taxi Service",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Ranchi Cab Service"
          },
          "areaServed": "Ranchi, Jharkhand",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Taxi Services",
            "itemListElement": [
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Local Taxi"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Outstation Cab"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Airport Transfer"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Corporate Taxi"}}
            ]
          }
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Our Services" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Taxi Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive cab solutions for all your travel needs in Ranchi and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl">
                    <div className="text-blue-600 mb-6">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <Star className="w-5 h-5 text-yellow-400 fill-current flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/#booking-form"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      {service.buttonText}
                    </Link>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={
                        index === 0
                          ? `https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800`
                          : index === 1
                          ? `https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800`
                          : index === 2
                          ? airportImg
                          : corporateImg
                      }
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Book With Us?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference with Ranchi Cab Service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your Ride?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us now for instant booking and best rates
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

import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { Phone, Heart, Car, Star, Check, Calendar, Shield, MapPin } from 'lucide-react';
import FAQ from '../components/common/FAQ';

export default function WeddingCarPage() {
  const weddingCars = [
    {
      name: 'Toyota Innova Crysta',
      type: 'Premium SUV',
      seats: '7+1',
      features: ['AC', 'Music System', 'Flower Decoration', 'Professional Chauffeur'],
      pricePerDay: '₹5,500',
      bestFor: 'VIP Guest Pickup, Bridal Entry',
    },
    {
      name: 'Audi A4/A6',
      type: 'Luxury Sedan',
      seats: '4+1',
      features: ['AC', 'Premium Interior', 'Flower Decoration', 'Red Carpet Service'],
      pricePerDay: 'On Request',
      bestFor: 'Bride/Groom Entry, Vidaai',
    },
    {
      name: 'BMW 5 Series',
      type: 'Luxury Sedan',
      seats: '4+1',
      features: ['AC', 'Premium Interior', 'Flower Decoration', 'Just Married Ribbon'],
      pricePerDay: 'On Request',
      bestFor: 'Grand Bridal Entry, Reception',
    },
    {
      name: 'Mercedes E-Class',
      type: 'Luxury Sedan',
      seats: '4+1',
      features: ['AC', 'Premium Interior', 'Flower Decoration', 'Professional Chauffeur'],
      pricePerDay: 'On Request',
      bestFor: 'Premium Weddings, Celebrity Style',
    },
    {
      name: 'Maruti Dzire/Ertiga',
      type: 'Economy',
      seats: '4-6+1',
      features: ['AC', 'Basic Decoration', 'Clean Vehicle', 'Reliable Driver'],
      pricePerDay: '₹2,500 - ₹3,500',
      bestFor: 'Guest Transportation, Relatives Pickup',
    },
    {
      name: '12/17 Seater Tempo',
      type: 'Group Transport',
      seats: '12-17+1',
      features: ['AC', 'Push Back Seats', 'Decoration Available', 'Group Seating'],
      pricePerDay: '₹5,000 - ₹7,000',
      bestFor: 'Baraat, Barat, Guest Groups',
    },
  ];

  const services = [
    {
      icon: '💐',
      title: 'Flower Decoration',
      desc: 'Beautiful floral decoration with marigold, roses, and ribbons for bride/groom car',
    },
    {
      icon: '🎀',
      title: 'Just Married Setup',
      desc: 'Special ribbons, balloons, and "Just Married" signage for newlywed couple',
    },
    {
      icon: '👔',
      title: 'Professional Chauffeur',
      desc: 'Uniformed, well-groomed drivers with experience in wedding events',
    },
    {
      icon: '🚗',
      title: 'Multiple Vehicles',
      desc: 'Need 5, 10, or 20 cars? We arrange fleet for entire wedding party',
    },
    {
      icon: '📍',
      title: 'Multi-City Pickup',
      desc: 'Guest pickup from Ranchi airport, railway station, and nearby cities',
    },
    {
      icon: '⏰',
      title: 'Flexible Timings',
      desc: 'Available for mehendi, sangeet, wedding, reception - dawn to midnight',
    },
  ];

  const packages = [
    { name: 'Basic Package', cars: '1 Decorated Dzire', duration: '8 hours', price: '₹3,500', includes: 'Basic decoration, AC, Driver' },
    { name: 'Premium Package', cars: '1 Innova Crysta', duration: '8 hours', price: '₹6,500', includes: 'Full decoration, Red carpet, AC, Driver' },
    { name: 'Luxury Package', cars: '1 Audi/BMW', duration: '8 hours', price: 'On Request', includes: 'Premium decoration, Red carpet, Refreshments' },
    { name: 'Baraat Package', cars: '1 Decorated Car + Tempo', duration: 'Full Day', price: '₹12,000', includes: 'Groom car + Guest tempo, Decoration' },
    { name: 'Complete Wedding', cars: '5 Cars + 2 Tempos', duration: '2 Days', price: '₹45,000', includes: 'Full fleet for wedding' },
  ];

  const faqs = [
    {
      question: 'Do you provide car decoration for weddings?',
      answer: 'Yes, we offer beautiful floral decoration for wedding cars including marigold garlands, rose petals, ribbons, and "Just Married" signage. Decoration charges range from ₹1,000 to ₹3,000 depending on the design.',
    },
    {
      question: 'Can I book multiple cars for my wedding?',
      answer: 'Absolutely! We specialize in wedding fleet arrangements. Whether you need 5 cars or 50 vehicles for guest transportation, venue transfers, and baraat, we can arrange the complete fleet with coordination.',
    },
    {
      question: 'What luxury cars are available for wedding in Ranchi?',
      answer: 'We offer Audi A4/A6, BMW 3/5 Series, Mercedes E-Class, and Toyota Innova Crysta for premium weddings. All luxury cars come with professional chauffeurs and can be decorated as per your requirements.',
    },
    {
      question: 'How early should I book wedding cars?',
      answer: 'We recommend booking at least 15-30 days in advance, especially during wedding season (November-February). For popular dates, book 45-60 days ahead to ensure availability of preferred vehicles.',
    },
    {
      question: 'Do you provide tempo traveller for baraat?',
      answer: 'Yes, we have 12 seater and 17 seater tempo travellers perfect for baraat/barat procession. They can be decorated with flowers and dhol/band arrangements can be coordinated.',
    },
    {
      question: 'What areas do you cover for wedding car service?',
      answer: 'We cover all wedding venues in Ranchi city and surrounding areas including Hatia, Doranda, Lalpur, Harmu, Kanke, Bariatu, and outstation venues up to 100 km from Ranchi.',
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wedding Car Rental in Ranchi - Decorated Cars & Luxury Vehicles",
    "description": "Book decorated wedding cars in Ranchi. Luxury cars (Audi, BMW, Mercedes), Innova Crysta, tempo travellers for baraat and guest transportation. Flower decoration included.",
    "url": "https://www.ranchicabservice.com/wedding-car-ranchi",
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
    "serviceType": "Wedding Car Rental & Decoration",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "2500",
      "highPrice": "50000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "65",
      "bestRating": "5"
    }
  };

  return (
    <>
      <SEO
        title="Wedding Car Rental Ranchi | Decorated Audi, BMW @ ₹2500 | Baraat Cars"
        description="💒 Book Decorated Wedding Cars in Ranchi ✓ Audi, BMW, Mercedes ✓ Innova Crysta ₹5500/day ✓ Dzire ₹2500/day ✓ Tempo for Baraat ✓ Flower Decoration ✓ Professional Chauffeurs. Call +91 7903629240"
        keywords="wedding car ranchi, decorated car for wedding ranchi, marriage car rental ranchi, baraat car ranchi, luxury wedding car ranchi, audi for wedding ranchi, bmw wedding car ranchi, dulhan car ranchi, innova for wedding ranchi, wedding car decoration ranchi, bridal car ranchi, groom car ranchi, vidaai car ranchi, shaadi car ranchi, vivah car rental ranchi, tempo for baraat ranchi, wedding fleet ranchi, wedding car package ranchi, sherwani car ranchi, wedding car with driver ranchi, just married car ranchi, flower decorated car ranchi, wedding car booking ranchi"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Make Your Wedding Special</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Wedding Car Rental in Ranchi
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Decorated Luxury Cars, Innova Crysta & Tempo Travellers for Your Perfect Wedding Day
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917903629240"
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7903629240
              </a>
              <a
                href="https://wa.me/917903629240?text=Hi,%20I%20want%20to%20book%20wedding%20cars%20for%20my%20wedding"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
              >
                WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Wedding Car Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-xl shadow-md text-center border border-pink-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Wedding Car Options
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From elegant sedans to luxury imports - choose the perfect car for your special day
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {weddingCars.map((car, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-pink-100">
                <div className="h-40 bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center relative">
                  <Car className="w-20 h-20 text-white/50" />
                  <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-pink-600">
                    {car.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{car.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{car.seats} Seater</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {car.features.map((f, i) => (
                      <span key={i} className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-bold text-lg">{car.pricePerDay}</span>
                    <span className="text-xs text-gray-500">per day</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Best for: {car.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Wedding Packages
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`rounded-2xl p-6 ${idx === 2 ? 'bg-gradient-to-br from-pink-500 to-red-500 text-white' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-bold mb-2 ${idx === 2 ? 'text-white' : 'text-gray-800'}`}>{pkg.name}</h3>
                <p className={`text-sm mb-4 ${idx === 2 ? 'text-white/80' : 'text-gray-600'}`}>{pkg.cars}</p>
                <p className={`text-3xl font-bold mb-4 ${idx === 2 ? 'text-white' : 'text-pink-600'}`}>{pkg.price}</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 ${idx === 2 ? 'text-white' : 'text-green-500'}`} />
                    <span>{pkg.duration}</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 ${idx === 2 ? 'text-white' : 'text-green-500'}`} />
                    <span>{pkg.includes}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">
            * Custom packages available. Contact us for your specific requirements.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Us for Your Wedding
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Star, title: '500+ Weddings', desc: 'Successfully served' },
              { icon: Shield, title: 'Verified Drivers', desc: 'Background checked' },
              { icon: Calendar, title: 'On-Time Guarantee', desc: 'Never late delivery' },
              { icon: Heart, title: '5.0★ Rating', desc: 'Google verified' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} title="Wedding Car FAQs" />

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Make Your Wedding Memorable
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your wedding cars today. Early booking gets best rates and vehicle selection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917903629240"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call: +91 7903629240
            </a>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Get Wedding Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

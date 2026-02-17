import SEO from '../components/common/SEO';
import FAQ from '../components/common/FAQ';
import InternalLinks from '../components/common/InternalLinks';
import { Briefcase, Users, Clock, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const heroImg = 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&auto=format&fit=crop';
const corporateImg = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop';

export default function CorporatePage() {
  const services = [
    'Employee transportation',
    'Client meeting transfers',
    'Corporate events',
    'Airport transfers for executives',
    'Monthly rental packages',
    'Dedicated vehicles',
  ];

  const benefits = [
    { icon: <Briefcase className="w-8 h-8" />, title: 'Professional Service', description: 'Well-trained chauffeurs' },
    { icon: <Users className="w-8 h-8" />, title: 'Flexible Solutions', description: 'Customized as per needs' },
    { icon: <Clock className="w-8 h-8" />, title: 'Timely Service', description: 'Always on time' },
    { icon: <Shield className="w-8 h-8" />, title: 'Reliable & Safe', description: 'Verified drivers & cars' },
  ];

  return (
    <>
      <SEO
        title="Corporate Taxi Ranchi | Employee Transport | Monthly Cab Packages for Business"
        description="Professional corporate taxi service in Ranchi ✓ Employee transport ✓ Client meeting cabs ✓ Monthly packages ✓ Invoice billing ✓ Dedicated account manager ✓ GPS tracked. Call +91 7903629240"
        keywords="corporate taxi ranchi, corporate cab service ranchi, business taxi ranchi, employee transportation ranchi, corporate travel ranchi, office cab ranchi, company taxi service ranchi, monthly cab service ranchi, staff transportation ranchi, corporate car rental ranchi, business travel ranchi, executive cab service ranchi, office pick up drop ranchi, employee shuttle ranchi, it company cab ranchi, corporate cab booking ranchi, company car hire ranchi, bulk taxi booking ranchi, corporate transport jharkhand, office cab monthly package ranchi, corporate cab rate ranchi"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Corporate Taxi Service",
          "name": "Corporate Taxi Service in Ranchi",
          "description": "Professional corporate taxi service in Ranchi offering employee transport, client meeting transfers, monthly cab packages, and dedicated business transportation solutions.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Ranchi Cab Service",
            "telephone": "+917903629240",
            "address": { "@type": "PostalAddress", "addressLocality": "Ranchi", "addressRegion": "Jharkhand", "addressCountry": "IN" }
          },
          "areaServed": { "@type": "City", "name": "Ranchi" },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Corporate Taxi Packages",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Employee Transportation" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Client Meeting Transfers" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Monthly Corporate Packages" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Executive Airport Transfers" } }
            ]
          },
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "75", "bestRating": "5" }
        }}
      />

      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Corporate Service" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Corporate Taxi Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Professional transportation solutions for businesses. Reliable, punctual, and tailored to your corporate needs.
          </motion.p>
        </div>
      </section>

      <section className="py-16 overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Corporate Services</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Ranchi Cab Service offers comprehensive corporate transportation solutions designed to meet the unique needs of businesses in Ranchi and surrounding areas. Our professional taxi service ensures your employees, clients, and executives travel in comfort and style.
              </p>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-lg">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-xl mb-3">Why Choose Us for Corporate Travel?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dedicated account manager for your business</li>
                  <li>• Flexible billing options - monthly or per trip</li>
                  <li>• Priority booking for urgent requirements</li>
                  <li>• Detailed trip reports and invoicing</li>
                  <li>• Professional, uniformed drivers</li>
                  <li>• GPS tracking for safety and monitoring</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src={corporateImg}
                alt="Corporate Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Corporate Quote</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us for customized corporate transportation solutions
          </p>
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
              href="mailto:ranchicabservice2@gmail.com"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ customFaqs={[
        { question: "What corporate taxi packages are available in Ranchi?", answer: "We offer flexible corporate packages including daily employee pick-up/drop, monthly dedicated vehicle rental, per-trip billing, and customized solutions for IT companies, hospitals, and businesses. Packages start from ₹15,000/month for a dedicated sedan." },
        { question: "How does corporate billing work?", answer: "We provide monthly invoice billing with detailed trip logs, GST invoices, and multiple payment options (bank transfer, cheque, UPI). Each trip is documented with driver details, vehicle number, pickup/drop time, and kilometers covered." },
        { question: "Can we get a dedicated vehicle and driver?", answer: "Yes, we provide dedicated vehicles with assigned drivers for corporate clients. Your driver will be familiar with your regular routes, employees, and specific requirements. Vehicle options include Sedan, Ertiga SUV, and Innova Crysta." },
        { question: "Do you cover employee shifts and night pickups?", answer: "Yes, we provide 24/7 corporate transportation including early morning, late night, and rotational shift pickups. Night shift transportation is available with verified drivers and GPS-tracked vehicles for employee safety." },
        { question: "What safety measures do you have for corporate travel?", answer: "All vehicles are GPS-tracked in real-time, drivers are police-verified with commercial licenses, vehicles undergo regular maintenance and sanitization, and we provide trip tracking links that can be shared with HR/admin teams." },
        { question: "How do I get a corporate quote?", answer: "Call us at +91 7903629240 or email ranchicabservice2@gmail.com with your requirements (number of employees, routes, shift timings). Our corporate team will prepare a customized quote within 24 hours. Bulk discounts available for 5+ vehicle requirements." }
      ]} title="Corporate Taxi FAQs" />

      {/* Internal Links */}
      <InternalLinks />
    </>
  );
}

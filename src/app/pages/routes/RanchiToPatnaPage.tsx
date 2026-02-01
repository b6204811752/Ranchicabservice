import SEO from '../../components/common/SEO';
import { Phone, MapPin, Clock, IndianRupee, Car, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RanchiToPatnaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Ranchi to Patna Cab Service",
    "description": "Book reliable and affordable Ranchi to Patna cab service. 330 km journey with experienced drivers, clean AC vehicles, and best rates starting at ₹4,500.",
    "image": [
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=630&fit=crop",
      "https://images.unsplash.com/photo-1552975084-6e027cd345c2?w=1200&h=630&fit=crop",
      "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1200&h=630&fit=crop"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Ranchi Cab Service"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.ranchicabservice.com/ranchi-to-patna-cab",
      "priceCurrency": "INR",
      "price": "4500",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "INR"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "IN",
          "addressRegion": ["JH", "BR"]
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": "0",
            "maxValue": "1",
            "unitCode": "HUR"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": "6",
            "maxValue": "7",
            "unitCode": "HUR"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "IN",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 1,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <SEO
        title="Ranchi to Patna Cab | Book Ranchi Patna Taxi at ₹4,500 | 24/7 Available"
        description="Book Ranchi to Patna cab service at best rates. 330 km one-way & round trip taxi available 24/7. Safe, comfortable & affordable. Call +91 7903629240 now!"
        keywords="ranchi to patna cab, ranchi to patna taxi, ranchi patna cab service, ranchi to patna car rental, ranchi patna taxi fare, cab from ranchi to patna"
        schema={schema}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <nav className="text-sm mb-4">
              <Link to="/" className="hover:underline">Home</Link> / 
              <Link to="/services" className="hover:underline ml-1">Services</Link> / 
              <span className="ml-1">Ranchi to Patna Cab</span>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ranchi to Patna Cab Service
            </h1>
            <p className="text-xl mb-6">
              Book Reliable & Affordable Taxi from Ranchi to Patna | 330 km | Starting at ₹4,500
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+917903629240"
                className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: +91 7903629240
              </a>
              <a
                href="https://wa.me/917903629240?text=I want to book Ranchi to Patna cab"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="container mx-auto px-4 -mt-8 mb-12">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <MapPin className="w-10 h-10 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">330 km</div>
              <div className="text-gray-600">Distance</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Clock className="w-10 h-10 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">6-7 Hours</div>
              <div className="text-gray-600">Travel Time</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <IndianRupee className="w-10 h-10 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">₹4,500</div>
              <div className="text-gray-600">Starting Fare</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Car className="w-10 h-10 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">All Types</div>
              <div className="text-gray-600">Vehicles Available</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* About Route */}
              <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Book Ranchi to Patna Cab - Best Taxi Service
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Looking for a reliable and comfortable <strong>Ranchi to Patna cab service</strong>? Ranchi Cab Service offers the best taxi service from Ranchi to Patna with professional drivers, clean AC vehicles, and transparent pricing. Whether you need a one-way taxi or round trip, we've got you covered 24/7.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The distance from Ranchi to Patna is approximately 330 kilometers, and the journey takes around 6-7 hours depending on traffic and road conditions. Our experienced drivers know the best routes to ensure a safe and comfortable journey.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
                  Why Choose Our Ranchi to Patna Taxi Service?
                </h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Verified Drivers</h4>
                      <p className="text-gray-600 text-sm">All drivers are government verified with years of experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Clean AC Vehicles</h4>
                      <p className="text-gray-600 text-sm">Well-maintained cars with comfortable seating</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IndianRupee className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Best Rates</h4>
                      <p className="text-gray-600 text-sm">Competitive and transparent pricing with no hidden charges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">24/7 Available</h4>
                      <p className="text-gray-600 text-sm">Book anytime - we're always ready to serve</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
                  Ranchi to Patna Cab Fare & Vehicle Options
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 px-4 py-3 text-left">Vehicle Type</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Capacity</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">One Way</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Round Trip</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">Sedan (Dzire/Aura)</td>
                        <td className="border border-gray-300 px-4 py-3">4+1</td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">₹4,500</td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">₹8,500</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">SUV (Ertiga)</td>
                        <td className="border border-gray-300 px-4 py-3">6+1</td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">₹5,200</td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">₹9,800</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">Innova Crysta</td>
                        <td className="border border-gray-300 px-4 py-3">7+1</td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">₹6,000</td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold">₹11,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  *Rates are subject to change. Toll charges, parking, and state taxes extra.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
                  Popular Stops on Ranchi-Patna Route
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Ranchi - Starting Point</li>
                  <li>Ramgarh - Highway Restaurants Available</li>
                  <li>Hazaribagh - Midway Refreshment Stop</li>
                  <li>Koderma - Last Major Stop</li>
                  <li>Patna - Destination</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
                  FAQs - Ranchi to Patna Cab
                </h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Q: What is the distance from Ranchi to Patna?</h4>
                    <p className="text-gray-700">A: The distance between Ranchi and Patna is approximately 330 kilometers via NH-33 and NH-2.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Q: How much does a Ranchi to Patna cab cost?</h4>
                    <p className="text-gray-700">A: The fare starts from ₹4,500 for a sedan (one-way). Round trip and larger vehicles are also available.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Q: How long does it take to reach Patna from Ranchi by cab?</h4>
                    <p className="text-gray-700">A: It typically takes 6-7 hours depending on traffic and road conditions.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Q: Do you provide one-way taxi service?</h4>
                    <p className="text-gray-700">A: Yes, we provide both one-way and round trip taxi services from Ranchi to Patna.</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 sticky top-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Book Your Cab Now!
                </h3>
                <p className="text-gray-700 mb-6">
                  Get instant confirmation and the best rates for Ranchi to Patna taxi service.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="tel:+917903629240"
                    className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    📞 Call: +91 7903629240
                  </a>
                  <a
                    href="https://wa.me/917903629240?text=I want to book Ranchi to Patna cab"
                    className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 WhatsApp Booking
                  </a>
                  <Link
                    to="/contact"
                    className="block w-full bg-gray-800 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
                  >
                    📧 Online Booking
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-yellow-400">
                  <h4 className="font-semibold text-gray-800 mb-3">Why Book With Us?</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✅ Instant Booking Confirmation</li>
                    <li>✅ No Advance Payment</li>
                    <li>✅ Free Cancellation (24hrs before)</li>
                    <li>✅ GPS Tracked Vehicles</li>
                    <li>✅ 24/7 Customer Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

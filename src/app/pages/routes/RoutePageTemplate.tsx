import SEO from '../../components/common/SEO';
import { Phone, MapPin, Clock, IndianRupee, Car, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RouteData {
  from: string;
  to: string;
  distance: string;
  duration: string;
  sedanOneWay: string;
  sedanRoundTrip: string;
  suvOneWay: string;
  suvRoundTrip: string;
  innovaOneWay: string;
  innovaRoundTrip: string;
  stops: string[];
  slug: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  aboutText: string[];
  faqs: { question: string; answer: string }[];
}

interface RoutePageTemplateProps {
  route: RouteData;
}

export default function RoutePageTemplate({ route }: RoutePageTemplateProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${route.from} to ${route.to} Cab Service`,
    "description": route.metaDescription,
    "image": [
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=630&fit=crop"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Ranchi Cab Service"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.ranchicabservice.com/${route.slug}`,
      "priceCurrency": "INR",
      "price": route.sedanOneWay.replace(/[₹,]/g, ''),
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
          "addressCountry": "IN"
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
            "minValue": "1",
            "maxValue": "12",
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
      "ratingValue": "5.0",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <SEO
        title={route.metaTitle}
        description={route.metaDescription}
        keywords={route.metaKeywords}
        schema={schema}
      />

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16 overflow-x-hidden">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
            <nav aria-label="Breadcrumb" className="text-sm mb-4">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-1">/</span>
              <Link to="/outstation-taxi" className="hover:underline">Outstation Taxi</Link>
              <span className="mx-1">/</span>
              <span>{route.from} to {route.to}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {route.from} to {route.to} Cab Service
            </h1>
            <p className="text-base md:text-xl mb-6">
              Book Reliable & Affordable Taxi from {route.from} to {route.to} | {route.distance} | Starting at {route.sedanOneWay}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <a
                href="tel:+917903629240"
                className="w-full sm:w-auto bg-yellow-500 text-blue-900 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Call: +91 7903629240
              </a>
              <a
                href={`https://wa.me/917903629240?text=I want to book ${route.from} to ${route.to} cab`}
                className="w-full sm:w-auto bg-green-500 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition text-sm md:text-base text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
      </section>

      {/* Quick Info Cards */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-4 overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 -mt-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center">
              <MapPin className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mx-auto mb-2" aria-hidden="true" />
              <div className="text-lg md:text-2xl font-bold text-gray-800">{route.distance}</div>
              <div className="text-xs md:text-base text-gray-600">Distance</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center">
              <Clock className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mx-auto mb-2" aria-hidden="true" />
              <div className="text-lg md:text-2xl font-bold text-gray-800">{route.duration}</div>
              <div className="text-xs md:text-base text-gray-600">Travel Time</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center">
              <IndianRupee className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mx-auto mb-2" aria-hidden="true" />
              <div className="text-lg md:text-2xl font-bold text-gray-800">{route.sedanOneWay}</div>
              <div className="text-xs md:text-base text-gray-600">Starting Fare</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center">
              <Car className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mx-auto mb-2" aria-hidden="true" />
              <div className="text-lg md:text-2xl font-bold text-gray-800">All Types</div>
              <div className="text-xs md:text-base text-gray-600">Vehicles Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-8 md:py-12 overflow-x-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="lg:col-span-2">
              <section className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 mb-6 md:mb-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                  Book {route.from} to {route.to} Cab - Best Taxi Service
                </h2>
                {route.aboutText.map((text, i) => (
                  <p key={i} className="text-sm sm:text-base text-gray-700 mb-3 md:mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: text }} />
                ))}

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 mt-6 md:mt-8">
                  Why Choose Our {route.from} to {route.to} Taxi Service?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Verified Drivers</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">All drivers are government verified with years of experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Car className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Clean AC Vehicles</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Well-maintained cars with comfortable seating</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Best Rates</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Competitive and transparent pricing with no hidden charges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">24/7 Available</h4>
                      <p className="text-gray-600 text-xs sm:text-sm">Book anytime - we&apos;re always ready to serve</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 mt-6 md:mt-8">
                  {route.from} to {route.to} Cab Fare & Vehicle Options
                </h3>
                <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                  <table className="w-full border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 px-2 sm:px-4 py-3 text-left text-sm sm:text-base" scope="col">Vehicle Type</th>
                        <th className="border border-gray-300 px-2 sm:px-4 py-3 text-left text-sm sm:text-base" scope="col">Capacity</th>
                        <th className="border border-gray-300 px-2 sm:px-4 py-3 text-left text-sm sm:text-base" scope="col">One Way</th>
                        <th className="border border-gray-300 px-2 sm:px-4 py-3 text-left text-sm sm:text-base" scope="col">Round Trip</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 sm:px-4 py-3 text-sm sm:text-base">Sedan (Dzire/Aura)</td>
                        <td className="border border-gray-300 px-2 sm:px-4 py-3 text-sm sm:text-base">4+1</td>
                        <td className="border border-gray-300 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base">{route.sedanOneWay}</td>
                        <td className="border border-gray-300 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base">{route.sedanRoundTrip}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-2 sm:px-4 py-3 text-sm sm:text-base">SUV (Ertiga)</td>
                        <td className="border border-gray-300 px-2 sm:px-4 py-3 text-sm sm:text-base">6+1</td>
                        <td className="border border-gray-300 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base">{route.suvOneWay}</td>
                        <td className="border border-gray-300 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base">{route.suvRoundTrip}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 sm:px-4 py-3 text-sm sm:text-base">Innova Crysta</td>
                        <td className="border border-gray-300 px-2 sm:px-4 py-3 text-sm sm:text-base">7+1</td>
                        <td className="border border-gray-300 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base">{route.innovaOneWay}</td>
                        <td className="border border-gray-300 px-2 sm:px-4 py-3 font-semibold text-sm sm:text-base">{route.innovaRoundTrip}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3">
                  *Rates are subject to change. Toll charges, parking, and state taxes extra.
                </p>

                {route.stops.length > 0 && (
                  <>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 mt-6 md:mt-8">
                      Popular Stops on {route.from}-{route.to} Route
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                      {route.stops.map((stop, i) => (
                        <li key={i}>{stop}</li>
                      ))}
                    </ul>
                  </>
                )}

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 mt-6 md:mt-8">
                  FAQs - {route.from} to {route.to} Cab
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {route.faqs.map((faq, i) => (
                    <div key={i} className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Q: {faq.question}</h4>
                      <p className="text-gray-700 text-sm sm:text-base">A: {faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 sm:p-5 md:p-6 lg:sticky lg:top-24">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4">
                  Book Your Cab Now!
                </h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 md:mb-6">
                  Get instant confirmation and the best rates for {route.from} to {route.to} taxi service.
                </p>

                <div className="space-y-3 md:space-y-4">
                  <a
                    href="tel:+917903629240"
                    className="block w-full bg-blue-600 text-white text-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition"
                  >
                    📞 Call: +91 7903629240
                  </a>
                  <a
                    href={`https://wa.me/917903629240?text=I want to book ${route.from} to ${route.to} cab`}
                    className="block w-full bg-green-600 text-white text-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-green-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 WhatsApp Booking
                  </a>
                  <Link
                    to="/contact"
                    className="block w-full bg-gray-800 text-white text-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-900 transition"
                  >
                    📧 Online Booking
                  </Link>
                </div>

                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-yellow-400">
                  <h4 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm sm:text-base">Why Book With Us?</h4>
                  <ul className="space-y-1.5 md:space-y-2 text-xs sm:text-sm text-gray-700">
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
      </section>
    </>
  );
}

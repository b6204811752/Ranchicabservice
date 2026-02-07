import { motion } from 'motion/react';
import { Shield, Award, CheckCircle, Star, Users, Clock, MapPin, CreditCard } from 'lucide-react';

const trustStats = [
  { icon: Users, value: "500+", label: "Happy Customers", color: "text-blue-600" },
  { icon: Star, value: "5.0/5", label: "Google Rating", color: "text-yellow-500" },
  { icon: MapPin, value: "2000+", label: "Routes Covered", color: "text-green-600" },
  { icon: Clock, value: "24/7", label: "Service Available", color: "text-purple-600" }
];

const certifications = [
  { icon: Shield, title: "Govt. Verified Drivers", description: "All drivers police verified" },
  { icon: Award, title: "Best Price Guarantee", description: "Lowest rates in Ranchi" },
  { icon: CheckCircle, title: "Sanitized Vehicles", description: "Clean & hygienic cabs" },
  { icon: CreditCard, title: "Secure Payments", description: "Multiple payment options" }
];

// Media mentions - Use text logos since we don't have actual media partnerships yet
const mediaMentions = [
  { name: "Google", rating: "5.0 ★" },
  { name: "JustDial", rating: "4.5 ★" },
  { name: "Facebook", rating: "4.9 ★" }
];

export default function TrustIndicators() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {trustStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 mb-3`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-center text-xl font-bold text-gray-900 mb-6">
            Why Customers Trust Us
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 text-center border border-blue-100"
              >
                <cert.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900 text-sm">{cert.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform Ratings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-4">Rated on multiple platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {mediaMentions.map((media, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                  <span className="font-semibold text-gray-700">{media.name}</span>
                  <span className="text-yellow-500 font-bold">{media.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            "itemReviewed": {
              "@type": "LocalBusiness",
              "name": "Ranchi Cab Service"
            },
            "ratingValue": "5.0",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "500",
            "reviewCount": "500"
          })
        }} />
      </div>
    </section>
  );
}

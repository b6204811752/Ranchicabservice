import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function ComparisonTable() {
  const features = [
    { feature: "24/7 Availability", us: true, others: false },
    { feature: "Verified Drivers", us: true, others: false },
    { feature: "GPS Tracking", us: true, others: false },
    { feature: "Fixed Pricing", us: true, others: false },
    { feature: "Multiple Payment Options", us: true, others: true },
    { feature: "Clean AC Vehicles", us: true, others: true },
    { feature: "Instant Booking Confirmation", us: true, others: false },
    { feature: "No Cancellation Charges (24hrs before)", us: true, others: false },
    { feature: "Corporate Packages", us: true, others: false },
    { feature: "Customer Support", us: "24/7", others: "Limited" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Ranchi Cab Service?
          </h2>
          <p className="text-xl text-blue-200">
            See how we compare with other taxi services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
        >
          <div className="grid grid-cols-3 bg-gradient-to-r from-blue-600 to-purple-600 p-4 font-bold text-lg">
            <div className="col-span-1">Features</div>
            <div className="text-center">Ranchi Cab Service</div>
            <div className="text-center">Others</div>
          </div>

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'} border-b border-white/10`}
            >
              <div className="col-span-1 font-medium">{item.feature}</div>
              <div className="text-center">
                {typeof item.us === 'boolean' ? (
                  item.us ? (
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-green-500 rounded-full">
                      <Check className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                      <X className="w-5 h-5" />
                    </div>
                  )
                ) : (
                  <span className="text-green-400 font-semibold">{item.us}</span>
                )}
              </div>
              <div className="text-center">
                {typeof item.others === 'boolean' ? (
                  item.others ? (
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-green-500 rounded-full opacity-50">
                      <Check className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-red-500 rounded-full opacity-50">
                      <X className="w-5 h-5" />
                    </div>
                  )
                ) : (
                  <span className="text-gray-400">{item.others}</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <a
            href="tel:+917903629240"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-2xl transition-all transform hover:scale-105"
          >
            Book Now & Experience the Difference
          </a>
        </motion.div>
      </div>
    </section>
  );
}

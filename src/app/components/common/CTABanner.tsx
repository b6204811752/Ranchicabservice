import { Phone, MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface CTABannerProps {
  variant?: 'primary' | 'secondary' | 'gradient' | 'dark';
  title?: string;
  description?: string;
  showButtons?: boolean;
}

export default function CTABanner({ 
  variant = 'primary',
  title = "Ready to Book Your Ride?",
  description = "Get instant confirmation. Professional drivers. Best rates guaranteed.",
  showButtons = true
}: CTABannerProps) {
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-800",
    secondary: "bg-gradient-to-r from-purple-600 to-pink-600",
    gradient: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600",
    dark: "bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900"
  };

  return (
    <section className={`py-12 md:py-16 ${variants[variant]} relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-yellow-300 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-white/90 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {description}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
            >
              {[
                '✓ 24/7 Available',
                '✓ Verified Drivers',
                '✓ Clean Vehicles',
                '✓ Best Rates'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <span className="text-lg font-semibold">{feature}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          {showButtons && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {/* Call Now Button */}
              <motion.a
                href="tel:+917903629240"
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-80">Call Now</div>
                    <div className="text-xl font-black">+91 7903629240</div>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.a>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/917903629240?text=Hi, I want to book a cab"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-90">Book via WhatsApp</div>
                    <div className="text-lg font-semibold">Instant Response</div>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.a>

              {/* Book Online Button */}
              <Link to="/#booking-form">
                <motion.button
                  onClick={() => {
                    const bookingForm = document.getElementById('booking-form');
                    if (bookingForm) {
                      bookingForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white hover:bg-gray-100 text-blue-600 px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm opacity-80">Book Online</div>
                      <div className="text-lg font-semibold">Fill the Form</div>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

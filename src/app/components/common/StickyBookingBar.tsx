import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-2xl border-t-4 border-yellow-400"
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
              <div className="text-center sm:text-left hidden sm:block">
                <p className="font-bold text-base sm:text-lg">Need a Cab? Book Now!</p>
                <p className="text-xs text-blue-100">Best rates guaranteed • 24/7 available</p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 w-full sm:w-auto">
                <motion.a
                  href="tel:+917903629240"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Call to book a cab now"
                  className="flex items-center gap-1 sm:gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm shadow-lg transition-all flex-1 sm:flex-initial justify-center"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Call</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/917903629240"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Send a WhatsApp message to book"
                  className="flex items-center gap-1 sm:gap-2 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm shadow-lg transition-all flex-1 sm:flex-initial justify-center"
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">WhatsApp</span>
                </motion.a>
                <Link to="/#booking-form">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const bookingForm = document.getElementById('booking-form');
                      if (bookingForm) {
                        bookingForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }}
                    className="flex items-center gap-1 sm:gap-2 bg-white hover:bg-gray-100 text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm shadow-lg transition-all w-full justify-center"
                  >
                    <Car className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline">Book</span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const recentBookings = [
  { name: "Rahul K.", route: "Ranchi → Patna", time: "2 min ago" },
  { name: "Priya S.", route: "Airport Pickup", time: "5 min ago" },
  { name: "Amit G.", route: "Ranchi → Jamshedpur", time: "8 min ago" },
  { name: "Sunita D.", route: "Local Ranchi", time: "12 min ago" },
  { name: "Vikash M.", route: "Ranchi → Bokaro", time: "15 min ago" },
  { name: "Neha P.", route: "Airport Drop", time: "18 min ago" },
];

export default function LiveBookingStats() {
  const [currentBooking, setCurrentBooking] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show notification periodically
    const interval = setInterval(() => {
      setIsVisible(true);
      setCurrentBooking((prev) => (prev + 1) % recentBookings.length);
      
      // Hide after 4 seconds
      setTimeout(() => setIsVisible(false), 4000);
    }, 12000); // Show every 12 seconds

    // Show first notification after 5 seconds
    setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 4000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="fixed bottom-24 left-4 z-40 max-w-xs"
        >
          <div className="bg-white rounded-lg shadow-2xl border border-green-200 p-4 flex items-start gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {recentBookings[currentBooking].name} just booked!
              </p>
              <p className="text-sm text-gray-600 truncate">
                {recentBookings[currentBooking].route}
              </p>
              <p className="text-xs text-green-600 mt-1 font-medium">
                {recentBookings[currentBooking].time}
              </p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 text-lg leading-none"
              aria-label="Close notification"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

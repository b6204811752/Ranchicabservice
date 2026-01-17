import { Shield, Award, Users, CheckCircle, Clock, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustBadges() {
  const badges = [
    { icon: <Shield className="w-6 h-6" />, text: "100% Safe", color: "from-green-500 to-emerald-600" },
    { icon: <Award className="w-6 h-6" />, text: "Govt. Verified", color: "from-blue-500 to-indigo-600" },
    { icon: <Users className="w-6 h-6" />, text: "500+ Happy Customers", color: "from-purple-500 to-pink-600" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Best Price Guarantee", color: "from-orange-500 to-red-600" },
    { icon: <Clock className="w-6 h-6" />, text: "24/7 Available", color: "from-cyan-500 to-blue-600" },
    { icon: <Star className="w-6 h-6" />, text: "5 Star Rated", color: "from-yellow-500 to-amber-600" },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 py-8 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <div className={`p-3 rounded-full bg-gradient-to-r ${badge.color} text-white mb-2`}>
                {badge.icon}
              </div>
              <p className="text-xs font-semibold text-gray-700">{badge.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

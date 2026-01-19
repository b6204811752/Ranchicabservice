import { MapPin, Navigation, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceArea {
  name: string;
  distance: string;
  coverage: 'primary' | 'secondary';
  popular?: boolean;
}

export default function ServiceAreas() {
  const serviceAreas: ServiceArea[] = [
    { name: 'Ranchi', distance: 'City', coverage: 'primary', popular: true },
    { name: 'Patna', distance: '330 km', coverage: 'primary', popular: true },
    { name: 'Kolkata', distance: '425 km', coverage: 'primary', popular: true },
    { name: 'Jamshedpur', distance: '135 km', coverage: 'primary', popular: true },
    { name: 'Bokaro', distance: '110 km', coverage: 'primary', popular: true },
    { name: 'Dhanbad', distance: '150 km', coverage: 'primary', popular: true },
    { name: 'Hazaribagh', distance: '90 km', coverage: 'secondary' },
    { name: 'Gaya', distance: '175 km', coverage: 'secondary' },
    { name: 'Daltonganj', distance: '155 km', coverage: 'secondary' },
    { name: 'Dumka', distance: '180 km', coverage: 'secondary' },
    { name: 'Giridih', distance: '125 km', coverage: 'secondary' },
    { name: 'Deoghar', distance: '165 km', coverage: 'secondary' },
    { name: 'Chaibasa', distance: '120 km', coverage: 'secondary' },
    { name: 'Ramgarh', distance: '35 km', coverage: 'secondary' },
    { name: 'Gumla', distance: '78 km', coverage: 'secondary' },
  ];

  const localAreas = [
    'Doranda', 'Lalpur', 'Kanke', 'Harmu', 'Bariatu',
    'Morabadi', 'Hinoo', 'Ranchi Airport', 'Birsa Munda Airport',
    'HEC', 'MECON', 'SAIL', 'Industrial Area'
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg mb-4">
            <MapPin className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Service Areas
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide reliable cab services across Jharkhand and neighboring states
          </p>
        </motion.div>

        {/* Outstation Cities */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <Navigation className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-800">Outstation Coverage</h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative rounded-xl p-4 shadow-md hover:shadow-xl transition-all ${
                  area.coverage === 'primary'
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
                    : 'bg-white text-gray-700 border-2 border-gray-200'
                }`}
              >
                {area.popular && (
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-lg">{area.name}</h4>
                    <p className={`text-sm ${area.coverage === 'primary' ? 'text-white/80' : 'text-gray-500'}`}>
                      {area.distance} from Ranchi
                    </p>
                  </div>
                  <CheckCircle className={`w-5 h-5 ${area.coverage === 'primary' ? 'text-white' : 'text-green-500'}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Local Areas in Ranchi */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <MapPin className="w-6 h-6 text-purple-600" />
            <h3 className="text-2xl font-bold text-gray-800">Local Coverage in Ranchi</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-gray-100"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {localAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-3 py-2 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-700 mb-4">
            Don't see your location? We cover many more areas!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+917903629240"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all"
            >
              Call to Confirm Availability
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

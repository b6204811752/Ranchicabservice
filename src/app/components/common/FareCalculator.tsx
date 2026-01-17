import { useState } from 'react';
import { Calculator, Car } from 'lucide-react';
import { motion } from 'motion/react';

export default function FareCalculator() {
  const [distance, setDistance] = useState('');
  const [vehicleType, setVehicleType] = useState('sedan');
  const [fare, setFare] = useState<number | null>(null);

  const rates = {
    sedan: { local: 10, outstation: 12 },
    suv: { local: 14, outstation: 16 },
    innova: { local: 16, outstation: 18 },
  };

  const calculateFare = () => {
    const dist = parseFloat(distance);
    if (dist && vehicleType) {
      const rate = rates[vehicleType as keyof typeof rates].outstation;
      const calculatedFare = dist * rate;
      setFare(calculatedFare);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-2 border-blue-100">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
          <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Quick Fare Estimator
        </h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Distance (km)</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="Enter distance"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Vehicle Type</label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="sedan">Sedan (Dzire/Aura)</option>
            <option value="suv">SUV (Ertiga)</option>
            <option value="innova">Innova Crysta</option>
          </select>
        </div>
        
        <motion.button
          onClick={calculateFare}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg transition-all flex items-center justify-center gap-2">
          <Car className="w-4 h-4 sm:w-5 sm:h-5" />
          Calculate Fare
        </motion.button>
        
        {fare !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 sm:p-6 text-center"
          >
            <p className="text-xs sm:text-sm text-gray-600 mb-2">Estimated Fare</p>
            <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              ₹{fare.toFixed(0)}
            </p>
            <p className="text-xs text-gray-500 mt-2">*Approximate fare. Final charges may vary</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

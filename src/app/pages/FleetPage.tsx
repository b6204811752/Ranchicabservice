import { Helmet } from 'react-helmet-async';
import { Car, Users, Wind } from 'lucide-react';

export default function FleetPage() {
  const vehicles = [
    {
      name: 'Maruti Ertiga',
      image: 'https://images.unsplash.com/photo-1573474542-c8d1d2f63ec4?w=600',
      seats: '6+1 Seater',
      ac: true,
      luggage: '3-4 Bags',
      localRate: '₹12/km',
      outstationRate: '₹14/km',
      features: ['AC', 'Music System', 'Spacious', 'Family Car'],
    },
    {
      name: 'Hyundai Aura',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600',
      seats: '4+1 Seater',
      ac: true,
      luggage: '2-3 Bags',
      localRate: '₹10/km',
      outstationRate: '₹12/km',
      features: ['AC', 'Comfortable', 'Fuel Efficient', 'Sedan'],
    },
    {
      name: 'Maruti Dzire',
      image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=600',
      seats: '4+1 Seater',
      ac: true,
      luggage: '2-3 Bags',
      localRate: '₹10/km',
      outstationRate: '₹12/km',
      features: ['AC', 'Popular Choice', 'Reliable', 'Sedan'],
    },
    {
      name: 'Toyota Innova Crysta',
      image: 'https://images.unsplash.com/photo-1748215210939-ad8b6c8c086d?w=600',
      seats: '7+1 Seater',
      ac: true,
      luggage: '5-6 Bags',
      localRate: '₹16/km',
      outstationRate: '₹18/km',
      features: ['AC', 'Premium', 'Spacious', 'SUV'],
    },
    {
      name: 'Audi',
      image: 'https://images.unsplash.com/photo-1692098861062-e6b4b4ec96bc?w=600',
      seats: '4+1 Seater',
      ac: true,
      luggage: '3-4 Bags',
      localRate: 'On Request',
      outstationRate: 'On Request',
      features: ['Luxury', 'Premium', 'High-end', 'Executive'],
    },
    {
      name: 'BMW',
      image: 'https://images.unsplash.com/photo-1731142582229-e0ee70302c02?w=600',
      seats: '4+1 Seater',
      ac: true,
      luggage: '3-4 Bags',
      localRate: 'On Request',
      outstationRate: 'On Request',
      features: ['Luxury', 'Premium', 'High-end', 'Executive'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Fleet - Car Rental Options | Ranchi Cab Service</title>
        <meta
          name="description"
          content="Explore our fleet of well-maintained vehicles. From sedans to SUVs and luxury cars. Maruti Dzire, Ertiga, Toyota Innova, Audi, BMW available. Call +91 7903629240"
        />
      </Helmet>

      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Fleet of Vehicles
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Wide range of well-maintained, clean, and comfortable vehicles to suit every need and budget
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{vehicle.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Users className="w-5 h-5 text-blue-600" />
                      <span>{vehicle.seats}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Wind className="w-5 h-5 text-blue-600" />
                      <span>AC Available</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <Car className="w-5 h-5 text-blue-600" />
                      <span>{vehicle.luggage} Capacity</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Local:</span>
                      <span className="font-bold text-blue-600">{vehicle.localRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Outstation:</span>
                      <span className="font-bold text-blue-600">{vehicle.outstationRate}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Book Your Preferred Vehicle</h2>
          <p className="text-xl mb-8 text-blue-100">
            Call us now to check availability and book your ride
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917903629240"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call: +91 7903629240
            </a>
            <a
              href="https://wa.me/917903629240"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

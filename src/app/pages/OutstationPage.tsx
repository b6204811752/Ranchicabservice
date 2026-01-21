import { Helmet } from 'react-helmet-async';
import { MapPin, ArrowRight, Check, Phone, Car } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function OutstationPage() {
  const [formData, setFormData] = useState({
    from: 'Ranchi',
    to: '',
    date: '',
    tripType: 'one-way',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Outstation Booking:\nFrom: ${formData.from}\nTo: ${formData.to}\nDate: ${formData.date}\nTrip: ${formData.tripType}\nPhone: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/917903629240?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const routes = [
    { destination: 'Patna', distance: '330 km', duration: '6-7 hours', oneWay: '₹4,500', roundTrip: '₹8,500' },
    { destination: 'Kolkata', distance: '425 km', duration: '8-9 hours', oneWay: '₹6,000', roundTrip: '₹11,500' },
    { destination: 'Jamshedpur', distance: '135 km', duration: '3-4 hours', oneWay: '₹2,200', roundTrip: '₹4,000' },
    { destination: 'Bokaro', distance: '110 km', duration: '2-3 hours', oneWay: '₹1,800', roundTrip: '₹3,300' },
    { destination: 'Dhanbad', distance: '150 km', duration: '3-4 hours', oneWay: '₹2,400', roundTrip: '₹4,500' },
    { destination: 'Hazaribagh', distance: '90 km', duration: '2 hours', oneWay: '₹1,500', roundTrip: '₹2,800' },
    { destination: 'Gaya', distance: '230 km', duration: '5 hours', oneWay: '₹3,500', roundTrip: '₹6,500' },
    { destination: 'Durgapur', distance: '240 km', duration: '5 hours', oneWay: '₹3,600', roundTrip: '₹6,800' },
    { destination: 'Asansol', distance: '260 km', duration: '5-6 hours', oneWay: '₹3,900', roundTrip: '₹7,300' },
  ];

  const features = [
    'One-way and round trip options',
    'Well-maintained AC vehicles',
    'Experienced highway drivers',
    'Transparent pricing',
    'No hidden charges',
    'Flexible payment options',
    'Clean and comfortable cars',
    '24/7 customer support',
  ];

  const vehicles = [
    { name: 'Maruti Dzire', seats: '4+1', rate: '₹12/km' },
    { name: 'Maruti Ertiga', seats: '6+1', rate: '₹14/km' },
    { name: 'Toyota Innova Crysta', seats: '7+1', rate: '₹18/km' },
  ];

  return (
    <>
      <Helmet>
        <title>Outstation Taxi from Ranchi | Ranchi to Patna, Kolkata, Jamshedpur Cab @ Best Price</title>
        <meta
          name="description"
          content="🚗 Book Outstation Cab from Ranchi ✓ Ranchi to Patna ₹4,500 ✓ Ranchi to Kolkata ₹6,000 ✓ AC Cars ✓ One-Way & Round Trip ✓ Experienced Drivers. Call +91 7903629240"
        />
        <meta
          name="keywords"
          content="outstation taxi ranchi, ranchi to patna cab, ranchi to kolkata taxi, ranchi to jamshedpur cab, ranchi to bokaro taxi, ranchi to dhanbad cab, ranchi to hazaribagh taxi, outstation cab fare ranchi, one way taxi ranchi, round trip cab ranchi, highway taxi ranchi, intercity cab ranchi"
        />
        <meta property="og:title" content="Outstation Taxi from Ranchi - Book Cabs to Patna, Kolkata & More" />
        <meta property="og:description" content="Comfortable outstation cabs from Ranchi to nearby cities. Best rates, experienced drivers, AC cars. Book now!" />
        <meta property="og:url" content="https://ranchicabservice.com/outstation-taxi" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TripAction",
            "name": "Outstation Taxi Service from Ranchi",
            "description": "Book outstation cabs from Ranchi to Patna, Kolkata, Jamshedpur and other cities",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ranchi Cab Service",
              "telephone": "+917903629240"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Outstation Taxi" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/80"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Outstation Taxi Service from Ranchi
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Book one-way or round trip cabs from Ranchi to nearby cities. Comfortable, safe, and affordable outstation travel.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+917903629240"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/917903629240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <h2 className="text-2xl font-bold mb-6 text-center">Book Outstation Cab</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">From</label>
                  <input
                    type="text"
                    required
                    value={formData.from}
                    onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">To</label>
                  <input
                    type="text"
                    required
                    value={formData.to}
                    onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                    placeholder="Enter destination"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Travel Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Trip Type</label>
                  <select
                    value={formData.tripType}
                    onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="one-way">One Way</option>
                    <option value="round-trip">Round Trip</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 Your Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Get Quote via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Outstation Routes from Ranchi
            </h2>
            <p className="text-xl text-gray-600">
              Best rates for all major destinations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Ranchi</h3>
                    <p className="text-sm text-gray-500">Starting point</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div className="text-right">
                    <h3 className="text-2xl font-bold text-gray-900">{route.destination}</h3>
                    <p className="text-sm text-gray-500">Destination</p>
                  </div>
                </div>
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Distance:</span>
                    <span className="font-semibold">{route.distance}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{route.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">One Way:</span>
                    <span className="text-xl font-bold text-blue-600">{route.oneWay}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Round Trip:</span>
                    <span className="text-xl font-bold text-green-600">{route.roundTrip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Outstation Cab Service?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800"
                alt="Outstation Taxi Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Available Vehicles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Vehicles for Outstation
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect vehicle for your journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-md text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                <p className="text-gray-600 mb-4">{vehicle.seats} Seater</p>
                <p className="text-3xl font-bold text-blue-600">{vehicle.rate}</p>
                <p className="text-sm text-gray-500 mt-2">Per kilometer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book Your Outstation Cab Today
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Call now or send us a WhatsApp message for instant booking and best rates
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#booking-form">
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 shadow-lg">
                <Car className="w-5 h-5" />
                <span>Book Online</span>
              </button>
            </Link>
            <a
              href="tel:+917903629240"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>+91 7903629240</span>
            </a>
            <a
              href="https://wa.me/917903629240"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

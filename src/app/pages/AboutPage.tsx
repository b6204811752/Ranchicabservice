import { Helmet } from 'react-helmet-async';
import { Shield, Users, Award, Heart, Target, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Safety First',
      description: 'Your safety is our top priority with verified drivers and well-maintained vehicles',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Customer Satisfaction',
      description: 'We go the extra mile to ensure every journey exceeds expectations',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Quality Service',
      description: 'Professional service with attention to detail in every aspect',
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Reliability',
      description: 'On-time pickups and dependable service you can count on',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '50,000+', label: 'Trips Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Vehicles' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Ranchi Cab Service | Best Taxi Service in Ranchi</title>
        <meta
          name="description"
          content="Learn about Ranchi Cab Service, the leading taxi service provider in Ranchi. With 15+ years of experience and 10,000+ happy customers, we offer safe, reliable, and affordable cab services."
        />
        <meta
          name="keywords"
          content="about ranchi cab service, taxi company ranchi, cab service jharkhand, ranchi taxi company"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Ranchi Cab Service
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner for safe, reliable, and affordable taxi services in Ranchi and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Ranchi Cab Service was founded with a simple mission: to provide safe, reliable, and affordable taxi services to the people of Ranchi and nearby cities. Over the years, we have grown from a small startup to one of the most trusted cab service providers in Jharkhand.
                </p>
                <p>
                  With over 15 years of experience in the transportation industry, we have served thousands of satisfied customers, completed over 50,000 successful trips, and built a reputation for excellence that speaks for itself.
                </p>
                <p>
                  Our commitment to customer satisfaction, safety, and reliability has made us the preferred choice for both personal and corporate travel in Ranchi, West Bengal, and Bihar.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800"
                alt="Ranchi Cab Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800"
                alt="Why Choose Us"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Ranchi Cab Service?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Verified & Experienced Drivers</h3>
                    <p className="text-gray-600">All our drivers are background-verified, licensed, and experienced professionals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Well-Maintained Fleet</h3>
                    <p className="text-gray-600">Regular maintenance and cleaning ensure a comfortable and safe ride every time.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">No hidden charges. What you see is what you pay.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">24/7 Customer Support</h3>
                    <p className="text-gray-600">Round-the-clock support to assist you whenever you need help.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers and experience the best cab service in Ranchi
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917903629240"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call: +91 7903629240
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

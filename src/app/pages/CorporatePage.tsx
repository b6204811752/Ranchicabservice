import { Helmet } from 'react-helmet-async';
import { Briefcase, Users, Clock, Shield } from 'lucide-react';

export default function CorporatePage() {
  const services = [
    'Employee transportation',
    'Client meeting transfers',
    'Corporate events',
    'Airport transfers for executives',
    'Monthly rental packages',
    'Dedicated vehicles',
  ];

  const benefits = [
    { icon: <Briefcase className="w-8 h-8" />, title: 'Professional Service', description: 'Well-trained chauffeurs' },
    { icon: <Users className="w-8 h-8" />, title: 'Flexible Solutions', description: 'Customized as per needs' },
    { icon: <Clock className="w-8 h-8" />, title: 'Timely Service', description: 'Always on time' },
    { icon: <Shield className="w-8 h-8" />, title: 'Reliable & Safe', description: 'Verified drivers & cars' },
  ];

  return (
    <>
      <Helmet>
        <title>Corporate Taxi Service in Ranchi | Business Transportation Solutions</title>
        <meta
          name="description"
          content="Professional corporate taxi service in Ranchi for employee transport, client meetings, and corporate events. Monthly packages available. Call +91 7903629240"
        />
      </Helmet>

      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Corporate Taxi Service
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professional transportation solutions for businesses. Reliable, punctual, and tailored to your corporate needs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Corporate Services</h2>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-lg">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-4c4c79fd09a0?w=800"
                alt="Corporate Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-blue-600 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Corporate Quote</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us for customized corporate transportation solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917903629240"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call: +91 7903629240
            </a>
            <a
              href="mailto:rohittravels10@gmail.com"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

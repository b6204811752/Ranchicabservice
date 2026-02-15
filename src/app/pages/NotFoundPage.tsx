import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { Home, Phone } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Ranchi Cab Service"
        robots="noindex, nofollow"
      />

      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-50 to-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              The page you're looking for seems to have taken a wrong turn. Don't worry, we'll help you get back on track!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Home className="w-5 h-5" />
              <span>Go to Homepage</span>
            </Link>
            <a
              href="tel:+917903629240"
              className="inline-flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </a>
          </div>

          <div className="mt-12">
            <p className="text-gray-600 mb-4">Popular Pages:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/services" className="text-blue-600 hover:underline">Our Services</Link>
              <span className="text-gray-400">•</span>
              <Link to="/local-taxi" className="text-blue-600 hover:underline">Local Taxi</Link>
              <span className="text-gray-400">•</span>
              <Link to="/outstation-taxi" className="text-blue-600 hover:underline">Outstation Taxi</Link>
              <span className="text-gray-400">•</span>
              <Link to="/airport-taxi" className="text-blue-600 hover:underline">Airport Taxi</Link>
              <span className="text-gray-400">•</span>
              <Link to="/fleet" className="text-blue-600 hover:underline">Our Fleet</Link>
              <span className="text-gray-400">•</span>
              <Link to="/about" className="text-blue-600 hover:underline">About Us</Link>
              <span className="text-gray-400">•</span>
              <Link to="/contact" className="text-blue-600 hover:underline">Contact Us</Link>
              <span className="text-gray-400">•</span>
              <Link to="/about" className="text-blue-600 hover:underline">About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

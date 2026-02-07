import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Star } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '@/assets/images/logos/ranchicabserviceslogo.webp';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-12 pb-24 md:pb-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img 
              src={logo} 
              alt="Ranchi Cab Service" 
              className="h-16 w-auto object-contain mb-4 bg-white p-2 rounded-lg"
              width="64"
              height="64"
              loading="lazy"
            />
            <h3 className="text-xl font-bold mb-4">Ranchi Cab Service</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for safe, reliable, and affordable taxi services in Ranchi and nearby cities.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.2 }} 
                transition={{ duration: 0.3 }}
                href="https://g.page/r/CdfnA1OiyAQkEAE/review" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Review us on Google"
                className="hover:text-yellow-400 transition-colors"
                title="Review us on Google"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }} 
                transition={{ duration: 0.5 }}
                href="https://www.facebook.com/ranchicabservice" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }} 
                transition={{ duration: 0.5 }}
                href="https://twitter.com/ranchicabs" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 360 }} 
                transition={{ duration: 0.5 }}
                href="https://www.instagram.com/ranchicabservice" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/fleet" className="text-gray-400 hover:text-white transition-colors">Our Fleet</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/outstation-taxi" className="text-gray-400 hover:text-white transition-colors">Outstation Taxi</Link></li>
              <li><Link to="/local-taxi-ranchi" className="text-gray-400 hover:text-white transition-colors">Local Taxi</Link></li>
              <li><Link to="/airport-taxi" className="text-gray-400 hover:text-white transition-colors">Airport Transfer</Link></li>
              <li><Link to="/corporate-taxi" className="text-gray-400 hover:text-white transition-colors">Corporate Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <a href="tel:+917903629240" className="text-gray-400 hover:text-white">
                  +91 7903629240
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <a href="mailto:rohittravels10@gmail.com" className="text-gray-400 hover:text-white">
                  rohittravels10@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Ranchi, Jharkhand, India
                </span>
              </li>
            </ul>
            {/* Google Review Badge */}
            <a 
              href="https://g.page/r/CdfnA1OiyAQkEAE/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors group"
            >
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">Rate us on Google</span>
              <span className="text-yellow-400 font-bold">5.0★</span>
            </a>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234025.91634936664!2d85.1347!3d23.3441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ranchi Cab Service location on Google Maps"
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Ranchi Cab Service. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

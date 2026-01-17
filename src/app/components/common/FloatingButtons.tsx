import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-24 right-4 md:right-6 flex flex-col space-y-3 z-[45]">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917903629240?text=Hi, I want to book a cab"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 whitespace-nowrap text-sm hidden md:inline">
          WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+917903629240"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 whitespace-nowrap text-sm hidden md:inline">
          Call Now
        </span>
      </a>
    </div>
  );
}

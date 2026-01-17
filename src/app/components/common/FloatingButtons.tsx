import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917903629240?text=Hi, I want to book a cab"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 whitespace-nowrap">
          WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+917903629240"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 whitespace-nowrap">
          Call Now
        </span>
      </a>
    </div>
  );
}

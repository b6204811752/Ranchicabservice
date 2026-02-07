import { X, Gift, Clock, Percent } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PromoBannerProps {
  promoCode?: string;
  discount?: string;
  message?: string;
  expiryText?: string;
}

export default function PromoBanner({ 
  promoCode = "FIRST20", 
  discount = "20% OFF", 
  message = "on your first booking!",
  expiryText = "Limited time offer"
}: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [copied, setCopied] = useState(false);

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = sessionStorage.getItem('promoBannerDismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('promoBannerDismissed', 'true');
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white relative overflow-hidden"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center sm:text-left">
            {/* Icon */}
            <div className="hidden sm:flex items-center justify-center w-10 h-10 bg-white/20 rounded-full">
              <Gift className="w-5 h-5" />
            </div>

            {/* Message */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <span className="font-bold text-lg sm:text-xl flex items-center gap-2">
                <Percent className="w-5 h-5 sm:hidden" />
                {discount}
              </span>
              <span className="text-white/90">{message}</span>
            </div>

            {/* Promo Code */}
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-mono font-bold text-sm transition-all border border-white/30"
            >
              <span>Code: {promoCode}</span>
              <span className="text-xs opacity-75">
                {copied ? '✓ Copied!' : 'Click to copy'}
              </span>
            </button>

            {/* Expiry */}
            <div className="hidden md:flex items-center gap-1 text-sm text-white/80">
              <Clock className="w-4 h-4" />
              {expiryText}
            </div>

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss promo banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Promo Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": `${discount} ${message}`,
            "description": `Use code ${promoCode} to get ${discount} on your first cab booking with Ranchi Cab Service`,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Ranchi Cab Service"
            }
          })
        }} />
      </motion.div>
    </AnimatePresence>
  );
}

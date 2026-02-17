import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    try {
      // Send to Google Forms for collection
      const formId = '1FAIpQLSeKQs7fzcpvRyNkHvxxxehYWkwXHk_gX9XDx9XEx2ptaw609g';
      const formUrl = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
      const formBody = new URLSearchParams({
        'entry.533887689': 'Newsletter Subscriber',
        'entry.354045119': email,
        'entry.1860281689': 'Newsletter Subscription',
        'entry.1418006924': '-',
        'entry.993924594': new Date().toISOString().split('T')[0],
        'entry.594137324': '-',
      });

      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });
      
      setStatus('success');
      setMessage('Thank you for subscribing! We will send you exclusive offers.');
      setEmail('');
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-2xl"
          >
            <Mail className="w-10 h-10 text-blue-600" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get Exclusive Offers & Updates
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for special discounts, travel tips, and the latest updates from Ranchi Cab Service
          </p>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                disabled={status === 'loading'}
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg disabled:opacity-50 text-base"
              />
              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Subscribe</span>
                  </>
                )}
              </motion.button>
            </div>

            {/* Status Messages */}
            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mt-4 px-6 py-3 rounded-lg flex items-center gap-2 justify-center ${
                    status === 'success'
                      ? 'bg-green-700 text-white'
                      : 'bg-red-500 text-white'
                  }`}
                >
                  {status === 'success' && <CheckCircle className="w-5 h-5" />}
                  <p className="text-sm font-medium">{message}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Privacy Note */}
          <p className="text-sm text-white/90 mt-6">
            We respect your privacy. Unsubscribe anytime. No spam, ever!
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
            >
              <div className="text-3xl font-bold mb-1">20%</div>
              <div className="text-sm text-white/90">First Booking Discount</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
            >
              <div className="text-3xl font-bold mb-1">🎁</div>
              <div className="text-sm text-white/90">Exclusive Offers Monthly</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
            >
              <div className="text-3xl font-bold mb-1">✈️</div>
              <div className="text-sm text-white/90">Travel Tips & Updates</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I book a cab in Ranchi?",
      answer: "You can book a cab by calling +91 7903629240, sending a WhatsApp message, or using our online booking form. We provide instant confirmation and 24/7 booking service."
    },
    {
      question: "What are your taxi rates in Ranchi?",
      answer: "Our local taxi rates start from ₹10/km for sedans and ₹14/km for SUVs. Outstation rates are ₹12/km for sedans and ₹16/km for SUVs. We offer special packages for hourly rentals and airport transfers."
    },
    {
      question: "Do you provide outstation cab service from Ranchi?",
      answer: "Yes, we provide outstation cab service to all major cities including Patna (₹4,500), Kolkata (₹6,000), Jamshedpur (₹2,200), Bokaro, Dhanbad, and more. Both one-way and round trip options are available."
    },
    {
      question: "Are your drivers verified and experienced?",
      answer: "Absolutely! All our drivers are government-verified, police-verified, and have extensive experience. They are professional, courteous, and well-trained in customer service and safe driving."
    },
    {
      question: "What types of vehicles do you have?",
      answer: "We have a wide range of vehicles including Maruti Dzire, Hyundai Aura, Maruti Ertiga, Toyota Innova Crysta, Audi, and BMW. All vehicles are well-maintained, clean, and air-conditioned."
    },
    {
      question: "Do you provide 24/7 taxi service?",
      answer: "Yes, we are available 24 hours a day, 7 days a week, including all holidays. You can book a cab anytime for emergency travel, airport transfers, or outstation trips."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 24 hours before the scheduled trip are free. Cancellations within 24 hours may incur a small charge. Please contact us for specific details."
    },
    {
      question: "Do you provide airport taxi service?",
      answer: "Yes, we provide reliable airport pickup and drop services for Ranchi airport (Birsa Munda Airport). We offer flight tracking, meet & greet service, and luggage assistance 24/7."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including cash, UPI, Google Pay, PhonePe, Paytm, credit/debit cards, and bank transfers. You can choose your preferred payment method at the time of booking."
    },
    {
      question: "Do you offer corporate taxi services?",
      answer: "Yes, we provide customized corporate taxi solutions including monthly packages, dedicated vehicles, professional drivers, and customized billing. Contact us for corporate inquiries and special rates."
    }
  ];

  // Generate FAQPage schema for rich snippets in Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* FAQPage Schema for Google Rich Snippets */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg mb-3 sm:mb-4">
            <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-base sm:text-xl text-gray-600 mt-3 sm:mt-4">
            Everything you need to know about Ranchi Cab Service
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center text-left hover:bg-blue-50 transition-all"
              >
                <span className="font-semibold text-base sm:text-lg text-gray-800 pr-3 sm:pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="mb-6">Our team is here to help you 24/7</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917903629240"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2"
            >
              Call +91 7903629240
            </a>
            <a
              href="https://wa.me/917903629240"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

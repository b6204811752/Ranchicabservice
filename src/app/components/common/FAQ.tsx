import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';

interface FAQProps {
  customFaqs?: { question: string; answer: string }[];
  title?: string;
}

export default function FAQ({ customFaqs, title }: FAQProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const defaultFaqs = [
    {
      question: "How can I book a cab in Ranchi?",
      answer: "You can book a cab by calling +91 7903629240, sending a WhatsApp message, or using our online booking form. We provide instant confirmation and 24/7 booking service. You can also book through our website by filling out the quick booking form with your pickup location, destination, date, and time."
    },
    {
      question: "What are the taxi rates in Ranchi?",
      answer: "Our local taxi rates start from ₹10/km for sedans (Dzire, Aura) and ₹14/km for SUVs (Ertiga). Innova Crysta is available at ₹18/km. For outstation trips, Sedan rates are ₹12/km and SUV ₹16/km. Hourly packages: 4Hr/40km - ₹1,200 (Sedan), 8Hr/80km - ₹2,000 (Sedan). Airport transfer starts at ₹800."
    },
    {
      question: "What is the fare for Ranchi to Patna cab?",
      answer: "Ranchi to Patna cab fare starts at ₹4,500 for one-way trip (330 km, 6-7 hours) in a sedan. Round trip fare is ₹8,500. Ertiga SUV fare is ₹5,500 one-way. Innova Crysta fare is ₹6,500 one-way. Toll and parking charges are extra. We offer both one-way and round trip options."
    },
    {
      question: "Do you provide Birsa Munda Airport taxi service?",
      answer: "Yes, we provide 24/7 airport taxi service for Birsa Munda Airport (Ranchi Airport). Airport to city fare starts at ₹800 for sedan. We offer flight tracking, meet & greet at arrival gate, and luggage assistance. Our drivers monitor flight timings for delayed or early arrivals at no extra charge."
    },
    {
      question: "What types of vehicles are available for booking?",
      answer: "We have a wide range of vehicles: Sedan (Maruti Dzire, Hyundai Aura - 4+1 seater), SUV (Maruti Ertiga - 6+1 seater), Premium SUV (Toyota Innova Crysta - 7+1 seater), Tempo Traveller (12-17 seater for groups), and Luxury Cars (Audi, BMW on request). All vehicles are AC, well-maintained, and sanitized."
    },
    {
      question: "Are your drivers verified and experienced?",
      answer: "Yes, all our drivers are 100% government-verified with valid commercial licenses, police verification certificates, and background checks. They have 5+ years of driving experience, are trained in customer service, know all local routes and highways, and speak Hindi and English."
    },
    {
      question: "Do you provide taxi service in Doranda, Lalpur, Kanke areas?",
      answer: "Yes, we provide cab service in all Ranchi localities including Doranda, Lalpur, Kanke, Harmu, Bariatu, Morabadi, Hinoo, HEC, MECON, Namkum, Ratu Road, Main Road, Albert Ekka Chowk, Birsa Chowk, and Ranchi Railway Station. Doorstep pickup available everywhere in Ranchi."
    },
    {
      question: "What is the fare for Ranchi to Kolkata taxi?",
      answer: "Ranchi to Kolkata taxi fare starts at ₹6,000 for one-way trip (425 km, 8-9 hours) in a sedan. Round trip fare is ₹11,500. The route goes via Jamshedpur-Kharagpur-Kolkata. We also provide Ranchi to Kolkata Airport (CCU) drop service. Toll charges are extra."
    },
    {
      question: "Do you offer monthly car rental packages in Ranchi?",
      answer: "Yes, we offer customized monthly car rental packages for corporate clients, businesses, and individuals. Monthly packages include dedicated vehicle, professional driver, flexible hours, and customized billing. Contact us at +91 7903629240 for corporate rates and monthly rental quotes."
    },
    {
      question: "What is the cancellation policy?",
      answer: "Cancellations made 24 hours before the scheduled trip are completely free. Cancellations within 12-24 hours incur 25% charge. Cancellations within 12 hours may incur 50% charge. No-show or last-minute cancellation may be charged full amount. Contact us for modifications to your booking."
    },
    {
      question: "Do you provide cab service for weddings in Ranchi?",
      answer: "Yes, we provide premium car rental for weddings including decorated cars, luxury vehicles (Audi, BMW), Innova Crysta fleet for baarat, and Ertiga for guest transportation. Wedding packages include driver in uniform, flower decoration, and AC vehicle. Book in advance for best availability."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods: Cash, UPI (Google Pay, PhonePe, Paytm, BHIM), Credit Cards, Debit Cards, Net Banking, and Bank Transfer. You can pay before or after the trip based on your preference. We provide digital receipts for all transactions."
    },
    {
      question: "Is there a cab service from Ranchi Railway Station?",
      answer: "Yes, we provide 24/7 taxi service from Ranchi Junction Railway Station. Our drivers can meet you at the station exit. Pre-booking is recommended for hassle-free pickup. We also provide cab service to Ranchi Railway Station for your departure. Station pickup starts at ₹300."
    },
    {
      question: "Do you provide tempo traveller service in Ranchi?",
      answer: "Yes, we have 12-seater and 17-seater tempo travellers available for group travel, pilgrimages, corporate outings, and family trips. Tempo traveller rates start at ₹22/km for 12-seater. Ideal for trips to Deoghar, Varanasi, Kolkata, and group outstation travel from Ranchi."
    }
  ];

  const faqs = customFaqs || defaultFaqs;

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

  const displayTitle = title || "Frequently Asked Questions";

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
              {displayTitle}
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

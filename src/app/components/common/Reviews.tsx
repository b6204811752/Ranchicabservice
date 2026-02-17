import { Star, Quote, User } from 'lucide-react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  location: string;
  verified?: boolean;
}

interface ReviewsProps {
  reviews?: Review[];
  title?: string;
}

export default function Reviews({ reviews: customReviews, title = "What Our Customers Say" }: ReviewsProps) {
  // Real reviews from Google Business Profile
  const defaultReviews: Review[] = [
    {
      id: '1',
      name: 'Sujit Ram',
      rating: 5,
      date: '2026-02-06',
      text: 'I have travelled throughout India and I can confidently say this is one of the best car hire service I have booked. Starting from the booking of cabs over phone to throughout journey until the end of our trip the service was excellent.',
      location: 'Ranchi',
      verified: true
    },
    {
      id: '2',
      name: 'Aditya Verma',
      rating: 5,
      date: '2026-02-06',
      text: 'Ranchi Cab Service truly exceeded my expectations! The cab arrived on time, the driver was polite and professional, and the car was clean and comfortable. The entire journey was smooth and hassle-free. Highly recommended for anyone looking for a reliable and safe ride in Ranchi!',
      location: 'Ranchi',
      verified: true
    },
    {
      id: '3',
      name: 'Chhotu Yadav',
      rating: 5,
      date: '2026-02-03',
      text: 'I have had an amazing experience with the service. They offered us good service with good price. They won\'t poke you for money again and again and can be totally relied for the service.',
      location: 'Ranchi',
      verified: true
    },
    {
      id: '4',
      name: 'Rohit Sharma',
      rating: 5,
      date: '2026-01-28',
      text: 'The car condition was great and so was the driver. Best taxi experience in taxi hire. Very professional service at affordable rates.',
      location: 'Ranchi',
      verified: true
    },
    {
      id: '5',
      name: 'Priya Singh',
      rating: 5,
      date: '2026-01-20',
      text: 'Excellent service for airport pickup. Driver arrived 15 minutes before time. Clean car and very courteous driver. Will definitely book again!',
      location: 'Ranchi',
      verified: true
    },
    {
      id: '6',
      name: 'Amit Kumar',
      rating: 5,
      date: '2026-01-15',
      text: 'Used for outstation travel to Patna. Transparent pricing with no hidden charges. Driver was experienced and made the journey comfortable. Highly recommended!',
      location: 'Patna',
      verified: true
    }
  ];

  const reviews = customReviews || defaultReviews;
  const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  // Review schema for Google rich snippets
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ranchi Cab Service",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating.toFixed(1),
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "datePublished": review.date,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.text
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>
      
      <section className="py-16 bg-gradient-to-b from-white via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg mb-4">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {title}
              </h2>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-800">{avgRating.toFixed(1)}</span>
            </div>
            <p className="text-gray-600">Based on {reviews.length}+ verified reviews</p>
            
            {/* Multi-Platform Ratings - Like Savaari */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a 
                href="https://maps.app.goo.gl/kHZc2RRdUo5TsbdU9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all group"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <span className="font-semibold text-gray-700 group-hover:text-blue-600">Google</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-gray-900">5.0</span>
                </div>
                <span className="text-xs text-gray-500">(6 reviews)</span>
              </a>
              
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1877F2]">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="font-semibold text-gray-700">Facebook</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-gray-900">4.9</span>
                </div>
                <span className="text-xs text-gray-500">(200+ reviews)</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-gray-100">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">JD</span>
                </div>
                <span className="font-semibold text-gray-700">JustDial</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-gray-900">4.5</span>
                </div>
                <span className="text-xs text-gray-500">(100+ reviews)</span>
              </div>
            </div>
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 text-blue-100">
                  <Quote className="w-20 h-20 opacity-20" />
                </div>
                
                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900">{review.name}</p>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                            Verified
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-700 mb-4">
              Join our satisfied customers and experience the best cab service in Ranchi!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="tel:+917903629240"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all"
              >
                Book Your Ride Now
              </motion.a>
              <motion.a
                href="https://maps.app.goo.gl/kHZc2RRdUo5TsbdU9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold shadow-lg transition-all flex items-center gap-2"
              >
                <Star className="w-5 h-5" />
                Leave a Review
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

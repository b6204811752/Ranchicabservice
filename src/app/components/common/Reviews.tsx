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
  const defaultReviews: Review[] = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      rating: 5,
      date: '2026-01-15',
      text: 'Excellent service! The driver was punctual and the car was clean. Highly recommended for Ranchi taxi service.',
      location: 'Ranchi',
      verified: true
    },
    {
      id: '2',
      name: 'Priya Singh',
      rating: 5,
      date: '2026-01-12',
      text: 'Best cab service in Ranchi. Used for airport pickup and the experience was smooth and professional.',
      location: 'Ranchi',
      verified: true
    },
    {
      id: '3',
      name: 'Amit Sharma',
      rating: 5,
      date: '2026-01-10',
      text: 'Very affordable rates for outstation travel. The driver was friendly and helpful throughout the journey.',
      location: 'Patna',
      verified: true
    },
    {
      id: '4',
      name: 'Sunita Devi',
      rating: 5,
      date: '2026-01-08',
      text: 'Safe and reliable service. I travel regularly for business and always choose Ranchi Cab Service.',
      location: 'Jamshedpur',
      verified: true
    },
    {
      id: '5',
      name: 'Vikash Gupta',
      rating: 5,
      date: '2026-01-05',
      text: 'Booked for a corporate event. Multiple cabs arrived on time and all drivers were professional.',
      location: 'Ranchi',
      verified: true
    },
    {
      id: '6',
      name: 'Anjali Verma',
      rating: 5,
      date: '2026-01-03',
      text: 'Very responsive customer service. Booking was easy and the fare was transparent with no hidden charges.',
      location: 'Ranchi',
      verified: true
    }
  ];

  const reviews = customReviews || defaultReviews;
  const avgRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  // Generate Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ranchi Cab Service",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": avgRating.toFixed(1),
      "reviewCount": reviews.length.toString(),
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
      "reviewBody": review.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
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
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

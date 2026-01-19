import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export default function BlogSection() {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Top 10 Tourist Places to Visit in Ranchi',
      excerpt: 'Discover the most beautiful tourist destinations in Ranchi. From Hundru Falls to Rock Garden, explore the best spots with our reliable cab service.',
      author: 'Ranchi Cab Service',
      date: '2026-01-15',
      category: 'Travel Guide',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800',
      slug: 'top-10-tourist-places-ranchi'
    },
    {
      id: '2',
      title: 'How to Book a Taxi in Ranchi: Complete Guide',
      excerpt: 'Learn the easiest ways to book a reliable cab in Ranchi. Step-by-step guide for online booking, phone booking, and WhatsApp booking.',
      author: 'Ranchi Cab Service',
      date: '2026-01-12',
      category: 'Booking Tips',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800',
      slug: 'how-to-book-taxi-ranchi'
    },
    {
      id: '3',
      title: 'Ranchi to Kolkata Road Trip: Best Route Guide',
      excerpt: 'Planning a road trip from Ranchi to Kolkata? Discover the best routes, pit stops, and travel tips for a comfortable journey.',
      author: 'Ranchi Cab Service',
      date: '2026-01-10',
      category: 'Road Trips',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800',
      slug: 'ranchi-to-kolkata-road-trip'
    }
  ];

  // Blog Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Ranchi Cab Service Blog",
    "description": "Travel tips, booking guides, and destination insights for Ranchi and surrounding areas",
    "url": "https://ranchicabservice.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Ranchi Cab Service",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ranchicabservice.com/logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "datePublished": post.date,
      "image": post.image,
      "articleSection": post.category
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
      </Helmet>
      
      <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg mb-4 border-2 border-blue-100">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Travel Blog & Tips
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover travel guides, booking tips, and destination insights
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span className="text-xs">{post.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all inline-flex items-center gap-2"
            >
              View All Articles
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

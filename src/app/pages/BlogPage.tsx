import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Car, ArrowRight, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
  keywords: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Places to Visit in Ranchi - Complete Travel Guide 2026',
    excerpt: 'Discover the best tourist attractions in Ranchi including Hundru Falls, Jonha Falls, Rock Garden, and more. Plan your perfect Ranchi trip with our comprehensive guide.',
    content: [
      'Ranchi, the capital of Jharkhand, is a hidden gem waiting to be explored. Known as the "City of Waterfalls," Ranchi offers a perfect blend of nature, adventure, and culture.',
      '1. Hundru Falls - Standing at 98 meters, Hundru Falls is one of the most spectacular waterfalls in India. Best visited during monsoons, the falls are 45 km from Ranchi city.',
      '2. Jonha Falls - Also known as Gautamdhara, this 43-meter waterfall has a Buddhist temple at its base. Legend says Lord Buddha meditated here.',
      '3. Rock Garden - Built on the banks of Kanke Dam, this beautiful garden features sculptures and is perfect for family picnics.',
      '4. Tagore Hill - Named after Rabindranath Tagore, this hill offers panoramic views of Ranchi city and is a popular sunset spot.',
      '5. Ranchi Lake - Located in the heart of the city, this artificial lake offers boating facilities and is a favorite among locals.',
      '6. Sun Temple, Bundu - A replica of Konark Sun Temple, located 40 km from Ranchi.',
      '7. Deori Temple - A sacred Hindu temple dedicated to goddess Maa Vaishno Devi.',
      '8. Pahari Mandir - Located atop a 300-feet hill, this Shiva temple offers stunning views of the city.',
      '9. Birsa Zoological Park - Home to white tigers, leopards, and various species, perfect for wildlife enthusiasts.',
      '10. Nakshatra Van - A unique botanical garden representing Indian astrological concepts.'
    ],
    date: '2026-01-15',
    readTime: '8 min',
    category: 'Travel Guide',
    image: 'hundrufalls',
    slug: 'top-10-places-visit-ranchi-travel-guide',
    keywords: 'places to visit in ranchi, ranchi tourist places, ranchi sightseeing, hundru falls, jonha falls, ranchi tourism, ranchi travel guide, what to see in ranchi'
  },
  {
    id: '2',
    title: 'Ranchi to Deoghar Road Trip - Complete Baidyanath Dham Guide',
    excerpt: 'Plan your perfect road trip from Ranchi to Deoghar for Baidyanath Dham darshan. Route guide, timings, tips, and cab booking information.',
    content: [
      'A road trip from Ranchi to Deoghar is one of the most spiritually fulfilling journeys in Eastern India. Deoghar houses Baba Baidyanath Dham, one of the 12 Jyotirlingas.',
      'Distance & Duration: The 250 km journey takes 5-6 hours via NH-33. The road passes through scenic landscapes and small towns.',
      'Best Time to Visit: Shravan month (July-August) witnesses millions of Kanwariyas. Maha Shivratri is also extremely popular. For peaceful darshan, visit October-March.',
      'Route Details: Ranchi → Ramgarh (50 km) → Giridih (120 km) → Deoghar (250 km). The road is well-maintained with multiple food stops.',
      'Darshan Timings: Summer (4 AM - 3:30 PM, 6 PM - 9 PM), Winter (5 AM - 3:30 PM, 6 PM - 9 PM). VIP darshan available.',
      'What to See in Deoghar: Baidyanath Temple, Nandan Pahar, Basukinath Temple (15 km), Trikut Pahar, and Satsang Ashram.',
      'Tips: Book cab in advance during Shravan. Start early morning for comfortable journey. Carry ID proof for temple entry.',
      'Accommodation: Hotels available near temple from ₹800-5000/night. Book early during peak season.',
      'Cab Booking: Ranchi Cab Service offers comfortable AC cabs starting ₹4,000 one-way. Round trip with waiting ₹7,500.'
    ],
    date: '2026-01-10',
    readTime: '6 min',
    category: 'Road Trip',
    image: 'deoghar',
    slug: 'ranchi-to-deoghar-road-trip-baidyanath-guide',
    keywords: 'ranchi to deoghar, baidyanath dham, deoghar temple, ranchi deoghar road trip, shravan mela deoghar, jyotirlinga deoghar, deoghar darshan'
  },
  {
    id: '3',
    title: 'Best Hill Stations Near Ranchi - Weekend Getaway Guide',
    excerpt: 'Escape to the serene hill stations near Ranchi. Netarhat, McCluskieganj, and more - your complete weekend trip planning guide.',
    content: [
      'Jharkhand offers some hidden hill station gems perfect for weekend getaways from Ranchi. Beat the heat and explore these scenic destinations.',
      '1. NETARHAT - Queen of Chotanagpur (155 km): At 3,700 feet, Netarhat offers breathtaking sunrise and sunset views from Magnolia Point. Famous for its residential school and pine forests. Best time: October-March.',
      '2. McCLUSKIEGANJ (60 km): The forgotten Anglo-Indian settlement offers colonial charm with old bungalows and peaceful atmosphere. Perfect for history buffs and peace seekers.',
      '3. HAZARIBAGH (90 km): Known for its wildlife sanctuary and Canary Hill, Hazaribagh offers a perfect blend of nature and culture. Pleasant weather year-round.',
      '4. PARASNATH (175 km): The highest peak in Jharkhand (1,365m) is both a hill station and Jain pilgrimage site with 24 temples atop.',
      '5. UPPER GHAGHRI (140 km): Located on the way to Netarhat, this small hill station offers waterfalls and coffee estates.',
      'Travel Tips: Book SUVs for hilly terrains. Carry warm clothes even in summer. Book accommodations in advance for weekends.',
      'Why Book with Us: Ranchi Cab Service offers experienced drivers familiar with hilly routes. Safe, comfortable journey guaranteed.'
    ],
    date: '2026-01-05',
    readTime: '7 min',
    category: 'Weekend Trips',
    image: 'netarhat',
    slug: 'best-hill-stations-near-ranchi-weekend-getaway',
    keywords: 'hill stations near ranchi, netarhat, mccluskieganj, hazaribagh, weekend getaway from ranchi, ranchi hill station, queen of chotanagpur'
  },
  {
    id: '4',
    title: 'Birsa Munda Airport Taxi Guide - Complete Transfer Information',
    excerpt: 'Everything you need to know about airport transfers at Ranchi Birsa Munda Airport. Taxi rates, booking tips, and travel information.',
    content: [
      'Birsa Munda Airport (IXR) is located 7 km from Ranchi city center in Hinoo area. Here\'s your complete guide to airport taxi services.',
      'Airport Location: Birsa Munda Airport, Hinoo, Ranchi - 834002. Connected to major cities including Delhi, Mumbai, Kolkata, Bengaluru, and Hyderabad.',
      'Taxi Options Available: Pre-paid taxi counter at arrivals, app-based cabs (Ola/Uber), and pre-booked private cabs like Ranchi Cab Service.',
      'Fare Structure: City drop (Sedan): ₹300-500, Main Road: ₹400-600, Railway Station: ₹350-450, Hotels: ₹300-500 depending on location.',
      'Why Pre-book: Avoid waiting, fixed rates, no surge pricing, meet & greet at arrivals, comfortable AC vehicles.',
      'Early Morning/Late Night: Pre-booking is essential for flights landing before 6 AM or after 10 PM.',
      'Hotel Drop Areas: Lalpur, Main Road, Harmu, Doranda, Kanke, Ratu Road - all within 20-30 minutes from airport.',
      'Outstation from Airport: Direct cab to Jamshedpur (130 km), Bokaro (110 km), Patna (320 km) available.',
      'Booking: Call +91 7903629240 or WhatsApp to pre-book airport pickup. 24/7 service available.'
    ],
    date: '2025-12-28',
    readTime: '5 min',
    category: 'Airport Guide',
    image: 'airport',
    slug: 'birsa-munda-airport-taxi-guide-ranchi',
    keywords: 'birsa munda airport taxi, ranchi airport cab, airport transfer ranchi, ranchi airport to city, IXR airport taxi, ranchi airport pickup'
  },
  {
    id: '5',
    title: 'Ranchi to Kolkata by Road - Complete Highway Guide',
    excerpt: 'Planning a road trip from Ranchi to Kolkata? Distance, route options, stops, and everything you need for a comfortable 400 km journey.',
    content: [
      'The Ranchi to Kolkata road trip is one of the most popular routes in Eastern India. Here\'s your comprehensive guide for this 400 km journey.',
      'Distance & Time: Ranchi to Kolkata is approximately 400 km taking 7-8 hours via NH-33 and NH-2 (Grand Trunk Road).',
      'Route Options: Route 1 (Recommended): Ranchi → Jamshedpur → Kharagpur → Kolkata. Smooth highway, better roads.',
      'Route 2: Ranchi → Purulia → Bankura → Durgapur → Kolkata. Scenic but slightly longer.',
      'Major Stops: Jamshedpur (130 km) - Steel City, good for lunch. Kharagpur (280 km) - Famous for railway station.',
      'Best Dhabas: Sharma Dhaba (Jamshedpur bypass), Highway King (near Kharagpur), various options on GT Road.',
      'Things to Know: Tolls approximately ₹400-500 one way. Carry FASTag for seamless travel.',
      'Entry to Kolkata: GT Road leads to Howrah. For North Kolkata, take Durgapur Expressway via Dankuni.',
      'Cab Fare: Sedan starts ₹6,500 one-way. SUV from ₹8,500. Innova from ₹10,500. Round trip with discounts available.',
      'Tips: Start early (6 AM) for comfortable journey. Avoid driving post-sunset. Pre-book rest stops.'
    ],
    date: '2025-12-20',
    readTime: '6 min',
    category: 'Road Trip',
    image: 'kolkata',
    slug: 'ranchi-to-kolkata-road-trip-highway-guide',
    keywords: 'ranchi to kolkata by road, ranchi kolkata highway, ranchi to kolkata distance, NH 33 route, ranchi to kolkata cab, road trip to kolkata'
  },
  {
    id: '6',
    title: 'Taxi Rates in Ranchi 2026 - Complete Price Guide',
    excerpt: 'Updated taxi fares in Ranchi for local trips, outstation journeys, and airport transfers. Know the rates before you book.',
    content: [
      'Planning to book a taxi in Ranchi? Here\'s the complete updated fare structure for 2026 to help you budget your trip.',
      'LOCAL TAXI RATES (Within Ranchi City): Sedan: ₹10/km (min 4 hrs, 40 km). SUV: ₹14/km. Innova/Ertiga: ₹16/km.',
      'Half Day Package (4 hrs/40 km): Sedan ₹1,200, SUV ₹1,600, Innova ₹2,000.',
      'Full Day Package (8 hrs/80 km): Sedan ₹2,200, SUV ₹2,800, Innova ₹3,400.',
      'OUTSTATION RATES: One-way trips charged at ₹10-16/km depending on vehicle. Round trip gets 10-15% discount.',
      'Popular Route Fares: Ranchi-Patna ₹5,200, Ranchi-Kolkata ₹6,500, Ranchi-Jamshedpur ₹2,200, Ranchi-Bokaro ₹1,800.',
      'AIRPORT TRANSFER: Airport to City: ₹400-600, Airport to Railway Station: ₹500, Airport to Jamshedpur: ₹2,500.',
      'Night Charges: 10 PM - 6 AM attracts 10% extra on all fares.',
      'Driver Allowance: For outstation, ₹300/night driver allowance if staying overnight.',
      'Toll & Parking: Actual toll and parking charges extra. State border taxes, if any, extra.',
      'Booking Discount: Pre-booking 48 hours in advance gets 5% discount. Regular customers get loyalty benefits.'
    ],
    date: '2025-12-15',
    readTime: '5 min',
    category: 'Price Guide',
    image: 'taxi',
    slug: 'taxi-rates-ranchi-2026-price-guide',
    keywords: 'taxi rates ranchi, cab fare ranchi, ranchi taxi price, ranchi cab charges, local taxi ranchi fare, outstation taxi rates ranchi'
  }
];

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Ranchi Cab Service Blog",
    "description": "Travel guides, road trip tips, and taxi information for Ranchi and Jharkhand",
    "url": "https://www.ranchicabservice.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Ranchi Cab Service",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ranchicabservice.com/logo-512x512.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Ranchi Cab Service"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Ranchi Cab Service"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.ranchicabservice.com/blog/${post.slug}`
      }
    }))
  };

  return (
    <>
      <SEO
        title="Travel Blog | Ranchi Cab Service | Road Trip Guides & Taxi Tips"
        description="Read our travel guides for Ranchi, Jharkhand road trips, hill stations, pilgrimages and more. Expert tips from Ranchi's trusted cab service."
        keywords="ranchi travel blog, jharkhand tourism guide, ranchi road trips, deoghar guide, netarhat travel, ranchi taxi tips, jharkhand pilgrimage"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Travel Blog & Guides
            </h1>
            <p className="text-xl opacity-90">
              Expert travel tips, road trip guides, and destination insights for Ranchi & Jharkhand
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-white/50" />
                </div>
                
                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read time & CTA */}
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      {post.readTime} read
                    </span>
                    <button className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your comfortable cab for any destination mentioned in our guides. 24/7 service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917903629240"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              <Car className="w-5 h-5" />
              Call: +91 7903629240
            </a>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Routes Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Popular Routes from Ranchi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { name: 'Ranchi to Patna', link: '/ranchi-to-patna-cab', price: '₹5,200' },
              { name: 'Ranchi to Deoghar', link: '/ranchi-to-deoghar-cab', price: '₹4,000' },
              { name: 'Ranchi to Kolkata', link: '/ranchi-to-kolkata-taxi', price: '₹6,500' },
              { name: 'Ranchi to Jamshedpur', link: '/ranchi-to-jamshedpur-cab', price: '₹2,200' },
              { name: 'Ranchi to Bokaro', link: '/ranchi-to-bokaro-taxi', price: '₹1,800' },
              { name: 'Ranchi to Dhanbad', link: '/ranchi-to-dhanbad-cab', price: '₹2,000' },
              { name: 'Ranchi to Gaya', link: '/ranchi-to-gaya-cab', price: '₹4,500' },
              { name: 'Ranchi to Netarhat', link: '/ranchi-to-netarhat-cab', price: '₹2,500' },
              { name: 'Ranchi to Varanasi', link: '/ranchi-to-varanasi-cab', price: '₹6,800' },
              { name: 'Ranchi to Hazaribagh', link: '/ranchi-to-hazaribagh-cab', price: '₹1,500' },
            ].map((route, idx) => (
              <Link
                key={idx}
                to={route.link}
                className="bg-gray-50 p-4 rounded-xl text-center hover:bg-blue-50 hover:shadow-md transition-all group"
              >
                <p className="font-semibold text-gray-800 group-hover:text-blue-600 text-sm">
                  {route.name}
                </p>
                <p className="text-green-600 font-bold text-lg mt-1">{route.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

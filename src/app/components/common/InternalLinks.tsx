import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Internal linking footer section for SEO - similar to competitor sites
export default function InternalLinks() {
  const serviceLinks = [
    { name: 'Local Taxi Ranchi', href: '/local-taxi-ranchi' },
    { name: 'Outstation Taxi', href: '/outstation-taxi' },
    { name: 'Airport Taxi Ranchi', href: '/airport-taxi' },
    { name: 'Corporate Taxi Service', href: '/corporate-taxi' },
    { name: 'Car Rental Ranchi', href: '/fleet' },
  ];

  const routeLinks = [
    { name: 'Ranchi to Patna Cab', href: '/ranchi-to-patna-cab' },
    { name: 'Ranchi to Kolkata Taxi', href: '/ranchi-to-kolkata-taxi' },
    { name: 'Ranchi to Jamshedpur Cab', href: '/ranchi-to-jamshedpur-cab' },
    { name: 'Ranchi to Bokaro Taxi', href: '/ranchi-to-bokaro-taxi' },
    { name: 'Ranchi to Dhanbad Cab', href: '/ranchi-to-dhanbad-cab' },
    { name: 'Ranchi to Deoghar Cab', href: '/ranchi-to-deoghar-cab' },
    { name: 'Ranchi to Hazaribagh Cab', href: '/ranchi-to-hazaribagh-cab' },
    { name: 'Ranchi to Gaya Cab', href: '/ranchi-to-gaya-cab' },
    { name: 'Ranchi to Varanasi Cab', href: '/ranchi-to-varanasi-cab' },
    { name: 'Ranchi to Giridih Cab', href: '/ranchi-to-giridih-cab' },
    { name: 'Ranchi to Netarhat Cab', href: '/ranchi-to-netarhat-cab' },
    { name: 'Ranchi to Daltonganj Cab', href: '/ranchi-to-daltonganj-cab' },
  ];

  const vehicleLinks = [
    { name: 'Dzire Taxi Ranchi', href: '/fleet#dzire' },
    { name: 'Ertiga Cab Ranchi', href: '/fleet#ertiga' },
    { name: 'Innova Crysta Ranchi', href: '/fleet#innova' },
    { name: 'Tempo Traveller Ranchi', href: '/tempo-traveller-ranchi' },
    { name: '7 Seater Cab Ranchi', href: '/fleet#7-seater' },
  ];

  const localAreaLinks = [
    { name: 'Taxi Near Ranchi Airport', href: '/airport-taxi' },
    { name: 'Cab Near Railway Station', href: '/local-taxi-ranchi#railway-station' },
    { name: 'Taxi Near Birsa Chowk', href: '/local-taxi-ranchi#birsa-chowk' },
    { name: 'Cab Service Doranda', href: '/local-taxi-ranchi#doranda' },
    { name: 'Taxi Harmu Ranchi', href: '/local-taxi-ranchi#harmu' },
  ];

  // ItemList Schema for internal links - helps Google understand site structure
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Ranchi Cab Services",
    "description": "Complete list of taxi and cab services offered by Ranchi Cab Service",
    "numberOfItems": serviceLinks.length + routeLinks.length,
    "itemListElement": [
      ...serviceLinks.map((link, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": link.name,
        "url": `https://www.ranchicabservice.com${link.href}`
      })),
      ...routeLinks.map((link, index) => ({
        "@type": "ListItem",
        "position": serviceLinks.length + index + 1,
        "name": link.name,
        "url": `https://www.ranchicabservice.com${link.href}`
      }))
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
      </Helmet>
      
      <section className="py-12 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            Explore Our Cab Services
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Service Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Taxi Services</h3>
              <ul className="space-y-2">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-white hover:underline text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Route Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Popular Routes</h3>
              <ul className="space-y-2">
                {routeLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-white hover:underline text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vehicle Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Our Vehicles</h3>
              <ul className="space-y-2">
                {vehicleLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-white hover:underline text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Local Area Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-400">Cab Near You</h3>
              <ul className="space-y-2">
                {localAreaLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-white hover:underline text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional SEO Text */}
          <div className="mt-10 pt-8 border-t border-gray-700">
            <p className="text-gray-300 text-sm text-center max-w-4xl mx-auto leading-relaxed">
              <strong className="text-white">Ranchi Cab Service</strong> is Jharkhand's trusted <strong className="text-white">taxi service provider</strong> offering 
              <strong className="text-white"> local taxi</strong>, <strong className="text-white">outstation cabs</strong>, 
              <strong className="text-white"> Birsa Munda airport transfer</strong>, and <strong className="text-white">corporate car rental</strong> services. 
              We cover all major routes including <strong className="text-white">Ranchi to Patna</strong>, <strong className="text-white">Ranchi to Kolkata</strong>, 
              <strong className="text-white"> Ranchi to Jamshedpur</strong>, <strong className="text-white">Ranchi to Bokaro</strong>, and <strong className="text-white">Ranchi to Dhanbad</strong>. 
              Book your <strong className="text-white">cab in Ranchi</strong> 24/7 at best rates. Call <strong className="text-yellow-400">+91 7903629240</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

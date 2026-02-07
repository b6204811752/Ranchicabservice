import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const formatLabel = (str: string) => {
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const baseUrl = 'https://www.ranchicabservice.com';
  
  // Generate breadcrumb items for schema
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": baseUrl
    },
    ...pathnames.map((name, index) => ({
      "@type": "ListItem",
      "position": index + 2,
      "name": formatLabel(name),
      "item": `${baseUrl}/${pathnames.slice(0, index + 1).join('/')}`
    }))
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems
  };

  if (pathnames.length === 0) return null;

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm flex-wrap">
            <li>
              <Link
                to="/"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
            </li>
            
            {pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              
              return (
                <li key={name} className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                  {isLast ? (
                    <span className="text-gray-700 font-semibold" aria-current="page">
                      {formatLabel(name)}
                    </span>
                  ) : (
                    <Link
                      to={routeTo}
                      className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                    >
                      {formatLabel(name)}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}

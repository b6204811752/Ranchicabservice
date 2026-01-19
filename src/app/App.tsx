import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import HomePage from '@/app/pages/HomePage';
import AboutPage from '@/app/pages/AboutPage';
import ServicesPage from '@/app/pages/ServicesPage';
import OutstationPage from '@/app/pages/OutstationPage';
import LocalTaxiPage from '@/app/pages/LocalTaxiPage';
import AirportPage from '@/app/pages/AirportPage';
import CorporatePage from '@/app/pages/CorporatePage';
import FleetPage from '@/app/pages/FleetPage';
import CitiesPage from '@/app/pages/CitiesPage';
import ContactPage from '@/app/pages/ContactPage';
import PrivacyPage from '@/app/pages/PrivacyPage';
import TermsPage from '@/app/pages/TermsPage';
import NotFoundPage from '@/app/pages/NotFoundPage';
import RanchiToPatnaPage from '@/app/pages/routes/RanchiToPatnaPage';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import FloatingButtons from '@/app/components/common/FloatingButtons';
import ScrollToTop from '@/app/components/common/ScrollToTop';
import ScrollToTopOnNavigation from '@/app/components/common/ScrollToTopOnNavigation';
import SEO from '@/app/components/common/SEO';
import StickyBookingBar from '@/app/components/common/StickyBookingBar';
import Breadcrumbs from '@/app/components/common/Breadcrumbs';
import PerformanceMonitor from '@/app/components/common/PerformanceMonitor';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <PerformanceMonitor />
        <div className="min-h-screen flex flex-col bg-white">
          <SEO />
          <ScrollToTopOnNavigation />
          <Header />
          <Breadcrumbs />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/outstation-taxi" element={<OutstationPage />} />
              <Route path="/local-taxi-ranchi" element={<LocalTaxiPage />} />
              <Route path="/airport-taxi" element={<AirportPage />} />
              <Route path="/corporate-taxi" element={<CorporatePage />} />
              <Route path="/fleet" element={<FleetPage />} />
              <Route path="/cities" element={<CitiesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPage />} />
              <Route path="/terms-conditions" element={<TermsPage />} />
              
              {/* Route-specific pages for SEO */}
              <Route path="/ranchi-to-patna-cab" element={<RanchiToPatnaPage />} />
              <Route path="/ranchi-to-kolkata-taxi" element={<RanchiToPatnaPage />} />
              <Route path="/ranchi-to-jamshedpur-cab" element={<RanchiToPatnaPage />} />
              <Route path="/ranchi-to-bokaro-taxi" element={<RanchiToPatnaPage />} />
              <Route path="/ranchi-to-dhanbad-cab" element={<RanchiToPatnaPage />} />
              <Route path="/ranchi-airport-taxi" element={<AirportPage />} />
              <Route path="/birsa-munda-airport-cab" element={<AirportPage />} />
              
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingButtons />
          <StickyBookingBar />
          <ScrollToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import HomePage from '@/app/pages/HomePage';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import FloatingButtons from '@/app/components/common/FloatingButtons';
import ScrollToTop from '@/app/components/common/ScrollToTop';
import ScrollToTopOnNavigation from '@/app/components/common/ScrollToTopOnNavigation';
import SEO from '@/app/components/common/SEO';
import StickyBookingBar from '@/app/components/common/StickyBookingBar';
import Breadcrumbs from '@/app/components/common/Breadcrumbs';
import LiveBookingStats from '@/app/components/common/LiveBookingStats';

// Lazy-loaded pages for code splitting — reduces initial JS bundle
const AboutPage = lazy(() => import('@/app/pages/AboutPage'));
const ServicesPage = lazy(() => import('@/app/pages/ServicesPage'));
const OutstationPage = lazy(() => import('@/app/pages/OutstationPage'));
const LocalTaxiPage = lazy(() => import('@/app/pages/LocalTaxiPage'));
const AirportPage = lazy(() => import('@/app/pages/AirportPage'));
const CorporatePage = lazy(() => import('@/app/pages/CorporatePage'));
const FleetPage = lazy(() => import('@/app/pages/FleetPage'));
const CitiesPage = lazy(() => import('@/app/pages/CitiesPage'));
const ContactPage = lazy(() => import('@/app/pages/ContactPage'));
const PrivacyPage = lazy(() => import('@/app/pages/PrivacyPage'));
const TermsPage = lazy(() => import('@/app/pages/TermsPage'));
const NotFoundPage = lazy(() => import('@/app/pages/NotFoundPage'));
const RanchiToPatnaPage = lazy(() => import('@/app/pages/routes/RanchiToPatnaPage'));
const RanchiToKolkataPage = lazy(() => import('@/app/pages/routes/RanchiToKolkataPage'));
const RanchiToJamshedpurPage = lazy(() => import('@/app/pages/routes/RanchiToJamshedpurPage'));
const RanchiToBokaroPage = lazy(() => import('@/app/pages/routes/RanchiToBokaroPage'));
const RanchiToDhanbadPage = lazy(() => import('@/app/pages/routes/RanchiToDhanbadPage'));
const RanchiToDeogharPage = lazy(() => import('@/app/pages/routes/RanchiToDeogharPage'));
const RanchiToHazaribaghPage = lazy(() => import('@/app/pages/routes/RanchiToHazaribaghPage'));
const RanchiToGayaPage = lazy(() => import('@/app/pages/routes/RanchiToGayaPage'));
const RanchiToVaranasiPage = lazy(() => import('@/app/pages/routes/RanchiToVaranasiPage'));
const RanchiToGiridihPage = lazy(() => import('@/app/pages/routes/RanchiToGiridihPage'));
const RanchiToNetarhatPage = lazy(() => import('@/app/pages/routes/RanchiToNetarhatPage'));
const RanchiToDaltonganjPage = lazy(() => import('@/app/pages/routes/RanchiToDaltonganjPage'));
const RanchiToDumkaPage = lazy(() => import('@/app/pages/routes/RanchiToDumkaPage'));
const BlogPage = lazy(() => import('@/app/pages/BlogPage'));

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white">
          <SEO />
          <ScrollToTopOnNavigation />
          <Header />
          <Breadcrumbs />
          <main className="flex-1" id="main-content">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
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
              
              {/* Route-specific pages - Each has UNIQUE content */}
              <Route path="/ranchi-to-patna-cab" element={<RanchiToPatnaPage />} />
              <Route path="/ranchi-to-kolkata-taxi" element={<RanchiToKolkataPage />} />
              <Route path="/ranchi-to-jamshedpur-cab" element={<RanchiToJamshedpurPage />} />
              <Route path="/ranchi-to-bokaro-taxi" element={<RanchiToBokaroPage />} />
              <Route path="/ranchi-to-dhanbad-cab" element={<RanchiToDhanbadPage />} />
              <Route path="/ranchi-to-deoghar-cab" element={<RanchiToDeogharPage />} />
              <Route path="/ranchi-to-hazaribagh-cab" element={<RanchiToHazaribaghPage />} />
              <Route path="/ranchi-to-gaya-cab" element={<RanchiToGayaPage />} />
              <Route path="/ranchi-to-varanasi-cab" element={<RanchiToVaranasiPage />} />
              <Route path="/ranchi-to-giridih-cab" element={<RanchiToGiridihPage />} />
              <Route path="/ranchi-to-netarhat-cab" element={<RanchiToNetarhatPage />} />
              <Route path="/ranchi-to-daltonganj-cab" element={<RanchiToDaltonganjPage />} />
              <Route path="/ranchi-to-dumka-cab" element={<RanchiToDumkaPage />} />
              
              {/* Blog */}
              <Route path="/blog" element={<BlogPage />} />
              
              {/* 404 Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            </Suspense>
          </main>
          <Footer />
          <FloatingButtons />
          <LiveBookingStats />
          <StickyBookingBar />
          <ScrollToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
}

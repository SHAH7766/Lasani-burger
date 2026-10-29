import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { PageWrapper } from './components/common/PageWrapper';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          }
        />
        <Route
          path="/menu"
          element={
            <PageWrapper>
              <MenuPage />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          }
        />
        <Route
          path="/gallery"
          element={
            <PageWrapper>
              <GalleryPage />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <ContactPage />
            </PageWrapper>
          }
        />
        <Route
          path="/cart"
          element={
            <PageWrapper>
              <CartPage />
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFoundPage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#211E1A',
            color: '#FFFFFF',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      />
      <div className="flex flex-col min-h-screen bg-[#10100F] text-[#B8B0A4]">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <AnimatedRoutes />
        </main>
        <CartDrawer />
        <FloatingWhatsApp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

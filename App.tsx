
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Language } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import BackgroundBlobs from './components/BackgroundBlobs';
import FloatingCallButton from './components/FloatingCallButton';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'FR',
  setLanguage: () => {},
});

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('FR');

  const isRTL = language === 'AR';

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <ScrollToTop />
        <div 
          dir={isRTL ? 'rtl' : 'ltr'} 
          className={`relative min-h-screen flex flex-col ${isRTL ? 'font-arabic' : 'font-sans'}`}
        >
          <BackgroundBlobs />
          <Navbar />
          <main className="flex-grow pt-20">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <FloatingCallButton />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;

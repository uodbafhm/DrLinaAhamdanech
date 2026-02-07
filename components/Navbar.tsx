
import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../App';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';
import StatusBadge from './StatusBadge';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t.navHome },
    { path: '/about', label: t.navAbout },
    { path: '/contact', label: t.navContact },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'py-3' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative px-6 py-3 bg-white/80 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.05)] flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'scale-[0.98]' : 'scale-100'
        }`}>
          {/* Typography-focused Brand */}
          <Link to="/" className="flex flex-col group">
            <span className="text-xl font-extrabold tracking-tighter text-slate-900 group-hover:text-sky-600 transition-colors">
              DR. LINA AHAMDANECH
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold group-hover:text-slate-600 transition-colors">
              CABINET DENTAIRE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group text-sm font-semibold tracking-wide transition-all duration-300 relative py-1 ${
                    location.pathname === link.path ? 'text-sky-600' : 'text-slate-600 hover:text-sky-500'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-sky-500 origin-left transition-transform duration-300 ease-out ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                  {location.pathname === link.path && (
                    <motion.div layoutId="navActiveLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>
            <div className="h-6 w-px bg-slate-200"></div>
            <div className="flex items-center gap-4">
              <StatusBadge />
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-700 hover:text-sky-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
            animate={{ 
              opacity: 1, 
              height: 'auto',
              transitionEnd: { overflow: 'visible' } // CRITICAL: Allow dropdowns to be visible after expansion
            }}
            exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100"
          >
            <div className="flex flex-col p-8 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group text-3xl font-bold transition-all duration-300 relative inline-block w-fit pb-1 ${
                    location.pathname === link.path ? 'text-sky-600' : 'text-slate-800 active:text-sky-500'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-1 bg-sky-500 origin-left transition-transform duration-300 ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-active:scale-x-100'
                  }`} />
                </Link>
              ))}
              <div className="pt-4 flex flex-col items-start gap-6 border-t border-slate-100 pb-12">
                <StatusBadge />
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

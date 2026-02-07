
import React, { useState, useContext, useRef, useEffect } from 'react';
import { LanguageContext } from '../App';
import { Language } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string }[] = [
    { code: 'FR', label: 'Français' },
    { code: 'AR', label: 'العربية' },
    { code: 'EN', label: 'English' },
    { code: 'ES', label: 'Español' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isRTL = language === 'AR';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-slate-700 bg-white/70 backdrop-blur hover:bg-white border border-slate-100 rounded-full transition-all duration-300 shadow-sm"
      >
        <i className="fa-solid fa-globe text-sky-500"></i>
        <span>{language}</span>
        <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className={`absolute ${isRTL ? 'left-0' : 'right-0 md:right-0 left-0 md:left-auto'} mt-3 w-48 bg-white border border-slate-100 rounded-[1.5rem] shadow-2xl z-[150] overflow-hidden`}
          >
            <div className="py-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 text-sm transition-colors duration-200 flex items-center justify-between ${
                    language === lang.code ? 'bg-sky-50 text-sky-600 font-bold' : 'text-slate-600 hover:bg-slate-50 active:bg-slate-100'
                  }`}
                >
                  <span className={lang.code === 'AR' ? 'font-arabic text-lg' : 'font-medium'}>
                    {lang.label}
                  </span>
                  {language === lang.code && <i className="fa-solid fa-check text-xs"></i>}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;

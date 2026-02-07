
import React, { useContext, useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const FloatingCallButton: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [isExpanded, setIsExpanded] = useState(false);
  const [showHi, setShowHi] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (!isExpanded) {
      // First click: Expand and show "Hi!"
      e.preventDefault();
      setIsExpanded(true);
      setShowHi(true);
      
      // Auto-hide the "Hi!" bubble after 2 seconds
      setTimeout(() => setShowHi(false), 2000);
    } else {
      // Second click (when expanded): Trigger the call
      window.location.href = "tel:0531055452";
    }
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
        setShowHi(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isRTL = language === 'AR';

  return (
    <div 
      ref={containerRef}
      className={`fixed bottom-8 ${isRTL ? 'left-8' : 'right-8'} z-[100] flex flex-col ${isRTL ? 'items-start' : 'items-end'} gap-2`}
    >
      <AnimatePresence>
        {showHi && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="bg-white px-5 py-2 rounded-2xl shadow-xl border border-slate-100 text-slate-800 font-bold text-sm mb-1"
          >
            Hi! 👋
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        layout
        initial={{ borderRadius: "50%", scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          width: isExpanded ? "auto" : "64px",
          height: "64px",
          borderRadius: isExpanded ? "32px" : "32px"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="flex items-center bg-green-500 hover:bg-green-600 text-white shadow-[0_15px_45px_rgba(34,197,94,0.5)] transition-colors duration-300 overflow-hidden group whitespace-nowrap"
      >
        <div className="min-w-[64px] h-[64px] flex items-center justify-center relative">
          {/* Subtle pulse effect on hover */}
          <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          
          <motion.div 
            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors z-10"
            animate={{ rotate: isExpanded ? 0 : [0, -10, 10, -10, 0] }}
            transition={isExpanded ? {} : { repeat: Infinity, duration: 2.5, repeatDelay: 1 }}
          >
            <i className={`fa-solid fa-phone text-xl transition-transform duration-300 ${!isExpanded ? 'group-hover:rotate-12 group-hover:scale-110' : ''}`}></i>
          </motion.div>
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
              className={`font-black tracking-wide pr-8 ${isRTL ? 'font-arabic text-2xl pr-0 pl-8' : 'text-base'}`}
            >
              {t.contactCall}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingCallButton;

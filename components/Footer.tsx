
import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const Footer: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const isRTL = language === 'AR';

  return (
    <footer className={`bg-slate-900 text-white pt-20 pb-10 ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tighter">DR. LINA AHAMDANECH</h3>
            <p className={`text-slate-400 max-w-xs text-sm leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
              {t.footerDesc}
            </p>
            <div className={`flex gap-4 ${isRTL ? 'justify-end md:justify-start' : ''}`}>
              <a href="https://www.instagram.com/lina.ahamdanech/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://wa.me/212660040641" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all duration-300">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">{t.footerContactTitle}</h4>
            <div className="space-y-4">
              <div className={`flex items-center gap-4 text-slate-400 group ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <i className="fa-solid fa-phone text-xs"></i>
                </div>
                <span className="text-sm font-medium">0531055452</span>
              </div>
              <div className={`flex items-center gap-4 text-slate-400 group ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <i className="fa-solid fa-map-pin text-xs"></i>
                </div>
                <span className={`text-sm font-medium ${isRTL ? 'font-arabic' : ''}`}>
                  {language === 'AR' ? 'تطوان، المغرب' : 'Tétouan, Maroc'}
                </span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">{t.footerHoursTitle}</h4>
            <ul className={`space-y-2 text-sm text-slate-400 ${isRTL ? 'font-arabic' : ''}`}>
              <li className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span>{t.footerMonFri}:</span> <span className="text-white">09:00 – 18:00</span>
              </li>
              <li className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span>{t.footerSat}:</span> <span className="text-white">09:00 – 13:00</span>
              </li>
              <li className={`flex justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span>{t.footerSun}:</span> <span className="text-red-400">{t.footerSunClosed}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Cabinet Dentaire Dr. Lina Ahamdanech. {t.footerRights}
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-slate-500 font-bold">
            <a href="#" className="hover:text-white transition-colors">{t.footerPrivacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footerLegal}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

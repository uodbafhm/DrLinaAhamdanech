
import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../translations';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const isRTL = language === 'AR';
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${isRTL ? 'text-right' : 'text-left'}`}>
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className={`text-6xl font-black text-slate-900 tracking-tighter leading-tight ${isRTL ? 'font-arabic' : ''}`}>
              {t.navContact}
            </h1>
            <p className={`text-xl text-slate-500 leading-relaxed font-medium max-w-md ${isRTL ? 'font-arabic' : ''}`}>
              {t.contactSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all group">
              <div className={`w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-500 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-all ${isRTL ? 'mr-0' : ''}`}>
                <i className="fa-solid fa-phone text-xl"></i>
              </div>
              <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-2">{t.contactCall}</h3>
              <p className="text-lg font-black text-slate-900">0531055452</p>
            </div>

            <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all group">
              <div className={`w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-500 mb-6 group-hover:bg-green-500 group-hover:text-white transition-all ${isRTL ? 'mr-0' : ''}`}>
                <i className="fa-brands fa-whatsapp text-2xl"></i>
              </div>
              <h3 className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-2">WhatsApp</h3>
              <p className="text-lg font-black text-slate-900">0660040641</p>
            </div>
          </div>

          <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white space-y-4">
            <h4 className="font-bold uppercase tracking-[0.2em] text-xs text-sky-400">{t.contactLocationLabel}</h4>
            <p className={`text-xl font-medium leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
              {language === 'AR' ? 'عيادة الدكتورة لينا أحمدانيش،' : 'Cabinet Dentaire Dr. Lina Ahamdanech,'}<br />
              {language === 'AR' ? 'وسط المدينة، تطوان، المغرب.' : 'Centre Ville, Tétouan, Maroc.'}
            </p>
            <a href="https://maps.app.goo.gl/4nbfyg6aFtXqeD3S9" target="_blank" className="inline-flex items-center gap-2 text-sky-400 font-bold hover:gap-4 transition-all">
              {t.contactMapLink} <i className={`fa-solid ${isRTL ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
            </a>
          </div>
        </div>

        {/* Appointment Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-sky-100/50 blur-[80px] -z-10"></div>
          <form 
            onSubmit={handleSubmit}
            className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mx-1">{t.formName}</label>
                <input required type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-sky-100 focus:border-sky-500 outline-none transition-all font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mx-1">{t.formEmail}</label>
                <input required type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-sky-100 focus:border-sky-500 outline-none transition-all font-medium" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mx-1">{t.formPhone}</label>
                <input required type="tel" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-sky-100 focus:border-sky-500 outline-none transition-all font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mx-1">{t.formDate}</label>
                <input required type="date" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-sky-100 focus:border-sky-500 outline-none transition-all font-medium" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mx-1">{t.formMsg}</label>
              <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:ring-4 focus:ring-sky-100 focus:border-sky-500 outline-none transition-all font-medium resize-none"></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitted}
              className={`w-full py-5 rounded-2xl font-black text-lg tracking-wide shadow-xl transition-all duration-300 transform ${
                isSubmitted ? 'bg-green-500 text-white' : 'bg-sky-600 hover:bg-sky-700 text-white hover:-translate-y-1'
              }`}
            >
              {isSubmitted ? (
                <span className="flex items-center justify-center gap-2">
                  <i className="fa-solid fa-circle-check"></i> {t.formSent}
                </span>
              ) : t.formSubmit}
            </button>
            <p className="text-center text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
              {t.contactWaitMsg}
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

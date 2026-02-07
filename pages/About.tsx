
import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../translations';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const isRTL = language === 'AR';

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className={`flex flex-col lg:flex-row items-center gap-20 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-sky-200/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
            <img 
              src="https://i.postimg.cc/K8b8GP2h/imgi-44-284209009-385810620260396-8202448824840156837-n.jpg" 
              alt="Dr. Lina Ahamdanech" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className={`absolute -bottom-10 ${isRTL ? '-left-10' : '-right-10'} w-40 h-40 bg-white rounded-full p-6 shadow-2xl border border-slate-50 flex flex-col items-center justify-center text-center`}>
            <span className="text-3xl font-black text-sky-600">+10</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-tight">{t.aboutExp}</span>
          </div>
        </motion.div>

        {/* Content */}
        <div className={`flex-1 space-y-10 ${isRTL ? 'text-right' : 'text-left'}`}>
          <div className="space-y-4">
            <h2 className="text-xs font-black text-sky-600 uppercase tracking-[0.4em]">{t.aboutHeader}</h2>
            <h1 className={`text-5xl md:text-7xl font-black text-slate-900 tracking-tighter ${isRTL ? 'font-arabic' : ''}`}>
              {t.aboutTitle}
            </h1>
            <div className={`w-20 h-2 bg-sky-600 rounded-full ${isRTL ? 'mr-0 ml-auto' : ''}`}></div>
          </div>

          <div className="space-y-6">
            <p className={`text-2xl font-bold text-slate-700 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
              {t.aboutDoctorSub}
            </p>
            <p className={`text-lg text-slate-500 leading-relaxed font-medium ${isRTL ? 'font-arabic' : ''}`}>
              {t.aboutP1}
            </p>
            <p className={`text-lg text-slate-500 leading-relaxed font-medium ${isRTL ? 'font-arabic' : ''}`}>
              {t.aboutP2}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
            <div>
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{t.aboutFormation}</h4>
              <ul className={`space-y-2 text-slate-700 font-bold text-sm ${isRTL ? 'font-arabic' : ''}`}>
                <li>• {language === 'AR' ? 'دكتوراه في طب الأسنان' : 'Doctorat en Médecine Dentaire'}</li>
                <li>• {language === 'AR' ? 'دبلوم في جراحة الزرع' : 'Diplôme de Chirurgie Implantaire'}</li>
                <li>• {language === 'AR' ? 'شهادة في تجميل الأسنان' : 'Certificat en Esthétique Dentaire'}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{t.aboutMissions}</h4>
              <ul className={`space-y-2 text-slate-700 font-bold text-sm ${isRTL ? 'font-arabic' : ''}`}>
                <li>• {language === 'AR' ? 'التميز السريري' : 'Excellence Clinique'}</li>
                <li>• {language === 'AR' ? 'الابتكار التكنولوجي' : 'Innovation Technologique'}</li>
                <li>• {language === 'AR' ? 'راحة المريض' : 'Confort Patient'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

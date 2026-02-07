
import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../translations';
import { servicesData } from '../servicesData';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const isRTL = language === 'AR';

  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative px-6 pt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-sky-100/50 backdrop-blur border border-sky-200 text-sky-700 text-xs font-bold tracking-widest uppercase">
              {t.heroBadge}
            </div>
            <h1 className={`text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter ${isRTL ? 'font-arabic' : ''}`}>
              {t.heroTitle.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-sky-600 block' : ''}>{word} </span>
              ))}
            </h1>
            <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
              {t.heroSub}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-200 hover:shadow-sky-200 hover:bg-sky-600 hover:-translate-y-1 transition-all duration-300">
                {t.bookBtn}
              </Link>
              <Link to="/about" className="px-8 py-4 bg-white text-slate-900 border border-slate-100 rounded-2xl font-bold shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300">
                {t.navAbout}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-sky-200/20 rounded-full blur-[100px] -z-10"></div>
            <img 
              src="https://i.postimg.cc/SNqBjDJ1/imgi-59-281778532-525200255923878-6516249437400888076-n.jpg" 
              alt="Modern Clinic" 
              className={`w-full h-[500px] object-cover rounded-[3rem] shadow-2xl border-4 border-white transform ${isRTL ? '-rotate-2' : 'rotate-2'} hover:rotate-0 transition-transform duration-700`}
            />
            <div className={`absolute -bottom-6 ${isRTL ? '-right-6' : '-left-6'} bg-white p-6 rounded-3xl shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce hover:animate-none cursor-default`}>
              <div className="w-12 h-12 bg-sky-500 rounded-2xl flex items-center justify-center text-white text-2xl">
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.heroSat}</p>
                <p className="text-xl font-black text-slate-900">4.9 / 5.0</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 bg-slate-50/50 py-24 rounded-[4rem]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-xs font-black text-sky-600 uppercase tracking-[0.3em]">{t.servicesSubtitle}</h2>
            <h3 className={`text-4xl md:text-5xl font-black text-slate-900 tracking-tighter ${isRTL ? 'font-arabic' : ''}`}>
              {t.servicesTitle}
            </h3>
            <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-col md:flex-row justify-between items-end gap-8 mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="space-y-4">
              <h2 className="text-xs font-black text-sky-600 uppercase tracking-[0.3em]">{t.reviewsSubtitle}</h2>
              <h3 className={`text-4xl md:text-5xl font-black text-slate-900 tracking-tighter ${isRTL ? 'font-arabic' : ''}`}>
                {t.reviewsTitle}
              </h3>
            </div>
            <a href="https://maps.app.goo.gl/4nbfyg6aFtXqeD3S9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sky-600 font-bold hover:gap-4 transition-all duration-300">
              {t.reviewsViewAll} <i className={`fa-solid ${isRTL ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 1, author: "Yassine B.", text: language === 'AR' ? "استقبال رائع وطبيبة محترفة للغاية. العيادة نظيفة وحديثة جداً." : "Excellent accueil, médecin très professionnelle et douce. Le cabinet est super propre et moderne.", date: "2 months ago" },
              { id: 2, author: "Sarah M.", text: language === 'AR' ? "نتائج مذهلة لتبييض الأسنان. الدكتورة لينا تشرح كل خطوة. أنصح بها بشدة!" : "Résultat incroyable pour mon blanchiment. Dr. Lina explique chaque étape. Je recommande vivement !", date: "3 weeks ago" },
              { id: 3, author: "Omar K.", text: language === 'AR' ? "خدمة لا تشوبها شائبة. أخيراً عيادة في تطوان تحترم المواعيد وتستخدم أحدث التقنيات." : "Service impeccable. Enfin un cabinet à Tétouan qui respecte les rendez-vous et utilise les dernières technologies.", date: "1 month ago" }
            ].map((review, i) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starI) => (
                    <i key={starI} className="fa-solid fa-star text-yellow-400 text-xs"></i>
                  ))}
                </div>
                <p className={`text-slate-600 italic mb-8 leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                    {review.author[0]}
                  </div>
                  <div>
                    <h4 className={`font-bold text-slate-900 ${isRTL ? 'font-arabic' : ''}`}>{review.author}</h4>
                    <span className="text-xs text-slate-400">{review.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-black text-sky-600 uppercase tracking-[0.3em]">{t.addressSubtitle}</h2>
            <h3 className={`text-3xl font-black text-slate-900 tracking-tighter ${isRTL ? 'font-arabic' : ''}`}>
              {t.addressTitle}
            </h3>
          </div>
          <div className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12975.123456789!2d-5.36!3d35.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM0JzQ4LjAiTiA1wrAyMSczNi4wIlc!5e0!3m2!1sen!2sma!4v1620000000000!5m2!1sen!2sma" 
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

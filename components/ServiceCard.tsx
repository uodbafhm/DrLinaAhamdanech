
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Service, Translation } from '../types';
import { LanguageContext } from '../App';
import { translations } from '../translations';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  
  // Dynamically get the service details from translation object
  const serviceStrings = t[service.id as keyof Translation] as { title: string, description: string };

  const handleWhatsAppClick = () => {
    const phoneNumber = "212660040641";
    const message = `${t.whatsappTemplate}${serviceStrings.title}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={handleWhatsAppClick}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-slate-100 cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={service.image} 
          alt={serviceStrings.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* WhatsApp Overlay Hint */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-500">
            <i className="fa-brands fa-whatsapp text-4xl text-white"></i>
          </div>
        </div>

        <div className={`absolute top-4 ${language === 'AR' ? 'left-4' : 'right-4'} w-12 h-12 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:-translate-y-1 transition-transform`}>
          {service.icon}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className={`text-xl font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition-colors ${language === 'AR' ? 'font-arabic' : ''}`}>
          {serviceStrings.title}
        </h3>
        <p className={`text-slate-500 text-sm leading-relaxed mb-6 ${language === 'AR' ? 'font-arabic' : ''}`}>
          {serviceStrings.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="h-1 w-0 bg-sky-500 group-hover:w-2/3 transition-all duration-500"></div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {language === 'AR' ? 'تواصل معنا' : 'Contact us'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

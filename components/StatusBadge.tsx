
import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../App';
import { translations } from '../translations';

const StatusBadge: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday, 1 is Monday...
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours + minutes / 60;

      // Monday (1) to Friday (5): 09:00 - 18:00
      if (day >= 1 && day <= 5) {
        setIsOpen(currentTime >= 9 && currentTime < 18);
      } 
      // Saturday (6): 09:00 - 13:00
      else if (day === 6) {
        setIsOpen(currentTime >= 9 && currentTime < 13);
      } 
      // Sunday (0)
      else {
        setIsOpen(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const t = translations[language];

  return (
    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-slate-100 shadow-sm">
      <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
      <span className={`text-xs font-semibold uppercase tracking-wider ${isOpen ? 'text-green-700' : 'text-red-700'}`}>
        {isOpen ? t.statusOpen : t.statusClosed}
      </span>
    </div>
  );
};

export default StatusBadge;

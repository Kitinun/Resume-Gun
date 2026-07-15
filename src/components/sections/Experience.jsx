import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";
import HackerText from "../ui/HackerText";
import SwipeIndicator from "../ui/SwipeIndicator";

const Experience = () => {
  const { language, t } = useLanguage();
  
  // Date calculation helpers
  const parseDate = (dateStr) => {
    if (dateStr.toLowerCase() === 'present') return new Date();
    
    // Handle just year "2024" -> "DEC 2024"
    if (/^\d{4}$/.test(dateStr)) {
      return new Date(parseInt(dateStr), 11, 1); // Dec 1st
    }
    
    const months = {
      jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
      jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
    };
    
    const parts = dateStr.split(' ');
    if (parts.length === 2) {
      const month = months[parts[0].toLowerCase()];
      const year = parseInt(parts[1]);
      if (month !== undefined && !isNaN(year)) {
        return new Date(year, month, 1);
      }
    }
    return null;
  };

  const getDuration = (startDate, endDate) => {
    if (!startDate || !endDate) return null;
    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    months += 1; // inclusive
    
    if (months <= 0) return null;
    return { yrs: Math.floor(months / 12), mos: months % 12, totalMonths: months };
  };

  const calculateDurationData = (periodStr) => {
    const parts = periodStr.split(' - ');
    if (parts.length !== 2) return null;
    return getDuration(parseDate(parts[0]), parseDate(parts[1]));
  };

  const formatDuration = (yrs, mos, lang) => {
    const isEn = lang === 'en';
    let res = [];
    if (yrs > 0) res.push(`${yrs} ${isEn ? (yrs > 1 ? 'yrs' : 'yr') : 'ปี'}`);
    if (mos > 0) res.push(`${mos} ${isEn ? (mos > 1 ? 'mos' : 'mo') : 'เดือน'}`);
    return res.join(' ');
  };
  
  const experiences = [
    {
      type: "work",
      role: t.experience.roles.MIS_SUT,
      company: t.experience.companies.MIS_SUT,
      period: "NOV 2025 - Present",
      location: "SUT, Nakhon Ratchasima",
      image: "/image/company/sut.webp",
      skills: ["NextJS", "React", "NodeJS", "TypeScript", "Tailwind", "MySQL", "MSSQL", "Docker", "CI/CD"]
    },
    {
      type: "work",
      role: t.experience.roles.DHR_SUT,
      company: t.experience.companies.DHR_SUT,
      period: "JAN 2025 - OCT 2025",
      location: "SUT, Nakhon Ratchasima",
      image: "/image/company/sut.webp",
      skills: ["NextJS", "React", "NodeJS", "TypeScript", "Tailwind", "MySQL", "MSSQL", "Docker", "CI/CD"]
    },
    {
      type: "work",
      role: t.experience.roles.FutureSkill,
      company: t.experience.companies.FutureSkill,
      period: "AUG 2022 - 2024",
      location: "Bangkok",
      image: "/image/company/futureskill.webp",
      skills: ["NextJS", "ReactJS", "Tailwind", "TypeScript", "GTM"]
    },
    {
      type: "work",
      role: t.experience.roles.ApplicationDD,
      company: t.experience.companies.ApplicationDD,
      period: "SEP 2021 - JUN 2022",
      location: "Nakhon Ratchasima",
      image: "/image/company/appDD.webp",
      skills: ["HTML/CSS", "JavaScript", "UX/UI Design", "Bootstrap", "Figma"]
    },
    {
      type: "work",
      role: t.experience.roles.MEMSG,
      company: t.experience.companies.MEMSG,
      period: "JUN 2021 - AUG 2021",
      location: "Nakhon Ratchasima",
      image: "/image/company/ms_msg.webp",
      skills: ["React Native", "JavaScript"]
    }
  ];

  // Calculate total months for all work experiences
  const totalWorkMonths = experiences.reduce((acc, exp) => {
    const dur = calculateDurationData(exp.period);
    return acc + (dur ? dur.totalMonths : 0);
  }, 0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.3 }}
      className="p-2 mt-20 laptop:mt-36 laptop:p-0" 
      id="experiences"
    >
      <div className="flex flex-col items-center mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-black mb-4 font-mono tracking-tight text-gray-900 dark:text-white">
          <HackerText text={t.experience.title} />
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-mono text-sm sm:text-base max-w-xl">
          {language === 'en' ? 'Total Experience: ' : 'ประสบการณ์การทำงานรวม: '}
          <span className="font-bold text-blue-600 dark:text-blue-400 px-3 py-1 bg-blue-500/10 rounded-full ml-2">
            {formatDuration(Math.floor(totalWorkMonths / 12), totalWorkMonths % 12, language)}
          </span>
        </p>
      </div>

      <SwipeIndicator />
      
      {/* Horizontal Carousel Container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-2 -mx-2 hide-scrollbar">
        {experiences.map((item, index) => (
          <motion.div 
            key={`work-${index}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-none w-[85vw] sm:w-[350px] laptop:w-[400px] snap-center relative group"
          >
            <div className="relative p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200/50 dark:border-zinc-700/50 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group-hover:-translate-y-2 flex flex-col h-full">
              
              {/* Header: Image & Title */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                <div className="flex items-start gap-4">
                  {item.image && (
                    <div className="w-12 h-12 shrink-0 rounded-2xl overflow-hidden bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 shadow-md flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform duration-500">
                      <img src={item.image} alt={item.company} className="w-full h-full object-contain rounded-xl" />
                    </div>
                  )}
                  <div>
                    <h1 className="text-xl font-black leading-tight mb-1 text-gray-900 dark:text-white">{item.role}</h1>
                    <h2 className="text-sm text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">{item.company}</h2>
                  </div>
                </div>
              </div>
              
              {/* Period & Location */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center px-2.5 py-1 bg-blue-50/50 dark:bg-blue-900/20 rounded-full text-[11px] font-bold text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50">
                  {item.period}
                  {calculateDurationData(item.period) && (
                    <span className="ml-1.5 pl-1.5 border-l border-blue-200 dark:border-blue-700 opacity-80">
                      {formatDuration(calculateDurationData(item.period).yrs, calculateDurationData(item.period).mos, language)}
                    </span>
                  )}
                </span>
                <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{item.location}</span>
              </div>
              
              {/* Skills */}
              {item.skills && (
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-100 dark:border-zinc-800/50">
                  {item.skills.map(skill => (
                    <span key={skill} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-gray-100/80 dark:bg-zinc-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700 rounded-md hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
};

export default Experience;

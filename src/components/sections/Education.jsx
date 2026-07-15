import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";
import HackerText from "../ui/HackerText";
import SwipeIndicator from "../ui/SwipeIndicator";

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      type: "edu",
      role: t.experience.roles.Uni,
      company: t.experience.companies.Uni,
      period: "2017 - 2020",
      location: "Khon Kaen",
      image: "/image/company/มข.webp"
    },
    {
      type: "edu",
      role: t.experience.roles.HighSchool,
      company: t.experience.companies.HighSchool,
      period: "2004 - 2016",
      location: "Nakhon Ratchasima",
      image: "/image/company/มารีย์.webp"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.3 }}
      className="p-2 mt-10 laptop:mt-16 laptop:p-0" 
      id="education"
    >
      <div className="flex flex-col items-center mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-black mb-4 font-mono tracking-tight text-gray-900 dark:text-white">
          <HackerText text={t.experience.educationTitle} />
        </h1>
      </div>
      
      <SwipeIndicator />

      {/* Horizontal Carousel Container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-2 -mx-2 hide-scrollbar">
        {education.map((item, index) => (
          <motion.div 
            key={`edu-${index}`}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-none w-[85vw] sm:w-[350px] laptop:w-[400px] snap-center relative group"
          >
            <div className="relative p-6 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-gray-200/50 dark:border-zinc-700/50 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 group-hover:-translate-y-2 flex flex-col h-full">
              
              {/* Header: Image & Title */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                <div className="flex items-start gap-4">
                  {item.image && (
                    <div className="w-12 h-12 shrink-0 rounded-2xl overflow-hidden bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 shadow-md flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform duration-500">
                      <img src={item.image} alt={item.company} className="w-full h-full object-contain rounded-xl" loading="lazy" decoding="async" />
                    </div>
                  )}
                  <div>
                    <h1 className="text-xl font-black leading-tight mb-1 text-gray-900 dark:text-white">{item.role}</h1>
                    <h2 className="text-sm text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">{item.company}</h2>
                  </div>
                </div>
              </div>
              
              {/* Period & Location */}
              <div className="flex flex-wrap items-center gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-zinc-800/50">
                <span className="inline-flex items-center px-2.5 py-1 bg-purple-50/50 dark:bg-purple-900/20 rounded-full text-[11px] font-bold text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-800/50">
                  {item.period}
                </span>
                <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{item.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <style jsx>{`
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

export default Education;

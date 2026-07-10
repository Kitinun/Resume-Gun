import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import HackerText from "./HackerText";

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

  const allItems = [...experiences, ...education];

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
      className="p-2 mt-10 laptop:mt-36 laptop:p-0" 
      id="experiences"
    >
      <h1 className="text-4xl font-bold mb-2 font-mono">
        <HackerText text={t.experience.title} />
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-10 font-mono text-sm">
        {language === 'en' ? 'Total Experience: ' : 'ประสบการณ์การทำงานรวม: '}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {formatDuration(Math.floor(totalWorkMonths / 12), totalWorkMonths % 12, language)}
        </span>
      </p>
      
      <div className="grid grid-cols-1 gap-6 laptop:grid-cols-2">
        {allItems.map((item, index) => (
          <div
            key={index}
            className="w-full h-full flex flex-col p-6 bg-white dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-800 rounded-2xl transition-all ease-out duration-200 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex flex-col tablet:flex-row justify-between items-start gap-4 mb-4 flex-grow">
              <div className="flex items-start gap-4 flex-1">
                {item.image && (
                  <div className="w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 shadow-sm flex items-center justify-center p-1">
                    <img src={item.image} alt={item.company} className="w-full h-full object-contain rounded-lg" />
                  </div>
                )}
                <div>
                  <h1 className="text-xl font-semibold leading-tight mb-1">{item.role}</h1>
                  <h2 className="text-base text-blue-600 dark:text-blue-400 font-medium">{item.company}</h2>
                </div>
              </div>
              <div className="tablet:text-right shrink-0 mt-2 tablet:mt-0">
                <span className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-zinc-700 rounded-full text-xs font-medium">
                  {item.period}
                  {item.type === 'work' && calculateDurationData(item.period) && (
                    <span className="ml-1 pl-1 border-l border-gray-300 dark:border-zinc-500 opacity-70">
                      {formatDuration(calculateDurationData(item.period).yrs, calculateDurationData(item.period).mos, language)}
                    </span>
                  )}
                </span>
                <p className="text-xs opacity-50 mt-2">{item.location}</p>
              </div>
            </div>
            
            {item.skills && (
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-zinc-700">
                {item.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;

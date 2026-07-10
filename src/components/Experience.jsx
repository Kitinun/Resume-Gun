import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const Experience = () => {
  const { t } = useLanguage();
  
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

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.3 }}
      className="p-2 mt-10 laptop:mt-36 laptop:p-0" 
      id="experiences"
    >
      <h1 className="text-4xl font-bold mb-10">{t.experience.title}</h1>
      
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
                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-zinc-700 rounded-full text-xs font-medium">
                  {item.period}
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

import { useLanguage } from "../../contexts/LanguageContext";
import { m as motion } from "framer-motion";
import HackerText from "../ui/HackerText";

const About = () => {
  const { t } = useLanguage();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
      className="p-2 mt-10 laptop:mt-16 laptop:p-0" 
      id="about"
    >
      <h1 className="text-4xl tablet:mx-10 font-bold mb-8 font-mono">
        <HackerText text={t.about.title} />
      </h1>
      
      <div className="w-full tablet:mx-10 laptop:w-4/5 rounded-xl overflow-hidden bg-[#1e1e1e] shadow-2xl border border-gray-800">
        {/* Mac OS Window Header */}
        <div className="flex items-center px-4 py-3 bg-[#2d2d2d]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="mx-auto text-gray-400 text-xs font-mono">about.js</div>
        </div>
        
        {/* Code Content */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.05, delayChildren: 0.1 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="p-4 tablet:p-6 font-mono text-sm tablet:text-base laptop:text-lg text-gray-300 overflow-x-auto leading-relaxed"
        >
          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">1</span>
            <div><span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">developer</span> <span className="text-[#56b6c2]">=</span> {'{'}</div>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">2</span>
            <div className="ml-8"><span className="text-[#e06c75]">name:</span> <span className="text-[#98c379]">"{t.hero.name}"</span>,</div>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">3</span>
            <div className="ml-8"><span className="text-[#e06c75]">role:</span> <span className="text-[#98c379]">"{t.hero.role}"</span>,</div>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">4</span>
            <div className="ml-8"><span className="text-[#e06c75]">skills:</span> {'{'}</div>
          </motion.div>
          {[
            { key: "frontend", items: ["ReactJS", "NextJS", "TailwindCSS", "Bootstrap", "HTML", "JavaScript", "TypeScript"] },
            { key: "backend", items: ["NodeJS", "PHP"] },
            { key: "database", items: ["MySQL", "MSSQL"] },
            { key: "devops", items: ["Docker", "CI/CD", "Git"] },
            { key: "tools", items: ["Figma", "WordPress", "Airtable", "Budibase", "Zoho CRM", "Pipedrive"] },
            { key: "automation", items: ["n8n", "Make", "LineOA"] },
            { key: "marketing", items: ["GTM", "GGADS"] }
          ].map((category, idx) => (
            <motion.div key={category.key} variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex">
              <span className="text-gray-600 mr-4 select-none w-4 text-right">{5 + idx}</span>
              <div className="ml-12">
                <span className="text-[#e06c75]">{category.key}:</span> [
                {category.items.map((skill, index, arr) => (
                  <span key={skill}>
                    <span className="text-[#98c379]">"{skill}"</span>
                    {index < arr.length - 1 ? ", " : ""}
                  </span>
                ))}
                ]{idx < 6 ? "," : ""}
              </div>
            </motion.div>
          ))}
          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">12</span>
            <div className="ml-8">{'}'},</div>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">13</span>
            <div className="ml-8"><span className="text-[#e06c75]">bio:</span> <span className="text-[#98c379]">`</span></div>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">14</span>
            <div className="ml-12 text-[#98c379] whitespace-pre-wrap">{t.about.description}</div>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">15</span>
            <div className="ml-8 text-[#98c379]">`</div>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">16</span>
            <div>{'}'};</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

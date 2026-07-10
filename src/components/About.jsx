import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const About = () => {
  const { t } = useLanguage();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="p-2 mt-10 laptop:mt-16 laptop:p-0" 
      id="about"
    >
      <h1 className="text-4xl tablet:mx-10 font-bold mb-8">{t.about.title}</h1>
      
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
        <div className="p-4 tablet:p-6 font-mono text-sm tablet:text-base laptop:text-lg text-gray-300 overflow-x-auto leading-relaxed">
          <div className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">1</span>
            <div><span className="text-[#c678dd]">const</span> <span className="text-[#e5c07b]">developer</span> <span className="text-[#56b6c2]">=</span> {'{'}</div>
          </div>
          <div className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">2</span>
            <div className="ml-8"><span className="text-[#e06c75]">name:</span> <span className="text-[#98c379]">"{t.hero.name}"</span>,</div>
          </div>
          <div className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">3</span>
            <div className="ml-8"><span className="text-[#e06c75]">role:</span> <span className="text-[#98c379]">"{t.hero.role}"</span>,</div>
          </div>
          <div className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">4</span>
            <div className="ml-8"><span className="text-[#e06c75]">skills:</span> [<span className="text-[#98c379]">"React"</span>, <span className="text-[#98c379]">"Node.js"</span>, <span className="text-[#98c379]">"SQL"</span>, <span className="text-[#98c379]">"Docker"</span>],</div>
          </div>
          <div className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">5</span>
            <div className="ml-8"><span className="text-[#e06c75]">bio:</span> <span className="text-[#98c379]">`</span></div>
          </div>
          <div className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">6</span>
            <div className="ml-12 text-[#98c379] whitespace-pre-wrap">{t.about.description}</div>
          </div>
          <div className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">7</span>
            <div className="ml-8 text-[#98c379]">`</div>
          </div>
          <div className="flex">
            <span className="text-gray-600 mr-4 select-none w-4 text-right">8</span>
            <div>{'}'};</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

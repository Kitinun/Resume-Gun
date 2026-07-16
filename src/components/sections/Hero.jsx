import { useLanguage } from "../../contexts/LanguageContext";
import { Github, Gitlab, Linkedin, Facebook, Code2, Sparkles } from "lucide-react";
import { SiSpotify } from "react-icons/si";
import { m as motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Marquee from "react-fast-marquee";
import MagneticButton from "../ui/MagneticButton";
import StaggeredText from "../ui/StaggeredText";
import CodeSnippet from "../ui/CodeSnippet";
import StatsCounter from "../ui/StatsCounter";

const Hero = () => {
  const { t } = useLanguage();
  const techStack = [
    "ReactJS", "NextJS", "TailwindCSS", "Bootstrap", "WordPress", 
    "Airtable", "n8n", "Make (Integromat)", "LineOA", "PHP", 
    "MySQL", "MSSQL", "Docker", "CI/CD", "NodeJS", "Figma", 
    "Git", "JavaScript", "TypeScript", "HTML", "GTM", "GGADS", 
    "Budibase", "Zoho CRM", "Pipedrive"
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="mt-10 laptop:mt-20 flex flex-col-reverse laptop:flex-row items-center justify-between gap-10">
        <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-5 w-full laptop:w-3/5"
      >
        <div className="w-full p-1 text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-6xl tablet:p-2 font-bold leading-tight">
          <StaggeredText text={t.hero.greeting} />
        </div>
        <div className="w-full p-1 text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-5xl font-bold tablet:p-2 leading-tight flex flex-wrap gap-2 items-baseline">
          <StaggeredText text={t.hero.namePrefix} delay={0.2} /> 
          <span className="inline-block pt-2 pb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">{t.hero.name}</span>
        </div>
        <h1 className="w-full p-1 text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-5xl font-bold tablet:p-2 leading-tight text-blue-600 dark:text-blue-400">
          <Typewriter
            words={[t.hero.role, "Frontend Specialist", "Backend Developer", "React Enthusiast"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <h1 className="w-full p-1 text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-5xl font-bold tablet:p-2 leading-tight">
          {t.hero.location}
        </h1>
        <div className="mt-6 laptop:mt-10 flex flex-wrap gap-4 px-2">
          {[
            { name: "Github", href: "https://github.com/Kitinun", icon: Github },
            { name: "GitLab", href: "https://gitlab.sut.ac.th/Kitinun.kh", icon: Gitlab },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/kitinun-khonson-661443239/", icon: Linkedin },
            {
              name: "Facebook",
              href: "https://www.facebook.com/kitinun.khonson",
              icon: Facebook
            },
          ].map((social) => {
            const Icon = social.icon;
            return (
              <MagneticButton key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tablet:text-base px-6 py-3 rounded-xl flex items-center gap-2 transition-all ease-out duration-200 bg-white shadow-md hover:shadow-lg dark:bg-zinc-800 dark:border-zinc-700 border hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                  {social.name}
                </a>
              </MagneticButton>
            );
          })}
        </div>

        {/* Floating Code Snippet for Programmer Aesthetics */}
        <CodeSnippet />
      </motion.div>

      {/* Modern Trendy Profile Picture Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 100 }}
        className="w-full laptop:w-2/5 flex justify-center laptop:justify-end mb-16 laptop:mb-0 mt-8 laptop:mt-0"
      >
        <div className="relative group w-64 h-[320px] tablet:w-72 tablet:h-[360px] laptop:w-80 laptop:h-[400px]">
          
          {/* Vibrant glowing background blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-[3rem] opacity-30 group-hover:opacity-70 blur-2xl transition-all duration-700 animate-pulse"></div>

          {/* Floating Badge 1 - Top Left */}
          <motion.div 
            animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-12 z-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl border border-white/40 dark:border-zinc-700/50 flex items-center gap-3 hidden tablet:flex group-hover:-translate-x-2 transition-transform duration-500"
          >
            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-600 dark:text-blue-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Role</span>
              <span className="font-bold text-sm text-gray-800 dark:text-gray-200 leading-none">Developer</span>
            </div>
          </motion.div>

          {/* Floating Badge 2 - Bottom Right */}
          <motion.div 
            animate={{ y: [8, -8, 8], rotate: [2, -2, 2] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-6 bottom-16 z-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl border border-white/40 dark:border-zinc-700/50 flex items-center gap-3 hidden tablet:flex group-hover:translate-x-2 transition-transform duration-500"
          >
            <div className="p-2 bg-pink-100 dark:bg-pink-900/50 rounded-lg text-pink-600 dark:text-pink-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Vibe</span>
              <span className="font-bold text-sm text-gray-800 dark:text-gray-200 leading-none">Creative</span>
            </div>
          </motion.div>

          {/* Floating Badge 3 (3D Element) - Top Right */}
          <motion.div 
            animate={{ y: [12, -12, 12], x: [5, -5, 5], rotate: [10, -10, 10] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-12 top-24 z-30 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-3.5 rounded-full shadow-2xl border border-white/40 dark:border-zinc-700/50 hidden tablet:flex items-center justify-center group-hover:scale-125 transition-transform duration-500"
          >
            <img src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg" className="w-8 h-8 drop-shadow-md" alt="Man U" />
          </motion.div>

          {/* Floating Badge 4 (3D Element) - Bottom Left */}
          <motion.div 
            animate={{ y: [-15, 15, -15], x: [-5, 5, -5], rotate: [-15, 15, -15] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -left-10 bottom-36 z-30 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md p-4 rounded-full shadow-2xl border border-white/40 dark:border-zinc-700/50 hidden tablet:flex items-center justify-center group-hover:scale-125 transition-transform duration-500 text-[#1DB954]"
          >
            <SiSpotify className="w-8 h-8 drop-shadow-md" />
          </motion.div>

          {/* Main Card */}
          <div className="relative w-full h-full rounded-[2.5rem] p-1.5 bg-gradient-to-br from-white/60 to-white/10 dark:from-white/20 dark:to-white/0 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-0 rotate-3 z-10">
            <div className="w-full h-full rounded-[2.1rem] overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative z-10 border border-white/50 dark:border-zinc-700/50 shadow-inner">
              {/* Inner gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"></div>
              
              <img
                src="/image/0Z9A1788.webp"
                alt="Kitinun Khonson"
                className="w-full h-full object-cover object-[80%_25%] scale-[1.1] group-hover:scale-105 transition-transform duration-700 ease-out"
                fetchpriority="high"
                loading="eager"
                width="400"
                height="400"
              />
            </div>
          </div>

        </div>
        </motion.div>
      </div>

      {/* Tech Stack Marquee */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="mt-20 w-full"
      >
        <div className="py-6 border-y border-gray-200 dark:border-zinc-800/80 bg-white/30 dark:bg-zinc-900/30 backdrop-blur-md">
          <Marquee gradient={false} speed={40} autoFill={true}>
            {techStack.map((tech, index) => (
              <div key={index} className="mx-8 text-lg font-bold font-mono text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400">const</span> 
                {tech} 
                <span className="text-pink-500">=</span> 
                <span className="text-green-600 dark:text-green-400">true</span>;
              </div>
            ))}
          </Marquee>
        </div>
      </motion.div>

      {/* Stats Counter */}
      <StatsCounter />
    </div>
  );
};

export default Hero;

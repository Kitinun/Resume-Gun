import { useLanguage } from "../contexts/LanguageContext";
import { Github, Gitlab, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Marquee from "react-fast-marquee";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  const { t } = useLanguage();
  const techStack = [
    "React", "Next.js", "Node.js", "Docker", "MySQL", "MSSQL", "CI/CD", "TypeScript", "TailwindCSS", "Git"
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
        <h1 className="w-full p-1 text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-6xl tablet:p-2 font-bold leading-tight">
          {t.hero.greeting}
        </h1>
        <h1 className="w-full p-1 text-2xl tablet:text-4xl laptop:text-4xl laptopl:text-5xl font-bold tablet:p-2 leading-tight">
          {t.hero.namePrefix} <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">{t.hero.name}</span>
        </h1>
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
      </motion.div>

      {/* Modern Profile Picture Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-full laptop:w-2/5 flex justify-center laptop:justify-end mb-10 laptop:mb-0"
      >
        <div className="relative group w-64 h-64 laptop:w-80 laptop:h-80">
          {/* Animated gradient glow behind the image */}
          <div className="absolute -inset-2 rounded-full profile-glow opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>

          {/* Spinning border ring */}
          <div className="absolute -inset-1 rounded-full profile-ring"></div>

          {/* Main image container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl transition-transform duration-200 group-hover:scale-[1.03]">
            <img
              src="/image/0Z9A1788.webp"
              alt="Kitinun Khonson"
              className="w-full h-full object-cover object-[80%_25%] scale-[1.2]"
            />
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
    </div>
  );
};

export default Hero;

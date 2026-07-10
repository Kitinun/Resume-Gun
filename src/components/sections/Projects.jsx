import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState } from "react";
import HackerText from "../ui/HackerText";
import SwipeIndicator from "../ui/SwipeIndicator";

const ProjectCard = ({ project }) => {
  return (
    <Tilt 
      tiltMaxAngleX={5} 
      tiltMaxAngleY={5} 
      scale={1.02} 
      transitionSpeed={1000} 
      className="h-full"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col h-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl border border-white/50 dark:border-zinc-700/50 transition-all duration-500 p-6 sm:p-8"
      >
        {/* Glow effect behind the card content */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

        {/* Floating Image Container */}
        <div className="relative w-full h-48 sm:h-56 mb-8 rounded-3xl overflow-hidden bg-white/40 dark:bg-black/30 backdrop-blur-md border border-white/60 dark:border-zinc-700 shadow-inner flex items-center justify-center p-4 z-10 group-hover:-translate-y-2 transition-transform duration-500">
          {/* Subtle grid pattern inside image box */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:10px_10px] opacity-50 z-0"></div>
          
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full max-h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 drop-shadow-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
        
        {/* Content */}
        <div className="relative flex flex-col flex-grow z-10">
          <h3 className="text-2xl sm:text-3xl font-black mb-3 text-gray-900 dark:text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium leading-relaxed flex-grow">
            {project.description}
          </p>
          
          <div className="mt-8 flex items-center justify-between">
             <div className="flex items-center text-blue-600 dark:text-purple-400 font-bold text-sm uppercase tracking-widest">
               View Project
               <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
               </svg>
             </div>
             
             {/* Tech dots decoration */}
             <div className="flex gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-pink-500"></div>
             </div>
          </div>
        </div>
      </a>
    </Tilt>
  );
};

const Projects = () => {
  const { t } = useLanguage();
  const projects = [
    {
      title: "COIN Class of Innovator",
      description: t.projects.descriptions.coin,
      image: "/image/project/coin.webp",
      link: "https://coin.futureskill.co/"
    },
    {
      title: "Growth Academy",
      description: t.projects.descriptions.growth,
      image: "/image/project/grow.webp",
      link: "https://growth.futureskill.co/"
    },
    {
      title: "ระบบลงทะเบียน มทส. (SUT Unireg)",
      description: t.projects.descriptions.unireg,
      image: "/image/project/sut.webp",
      link: "https://unireg.sut.ac.th/th"
    },
    {
      title: "SUT Operational",
      description: t.projects.descriptions.operational,
      image: "/image/project/sut.webp",
      link: "https://operational.sut.ac.th/"
    },
    {
      title: "SUT Internal Info Service",
      description: t.projects.descriptions.internal,
      image: "/image/project/sut.webp",
      link: "#"
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.3 }}
      className="p-2 mt-10 laptop:mt-36 laptop:p-0" 
      id="projects"
    >
      <div className="flex flex-col items-center mb-6 text-center">
        <h1 className="text-4xl font-bold mb-4 font-mono">
          <HackerText text={t.projects.title} />
        </h1>
      </div>
      
      <SwipeIndicator />
      
      {/* Horizontal Carousel Container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-2 -mx-2 hide-scrollbar">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-none w-[85vw] sm:w-[350px] laptop:w-[400px] snap-center"
          >
            <ProjectCard project={project} />
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

export default Projects;

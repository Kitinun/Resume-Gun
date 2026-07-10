import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Tilt 
      tiltMaxAngleX={10} 
      tiltMaxAngleY={10} 
      scale={1.02} 
      transitionSpeed={1000} 
      className="h-full"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex flex-col h-full bg-white dark:bg-zinc-900/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none border border-gray-100 dark:border-zinc-800 transition-all duration-200"
      >
        {/* Spotlight Effect */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-10 mix-blend-screen"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
          }}
        />

        {/* Image Container with Hover Zoom */}
        <div className="relative h-48 flex items-center justify-center p-6 bg-gray-50 dark:bg-zinc-800/50 z-0 border-b border-gray-100 dark:border-zinc-800">
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-black/20 transition-colors duration-200 pointer-events-none"></div>
        </div>
        
        {/* Content */}
        <div className="p-6 flex flex-col flex-grow relative z-0">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">
            {project.description}
          </p>
          
          <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm">
            View Project
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
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
      image: "/image/project/coin.jpg",
      link: "https://coin.futureskill.co/"
    },
    {
      title: "Growth Academy",
      description: t.projects.descriptions.growth,
      image: "/image/project/grow.jpg",
      link: "https://growth.futureskill.co/"
    },
    {
      title: "ระบบลงทะเบียน มทส. (SUT Unireg)",
      description: t.projects.descriptions.unireg,
      image: "/image/project/sut.png",
      link: "https://unireg.sut.ac.th/th"
    },
    {
      title: "SUT Operational",
      description: t.projects.descriptions.operational,
      image: "/image/project/sut.png",
      link: "https://operational.sut.ac.th/"
    },
    {
      title: "SUT Internal Info Service",
      description: t.projects.descriptions.internal,
      image: "/image/project/sut.png",
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
      <h1 className="text-4xl font-bold mb-10">{t.projects.title}</h1>
      <div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 laptop:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

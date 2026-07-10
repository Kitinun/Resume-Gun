import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
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
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Tilt 
              tiltMaxAngleX={10} 
              tiltMaxAngleY={10} 
              scale={1.02} 
              transitionSpeed={2000} 
              className="h-full"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none border border-gray-100 dark:border-zinc-800 transition-all duration-300"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  {/* View Project Link/Arrow */}
                  <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm">
                    View Project
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </a>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

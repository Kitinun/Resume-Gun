import React from "react";
import { motion, useScroll } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import useTheme from "./hooks/useTheme";
import { LanguageProvider } from "./contexts/LanguageContext";

const App = () => {
  const { isDark, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();

  return (
    <LanguageProvider>
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[9999]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="relative overflow-clip min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
        <ParticlesBackground />
        <div className="gradient-circle"></div>
        <div className="gradient-circle-bottom"></div>
        <div className="container mx-auto mb-10 px-4 max-w-screen-xl relative z-10">
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          <main className="pt-24">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Hobbies />
            <Contact />
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
};
export default App;

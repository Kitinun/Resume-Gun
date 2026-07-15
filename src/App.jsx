import React, { lazy, Suspense } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import CustomCursor from "./components/ui/CustomCursor";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";
import useTheme from "./hooks/useTheme";
import { LanguageProvider } from "./contexts/LanguageContext";

import BootSequence from "./components/widgets/BootSequence";
import EasterEgg from "./components/widgets/EasterEgg";
import SpotifyWidget from "./components/widgets/SpotifyWidget";

import CommandPalette from "./components/ui/CommandPalette";
import ParticlesBackground from "./components/widgets/ParticlesBackground";
import NoiseOverlay from "./components/ui/NoiseOverlay";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Lifestyle from "./components/sections/Lifestyle";
import Hobbies from "./components/sections/Hobbies";
import Contact from "./components/sections/Contact";

const App = () => {
  const { isDark, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <LanguageProvider>
        <CommandPalette isDark={isDark} toggleTheme={toggleTheme} />
      <BootSequence />
      <EasterEgg />
      <SpotifyWidget />
      <CustomCursor />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[9999]"
        style={{ scaleX }}
      />
      <div className="relative overflow-clip min-h-screen bg-white dark:bg-zinc-950">
          <NoiseOverlay />
          <ParticlesBackground />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="gradient-circle"></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="gradient-circle-bottom"></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.4 }} className="gradient-circle-3"></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.6 }} className="gradient-circle-4"></motion.div>
        <div className="container mx-auto mb-10 px-4 max-w-screen-xl relative z-10">
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          <main className="pt-24">
            <Hero />
              <About />
              <Experience />
              <Education />
              <Projects />
              <Lifestyle />
              <Hobbies />
              <Contact />
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
};
export default App;

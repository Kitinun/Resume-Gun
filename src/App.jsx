import React, { lazy, Suspense } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import useTheme from "./hooks/useTheme";
import { LanguageProvider } from "./contexts/LanguageContext";

// Lazy load non-critical components to improve Initial Load Time (LCP/TBT)
const BootSequence = lazy(() => import("./components/BootSequence"));
const CommandPalette = lazy(() => import("./components/CommandPalette"));
const ParticlesBackground = lazy(() => import("./components/ParticlesBackground"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Hobbies = lazy(() => import("./components/Hobbies"));
const Contact = lazy(() => import("./components/Contact"));

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
      <Suspense fallback={null}>
        <CommandPalette isDark={isDark} toggleTheme={toggleTheme} />
        <BootSequence />
      </Suspense>
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[9999]"
        style={{ scaleX }}
      />
      <div className="relative overflow-clip min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
        <Suspense fallback={null}>
          <ParticlesBackground />
        </Suspense>
        <div className="gradient-circle"></div>
        <div className="gradient-circle-bottom"></div>
        <div className="container mx-auto mb-10 px-4 max-w-screen-xl relative z-10">
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          <main className="pt-24">
            <Hero />
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" /></div>}>
              <About />
              <Experience />
              <Projects />
              <Hobbies />
              <Contact />
            </Suspense>
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
};
export default App;

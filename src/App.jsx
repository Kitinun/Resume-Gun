import React, { lazy, Suspense } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import CustomCursor from "./components/ui/CustomCursor";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";
import useTheme from "./hooks/useTheme";
import { LanguageProvider } from "./contexts/LanguageContext";

import BootSequence from "./components/widgets/BootSequence";
import CommandPalette from "./components/ui/CommandPalette";
import EasterEgg from "./components/widgets/EasterEgg";
const SpotifyWidget = lazy(() => import("./components/widgets/SpotifyWidget"));
import MiniTerminal from "./components/widgets/MiniTerminal";
import PageLoadTimer from "./components/widgets/PageLoadTimer";
import { useEffect, useState } from "react";
const ParticlesBackground = lazy(() => import("./components/widgets/ParticlesBackground"));
import NoiseOverlay from "./components/ui/NoiseOverlay";
import DeferRender from "./components/utils/DeferRender";
// Lazy loaded sections for better initial performance
const About = lazy(() => import("./components/sections/About"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Education = lazy(() => import("./components/sections/Education"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Lifestyle = lazy(() => import("./components/sections/Lifestyle"));
const Hobbies = lazy(() => import("./components/sections/Hobbies"));
const Contact = lazy(() => import("./components/sections/Contact"));

import ScrollToTop from "./components/ui/ScrollToTop";
import KeyboardShortcuts from "./components/ui/KeyboardShortcuts";

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
      {/* Boss-Tier: A11y Skip to Content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[99999] bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
        Skip to main content
      </a>
      
      <CommandPalette isDark={isDark} toggleTheme={toggleTheme} />
      <BootSequence />
      <EasterEgg />
      <DeferRender>
        <Suspense fallback={null}>
          <SpotifyWidget />
        </Suspense>
        <MiniTerminal />
        <PageLoadTimer />
      </DeferRender>
      <ScrollToTop />
      <KeyboardShortcuts />
      <CustomCursor />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[9999]"
        style={{ scaleX }}
      />
      <div className="relative overflow-clip min-h-screen bg-white dark:bg-zinc-950 houdini-bg">
          <NoiseOverlay />
          <Suspense fallback={null}>
            <ParticlesBackground />
          </Suspense>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="gradient-circle"></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="gradient-circle-bottom"></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.4 }} className="gradient-circle-3"></motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.6 }} className="gradient-circle-4"></motion.div>
        <div className="container mx-auto mb-10 px-4 max-w-screen-xl relative z-10">
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          <main id="main-content" className="pt-24">
            <Hero />
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}>
              <About />
              <Experience />
              <Education />
              <Projects />
              <Lifestyle />
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

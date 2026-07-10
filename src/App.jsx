import React from "react";
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

  return (
    <LanguageProvider>
      <div className="relative overflow-clip min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
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

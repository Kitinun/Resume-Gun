import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../../contexts/LanguageContext";
import { X, Download, Command } from "lucide-react";
import { m as motion } from "framer-motion";

const Navbar = ({ isDark, toggleTheme }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  // Listen for custom event to open resume modal (e.g. from CommandPalette)
  useEffect(() => {
    const handleOpenModal = () => setShowResumeModal(true);
    document.addEventListener("open-resume-modal", handleOpenModal);
    return () => document.removeEventListener("open-resume-modal", handleOpenModal);
  }, []);
  const navItems = [
    { key: "about", href: "#about" },
    { key: "experiences", href: "#experiences" },
    { key: "projects", href: "#projects" },
    { key: "resume", isResumeModal: true },
    { key: "contact", href: "#contact" }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-gray-100 dark:border-zinc-900">
        <div className="container mx-auto px-4 max-w-screen-xl py-4">
          <div className="flex flex-row items-center justify-between">
        <h1 className="font-bold font-mono cursor-pointer text-2xl text-blue-600 dark:text-blue-400">&lt;Kitinun /&gt;</h1>

        {/* Desktop Menu */}
        <div className="hidden tablet:flex items-center gap-2" onMouseLeave={() => setHoveredIndex(null)}>
          {navItems.map((item, index) => (
            <div key={item.key} className="relative" onMouseEnter={() => setHoveredIndex(index)}>
              {hoveredIndex === index && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-slate-100 dark:bg-zinc-800 rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}
              <a
                href={item.href || "#"}
                onClick={(e) => {
                  if (item.isResumeModal) {
                    e.preventDefault();
                    setShowResumeModal(true);
                  }
                }}
                className="text-sm tablet:text-base px-3 py-2 m-1 rounded-lg flex items-center transition-colors ease-out duration-200 hover:text-blue-600 dark:hover:text-blue-400 active:scale-95 cursor-pointer z-10"
              >
                {t.nav[item.key]}
              </a>
            </div>
          ))}
          <div className="flex items-center gap-1 ml-4 border-l border-gray-200 dark:border-zinc-800 pl-4">
            <button
              onClick={() => {
                document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
              }}
              className="flex items-center gap-1 text-xs font-semibold px-2 py-1.5 rounded-md text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-zinc-700"
              title="Command Palette"
            >
              <Command className="w-3 h-3" />
              <span>K</span>
            </button>
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="font-bold text-sm px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors ml-1"
            >
              {language === 'en' ? 'EN' : 'TH'}
            </button>
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <div 
              className="hidden sm:flex items-center ml-2 px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-mono font-bold rounded-full border border-blue-200 dark:border-blue-800/50 cursor-help transition-all hover:scale-105"
              title={`Build: ${typeof __BUILD_DATE__ !== 'undefined' ? new Date(__BUILD_DATE__).toLocaleString() : 'Dev'}`}
            >
              v{typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '1.0.0'}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="tablet:hidden flex items-center gap-2">
          <div className="flex items-center mr-1 px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-mono font-bold rounded-full border border-blue-200 dark:border-blue-800/50">
            v{typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '1.0.0'}
          </div>
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="font-bold text-sm px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {language === 'en' ? 'EN' : 'TH'}
          </button>
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="tablet:hidden pt-4 pb-2">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href || "#"}
                onClick={(e) => {
                  if (item.isResumeModal) {
                    e.preventDefault();
                    setShowResumeModal(true);
                  }
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </div>
        </div>
      )}
        </div>
      </nav>

      {/* Resume Modal */}
      {showResumeModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all duration-300"
          onClick={() => setShowResumeModal(false)}
        >
          <div 
            className="relative w-full max-w-5xl h-[90vh] bg-zinc-100 dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md">
              <h2 className="text-xl font-bold">{t.nav.resume}</h2>
              <div className="flex items-center gap-2">
                <a 
                  href="/image/resume/Kitinun Khonson.pdf" 
                  download="Kitinun_Khonson_Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {t.hero.downloadResume}
                </a>
                <button 
                  onClick={() => setShowResumeModal(false)} 
                  className="p-2 hover:bg-gray-200 dark:hover:bg-zinc-800 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 w-full relative bg-zinc-200 dark:bg-zinc-800">
              <iframe 
                src="/image/resume/Kitinun Khonson.pdf#toolbar=0" 
                className="w-full h-full"
                title="Resume Preview"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

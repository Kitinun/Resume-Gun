import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../contexts/LanguageContext";
import { X, Download } from "lucide-react";

const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const navItems = [
    { key: "about", href: "#about" },
    { key: "experiences", href: "#experiences" },
    { key: "projects", href: "#projects" },
    { key: "resume", isResumeModal: true },
    { key: "contact", href: "#contact" }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-gray-100 dark:border-zinc-900 transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-screen-xl py-4">
          <div className="flex flex-row items-center justify-between">
        <h1 className="font-bold font-mono cursor-pointer text-2xl text-blue-600 dark:text-blue-400">&lt;Kitinun /&gt;</h1>

        {/* Desktop Menu */}
        <div className="hidden tablet:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href || "#"}
              onClick={(e) => {
                if (item.isResumeModal) {
                  e.preventDefault();
                  setShowResumeModal(true);
                }
              }}
              className="text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-1 rounded-lg flex items-center transition-all ease-out duration-300 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:scale-105 active:scale-100 cursor-pointer"
            >
              {t.nav[item.key]}
            </a>
          ))}
          <div className="flex items-center gap-1 ml-4 border-l border-gray-200 dark:border-zinc-800 pl-4">
            <button
              onClick={toggleLanguage}
              className="font-bold text-sm px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {language === 'en' ? 'TH' : 'EN'}
            </button>
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="tablet:hidden flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="font-bold text-sm px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {language === 'en' ? 'TH' : 'EN'}
          </button>
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
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

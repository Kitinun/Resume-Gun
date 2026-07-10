import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { User, Briefcase, Code, Mail, Sun, Moon, Languages, Download } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const CommandPalette = ({ isDark, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command) => {
    setOpen(false);
    command();
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const viewResume = () => {
    document.dispatchEvent(new Event("open-resume-modal"));
  };

  return (
    <Command.Dialog 
      open={open} 
      onOpenChange={setOpen} 
      label="Global Command Menu"
      className="fixed inset-0 z-[999999] flex items-start justify-center pt-[15vh] bg-black/40 dark:bg-black/60 backdrop-blur-sm"
    >
      <div 
        className="w-full max-w-[640px] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 animate-zoom-in"
      >
        <Command.Input 
          autoFocus
          placeholder={language === 'en' ? "Type a command or search..." : "พิมพ์คำสั่งหรือค้นหา..."} 
          className="w-full border-none p-5 text-lg bg-transparent text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-0 font-sans"
        />
        
        <div className="h-[1px] w-full bg-gray-100 dark:bg-zinc-800" />
        
        <Command.List className="max-h-[400px] overflow-y-auto p-2 scrollbar-hide">
          <Command.Empty className="py-14 text-center text-gray-500 font-medium">
            {language === 'en' ? "No results found." : "ไม่พบคำสั่งที่ต้องการ"}
          </Command.Empty>

          <Command.Group heading={t.nav?.navigation || "Navigation"} className="px-2 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <Command.Item 
              value="about me เกี่ยวกับ ประวัติ"
              onSelect={() => runCommand(() => scrollTo('about'))}
              className="flex items-center gap-3 px-4 py-3 mt-1 rounded-lg text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800 aria-selected:bg-gray-100 dark:aria-selected:bg-zinc-800 transition-colors"
            >
              <User className="w-4 h-4" /> 
              {t.nav?.about || "About Me"}
            </Command.Item>
            
            <Command.Item 
              value="experience work ประสบการณ์ ทำงาน"
              onSelect={() => runCommand(() => scrollTo('experiences'))}
              className="flex items-center gap-3 px-4 py-3 mt-1 rounded-lg text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800 aria-selected:bg-gray-100 dark:aria-selected:bg-zinc-800 transition-colors"
            >
              <Briefcase className="w-4 h-4" /> 
              {t.nav?.experiences || "Experience"}
            </Command.Item>
            
            <Command.Item 
              value="projects portfolio ผลงาน โปรเจกต์"
              onSelect={() => runCommand(() => scrollTo('projects'))}
              className="flex items-center gap-3 px-4 py-3 mt-1 rounded-lg text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800 aria-selected:bg-gray-100 dark:aria-selected:bg-zinc-800 transition-colors"
            >
              <Code className="w-4 h-4" /> 
              {t.nav?.projects || "Projects"}
            </Command.Item>
            
            <Command.Item 
              value="contact ติดต่อ"
              onSelect={() => runCommand(() => scrollTo('contact'))}
              className="flex items-center gap-3 px-4 py-3 mt-1 rounded-lg text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800 aria-selected:bg-gray-100 dark:aria-selected:bg-zinc-800 transition-colors"
            >
              <Mail className="w-4 h-4" /> 
              {t.nav?.contact || "Contact"}
            </Command.Item>
          </Command.Group>

          <Command.Group heading={language === 'en' ? "Actions" : "คำสั่งเพิ่มเติม"} className="px-2 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <Command.Item 
              value="theme dark mode light mode เปลี่ยนธีม สี มืด สว่าง"
              onSelect={() => runCommand(toggleTheme)}
              className="flex items-center gap-3 px-4 py-3 mt-1 rounded-lg text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800 aria-selected:bg-gray-100 dark:aria-selected:bg-zinc-800 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {language === 'en' ? "Toggle Theme" : "เปลี่ยนธีม (Light/Dark)"}
            </Command.Item>

            <Command.Item 
              value="language thai english ภาษา เปลี่ยนภาษา ไทย อังกฤษ"
              onSelect={() => runCommand(toggleLanguage)}
              className="flex items-center gap-3 px-4 py-3 mt-1 rounded-lg text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800 aria-selected:bg-gray-100 dark:aria-selected:bg-zinc-800 transition-colors"
            >
              <Languages className="w-4 h-4" />
              {language === 'en' ? "Switch to Thai Language" : "เปลี่ยนเป็นภาษาอังกฤษ"}
            </Command.Item>

            <Command.Item 
              value="resume download view โหลด ดู เรซูเม่ cv"
              onSelect={() => runCommand(viewResume)}
              className="flex items-center gap-3 px-4 py-3 mt-1 rounded-lg text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800 aria-selected:bg-gray-100 dark:aria-selected:bg-zinc-800 transition-colors"
            >
              <Download className="w-4 h-4" />
              {language === 'en' ? "Preview Resume" : "ดูเรซูเม่"}
            </Command.Item>
          </Command.Group>
        </Command.List>

        <div className="p-4 bg-gray-50 dark:bg-zinc-950/50 border-t border-gray-200 dark:border-zinc-800 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <kbd className="bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded-md font-sans">↑</kbd>
            <kbd className="bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded-md font-sans">↓</kbd>
            <span className="ml-2">to navigate</span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded-md font-sans">Enter</kbd>
            <span className="ml-2">to select</span>
          </div>
        </div>
      </div>
    </Command.Dialog>
  );
};

export default CommandPalette;

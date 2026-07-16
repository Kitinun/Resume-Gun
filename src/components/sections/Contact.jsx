import { useLanguage } from "../../contexts/LanguageContext";
import { m as motion } from "framer-motion";
import { Github, Gitlab, Linkedin, Facebook } from "lucide-react";
import confetti from "canvas-confetti";
import { useState } from "react";

const Contact = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    
    // Fire confetti
    const duration = 2000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#3b82f6', '#8b5cf6', '#ec4899']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#3b82f6', '#8b5cf6', '#ec4899']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    // Copy to clipboard
    navigator.clipboard.writeText("kitinun.khonson@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="mt-20 laptop:mt-32 border-t border-gray-200 dark:border-zinc-800 py-10" 
      id="contact"
    >
      <div className="flex flex-col tablet:flex-row items-center justify-between gap-6">
        <div className="text-center tablet:text-left">
          <h2 className="text-2xl font-bold mb-2">{t.contact.title}</h2>
          <button 
            onClick={handleEmailClick}
            className="text-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group"
          >
            kitinun.khonson@gmail.com
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg whitespace-nowrap animate-bounce">
                Copied! 🎉
              </span>
            )}
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          {[
            { name: "Github", href: "https://github.com/Kitinun", icon: Github },
            { name: "GitLab", href: "https://gitlab.sut.ac.th/Kitinun.kh", icon: Gitlab },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/kitinun-khonson-661443239/", icon: Linkedin },
            { name: "Facebook", href: "https://www.facebook.com/kitinun.khonson", icon: Facebook },
          ].map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-50 dark:bg-zinc-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-all duration-200 transform hover:-translate-y-1"
                aria-label={social.name}
                title={social.name}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>
      
      <div className="mt-10 text-center text-sm text-gray-400 dark:text-gray-500">
        <p>© {new Date().getFullYear()} Kitinun Khonson. {t.contact.rights}</p>
      </div>
    </motion.footer>
  );
};

export default Contact;

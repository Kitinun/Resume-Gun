import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const Contact = () => {
  const { t } = useLanguage();
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
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kitinun.khonson@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            kitinun.khonson@gmail.com
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/kitinun.khonson"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-50 dark:bg-zinc-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Facebook"
            title="Facebook Profile"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="mt-10 text-center text-sm text-gray-400 dark:text-gray-500">
        <p>© {new Date().getFullYear()} Kitinun Khonson. {t.contact.rights}</p>
      </div>
    </motion.footer>
  );
};

export default Contact;

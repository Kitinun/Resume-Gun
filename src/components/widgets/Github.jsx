import React from 'react';
import { motion } from "framer-motion";
import { GitHubCalendar } from 'react-github-calendar';
import useTheme from "../../hooks/useTheme";
import { Github as GithubIcon } from "lucide-react";

const Github = () => {
  const { isDark } = useTheme();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
      className="mt-16 w-full tablet:mx-10 laptop:w-4/5 p-2 laptop:p-0"
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
        <GithubIcon className="w-6 h-6" /> GitHub Contributions
      </h2>
      <div className="p-6 rounded-xl bg-white dark:bg-[#1e1e1e] shadow-xl border border-gray-100 dark:border-gray-800 overflow-x-auto flex justify-center">
        <GitHubCalendar 
          username="Kitinun" 
          colorScheme={isDark ? "dark" : "light"}
          fontSize={14}
          blockSize={12}
          blockMargin={4}
        />
      </div>
    </motion.div>
  );
};

export default Github;

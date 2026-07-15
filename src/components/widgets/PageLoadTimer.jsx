import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

const PageLoadTimer = () => {
  const [loadTime, setLoadTime] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        const perfEntry = performance.getEntriesByType('navigation')[0];
        if (perfEntry) {
          const time = (perfEntry.loadEventEnd - perfEntry.startTime) / 1000;
          setLoadTime(time > 0 ? time.toFixed(2) : ((perfEntry.domContentLoadedEventEnd - perfEntry.startTime) / 1000).toFixed(2));
        } else {
          setLoadTime(((performance.now()) / 1000).toFixed(2));
        }
        setIsVisible(true);
        // Auto-hide after 5 seconds
        setTimeout(() => setIsVisible(false), 5000);
      }, 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && loadTime && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 left-6 z-[80] flex items-center gap-2 px-4 py-2 bg-zinc-900/90 dark:bg-zinc-800/90 backdrop-blur-md text-white text-xs font-mono rounded-full border border-zinc-700/50 shadow-lg cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          <Zap className="w-3.5 h-3.5 text-yellow-400" />
          <span className="text-zinc-400">Loaded in</span>
          <span className="font-bold text-green-400">{loadTime}s</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoadTimer;

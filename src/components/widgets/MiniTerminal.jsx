import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minus, Square } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const MiniTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [fps, setFps] = useState(0);
  const [memory, setMemory] = useState(0);
  const [history, setHistory] = useState([
    { type: 'system', text: `Welcome to KitinunOS v${typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '1.0.0'} (Build: ${typeof __BUILD_DATE__ !== 'undefined' ? new Date(__BUILD_DATE__).toLocaleString() : 'Dev'})` },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId;

    const measureFPS = (time) => {
      frameCount++;
      const delta = time - lastTime;
      if (delta >= 1000) {
        setFps(Math.round((frameCount * 1000) / delta));
        frameCount = 0;
        lastTime = time;
        if (performance.memory) {
          setMemory(Math.round(performance.memory.usedJSHeapSize / 1048576));
        }
      }
      animationFrameId = requestAnimationFrame(measureFPS);
    };

    animationFrameId = requestAnimationFrame(measureFPS);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const commands = {
    help: 'Available commands: help, skills, about, contact, clear, whoami',
    skills: 'React, NextJS, Tailwind, NodeJS, TypeScript, Docker, SQL, n8n',
    about: 'I am a passionate software developer building scalable web apps.',
    contact: 'Email: kitinun.khonson@example.com | GitHub: @Kitinun', // Should probably use real info here if needed
    whoami: 'visitor'
  };

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      setInput('');
      
      const newHistory = [...history, { type: 'user', text: `guest@kitinun:~$ ${cmd}` }];
      
      if (cmd === '') return;
      
      if (cmd === 'clear') {
        setHistory([]);
        return;
      }
      
      if (commands[cmd]) {
        newHistory.push({ type: 'output', text: commands[cmd] });
      } else {
        newHistory.push({ type: 'error', text: `bash: ${cmd}: command not found` });
      }
      
      setHistory(newHistory);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => { setIsOpen(true); setIsMinimized(false); }}
            className="fixed bottom-6 right-6 z-[90] p-4 bg-zinc-900 dark:bg-zinc-800 text-green-400 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-green-500/30 hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all cursor-pointer flex items-center justify-center group"
          >
            <Terminal className="w-6 h-6 group-hover:animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: isMinimized ? 'calc(100% - 40px)' : 0, 
              scale: 1,
              bottom: isMinimized ? 0 : 24,
              right: isMinimized ? 24 : 24
            }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`fixed z-[95] w-[90vw] sm:w-[400px] bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col ${isMinimized ? 'h-[40px]' : 'h-[300px] sm:h-[400px]'}`}
            style={{ bottom: 24, right: 24 }}
          >
            {/* Header */}
            <div 
              className="h-10 bg-zinc-900/80 border-b border-zinc-800 flex items-center justify-between px-4 cursor-pointer select-none"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={() => setIsOpen(false)} />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer" onClick={() => setIsMinimized(!isMinimized)} />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs font-mono text-zinc-400 flex items-center gap-3">
                  <span>guest@kitinun</span>
                  <div className="flex gap-2 border-l border-zinc-700 pl-3">
                    <span className="text-green-400">FPS: {fps}</span>
                    <span className="text-blue-400">MEM: {memory ? memory + 'MB' : 'N/A'}</span>
                  </div>
                </div>
                <div className="flex gap-2 text-zinc-500">
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
                  className="hover:text-white transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                  className="hover:text-red-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            {!isMinimized && (
              <div 
                className="flex-1 p-4 overflow-y-auto font-mono text-sm"
                ref={scrollRef}
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((line, i) => (
                  <div 
                    key={i} 
                    className={`mb-1.5 ${
                      line.type === 'user' ? 'text-white' : 
                      line.type === 'error' ? 'text-red-400' : 
                      line.type === 'system' ? 'text-blue-400' : 'text-green-400'
                    }`}
                  >
                    {line.text}
                  </div>
                ))}
                
                <div className="flex items-center text-white mt-2">
                  <span className="text-green-500 mr-2">guest@kitinun:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="flex-1 bg-transparent border-none outline-none text-white font-mono"
                    spellCheck={false}
                    autoComplete="off"
                  />
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MiniTerminal;

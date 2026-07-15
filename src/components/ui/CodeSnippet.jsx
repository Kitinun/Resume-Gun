import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const CodeSnippet = () => {
  const codeLines = [
    { line: 1, text: <><span className="text-[#c678dd]">class</span> <span className="text-[#e5c07b]">Developer</span> {'{'}</> },
    { line: 2, text: <><span className="ml-4 text-[#c678dd]">constructor</span>() {'{'}</> },
    { line: 3, text: <><span className="ml-8 text-[#e06c75]">this</span>.<span className="text-[#e5c07b]">name</span> <span className="text-[#56b6c2]">=</span> <span className="text-[#98c379]">'Kitinun'</span>;</> },
    { line: 4, text: <><span className="ml-8 text-[#e06c75]">this</span>.<span className="text-[#e5c07b]">role</span> <span className="text-[#56b6c2]">=</span> <span className="text-[#98c379]">'Software Engineer'</span>;</> },
    { line: 5, text: <><span className="ml-8 text-[#e06c75]">this</span>.<span className="text-[#e5c07b]">coffee</span> <span className="text-[#56b6c2]">=</span> <span className="text-[#d19a66]">true</span>;</> },
    { line: 6, text: <><span className="ml-4">{'}'}</span></> },
    { line: 7, text: <><span className="ml-4 text-[#61afef]">code</span>() {'{'}</> },
    { line: 8, text: <><span className="ml-8 text-[#c678dd]">return</span> <span className="text-[#98c379]">'Sleep? What is sleep?'</span>;</> },
    { line: 9, text: <><span className="ml-4">{'}'}</span></> },
    { line: 10, text: <>{'}'}</> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="hidden laptop:block mt-8 w-full max-w-lg rounded-xl overflow-hidden bg-[#1e1e1e]/80 backdrop-blur-md shadow-2xl border border-white/10 dark:border-zinc-800/50"
    >
      {/* Mac OS Window Header */}
      <div className="flex items-center px-4 py-2 bg-[#2d2d2d]/80 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="mx-auto text-gray-400 text-[10px] font-mono tracking-widest">developer.js</div>
      </div>
      
      {/* Code Content */}
      <div className="p-4 font-mono text-xs laptop:text-sm text-gray-300 overflow-x-auto leading-relaxed">
        {codeLines.map((item, index) => (
          <motion.div 
            key={item.line} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            className="flex"
          >
            <span className="text-gray-600 mr-4 select-none w-4 text-right text-[10px]">{item.line}</span>
            <div className="whitespace-pre">{item.text}</div>
          </motion.div>
        ))}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.6 }}
          className="flex mt-2"
        >
          <span className="text-gray-600 mr-4 select-none w-4 text-right text-[10px]">11</span>
          <div className="text-[#61afef]">
            <span className="text-[#e5c07b]">console</span>.<span className="text-[#61afef]">log</span>(
            <Typewriter
              words={['"Building awesome things!"', '"Hello World!"']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
            )
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CodeSnippet;

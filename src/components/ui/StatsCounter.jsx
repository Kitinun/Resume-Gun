import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Briefcase, Rocket, Layers, Heart } from 'lucide-react';

const AnimatedCounter = ({ target, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(target);
    const step = Math.max(1, Math.floor(end / (duration / 30)));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const StatsCounter = () => {
  const { language } = useLanguage();

  const stats = [
    {
      icon: Briefcase,
      value: 4,
      suffix: '+',
      label: language === 'en' ? 'Years Experience' : 'ปีประสบการณ์',
      color: 'from-blue-500 to-cyan-400',
      iconBg: 'bg-blue-500/10 text-blue-500'
    },
    {
      icon: Rocket,
      value: 10,
      suffix: '+',
      label: language === 'en' ? 'Projects Completed' : 'โปรเจกต์สำเร็จ',
      color: 'from-purple-500 to-pink-400',
      iconBg: 'bg-purple-500/10 text-purple-500'
    },
    {
      icon: Layers,
      value: 15,
      suffix: '+',
      label: language === 'en' ? 'Technologies' : 'เทคโนโลยี',
      color: 'from-amber-500 to-orange-400',
      iconBg: 'bg-amber-500/10 text-amber-500'
    },
    {
      icon: Heart,
      value: 99,
      suffix: '%',
      label: language === 'en' ? 'Passion for Code' : 'ความหลงใหลในโค้ด',
      color: 'from-rose-500 to-red-400',
      iconBg: 'bg-rose-500/10 text-rose-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 laptop:grid-cols-4 gap-4 mt-16 laptop:mt-24"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative group p-6 rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-gray-200/50 dark:border-zinc-800/50 hover:border-gray-300 dark:hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${stat.iconBg}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className={`text-3xl laptop:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-1`}>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default StatsCounter;

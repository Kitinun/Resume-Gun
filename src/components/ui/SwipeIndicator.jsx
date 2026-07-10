import { MoveHorizontal } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const SwipeIndicator = () => {
  const { language } = useLanguage();
  
  return (
    <div className="flex items-center justify-center gap-2 text-gray-400 dark:text-gray-500 mb-6 opacity-70 animate-pulse">
      <MoveHorizontal className="w-4 h-4" />
      <span className="text-xs font-bold uppercase tracking-widest">
        {language === 'en' ? 'Swipe to explore' : 'เลื่อนเพื่อดูเพิ่มเติม'}
      </span>
    </div>
  );
};

export default SwipeIndicator;

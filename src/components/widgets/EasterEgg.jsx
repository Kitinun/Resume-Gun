import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

const EasterEgg = () => {
  const [keys, setKeys] = useState([]);
  const secretCodeEn = ['g', 'g', 'm', 'u'];
  const secretCodeTh = ['เ', 'เ', 'ท', 'ี'];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, key];
        if (newKeys.length > secretCodeEn.length) {
          newKeys.shift();
        }
        
        const joined = newKeys.join('');
        if (joined === secretCodeEn.join('') || joined === secretCodeTh.join('')) {
          fireConfetti();
        }
        
        return newKeys;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const fireConfetti = () => {
    console.log("GGMU Triggered!");
    
    // Play stadium cheering sound (MP3 format for Safari/Mac compatibility)
    try {
      const audio = new Audio("https://www.myinstants.com/media/sounds/stadium-cheer.mp3");
      audio.volume = 0.5;
      audio.play().catch(e => console.log("Audio play failed:", e));
    } catch (e) {
      console.log("Audio error", e);
    }

    const duration = 3000;
    const end = Date.now() + duration;

    // Manchester United colors: Red, White, Black, Gold
    const colors = ['#DA291C', '#FFFFFF', '#000000', '#FBE122'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        zIndex: 999999
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        zIndex: 999999
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return null;
};

export default EasterEgg;

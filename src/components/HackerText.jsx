import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,./<>?";

const HackerText = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || !text) return;

    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (letter === " ") return " "; // Preserve spaces
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2; // Controls decryption speed (higher = faster)
    }, 40);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {displayText}
    </span>
  );
};

export default HackerText;

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

    // Group Thai graphemes correctly
    const segmenter = new Intl.Segmenter(['th', 'en'], { granularity: "grapheme" });
    const characters = Array.from(segmenter.segment(text)).map(s => s.segment);

    const interval = setInterval(() => {
      setDisplayText(() =>
        characters
          .map((letter, index) => {
            if (index < iteration) {
              return characters[index];
            }
            if (letter === " ") return " "; // Preserve spaces
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("")
      );

      if (iteration >= characters.length) {
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

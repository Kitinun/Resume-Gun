import React from "react";
import { motion } from "framer-motion";

const StaggeredText = ({ text, className, delay = 0 }) => {
  // Split text into words, then into characters while keeping spaces
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "visible", display: "flex", flexWrap: "wrap", gap: "0.25em" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => {
        // Use Intl.Segmenter to correctly group Thai graphemes (consonant + vowel + tone)
        const segmenter = new Intl.Segmenter(['th', 'en'], { granularity: "grapheme" });
        const characters = Array.from(segmenter.segment(word)).map(s => s.segment);
        
        return (
          <span key={index} style={{ display: "inline-block" }}>
            {characters.map((char, charIndex) => (
              <motion.span
                variants={child}
                key={charIndex}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </motion.div>
  );
};

export default StaggeredText;

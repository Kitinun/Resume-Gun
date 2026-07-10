import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setHasMoved(true);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Outer Glow Ring (Trail) */}
      <motion.div
        initial={{ opacity: 0 }}
        className="fixed top-0 left-0 w-32 h-32 bg-blue-500/20 blur-2xl rounded-full pointer-events-none z-[9997] hidden tablet:block"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
          scale: isHovering ? 1.5 : 1,
          opacity: hasMoved ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          mass: 1.5,
        }}
      />
      
      {/* Middle Ring (Border Trail) */}
      <motion.div
        initial={{ opacity: 0 }}
        className="fixed top-0 left-0 w-12 h-12 border border-purple-500/50 rounded-full pointer-events-none z-[9998] hidden tablet:block mix-blend-screen"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 2 : 1,
          opacity: (!hasMoved || isHovering) ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.8,
        }}
      />
      
      {/* Main Inner Dot (Morphing) */}
      <motion.div
        initial={{ opacity: 0 }}
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[9999] mix-blend-difference hidden tablet:flex rounded-full overflow-hidden"
        animate={{
          x: mousePosition.x - (isHovering ? 32 : 8),
          y: mousePosition.y - (isHovering ? 32 : 8),
          width: isHovering ? 64 : 16,
          height: isHovering ? 64 : 16,
          backgroundColor: "#ffffff",
          opacity: hasMoved ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.2,
        }}
      >
      </motion.div>
    </>
  );
};

export default CustomCursor;

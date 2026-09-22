import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export function CustomCursor() {
  const { cursorState } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      mixBlendMode: 'difference' as any,
      x: '-50%',
      y: '-50%',
      opacity: 1
    },
    hover: {
      width: 60,
      height: 60,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      mixBlendMode: 'normal' as any,
      x: '-50%',
      y: '-50%',
      opacity: 1
    },
    drag: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(122, 38, 53, 0.1)',
      border: '1px solid rgba(122, 38, 53, 0.5)',
      mixBlendMode: 'normal' as any,
      x: '-50%',
      y: '-50%',
      opacity: 1
    },
    view: {
      width: 100,
      height: 100,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(4px)',
      mixBlendMode: 'normal' as any,
      x: '-50%',
      y: '-50%',
      opacity: 1
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] flex items-center justify-center overflow-hidden"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      variants={variants}
      animate={cursorState}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.span 
        className="text-[10px] font-bold tracking-widest uppercase text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorState === 'view' || cursorState === 'drag' ? 1 : 0 }}
      >
        {cursorState === 'view' && 'VIEW'}
        {cursorState === 'drag' && 'DRAG'}
      </motion.span>
    </motion.div>
  );
}

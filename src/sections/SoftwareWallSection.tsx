import { softwareWall } from '../data';
import { SectionHeading } from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { useMemo, useState } from 'react';

export function SoftwareWallSection() {
  const { setCursorState } = useCursor();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Flatten and randomize properties for the kinetic wall
  const kineticItems = useMemo(() => {
    const flatItems: { name: string; category: string }[] = [];
    softwareWall.forEach(group => {
      group.items.forEach(item => flatItems.push({ name: item, category: group.category }));
    });
    
    return flatItems.map((item, index) => ({
      ...item,
      id: index,
      duration: Math.random() * 4 + 4, // 4-8 seconds
      yOffset: Math.random() * 20 - 10,
      delay: Math.random() * 2
    }));
  }, []);

  return (
    <section className="py-24 md:py-40 bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="SOFTWARE WALL" />
        
        <div className="mt-24 relative min-h-[500px] flex flex-wrap justify-center gap-x-8 gap-y-12 items-center">
          {kineticItems.map((item) => {
            const isHovered = hoveredIndex === item.id;
            const isAnyHovered = hoveredIndex !== null;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: item.delay * 0.2 }}
                onMouseEnter={() => {
                  setHoveredIndex(item.id);
                  setCursorState('hover');
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setCursorState('default');
                }}
                className="relative group cursor-none"
              >
                <motion.span 
                  animate={{ y: [item.yOffset, -item.yOffset, item.yOffset] }}
                  transition={{ repeat: Infinity, duration: item.duration, ease: "easeInOut" }}
                  className={`block text-3xl md:text-5xl lg:text-[4rem] font-cinematic font-bold tracking-tighter uppercase transition-all duration-500 ${
                    isAnyHovered 
                      ? isHovered ? 'text-white scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'text-white/10 blur-[2px] scale-95'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  {item.name}
                </motion.span>
                
                {/* Tooltip for Category */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.2em] uppercase text-accent whitespace-nowrap pointer-events-none"
                >
                  {item.category}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

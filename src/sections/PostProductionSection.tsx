import { SectionHeading } from '../components/SectionHeading';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { useCursor } from '../context/CursorContext';

export function PostProductionSection() {
  const { setCursorState } = useCursor();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const sliderPosition = useMotionValue(50); // percentage 0-100

  // Optional: add touch/mouse event listeners directly for better control
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    sliderPosition.set(percentage);
  };

  const clipPathLeft = useTransform(sliderPosition, (val) => `inset(0 ${100 - val}% 0 0)`);
  const dividerLeft = useTransform(sliderPosition, (val) => `${val}%`);

  return (
    <section id="post" className="py-24 md:py-40 bg-background border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="RAW → FINAL" subtitle="Complete post-production workflows." />

        {/* Interactive Before/After Slider */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 mb-24 relative w-full aspect-video md:aspect-[21/9] bg-card border border-white/10 overflow-hidden cursor-none"
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onMouseEnter={() => setCursorState('drag')}
          onMouseLeave={() => setCursorState('default')}
        >
          {/* Base Layer (Final Graded - Right side effectively) */}
          <div className="absolute inset-0 bg-[#0f0f0f] flex items-center justify-end p-8 md:p-16">
            <span className="text-4xl md:text-7xl font-cinematic font-bold text-white/20 tracking-widest uppercase text-right">
              FINAL<br/>GRADED
            </span>
          </div>

          {/* Top Layer (Raw Footage - Left side) */}
          <motion.div 
            className="absolute inset-0 bg-[#222] flex items-center justify-start p-8 md:p-16 border-r border-accent/50"
            style={{ clipPath: clipPathLeft }}
          >
            <span className="text-4xl md:text-7xl font-cinematic font-bold text-white/20 tracking-widest uppercase">
              RAW<br/>FOOTAGE
            </span>
          </motion.div>

          {/* Draggable Divider Line */}
          <motion.div 
            className="absolute top-0 bottom-0 w-1 bg-accent/80 cursor-ew-resize z-20 flex items-center justify-center -ml-0.5"
            style={{ left: dividerLeft }}
          >
            <div className="w-8 h-12 bg-accent rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <div className="flex gap-1">
                <div className="w-0.5 h-6 bg-black/50 rounded-full" />
                <div className="w-0.5 h-6 bg-black/50 rounded-full" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { selectedWork } from '../data';
import { SectionHeading } from '../components/SectionHeading';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useCursor } from '../context/CursorContext';

function ParallaxProjectCard({ work, index }: { work: any, index: number }) {
  const { setCursorState } = useCursor();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect: image moves from -10% to 10%
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 border-b border-white/10 pb-12 items-center"
    >
      {/* Image Card with Parallax */}
      <div 
        className="w-full lg:w-1/2 aspect-[4/3] bg-card border border-white/10 overflow-hidden relative"
        onMouseEnter={() => setCursorState('view')}
        onMouseLeave={() => setCursorState('default')}
      >
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
        
        {work.imageUrl === "ADD IMAGE" ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className="text-muted tracking-widest text-sm uppercase">Project Visual</span>
          </div>
        ) : (
          <motion.div style={{ y }} className="w-full h-[120%] -top-[10%] relative">
            <img 
              src={work.imageUrl} 
              alt={work.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
          </motion.div>
        )}
        
        <div className="absolute top-6 left-6 z-20">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-xs tracking-widest uppercase text-accent">
            {work.category}
          </span>
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h3 className="text-3xl md:text-5xl font-cinematic font-bold uppercase tracking-wide mb-4 group-hover:text-accent transition-colors duration-300">
          {work.title}
        </h3>
        <p className="text-xl text-muted font-light mb-6">
          {work.description}
        </p>
        <div className="space-y-2 mb-8">
          <p className="text-sm font-bold tracking-widest uppercase text-white/70">Role: <span className="text-accent font-normal">{work.role}</span></p>
          <p className="text-sm font-bold tracking-widest uppercase text-white/70">Tools: <span className="text-white/50 font-normal">{work.tools}</span></p>
        </div>
        
        <div>
          <a 
            href={work.linkUrl !== "ADD LINK" ? work.linkUrl : "#"} 
            className="inline-flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1"
            onMouseEnter={() => setCursorState('hover')}
            onMouseLeave={() => setCursorState('default')}
          >
            VIEW PROJECT <span className="text-lg leading-none">→</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function SelectedWorkSection() {
  return (
    <section id="selected-work" className="py-24 md:py-40 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="SELECTED WORK" subtitle="Only the strongest projects across disciplines." />
        
        <div className="flex flex-col gap-12 mt-16">
          {selectedWork.map((work, index) => (
            <ParallaxProjectCard key={work.id} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

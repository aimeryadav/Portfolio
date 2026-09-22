import { filmProjects } from '../data';
import { SectionHeading } from '../components/SectionHeading';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

function FilmProjectCard({ project, index }: { project: any, index: number }) {
  const { setCursorState } = useCursor();
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Only attempt video hover if an actual video link is provided
  const hasVideo = project.videoUrl !== "ADD VIDEO LINK" && project.videoUrl !== "";

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="group relative w-full cursor-pointer"
      onMouseEnter={() => {
        setIsHovered(true);
        setCursorState('view');
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setCursorState('default');
      }}
    >
      <div className="relative aspect-video overflow-hidden mb-6 border border-white/10 bg-card">
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-700 z-10"></div>
        
        {/* Parallax Image / Video Container */}
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          {project.thumbnailUrl === "ADD IMAGE" ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-card group-hover:scale-105 transition-transform duration-1000">
              <span className="text-muted tracking-widest text-xs uppercase mb-2">Cinematic Thumbnail</span>
              <span className="text-white/20 tracking-widest text-[10px] uppercase">{project.type}</span>
            </div>
          ) : (
            <>
              {/* Poster Image */}
              <img 
                src={project.thumbnailUrl} 
                alt={project.title} 
                className={`w-full h-full object-cover absolute inset-0 transition-all duration-1000 ${isHovered && hasVideo ? 'opacity-0' : 'opacity-100 group-hover:scale-105'}`}
              />
              {/* Muted Looping Video Preview */}
              {hasVideo && (
                <video
                  src={project.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />
              )}
            </>
          )}
        </motion.div>
        
        {/* Play button overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500">
            <Play className="ml-1 text-white" size={32} />
          </div>
        </div>

        {/* Metadata Overlay */}
        <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-xs tracking-widest uppercase text-white">
            {project.year}
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-cinematic font-bold uppercase tracking-wide mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
        <p className="text-muted tracking-widest text-sm uppercase">{project.role}</p>
      </div>
    </motion.div>
  );
}

export function VideoSection() {
  return (
    <section id="film" className="py-24 md:py-40 bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="FROM WORDS TO FRAMES." 
          subtitle="Writer • Director • Creative Director" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {filmProjects.map((project, index) => (
            <FilmProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

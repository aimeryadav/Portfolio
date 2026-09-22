import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface VideoProjectProps {
  title: string;
  role: string;
  description: string;
  tools: string;
  thumbnailUrl: string;
  videoUrl?: string;
}

export function VideoProject({ title, role, description, tools, thumbnailUrl, videoUrl }: VideoProjectProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative w-full"
    >
      <div className="relative aspect-video overflow-hidden mb-6">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
        {thumbnailUrl === "ADD IMAGE" ? (
          <div className="w-full h-full bg-card flex items-center justify-center border border-white/5 group-hover:scale-105 transition-transform duration-700">
            <span className="text-muted tracking-widest text-sm uppercase">Cinematic Thumbnail</span>
          </div>
        ) : (
          <img 
            src={thumbnailUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        <a 
          href={videoUrl !== "ADD VIDEO" ? videoUrl : "#"}
          className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <Play className="ml-1" size={32} />
          </div>
        </a>
      </div>

      <div>
        <h3 className="text-2xl font-cinematic font-bold uppercase tracking-wide mb-2">{title}</h3>
        <p className="text-accent tracking-widest text-sm uppercase mb-4">{role}</p>
        <p className="text-muted font-light mb-4">{description}</p>
        <p className="text-xs tracking-widest text-white/50 uppercase">Tools: {tools}</p>
      </div>
    </motion.div>
  );
}

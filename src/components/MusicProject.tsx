import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface MusicProjectProps {
  title: string;
  type: string;
  description: string;
  role: string;
  coverUrl: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  audioUrl?: string;
}

export function MusicProject({ title, type, description, role, coverUrl, spotifyUrl, youtubeUrl }: MusicProjectProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/10 py-12"
    >
      <div className="md:col-span-4 relative overflow-hidden aspect-square">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        {coverUrl === "ADD IMAGE" ? (
          <div className="w-full h-full bg-card flex items-center justify-center border border-white/5 group-hover:scale-105 transition-transform duration-700">
            <span className="text-muted tracking-widest text-sm uppercase">Cover Art</span>
          </div>
        ) : (
          <img 
            src={coverUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        )}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-black">
          <Play className="ml-1" size={24} />
        </button>
      </div>

      <div className="md:col-span-8 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-4xl md:text-5xl font-cinematic font-bold uppercase tracking-wide">{title}</h3>
          <span className="px-3 py-1 border border-white/20 rounded-full text-xs tracking-widest uppercase text-muted">
            {type}
          </span>
        </div>
        
        <p className="text-accent tracking-widest text-sm uppercase mb-6">{role}</p>
        <p className="text-lg text-muted font-light max-w-2xl mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center gap-6 mt-auto">
          {spotifyUrl && spotifyUrl !== "ADD SPOTIFY LINK" ? (
            <a href={spotifyUrl} className="text-sm tracking-widest hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">SPOTIFY</a>
          ) : (
            <span className="text-sm tracking-widest text-white/30 cursor-not-allowed">SPOTIFY</span>
          )}
          
          {youtubeUrl && youtubeUrl !== "ADD YOUTUBE LINK" ? (
            <a href={youtubeUrl} className="text-sm tracking-widest hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">YOUTUBE</a>
          ) : (
            <span className="text-sm tracking-widest text-white/30 cursor-not-allowed">YOUTUBE</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

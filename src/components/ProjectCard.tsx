import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  problem: string;
  solution: string;
  technology: string;
  githubUrl: string;
  liveUrl: string;
}

export function ProjectCard({ title, problem, solution, technology, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative border border-white/10 bg-card p-8 hover:border-white/30 transition-colors duration-500 flex flex-col"
    >
      <h3 className="text-2xl font-cinematic font-bold mb-4">{title}</h3>
      
      <div className="space-y-4 flex-grow text-sm text-muted">
        <div>
          <span className="text-white/70 block mb-1 font-medium">Problem</span>
          <p>{problem}</p>
        </div>
        <div>
          <span className="text-white/70 block mb-1 font-medium">Solution</span>
          <p>{solution}</p>
        </div>
        <div className="pt-4 border-t border-white/10 mt-6">
          <span className="text-white/70 block mb-1 font-medium">Technology</span>
          <p className="text-accent">{technology}</p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        {githubUrl && githubUrl !== "ADD LINK" && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium tracking-wide hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
            GITHUB
          </a>
        )}
        {liveUrl && liveUrl !== "ADD LINK" && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium tracking-wide hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
            LIVE DEMO
          </a>
        )}
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background border-t border-border/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16 w-full">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-foreground leading-none">
            PROJECTS
          </h2>
          <div className="flex items-center flex-1 max-w-[200px] md:max-w-[280px]">
            <div className="h-[2px] md:h-[3px] w-full bg-[#7A2635] dark:bg-[#A94655] transition-colors duration-300" />
            <svg 
              viewBox="0 0 48 48" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-10 h-10 md:w-14 md:h-14 text-[#7A2635] dark:text-[#A94655] -ml-2 shrink-0 drop-shadow-sm transition-colors duration-300"
            >
              <path 
                d="M24 0 C24 13.25 34.75 24 48 24 C34.75 24 24 34.75 24 48 C24 34.75 13.25 24 0 24 C13.25 24 24 13.25 24 0 Z" 
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group`}
            >
              
              {/* Project Image */}
              <div className="w-full lg:w-3/5 overflow-hidden rounded-2xl relative bg-secondary aspect-[16/10] lg:aspect-auto lg:h-[600px] border border-border">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-2/5 flex flex-col items-start relative">
                
                {/* Accent line that grows on hover */}
                <div className="absolute -left-8 top-0 w-1 h-0 bg-[#7A2635] dark:bg-[#A94655] group-hover:h-full transition-all duration-700 ease-in-out hidden lg:block" />

                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-[#7A2635]/30 dark:border-[#A94655]/40 text-xs font-bold tracking-widest uppercase text-[#7A2635] dark:text-[#A94655] bg-[#7A2635]/5 dark:bg-[#641E2B]/20">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6 uppercase">
                  {project.title}
                </h3>
                
                <p className="text-lg text-muted font-light leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs font-semibold tracking-wider uppercase text-foreground/70 bg-card border border-border px-3 py-1 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto">
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold tracking-[0.2em] uppercase text-foreground hover:text-[#7A2635] dark:hover:text-[#A94655] transition-colors group/link"
                    >
                      View Live 
                      <ArrowUpRight size={18} className="transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold tracking-[0.2em] uppercase text-muted hover:text-foreground transition-colors"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

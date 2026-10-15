import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-background border-t border-border/10">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Header */}
        <div className="mb-8 sm:mb-10 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-none">
            PROJECTS
          </h2>
        </div>

        {/* Compact Projects List */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {portfolioData.projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="p-4 sm:p-5 rounded-2xl bg-card/60 dark:bg-[#C04365]/[0.08] border border-border/80 hover:border-[#7A2635]/40 dark:hover:border-[#FFA3B8]/40 transition-all duration-300 shadow-2xs hover:shadow-md group"
            >
              <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-5 lg:gap-7 items-center`}>
                
                {/* Compact Media Container */}
                <div className="w-full lg:w-1/2 overflow-hidden rounded-xl relative bg-secondary aspect-[16/10] sm:aspect-[16/9] lg:h-[260px] border border-border/60 group/preview shrink-0">
                  {project.videoUrl ? (
                    <video 
                      src={project.videoUrl} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700 ease-in-out opacity-95 group-hover:opacity-100"
                    />
                  ) : project.images ? (
                    <div className="w-full h-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                      {project.images.map((img, i) => (
                        <div key={i} className="w-full h-full shrink-0 snap-center relative">
                          <img 
                            src={img} 
                            alt={`${project.title} - ${i + 1}`} 
                            className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700 ease-in-out opacity-95 group-hover:opacity-100"
                          />
                        </div>
                      ))}
                    </div>
                  ) : project.iframeUrl ? (
                    <iframe 
                      src={project.iframeUrl} 
                      className="w-full h-full border-none object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500" 
                      title={project.title}
                      sandbox="allow-scripts allow-same-origin"
                    />
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700 ease-in-out opacity-95 group-hover:opacity-100"
                    />
                  )}
                  
                  {project.iframeUrl && (
                    <div className="absolute inset-0 z-10 group-hover/preview:pointer-events-none transition-all duration-300 bg-transparent" />
                  )}
                  
                  {project.images && project.images.length > 1 && (
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20 pointer-events-none">
                      {project.images.map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/70 backdrop-blur-xs" />
                      ))}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Compact Project Details */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  
                  {/* Category Pill */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full border border-[#7A2635]/25 dark:border-[#FFA3B8]/30 text-[10px] font-bold tracking-wider uppercase text-[#7A2635] dark:text-[#FFA3B8] bg-[#7A2635]/5 dark:bg-[#641E2B]/20">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-foreground mb-2 uppercase group-hover:text-[#7A2635] dark:group-hover:text-[#FFA3B8] transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed mb-3.5 max-w-md">
                    {project.description}
                  </p>
                  
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-foreground/70 bg-black/5 dark:bg-white/5 border border-border/60 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-0.5">
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#7A2635] text-white hover:brightness-110 active:scale-95 text-xs font-bold tracking-wider uppercase transition-all shadow-xs group/link"
                      >
                        <span>View Live</span>
                        <ArrowUpRight size={13} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all shadow-xs ${
                          !project.live 
                            ? 'bg-[#7A2635] text-white hover:brightness-110 active:scale-95' 
                            : 'bg-black/5 dark:bg-white/10 hover:bg-black/10 text-foreground border border-border/60'
                        }`}
                      >
                        <span>Source Code</span>
                        <ArrowUpRight size={13} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Note: Creative Work on Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-6 sm:mt-8 p-5 sm:p-6 md:p-7 rounded-2xl bg-card/80 dark:bg-[#C04365]/[0.10] border border-[#7A2635]/35 dark:border-[#FFA3B8]/35 shadow-xs relative overflow-hidden group"
        >
          {/* Subtle gradient background accent */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-radial from-[#7A2635]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#7A2635]/10 dark:bg-[#FFA3B8]/15 border border-[#7A2635]/25 dark:border-[#FFA3B8]/30 text-[#7A2635] dark:text-[#FFA3B8] text-[10px] font-extrabold tracking-widest uppercase mb-2.5">
                <Sparkles size={11} />
                <span>Note</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground leading-tight">
                See Creative Work <span className="text-[#7A2635] dark:text-[#FFA3B8]">on Social Media</span>
              </h3>
              <p className="text-xs sm:text-sm text-foreground/75 mt-1.5 leading-relaxed">
                Looking for original music releases, singing, songwriting, audio productions, films, and studio creations? All multidisciplinary creative works are showcased live across our official social channels.
              </p>
            </div>

            {/* Quick Links / Action Button */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href="#social"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#7A2635] text-white hover:brightness-110 active:scale-95 text-xs font-bold tracking-wider uppercase transition-all shadow-xs"
              >
                <span>View Creative Channels</span>
                <ArrowDown size={13} />
              </a>
              <a
                href="https://instagram.com/aimeryadav"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-[#7A2635]/10 dark:hover:bg-white/15 text-foreground hover:text-[#7A2635] dark:hover:text-[#FFA3B8] border border-border/70 text-xs font-bold tracking-wider uppercase transition-all"
              >
                <span>Instagram</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="https://youtube.com/@aimeryadav"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-[#7A2635]/10 dark:hover:bg-white/15 text-foreground hover:text-[#7A2635] dark:hover:text-[#FFA3B8] border border-border/70 text-xs font-bold tracking-wider uppercase transition-all"
              >
                <span>YouTube</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="https://open.spotify.com/artist/aimeryadav"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-[#7A2635]/10 dark:hover:bg-white/15 text-foreground hover:text-[#7A2635] dark:hover:text-[#FFA3B8] border border-border/70 text-xs font-bold tracking-wider uppercase transition-all"
              >
                <span>Spotify</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MoreHorizontal, Sparkles, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ChairLampScene } from '../components/ChairLampScene';

export function HeroSection() {
  const [searchValue, setSearchValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [answer, setAnswer] = useState<{ query: string; text: string } | null>(null);

  const suggestions = [
    "What technologies does Amit know?",
    "Tell me about his creative skills.",
    "What certificates does Amit have?",
    "Show me his projects.",
    "Tell me about Amit."
  ];

  const handleSearchSubmit = (customQuery?: string) => {
    const query = (customQuery || searchValue).trim();
    if (!query) return;

    setShowSuggestions(false);
    setSearchValue('');

    const lower = query.toLowerCase();
    if (lower.includes('project') || lower.includes('work')) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lower.includes('skill') || lower.includes('tech')) {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lower.includes('certif') || lower.includes('recommendation') || lower.includes('endorsement')) {
      document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lower.includes('resume') || lower.includes('cv') || lower.includes('experience')) {
      document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('hire')) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lower.includes('about') || lower.includes('who is') || lower.includes('aimer') || lower.includes('amit')) {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }

    // Look up answer from portfolioData.aiResponses or generate answer
    const found = Object.entries(portfolioData.aiResponses).find(([k]) => 
      k.toLowerCase().includes(lower) || lower.includes(k.toLowerCase().slice(0, 15))
    );
    const text = found 
      ? found[1] 
      : (portfolioData.aiResponses[query as keyof typeof portfolioData.aiResponses] || 
         "Amit is a multidisciplinary creative technologist, final-year Computer Science student at RVITM, developer, and music & visual media producer.");

    setAnswer({ query, text });
  };

  return (
    <section className="relative w-full min-h-screen lg:h-screen lg:min-h-[700px] pt-24 lg:pt-14 pb-12 lg:pb-8 flex items-center justify-center overflow-x-clip bg-background">
      <div className="w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-6 sm:px-10 md:px-12 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Side: Chair & Floor Lamp Scene + Character */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-6 flex items-end justify-center lg:justify-end gap-2 sm:gap-4 md:gap-5 relative overflow-visible"
          >
            {/* Cozy Armchair + Vintage Floor Lamp Scene from Image 2 */}
            <div className="relative h-[48vh] sm:h-[56vh] md:h-[62vh] lg:h-[66vh] xl:h-[70vh] max-h-[640px] min-h-[300px] aspect-[715/1000] shrink-0 mb-0.5 z-10 flex items-end justify-center overflow-visible">
              <ChairLampScene className="w-full h-full" />
            </div>

            {/* Avatar Standing Image (Main Visual Focus, preserved from Image 1) */}
            <div className="relative h-[60vh] sm:h-[68vh] md:h-[74vh] lg:h-[78vh] xl:h-[82vh] max-h-[740px] min-h-[360px] aspect-[575/1024] flex items-end justify-center shrink-0 z-20">
              <img 
                src="/hero-avatar.png" 
                alt="Amit waving"
                className="w-full h-full object-contain object-bottom drop-shadow-2xl select-none pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Right Side: Title, Subheading & Search Bar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-start lg:pl-4 xl:pl-8"
          >
            {/* AMIT —✦ with Burgundy accent */}
            <div className="flex items-center gap-4 mb-3 w-full">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[94px] xl:text-[112px] 2xl:text-[124px] font-black uppercase tracking-tight text-foreground leading-none">
                {portfolioData.personalInfo.name}
              </h1>
              
              <div className="flex items-center flex-1 max-w-[180px] sm:max-w-[240px] md:max-w-[320px]">
                <div className="h-[2px] md:h-[3px] w-full bg-[#7A2635] dark:bg-[#A94655] transition-colors duration-300" />
                <svg 
                  viewBox="0 0 48 48" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 lg:w-18 lg:h-18 text-[#7A2635] dark:text-[#A94655] -ml-2 shrink-0 drop-shadow-sm transition-colors duration-300"
                >
                  <path 
                    d="M24 0 C24 13.25 34.75 24 48 24 C34.75 24 24 34.75 24 48 C24 34.75 13.25 24 0 24 C13.25 24 24 13.25 24 0 Z" 
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            {/* Subtitle Info */}
            <div className="mb-7 lg:mb-9">
              <p className="text-sm md:text-base lg:text-lg font-extrabold tracking-wider uppercase text-foreground mb-2 sm:mb-3">
                ALSO KNOWN AS {portfolioData.personalInfo.aka}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] font-extrabold tracking-tight text-foreground leading-tight">
                {portfolioData.personalInfo.title}
              </h2>
            </div>

            {/* Search Bar matching "Ask anything about me..." */}
            <div className="w-full max-w-[560px] xl:max-w-[620px] 2xl:max-w-[660px] relative">
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    className="absolute bottom-full left-0 w-full mb-3 bg-card border border-border/80 dark:border-[#13423E] rounded-2xl p-3 shadow-2xl flex flex-wrap gap-2 z-30 backdrop-blur-md"
                  >
                    <p className="w-full text-[10px] font-bold uppercase tracking-wider text-foreground/60 px-1 mb-1">
                      Quick Questions:
                    </p>
                    {suggestions.map((sug, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSearchSubmit(sug)}
                        className="px-3.5 py-1.5 bg-slate-100 dark:bg-[#0B2F2F] hover:bg-[#7A2635]/15 dark:hover:bg-[#A83252]/30 hover:text-[#7A2635] dark:hover:text-[#FFA3B8] rounded-full text-xs font-semibold text-foreground/85 transition-all text-left"
                      >
                        {sug}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <form 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  handleSearchSubmit(); 
                }} 
                className="relative flex items-center shadow-md rounded-full"
              >
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Ask anything about me..."
                  className="w-full bg-[#F4F8FA] dark:bg-[#071818] border border-slate-300 dark:border-[#13423E] rounded-full py-3.5 sm:py-4 pl-5 sm:pl-6 pr-24 text-foreground focus:outline-none focus:border-[#7A2635] dark:focus:border-[#A83252] transition-colors text-sm sm:text-base font-medium placeholder:text-foreground/50"
                />
                
                <div className="absolute right-2 flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setShowSuggestions(!showSuggestions)}
                    className="p-2 text-foreground/60 hover:text-foreground transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10"
                    aria-label="Quick questions"
                    title="Suggestions"
                  >
                    <MoreHorizontal size={19} />
                  </button>
                  <button
                    type="submit"
                    disabled={!searchValue.trim()}
                    className="w-9 h-9 rounded-full bg-[#050505] dark:bg-[#0E3A37] text-white dark:text-[#F5F1EC] flex items-center justify-center hover:bg-[#7A2635] dark:hover:bg-[#A83252] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                    aria-label="Submit search"
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>
              </form>

              {/* Instant Answer Popover */}
              <AnimatePresence>
                {answer && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    className="mt-3 p-4 rounded-2xl bg-card border border-[#7A2635]/30 dark:border-[#A83252]/40 shadow-xl relative backdrop-blur-md"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A2635] dark:text-[#FFA3B8]">
                        <Sparkles size={14} />
                        <span className="line-clamp-1">{answer.query}</span>
                      </div>
                      <button
                        onClick={() => setAnswer(null)}
                        className="p-1 rounded-full text-foreground/50 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        aria-label="Close answer"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                      {answer.text}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Navigation Tools: 4 on top, 2 on bottom, centered */}
            <div className="flex flex-col items-center justify-center gap-2.5 sm:gap-3 mt-5 w-full max-w-[560px] xl:max-w-[620px] 2xl:max-w-[660px]">
              {/* Top Row: 4 items */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 w-full">
                {[
                  { label: 'Me', emoji: '🧑🏻', href: '#about' },
                  { label: 'Projects', emoji: '📁', href: '#projects' },
                  { label: 'Skills', emoji: '🛠️', href: '#skills' },
                  { label: 'Certificates', emoji: '📜', href: '#certificates' },
                ].map((tool) => (
                  <a
                    key={tool.label}
                    href={tool.href}
                    className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-[#F4F8FA] dark:bg-[#071818]/90 border border-slate-300 dark:border-white/10 hover:border-[#7A2635] dark:hover:border-[#A83252] hover:bg-[#7A2635]/10 dark:hover:bg-[#A83252]/20 text-foreground text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 transition-all duration-200 shadow-sm hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <span className="text-sm sm:text-base leading-none">{tool.emoji}</span>
                    <span>{tool.label}</span>
                  </a>
                ))}
              </div>

              {/* Bottom Row: 2 items */}
              <div className="flex items-center justify-center gap-2.5 sm:gap-3 w-full">
                {[
                  { label: 'Resume', emoji: '📄', href: '#resume' },
                  { label: 'Contacts', emoji: '🤝', href: '#contact' },
                ].map((tool) => (
                  <a
                    key={tool.label}
                    href={tool.href}
                    className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-2xl bg-[#F4F8FA] dark:bg-[#071818]/90 border border-slate-300 dark:border-white/10 hover:border-[#7A2635] dark:hover:border-[#A83252] hover:bg-[#7A2635]/10 dark:hover:bg-[#A83252]/20 text-foreground text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 transition-all duration-200 shadow-sm hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <span className="text-sm sm:text-base leading-none">{tool.emoji}</span>
                    <span>{tool.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

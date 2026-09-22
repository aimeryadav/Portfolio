import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const links = [
  { name: 'PROJECTS', href: '#projects' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CERTIFICATES', href: '#certificates' },
  { name: 'RESUME', href: '#resume' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 flex justify-center",
          scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/40 py-4 shadow-sm" : "bg-transparent py-7"
        )}
      >
        <div className="w-full max-w-7xl px-6 md:px-12 flex items-center justify-between">
          {/* Left: Open For Opportunities */}
          <div className="flex items-center">
            <span className="text-xs md:text-sm font-extrabold tracking-wider text-foreground uppercase">
              OPEN FOR OPPORTUNITIES
            </span>
          </div>

          {/* Right: Nav Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {/* 4-point sparkle star with Burgundy accent */}
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#7A2635] dark:text-[#A94655] mr-2 shrink-0 transition-colors">
              <path d="M12 0 C12 6.6 17.4 12 24 12 C17.4 12 12 17.4 12 24 C12 17.4 6.6 12 0 12 C6.6 12 12 6.6 12 0 Z" fill="currentColor"/>
            </svg>

            {links.map((link, index) => (
              <div key={link.name} className="flex items-center">
                <a
                  href={link.href}
                  className="text-xs font-bold tracking-wider text-foreground/90 hover:text-[#7A2635] dark:hover:text-[#A94655] transition-colors uppercase"
                >
                  {link.name}
                </a>
                {index < links.length - 1 && (
                  <span className="mx-2 text-foreground/40 text-xs">·</span>
                )}
              </div>
            ))}
            
            <span className="mx-2 text-foreground/40 text-xs">·</span>
            
            <a
              href={portfolioData.personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-wider text-foreground/90 hover:text-[#7A2635] dark:hover:text-[#A94655] transition-colors uppercase"
            >
              GITHUB
            </a>
            
            <span className="mx-2 text-foreground/40 text-xs">·</span>
            
            <a
              href={portfolioData.personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-wider text-foreground/90 hover:text-[#7A2635] dark:hover:text-[#A94655] transition-colors uppercase"
            >
              LINKEDIN
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-5 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </nav>

          <div className="lg:hidden flex items-center gap-4">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button 
              className="z-50 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold uppercase tracking-widest text-foreground hover:text-[#7A2635] dark:hover:text-[#A94655] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <div className="w-16 h-px bg-border my-4" />
              
              <motion.a
                href={portfolioData.personalInfo.social.github}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.05 }}
                className="text-xl font-bold uppercase tracking-widest text-foreground hover:text-[#7A2635] dark:hover:text-[#A94655] transition-colors"
              >
                GITHUB
              </motion.a>
              <motion.a
                href={portfolioData.personalInfo.social.linkedin}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (links.length + 1) * 0.05 }}
                className="text-xl font-bold uppercase tracking-widest text-foreground hover:text-[#7A2635] dark:hover:text-[#A94655] transition-colors"
              >
                LINKEDIN
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

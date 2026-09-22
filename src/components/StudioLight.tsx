import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface StudioLightProps {
  className?: string;
}

export function StudioLight({ className = '' }: StudioLightProps) {
  const { theme, toggleTheme } = useTheme();
  const isLit = theme === 'light';

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label={isLit ? "Turn studio light off (Switch to Dark Mode)" : "Turn studio light on (Switch to Light Mode)"}
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`relative group cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A2635] rounded-2xl flex items-end justify-center ${className}`}
    >
      {/* Studio Light Micro Tooltip */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 whitespace-nowrap">
        <div className="px-3.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-[#050505]/90 text-white dark:bg-[#F4F8FA] dark:text-[#050505] shadow-xl backdrop-blur-md flex items-center gap-2 border border-white/10 dark:border-black/10">
          <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${isLit ? 'bg-amber-400 shadow-[0_0_8px_#f59e0b]' : 'bg-slate-400'}`} />
          <span>{isLit ? 'STUDIO LIGHT ON • CLICK FOR DARK' : 'STUDIO LIGHT OFF • CLICK TO TURN ON'}</span>
        </div>
      </div>

      {/* Realistic Cinematic Volumetric Light Emission (Active when Lit / Light Mode) */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {/* Softbox forward beam casting across the character */}
        <motion.div
          animate={{
            opacity: isLit ? 0.85 : 0,
            scale: isLit ? 1 : 0.9,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute top-[8%] left-[20%] w-[280%] h-[60%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at left top, rgba(255, 235, 175, 0.45) 0%, rgba(255, 210, 120, 0.2) 35%, rgba(255, 180, 70, 0.05) 60%, transparent 75%)',
            filter: 'blur(32px)',
          }}
        />

        {/* Core softbox incandescent glow halo */}
        <motion.div
          animate={{
            opacity: isLit ? 1 : 0,
            scale: isLit ? 1 : 0.85,
          }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="absolute top-[3%] left-[5%] w-[120%] h-[35%] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 245, 215, 0.6) 0%, rgba(255, 220, 140, 0.25) 50%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />

        {/* Subtle hover preview halo in Dark Mode */}
        <div 
          className="absolute top-[5%] left-[10%] w-[100%] h-[30%] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: isLit ? 'none' : 'radial-gradient(circle, rgba(255, 235, 180, 0.25) 0%, transparent 65%)',
            filter: 'blur(16px)',
          }}
        />
      </div>

      {/* Layered Studio Side Light: OFF (matte black gear) & ON (illuminated 5600K beam) */}
      <div className="relative w-full h-full aspect-[719/1313] flex items-end justify-center">
        {/* Studio Light OFF State: High-end continuous softbox light on tripod */}
        <img
          src="/studio-light-off.png"
          alt="Cinematography Studio Side Light (Theme Toggle)"
          className="w-full h-full object-contain object-bottom drop-shadow-xl pointer-events-none"
          loading="eager"
        />

        {/* Studio Light ON State: Illuminated softbox grid emitting warm 5600K cinematic light */}
        <motion.img
          src="/studio-light-on.png"
          alt="Cinematography Studio Side Light Illuminated"
          animate={{ opacity: isLit ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-2xl pointer-events-none"
          loading="eager"
        />
      </div>
    </motion.div>
  );
}

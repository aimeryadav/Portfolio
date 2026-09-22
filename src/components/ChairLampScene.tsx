import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface ChairLampSceneProps {
  className?: string;
}

export function ChairLampScene({ className = '' }: ChairLampSceneProps) {
  const { theme, toggleTheme } = useTheme();
  // In dark mode, the cozy floor lamp is warmly lit in a dark room. In light mode, it is in soft daylight state.
  const isLit = theme === 'dark';

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label={isLit ? "Turn lamp off (Switch to Light Mode)" : "Turn lamp on (Switch to Dark Mode)"}
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      }}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`relative group cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A2635] rounded-2xl flex items-end justify-center overflow-visible ${className}`}
    >
      {/* Micro Tooltip */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 whitespace-nowrap">
        <div className="px-3.5 py-1.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-[#050505]/90 text-white dark:bg-[#F4F8FA] dark:text-[#050505] shadow-xl backdrop-blur-md flex items-center gap-2 border border-white/10 dark:border-black/10">
          <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${isLit ? 'bg-amber-400 shadow-[0_0_8px_#f59e0b]' : 'bg-slate-400'}`} />
          <span>{isLit ? 'COZY NIGHT MODE • CLICK FOR DAYLIGHT' : 'DAYLIGHT MODE • CLICK TO TURN ON LAMP'}</span>
        </div>
      </div>

      {/* Atmospheric Ambient Light Scatter (Active in Dark Mode — Unconstrained, smooth room fill) */}
      <div className="absolute inset-0 pointer-events-none overflow-visible -z-10">
        {/* Broad atmospheric amber wash scattering outwards across room */}
        <motion.div
          animate={{
            opacity: isLit ? 0.85 : 0,
            scale: isLit ? 1 : 0.88,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute -top-[25%] -right-[35%] w-[190%] h-[95%] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 75% 22%, rgba(255, 190, 85, 0.28) 0%, rgba(255, 150, 50, 0.12) 32%, rgba(255, 110, 25, 0.04) 55%, transparent 72%)',
            filter: 'blur(55px)',
          }}
        />

        {/* Directional beam spill casting softly towards Amit on the right */}
        <motion.div
          animate={{
            opacity: isLit ? 0.7 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute top-[8%] left-[35%] w-[150%] h-[65%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at left top, rgba(255, 205, 100, 0.2) 0%, rgba(255, 155, 50, 0.06) 45%, transparent 70%)',
            filter: 'blur(45px)',
          }}
        />

        {/* Floor warmth pool under the scene */}
        <motion.div
          animate={{
            opacity: isLit ? 0.55 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute -bottom-[6%] left-[5%] w-[110%] h-[32%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 65% 55%, rgba(255, 175, 65, 0.22) 0%, transparent 65%)',
            filter: 'blur(35px)',
          }}
        />
      </div>

      {/* Layered Chair + Lamp Scene: Daylight / Unlit vs Authentic Night / Dark Form */}
      <div className="relative w-full h-full aspect-[715/1000] flex items-end justify-center overflow-visible">
        {/* Base Daylight / Unlit state (Light Mode) */}
        <motion.img
          src="/chair-lamp-scene.png"
          alt="Cozy armchair with throw blanket and vintage floor lamp"
          animate={{ opacity: isLit ? 0 : 1 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="w-full h-full object-contain object-bottom drop-shadow-xl pointer-events-none"
          loading="eager"
        />

        {/* Authentic Night / Dark Form state (Dark Mode) - Zero boundary lines, natural illumination */}
        <motion.img
          src="/chair-lamp-scene-dark.png"
          alt="Cozy armchair with glowing floor lamp in dark room"
          animate={{ opacity: isLit ? 1 : 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-2xl pointer-events-none"
          loading="eager"
        />
      </div>
    </motion.div>
  );
}

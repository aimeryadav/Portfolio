import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface StandingLampProps {
  className?: string;
}

export function StandingLamp({ className = '' }: StandingLampProps) {
  const { theme, toggleTheme } = useTheme();
  const isLit = theme === 'light';

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label={isLit ? "Turn lamp off (Switch to Dark Mode)" : "Turn lamp on (Switch to Light Mode)"}
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`relative group cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A2635] rounded-xl flex items-end justify-center ${className}`}
    >
      {/* Designer Micro Tooltip */}
      <div className="absolute -top-11 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 whitespace-nowrap">
        <div className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#050505]/90 text-white dark:bg-[#F4F8FA] dark:text-[#050505] shadow-lg backdrop-blur-md flex items-center gap-1.5 border border-white/10 dark:border-black/10">
          <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isLit ? 'bg-amber-400 shadow-[0_0_8px_#f59e0b]' : 'bg-slate-400'}`} />
          <span>{isLit ? 'CLICK TO TURN OFF' : 'CLICK TO TURN ON'}</span>
        </div>
      </div>

      {/* Realistic Warm Light Emission (Only active when lamp is ON / Light Mode) */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {/* Upper lampshade radial ambient halo */}
        <motion.div
          animate={{
            opacity: isLit ? 1 : 0,
            scale: isLit ? 1 : 0.88,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute top-[11%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260%] aspect-square rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255, 215, 130, 0.35) 0%, rgba(255, 190, 80, 0.16) 38%, rgba(255, 170, 60, 0) 70%)',
            filter: 'blur(28px)',
          }}
        />

        {/* Soft lampshade internal warm glow */}
        <motion.div
          animate={{
            opacity: isLit ? 0.75 : 0,
          }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="absolute top-[2%] left-[8%] right-[8%] h-[20%] rounded-md pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 235, 175, 0.55) 0%, rgba(255, 195, 100, 0.2) 60%, transparent 100%)',
            mixBlendMode: 'screen',
            filter: 'blur(8px)',
          }}
        />

        {/* Soft downward light wash on the carved spindle stand */}
        <motion.div
          animate={{
            opacity: isLit ? 0.65 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[170%] h-[48%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(255, 210, 110, 0.16) 0%, transparent 65%)',
            filter: 'blur(18px)',
          }}
        />

        {/* Subtle preview glow when hovering unlit lamp in Dark Mode */}
        <div 
          className="absolute top-[11%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] aspect-square rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: isLit ? 'none' : 'radial-gradient(circle, rgba(255, 215, 130, 0.18) 0%, transparent 60%)',
            filter: 'blur(20px)',
          }}
        />
      </div>

      {/* Layered Vintage Standing Lamp: OFF (base unlit) and ON (illuminated) */}
      <div className="relative w-full h-full aspect-[330/1260] flex items-end justify-center">
        {/* Lamp OFF state: Unlit burgundy drum lampshade, unlit interior, antique carved spindle stand */}
        <img
          src="/vintage-lamp-off.png"
          alt="Vintage Standing Floor Lamp (Theme Toggle)"
          className="w-full h-full object-contain object-bottom drop-shadow-md pointer-events-none"
          loading="eager"
        />

        {/* Lamp ON state: Warm incandescent burgundy drum lampshade illuminated */}
        <motion.img
          src="/vintage-lamp-on.png"
          alt="Vintage Standing Floor Lamp Illuminated"
          animate={{ opacity: isLit ? 1 : 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-lg pointer-events-none"
          loading="eager"
        />
      </div>
    </motion.div>
  );
}


interface SectionHeaderProps {
  title: string;
  className?: string;
  lineClassName?: string;
}

export function SectionHeader({ title, className = "", lineClassName = "" }: SectionHeaderProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground select-none">
        {title}
      </h2>
      {/* Horizontal accent line ending in a 4-pointed sparkle star */}
      <div className={`flex items-center flex-1 max-w-[240px] md:max-w-[320px] ${lineClassName}`}>
        <div className="h-[2px] md:h-[3px] w-full bg-[#7A2635] dark:bg-[#A94655] transition-colors duration-300" />
        <svg 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#7A2635] dark:text-[#A94655] -ml-2 shrink-0 transition-colors duration-300 drop-shadow-sm"
        >
          {/* 4-pointed star geometry matching the reference PDF */}
          <path 
            d="M24 0 C24 13.25 34.75 24 48 24 C34.75 24 24 34.75 24 48 C24 34.75 13.25 24 0 24 C13.25 24 24 13.25 24 0 Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}

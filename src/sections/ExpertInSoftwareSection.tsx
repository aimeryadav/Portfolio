
const softwareList = [
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Adobe Photoshop",
  "DaVinci Resolve",
  "Ableton Live",
  "Pro Tools",
  "Canva",
  "Figma",
  "Blender",
  "Microsoft"
];

export function ExpertInSoftwareSection() {
  return (
    <section id="software" className="py-20 md:py-28 flex flex-col justify-center bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* EXPERT IN THESE SOFTWARES —✦ Header */}
        <div className="flex items-center gap-4 mb-10 w-full">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground leading-none">
            EXPERT IN THESE SOFTWARES
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

        {/* Large Rounded Card matching Light/Dark theme surfaces */}
        <div className="w-full rounded-[36px] md:rounded-[44px] p-8 sm:p-12 md:p-16 bg-[#F4F8FA] dark:bg-[#C04365]/[0.21] text-[#050505] dark:text-[#FFF5F8] border border-slate-300 dark:border-[#C04365]/35 shadow-sm dark:shadow-2xl backdrop-blur-sm transition-colors duration-400">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <ul className="space-y-4">
              {softwareList.slice(0, 5).map((item) => (
                <li key={item} className="flex items-center text-lg sm:text-xl font-bold tracking-wide text-[#050505] dark:text-[#FFF5F8]">
                  <span className="mr-3 text-xl leading-none text-[#7A2635] dark:text-[#FFA3B8]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-4">
              {softwareList.slice(5).map((item) => (
                <li key={item} className="flex items-center text-lg sm:text-xl font-bold tracking-wide text-[#050505] dark:text-[#FFF5F8]">
                  <span className="mr-3 text-xl leading-none text-[#7A2635] dark:text-[#FFA3B8]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

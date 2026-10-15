
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
        
        {/* EXPERT IN THESE SOFTWARES Header */}
        <div className="mb-10 w-full">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground leading-none">
            EXPERT IN THESE SOFTWARES
          </h2>
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

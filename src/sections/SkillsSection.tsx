import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Grid, Layout } from 'lucide-react';

interface SkillCategory {
  id: string;
  icon: string;
  title: string;
  col1: string[];
  col2?: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "cs",
    icon: "💻",
    title: "Computer Science & Development",
    col1: [
      "C",
      "C++",
      "Python",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOP)",
      "GitHub"
    ],
    col2: [
      "Web Development",
      "Machine Learning",
      "NumPy",
      "Blockchain",
      "Cloud Computing",
      "Computer Networks",
      "Operating Systems",
      "Git"
    ]
  },
  {
    id: "ai",
    icon: "🤖",
    title: "AI & Generative AI",
    col1: [
      "Generative AI",
      "Prompt Engineering",
      "AI-assisted Content Creation",
      "AI-assisted Writing",
      "AI-assisted Coding",
      "AI Image Generation",
      "AI Video Generation"
    ],
    col2: [
      "AI Music Generation",
      "AI Research & Productivity",
      "AI Workflow Design",
      "AI Creative Automation",
      "AI Tools & Platforms"
    ]
  },
  {
    id: "film",
    icon: "🎬",
    title: "Film, Video & Post-Production",
    col1: [
      "Video Editing",
      "Advanced Video Editing",
      "Complete Post-Production",
      "Color Correction",
      "Color Grading",
      "Motion Graphics",
      "VFX",
      "Compositing",
      "Green Screen / Chroma Key",
      "Visual Effects"
    ],
    col2: [
      "Video Finishing",
      "Sound Design",
      "Audio Editing",
      "Music Video Post-Production",
      "Trailer Editing",
      "Promo Editing",
      "Short-form Video Editing",
      "Cinematic Editing",
      "Creative Direction",
      "Visual Storytelling"
    ]
  },
  {
    id: "music",
    icon: "🎵",
    title: "Music & Audio",
    col1: [
      "Singing",
      "Rap",
      "Songwriting",
      "Lyrics Writing",
      "Song Composition",
      "Music Production"
    ],
    col2: [
      "Recording",
      "Audio Editing",
      "Sound Design",
      "Mixing",
      "Mastering"
    ]
  },
  {
    id: "design",
    icon: "🎨",
    title: "Design",
    col1: [
      "Graphic Design",
      "UI/UX Design",
      "Visual Design",
      "Poster Design",
      "Album Cover Design"
    ],
    col2: [
      "Cover Art",
      "YouTube Thumbnail Design",
      "Social Media Creatives",
      "Branding",
      "Presentation Design"
    ]
  },
  {
    id: "tools",
    icon: "🧑‍💼",
    title: "Microsoft & Professional Tools",
    col1: [
      "Microsoft Word",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Microsoft Outlook",
      "Microsoft Teams",
      "Microsoft Office Suite"
    ],
    col2: [
      "Document Creation",
      "Document Formatting",
      "Spreadsheet Management",
      "Data Presentation",
      "Presentation / Pitch Deck Creation"
    ]
  },
  {
    id: "marketing",
    icon: "📊",
    title: "Marketing & Digital",
    col1: [
      "Digital Marketing",
      "Social Media Marketing",
      "Content Strategy"
    ],
    col2: [
      "Personal Branding",
      "Creative Marketing",
      "Social Media Content Creation"
    ]
  },
  {
    id: "writing",
    icon: "✍️",
    title: "Writing & Filmmaking",
    col1: [
      "Writing",
      "Songwriting",
      "Story Writing",
      "Screenwriting",
      "Dialogue Writing",
      "Script Writing",
      "Poetry / Shayari"
    ],
    col2: [
      "Concept Development",
      "Direction",
      "Film Direction",
      "Music Video Direction",
      "Creative Direction",
      "Visual Direction",
      "Storytelling"
    ]
  }
];

export function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewAll, setViewAll] = useState(false);

  const activeCategory = skillCategories[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : skillCategories.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < skillCategories.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="skills" className="py-20 md:py-28 min-h-screen flex flex-col justify-center bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* SKILLS —✦ Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-foreground leading-none">
              SKILLS
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

          {/* View toggle (Slides vs All) */}
          {/* View toggle (Slides vs All) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewAll(!viewAll)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-[#C04365]/35 bg-[#F4F8FA] dark:bg-[#C04365]/[0.15] text-xs font-bold uppercase tracking-wider text-foreground hover:border-[#7A2635] dark:hover:border-[#E06485] transition-colors"
            >
              {viewAll ? (
                <>
                  <Layout size={14} /> Slide View
                </>
              ) : (
                <>
                  <Grid size={14} /> View All Cards
                </>
              )}
            </button>
          </div>
        </div>

        {/* Category Navigation Pills for quick jump */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveIndex(idx);
                setViewAll(false);
              }}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${
                !viewAll && activeIndex === idx
                  ? 'bg-[#7A2635] dark:bg-[#A83252] text-white dark:text-white border-transparent shadow-sm'
                  : 'bg-[#F4F8FA] dark:bg-[#C04365]/[0.15] text-[#242424] dark:text-[#FFDDE5] border-slate-300 dark:border-[#C04365]/30 hover:bg-slate-200 dark:hover:bg-[#C04365]/[0.28]'
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.title.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {!viewAll ? (
          /* Slide View matching PDF 1:1 */
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full rounded-[36px] md:rounded-[44px] p-8 sm:p-12 md:p-16 bg-[#F4F8FA] dark:bg-[#C04365]/[0.21] text-[#050505] dark:text-[#FFF5F8] border border-slate-300 dark:border-[#C04365]/35 shadow-sm dark:shadow-2xl backdrop-blur-sm min-h-[460px] flex flex-col justify-between transition-colors duration-400"
              >
                {/* Category Header with Icon */}
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold flex items-center gap-3 mb-10 tracking-tight text-[#050505] dark:text-[#FFF5F8]">
                    <span className="text-3xl sm:text-4xl">{activeCategory.icon}</span>
                    {activeCategory.title}
                  </h3>

                  {/* Skills Bullet List (2 Columns on tablet/desktop) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {/* Column 1 */}
                    <ul className="space-y-3.5">
                      {activeCategory.col1.map((item) => (
                        <li key={item} className="flex items-start text-base sm:text-lg font-semibold tracking-wide text-[#050505] dark:text-[#FFF5F8]">
                          <span className="mr-3 text-lg leading-relaxed text-[#7A2635] dark:text-[#FFA3B8]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Column 2 */}
                    {activeCategory.col2 && (
                      <ul className="space-y-3.5 mt-3.5 md:mt-0">
                        {activeCategory.col2.map((item) => (
                          <li key={item} className="flex items-start text-base sm:text-lg font-semibold tracking-wide text-[#050505] dark:text-[#FFF5F8]">
                            <span className="mr-3 text-lg leading-relaxed text-[#7A2635] dark:text-[#FFA3B8]">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Navigation controls at bottom */}
                <div className="flex items-center justify-between pt-10 mt-8 border-t border-slate-200 dark:border-[#C04365]/25">
                  <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#555555] dark:text-[#FFDDE5]/90">
                    Category {activeIndex + 1} of {skillCategories.length}
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePrev}
                      className="p-3 rounded-full bg-slate-100 dark:bg-[#C04365]/[0.21] hover:bg-slate-200 dark:hover:bg-[#C04365]/[0.35] text-[#050505] dark:text-[#FFF5F8] dark:border dark:border-[#C04365]/35 transition-colors"
                      aria-label="Previous category"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-3 rounded-full bg-slate-100 dark:bg-[#C04365]/[0.21] hover:bg-slate-200 dark:hover:bg-[#C04365]/[0.35] text-[#050505] dark:text-[#FFF5F8] dark:border dark:border-[#C04365]/35 transition-colors"
                      aria-label="Next category"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* Stacked View: shows all cards in continuous succession */
          <div className="space-y-12">
            {skillCategories.map((cat) => (
              <div
                key={cat.id}
                className="w-full rounded-[36px] md:rounded-[44px] p-8 sm:p-12 md:p-16 bg-[#F4F8FA] dark:bg-[#C04365]/[0.21] text-[#050505] dark:text-[#FFF5F8] border border-slate-300 dark:border-[#C04365]/35 shadow-sm dark:shadow-2xl backdrop-blur-sm transition-colors duration-400"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold flex items-center gap-3 mb-10 tracking-tight text-[#050505] dark:text-[#FFF5F8]">
                  <span className="text-3xl sm:text-4xl">{cat.icon}</span>
                  {cat.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  <ul className="space-y-3.5">
                    {cat.col1.map((item) => (
                      <li key={item} className="flex items-start text-base sm:text-lg font-semibold tracking-wide text-[#050505] dark:text-[#FFF5F8]">
                        <span className="mr-3 text-lg leading-relaxed text-[#7A2635] dark:text-[#FFA3B8]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {cat.col2 && (
                    <ul className="space-y-3.5 mt-3.5 md:mt-0">
                      {cat.col2.map((item) => (
                        <li key={item} className="flex items-start text-base sm:text-lg font-semibold tracking-wide text-[#050505] dark:text-[#FFF5F8]">
                          <span className="mr-3 text-lg leading-relaxed text-[#7A2635] dark:text-[#FFA3B8]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

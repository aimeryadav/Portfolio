import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Eye, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  FolderGit2
} from 'lucide-react';

export function ResumeSection() {
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  return (
    <section id="resume" className="py-24 md:py-32 bg-background border-t border-border/10">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        {/* RESUME —✦ Section Header */}
        <div className="flex items-center justify-between gap-4 mb-16 w-full">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-foreground leading-none">
              RESUME
            </h2>
            <div className="flex items-center max-w-[180px] md:max-w-[240px] flex-1">
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

          {/* Quick Action Badges */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/Amit_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A2635] dark:bg-[#A83252] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:brightness-110 active:scale-95 transition-all"
            >
              <ExternalLink size={14} /> Open Full PDF
            </a>
          </div>
        </div>
        
        {/* Main Resume Presentation Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="w-full rounded-[36px] md:rounded-[44px] p-6 sm:p-10 md:p-14 bg-[#F4F8FA] dark:bg-[#C04365]/[0.21] text-[#050505] dark:text-[#FFF5F8] border border-slate-300 dark:border-[#C04365]/35 shadow-sm dark:shadow-2xl backdrop-blur-sm transition-colors duration-400"
        >
          {/* Header Profile Info matching exact uploaded resume */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-[#C04365]/30">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#7A2635]/10 dark:bg-[#A83252]/20 flex items-center justify-center text-[#7A2635] dark:text-[#FFA3B8] shrink-0 border border-[#7A2635]/20 dark:border-[#A83252]/30">
                <FileText size={36} strokeWidth={1.5} />
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
                    AMIT
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#7A2635]/15 dark:bg-[#A83252]/30 text-[#7A2635] dark:text-[#FFA3B8]">
                    ALSO KNOWN AS AIMER YADAV
                  </span>
                </div>
                <p className="text-sm font-bold text-foreground/90 tracking-wide">
                  Multidisciplinary Creative Technologist
                </p>
                <p className="text-xs font-semibold text-foreground/75 mt-0.5">
                  B.E. Computer Science | RV Institute of Technology and Management
                </p>
              </div>
            </div>

            {/* Contact Chips */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold text-foreground/75">
              <a 
                href="mailto:amit20052020@gmail.com"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/70 dark:bg-[#C04365]/[0.25] border border-slate-300/60 dark:border-[#C04365]/30 hover:text-[#7A2635] dark:hover:text-[#FFA3B8] transition-colors"
              >
                <Mail size={13} className="text-[#7A2635] dark:text-[#FFA3B8]" /> amit20052020@gmail.com
              </a>
              <a 
                href="tel:+918840050560"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/70 dark:bg-[#C04365]/[0.25] border border-slate-300/60 dark:border-[#C04365]/30 hover:text-[#7A2635] dark:hover:text-[#FFA3B8] transition-colors"
              >
                <Phone size={13} className="text-[#7A2635] dark:text-[#FFA3B8]" /> +91 8840050560
              </a>
              <a 
                href="https://github.com/aimeryadav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/70 dark:bg-[#C04365]/[0.25] border border-slate-300/60 dark:border-[#C04365]/30 hover:text-[#7A2635] dark:hover:text-[#FFA3B8] transition-colors"
              >
                <FolderGit2 size={13} className="text-[#7A2635] dark:text-[#FFA3B8]" /> github.com/aimeryadav
              </a>
              <a 
                href="https://www.linkedin.com/in/aimeryadav/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-200/70 dark:bg-[#C04365]/[0.25] border border-slate-300/60 dark:border-[#C04365]/30 hover:text-[#7A2635] dark:hover:text-[#FFA3B8] transition-colors"
              >
                <svg className="w-3 h-3 fill-current text-[#7A2635] dark:text-[#FFA3B8]" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                linkedin.com/in/aimeryadav
              </a>
            </div>
          </div>

          {/* Professional Summary Quote Block */}
          <div className="py-6 border-b border-slate-200 dark:border-[#C04365]/30">
            <h4 className="text-xs font-black tracking-widest uppercase text-[#7A2635] dark:text-[#FFA3B8] mb-2">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
              Computer Science undergraduate with an interdisciplinary skill set spanning software development, generative AI, creative production, music, design, content development, and digital marketing. Interested in internship and placement opportunities involving technology, creative problem-solving, AI-assisted workflows, media production, and innovation.
            </p>
          </div>

          {/* Structured Resume Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-8">
            
            {/* Left Column: Education & Experience */}
            <div className="space-y-8">
              {/* Education */}
              <div>
                <div className="flex items-center gap-2.5 mb-4 text-[#7A2635] dark:text-[#FFA3B8]">
                  <GraduationCap size={20} />
                  <h4 className="text-sm font-extrabold tracking-wider uppercase text-foreground">
                    Education
                  </h4>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-[#7A2635]/30 dark:border-[#FFA3B8]/30">
                  <div>
                    <div className="flex items-center justify-between">
                      <h5 className="text-base font-bold text-foreground">
                        RV Institute of Technology and Management
                      </h5>
                      <span className="text-xs font-extrabold text-[#7A2635] dark:text-[#FFA3B8]">2024–2027</span>
                    </div>
                    <p className="text-xs font-semibold text-foreground/80">
                      B.E. in Computer Science
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <h5 className="text-base font-bold text-foreground">
                        Mata Sukhdevi School, Delhi
                      </h5>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-foreground/80 mt-1">
                      <span>Senior Secondary (12th)</span>
                      <span className="font-extrabold text-[#7A2635] dark:text-[#FFA3B8]">2022</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-semibold text-foreground/80">
                      <span>Secondary (10th)</span>
                      <span className="font-extrabold text-[#7A2635] dark:text-[#FFA3B8]">2020</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <div className="flex items-center gap-2.5 mb-4 text-[#7A2635] dark:text-[#FFA3B8]">
                  <Briefcase size={20} />
                  <h4 className="text-sm font-extrabold tracking-wider uppercase text-foreground">
                    Experience
                  </h4>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-[#7A2635]/30 dark:border-[#FFA3B8]/30">
                  <div className="p-4 rounded-xl bg-slate-200/50 dark:bg-[#C04365]/[0.15] border border-slate-300/40 dark:border-[#C04365]/25">
                    <div className="flex items-center justify-between mb-1.5 flex-wrap gap-1">
                      <h5 className="text-sm font-bold text-foreground">
                        Executive Leadership Program Intern — AnalytixLabs
                      </h5>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-black/10 dark:bg-white/10 text-[#7A2635] dark:text-[#FFA3B8]">
                        20 Mar 2025 – 20 May 2025 (2 Mos)
                      </span>
                    </div>
                    <ul className="text-xs text-foreground/85 leading-relaxed space-y-1 list-disc pl-4 font-medium">
                      <li>Led student-driven pan-India leadership community initiatives, campus outreach, and event coordination.</li>
                      <li>Handled content creation, community management, and program execution driving high student engagement.</li>
                      <li>Awarded official Letter of Recommendation by AnalytixLabs Director & Founder's Office for exceptional initiative and teamwork.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certifications & Achievements */}
              <div>
                <div className="flex items-center gap-2.5 mb-4 text-[#7A2635] dark:text-[#FFA3B8]">
                  <Award size={20} />
                  <h4 className="text-sm font-extrabold tracking-wider uppercase text-foreground">
                    Certifications & Achievements
                  </h4>
                </div>

                <div className="space-y-2.5 pl-4 border-l-2 border-[#7A2635]/30 dark:border-[#FFA3B8]/30">
                  <a 
                    href="#certificates"
                    className="group block p-2.5 rounded-lg bg-slate-200/40 dark:bg-[#C04365]/10 hover:bg-slate-200/70 dark:hover:bg-[#C04365]/20 border border-slate-300/30 dark:border-[#C04365]/20 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-foreground group-hover:text-[#7A2635] dark:group-hover:text-[#FFA3B8] transition-colors">
                        AI Tools & Claude Workshop Certification
                      </span>
                      <span className="text-[10px] font-extrabold text-[#7A2635] dark:text-[#FFA3B8]">be10x</span>
                    </div>
                    <p className="text-[11px] text-foreground/75 mt-0.5">
                      Verified credential in prompt engineering, Claude workflows, rapid data analysis & AI debugging.
                    </p>
                  </a>

                  <a 
                    href="#certificates"
                    className="group block p-2.5 rounded-lg bg-slate-200/40 dark:bg-[#C04365]/10 hover:bg-slate-200/70 dark:hover:bg-[#C04365]/20 border border-slate-300/30 dark:border-[#C04365]/20 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-foreground group-hover:text-[#7A2635] dark:group-hover:text-[#FFA3B8] transition-colors">
                        Certificate of Internship
                      </span>
                      <span className="text-[10px] font-extrabold text-[#7A2635] dark:text-[#FFA3B8]">AnalytixLabs</span>
                    </div>
                    <p className="text-[11px] text-foreground/75 mt-0.5">
                      Executive Leadership Program: Outreach, event coordination & community building.
                    </p>
                  </a>

                  <a 
                    href="#certificates"
                    className="group block p-2.5 rounded-lg bg-slate-200/40 dark:bg-[#C04365]/10 hover:bg-slate-200/70 dark:hover:bg-[#C04365]/20 border border-slate-300/30 dark:border-[#C04365]/20 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-foreground group-hover:text-[#7A2635] dark:group-hover:text-[#FFA3B8] transition-colors">
                        Letter of Recommendation
                      </span>
                      <span className="text-[10px] font-extrabold text-[#7A2635] dark:text-[#FFA3B8]">AnalytixLabs</span>
                    </div>
                    <p className="text-[11px] text-foreground/75 mt-0.5">
                      Endorsed by Sumit Shukla (Director) & Raunak Verma (Founder's Office) for professionalism and leadership.
                    </p>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Technical & Creative Skills Summary */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 mb-2 text-[#7A2635] dark:text-[#FFA3B8]">
                <Code2 size={20} />
                <h4 className="text-sm font-extrabold tracking-wider uppercase text-foreground">
                  Technical & Creative Skills
                </h4>
              </div>

              {/* 1. Programming & Development */}
              <div className="p-3.5 rounded-xl bg-slate-200/50 dark:bg-[#C04365]/[0.15] border border-slate-300/40 dark:border-[#C04365]/25">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#7A2635] dark:text-[#FFA3B8] block mb-1">
                  Programming & Development
                </span>
                <p className="text-xs text-foreground/85 leading-relaxed font-medium">
                  C, C++, Python, JavaScript, HTML5, CSS3, Web Development, Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Git, GitHub
                </p>
              </div>

              {/* 2. AI, Data & Emerging Tech */}
              <div className="p-3.5 rounded-xl bg-slate-200/50 dark:bg-[#C04365]/[0.15] border border-slate-300/40 dark:border-[#C04365]/25">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#7A2635] dark:text-[#FFA3B8] block mb-1">
                  AI, Data & Emerging Technology
                </span>
                <p className="text-xs text-foreground/85 leading-relaxed font-medium">
                  Generative AI, Prompt Engineering, AI-assisted Coding, AI Research & Productivity, AI Workflow Design, AI Creative Automation, AI Tools & Platforms, Machine Learning, NumPy, Blockchain, Cloud Computing
                </p>
              </div>

              {/* 3. Video & Post-Production */}
              <div className="p-3.5 rounded-xl bg-slate-200/50 dark:bg-[#C04365]/[0.15] border border-slate-300/40 dark:border-[#C04365]/25">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#7A2635] dark:text-[#FFA3B8] block mb-1">
                  Video & Post-Production
                </span>
                <p className="text-xs text-foreground/85 leading-relaxed font-medium">
                  Video Editing, Advanced Video Editing, Complete Post-Production, Color Correction, Color Grading, Motion Graphics, VFX, Compositing, Green Screen / Chroma Key, Video Finishing, Cinematic Editing, Visual Storytelling
                </p>
              </div>

              {/* 4. Audio & Music */}
              <div className="p-3.5 rounded-xl bg-slate-200/50 dark:bg-[#C04365]/[0.15] border border-slate-300/40 dark:border-[#C04365]/25">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#7A2635] dark:text-[#FFA3B8] block mb-1">
                  Audio & Music
                </span>
                <p className="text-xs text-foreground/85 leading-relaxed font-medium">
                  Singing, Rap, Songwriting, Lyrics Writing, Song Composition, Music Production, AI Music Generation, Recording, Audio Editing, Sound Design, Mixing, Mastering
                </p>
              </div>

              {/* 5. Design & Productivity */}
              <div className="p-3.5 rounded-xl bg-slate-200/50 dark:bg-[#C04365]/[0.15] border border-slate-300/40 dark:border-[#C04365]/25">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#7A2635] dark:text-[#FFA3B8] block mb-1">
                  Design, Marketing & Tools
                </span>
                <p className="text-xs text-foreground/85 leading-relaxed font-medium">
                  Graphic Design, UI/UX, Adobe Photoshop, Canva, Figma, Blender, Microsoft Office Suite, Digital Marketing, Social Media Marketing, Script & Story Writing, Direction
                </p>
              </div>

              {/* Formal & Artist Name Footer Note */}
              <div className="pt-2 text-right">
                <span className="text-[11px] font-bold text-foreground/60 italic">
                  Formal name: Amit | Artist name: Aimer Yadav
                </span>
              </div>

            </div>

          </div>

          {/* Collapsible Live PDF Preview */}
          <AnimatePresence>
            {showPdfViewer && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden mb-8 border-t border-slate-200 dark:border-[#C04365]/30 pt-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7A2635] dark:text-[#FFA3B8]">
                    Official Resume PDF Document
                  </span>
                  <a
                    href="/Amit_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold underline text-foreground hover:text-[#7A2635] dark:hover:text-[#FFA3B8]"
                  >
                    Open in Separate Tab ↗
                  </a>
                </div>
                <div className="w-full h-[750px] rounded-2xl overflow-hidden border border-slate-300 dark:border-[#C04365]/40 bg-white shadow-inner">
                  <iframe 
                    src="/Amit_Resume.pdf#toolbar=1&navpanes=0" 
                    title="Amit Resume PDF"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Button Bar */}
          <div className="pt-8 border-t border-slate-200 dark:border-[#C04365]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Toggle Live Viewer */}
            <button
              onClick={() => setShowPdfViewer(!showPdfViewer)}
              className="flex items-center gap-2 px-5 py-3 rounded-full border border-slate-300 dark:border-[#C04365]/40 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-slate-200/60 dark:hover:bg-[#C04365]/30 transition-all cursor-pointer w-full sm:w-auto justify-center"
            >
              {showPdfViewer ? (
                <>
                  <ChevronUp size={16} /> Hide In-Page Viewer
                </>
              ) : (
                <>
                  <ChevronDown size={16} /> Preview Resume PDF on Page
                </>
              )}
            </button>

            {/* Direct Open & Download buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-center sm:justify-end">
              <a
                href="/Amit_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#050505] dark:bg-[#0B2F2F] text-white dark:text-[#F5F1EC] rounded-full font-bold tracking-widest uppercase text-xs hover:bg-[#7A2635] dark:hover:bg-[#A83252] border border-transparent dark:border-[#13423E] transition-all shadow-sm group cursor-pointer"
              >
                <Eye size={15} className="group-hover:scale-110 transition-transform" />
                View Full PDF
              </a>
              <a
                href="/Amit_Resume.pdf"
                download="Amit_Resume.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#7A2635] dark:bg-[#A83252] text-white rounded-full font-bold tracking-widest uppercase text-xs hover:brightness-110 active:scale-95 transition-all shadow-sm group cursor-pointer"
              >
                <Download size={15} className="group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  Eye, 
  CheckCircle2, 
  Quote, 
  Download, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

type Certificate = (typeof portfolioData.certificates)[number];

export function CertificatesSection() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'certification' | 'internship' | 'recommendation'>('all');
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const certificates = portfolioData.certificates;

  const filteredCerts = certificates.filter(c => {
    if (selectedFilter === 'all') return true;
    return c.type === selectedFilter;
  });

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeCert) return;
      if (e.key === 'Escape') {
        setActiveCert(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = certificates.findIndex(c => c.id === activeCert.id);
        const nextIndex = (currentIndex + 1) % certificates.length;
        setActiveCert(certificates[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = certificates.findIndex(c => c.id === activeCert.id);
        const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length;
        setActiveCert(certificates[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCert, certificates]);

  const recommendationItem = certificates.find(c => c.type === 'recommendation');

  return (
    <section id="certificates" className="py-24 md:py-32 bg-background border-t border-border/10 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 w-full">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-none">
                CERTIFICATES & RECOMMENDATION
              </h2>
              <div className="hidden sm:flex items-center flex-1 max-w-[140px] md:max-w-[200px]">
                <div className="h-[2px] md:h-[3px] w-full bg-[#7A2635] dark:bg-[#A94655] transition-colors duration-300" />
                <svg 
                  viewBox="0 0 48 48" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-8 h-8 md:w-10 md:h-10 text-[#7A2635] dark:text-[#A94655] -ml-2 shrink-0 drop-shadow-sm transition-colors duration-300"
                >
                  <path 
                    d="M24 0 C24 13.25 34.75 24 48 24 C34.75 24 24 34.75 24 48 C24 34.75 13.25 24 0 24 C13.25 24 24 13.25 24 0 Z" 
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <p className="text-sm md:text-base text-foreground/75 max-w-2xl font-medium">
              Verified certifications, leadership achievements, and executive letters of recommendation.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Credentials', count: certificates.length },
              { id: 'certification', label: 'Certifications', count: certificates.filter(c => c.type === 'certification').length },
              { id: 'internship', label: 'Internship', count: certificates.filter(c => c.type === 'internship').length },
              { id: 'recommendation', label: 'Recommendation', count: certificates.filter(c => c.type === 'recommendation').length },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                  selectedFilter === tab.id
                    ? 'bg-[#7A2635] dark:bg-[#A83252] text-white shadow-md'
                    : 'bg-card border border-border/70 text-foreground/75 hover:text-foreground hover:border-[#7A2635]/40'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedFilter === tab.id ? 'bg-white/20 text-white' : 'bg-muted/30 text-foreground/60'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED SPOTLIGHT: Letter of Recommendation (Shown when 'all' or 'recommendation' is selected) */}
        {(selectedFilter === 'all' || selectedFilter === 'recommendation') && recommendationItem && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 rounded-3xl md:rounded-4xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#7A2635]/10 via-card to-background border border-[#7A2635]/30 dark:border-[#A83252]/40 shadow-sm relative overflow-hidden"
          >
            {/* Background watermark */}
            <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none text-foreground">
              <Quote size={240} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Quote & Endorsement Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#7A2635] text-white">
                    <ShieldCheck size={14} /> Executive Endorsement
                  </span>
                  <span className="text-xs font-bold text-foreground/75 tracking-wider uppercase">
                    AnalytixLabs • Executive Leadership Program
                  </span>
                </div>

                <div className="relative pl-6 border-l-3 border-[#7A2635] dark:border-[#A83252]">
                  <Quote className="absolute -top-1 left-0 text-[#7A2635]/40 dark:text-[#A83252]/40 -ml-5 w-5 h-5" />
                  <p className="text-base sm:text-lg md:text-xl font-medium text-foreground leading-relaxed italic">
                    "{recommendationItem.quote}"
                  </p>
                </div>

                <div className="pt-2">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-foreground/80">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#7A2635]/15 dark:bg-[#A83252]/30 flex items-center justify-center text-[#7A2635] dark:text-[#FFA3B8] font-black">
                        SS
                      </div>
                      <div>
                        <div className="font-extrabold text-foreground">Sumit Shukla</div>
                        <div className="text-[11px] text-foreground/60 font-semibold">Director, AnalytixLabs</div>
                      </div>
                    </div>
                    <span className="text-foreground/30">•</span>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#7A2635]/15 dark:bg-[#A83252]/30 flex items-center justify-center text-[#7A2635] dark:text-[#FFA3B8] font-black">
                        RV
                      </div>
                      <div>
                        <div className="font-extrabold text-foreground">Raunak Verma</div>
                        <div className="text-[11px] text-foreground/60 font-semibold">Founder's Office, AnalytixLabs</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => setActiveCert(recommendationItem)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A2635] dark:bg-[#A83252] text-white text-xs font-extrabold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-sm cursor-pointer"
                  >
                    <Eye size={15} /> View Full Letter & Signatures
                  </button>
                  <a
                    href={recommendationItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card hover:bg-muted/40 border border-border text-foreground text-xs font-extrabold uppercase tracking-wider active:scale-95 transition-all"
                  >
                    <ExternalLink size={15} /> Open Document
                  </a>
                </div>
              </div>

              {/* Right Document Visual Preview */}
              <div className="lg:col-span-5 flex justify-center">
                <div 
                  onClick={() => setActiveCert(recommendationItem)}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl border border-border/80 bg-black/5 dark:bg-white/5 max-w-[280px] sm:max-w-[320px] transition-transform duration-300 hover:scale-[1.02]"
                >
                  <img
                    src={recommendationItem.image}
                    alt="AnalytixLabs Letter of Recommendation"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
                      <Eye size={16} /> Click to Read Full Document
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card border border-border/80 hover:border-[#7A2635]/50 dark:hover:border-[#A94655]/50 rounded-3xl p-6 sm:p-7 flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Document Image Thumbnail Preview */}
              <div 
                onClick={() => setActiveCert(cert)}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-900/60 border border-border/60 cursor-pointer shadow-inner"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-black/75 backdrop-blur-md text-white border border-white/20">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    {cert.issuer}
                  </span>
                </div>

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-extrabold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye size={14} /> Quick Preview
                  </span>
                </div>
              </div>

              {/* Card Meta & Header */}
              <div className="flex items-center justify-between gap-2 mb-2 text-xs font-semibold text-foreground/60">
                <span className="uppercase tracking-wider font-extrabold text-[#7A2635] dark:text-[#FFA3B8]">
                  {cert.badge}
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Calendar size={12} /> {cert.date}
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-foreground mb-1 leading-snug">
                {cert.title}
              </h3>
              
              <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3">
                {cert.subtitle}
              </p>

              <p className="text-xs text-foreground/80 font-medium leading-relaxed mb-4 line-clamp-3">
                {cert.description}
              </p>

              {/* Key Competencies / Bullet Points Preview */}
              {cert.bulletPoints && cert.bulletPoints.length > 0 && (
                <div className="mb-4 space-y-1.5 pt-2 border-t border-border/40">
                  {cert.bulletPoints.slice(0, 2).map((bp, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-foreground/80 font-medium leading-tight">
                      <Sparkles size={11} className="text-[#7A2635] dark:text-[#FFA3B8] shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                {cert.skills.slice(0, 3).map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-200/60 dark:bg-[#C04365]/15 text-foreground/80 border border-slate-300/40 dark:border-[#C04365]/25"
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 3 && (
                  <span className="px-1.5 py-0.5 rounded-md text-[10px] font-semibold text-foreground/60">
                    +{cert.skills.length - 3}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/40">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#7A2635] dark:bg-[#A83252] text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                >
                  <Eye size={13} /> View
                </button>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-card border border-border hover:bg-muted/40 text-foreground text-xs font-bold uppercase tracking-wider active:scale-95 transition-all"
                >
                  <ExternalLink size={13} /> Open
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN / LIGHTBOX DOCUMENT VIEWER MODAL */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl h-[92vh] max-h-[92vh] bg-card border border-border rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Top Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/80 backdrop-blur-sm shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#7A2635]/15 dark:bg-[#A83252]/25 flex items-center justify-center text-[#7A2635] dark:text-[#FFA3B8]">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-foreground leading-none">
                      {activeCert.title}
                    </h4>
                    <span className="text-xs text-foreground/60 font-semibold">
                      {activeCert.issuer} • {activeCert.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeCert.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-muted text-foreground/80 hover:text-foreground transition-colors"
                    title="Open / Download Document"
                  >
                    <Download size={18} />
                  </a>
                  <button
                    onClick={() => setActiveCert(null)}
                    className="p-2 rounded-full hover:bg-muted text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
                    title="Close preview (Esc)"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Body: Document Fixed on Top/Left + Independently Scrollable Details */}
              <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-y-auto lg:overflow-hidden">
                {/* Document Display Area: Stays ALWAYS on upside/fixed when scrolling */}
                <div className="lg:col-span-8 p-4 sm:p-6 flex items-center justify-center bg-black/10 dark:bg-black/40 min-h-[300px] relative sticky top-0 z-20 lg:static lg:h-full shrink-0 border-b lg:border-b-0 border-border/50 backdrop-blur-md lg:backdrop-blur-none">
                  <img
                    src={activeCert.image}
                    alt={activeCert.title}
                    className="max-h-[42vh] sm:max-h-[50vh] lg:max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-md border border-border/40"
                  />

                  {/* Previous / Next Floating Buttons */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = certificates.findIndex(c => c.id === activeCert.id);
                      const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length;
                      setActiveCert(certificates[prevIndex]);
                    }}
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer shadow-lg z-30"
                    title="Previous Credential"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = certificates.findIndex(c => c.id === activeCert.id);
                      const nextIndex = (currentIndex + 1) % certificates.length;
                      setActiveCert(certificates[nextIndex]);
                    }}
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer shadow-lg z-30"
                    title="Next Credential"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Metadata & Details Panel: Scrolls smoothly while document stays pinned */}
                <div className="lg:col-span-4 p-6 sm:p-7 border-t lg:border-t-0 lg:border-l border-border flex flex-col justify-between space-y-6 bg-card lg:overflow-y-auto lg:h-full">
                  <div className="space-y-5">
                    <div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#7A2635]/15 dark:bg-[#A83252]/25 text-[#7A2635] dark:text-[#FFA3B8] mb-2">
                        {activeCert.badge}
                      </span>
                      <h3 className="text-xl font-black text-foreground">
                        {activeCert.title}
                      </h3>
                      <p className="text-xs font-semibold text-foreground/70">
                        {activeCert.subtitle}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1.5 border-b border-border/40">
                        <span className="text-foreground/60 font-medium">Recipient</span>
                        <span className="font-bold text-foreground">{activeCert.recipient}</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-border/40">
                        <span className="text-foreground/60 font-medium">Issuing Organization</span>
                        <span className="font-bold text-foreground">{activeCert.issuer}</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-border/40">
                        <span className="text-foreground/60 font-medium">Date</span>
                        <span className="font-bold text-foreground">{activeCert.date}</span>
                      </div>
                      {activeCert.signatories && (
                        <div className="py-1.5 border-b border-border/40">
                          <span className="text-foreground/60 font-medium block mb-1">Signatories</span>
                          <span className="font-semibold text-foreground text-[11px] block">
                            {activeCert.signatories.join(' • ')}
                          </span>
                        </div>
                      )}
                    </div>

                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-[#7A2635] dark:text-[#FFA3B8] mb-2">
                        Overview & Scope
                      </h5>
                      <p className="text-xs text-foreground/85 leading-relaxed font-medium">
                        {activeCert.description}
                      </p>
                    </div>

                    {/* Bullet Points from Document */}
                    {activeCert.bulletPoints && (
                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-wider text-[#7A2635] dark:text-[#FFA3B8] mb-2">
                          Key Highlights
                        </h5>
                        <ul className="space-y-1.5 text-xs text-foreground/85 font-medium">
                          {activeCert.bulletPoints.map((bp, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 size={13} className="text-[#7A2635] dark:text-[#FFA3B8] shrink-0 mt-0.5" />
                              <span>{bp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Skills */}
                    <div>
                      <h5 className="text-xs font-bold uppercase tracking-wider text-[#7A2635] dark:text-[#FFA3B8] mb-2">
                        Verified Skills
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {activeCert.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-200/70 dark:bg-[#C04365]/20 text-foreground/90 border border-slate-300/40 dark:border-[#C04365]/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer Actions */}
                  <div className="pt-4 border-t border-border flex flex-col gap-2">
                    <a
                      href={activeCert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#7A2635] dark:bg-[#A83252] text-white text-xs font-extrabold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-sm"
                    >
                      <ExternalLink size={15} /> Open Full Document
                    </a>
                    <p className="text-[10px] text-center text-foreground/50">
                      Use left/right arrows or click arrows to navigate between credentials.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

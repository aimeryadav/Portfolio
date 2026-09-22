import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ContactForm } from '../components/ContactForm';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const rawEmail = 'amit20052020@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(rawEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: portfolioData.personalInfo.social.github,
      handle: '@aimeryadav',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      color: 'hover:border-slate-400 dark:hover:border-slate-400',
    },
    {
      name: 'LinkedIn',
      url: portfolioData.personalInfo.social.linkedin,
      handle: 'in/aimeryadav',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      color: 'hover:border-sky-500 dark:hover:border-sky-400',
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/aimeryadav',
      handle: '@aimeryadav',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: 'hover:border-neutral-500 dark:hover:border-neutral-300',
    },
    {
      name: 'Instagram',
      url: portfolioData.personalInfo.social.instagram,
      handle: '@aimeryadav',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: 'hover:border-pink-500 dark:hover:border-pink-400',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-background border-t border-border/10 relative overflow-x-clip">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-14 w-full">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground leading-none flex items-center gap-3">
            <span>GET IN TOUCH</span>
            <span className="text-3xl sm:text-4xl md:text-5xl">🤝</span>
          </h2>

          <div className="flex items-center flex-1 max-w-[160px] sm:max-w-[220px] md:max-w-[280px]">
            <div className="h-[2px] md:h-[3px] w-full bg-[#7A2635] dark:bg-[#A94655] transition-colors duration-300" />
            <svg 
              viewBox="0 0 48 48" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 text-[#7A2635] dark:text-[#A94655] -ml-2 shrink-0 drop-shadow-sm transition-colors duration-300"
            >
              <path 
                d="M24 0 C24 13.25 34.75 24 48 24 C34.75 24 24 34.75 24 48 C24 34.75 13.25 24 0 24 C13.25 24 24 13.25 24 0 Z" 
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* Two-Column Card-Based Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Connect & Social Presence Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 bg-[#F4F8FA] dark:bg-[#C04365]/[0.18] border border-slate-300 dark:border-[#C04365]/35 shadow-sm space-y-7 backdrop-blur-sm"
          >
            {/* Status Pills matching website skills */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Opportunities</span>
              </div>

              {/* Specific Skill Domain Pills */}
              <div className="flex flex-wrap gap-2 pt-0.5">
                {[
                  "Computer Science & Software",
                  "AI & Generative AI",
                  "Film & Post-Production",
                  "Music & Audio Production",
                  "Creative Technology",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/25 transition-all hover:bg-emerald-500/20"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Intro Pitch */}
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground leading-snug">
                Let’s build intelligent software, music & visual stories together.
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Whether you’re interested in software engineering, generative AI workflows, music production, or film post-production, my inbox is open.
              </p>
            </div>

            {/* Email Card with One-Click Copy */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#071818]/80 border border-slate-200 dark:border-[#13423E] flex items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-[#7A2635]/15 dark:bg-[#A83252]/25 text-[#7A2635] dark:text-[#FFA3B8] flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-foreground/60">Email Directly</p>
                  <a
                    href={`mailto:${rawEmail}`}
                    className="text-xs sm:text-sm font-bold text-foreground hover:text-[#7A2635] dark:hover:text-[#FFA3B8] transition-colors truncate block"
                  >
                    {rawEmail}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-[#13423E] hover:bg-black/5 dark:hover:bg-white/10 text-foreground/80 transition-all hover:scale-105 active:scale-95 shrink-0"
                title="Copy Email Address"
                aria-label="Copy Email"
              >
                {copiedEmail ? (
                  <Check size={16} className="text-emerald-500" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>

            {/* Social Links Cards */}
            <div className="space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-foreground/60 px-1">
                Direct Profiles
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3.5 rounded-2xl bg-white/70 dark:bg-[#071818]/70 border border-slate-200 dark:border-[#13423E] flex items-center gap-3 text-foreground transition-all duration-300 hover:scale-[1.02] shadow-xs group ${social.color}`}
                  >
                    <div className="text-foreground/80 group-hover:text-[#7A2635] dark:group-hover:text-[#FFA3B8] transition-colors">
                      {social.icon}
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold uppercase tracking-wide leading-none">{social.name}</p>
                      <p className="text-[11px] text-foreground/60 font-medium truncate mt-0.5">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Send a Message Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 bg-[#F4F8FA] dark:bg-[#C04365]/[0.18] border border-slate-300 dark:border-[#C04365]/35 shadow-sm backdrop-blur-sm space-y-6"
          >
            <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-foreground/75 font-medium mt-0.5">
                  Have an opportunity or inquiry? Drop me a direct note below.
                </p>
              </div>

              <div className="hidden sm:flex w-9 h-9 rounded-full bg-[#7A2635]/15 dark:bg-[#A83252]/25 text-[#7A2635] dark:text-[#FFA3B8] items-center justify-center">
                <Sparkles size={18} />
              </div>
            </div>

            <ContactForm />
          </motion.div>

        </div>

      </div>
    </section>
  );
}

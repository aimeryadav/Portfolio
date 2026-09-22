import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, X } from 'lucide-react';

export function AboutSection() {
  const [socialModalOpen, setSocialModalOpen] = useState(false);

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: portfolioData.personalInfo.social.github, 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: portfolioData.personalInfo.social.linkedin, 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      url: portfolioData.personalInfo.social.instagram, 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      url: portfolioData.personalInfo.social.youtube, 
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-28 min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading + 6 Bio Paragraphs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Header: AMIT —✦ with Burgundy line and 4-point star */}
            <div className="flex items-center gap-4 mb-3 w-full">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-foreground leading-none">
                {portfolioData.personalInfo.name}
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

            {/* Sub-headings */}
            <p className="text-sm md:text-base font-extrabold tracking-wider uppercase text-foreground mb-3">
              ALSO KNOWN AS {portfolioData.personalInfo.aka}
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-8">
              {portfolioData.personalInfo.title}
            </h3>

            {/* Paragraphs matching PDF page 2 verbatim */}
            <div className="space-y-6 text-sm sm:text-base md:text-[16px] text-foreground/90 font-medium leading-relaxed">
              <p>
                I’m Amit also known as Aimer Yadav, a final-year Computer Science & Engineering student at RV Institute of Technology & Management, Bengaluru, and a multidisciplinary creator working at the intersection of technology, music, storytelling and visual production.
              </p>
              <p>
                I’m a Writer, Director, Singer, Rapper, Songwriter, Composer, Music Producer, Post-Production Specialist, Designer and Developer. I write and compose songs, perform through singing and rap, direct visual stories, and take projects from raw ideas and footage to polished final output through editing, color, motion graphics, VFX, sound design and mastering.
              </p>
              <p>
                On the technology side, I work with C, C++, Python, JavaScript, HTML, CSS, DSA, OOP, Machine Learning, NumPy, Blockchain, Cloud Computing, Computer Networks, Operating Systems, Git and GitHub. I also work with Generative AI, Prompt Engineering, AI-assisted creation, AI workflows and creative automation.
              </p>
              <p>
                My creative toolkit includes Adobe Premiere Pro, After Effects, Photoshop, DaVinci Resolve, Canva, Pro Tools and Ableton Live, along with Microsoft Office and other professional productivity tools.
              </p>
              <p>
                For me, technology and creativity are not separate worlds. Code helps me build, music helps me express, writing helps me tell stories, and post-production helps me bring those stories to life.
              </p>
              <p>
                I’m constantly exploring new ways to turn ideas into meaningful music, films, visuals, digital experiences and technology-driven creative work.
              </p>
            </div>
          </div>

          {/* Right Column: Native Arched Founder Card with Attached Downside Social Box */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
            <div className="relative w-full max-w-[420px] flex flex-col items-center">
              


              {/* Arched Dome Frame with Yellow Border & Photo */}
              <div className="relative w-full aspect-[456/630]">
                <img 
                  src="/amit-arch-photo.png" 
                  alt="Amit - Creative Technologist" 
                  className="w-full h-full object-contain select-none pointer-events-none drop-shadow-sm"
                />
              </div>

              {/* Attached Downside Box: Connect with Amit Pill */}
              <div className="relative -mt-7 z-20 w-[92%] max-w-[390px] h-[64px] rounded-full border-[2.5px] border-[#FFDF20] bg-background flex items-center justify-around px-3 shadow-md transition-colors duration-400">
                {/* Yellow Badge */}
                <button
                  onClick={() => setSocialModalOpen(true)}
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-0.5 rounded-full bg-[#FFDF20] text-[#050505] font-extrabold text-[11px] tracking-wider uppercase whitespace-nowrap shadow-sm hover:brightness-105 active:scale-95 transition-all cursor-pointer"
                >
                  Connect with Amit
                </button>

                {/* 7 Social Media Icons */}
                {/* 1. Instagram */}
                <a 
                  href="https://instagram.com/aimeryadav" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Instagram"
                  className="p-2 text-[#475569] dark:text-[#CBD5E1] hover:text-[#7A2635] dark:hover:text-[#A94655] hover:scale-110 transition-all cursor-pointer"
                  aria-label="Instagram"
                >
                  <svg className="w-[19px] h-[19px] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* 2. YouTube */}
                <a 
                  href="https://youtube.com/@aimeryadav" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="YouTube"
                  className="p-2 text-[#475569] dark:text-[#CBD5E1] hover:text-[#7A2635] dark:hover:text-[#A94655] hover:scale-110 transition-all cursor-pointer"
                  aria-label="YouTube"
                >
                  <svg className="w-[19px] h-[19px] fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* 3. LinkedIn */}
                <a 
                  href="https://linkedin.com/in/aimeryadav" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="LinkedIn"
                  className="p-2 text-[#475569] dark:text-[#CBD5E1] hover:text-[#7A2635] dark:hover:text-[#A94655] hover:scale-110 transition-all cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <svg className="w-[19px] h-[19px] fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* 4. Facebook */}
                <a 
                  href="https://facebook.com/aimeryadav" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Facebook"
                  className="p-2 text-[#475569] dark:text-[#CBD5E1] hover:text-[#7A2635] dark:hover:text-[#A94655] hover:scale-110 transition-all cursor-pointer"
                  aria-label="Facebook"
                >
                  <svg className="w-[19px] h-[19px] fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* 5. Spotify */}
                <a 
                  href="https://open.spotify.com/artist/aimeryadav" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Spotify"
                  className="p-2 text-[#475569] dark:text-[#CBD5E1] hover:text-[#7A2635] dark:hover:text-[#A94655] hover:scale-110 transition-all cursor-pointer"
                  aria-label="Spotify"
                >
                  <svg className="w-[19px] h-[19px] fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>

                {/* 6. Apple Music */}
                <a 
                  href="https://music.apple.com/artist/aimeryadav" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Apple Music"
                  className="p-2 text-[#475569] dark:text-[#CBD5E1] hover:text-[#7A2635] dark:hover:text-[#A94655] hover:scale-110 transition-all cursor-pointer"
                  aria-label="Apple Music"
                >
                  <svg className="w-[19px] h-[19px] fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.93-.93.04-2.03.63-2.69 1.41-.58.68-1.1 1.77-.96 2.82 1.04.08 2.08-.55 2.71-1.3z"/>
                  </svg>
                </a>

                {/* 7. GitHub */}
                <a 
                  href="https://github.com/aimeryadav" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="GitHub"
                  className="p-2 text-[#475569] dark:text-[#CBD5E1] hover:text-[#7A2635] dark:hover:text-[#A94655] hover:scale-110 transition-all cursor-pointer"
                  aria-label="GitHub"
                >
                  <svg className="w-[19px] h-[19px] fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>

              {/* Founder, Aimer Studios Card */}
              <div className="mt-7 w-full max-w-[420px] p-6 sm:p-7 rounded-2xl bg-card border border-border shadow-md backdrop-blur-sm relative transition-all duration-300">
                {/* Header Badge */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <span className="w-2 h-2 rounded-full bg-[#7A2635] dark:bg-[#A94655]" />
                  <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-foreground">
                    Founder, Aimer Studios
                  </h4>
                </div>

                {/* Body Content */}
                <div className="space-y-3 text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                  <p>
                    Aimer Studios is a multidisciplinary creative production studio where ideas are transformed into powerful visual, musical, and digital experiences.
                  </p>
                  <p>
                    From cinematic filmmaking and high-end video production to music, sound design, graphic design, content creation, and artist management, we bring different forms of creativity under one roof. Our approach combines storytelling, technology, and artistic vision to turn concepts into work that connects with people.
                  </p>
                  <p className="font-semibold text-foreground pt-1">
                    Aimer Studios is built around one simple belief:
                  </p>
                </div>

                {/* Belief / Vision Highlight Box */}
                <div className="mt-3.5 p-3.5 rounded-xl bg-background border border-border/80">
                  <p className="text-xs sm:text-sm font-bold text-foreground tracking-wide text-center">
                    “Your idea. Our vision. From vision to reality.”
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Social Media Handles Modal */}
      <AnimatePresence>
        {socialModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-md bg-[#F4F8FA] dark:bg-[#0B2F2F] rounded-3xl p-8 border border-slate-300 dark:border-[#13423E] shadow-2xl transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-xl font-bold uppercase tracking-wider text-foreground">
                  Social Media Handles
                </h4>
                <button 
                  onClick={() => setSocialModalOpen(false)}
                  className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-foreground"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-3">
                {socialLinks.map((social) => {
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-[#13423E] hover:border-[#7A2635] dark:hover:border-[#A94655] hover:bg-[#7A2635]/5 dark:hover:bg-[#641E2B]/20 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-foreground group-hover:text-[#7A2635] dark:group-hover:text-[#A94655] transition-colors">
                          {social.icon}
                        </span>
                        <span className="font-bold text-foreground group-hover:text-[#7A2635] dark:group-hover:text-[#A94655] transition-colors">
                          {social.name}
                        </span>
                      </div>
                      <ExternalLink size={18} className="text-muted-foreground opacity-60 group-hover:opacity-100" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

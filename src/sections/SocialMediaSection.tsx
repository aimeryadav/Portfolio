import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface SocialAccount {
  id: string;
  name: string;
  handle: string;
  tag: string;
  actionText: string;
  url: string;
  category: 'social' | 'music' | 'code';
  icon: React.ReactNode;
}

const accounts: SocialAccount[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@aimeryadav',
    tag: 'OFFICIAL CHANNEL',
    actionText: 'Subscribe',
    url: 'https://youtube.com/@aimeryadav',
    category: 'social',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@aimeryadav',
    tag: 'CREATIVE HUB',
    actionText: 'Follow',
    url: 'https://instagram.com/aimeryadav',
    category: 'social',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: 'x',
    name: 'X',
    handle: '@aimeryadav',
    tag: 'OFFICIAL X',
    actionText: 'Follow',
    url: 'https://x.com/aimeryadav',
    category: 'social',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: '@aimeryadav',
    tag: 'COMMUNITY',
    actionText: 'Follow',
    url: 'https://facebook.com/aimeryadav',
    category: 'social',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    id: 'spotify',
    name: 'Spotify',
    handle: 'aimeryadav',
    tag: 'ARTIST PROFILE',
    actionText: 'Listen',
    url: 'https://open.spotify.com/artist/aimeryadav',
    category: 'music',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    id: 'apple-music',
    name: 'Apple Music',
    handle: 'aimeryadav',
    tag: 'OFFICIAL MUSIC',
    actionText: 'Listen',
    url: 'https://music.apple.com/artist/aimeryadav',
    category: 'music',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.85.94-2.93-.93.04-2.03.63-2.69 1.41-.58.68-1.1 1.77-.96 2.82 1.04.08 2.08-.55 2.71-1.3z" />
      </svg>
    ),
  },
  {
    id: 'github',
    name: 'GitHub',
    handle: '@aimeryadav',
    tag: 'OPEN SOURCE',
    actionText: 'Explore',
    url: 'https://github.com/aimeryadav',
    category: 'code',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'in/aimeryadav',
    tag: 'PROFESSIONAL',
    actionText: 'Connect',
    url: 'https://linkedin.com/in/aimeryadav',
    category: 'code',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

type CategoryFilter = 'all' | 'social' | 'music' | 'code';

export function SocialMediaSection() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredAccounts = accounts.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section
      id="social"
      className="relative py-12 sm:py-16 md:py-20 bg-background text-foreground border-t border-border/10 transition-colors duration-400"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            {/* CONNECT Pill with Burgundy theme styling */}
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#7A2635]/10 dark:bg-[#FFA3B8]/15 border border-[#7A2635]/25 dark:border-[#FFA3B8]/30 text-[#7A2635] dark:text-[#FFA3B8] text-[10px] font-extrabold tracking-widest uppercase mb-2">
              CONNECT
            </div>

            {/* Title with highlighted "on Social" */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground leading-tight">
              Show Our Work <span className="text-[#7A2635] dark:text-[#FFA3B8]">on Social</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-foreground/70 mt-1 max-w-xl leading-relaxed">
              Follow for our latest music drops, films, designs, and creative projects.
            </p>
          </div>

          {/* Right Status Pill with glowing indicator */}
          <div className="flex items-center gap-2 self-start sm:self-end">
            <a
              href="https://instagram.com/aimeryadav"
              target="_blank"
              rel="noopener noreferrer"
              title="Official Hub @aimeryadav"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border/80 hover:border-[#7A2635] dark:hover:border-[#FFA3B8] text-xs font-semibold text-foreground/80 hover:text-foreground transition-all duration-200 shadow-2xs group"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs text-foreground/90 group-hover:text-foreground">
                @aimeryadav
              </span>
            </a>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-1.5 mb-6 overflow-x-auto pb-1 hide-scrollbar">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#7A2635] text-white dark:bg-[#A83252] shadow-xs'
                : 'bg-card/70 text-foreground/70 hover:text-foreground hover:bg-card border border-border/60'
            }`}
          >
            All ({accounts.length})
          </button>
          <button
            onClick={() => setActiveFilter('social')}
            className={`px-3 py-1 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer ${
              activeFilter === 'social'
                ? 'bg-[#7A2635] text-white dark:bg-[#A83252] shadow-xs'
                : 'bg-card/70 text-foreground/70 hover:text-foreground hover:bg-card border border-border/60'
            }`}
          >
            Social ({accounts.filter((a) => a.category === 'social').length})
          </button>
          <button
            onClick={() => setActiveFilter('music')}
            className={`px-3 py-1 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer ${
              activeFilter === 'music'
                ? 'bg-[#7A2635] text-white dark:bg-[#A83252] shadow-xs'
                : 'bg-card/70 text-foreground/70 hover:text-foreground hover:bg-card border border-border/60'
            }`}
          >
            Music ({accounts.filter((a) => a.category === 'music').length})
          </button>
          <button
            onClick={() => setActiveFilter('code')}
            className={`px-3 py-1 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer ${
              activeFilter === 'code'
                ? 'bg-[#7A2635] text-white dark:bg-[#A83252] shadow-xs'
                : 'bg-card/70 text-foreground/70 hover:text-foreground hover:bg-card border border-border/60'
            }`}
          >
            Code & Career ({accounts.filter((a) => a.category === 'code').length})
          </button>
        </div>

        {/* Cards Grid — Compact & Responsive */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"
        >
          <AnimatePresence>
            {filteredAccounts.map((account) => (
              <motion.a
                key={account.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#F4F8FA] dark:bg-[#C04365]/[0.18] border border-slate-300/80 dark:border-[#C04365]/30 hover:border-[#7A2635] dark:hover:border-[#FFA3B8] rounded-xl p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer overflow-hidden"
              >
                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/10 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-foreground group-hover:text-[#7A2635] dark:group-hover:text-[#FFA3B8] group-hover:bg-[#7A2635]/10 dark:group-hover:bg-white/15 transition-all">
                      {account.icon}
                    </div>

                    <span className="text-[9px] font-extrabold tracking-wider uppercase text-foreground/60 bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded border border-border/40 group-hover:text-[#7A2635] dark:group-hover:text-[#FFA3B8] transition-colors">
                      {account.tag}
                    </span>
                  </div>

                  {/* Account Name & Handle */}
                  <div className="mt-2">
                    <h3 className="text-sm sm:text-base font-bold text-foreground tracking-tight group-hover:text-[#7A2635] dark:group-hover:text-[#FFA3B8] transition-colors leading-tight">
                      {account.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-foreground/60 mt-0.5 font-mono tracking-tight">
                      {account.handle}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-3.5 w-full py-1.5 px-3 rounded-lg bg-black/5 dark:bg-white/10 group-hover:bg-[#7A2635] group-hover:text-white dark:group-hover:bg-[#A83252] text-foreground text-xs font-bold flex items-center justify-center gap-1 transition-all duration-200 border border-slate-300/60 dark:border-white/10 active:scale-[0.98]">
                  <span>{account.actionText}</span>
                  <ArrowUpRight className="w-3 h-3 text-foreground/60 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom studio affiliation note */}
        <div className="mt-6 pt-3 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-foreground/60">
          <p>
            Founder & Lead at <span className="text-foreground font-semibold">Aimer Studios</span> • Official Creative Ecosystem
          </p>
          <a 
            href="https://aimerstudios.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#7A2635] dark:hover:text-[#FFA3B8] transition-colors flex items-center gap-1 underline underline-offset-2 font-medium"
          >
            aimerstudios.in
            <ArrowUpRight className="w-2.5 h-2.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

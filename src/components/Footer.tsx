import { Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { name: 'Projects', href: '#projects', symbol: '📁' },
  { name: 'Skills', href: '#skills', symbol: '🛠️' },
  { name: 'Certificates', href: '#certificates', symbol: '📜' },
  { name: 'Resume', href: '#resume', symbol: '📄' },
  { name: 'About', href: '#about', symbol: '👤' },
  { name: 'Contact', href: '#contact', symbol: '🤝' },
];

const socialItems = [
  {
    name: 'Email',
    url: portfolioData.personalInfo.social.email,
    icon: <Mail size={15} />,
  },
  {
    name: 'Phone',
    url: `tel:${portfolioData.personalInfo.social.phone.replace(/\s+/g, '')}`,
    icon: <Phone size={15} />,
  },
  {
    name: 'GitHub',
    url: portfolioData.personalInfo.social.github,
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: portfolioData.personalInfo.social.linkedin,
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: portfolioData.personalInfo.social.instagram,
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: portfolioData.personalInfo.social.youtube,
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/30 pt-16 md:pt-20 pb-12 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 items-start">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase mb-3 text-foreground">
              {portfolioData.personalInfo.name}
            </h2>
            <p className="text-muted font-bold tracking-widest text-xs sm:text-sm uppercase max-w-sm leading-relaxed">
              {portfolioData.personalInfo.title}
            </p>
          </div>
          
          {/* Navigation & Social in Horizontal Symbol Rows */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Horizontal Navigation with Symbols */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h4 className="text-xs font-extrabold tracking-widest uppercase text-foreground/50">
                  Navigation
                </h4>
                <div className="h-[1px] flex-1 max-w-[80px] bg-border/60" />
              </div>
              <nav className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card border border-border/70 hover:border-[#7A2635] dark:hover:border-[#A94655] hover:bg-black/5 dark:hover:bg-white/5 text-foreground text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 shadow-2xs group cursor-pointer"
                  >
                    <span className="text-sm transition-transform group-hover:scale-115">{item.symbol}</span>
                    <span>{item.name}</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Horizontal Social with Symbols */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h4 className="text-xs font-extrabold tracking-widest uppercase text-foreground/50">
                  Social
                </h4>
                <div className="h-[1px] flex-1 max-w-[80px] bg-border/60" />
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {socialItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target={item.url.startsWith('http') ? '_blank' : undefined}
                    rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card border border-border/70 hover:border-[#7A2635] dark:hover:border-[#A94655] hover:bg-black/5 dark:hover:bg-white/5 text-foreground text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 shadow-2xs group"
                  >
                    <span className="w-4 h-4 flex items-center justify-center text-foreground/75 group-hover:text-[#7A2635] dark:group-hover:text-[#FFA3B8] transition-colors">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
        
        {/* Footer Bottom Line */}
        <div className="border-t border-border/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest text-muted uppercase">
          <p>© {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.</p>
          <p>Designed & Built for Creative Excellence</p>
        </div>
      </div>
    </footer>
  );
}

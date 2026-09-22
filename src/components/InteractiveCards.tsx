import { motion } from 'framer-motion';
import { User, Folder, Wrench, FileText, Handshake } from 'lucide-react';
import { cn } from '../lib/utils';

const cards = [
  { id: 'about', icon: User, label: 'Me', href: '#about' },
  { id: 'projects', icon: Folder, label: 'Projects', href: '#projects' },
  { id: 'skills', icon: Wrench, label: 'Skills', href: '#skills' },
  { id: 'resume', icon: FileText, label: 'Resume', href: '#resume' },
  { id: 'contact', icon: Handshake, label: 'Contacts', href: '#contact' }
];

export function InteractiveCards({ className }: { className?: string }) {
  return (
    <div className={cn("w-full py-8 overflow-x-auto no-scrollbar", className)}>
      <div className="flex gap-4 min-w-max px-6 md:px-12 container mx-auto">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.a
              key={card.id}
              href={card.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-accent/50 transition-all cursor-pointer group min-w-[140px]"
            >
              <div className="p-2 rounded-full bg-secondary/10 dark:bg-secondary/50 text-accent group-hover:scale-110 transition-transform">
                <Icon size={20} />
              </div>
              <span className="font-semibold text-sm tracking-wide text-foreground group-hover:text-accent transition-colors">
                {card.label}
              </span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

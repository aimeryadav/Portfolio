import { motion } from 'framer-motion';

interface SkillCategoryProps {
  category: string;
  items: string[];
  delay?: number;
}

export function SkillCategory({ category, items, delay = 0 }: SkillCategoryProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className="mb-12"
    >
      <h4 className="text-xl font-cinematic font-bold tracking-widest uppercase mb-6 text-white/80 border-b border-white/10 pb-4">
        {category}
      </h4>
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + (index * 0.05) }}
            className="px-4 py-2 border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-colors duration-300 rounded-full text-sm font-medium tracking-wide cursor-default"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

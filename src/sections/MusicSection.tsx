import { musicProjects } from '../data';
import { SectionHeading } from '../components/SectionHeading';
import { MusicProject } from '../components/MusicProject';

export function MusicSection() {
  return (
    <section id="music" className="py-24 md:py-40 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="MUSIC" 
          subtitle="Words become melodies. Melodies become stories." 
        />
        
        <div className="mb-24">
          <p className="text-2xl md:text-3xl font-cinematic uppercase tracking-widest text-accent mb-4">
            Singer • Rapper • Songwriter
          </p>
          <p className="text-2xl md:text-3xl font-cinematic uppercase tracking-widest text-white/70">
            Composer • Music Producer
          </p>
        </div>

        <div className="flex flex-col">
          {musicProjects.map((project) => (
            <MusicProject key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

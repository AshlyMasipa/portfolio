import Layout from '../components/Layout';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <Layout>
      {/* Hero: Left-aligned, no background, large serif text */}
      <section className="py-32 px-4 md:px-0 border-b border-zinc-800">
        <h1 className="text-6xl md:text-8xl font-serif leading-tight">
          Hi, I'm [Ashly Masipa].<br />
          <span className="text-zinc-500 italic">Full-stack Developer.</span>
        </h1>
        <p className="mt-8 text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
          Building modern web applications with React, TypeScript, and Azure. 
          Focused on clean code and editorial design.
        </p>
      </section>

      {/* Projects: Single column for maximum impact */}
      <section className="py-20 px-4 md:px-0">
        <div className="flex justify-between items-baseline mb-12">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-medium">
            Selected Projects
          </h2>
          <span className="text-zinc-600 text-xs">01 — 03</span>
        </div>
        
        <div className="flex flex-col">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
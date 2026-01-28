import type { Project } from '../data/projects';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group border-b border-zinc-800 py-16 last:border-b-0">
      <Link to={`/projects/${project.slug}`} className="block">
        {/* 1. Full Color Image with a subtle scale effect on hover */}
        <div className="overflow-hidden mb-8 rounded-2xl">          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full aspect-[16/9] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
          />
        </div>

        {/* 2. Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="max-w-3xl">
            <h3 className="text-4xl md:text-6xl font-serif text-white mb-4 group-hover:italic transition-all duration-300">
              {project.title}
            </h3>
            
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl">
              {project.description}
            </p>

            {/* 3. Tech Stack - Minimal text labels */}
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium">
              {project.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          {/* 4. Navigation Links */}
          <div className="flex gap-8 text-xs uppercase tracking-widest pt-2 shrink-0">
            <span className="border-b border-white pb-1">
              View Project ↗
            </span>
            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-zinc-500 text-zinc-400 pb-1 hover:text-white hover:border-white transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
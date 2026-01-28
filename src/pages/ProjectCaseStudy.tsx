import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { projects } from '../data/projects';

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="py-24 text-center font-serif italic text-2xl">Project not found.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-24 px-4 md:px-0">
        {/* 1. Hero Header */}
        <header className="mb-20">
          <Link 
            to="/projects" 
            className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors mb-8 inline-block"
          >
            ← Back to Work
          </Link>
          <h1 className="text-6xl md:text-9xl font-serif leading-tight mt-4">
            {project.title}
          </h1>
        </header>

        {/* 2. Main Impact Image */}
        <div className="mb-24 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full aspect-video object-cover"
          />
        </div>

        {/* 3. Sidebar + Content Layout */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 relative">
          
          {/* STICKY SIDEBAR */}
          <aside className="md:w-1/4">
            <div className="md:sticky md:top-32 space-y-12">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Category</span>
                <span className="text-zinc-300">Full Stack / Cloud</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Stack</span>
                <div className="flex flex-col text-zinc-300 font-serif italic">
                  {project.techStack.map(tech => <span key={tech}>{tech}</span>)}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest text-zinc-600">Role</span>
                <span className="text-zinc-300">Lead Developer</span>
              </div>

              {project.previewUrl && (
                <div className="pt-4">
                  <a href={project.previewUrl} target="_blank" className="text-xl font-serif italic hover:text-zinc-400 transition-colors border-b border-zinc-700 pb-1">
                    Live Preview ↗
                  </a>
                </div>
              )}
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <div className="md:w-3/4 space-y-24">
            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-8">The Concept</h2>
              <p className="text-xl md:text-3xl text-zinc-200 leading-relaxed font-light">
                {project.description}
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 list-none italic text-lg text-zinc-400">
                <li className="before:content-['—'] before:mr-3 border-b border-zinc-900 pb-4">Scalable Azure Infrastructure</li>
                <li className="before:content-['—'] before:mr-3 border-b border-zinc-900 pb-4">Real-time Data Processing</li>
                <li className="before:content-['—'] before:mr-3 border-b border-zinc-900 pb-4">Custom TypeScript Architecture</li>
                <li className="before:content-['—'] before:mr-3 border-b border-zinc-900 pb-4">High-Fidelity UI/UX</li>
              </ul>
            </section>

            {/* Any additional project images or text sections would go here */}
          </div>
        </div>

        {/* 4. Technical Architecture (Full Width Footer of the Article) */}
        <section className="mt-32 pt-24 border-t border-zinc-800">
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-12 text-center">
            System Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-800">
            <div className="p-10 border-b md:border-b-0 md:border-r border-zinc-800">
              <h3 className="text-white font-serif italic text-xl mb-6 text-center">Client</h3>
              <ul className="text-sm text-zinc-500 space-y-3 text-center font-mono uppercase tracking-tighter">
                <li>React / Vite</li>
                <li>Tailwind CSS</li>
                <li>React Router</li>
                <li>Azure Static Web Apps</li>
              </ul>
            </div>

            <div className="p-10 border-b md:border-b-0 md:border-r border-zinc-800 bg-zinc-900/20">
              <h3 className="text-white font-serif italic text-xl mb-6 text-center">Logic</h3>
              <ul className="text-sm text-zinc-500 space-y-3 text-center font-mono uppercase tracking-tighter">
                <li>Node.js / TS</li>
                <li>Azure Functions</li>
                <li>REST API</li>
                <li>JWT Auth</li>
              </ul>
            </div>

            <div className="p-10">
              <h3 className="text-white font-serif italic text-xl mb-6 text-center">Data</h3>
              <ul className="text-sm text-zinc-500 space-y-3 text-center font-mono uppercase tracking-tighter">
                <li>Cosmos DB / Mongo</li>
                <li>Azure Blob Storage</li>
                <li>Redis Cache</li>
                <li>CDN Edge</li>
              </ul>
            </div>
          </div>
          
          <p className="mt-8 text-center text-zinc-600 text-sm max-w-xl mx-auto italic font-serif">
            The application is architected for global scale using a serverless approach on Azure, 
            ensuring &lt;100ms latency across major regions.
          </p>
        </section>

        {/* 5. Pagination / Next Project */}
        <div className="mt-40 pt-16 border-t border-zinc-800 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-6">Next Project</p>
          <Link 
            to="/projects" 
            className="text-5xl md:text-8xl font-serif hover:italic transition-all inline-block"
          >
            All Work ↗
          </Link>
        </div>
      </article>
    </Layout>
  );
}
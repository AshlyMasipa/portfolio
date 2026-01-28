import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <section className="py-32 px-4 md:px-0 min-h-[70vh] flex flex-col justify-center">
        <h1 className="text-6xl md:text-9xl font-serif mb-12 group">
          Get in <span className="italic group-hover:text-zinc-500 transition-colors">touch.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-xl mb-16">
          I’m always open to discussing new projects, creative ideas, or 
          opportunities to be part of your visions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-800 pt-12">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-zinc-600">Email</span>
            <a href="mailto:masipaashly@gmail.com" className="text-2xl hover:italic transition-all">
              masipaashly@gmail.com
            </a>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-zinc-600">Social</span>
            <div className="flex flex-col text-2xl">
              <a href="https://github.com/AshlyMasipa" className="hover:italic transition-all">GitHub</a>
              <a href="https://www.linkedin.com/in/ashly-masipa-429041327/" className="hover:italic transition-all">LinkedIn</a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest text-zinc-600">Location</span>
            <span className="text-2xl">Based in Johannesburg, South Africa</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
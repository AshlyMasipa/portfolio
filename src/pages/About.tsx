import Layout from '../components/Layout';

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL"] },
    { category: "Cloud & Devops", items: ["Azure", "Docker", "CI/CD", "Terraform"] },
  ];

  return (
    <Layout>
      <section className="py-24 px-4 md:px-0">
        {/* Large Header */}
        <h1 className="text-6xl md:text-8xl font-serif mb-16 leading-tight">
          A developer focused on <br />
          <span className="italic text-zinc-500">performance & precision.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Narrative Side */}
          <div className="md:col-span-7 text-xl text-zinc-400 leading-relaxed space-y-8">
            <p>
              I'm [Your Name], a full-stack engineer currently based in [Your Location]. 
              I specialize in bridging the gap between complex backend infrastructure 
              and intuitive frontend experiences.
            </p>
            <p>
              My approach is rooted in minimalist design and robust architecture. 
              Whether I'm scaling applications on <span className="text-white">Azure</span> or 
              refining a user interface, I prioritize clarity and maintainable code.
            </p>
          </div>

          {/* Technical Stack Side */}
          <div className="md:col-span-4 md:col-start-9">
            <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-8 font-medium">
              Technical Stack
            </h2>
            <div className="space-y-8">
              {skills.map((skill) => (
                <div key={skill.category} className="border-t border-zinc-800 pt-4">
                  <h3 className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-300">
                    {skill.items.map(item => <span key={item}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
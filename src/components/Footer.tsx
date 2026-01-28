export default function Footer() {
  return (
    <footer className="mt-32 pb-12 border-t border-zinc-800 pt-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="text-2xl font-serif mb-4 italic">Let's connect.</h2>
          <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            <a href="https://github.com/AshlyMasipa" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/ashly-masipa-429041327/" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:masipaashly@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>

        <div className="text-right">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            © {new Date().getFullYear()} — Portfolio
          </p>
          <p className="text-[9px] text-zinc-700 mt-1 uppercase tracking-widest">
            Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
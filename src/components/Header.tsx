import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="py-8 px-4 md:px-0 flex justify-between items-center border-b border-zinc-800">
      <Link to="/" className="text-xl font-serif tracking-tighter hover:italic transition-all">
        portfolio.
      </Link>
      
      <nav className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
        <Link to="/projects" className="hover:text-white transition-colors">Work</Link>
        <Link to="/about" className="hover:text-white transition-colors">About</Link>
        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
      </nav>
    </header>
  );
}
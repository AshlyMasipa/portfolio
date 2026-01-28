import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveMouse);
    return () => window.removeEventListener('mousemove', moveMouse);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out hidden md:block"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        // Adding will-change improves performance for high-frequency movements
        willChange: 'left, top' 
      }}
    />
  );
}

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* 2. Include the cursor inside the layout */}
      <CustomCursor />
      
      {/* 3. The grain overlay */}
      <div className="grain-overlay" /> 
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
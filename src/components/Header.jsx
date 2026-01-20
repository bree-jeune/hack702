import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-panel border-b-0 shadow-lg' : 'py-8 bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container flex justify-between items-center">
        <a href="/" className="font-display text-2xl font-bold text-[var(--color-charcoal)] tracking-tight group flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-amber)] flex items-center justify-center text-white text-xs font-mono">702</div>
          <span className="group-hover:text-[var(--color-amber)] transition-colors">Hack702</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {['Curriculum', 'Projects', 'Community', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold text-[var(--color-text)]/70 hover:text-[var(--color-amber)] transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-amber)] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#signup"
          className="bg-[var(--color-charcoal)] text-white px-7 py-3 text-sm font-bold rounded-full transition-all duration-300 hover:bg-[var(--color-amber)] hover:shadow-xl hover:shadow-[var(--color-amber-glow)] hover:-translate-y-0.5"
        >
          Join Community
        </a>
      </div>
    </motion.header>
  );
};

export default Header;

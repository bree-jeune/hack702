import React from 'react';

const Header = () => {
  return (
    <header className="py-6 border-b border-[var(--color-sand-dark)] sticky top-0 bg-[var(--color-sand)]/90 backdrop-blur-sm z-50 transition-all duration-300">
      <div className="container flex justify-between items-center bg-transparent">
        <a href="/" className="font-display text-2xl font-bold text-[var(--color-charcoal)] no-underline group">
          Hack<span className="text-[var(--color-amber)] group-hover:animate-pulse">702</span>
        </a>
        <a href="#signup" className="bg-[var(--color-charcoal)] text-[var(--color-sand)] px-6 py-3 no-underline font-medium rounded-md transition-colors duration-200 hover:bg-[var(--color-charcoal-light)]">
          Join the Class
        </a>
      </div>
    </header>
  );
};

export default Header;

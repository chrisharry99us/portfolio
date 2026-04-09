"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroAbout = document.getElementById("hero-about");
      if (heroAbout) {
        const bottom = heroAbout.getBoundingClientRect().bottom;
        setFloating(bottom <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`left-0 right-0 z-50 transition-all duration-500 px-6 py-4 bg-navy ${
      floating ? "fixed top-0 bg-navy/90 backdrop-blur-md shadow-lg" : "relative"
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <span className="font-serif text-xl font-bold text-white">
          Chris Rodrigues
        </span>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-white/80 hover:text-gold transition-colors">About</a>
          <a href="#skills" className="text-sm text-white/80 hover:text-gold transition-colors">Skills</a>
          <a href="#projects" className="text-sm text-white/80 hover:text-gold transition-colors">Projects</a>
          <a href="#blog" className="text-sm text-white/80 hover:text-gold transition-colors">Blog</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-gold transition-colors">Contact</a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="text-sm bg-gold text-navy font-semibold px-4 py-2 rounded hover:bg-gold-dark hover:text-white transition-colors"
          >
            Download Resume
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-2 pb-4 bg-navy/95">
          <a href="#about" className="text-sm text-white hover:text-gold" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" className="text-sm text-white hover:text-gold" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className="text-sm text-white hover:text-gold" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#blog" className="text-sm text-white hover:text-gold" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#contact" className="text-sm text-white hover:text-gold" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="/resume.pdf" target="_blank" className="text-sm bg-gold text-navy font-semibold px-4 py-2 rounded w-fit">
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
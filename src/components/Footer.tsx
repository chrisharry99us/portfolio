"use client";

export default function Footer() {
    return (
      <footer className="bg-navy border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-white font-bold">Chris Rodrigues</p>
          <p className="text-gray-500 text-sm">© 2026 · Built with Next.js</p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/chris-rodrigues" target="_blank" className="text-gray-500 hover:text-gold text-sm transition-colors">LinkedIn</a>
            <a href="https://github.com/chrisharry99us" target="_blank" className="text-gray-500 hover:text-gold text-sm transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    );
  }
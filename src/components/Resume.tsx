"use client";

export default function Resume() {
    return (
      <section id="resume" className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
  
          <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-4">Experience</p>
          <h2 className="font-serif text-4xl font-bold text-navy mb-6">Resume</h2>
          <p className="text-gray-500 text-lg mb-10">
            Available for full-time and contract roles in financial analytics and data science.
          </p>
  
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-block bg-gold text-navy font-semibold px-10 py-4 rounded hover:bg-gold-dark hover:text-white transition-colors text-lg"
          >
            Download Resume
          </a>
  
          {/* Key experience highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { label: "Background", value: "Software Engineering" },
              { label: "Current focus", value: "Data Science & Finance" },
              { label: "Available", value: "Full-time & Contract" },
            ].map((item) => (
              <div key={item.label} className="bg-navy-pale rounded-lg p-6">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{item.label}</p>
                <p className="text-navy font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }
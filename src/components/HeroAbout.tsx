"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);
  const aboutOpacity = useTransform(scrollYProgress, [0.25, 0.6], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0.25, 0.6], [80, 0]);

  return (
<section id="hero-about" ref={containerRef} className="relative h-[250vh]">
      <div className="sticky top-0 h-screen flex overflow-hidden">

        <div className="w-[35%] relative flex-shrink-0">
          <div className="absolute inset-0">
            <Image
              src="/photo.jpg"
              alt="Chris Rodrigues"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white/10" />
        </div>

        <div className="flex-1 bg-white relative flex items-center justify-center px-16 overflow-hidden">

          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="absolute inset-0 flex items-center justify-center px-16"
          >
            <div className="max-w-xl w-full">
  <h1 className="font-serif text-6xl lg:text-7xl font-bold text-navy mb-6 leading-tight">
    Chris Rodrigues
  </h1>
  <div className="flex flex-wrap gap-3 mb-8">
    {["Software Engineer", "Data Scientist", "Finance Tech"].map((tag) => (
      <span key={tag} className="text-xs border border-gold text-gold px-4 py-1.5 rounded-full">
        {tag}
      </span>
    ))}
  </div>
              <p className="text-xl text-gray-700 mb-4">
                Software engineer turned data scientist —{" "}
                <span className="text-gold">specialising in finance analytics</span>
              </p>
              <p className="text-gray-600 text-base mb-12">
                I build systems that turn raw financial data into decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="bg-gold text-navy font-semibold px-8 py-3 rounded hover:bg-gold-dark hover:text-white transition-colors"
                >
                  View Projects
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="border border-gold text-gold font-semibold px-8 py-3 rounded hover:bg-gold hover:text-navy transition-colors"
                >
                  Download Resume
                </a>
              </div>
              <div className="mt-16 flex flex-col items-start gap-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#C6A84B"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="animate-bounce"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
</div>
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: aboutOpacity, y: aboutY }}
            className="absolute inset-0 flex items-center justify-center px-16"
          >
            <div className="max-w-xl w-full">
              <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-4">
                About Me
              </p>
              <h2 className="font-serif text-4xl font-bold text-navy mb-8">
                Engineer. Data Scientist. Finance builder.
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                I started my career as a software engineer, spending several years
                building production systems and developing a deep understanding of
                how technology actually works under the hood.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                I then pivoted into data science — drawn by the challenge of
                extracting meaning from complex datasets. Now I'm applying both
                skill sets to finance, where the problems are high-stakes and the
                data is rich.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-10">
                Most analysts can't build. Most engineers don't understand markets.
                I sit at that intersection.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Engineering", desc: "Systems & software" },
                  { label: "Data Science", desc: "ML & analytics" },
                  { label: "Finance", desc: "Markets & insight" },
                ].map((pillar) => (
                  <div
                    key={pillar.label}
                    className="border border-navy-light rounded-lg p-4 text-center"
                  >
                    <p className="text-navy font-semibold text-sm">{pillar.label}</p>
                    <p className="text-gray-500 text-xs mt-1">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
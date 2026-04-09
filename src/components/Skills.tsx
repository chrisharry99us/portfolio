import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-navy">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-4">What I work with</p>
          <h2 className="font-serif text-4xl font-bold text-white">Skills & Technologies</h2>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="bg-navy-light rounded-xl p-8 border border-white/10"
            >
              {/* Category heading */}
              <p className="text-gold font-semibold text-sm tracking-wide uppercase mb-6">
                {group.category}
              </p>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-white border border-white/20 px-3 py-1.5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
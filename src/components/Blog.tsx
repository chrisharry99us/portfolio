import { posts } from "@/data/blog";
import FadeIn from "@/components/FadeIn";

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 bg-navy">
      <div className="max-w-6xl mx-auto">

        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-4">Thinking out loud</p>
            <h2 className="font-serif text-4xl font-bold text-white">Writing</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.15}>
              <a
                href={post.url}
                target="_blank"
                className="bg-navy-light border border-white/10 rounded-xl p-8 hover:border-gold/40 transition-all duration-200 block h-full"
              >
                <p className="text-gray-400 text-xs mb-4">{post.date} · {post.readTime}</p>
                <h3 className="font-serif text-lg font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.preview}</p>
                <span className="text-gold text-sm">Read more →</span>
              </a>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
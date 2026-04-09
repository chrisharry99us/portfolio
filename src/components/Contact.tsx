"use client";

export default function Contact() {
    return (
      <section id="contact" className="py-24 px-6 bg-navy">
        <div className="max-w-2xl mx-auto">
  
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-4">Get in touch</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Contact</h2>
            <p className="text-gray-400">
              Open to roles, contracts, and interesting problems in finance and data.
            </p>
          </div>
  
          {/* Form */}
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="flex flex-col gap-4 mb-12"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="bg-navy-light border border-white/20 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-gold"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="bg-navy-light border border-white/20 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-gold"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              required
              className="bg-navy-light border border-white/20 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-gold resize-none"
            />
            <button
              type="submit"
              className="bg-gold text-navy font-semibold py-3 rounded-lg hover:bg-gold-dark hover:text-white transition-colors"
            >
              Send Message
            </button>
          </form>
  
          {/* Links */}
          <div className="flex justify-center gap-8">
            <a href="https://linkedin.com/in/chris-rodrigues" target="_blank" className="text-gray-400 hover:text-gold transition-colors text-sm">
              LinkedIn →
            </a>
            <a href="https://github.com/chrisharry99us" target="_blank" className="text-gray-400 hover:text-gold transition-colors text-sm">
              GitHub →
            </a>
            <a href="mailto:chrisharry99us@gmail.com" className="text-gray-400 hover:text-gold transition-colors text-sm">
              Email →
            </a>
          </div>
  
        </div>
      </section>
    );
  }
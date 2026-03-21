import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToCta = () => {
    document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="section-container relative">
      {/* Gradient blurs */}
      <div className="gradient-blur gradient-blur-primary w-[500px] h-[500px] -top-20 -left-40 animate-pulse-glow" />
      <div className="gradient-blur gradient-blur-accent w-[400px] h-[400px] bottom-10 right-[-100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Hello, I'm
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] text-balance mb-6"
        >
          Creative
          <br />
          <span className="text-gradient">Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft immersive digital experiences with modern web technologies.
          Full-stack engineer passionate about performance, design, and pushing boundaries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToCta}
            className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:brightness-110 transition-all duration-200 active:scale-[0.97] glow-primary"
          >
            Get in Touch
          </button>
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-xl border border-border text-foreground font-semibold text-sm tracking-wide hover:bg-secondary/60 transition-all duration-200 active:scale-[0.97]"
          >
            View Work
          </button>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { num: "3+", label: "Years Exp." },
            { num: "25+", label: "Projects" },
            { num: "10+", label: "Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">{stat.num}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

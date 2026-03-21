import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="cta" className="section-container">
      <div className="gradient-blur gradient-blur-primary w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-center relative z-10 max-w-2xl mx-auto"
      >
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-balance">
          Let's Build Something <span className="text-gradient">Amazing</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          I'm always open to exciting opportunities and collaborations. Let's create something extraordinary together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px hsl(165 80% 48% / 0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base tracking-wide glow-primary transition-all duration-300 cursor-pointer"
          >
            Hire Me
          </motion.a>

          <motion.a
            href="#resume"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#resume")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 rounded-xl border border-border text-foreground font-bold text-base tracking-wide hover:bg-secondary/60 transition-all duration-300 cursor-pointer"
          >
            View Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;

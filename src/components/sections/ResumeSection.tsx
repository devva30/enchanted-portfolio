import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="section-container">
      <div className="gradient-blur gradient-blur-accent w-[400px] h-[400px] top-20 right-10 animate-pulse-glow" />

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center relative z-10"
      >
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">My Resume</h2>
        <p className="text-muted-foreground mb-12 text-lg">Download my latest resume in PDF format</p>

        <motion.a
          href="#"
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.97 }}
          className="glass-card inline-flex flex-col items-center gap-4 p-12 cursor-pointer group"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <span className="text-foreground font-semibold text-lg">Resume_2025.pdf</span>
          <span className="flex items-center gap-2 text-primary text-sm font-mono">
            <Download className="w-4 h-4" />
            Click to download
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ResumeSection;

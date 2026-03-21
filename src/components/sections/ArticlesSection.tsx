import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  { title: "Building Performant Animations with Framer Motion", date: "Mar 2025", read: "5 min" },
  { title: "A Deep Dive into React Server Components", date: "Feb 2025", read: "8 min" },
  { title: "Mastering Three.js for Web Experiences", date: "Jan 2025", read: "6 min" },
  { title: "The Art of CSS Grid Layouts", date: "Dec 2024", read: "4 min" },
];

const ArticlesSection = () => {
  return (
    <section id="articles" className="section-container">
      <div className="gradient-blur gradient-blur-accent w-[400px] h-[400px] top-40 -left-20 animate-pulse-glow" />

      <div className="w-full max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Featured Articles</h2>
          <p className="text-muted-foreground text-lg">Thoughts on code and craft</p>
        </motion.div>

        <div className="space-y-3">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href="#"
              initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ x: 8 }}
              className="glass-card p-5 flex items-center justify-between group cursor-pointer block"
            >
              <div>
                <h3 className="text-foreground font-medium group-hover:text-primary transition-colors duration-200">{article.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 font-mono">{article.date} · {article.read} read</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "Three.js / WebGL", level: 75 },
  { name: "PostgreSQL", level: 82 },
  { name: "Docker / DevOps", level: 70 },
  { name: "UI/UX Design", level: 78 },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.5 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
          className="text-xs font-mono text-primary tabular-nums"
        >
          {level}%
        </motion.span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="skill-bar-fill"
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <div className="gradient-blur gradient-blur-accent w-[500px] h-[500px] top-20 -right-40 animate-pulse-glow" />

      <div className="w-full max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">My Skills</h2>
          <p className="text-muted-foreground text-lg">Technologies I work with daily</p>
        </motion.div>

        <div className="glass-card p-8 sm:p-12">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

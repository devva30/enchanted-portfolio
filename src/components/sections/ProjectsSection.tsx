import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with real-time inventory and Stripe payments.",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "AI Dashboard",
    description: "Analytics dashboard with ML-powered insights and data visualization.",
    tags: ["Next.js", "Python", "TensorFlow"],
    color: "from-accent/20 to-primary/10",
  },
  {
    title: "Social Media App",
    description: "Real-time messaging platform with end-to-end encryption.",
    tags: ["React Native", "Firebase", "WebRTC"],
    color: "from-primary/15 to-accent/15",
  },
  {
    title: "Portfolio Generator",
    description: "Drag-and-drop portfolio builder with custom themes and domains.",
    tags: ["Vue.js", "Supabase", "Tailwind"],
    color: "from-accent/15 to-primary/20",
  },
  {
    title: "DevOps Monitor",
    description: "Infrastructure monitoring tool with alerting and log analysis.",
    tags: ["Go", "Docker", "Grafana"],
    color: "from-primary/20 to-accent/5",
  },
  {
    title: "Music Streaming",
    description: "Cross-platform music player with collaborative playlists.",
    tags: ["Flutter", "Rust", "AWS"],
    color: "from-accent/20 to-primary/5",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <div className="gradient-blur gradient-blur-primary w-[500px] h-[500px] -bottom-40 -left-40 animate-pulse-glow" />

      <div className="w-full max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">A selection of work I'm proud of</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-card p-6 group cursor-pointer"
            >
              <div className={`h-36 rounded-lg bg-gradient-to-br ${project.color} mb-5 flex items-center justify-center`}>
                <span className="text-3xl font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors">
                  {project.title.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-primary text-sm flex items-center gap-1"><ExternalLink size={14} /> Live</span>
                <span className="text-muted-foreground text-sm flex items-center gap-1"><Github size={14} /> Code</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", url: "#", hoverColor: "hover:text-foreground" },
  { icon: Linkedin, label: "LinkedIn", url: "#", hoverColor: "hover:text-[hsl(210,80%,55%)]" },
  { icon: Instagram, label: "Instagram", url: "#", hoverColor: "hover:text-[hsl(330,70%,55%)]" },
  { icon: Youtube, label: "YouTube", url: "#", hoverColor: "hover:text-[hsl(0,80%,55%)]" },
  { icon: Twitter, label: "Twitter", url: "#", hoverColor: "hover:text-[hsl(200,85%,55%)]" },
];

const SocialSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-sm mb-8"
        >
          Find me on the internet
        </motion.p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 rounded-xl bg-secondary/60 border border-border/40 flex items-center justify-center text-muted-foreground ${social.hoverColor} transition-colors duration-200`}
              title={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-muted-foreground/50 text-xs mt-12 font-mono"
        >
          © 2025 · Built with React, Three.js & Framer Motion
        </motion.p>
      </div>
    </section>
  );
};

export default SocialSection;

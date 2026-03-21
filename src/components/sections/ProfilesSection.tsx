import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const profiles = [
  { name: "GitHub", handle: "@yourname", url: "#", color: "from-[hsl(0,0%,30%)] to-[hsl(0,0%,20%)]" },
  { name: "LeetCode", handle: "1200+ rating", url: "#", color: "from-[hsl(35,90%,45%)] to-[hsl(25,80%,35%)]" },
  { name: "SkillRack", handle: "Gold badge", url: "#", color: "from-[hsl(200,70%,40%)] to-[hsl(210,60%,30%)]" },
  { name: "HackerRank", handle: "5★ Problem Solving", url: "#", color: "from-[hsl(150,60%,35%)] to-[hsl(160,50%,25%)]" },
];

const ProfilesSection = () => {
  return (
    <section id="profiles" className="section-container">
      <div className="gradient-blur gradient-blur-primary w-[400px] h-[400px] bottom-20 right-0 animate-pulse-glow" />

      <div className="w-full max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Coding Profiles</h2>
          <p className="text-muted-foreground text-lg">Where I sharpen my skills</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {profiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="glass-card p-6 flex items-center gap-4 group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${profile.color} flex items-center justify-center shrink-0`}>
                <span className="text-lg font-bold text-foreground/80">{profile.name.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{profile.name}</h3>
                <p className="text-xs text-muted-foreground font-mono">{profile.handle}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-container">
      <div className="gradient-blur gradient-blur-primary w-[500px] h-[500px] bottom-0 left-0 animate-pulse-glow" />

      <div className="w-full max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">I'd love to hear from you</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">hello@example.com</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3 glass-card p-8 space-y-5"
          >
            {(["name", "email", "message"] as const).map((field) => (
              <div key={field}>
                <label className="text-sm font-medium text-foreground capitalize mb-1.5 block">{field}</label>
                {field === "message" ? (
                  <textarea
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    rows={4}
                    className="w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
                    placeholder={`Your ${field}...`}
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full rounded-lg bg-secondary/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
                    placeholder={`Your ${field}...`}
                  />
                )}
                {errors[field] && <p className="text-destructive text-xs mt-1">{errors[field]}</p>}
              </div>
            ))}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 glow-primary transition-all duration-200"
            >
              {sent ? (
                <>
                  <CheckCircle size={16} /> Sent Successfully!
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

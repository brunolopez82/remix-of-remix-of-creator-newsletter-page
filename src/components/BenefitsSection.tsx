import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  { title: "Weekly insights every Thursday", gradient: "linear-gradient(135deg, #F5C6B0, #F4A5A0)" },
  { title: "No spam — unsubscribe anytime", gradient: "linear-gradient(135deg, #D4A5E5, #C0B8F0)" },
  { title: "Exclusive frameworks & templates", gradient: "linear-gradient(135deg, #A8C8F0, #88D4F0)" },
  { title: "Behind-the-scenes creator stories", gradient: "linear-gradient(135deg, #B8E8C8, #8DD8D8)" },
  { title: "Hand-picked tools & resources", gradient: "linear-gradient(135deg, #F2B8D0, #E8A0BF)" },
  { title: "Join 12,847+ creators", gradient: "linear-gradient(135deg, #F8E8E0, #F5D5C8)" },
];

const BenefitsSection = () => (
  <motion.div
    id="benefits"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="bg-card p-8 lg:p-14"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Left: Heading */}
      <div>
        <h2
          className="text-3xl lg:text-5xl font-black text-foreground tracking-tight leading-[1]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Why creators subscribe
        </h2>
        <p className="text-base lg:text-lg text-muted-foreground mt-4 max-w-md">
          Everything you need to level up your creative practice, delivered to your inbox.
        </p>
      </div>

      {/* Right: Checklist */}
      <div className="flex flex-col gap-4">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: b.gradient }}
            >
              <Check className="w-4 h-4 text-foreground" strokeWidth={3} />
            </div>
            <span className="text-sm lg:text-base font-semibold text-foreground">{b.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default BenefitsSection;

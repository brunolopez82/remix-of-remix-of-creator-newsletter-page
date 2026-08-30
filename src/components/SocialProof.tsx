import { motion } from "framer-motion";

const SocialProof = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
    {/* Card 1: Quote — gradient bg */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden p-8 lg:p-10 flex flex-col justify-end min-h-[360px]"
      style={{ background: "linear-gradient(160deg, #F8E8E0 0%, #F5D5C8 40%, #F0C4B8 100%)" }}
    >
      <span className="absolute top-6 right-8 text-6xl font-black text-black/10 leading-none select-none">&rdquo;</span>
      <p className="text-xl lg:text-2xl font-black text-foreground leading-snug mb-4">
        Trusted by 12,847 creators, marketers, and founders who read every Thursday.
      </p>
      <p className="text-sm text-foreground/50">47% average open rate</p>
    </motion.div>

    {/* Card 2: What you get — plain card */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="bg-card p-8 lg:p-10 flex flex-col justify-end min-h-[360px]"
    >
      <p className="text-xl lg:text-2xl font-black text-foreground leading-snug mb-6">
        We help creators build their audience and ship consistently across all platforms.
      </p>
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          <div className="w-9 h-9 rounded-full bg-accent border-2 border-card" />
          <div className="w-9 h-9 rounded-full bg-muted border-2 border-card" />
          <div className="w-9 h-9 rounded-full bg-foreground/10 border-2 border-card" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Read samples</span>
      </div>
    </motion.div>

    {/* Card 3: Holographic gradient visual */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden min-h-[360px] relative"
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #F8C4C4 0%, #F2B8D0 20%, #D4A5E5 40%, #A8C8F0 60%, #8DD8D8 80%, #B8E8C8 100%)",
        }}
      />
      <div
        className="absolute bottom-[-30%] right-[-15%] w-[80%] h-[80%] rounded-full"
        style={{
          background: "radial-gradient(circle at center, #88D4F0 0%, #A0B8F0 30%, #D4A0E0 60%, #F0A0B8 100%)",
          opacity: 0.9,
        }}
      />
    </motion.div>
  </div>
);

export default SocialProof;

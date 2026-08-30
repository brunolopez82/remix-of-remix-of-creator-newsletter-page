import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const issues = [
  {
    tag: "Productivity",
    title: "5 Mental Models That Changed How I Create Content",
    excerpt: "Discover the thinking frameworks that helped me double my output while maintaining quality.",
    readTime: "8 min read",
    gradient: "linear-gradient(160deg, #E8E0F8 0%, #D0C8F5 40%, #C0B8F0 100%)",
  },
  {
    tag: "Growth",
    title: "The 80/20 Rule for Building Your Audience",
    excerpt: "Most creators waste time on activities that don't move the needle. Here's the 20% that matters.",
    readTime: "6 min read",
    gradient: null,
  },
  {
    tag: "Strategy",
    title: "Why Most Creators Fail at Consistency (And How to Fix It)",
    excerpt: "Consistency isn't about motivation—it's about systems. Learn the three-part framework.",
    readTime: "10 min read",
    gradient: "linear-gradient(160deg, #D8F0E0 0%, #C0E8D0 40%, #A8E0C4 100%)",
  },
];

const SampleIssues = () => (
  <div id="issues" className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
    {issues.map((issue, i) => (
      <motion.article
        key={issue.title}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="group p-8 lg:p-10 flex flex-col justify-end min-h-[360px]"
        style={{ background: issue.gradient || "hsl(var(--card))" }}
      >
        <span className="text-xs uppercase tracking-widest font-semibold text-foreground/50 mb-4 inline-block">
          {issue.tag}
        </span>
        <h3 className="text-xl lg:text-2xl font-black text-foreground leading-tight mb-3">{issue.title}</h3>
        <p className="text-sm text-foreground/60 leading-relaxed mb-6">{issue.excerpt}</p>
        <div className="flex items-center justify-between pt-5 border-t border-black/10">
          <span className="flex items-center gap-1.5 text-xs text-foreground/40">
            <Clock className="w-3.5 h-3.5" />{issue.readTime}
          </span>
          <a href="/post/sample" className="text-sm text-foreground font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
            Read <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.article>
    ))}
  </div>
);

export default SampleIssues;

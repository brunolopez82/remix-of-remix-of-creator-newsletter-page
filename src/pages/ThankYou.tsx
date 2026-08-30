import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  "Check your email (including spam folder) for a confirmation link",
  "Add hello@weeklycreative.com to your contacts so our emails always reach you",
  "Follow me on social media for daily tips and behind-the-scenes content",
];

const ThankYou = () => (
  <div className="min-h-screen hero-gradient flex items-center justify-center px-6 py-20">
    <div className="max-w-2xl text-center">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
      >
        <CheckCircle className="w-20 h-20 lg:w-24 lg:h-24 text-success mx-auto mb-8" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-4xl lg:text-5xl font-bold text-foreground mb-4"
      >
        You're In! 🎉
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="text-xl lg:text-2xl text-muted-foreground mb-12"
      >
        Welcome to The Weekly Creative community! Your first issue arrives this Thursday morning.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="bg-card rounded-2xl p-8 lg:p-10 shadow-lg border border-border mb-12 text-left"
      >
        <h2 className="text-xl font-bold text-foreground mb-6 text-center">Next Steps</h2>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
            className={`flex items-start gap-4 ${i < steps.length - 1 ? "mb-6" : ""}`}
          >
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
              {i + 1}
            </span>
            <p className="text-foreground/80 leading-relaxed flex-1 pt-1">{step}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.5 }}
        className="border-t border-border pt-8"
      >
        <p className="text-muted-foreground mb-6">Know someone who'd love this newsletter?</p>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Share on Twitter", "Share on LinkedIn", "Copy Link"].map((label, i) => (
            <motion.button
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.7 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-card border-2 border-border text-foreground/80 font-semibold rounded-xl hover:border-primary hover:text-primary transition-all"
            >
              {label}
            </motion.button>
          ))}
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-colors"
        >
          ← Back to homepage
        </Link>
      </motion.div>
    </div>
  </div>
);

export default ThankYou;

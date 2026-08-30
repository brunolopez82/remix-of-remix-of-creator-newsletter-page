import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface HeroSectionProps {
  onSubscribe?: () => void;
}

const HeroSection = ({ onSubscribe }: HeroSectionProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);
    const { error: dbError } = await supabase
      .from("subscribers")
      .insert({ email: email.trim().toLowerCase() });
    setIsSubmitting(false);
    if (dbError) {
      if (dbError.code === "23505") {
        setError("You're already subscribed!");
      } else {
        setError("Something went wrong. Please try again.");
      }
      return;
    }
    setIsSuccess(true);
    if (onSubscribe) {
      setTimeout(onSubscribe, 2000);
    }
  };

  const buttonLabel = isSubmitting
    ? "Subscribing…"
    : isSuccess
    ? "You're in! ✓"
    : "Subscribe Free";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className="flex flex-col gap-[2px]"
    >
      {/* Row 1: Hero headline left + 2 stacked info cells right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px]">
        {/* Left: Headline */}
        <div className="bg-card rounded-tl-2xl flex flex-col justify-center p-8 lg:p-14 min-h-[480px] lg:min-h-[540px]">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-5xl lg:text-7xl font-black text-foreground leading-[0.95] tracking-tighter"
          >
            Master the art of creative work
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-base lg:text-lg text-muted-foreground leading-relaxed mt-6 max-w-md"
          >
            Weekly insights on productivity, creativity, and building your career as a creator. Join 12,847 subscribers.
          </motion.p>
        </div>

        {/* Right: 2 stacked cells */}
        <div className="hidden lg:flex flex-col gap-[2px]">
          {/* Top cell: Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="bg-card rounded-tr-2xl flex-1 p-8 lg:p-10 flex flex-col justify-end"
          >
            <p className="text-xl lg:text-2xl font-black text-foreground leading-snug mb-4">
              Trusted by 12,847 creators, marketers, and founders who read every Thursday.
            </p>
            <p className="text-sm text-muted-foreground">47% average open rate</p>
          </motion.div>

          {/* Bottom cell: Photo grid — clickable link to sample issue */}
          <Link to="/post/sample" className="block flex-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative flex-1 h-full overflow-hidden group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop&auto=format&q=80"
                alt="Creators collaborating"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <p className="text-xl lg:text-2xl font-black text-white leading-snug">
                  We help creators build their audience and ship consistently across all platforms.
                </p>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Row 2: Email signup — full width */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
        className="bg-card flex flex-col sm:flex-row items-center gap-3 p-4 lg:p-5"
      >
        <span className="text-sm font-semibold text-foreground whitespace-nowrap shrink-0">Subscribe to our newsletter</span>
        <input
          id="subscribe-input"
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(null); }}
          placeholder="Enter your email address"
          disabled={isSubmitting || isSuccess}
          className="flex-1 w-full px-5 py-3.5 text-sm rounded-full border border-black/10 bg-background/50 focus:border-foreground focus:ring-2 focus:ring-foreground/10 focus:outline-none transition-all placeholder:text-muted-foreground/50 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className="px-7 py-3.5 text-foreground text-sm font-semibold rounded-full hover:opacity-80 transition-all duration-200 active:scale-[0.97] disabled:opacity-70 whitespace-nowrap shrink-0 inline-flex items-center gap-2"
          style={{ background: "linear-gradient(135deg, #F5C6B0, #F4A5A0, #E8A0BF)" }}
        >
          {isSubmitting && (
            <span className="w-4 h-4 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
          )}
          {buttonLabel}
        </button>

        {error && (
          <span className="text-destructive text-sm font-medium">{error}</span>
        )}
        {isSuccess && (
          <span className="text-sm font-medium text-foreground/60">Welcome aboard! Check your email.</span>
        )}
      </motion.form>
    </motion.div>
  );
};

export default HeroSection;

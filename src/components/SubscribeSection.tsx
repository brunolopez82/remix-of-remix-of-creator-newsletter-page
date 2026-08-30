import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

interface SubscribeSectionProps {
  onSubscribe?: () => void;
}

const SubscribeSection = ({ onSubscribe }: SubscribeSectionProps) => {
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
    if (onSubscribe) setTimeout(onSubscribe, 2000);
  };

  return (
    <motion.div
      id="subscribe"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="bg-foreground  p-8 lg:p-14 text-center relative overflow-hidden"
    >
      <h2 className="text-3xl lg:text-5xl font-black text-background mb-4 tracking-tight relative z-10">
        Join 12,847+ Creators
      </h2>
      <p className="text-base lg:text-lg text-background/50 mb-10 relative z-10">
        No spam. Unsubscribe anytime. Delivered every Thursday at 9 AM.
      </p>

      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", damping: 15, stiffness: 300 }}
          className="bg-background text-foreground px-6 py-4 rounded-full text-center font-medium inline-block relative z-10"
        >
          Welcome aboard! Check your email to confirm.
        </motion.div>
      ) : (
        <div className="relative z-10">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(null); }}
              placeholder="Enter your email address"
              disabled={isSubmitting}
              className="flex-1 px-6 py-4 text-sm rounded-full border border-background/20 bg-background/10 text-background placeholder:text-background/30 focus:border-background/40 focus:ring-2 focus:ring-background/10 focus:outline-none transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 text-foreground text-sm font-bold rounded-full hover:opacity-90 transition-all duration-200 whitespace-nowrap active:scale-[0.97] disabled:opacity-70"
              style={{ background: "linear-gradient(135deg, #F5C6B0, #F4A5A0, #E8A0BF)" }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
                  Subscribing…
                </span>
              ) : "Let's go"}
            </button>
          </form>

          {error && (
            <motion.p
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              className="text-red-400 text-sm font-medium mb-4"
            >
              {error}
            </motion.p>
          )}
        </div>
      )}

      <p className="text-xs text-background/30 mt-4 relative z-10">
        We respect your privacy. Your email will never be shared or sold.
      </p>
    </motion.div>
  );
};

export default SubscribeSection;

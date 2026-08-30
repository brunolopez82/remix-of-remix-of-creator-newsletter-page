import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Link2, Heart } from "lucide-react";

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Post = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky nav */}
      <header className="h-[100px] flex items-center px-5 lg:px-10 sticky top-0 bg-background/80 backdrop-blur-xl z-50">
        <div className="flex items-center justify-between w-full">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#issues" className="hover:text-foreground transition-colors">Issues</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate max-w-[200px]">5 Mental Models</span>
          </nav>
          <span
            className="text-xl font-black text-foreground tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            The Weekly Creative
          </span>
          <div className="flex items-center gap-3">
            <ShareButton icon={<Twitter className="w-4 h-4" />} label="Tweet" />
            <ShareButton icon={<Linkedin className="w-4 h-4" />} label="Share" />
            <ShareButton icon={<Link2 className="w-4 h-4" />} label="Copy" />
          </div>
        </div>
      </header>

      <article className="max-w-[860px] mx-auto px-5 lg:px-10 pb-10">
        <div className="bg-black rounded-2xl overflow-hidden p-[2px]">
          <div className="flex flex-col gap-[2px]">
            {/* Hero image — full width */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInScale}
              className="relative overflow-hidden rounded-t-[14px]"
            >
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1800&h=900&fit=crop&auto=format&q=85"
                alt="Creative workspace"
                className="w-full h-[50vh] lg:h-[65vh] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-14">
                <span className="text-xs uppercase tracking-widest font-semibold text-white/60 mb-3 block">
                  Productivity &middot; 8 min read
                </span>
                <h1
                  className="text-4xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.95] tracking-tighter max-w-4xl"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  5 Mental Models That Changed How I Create Content
                </h1>
              </div>
            </motion.div>

            {/* Author bar */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 lg:px-14 lg:py-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-foreground/10 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80"
                    alt="Alex Rivers"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Alex Rivers</p>
                  <p className="text-xs text-muted-foreground">February 15, 2024</p>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <Heart className="w-4 h-4" /> 247 likes
              </button>
            </motion.div>

            {/* Article body */}
            <div className="bg-card px-6 lg:px-14 xl:px-14 py-12 lg:py-20">
              {/* Drop cap opening paragraph */}
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="text-lg lg:text-xl text-foreground/80 leading-relaxed mb-8 first-letter:text-7xl first-letter:font-black first-letter:text-foreground first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.8]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Every creator hits a ceiling. You're putting in the hours, publishing consistently, and yet growth
                feels glacial. After years of struggling with this exact problem, I discovered that the bottleneck
                wasn't effort—it was how I was thinking about the work itself. These five mental models completely
                transformed my creative output.
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="text-base lg:text-lg text-foreground/70 leading-relaxed mb-12"
              >
                Mental models are frameworks for thinking. They're not hacks or tricks—they're fundamental shifts
                in perspective that compound over time. The best part? Once you internalize them, they work
                automatically in the background of every creative decision you make.
              </motion.p>

              {/* Blockquote — large and prominent */}
              <motion.blockquote
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInScale}
                className="relative my-16 lg:my-20 py-10 px-8 lg:px-12 -mx-6 lg:-mx-14 xl:-mx-28 rounded-none"
                style={{ background: "linear-gradient(135deg, #F5C6B0, #F4A5A0, #E8A0BF)" }}
              >
                <span className="absolute top-4 left-8 lg:left-12 text-8xl font-black text-black/10 leading-none select-none">&ldquo;</span>
                <p
                  className="text-2xl lg:text-4xl font-black text-foreground leading-snug tracking-tight relative z-10 max-w-3xl pt-8"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  The quality of your output is determined by the quality of your thinking. Change how you think,
                  and everything downstream improves.
                </p>
                <cite className="block mt-6 text-sm font-semibold text-foreground/60 not-italic relative z-10">
                  — James Clear, Atomic Habits
                </cite>
              </motion.blockquote>

              {/* Section heading */}
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="text-3xl lg:text-4xl font-black text-foreground tracking-tight mb-6 mt-12"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                1. The Inversion Principle
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="text-base lg:text-lg text-foreground/70 leading-relaxed mb-6"
              >
                Instead of asking "how do I make great content?", ask "what makes content terrible?" Then
                systematically avoid those things. This negative-space approach reveals blind spots that
                positive thinking misses entirely. Most creators fail not because they lack talent, but
                because they unknowingly repeat patterns that actively work against them.
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="text-base lg:text-lg text-foreground/70 leading-relaxed mb-12"
              >
                Charlie Munger famously said, "All I want to know is where I'm going to die, so I'll never
                go there." Apply this to your creative work: identify the failure modes first, then build
                systems to prevent them.
              </motion.p>

              {/* 1-up: Full-width image */}
              <motion.figure
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInScale}
                className="my-16 lg:my-20 -mx-6 lg:-mx-14 xl:-mx-28"
              >
                <img
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&h=800&fit=crop&auto=format&q=85"
                  alt="Writing and planning"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="text-xs text-muted-foreground mt-4 px-6 lg:px-14 xl:px-14">
                  The inversion principle applied: a workspace designed to eliminate distractions rather than optimize for productivity.
                </figcaption>
              </motion.figure>

              {/* Section heading */}
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="text-3xl lg:text-4xl font-black text-foreground tracking-tight mb-6 mt-12"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                2. The Minimum Effective Dose
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="text-base lg:text-lg text-foreground/70 leading-relaxed mb-6"
              >
                Borrowed from pharmacology: the smallest dose that produces a desired outcome. In content
                creation, this means finding the leanest version of your idea that still delivers value.
                Most creators over-produce. They write 3,000 words when 800 would hit harder. They record
                45-minute videos when the insight lands in 8 minutes.
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="text-base lg:text-lg text-foreground/70 leading-relaxed mb-12"
              >
                This isn't about being lazy—it's about respecting your audience's time and your own energy.
                When you strip away the filler, what remains is pure signal. And signal is what people share,
                bookmark, and remember.
              </motion.p>

              {/* 2-up: Side by side images */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInScale}
                className="grid grid-cols-1 md:grid-cols-2 gap-[2px] my-16 lg:my-20 -mx-6 lg:-mx-14 xl:-mx-28 bg-black"
              >
                <img
                  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=600&fit=crop&auto=format&q=85"
                  alt="Focused writing"
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&h=600&fit=crop&auto=format&q=85"
                  alt="Creative tools"
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </motion.div>

              {/* Section heading */}
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="text-3xl lg:text-4xl font-black text-foreground tracking-tight mb-6 mt-12"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                3. The Barbell Strategy
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="text-base lg:text-lg text-foreground/70 leading-relaxed mb-12"
              >
                Nassim Taleb's concept applied to content: spend 80% of your time on safe, proven formats
                that reliably deliver value to your audience. Spend the other 20% on wild, experimental
                work that could completely fail—or become your breakout piece. The middle ground (slightly
                different, somewhat interesting) is the danger zone. It's not safe enough to be reliable
                and not bold enough to be remarkable.
              </motion.p>

              {/* Blockquote — dark variant */}
              <motion.blockquote
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInScale}
                className="relative my-16 lg:my-20 py-10 px-8 lg:px-12 -mx-6 lg:-mx-14 xl:-mx-28 bg-foreground text-background"
              >
                <p
                  className="text-2xl lg:text-4xl font-black leading-snug tracking-tight max-w-3xl"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Play it safe most of the time. Go absolutely wild some of the time. Never be mediocre.
                </p>
                <cite className="block mt-6 text-sm font-semibold text-background/50 not-italic">
                  — Adapted from Nassim Taleb
                </cite>
              </motion.blockquote>

              {/* Section heading */}
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="text-3xl lg:text-4xl font-black text-foreground tracking-tight mb-6 mt-12"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                4. Second-Order Thinking
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="text-base lg:text-lg text-foreground/70 leading-relaxed mb-6"
              >
                First-order thinking: "If I post more frequently, I'll grow faster." Second-order thinking:
                "If I post more frequently, quality may drop, which reduces shareability, which actually
                slows growth." Every decision has consequences beyond the obvious. Train yourself to ask
                "and then what?" at least twice before committing to a strategy.
              </motion.p>

              {/* 1-up: Full-width atmospheric image */}
              <motion.figure
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInScale}
                className="my-16 lg:my-20 -mx-6 lg:-mx-14 xl:-mx-28"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&h=700&fit=crop&auto=format&q=85"
                    alt="Long-term perspective"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                  <div className="absolute bottom-8 left-8 lg:left-14">
                    <p
                      className="text-white text-2xl lg:text-3xl font-black tracking-tight max-w-md"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Think in years, not weeks.
                    </p>
                  </div>
                </div>
              </motion.figure>

              {/* Section heading */}
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="text-3xl lg:text-4xl font-black text-foreground tracking-tight mb-6 mt-12"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                5. The Map Is Not the Territory
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="text-base lg:text-lg text-foreground/70 leading-relaxed mb-6"
              >
                Analytics, follower counts, and engagement metrics are maps. They represent reality but
                they are not reality. The territory is the actual impact your work has on real people's
                lives. I've seen creators with 500 subscribers change careers and creators with 500,000
                followers who can't sell a $10 product.
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="text-base lg:text-lg text-foreground/70 leading-relaxed mb-12"
              >
                Use metrics as directional indicators, not scorecards. The most important feedback loop
                is the DM from a reader who says your words changed how they approach their work. That's
                the territory. Everything else is cartography.
              </motion.p>

              {/* 2-up: Contrasting images */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInScale}
                className="grid grid-cols-1 md:grid-cols-2 gap-[2px] my-16 lg:my-20 -mx-6 lg:-mx-14 xl:-mx-28 bg-black"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&h=600&fit=crop&auto=format&q=85"
                    alt="Analog tools"
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                      The Map
                    </span>
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format&q=85"
                    alt="Real connection"
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                      The Territory
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Closing gradient blockquote */}
              <motion.blockquote
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInScale}
                className="relative my-16 lg:my-20 py-10 px-8 lg:px-12 -mx-6 lg:-mx-14 xl:-mx-28 rounded-none"
                style={{ background: "linear-gradient(160deg, #E8E0F8, #D0C8F5, #C0B8F0)" }}
              >
                <p
                  className="text-2xl lg:text-4xl font-black text-foreground leading-snug tracking-tight max-w-3xl"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  You don't need more tactics. You need better thinking. Start with one of these models
                  this week and watch how it reshapes everything.
                </p>
              </motion.blockquote>

              {/* Closing paragraph */}
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="text-base lg:text-lg text-foreground/70 leading-relaxed mb-4"
              >
                These mental models aren't theories—they're tools I use every single week. Start with whichever
                one resonates most and apply it deliberately for 30 days. You'll be surprised how quickly
                your creative work transforms when the underlying thinking changes.
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                className="text-base lg:text-lg text-foreground/70 leading-relaxed"
              >
                Until next Thursday,<br />
                <strong className="text-foreground">Alex</strong>
              </motion.p>
            </div>

            {/* Share & subscribe footer */}
            <div className="bg-card px-6 lg:px-14 xl:px-14 py-10 flex flex-col gap-10">
              {/* Share row */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-10 border-b border-black/10"
              >
                <p className="text-sm text-muted-foreground">If this was useful, share it with a fellow creator.</p>
                <div className="flex items-center gap-3">
                  <ShareButton icon={<Twitter className="w-4 h-4" />} label="Tweet" />
                  <ShareButton icon={<Linkedin className="w-4 h-4" />} label="Share" />
                  <ShareButton icon={<Link2 className="w-4 h-4" />} label="Copy link" />
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-foreground text-background hover:opacity-90 transition-all active:scale-[0.97]">
                    <Heart className="w-4 h-4" /> Like
                  </button>
                </div>
              </motion.div>

              {/* Author card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInScale}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format&q=80"
                  alt="Alex Rivers"
                  className="w-20 h-20 rounded-2xl object-cover grayscale flex-shrink-0"
                />
                <div>
                  <p className="text-lg font-black text-foreground mb-1">Alex Rivers</p>
                  <p className="text-sm text-muted-foreground mb-3">Writer & Content Strategist</p>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-4 max-w-lg">
                    Helping creators build sustainable businesses through strategic content. 250k+ audience
                    across platforms. Writing The Weekly Creative every Thursday.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
                    <a href="#" className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="#" className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">Website</a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Subscribe CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInScale}
              className="bg-foreground p-8 lg:p-14 text-center rounded-b-[14px]"
            >
              <h3
                className="text-2xl lg:text-4xl font-black text-background mb-3 tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Enjoyed this? Get it weekly.
              </h3>
              <p className="text-sm text-background/50 mb-8">
                Join 12,847 creators getting actionable insights every Thursday.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-3.5 text-sm rounded-full border border-background/20 bg-background/10 text-background placeholder:text-background/30 focus:border-background/40 focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 text-foreground text-sm font-bold rounded-full hover:opacity-90 transition-all active:scale-[0.97] whitespace-nowrap"
                  style={{ background: "linear-gradient(135deg, #F5C6B0, #F4A5A0, #E8A0BF)" }}
                >
                  Subscribe Free
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </article>
    </div>
  );
};

function ShareButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground bg-muted hover:bg-muted/80 rounded-full transition-all active:scale-[0.95]">
      {icon} {label}
    </button>
  );
}

export default Post;

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-[100px] flex items-center px-5 lg:px-10"
    >
      <div className="flex items-center justify-between w-full">
        <span className="text-xl font-black text-foreground tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>The Weekly Creative</span>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#issues" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">Issues</a>
          <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">Benefits</a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">About</a>
          <a
            href="#subscribe"
            className="px-5 py-2 bg-foreground text-background font-semibold rounded-full hover:opacity-90 text-sm transition-all duration-200 active:scale-[0.97]"
          >
            Subscribe
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;

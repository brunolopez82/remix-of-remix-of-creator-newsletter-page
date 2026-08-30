const Footer = () => (
  <div className="bg-card  rounded-b-2xl p-8 lg:p-12">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 pb-8 border-b border-border">
      <div className="text-center md:text-left">
        <div className="text-xl font-black text-foreground mb-1 tracking-tight">The Weekly Creative</div>
        <div className="text-sm text-muted-foreground">Weekly insights for ambitious creators</div>
      </div>
      <div className="flex gap-3">
        {["Twitter", "LinkedIn", "Instagram"].map((s) => (
          <a
            key={s}
            href="#"
            aria-label={s}
            className="w-9 h-9 bg-muted rounded-xl flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-200 text-muted-foreground text-xs font-medium"
          >
            {s[0]}
          </a>
        ))}
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
      <span>&copy; 2024 The Weekly Creative. All rights reserved.</span>
      <div className="flex gap-6">
        <a href="#" className="hover:text-foreground transition-colors duration-200">Privacy Policy</a>
        <a href="#" className="hover:text-foreground transition-colors duration-200">Terms of Service</a>
      </div>
    </div>
  </div>
);

export default Footer;

const Footer = () => (
  <footer className="bg-primary">
    <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-16 md:py-20">
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
        <div>
          <span className="text-primary-foreground text-xl font-bold tracking-tight">Astute Digital</span>
        </div>
        <div className="text-primary-foreground/70 text-sm leading-relaxed">
          <p>Paris, France</p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex gap-6 text-primary-foreground/50 text-xs">
          <span>Privacy Policy</span>
          <span>Accessibility Statement</span>
          <span>Terms & Conditions</span>
        </div>
        <span className="text-primary-foreground/50 text-xs">© Astute Digital</span>
      </div>
    </div>
  </footer>
);

export default Footer;

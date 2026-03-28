import { motion } from "framer-motion";

const navItems = [
  { label: "ABOUT US", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

const Header = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-primary h-[76px] flex items-center"
    >
      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-16 flex items-center justify-between">
        <span className="text-primary-foreground text-xl font-bold tracking-tight">
          Astute Digital
        </span>
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-semibold tracking-wide transition-opacity duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

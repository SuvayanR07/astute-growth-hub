import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen hero-gradient-bg overflow-hidden pt-[76px]">
      {/* Right-side color bands */}
      <div className="absolute right-0 top-0 bottom-0 w-[35%] md:w-[32%] flex">
        <div className="flex-1 bg-[hsl(55,90%,58%)] band-pulse opacity-70" />
        <div className="flex-1 bg-[hsl(75,65%,55%)] band-pulse opacity-70" style={{ animationDelay: "1.5s" }} />
        <div className="flex-1 bg-[hsl(145,50%,60%)] band-pulse opacity-70" style={{ animationDelay: "3s" }} />
        <div className="flex-1 bg-[hsl(175,65%,55%)] band-pulse opacity-70" style={{ animationDelay: "4.5s" }} />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 flex flex-col min-h-[calc(100vh-76px)]">
        {/* Top: Large headline */}
        <div className="pt-12 md:pt-20 lg:pt-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-foreground text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[72px] 2xl:text-[84px] font-bold leading-[1.05] tracking-tight max-w-[75%] lg:max-w-[65%]"
          >
            Accelerate your growth with data-driven digital marketing strategies
          </motion.h1>
        </div>

        {/* Bottom area: paragraph + CTA left, right-side content */}
        <div className="mt-auto pb-16 md:pb-20 flex flex-col lg:flex-row items-end justify-between gap-12">
          {/* Left bottom */}
          <div className="lg:max-w-[45%]">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-foreground/70 text-base md:text-lg lg:text-[18px] leading-[1.55] max-w-[480px]"
            >
              Our team of growth experts helps brands scale through PPC, paid social, and performance-focused marketing strategies that drive measurable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center bg-primary-foreground rounded-full pl-1.5 pr-7 py-1.5 hover:bg-primary-foreground/90 transition-colors duration-300"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary mr-3">
                  <ArrowRight className="w-4 h-4 text-primary-foreground" />
                </span>
                <span className="text-foreground font-semibold text-sm tracking-wide">CONTACT US</span>
              </button>
            </motion.div>
          </div>

          {/* Right bottom content — sits within the band area */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:w-[320px] xl:w-[360px]"
          >
            <h3 className="text-foreground text-xl md:text-2xl font-bold mb-5 leading-[1.2]">
              We help you reach the right audience
            </h3>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={heroVisual}
                alt="Abstract digital marketing visual"
                width={640}
                height={800}
                className="w-full h-auto object-cover max-h-[280px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

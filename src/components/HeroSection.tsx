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
      <div className="absolute right-0 top-0 bottom-0 w-[30%] md:w-[28%] flex">
        <div className="flex-1 bg-[hsl(75,70%,60%)] band-pulse opacity-55" />
        <div className="flex-1 bg-[hsl(85,65%,55%)] band-pulse opacity-55" style={{ animationDelay: "1.5s" }} />
        <div className="flex-1 bg-[hsl(155,50%,65%)] band-pulse opacity-55" style={{ animationDelay: "3s" }} />
        <div className="flex-1 bg-[hsl(185,60%,60%)] band-pulse opacity-55" style={{ animationDelay: "4.5s" }} />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 flex flex-col lg:flex-row min-h-[calc(100vh-76px)]">
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center py-20 lg:py-0 lg:pr-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-foreground text-[36px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-bold leading-[1.08] tracking-tight max-w-4xl"
          >
            Accelerate your growth with data-driven digital marketing strategies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 text-foreground/70 text-base md:text-lg lg:text-[20px] leading-[1.5] max-w-[560px]"
          >
            Our team of growth experts helps brands scale through PPC, paid social, and performance-focused marketing strategies that drive measurable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10"
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

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:w-[340px] xl:w-[380px] flex flex-col justify-center pb-20 lg:pb-0"
        >
          <h3 className="text-foreground text-2xl md:text-3xl font-bold mb-6">
            We help you reach the right audience
          </h3>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={heroVisual}
              alt="Abstract digital marketing visual"
              width={640}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutVisual from "@/assets/about-visual.png";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-surface-gray">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 pt-28 md:pt-40 pb-16 md:pb-20">
        <div ref={ref} className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-48 shrink-0"
          >
            <span className="text-foreground font-bold text-base tracking-wide">About Us</span>
            <img
              src={aboutVisual}
              alt="Mobile analytics dashboard"
              loading="lazy"
              width={560}
              height={560}
              className="w-full h-auto rounded-lg mt-8 max-w-[200px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-1"
          >
            <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight max-w-3xl">
              We are a team of growth experts helping businesses scale with performance-driven digital marketing.
            </h2>
            <p className="mt-8 text-foreground/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              We believe in strategy, clarity, and measurable outcomes. Our approach combines paid media expertise, growth thinking, and continuous optimization to help brands attract the right audience and turn attention into revenue.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

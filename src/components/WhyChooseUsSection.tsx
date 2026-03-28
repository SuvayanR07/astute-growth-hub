import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const statements = [
  "Growth strategies tailored to your business goals",
  "Data-driven campaigns designed for measurable impact and long-term scale",
  "Hands-on expertise across PPC, paid social, and performance marketing",
  "An agile, focused partner committed to smarter growth",
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-surface-dark">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-28 md:py-40">
        <div ref={ref} className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-48 shrink-0"
          >
            <span className="text-primary-foreground font-bold text-base tracking-wide">Why Choose Us</span>
          </motion.div>

          <div className="flex-1">
            {statements.map((statement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.2 }}
              >
                {i > 0 && <div className="w-full h-px bg-primary-foreground/15 my-8 md:my-10" />}
                <p className="text-primary-foreground text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold leading-[1.2] tracking-tight max-w-3xl">
                  {statement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

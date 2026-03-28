import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: ["Growth Strategy", "for Modern Brands"],
    copy: "Build a clear path to scalable revenue with full-funnel growth planning, channel strategy, and performance-led execution.",
  },
  {
    title: ["PPC Campaigns", "that Convert"],
    copy: "Capture high-intent demand with paid search campaigns built to generate quality leads, efficient acquisition, and stronger returns.",
  },
  {
    title: ["SEO for Long-Term", "Growth"],
    copy: "Strengthen your digital foundation with SEO strategies that support discoverability, site visibility, and sustainable growth over time.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -4 }}
      className="rounded-lg p-8 md:p-10 flex flex-col justify-between min-h-[420px] md:min-h-[480px] transition-shadow duration-300 hover:shadow-xl"
      style={{
        background: "linear-gradient(160deg, hsl(55, 85%, 65%) 0%, hsl(100, 50%, 60%) 100%)",
      }}
    >
      <div>
        <h3 className="text-foreground text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.15] tracking-tight">
          {service.title.map((line, i) => (
            <span key={i}>
              {line}
              {i < service.title.length - 1 && <br />}
            </span>
          ))}
        </h3>
      </div>
      <div>
        <div className="w-full h-px bg-foreground/20 mb-6" />
        <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
          {service.copy}
        </p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const labelRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="bg-surface-gray">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 pb-28 md:pb-40">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <motion.div
            ref={labelRef}
            initial={{ opacity: 0 }}
            animate={labelInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-48 shrink-0"
          >
            <span className="text-foreground font-bold text-base tracking-wide">Our Services</span>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

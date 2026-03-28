import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { toast } from "sonner";

const W3FORMS_ACCESS_KEY = "d2f3dcc9-066e-4708-8ef2-6e5dd73d0369";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", W3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-surface-gray">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-28 md:py-40">
        <div ref={ref} className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-48 shrink-0"
          >
            <span className="text-foreground font-bold text-base tracking-wide">Get In Touch</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-1 max-w-3xl"
          >
            <h2 className="text-foreground text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight mb-14">
              Let us be your trusted partner in navigating growth, PPC, and performance marketing
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-foreground text-xl font-medium"
              >
                Thank you for reaching out. We'll be in touch soon.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
                  <div>
                    <label className="text-foreground font-medium text-lg mb-2 block">First name *</label>
                    <input type="text" required className="underline-input w-full" placeholder="" name="first_name" />
                  </div>
                  <div>
                    <label className="text-foreground font-medium text-lg mb-2 block">Last name *</label>
                    <input type="text" required className="underline-input w-full" placeholder="" name="last_name" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-foreground font-medium text-lg mb-2 block">Email *</label>
                    <input type="email" required className="underline-input w-full" placeholder="" name="email" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-foreground font-medium text-lg mb-2 block">Message</label>
                    <textarea className="underline-input w-full resize-none" rows={3} name="message" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-primary text-primary-foreground rounded-full px-12 py-4 text-base font-semibold tracking-wide hover:bg-foreground/85 transition-colors duration-300"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

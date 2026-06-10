import { motion } from "framer-motion";

/* Editorial section header: oversized index number + title with reveal animation. */
export default function Section({ id, index, title, children, dark = false, className = "" }) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div
          className={`mb-14 flex items-end justify-between border-b-2 pb-6 sm:mb-20 ${
            dark ? "border-white" : "border-ink"
          }`}
        >
          {/* Observe the (always-visible) wrapper — the clipped h2 itself never intersects */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="overflow-hidden"
          >
            <motion.h2
              variants={{
                hidden: { y: "110%" },
                show: { y: 0, transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] } },
              }}
              className={`text-4xl font-bold uppercase tracking-tight sm:text-6xl lg:text-7xl ${
                dark ? "text-white" : "text-ink"
              }`}
            >
              {title}
            </motion.h2>
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`font-mono text-sm sm:text-base ${dark ? "text-white/40" : "text-slate-400"}`}
          >
            ({index})
          </motion.span>
        </div>
        {children}
      </div>
    </section>
  );
}

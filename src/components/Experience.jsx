import { motion } from "framer-motion";
import Section from "./Section";
import { EXPERIENCE } from "../data";

/* Full-width ledger rows: number / org / role / period.
   Hovering a row fills it with ink and reveals the description. */
export default function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <div className="border-t-2 border-ink">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={exp.org + exp.role}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative overflow-hidden border-b-2 border-ink"
          >
            {/* Ink fill that slides up on hover */}
            <div className="absolute inset-0 translate-y-full bg-ink transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0" />

            <div className="relative grid gap-3 px-2 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-10">
              <span className="font-mono text-sm text-slate-400 transition-colors duration-300 group-hover:text-accent sm:col-span-1">
                0{i + 1}
              </span>

              <div className="sm:col-span-7">
                <h3 className="text-2xl font-bold text-ink transition-colors duration-300 group-hover:text-white sm:text-4xl">
                  {exp.org}
                </h3>
                <p className="mt-1 text-base font-medium text-accent transition-colors duration-300 group-hover:text-indigo-300 sm:text-lg">
                  {exp.role}
                </p>
                <p className="mt-4 leading-relaxed text-slate-600 transition-all duration-500 sm:max-h-0 sm:overflow-hidden sm:text-slate-300 sm:opacity-0 sm:group-hover:max-h-60 sm:group-hover:opacity-100">
                  {exp.desc}
                </p>
              </div>

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 sm:col-span-4 sm:flex-col sm:items-end">
                <span className="font-mono text-sm text-slate-500 transition-colors duration-300 group-hover:text-white">
                  {exp.period}
                </span>
                <div className="flex flex-wrap gap-2 sm:justify-end">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-ink/20 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-slate-500 transition-colors duration-300 group-hover:border-white/30 group-hover:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 hidden font-mono text-xs text-slate-400 sm:block">
        {"// hover a row for details"}
      </p>
    </Section>
  );
}

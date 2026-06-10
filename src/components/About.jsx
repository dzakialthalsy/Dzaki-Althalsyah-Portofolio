import { motion } from "framer-motion";
import Section from "./Section";
import { PROFILE, STATS } from "../data";

/* Key phrases get an animated highlight sweep behind them */
function Mark({ children }) {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      whileInView={{ backgroundSize: "100% 100%" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="bg-gradient-to-r from-indigo-200 to-indigo-100 bg-no-repeat px-0.5 font-semibold text-ink"
      style={{ backgroundPosition: "0 88%", backgroundSize: "0% 100%" }}
    >
      {children}
    </motion.span>
  );
}

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-16 lg:grid-cols-12">
        {/* Editorial body text — large, magazine-style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <p className="text-2xl leading-snug text-slate-700 sm:text-3xl sm:leading-snug">
            I'm an <Mark>Information Systems student</Mark> at Universitas
            Brawijaya with a deep focus on <Mark>Data Analysis</Mark>,{" "}
            <Mark>Machine Learning</Mark>, and systems development.
          </p>
          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            I've gained hands-on experience in information systems analysis and
            software development through a variety of practical projects — from
            churn-prediction models to a fully containerized business-intelligence
            pipeline. Beyond data, I'm active in campus tech communities: exploring
            open-source Linux systems and cyber security with POROS FILKOM UB, and
            sharpening my craft through competitions and real-world builds.
          </p>
          <p className="mt-5 font-mono text-sm text-slate-500">
            {"// currently exploring: "}
            {PROFILE.interests.join(" · ").toLowerCase()}
          </p>
        </motion.div>

        {/* Stat board — big numbers, ledger style */}
        <div className="lg:col-span-5">
          <div className="divide-y-2 divide-ink border-y-2 border-ink">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group flex items-baseline justify-between gap-6 py-6 transition-colors hover:bg-ink"
              >
                <span className="pl-2 font-mono text-4xl font-semibold text-accent transition-colors sm:text-5xl">
                  {stat.value}
                </span>
                <span className="pr-2 text-right text-sm font-medium text-slate-600 transition-colors group-hover:text-white sm:text-base">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

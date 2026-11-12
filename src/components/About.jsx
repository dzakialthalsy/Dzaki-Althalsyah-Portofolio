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
            I'm a 5th-semester <Mark>Information Systems student</Mark> at
            Universitas Brawijaya, currently an <Mark>AI Engineer Intern</Mark> at
            PT Pertamina Patra Niaga, building <Mark>backends and AI</Mark> that
            replace manual work.
          </p>
          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            At Pertamina I own the backend and AI integration of VASKO, a contract
            validation platform that combines OCR and LLMs to check documents
            hundreds of pages long. Outside work I ship end-to-end projects, from a
            real-time SMS scam detector and an F1 pit-stop predictor to a
            multi-agent app builder. On campus I'm a Database Administration lab
            assistant at the Information Systems Laboratory and Vice Chair of Human
            Resources at POROS FILKOM UB, where I also work on cyber security.
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

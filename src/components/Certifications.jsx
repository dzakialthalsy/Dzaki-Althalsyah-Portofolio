import { motion } from "framer-motion";
import { BadgeCheck, Trophy } from "lucide-react";
import Section from "./Section";
import { CERTIFICATIONS } from "../data";

const kindIcon = {
  "License & Certification": BadgeCheck,
  "Honor & Award": Trophy,
};

/* Editorial credential ledger: year column, oversized title, generous whitespace. */
export default function Certifications() {
  return (
    <Section id="recognition" index="05" title="Recognition">
      <div className="border-t-2 border-ink">
        {CERTIFICATIONS.map((cert, i) => {
          const Icon = kindIcon[cert.kind] ?? BadgeCheck;
          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group grid gap-4 border-b-2 border-ink px-2 py-10 transition-colors duration-300 hover:bg-slate-50 sm:grid-cols-12 sm:gap-8 sm:py-14"
            >
              <div className="sm:col-span-3">
                <p className="font-mono text-2xl font-semibold text-accent sm:text-3xl">
                  {cert.year}
                </p>
                <p className="mt-2 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-slate-400">
                  <Icon size={14} className="text-ink" />
                  {cert.kind}
                </p>
                {cert.extra && (
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-slate-400">
                    {cert.extra}
                  </p>
                )}
              </div>

              <div className="sm:col-span-9">
                <h3 className="max-w-3xl text-2xl font-bold leading-tight text-ink transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                  {cert.title}
                </h3>
                <p className="mt-2 text-base font-semibold text-accent">{cert.issuer}</p>
                <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">{cert.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

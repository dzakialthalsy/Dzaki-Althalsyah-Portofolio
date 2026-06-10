import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Section from "./Section";
import { PROJECTS } from "../data";
import Magnetic from "./Magnetic";

/* Awwwards-style index: huge clickable rows that expand into full case details. */
export default function Projects() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="projects" index="03" title="Projects" dark className="bg-ink text-white">
      <div className="border-t border-white/20">
        {PROJECTS.map((p, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-b border-white/20"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between gap-4 py-7 text-left sm:py-8"
              >
                <div className="flex min-w-0 items-baseline gap-4 sm:gap-8">
                  <span
                    className={`shrink-0 font-mono text-sm transition-colors ${isOpen ? "text-accent" : "text-white/40"}`}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className={`text-2xl font-bold leading-tight transition-all duration-300 sm:text-4xl lg:text-5xl ${
                      isOpen ? "text-accent" : "text-white group-hover:translate-x-3 group-hover:text-indigo-300"
                    }`}
                  >
                    {p.title}
                  </h3>
                </div>
                <div className="flex shrink-0 items-center gap-4 sm:gap-8">
                  <span className="hidden font-mono text-xs uppercase tracking-widest text-white/50 md:block">
                    {p.category} — {p.year}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors sm:h-12 sm:w-12 ${
                      isOpen ? "border-accent bg-accent text-white" : "border-white/30 text-white group-hover:border-white"
                    }`}
                  >
                    <Plus size={18} />
                  </motion.span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-8 pb-10 sm:grid-cols-12 sm:pl-14">
                      <div className="sm:col-span-8">
                        <p className="font-mono text-xs uppercase tracking-widest text-white/50 md:hidden">
                          {p.category} — {p.year}
                        </p>
                        <p className="mt-3 max-w-2xl leading-relaxed text-white/80 md:mt-0">
                          {p.desc}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {p.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-white/25 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-white/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-start sm:col-span-4 sm:justify-end">
                        <Magnetic>
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group/link flex items-center gap-2 border-2 border-white bg-white px-6 py-3 font-mono text-sm font-semibold text-ink transition hover:bg-accent hover:border-accent hover:text-white"
                          >
                            View repository
                            <ArrowUpRight size={16} className="transition group-hover/link:rotate-45" />
                          </a>
                        </Magnetic>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 flex justify-center">
        <Magnetic>
          <a
            href="https://github.com/dzakialthalsy?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 border-2 border-white px-7 py-3.5 font-mono text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
          >
            Full archive on GitHub
            <ArrowUpRight size={16} className="transition group-hover:rotate-45" />
          </a>
        </Magnetic>
      </div>
    </Section>
  );
}

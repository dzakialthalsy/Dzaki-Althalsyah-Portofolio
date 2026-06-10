import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import { SKILLS } from "../data";

const marqueeItems = SKILLS.flatMap((g) => g.items.slice(0, 4));

/* Split-panel explorer: category list on the left, items typeset large on the right. */
export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <Section id="skills" index="04" title="Skills">
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Category selector */}
        <div className="lg:col-span-5">
          <ul className="border-t-2 border-ink">
            {SKILLS.map((group, i) => (
              <li key={group.group} className="border-b-2 border-ink">
                <button
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={active === i}
                  className={`flex w-full items-center justify-between px-2 py-5 text-left transition-colors duration-300 ${
                    active === i ? "bg-ink" : "bg-transparent hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`text-xl font-bold sm:text-2xl ${active === i ? "text-white" : "text-ink"}`}
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    {group.group}
                  </span>
                  <span className={`font-mono text-sm ${active === i ? "text-accent" : "text-slate-400"}`}>
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Items for the active category */}
        <div className="min-h-[320px] lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
                {"// "}
                {SKILLS[active].group}
              </p>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-5">
                {SKILLS[active].items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.045, duration: 0.35 }}
                    whileHover={{ x: 6, color: "#4f46e5" }}
                    className="flex items-baseline gap-2 text-2xl font-semibold text-ink sm:text-3xl"
                    style={{ fontFamily: "Space Grotesk" }}
                  >
                    <span className="font-mono text-xs text-slate-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Tool ticker */}
      <div className="relative mt-20 overflow-hidden border-y-2 border-ink py-4 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee reverse">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap pr-10 font-mono text-sm uppercase tracking-widest text-slate-500"
            >
              {item} <span className="pl-10 text-accent">/</span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

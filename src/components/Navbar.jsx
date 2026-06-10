import { useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data";
import Magnetic from "./Magnetic";

const LINKS = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Recognition", "#recognition"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-white/85 backdrop-blur-md"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="font-mono text-sm font-semibold tracking-tight text-ink">
            DZ<span className="text-accent">//</span>ALTH
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {LINKS.map(([label, href], i) => (
              <a
                key={href}
                href={href}
                className="link-sweep font-mono text-[13px] text-slate-500 transition hover:text-ink"
              >
                <span className="text-accent">0{i + 1}.</span> {label}
              </a>
            ))}
            <Magnetic>
              <a
                href={PROFILE.cv}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1 border-2 border-ink bg-ink px-4 py-1.5 font-mono text-[13px] font-semibold text-white transition hover:bg-white hover:text-ink"
              >
                Resume
                <ArrowUpRight size={14} className="transition group-hover:rotate-45" />
              </a>
            </Magnetic>
          </div>

          <button
            className="font-mono text-sm font-semibold text-ink md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "[ CLOSE ]" : "[ MENU ]"}
          </button>
        </nav>

        {/* Scroll progress bar */}
        <motion.div
          className="h-[3px] origin-left bg-accent"
          style={{ scaleX: progress }}
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed inset-x-0 top-[61px] z-40 border-b-2 border-ink bg-white px-5 pb-6 pt-2 md:hidden"
          >
            {LINKS.map(([label, href], i) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 border-b border-ink/10 py-3.5 text-xl font-semibold text-ink"
                style={{ fontFamily: "Space Grotesk" }}
              >
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                {label}
              </a>
            ))}
            <a
              href={PROFILE.cv}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 border-2 border-ink bg-ink px-5 py-2.5 font-mono text-sm font-semibold text-white"
            >
              Resume <ArrowUpRight size={15} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight } from "lucide-react";
import { PROFILE } from "../data";
import Magnetic from "./Magnetic";

function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const delay = deleting ? 35 : text === word ? 1800 : 70;
    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className="font-mono text-accent">
      {text}
      <span className="caret" />
    </span>
  );
}

/* Staggered slide-up reveal, line by line */
const lineReveal = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: 0,
    transition: { duration: 0.85, delay: 0.15 + i * 0.12, ease: [0.65, 0, 0.35, 1] },
  }),
};

function SpinBadge() {
  const label = "OPEN TO WORK • DATA SCIENCE • MACHINE LEARNING • ";
  return (
    <div className="relative h-36 w-36 sm:h-44 sm:w-44">
      <svg viewBox="0 0 100 100" className="spin-slow h-full w-full">
        <defs>
          <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-ink font-mono" style={{ fontSize: "8.2px", letterSpacing: "1.6px" }}>
          <textPath href="#circlePath">{label}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-3 w-3">
          <span className="absolute h-3 w-3 animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative h-3 w-3 rounded-full bg-emerald-500" />
        </span>
      </div>
    </div>
  );
}

const socials = [
  { icon: Github, href: PROFILE.github, label: "GitHub" },
  { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
];

export default function Hero() {
  return (
    <section id="home" className="dot-grid relative flex min-h-screen flex-col justify-between overflow-hidden">
      <div className="mx-auto w-full max-w-7xl flex-1 px-5 pt-32 sm:px-8 sm:pt-40">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-mono text-xs text-slate-500 sm:text-sm"
        >
          {"// PORTFOLIO — "}
          {PROFILE.location.toUpperCase()}
        </motion.p>

        {/* Oversized stacked name */}
        <h1 className="mt-6 select-none text-[15vw] font-bold uppercase leading-[0.88] tracking-tight text-ink sm:text-[11vw] lg:text-[9.5rem]">
          <span className="block overflow-hidden">
            <motion.span variants={lineReveal} initial="hidden" animate="show" custom={0} className="block">
              Dzaki
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              variants={lineReveal}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-outline block"
            >
              Althalsyah
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="max-w-xl"
          >
            <p className="text-base text-slate-600 sm:text-lg">
              <span className="font-mono text-slate-400">$ whoami →</span>{" "}
              <Typewriter words={PROFILE.roles} />
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-700 sm:text-xl">
              {PROFILE.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href="#contact"
                  className="group flex items-center gap-2 border-2 border-ink bg-ink px-7 py-3.5 font-mono text-sm font-semibold text-white transition hover:bg-accent hover:border-accent"
                >
                  Get in touch
                  <ArrowUpRight size={16} className="transition group-hover:rotate-45" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={PROFILE.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border-2 border-ink bg-white px-7 py-3.5 font-mono text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#4f46e5]"
                >
                  View CV
                </a>
              </Magnetic>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <Magnetic key={label} strength={0.5}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center border-2 border-ink bg-white text-ink transition hover:bg-ink hover:text-white"
                    >
                      <Icon size={19} />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="hidden lg:block"
          >
            <SpinBadge />
          </motion.div>
        </div>
      </div>

      {/* Interest marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="mt-16 overflow-hidden border-y-2 border-ink bg-ink py-3.5"
      >
        <div className="marquee">
          {[...PROFILE.interests, ...PROFILE.interests, ...PROFILE.interests, ...PROFILE.interests].map(
            (interest, i) => (
              <span
                key={i}
                className="flex items-center gap-6 whitespace-nowrap pr-6 font-mono text-sm font-medium uppercase tracking-widest text-white"
              >
                {interest} <span className="text-accent">✦</span>
              </span>
            )
          )}
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-20 right-6 hidden text-ink sm:bottom-24 sm:right-10 lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ArrowDown size={26} />
      </motion.a>
    </section>
  );
}

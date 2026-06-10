import { PROFILE } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="overflow-hidden bg-ink pt-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-white/50">
          © {year} {PROFILE.name} — Malang, ID
        </p>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-widest">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-white/50 transition hover:text-accent">
            GitHub
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-white/50 transition hover:text-accent">
            LinkedIn
          </a>
          <a href={`mailto:${PROFILE.email}`} className="text-white/50 transition hover:text-accent">
            Email
          </a>
        </div>
      </div>

      {/* Giant watermark name bleeding off the bottom edge */}
      <p
        aria-hidden
        className="mt-10 -mb-4 select-none whitespace-nowrap text-center text-[13.5vw] font-bold uppercase leading-none tracking-tight text-white/10 sm:-mb-6"
        style={{ fontFamily: "Space Grotesk" }}
      >
        Dzaki Althalsyah
      </p>
    </footer>
  );
}

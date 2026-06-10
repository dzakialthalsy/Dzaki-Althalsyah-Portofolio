import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Section from "./Section";
import { PROFILE } from "../data";
import Magnetic from "./Magnetic";

const channels = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  {
    label: "Phone",
    value: PROFILE.phone,
    href: `tel:${PROFILE.phone.replace(/[^+\d]/g, "")}`,
  },
  { label: "GitHub", value: "@dzakialthalsy", href: PROFILE.github },
  { label: "LinkedIn", value: "dzaki-althalsyah-27z", href: PROFILE.linkedin },
];

const fieldClass =
  "w-full border-0 border-b-2 border-ink/20 bg-transparent px-0 py-4 text-lg text-ink placeholder:text-slate-300 outline-none transition-colors focus:border-accent";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    try {
      // FormSubmit relays the message straight to the inbox — no backend needed.
      const res = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
          _subject: `Portfolio message from ${form.name.value}`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" index="06" title="Contact">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-tight text-ink sm:text-4xl"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Have a data problem or an opportunity?{" "}
            <span className="text-accent">Let's talk.</span>
          </motion.p>
          <p className="mt-5 leading-relaxed text-slate-600">
            Drop me a message — it lands straight in my inbox, and I'll get back
            to you as soon as I can. Based in {PROFILE.location}.
          </p>

          <ul className="mt-10 border-t-2 border-ink">
            {channels.map(({ label, value, href }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="border-b-2 border-ink"
              >
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between py-4 transition-colors hover:bg-ink"
                >
                  <span className="pl-2 font-mono text-xs uppercase tracking-widest text-slate-400 transition-colors group-hover:text-accent">
                    {label}
                  </span>
                  <span className="flex items-center gap-2 pr-2 font-semibold text-ink transition-colors group-hover:text-white">
                    {value}
                    <ArrowUpRight
                      size={15}
                      className="transition group-hover:rotate-45"
                    />
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="lg:col-span-7"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
            {"// send a message"}
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 sm:gap-x-10">
            <div>
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Your email"
                className={fieldClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className={`${fieldClass} resize-none`}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Magnetic>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex items-center gap-2 border-2 border-ink bg-ink px-8 py-4 font-mono text-sm font-semibold text-white transition hover:bg-accent hover:border-accent disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <Send size={15} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </Magnetic>

            {status === "sent" && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 font-mono text-sm font-semibold text-emerald-600"
              >
                <CheckCircle2 size={16} /> Message sent — I'll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 font-mono text-sm font-semibold text-rose-600"
              >
                <AlertCircle size={16} /> Something went wrong — email me at {PROFILE.email}.
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

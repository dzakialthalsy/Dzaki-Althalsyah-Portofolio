import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* Comet-style custom cursor: a glowing rocket dot with a soft trailing ring.
   Rendered only on fine-pointer devices; native cursor hidden via CSS. */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 25 });
  const ringY = useSpring(y, { stiffness: 250, damping: 25 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target.closest("a, button, input, textarea, [data-hover]");
      setHovering(Boolean(t));
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border-2 border-indigo-500/80 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 52 : 36,
          height: hovering ? 52 : 36,
          opacity: hovering ? 0.9 : 0.55,
          scale: clicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {/* Rocket core */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{
          rotate: hovering ? 0 : 45,
          scale: clicking ? 0.7 : hovering ? 1.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2c3.5 1.5 6 5 6 9 0 1.5-.3 2.9-.9 4.2L12 22l-5.1-6.8C6.3 13.9 6 12.5 6 11c0-4 2.5-7.5 6-9z"
            fill="url(#cursorGrad)"
            stroke="white"
            strokeWidth="1.2"
          />
          <circle cx="12" cy="10" r="2.2" fill="white" />
          <defs>
            <linearGradient id="cursorGrad" x1="6" y1="2" x2="18" y2="22">
              <stop stopColor="#4f46e5" />
              <stop offset="1" stopColor="#818cf8" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </>
  );
}

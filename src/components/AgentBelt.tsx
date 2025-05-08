import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const agents = [
  { name: "Cursor",       logo: "/logos/cursor.ico" },
  { name: "Claude",       logo: "/logos/claude.ico" },
  { name: "Windsurf",     logo: "/logos/windsurf.ico" },
  { name: "Copilot",      logo: "/logos/copilot.ico" },
  { name: "Tabnine",      logo: "/logos/tabnine.ico" },
  { name: "Qodo",         logo: "/logos/qodo.ico" },
  { name: "Replit",       logo: "/logos/replit.ico" },
  { name: "Continue.dev", logo: "/logos/continue.ico" },
  { name: "Saturnhead AI",logo: "/logos/saturnhead.ico" }
];

export default function AgentBelt() {
  const beltRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);

  // Make sure we know how wide one copy is (and recalc on resize)
  useLayoutEffect(() => {
    const measure = () => {
      if (beltRef.current) {
        // beltRef contains TWO copies; we only want one
        setTravel(beltRef.current.scrollWidth / 2);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-2 backdrop-blur-sm">
      {/* Left gradient mask for fade-in effect */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(5, 11, 20, 1), rgba(2, 6, 23, 0))'
        }}
      />
      
      <motion.div
        ref={beltRef}
        className="flex whitespace-nowrap"
        // travel === 0 until the first layout pass – then animation kicks in
        animate={travel ? { x: [0, -travel] } : false}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 35
          }
        }}
      >
        {/** TWO copies back to back */}
        {[...agents, ...agents].map((a, i) => (
          <div key={i} className="inline-flex items-center mx-8">
            {a.logo ? (
              <img src={a.logo} alt="" className="h-5 w-5 object-contain" />
            ) : (
              <div className="h-4 w-4 rounded-full bg-gradient-to-r from-cyver-cyan to-cyver-purple" />
            )}
            <span className="ml-2 text-lg font-semibold bg-gradient-to-r from-white via-cyver-cyan to-cyver-purple bg-clip-text text-transparent">
              {a.name}
            </span>
          </div>
        ))}
      </motion.div>
      
      {/* Right gradient mask for fade-out effect */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, rgba(5, 11, 20, 1), rgba(2, 6, 23, 0))'
        }}
      />
    </div>
  );
}

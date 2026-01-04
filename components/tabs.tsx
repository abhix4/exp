"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function UnderlineTabs() {
  const [tab, setTab] = useState(1);

  return (
    <div className="relative flex gap-6">
      {[1, 2, 3].map((i) => (
        <button
          key={i}
          onClick={() => setTab(i)}
          className="relative px-1 text-sm"
        >
          {["A", "B", "C"][i - 1]}

          {tab === i && (
            <motion.div
              layoutId="underline"
              className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red-500"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
                mass: 1,
                velocity: 2,
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
}

export function BgTabs() {
  const [tab, setTab] = useState(0);
  const list = ["Home", "Profile", "Settings"];

  return (
    <div className="flex gap-1 relative">
      {list.map((item, index) => (
        <button
          key={item}
          onClick={() => setTab(index)}
          className="relative px-2 py-1 text-sm rounded-sm cursor-pointer"
        >
          {tab === index && (
            <motion.div
              layoutId="bg"
              className="absolute inset-0 bg-black/10 rounded-sm"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}

          <span className="relative z-10">{item}</span>
        </button>
      ))}
    </div>
  );
}

export function HoverBgTabs() {
  const [hovered, setHovered] = useState<number | null>(null);

  const list = ["Home", "Profile", "Settings"];

  return (
    <div className="relative flex ">
      {list.map((item, index) => (
        <button
          key={item}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className="relative px-3 py-1.5 text-sm rounded-md cursor-pointer"
        >
          {/* layout is only used for one element */}
          {hovered === index && (
            <motion.div
              layoutId="hover-bg"
              className="absolute inset-0 rounded-md bg-orange-500/10"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}

          <span className="relative z-10">{item}</span>
        </button>
      ))}
    </div>
  );
}

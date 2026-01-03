"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Tabs() {
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

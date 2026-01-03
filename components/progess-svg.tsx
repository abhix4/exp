"use client";
import { motion } from "motion/react";
export default function ProgressBar() {
  return (
    <div>
      <svg
        width="170"
        height="1"
        viewBox="0 0 170 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: [0, 0.25, 0.75, 1],
          }}
          transition={{
            ease: "easeOut",
            duration: 1.8,
            times: [0, 0.3, 0.7, 1],
          }}
          x1="0"
          y1="1"
          x2="170"
          y2="1"
          pathLength={1}
          stroke="black"
        />
      </svg>
    </div>
  );
}

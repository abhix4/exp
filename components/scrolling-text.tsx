"use client";
import { AnimatePresence, motion, Variants } from "motion/react";
import { useEffect, useState } from "react";
export default function ScrollingText({ className }: { className?: string }) {
  const [curr, setCurr] = useState(0);
  const texts = [
    "Loading",
    "Hang on",
    "Still on it",
    "One last fetch",
    "Got it",
  ];

  const motionVariants: Variants = {
    initial: { y: 20, opacity: 0, filter: "blur(2px)" },
    animate: { y: 0, opacity: 1, filter: "blur(0px)" },
    exit: { y: -20, opacity: 0, filter: "blur(2px)" },
  };

  const customVariants: Variants = {
    initial: {
      y: 20,
      rotateX: 90,
      opacity: 0,
      filter: "blur(4px)",
    },
    animate: {
      y: 0,
      rotateX: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: {
      y: -20,
      rotateX: -90,
      opacity: 0,
      filter: "blur(4px)",
    },
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((pre) => {
        if (pre >= 4) {
          return pre;
        }
        return pre + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" inline-block whitespace-nowrap overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={curr}
          variants={customVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ type: "spring", stiffness: 900, damping: 80, mass: 10 }}
          className="text-sm font-medium"
        >
          {texts[curr]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

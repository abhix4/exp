"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function AlarmIcon() {
  const [alarmSet, setAlarmSet] = useState<boolean>(false);
  const D_PATH1 = "m9 13 2 2 4-4";
  const D_PATH2 = "M12 9v4l2 2";
  return (
    <div onClick={() => setAlarmSet((prev) => !prev)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-alarm-clock-icon lucide-alarm-clock"
      >
        <circle cx="12" cy="13" r="8" />

        <motion.path
          key={alarmSet ? "on" : "off"}
          d={alarmSet ? D_PATH1 : D_PATH2}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {alarmSet ? <motion.path d="M5 3 2 6" /> : <path d="M5 3 2 6" />}

        <path d="m22 6-3-3" />
        <path d="M6.38 18.7 4 21" />
        <path d="M17.64 18.67 20 21" />
      </svg>
    </div>
  );
}

export function NextIcon() {
  const variant = {
    hidden: { pathLength: 0, opacity: 0 },
    hover: {
      pathLength: 1,
      opacity: 1,
    },
  };
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      whileHover="hover"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-right-icon lucide-chevron-right"
    >
      <path d="m9 18 6-6-6-6" />
      <motion.path
        variants={variant}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 800,
          damping: 30,
          mass: 2,
        }}
        className="rotate-360"
        d="M14 12H5"
      />
    </motion.svg>
  );
}

"use client";

import {
  AlarmClock,
  AlarmClockCheck,
  Music4,
  Paperclip,
  Send,
  Sprout,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function SpringButton() {
  const [alarm, setAlarm] = useState(false);

  return (
    <motion.button
      onClick={() => setAlarm((p) => !p)}
      animate={{ width: alarm ? 106 : 44 }}
      transition={{ type: "spring", stiffness: 800, damping: 30 }}
      className="relative border border-black/10  h-11 w-11 rounded-3xl flex items-center overflow-hidden outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] cursor-pointer hover:bg-neutral-50"
    >
      {/* Left anchor */}
      <div className="p-2.75 text-black/80 ">
        {!alarm ? <AlarmClock size={20} /> : <AlarmClockCheck size={20} />}
      </div>

      {/* Expanding content */}
      <motion.p
        initial={false}
        animate={{
          opacity: alarm ? 1 : 0,
          y: alarm ? 0 : 8,
          filter: alarm ? "" : "blur(10px)",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          velocity: 5,
        }}
        className="absolute left-8 text-sm whitespace-nowrap translate-y-0.5 text-black/80 font-medium"
      >
        Alarm set
      </motion.p>
    </motion.button>
  );
}

export function SelectorButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className="relative  h-fit  w-fit ">
      <motion.button
        className="p-2 border-[0.5px] rounded-full border-black/10 cursor-pointer hover:bg-neutral-50"
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 800, damping: 20 }}
        onClick={() => setIsVisible((prev) => !prev)}
      >
        <Paperclip size={16} className="text-black/80" />
      </motion.button>
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.button
              className="absolute -top-5 bg-white -left-10 p-2 border-[0.5px] rounded-full border-black/10 h-fit w-fit cursor-pointer "
              key={1}
              whileHover={{ scale: 1.1 }}
              initial={{ translateY: 20, translateX: 10, opacity: 0 }}
              animate={{ translateY: 0, translateX: 0, opacity: 1 }}
              exit={{ translateY: 20, translateX: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 800, damping: 30 }}
            >
              <Music4 size={16} />
            </motion.button>

            <motion.button
              className="absolute -top-10 bg-white  right-0 p-2 border-[0.5px] rounded-full border-black/10 h-fit w-fit cursor-pointer"
              key={2}
              whileHover={{ scale: 1.1 }}
              initial={{ translateY: 30, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: 30, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 800,
                damping: 30,
                delay: 0.1,
              }}
            >
              <Sprout size={16} />
            </motion.button>

            <motion.button
              className="absolute -top-5 bg-white  -right-10 p-2 border-[0.5px] rounded-full border-black/10 h-fit w-fit cursor-pointer"
              key={3}
              whileHover={{ scale: 1.1 }}
              initial={{ translateY: 20, translateX: -10, opacity: 0 }}
              animate={{ translateY: 0, translateX: 0, opacity: 1 }}
              exit={{ translateY: 20, translateX: -10, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 800,
                damping: 30,
                delay: 0.2,
              }}
            >
              <Send size={16} />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function OrbitButton() {
  return (
    <motion.div className="relative inline-flex justify-center items-center w-[68px] h-8.5 rounded-full border border-black/30 overflow-hidden">
      <div
        className="absolute inset-0 rounded-full animate-spin"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(99,102,241,1) 0deg, rgba(99,102,241,0.6) 108deg, transparent 108deg 360deg)",
          animationDuration: "4s",
        }}
      />

      <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 text-sm rounded-full bg-black text-white z-10">
        Hover
      </button>
    </motion.div>
  );
}

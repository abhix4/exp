'use client'

import { AlarmClock, AlarmClockCheck } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

export default function Button() {
  const [alarm, setAlarm] = useState(false)

  return (
    <motion.button
      onClick={() => setAlarm(p => !p)}
      animate={{ width: alarm ? 110 : 44 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="relative border border-[#5666FA]  h-11 rounded-2xl flex items-center overflow-hidden"
    >
      {/* Left anchor */}
      <div className="p-2.5">
        {!alarm ? <AlarmClock /> : <AlarmClockCheck />}
      </div>

      {/* Expanding content */}
      <motion.p
        initial={false}
        animate={{
          opacity: alarm ? 1 : 0,
          y: alarm ? 0 : 8
        }}
        className="absolute left-9 text-sm whitespace-nowrap translate-y-1 text-[#D5F36F]"
        
      >
        Alarm set
      </motion.p>
    </motion.button>
  )
}

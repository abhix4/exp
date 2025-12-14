'use client'

import { AlarmClock, AlarmClockCheck } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

export default function SpringButton() {
  const [alarm, setAlarm] = useState(false)

  return (
    <motion.button
      onClick={() => setAlarm(p => !p)}
      animate={{ width: alarm ? 110 : 44 }}
      transition={{ type: "spring", stiffness: 800, damping: 20}}
      className="relative border  bg-[#171616] shadow-xl h-11 rounded-3xl flex items-center overflow-hidden outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
    >
      {/* Left anchor */}
      <div className="p-2.5 text-[#FFB101]  ">
        {!alarm ? <AlarmClock /> : <AlarmClockCheck />}
      </div>

      {/* Expanding content */}
    <motion.p
      initial={false}
      animate={{
        opacity: alarm ? 1 : 0,
        y: alarm ? 0 : 8,
        filter: alarm ? "" : "blur(10px)",
        
      }}
        transition={{ type: "spring", stiffness: 500, damping: 20}}
      className="absolute left-9 text-sm whitespace-nowrap translate-y-0.5 text-[#FEFEFF] font-medium"
    >
      Alarm set
    </motion.p>
    </motion.button>
  )
}

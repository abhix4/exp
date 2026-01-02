"use client"
import { useState } from "react"
import {AnimatePresence, motion}  from 'motion/react'

export default function Icon(){

    const [alarmSet, setAlarmSet] = useState<boolean>(false)
    return (
        <div onClick={() => setAlarmSet(prev => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alarm-clock-icon lucide-alarm-clock">
            <circle cx="12" cy="13" r="8"/>
           <AnimatePresence initial={false}>
          {alarmSet ? (
            <motion.path
              key="check"
              d="m9 13 2 2 4-4"
              initial={{ pathLength: 0, opacity: 0, }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ pathLength: 0, opacity: 0, filter:"blur(1px)"}}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          ) : (
            <motion.path
              key="hands"
              d="M12 9v4l2 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ pathLength: 0, opacity: 0,filter:"blur(1px)" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>

            {
                alarmSet ? <motion.path 
                
                d="M5 3 2 6" /> : <path d="M5 3 2 6" />
            }
            
            <path d="m22 6-3-3"/>
            <path d="M6.38 18.7 4 21"/>
            <path d="M17.64 18.67 20 21"/>
            </svg>
        </div>
    )
}


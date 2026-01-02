'use client'

import { AlarmClock, AlarmClockCheck, Music4, Paperclip, Send, Sprout } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export  function SpringButton() {
  const [alarm, setAlarm] = useState(false)

  return (
    <motion.button
      onClick={() => setAlarm(p => !p)}
      animate={{ width: alarm ? 110 : 44 }}
      transition={{ type: "spring", stiffness: 800, damping: 20}}
      className="relative border border-black/10  h-11 rounded-3xl flex items-center overflow-hidden outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] cursor-pointer"
    >
      {/* Left anchor */}
      <div className="p-2.25 text-black/80 ">
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
      className="absolute left-9 text-sm whitespace-nowrap translate-y-0.5 text-black/80 font-medium"
    >
      Alarm set
    </motion.p>
    </motion.button>
  )
}


export function SelectorButton(){
  const [isVisible, setIsVisible] = useState<boolean>(false)
  return (
   <div className="relative  h-fit  w-fit ">
    <motion.button
    className="p-2 border rounded-full border-black/10 cursor-pointer"
    whileTap={{scale:0.90}}
    transition={{ type: "spring", stiffness: 800, damping: 20}}
    onClick={() => setIsVisible(prev => !prev)}
    >
      <Paperclip size={16} className="text-black/80" />

     
    </motion.button>
    <AnimatePresence >

{
      isVisible && (
        <>
          <motion.button className="absolute -top-5 -left-10 p-2 border rounded-full border-black/10 h-fit w-fit cursor-pointer"
      key={1}
      whileHover={{scale:1.10}}
      
      initial={{translateY:20, translateX:10, opacity:0}}
      animate={{translateY:0, translateX:0, opacity:1}}
      exit={{translateY:20, translateX:10, opacity:0}}
      transition={{ type:"spring", stiffness: 800, damping: 20}}
     >
        <Music4 size={16} />
      </motion.button>

       <motion.button className="absolute -top-10 right-0 p-2 border rounded-full border-black/10 h-fit w-fit cursor-pointer"
      key={2}  
      whileHover={{scale:1.10}}
        initial={{translateY:30, opacity:0}}
      animate={{translateY:0, opacity:1}}
        exit={{translateY:30, opacity:0}}
    transition={{  type:"spring", stiffness: 800, damping: 20,delay:0.1}}
      >
        <Sprout size={16}/>
      </motion.button>

     <motion.button className="absolute -top-5 -right-10 p-2 border rounded-full border-black/10 h-fit w-fit cursor-pointer"
    key={3}
      whileHover={{scale:1.10}}
     initial={{translateY:20, translateX:-10, opacity:0}}
      animate={{translateY:0, translateX:0, opacity:1}}
        exit={{translateY:20, translateX:-10, opacity:0}}
    transition={{ type:"spring", stiffness: 800, damping: 20,delay:0.2}}>
        <Send size={16} />
      </motion.button>
        </>
      )
    
    }
    
    </AnimatePresence>
    
   </div>
  )
}

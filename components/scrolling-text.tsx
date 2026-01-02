'use client'
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"
export default function ScrollingText({className}: {className?: string}){
    const [curr, setCurr] = useState(0)
    const texts = [
        "Loading ...",
        "Hang on ... ",
        "Still on it ..",
        "One last fetch ...",
        "Got it"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurr((pre) => {
                if(pre >= 4 ){
                    return pre;
                }
                return (pre + 1);
            });
        }, 2000);
        return () => clearInterval(interval) 
    }, [])

    return (
       <div className=" rounded-lg px-3 py-2 h-fit overflow-hidden">
            <AnimatePresence mode="wait">
            <motion.div 
            key={curr}
            initial={{translateY: -20, opacity: 0}}
            animate={{translateY: 0, opacity: 1}}
            exit={{ translateY:20, opacity: 0}}
            transition={{type:'spring', damping:30, stiffness: 800, duration: 0.2, delay: 0.2}}
            className="text-sm font-medium"
            >
                {
                    texts[curr]
                }
            </motion.div>
            </AnimatePresence>
       </div>
    )
}

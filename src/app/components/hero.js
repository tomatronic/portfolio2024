'use client'

import WavingHand from "./wave"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-[url('/herobg.png')] bg-fixed">
      
      <motion.div initial={{y: 48, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ ease: 'easeInOut', duration: 0.5 }} viewport={{ once: true }} className="container relative z-10 mx-auto flex h-[calc(100vh-280px)] max-w-3xl flex-col flex-wrap justify-center py-24">
        <p>Hello, my name is Tom</p>
        <h1 className="mb-10 max-w-xl text-3xl font-semibold leading-none tracking-tight md:text-4xl dark:text-white">I design experiences</h1>
        <p className="mb-6 max-w-xl text-base font-medium text-gray-600 lg:mb-8 dark:text-gray-400">
          I'm a passionate senior UX designer with over 10 years of design experience. My mission is simple: deliver simple, yet effective, user-centric design.</p>
          <p className="text-base font-medium text-gray-600">Currently working at <a href="https://www.rakutenadvertising.com" target="_blank" rel="noreferrer">Rakuten Advertising</a> in Brighton, UK.</p>
          
        
      </motion.div>

      
    </div>
  )
}


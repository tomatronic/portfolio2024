'use client'

import WavingHand from "./wave"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
    <motion.div
      initial={{y: 48, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      viewport={{ once: true }}
      className="container relative z-10 mx-auto h-[calc(100vh-280px)] max-w-screen-lg px-4 py-16 md:py-24"
    >
      <div className="grid h-full grid-cols-1 content-center justify-center gap-6">
        <div>
          <p className="text-center text-2xl md:text-left">Hi <WavingHand />, I'm Tom</p>
        </div>
        <div>
          <h1 className="max-w-3xl text-center text-3xl font-bold leading-none tracking-tight md:text-left md:text-6xl dark:text-white">I design experiences</h1>
        </div>
        <div>
          <p className="max-w-3xl text-center text-2xl font-medium text-gray-600 md:text-left lg:mb-2 dark:text-gray-400">
          Turning complexity into clarity, one pixel at a time. I create experiences that don't just work, but feel great.
          </p>
        </div>
        <div>
          <p className="text-center text-sm font-medium uppercase text-gray-600 md:text-left">
            Senior UX designer @ <a href="https://www.rakutenadvertising.com" target="_blank" rel="noreferrer">Rakuten Advertising</a>
          </p>
        </div>
      </div>
    </motion.div>
  </div>
  )
}


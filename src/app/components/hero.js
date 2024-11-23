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
      className="container relative z-10 mx-auto max-w-screen-lg px-4 py-16"
    >
      <div className="grid h-full grid-cols-1 content-center justify-center gap-6">
        <div>
          <p className="text-center text-xl text-gray-100 md:text-left md:text-2xl">Hi <WavingHand />, I'm Tom</p>
        </div>
        <div>
          <h1 className="max-w-3xl text-center text-3xl font-bold leading-tight tracking-normal text-gray-100 md:text-left md:text-4xl dark:text-white">Turning complexity into clarity, crafting experiences that feel effortless and enjoyable.</h1>
        </div>

        <div>
          <p className="text-sm font-medium uppercase text-gray-100">
            Senior UX designer @ <a href="https://www.rakutenadvertising.com" target="_blank" rel="noreferrer">Rakuten Advertising</a>
          </p>
        </div>
      </div>
    </motion.div>
  </div>
  )
}


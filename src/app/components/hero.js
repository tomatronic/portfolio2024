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
      <div className="grid h-full grid-cols-1 content-center justify-center gap-4">
        <div>
          <p className="text-balance text-center text-xl text-gray-100 md:text-left md:text-2xl">Hi <WavingHand />, I'm Tom</p>
        </div>
        <div>
          <h1 className="text-balance text-center text-3xl font-bold leading-tight tracking-normal text-gray-100 md:text-left md:text-5xl dark:text-white">A UX Designer creating impactful experiences that work for everyone.</h1>
        </div>

        <div>
          <p className="pt-4 text-center text-sm font-medium uppercase text-gray-100 md:text-left">
            Senior UX designer @ <a href="https://www.rakutenadvertising.com" target="_blank" rel="noreferrer">Rakuten Advertising</a>
          </p>
        </div>
      </div>
    </motion.div>
  </div>
  )
}


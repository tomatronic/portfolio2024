'use client'

import WavingHand from "./wave"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-[url('/herobg.png')] bg-fixed">
    <motion.div
      initial={{y: 48, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      viewport={{ once: true }}
      className="container relative z-10 mx-auto h-[calc(100vh-280px)] max-w-screen-xl px-4 py-16 md:py-24"
    >
      <div className="grid h-full grid-cols-1 content-center justify-center gap-6">
        <div>
          <p className="text-center text-xl md:text-left">Hi <WavingHand />, I'm Tom</p>
        </div>
        <div>
          <h1 className="max-w-xl text-center text-3xl font-semibold leading-none tracking-tight md:text-left md:text-5xl dark:text-white">I design experiences</h1>
        </div>
        <div>
          <p className="max-w-2xl text-center text-xl font-medium text-gray-600 md:text-left lg:mb-2 dark:text-gray-400">
            Passionate about design and always striving to learn. I have over 10 years of design industry experience. My mission: deliver simple, yet effective, user-centric design.
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


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
        {/* <div>
          <p className="text-balance text-center text-lg text-slate-950 font-semibold">Hi there <WavingHand /></p>
        </div> */}
        <div>
          <h1 className="text-balance text-center text-3xl tracking-[-.03em] tracking-tight text-slate-950 md:text-6xl/22 dark:text-white font-semibold">– Hi! I'm Tom, a UX designer creating impactful experiences that work for everyone.</h1>
        </div>

        <div>
          <p className="pt-4 text-center text-sm font-medium uppercase text-slate-950">
            Senior UX designer @ <a href="https://www.rakutenadvertising.com" target="_blank" rel="noreferrer"><span className="underline">Rakuten Advertising</span></a>
          </p>
        </div>
      </div>
    </motion.div>
  </div>
  )
}


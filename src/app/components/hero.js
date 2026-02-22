'use client'

import { motion } from "framer-motion"
import HeroAvatar from "./HeroAvatar"

// Add your avatar image paths here (e.g. from /public). Hover over the avatar to cycle through them.
const AVATAR_IMAGES = [
  '/me-1.png', '/me-2.png', '/me-3.png',
]

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
        {/* Small round avatar: hover to cycle through images (easter egg) */}
        {AVATAR_IMAGES.length > 0 && (
          <div className="flex justify-center">
            <HeroAvatar images={AVATAR_IMAGES} size={88} alt="Tom Spencer" />
          </div>
        )}

        <div>
          <h1 className="text-balance text-center text-3xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-4xl md:leading-tight lg:text-5xl">
            Senior UX Designer<br />
            <span className="font-medium text-slate-700 dark:text-slate-300">Enterprise Systems & Ad-Tech</span>
          </h1>
        </div>

        <div>
          <p className="text-center text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400">
            {/* Currently simplifying the{' '}
            <a href="https://www.rakutenadvertising.com" target="_blank" rel="noreferrer" className="font-medium text-slate-800 underline decoration-slate-300 underline-offset-2 hover:decoration-slate-500 dark:text-slate-200 dark:decoration-slate-500 dark:hover:decoration-slate-400">
              Rakuten Advertising
            </a>{' '}
            ecosystem. I specialise in designing high-utility tools for expert users, turning deep complexity into seamless, professional workflows. */}
            Currently at <a href="https://www.rakutenadvertising.com" target="_blank" rel="noreferrer" className="font-medium text-slate-800 underline decoration-slate-300 underline-offset-2 hover:decoration-slate-500 dark:text-slate-200 dark:decoration-slate-500 dark:hover:decoration-slate-400">
              Rakuten Advertising
            </a> turning data-heavy, high-stakes workflows into something that feels obvious, even when the problem underneath isn't.
          </p>
        </div>
      </div>
    </motion.div>
  </div>
  )
}


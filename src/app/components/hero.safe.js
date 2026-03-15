'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">

<motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        viewport={{ once: true }}
        className="container relative z-10 mx-auto max-w-6xl px-4 py-16"
      >
        <div className="grid h-full grid-cols-1 content-center justify-center gap-6">

          <div>
            <h1 className="text-balance text-center text-3xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-4xl md:leading-tight lg:text-5xl">
              Senior UX Designer<br />
              <span className="font-medium text-slate-700 dark:text-slate-300">Complex Problems, Clear Interfaces</span>
            </h1>
          </div>

          <div className="mx-auto max-w-xl">
            <p className="text-center text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400">
              Currently at{' '}
              <a href="https://www.rakutenadvertising.com" target="_blank" rel="noreferrer"
                className="font-medium text-violet-600 underline decoration-violet-300 underline-offset-2 hover:decoration-violet-500 dark:text-violet-400 dark:decoration-violet-600 dark:hover:decoration-violet-400">
                Rakuten Advertising
              </a>{' '}
              turning data-heavy, high-stakes workflows into something that feels obvious, even when the problem underneath isn't.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/#work"
              onClick={e => {
                const el = document.getElementById('work')
                if (el) {
                  e.preventDefault()
                  el.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-violet-3d inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-medium text-white"
            >
              Explore case studies
              <ArrowDown size={15} strokeWidth={2.5} />
            </Link>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

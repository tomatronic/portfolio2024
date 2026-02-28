'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutMeSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <Link
          href="/about"
          className="block overflow-hidden rounded-2xl border border-slate-200 transition-colors duration-200 hover:border-slate-400 dark:border-slate-800 dark:hover:border-slate-600"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-0">

            {/* Photo — left */}
            <div className="relative aspect-[4/5] md:col-span-5 md:aspect-auto md:min-h-[320px]">
              <Image
                src="/bio.jpeg"
                alt="Tom Spencer"
                fill
                className="object-cover object-bottom"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Text — right */}
            <div className="flex flex-col justify-center px-6 py-8 md:col-span-7 md:px-10 md:py-12">
              <p className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white md:text-xl">
                Hi, I&apos;m Tom 👋
              </p>
              <div className="mt-4 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                <p>
                  I&apos;m a Senior UX Designer based in Brighton, specialising in enterprise products that sit at the intersection of data complexity and human decision-making. For the past 8 years at Rakuten Advertising, that&apos;s meant dashboards, intelligent search, and attribution tools built for users who know exactly what they want, and won&apos;t tolerate software that slows them down.
                </p>
                <p>
                  I&apos;ve shipped natural language search that cut report creation time by 90% for 1,000+ advertisers, and built multi-touch attribution tools that finally gave publishers the evidence to prove their value. I move fast, test early, and care more about decisions landing in front of users than decks landing in front of stakeholders.
                </p>
              </div>

              {/* Hover-reveal pill button */}
              <div className="mt-8 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-slate-900">
                    More About Me
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </div>

          </div>
        </Link>
      </div>
    </section>
  )
}

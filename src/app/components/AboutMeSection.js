'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function AboutMeSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <Link
          href="/about"
          className="block overflow-hidden rounded-2xl border border-slate-200 transition-shadow duration-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] dark:border-slate-800 dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12">

            {/* Photo */}
            <div className="relative aspect-[4/5] md:col-span-5 md:aspect-auto md:min-h-[320px]">
              <Image
                src="/bio.jpeg"
                alt="Tom Spencer"
                fill
                className="object-cover object-bottom"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center px-6 py-8 md:col-span-7 md:px-10 md:py-12">
              <p className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white md:text-xl">
                Hi, I&apos;m Tom 👋
              </p>
              <div className="mt-4 space-y-4 text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400">
                <p>
                  I&apos;m a Senior UX Designer based in Brighton, specialising in enterprise products that sit at the intersection of data complexity and human decision-making. For the past 8 years at Rakuten Advertising, that&apos;s meant dashboards, intelligent search, and attribution tools built for users who know exactly what they want, and won&apos;t tolerate software that slows them down.
                </p>
                <p>
                  I&apos;ve shipped natural language search that cut report creation time by 90% for 1,000+ advertisers, and built multi-touch attribution tools that finally gave publishers the evidence to prove their value. I move fast, test early, and care more about decisions landing in front of users than decks landing in front of stakeholders.
                </p>
              </div>

              <p className="mb-0 mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 dark:text-violet-400">
                More about me
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </p>
            </div>

          </div>
        </Link>
      </div>
    </section>
  )
}

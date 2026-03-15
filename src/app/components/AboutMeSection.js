'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AboutMeSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-6xl px-4">

        <h2 className="mb-8 max-w-4xl text-3xl font-normal leading-tight tracking-tight text-slate-950 dark:text-white md:text-4xl lg:text-5xl">
          I design enterprise products that make complex decisions feel obvious.
        </h2>

        <div className="mb-10 max-w-xl space-y-4 text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400">
          <p>
            For 8 years at Rakuten Advertising I&apos;ve been designing tools where the data is enormous and the decisions are real — dashboards, search, attribution.
          </p>
          <p>
            I move fast, test early, and care more about decisions landing in front of users than decks landing in front of stakeholders.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 dark:text-accent-400"
          >
            More about me
            <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

      </div>
    </section>
  )
}

'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CardImageStack from './CardImageStack'

// ─── Image stack params ───────────────────────────────────────────────────────

const STACK_PARAMS = {
  restSpread:    80,
  hoverSpread:  130,
  restRotation:   3,
  hoverRotation:  0,
  imageSize:     37,
  spring: {
    type:     'easing',
    duration: 0.38,
    ease:     [0.22, 1, 0.36, 1],
  },
}

// ─── Card data ────────────────────────────────────────────────────────────────

const CARDS = [
  {
    href:  '/casestudy/Prompt',
    title: 'Natural Language Search & AI',
    body:  'Reduced report creation time by 90% through intelligent, natural language queries with structured controls for 1,000+ advertisers.',
    images: [
      '/prompt_1.png',
      '/prompt_2.png',
      '/prompt_3.png',
    ],
  },
  {
    href:  '/casestudy/ACJ',
    title: 'Multi-Touch Attribution for Affiliate',
    body:  "Publishers couldn't prove their early-funnel value. Multi-touch attribution would help prove their value.",
    images: [
      '/acj_1.png',
      '/acj_2.png',
      '/acj_3.png',
    ],
  },
  {
    href:  '/casestudy/Rakuten',
    title: 'Enhancing offer management',
    body:  'Reimagining how users manage offers. I crafted a solution that simplifies workflows and elevates visibility.',
    images: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=450&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=450&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=450&fit=crop&q=80',
    ],
  },
]


// ─── Card ─────────────────────────────────────────────────────────────────────

function Card({ card }) {
  const [isHovered, setIsHovered] = useState(false)

  const images = useMemo(
    () => card.images.map((src, i) => (
      <img key={i} src={src} alt="" loading="lazy" decoding="async"
        className="aspect-square w-full object-cover" />
    )),
    [card.images]
  )

  return (
    <Link
      href={card.href}
      className="group relative block rounded-2xl border border-slate-200 transition-shadow duration-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] dark:border-slate-800 dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 overflow-visible md:order-last md:h-auto md:min-h-[380px]">
          <CardImageStack images={images} isHovered={isHovered} params={STACK_PARAMS} />
        </div>
        <div className="relative grid grid-cols-1 content-center gap-4 px-8 py-8 md:px-0 md:py-10 md:pl-10 md:pr-8">
          <h2 className="text-2xl font-normal tracking-tight text-slate-950 dark:text-white md:text-3xl">
            {card.title}
          </h2>
          <p className="mb-0 text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400">
            {card.body}
          </p>
          <p className="mb-0 mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 dark:text-violet-400">
            Read case study
            <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </p>
        </div>
      </div>
    </Link>
  )
}

// ─── Showcase ─────────────────────────────────────────────────────────────────

export default function CasestudyShowcase() {
  return (
    <div id="work" className="py-24">
      <div className="container mx-auto max-w-6xl px-4">

        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-4xl">
            Case studies
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400">
            Products and experiences I created to help all users with clarity, speed and trust.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {CARDS.map(card => <Card key={card.href} card={card} />)}
        </div>

      </div>
    </div>
  )
}

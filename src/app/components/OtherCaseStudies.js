'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import CardImageStack from './CardImageStack'

const COMPACT_PARAMS = {
  restSpread:    16,
  hoverSpread:   40,
  restRotation:   4,
  hoverRotation:  0,
  imageSize:     65,
  spring: {
    type:     'easing',
    duration: 0.38,
    ease:     [0.22, 1, 0.36, 1],
  },
}

const CARDS = [
  {
    href: '/casestudy/Prompt',
    title: 'Natural Language Search & AI',
    images: [
      '/prompt_1.png',
      '/prompt_2.png',
      '/prompt_3.png',
    ],
  },
  {
    href: '/casestudy/ACJ',
    title: 'Multi-Touch Attribution for Affiliate',
    images: [
      '/acj_1.png',
      '/acj_2.png',
      '/acj_3.png',
    ],
  },
  {
    href: '/casestudy/Rakuten',
    title: 'Enhancing offer management',
    images: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=450&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=450&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=450&fit=crop&q=80',
    ],
  },
]

function CompactCard({ card }) {
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
      replace
      className="group relative flex w-full items-center gap-6 rounded-2xl border border-slate-200 dark:border-slate-700 px-5 py-8 transition-shadow duration-200 hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3
        className="flex-1 truncate text-base tracking-tight text-slate-950 dark:text-white"
        style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}
      >
        {card.title}
      </h3>
      <div className="relative mr-6 h-16 w-28 shrink-0 overflow-visible">
        <CardImageStack images={images} isHovered={isHovered} params={COMPACT_PARAMS} />
      </div>
    </Link>
  )
}

export default function OtherCaseStudies({ currentHref }) {
  const others = CARDS.filter(c => c.href !== currentHref)
  return (
    <div className="pt-12">
      <h2 className="mb-4 text-xl tracking-tight">Other case studies</h2>
      <div className="flex flex-col gap-3">
        {others.map(card => (
          <CompactCard key={card.href} card={card} />
        ))}
      </div>
    </div>
  )
}

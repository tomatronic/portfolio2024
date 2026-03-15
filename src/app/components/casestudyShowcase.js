'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, Lock } from 'lucide-react'
import CardImageStack from './CardImageStack'
import PasswordGate from './PasswordGate'

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
    body:  'Designed a natural language search tool for 1,000+ advertisers that cut report creation time by 90%, with an estimated $10M in annual time savings.',
    images: [
      '/prompt_1.png',
      '/prompt_2.png',
      '/prompt_3.png',
    ],
  },
  {
    href:  '/casestudy/ACJ',
    title: 'Multi-Touch Attribution for Affiliate',
    body:  'Gave publishers a way to prove their value across journeys spanning up to 15 touchpoints — it ended up as a selling point for Rakuten in competitive pitches.',
    images: [
      '/acj_1.png',
      '/acj_2.png',
      '/acj_3.png',
    ],
  },
  {
    href:  '/casestudy/Rakuten',
    title: 'Enhancing offer management',
    body:  'Overhauled a long-neglected affiliate offer dashboard through research and testing. Support tickets dropped after launch and account managers got back the time they\'d been spending fielding queries.',
    images: [
      '/offer_1.png',
      '/offer_2.png',
      '/offer_3.png',
    ],
  },
  {
    href:   '/casestudy/InfluencerCampaigns',
    title:  'Influencer Campaign Management',
    body:   'Designed a full influencer campaign platform from scratch — prototype to prospect demo in 5 days, shipped to production 5 months later.',
    images: [
      '/influencer_1.png',
      '/influencer_2.png',
      '/influencer_3.png',
    ],
    locked: true,
  },
]


// ─── Card ─────────────────────────────────────────────────────────────────────

function CardInner({ card, isHovered }) {
  const images = useMemo(
    () => card.images.map((src, i) => (
      <img key={i} src={src} alt="" loading="lazy" decoding="async"
        className="aspect-square w-full object-cover" />
    )),
    [card.images]
  )

  return (
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
        <p className="mb-0 mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 dark:text-accent-400">
          {card.locked ? (
            <>
              <Lock size={13} strokeWidth={2.5} />
              <span>Password required</span>
            </>
          ) : (
            <>
              Read case study
              <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </>
          )}
        </p>
      </div>
    </div>
  )
}

function Card({ card }) {
  const [isHovered, setIsHovered] = useState(false)
  const [showGate, setShowGate] = useState(false)

  const sharedClass = "group relative block rounded-2xl border border-[#C8BEB0] transition-shadow duration-200 hover:shadow-[0_4px_24px_rgba(184,64,16,0.10)] dark:border-[#2A3A4A] dark:hover:shadow-[0_4px_24px_rgba(238,159,104,0.12)]"

  if (card.locked) {
    return (
      <>
        <div
          className={sharedClass + ' cursor-pointer'}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setShowGate(true)}
        >
          <CardInner card={card} isHovered={isHovered} />
        </div>
        {showGate && <PasswordGate href={card.href} onClose={() => setShowGate(false)} />}
      </>
    )
  }

  return (
    <Link
      href={card.href}
      className={sharedClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardInner card={card} isHovered={isHovered} />
    </Link>
  )
}

// ─── Showcase ─────────────────────────────────────────────────────────────────

export default function CasestudyShowcase() {
  return (
    <div id="work" className="py-24">
      <div className="container mx-auto max-w-6xl px-4">

        <div className="mb-16">
          <h2 className="text-3xl font-normal tracking-tight text-slate-950 dark:text-white md:text-4xl">
            Case studies
          </h2>
          <p className="mt-4 max-w-2xl text-base font-normal leading-relaxed text-slate-600 dark:text-slate-400">
            Four projects from eight years of designing at Rakuten Advertising.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {CARDS.map(card => <Card key={card.href} card={card} />)}
        </div>

      </div>
    </div>
  )
}

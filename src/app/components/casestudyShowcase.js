'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import CardImageStack from './CardImageStack'

// ─── Image stack defaults ─────────────────────────────────────────────────────

const STACK_PARAMS = {
  restSpread:    60,   // px — outer cards at rest
  hoverSpread:  130,   // px — outer cards spread wide on hover
  restRotation:   3,   // deg — gentle fan at rest
  hoverRotation:  0,   // deg — cards flatten fully on hover
  imageSize:     47,   // % — slightly smaller so the spread has room to breathe
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
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=450&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop&q=80',
    ],
  },
  {
    href:  '/casestudy/ACJ',
    title: 'Multi-Touch Attribution for Affiliate',
    body:  "Publishers couldn't prove their early-funnel value. Multi-touch attribution would help prove their value.",
    images: [
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=450&fit=crop&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=450&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop&q=80',
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

// ─── Shared: radial fill — radiates from cursor entry point ──────────────────

function FillOverlay({ isHovered, origin }) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 rounded-2xl"
      style={{
        background: `radial-gradient(circle at ${origin.x}% ${origin.y}%, rgba(167, 139, 250, 0.13), transparent 68%)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    />
  )
}

// ─── Shared: pill button — fades in on hover ──────────────────────────────────

function HoverButton({ isHovered }) {
  return (
    <div className="mt-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white dark:bg-white dark:text-slate-900">
          View case study
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </motion.div>
    </div>
  )
}

// ─── Large card — full width, landscape 2-col layout ─────────────────────────

function LargeCard({ card }) {
  const [isHovered, setIsHovered] = useState(false)
  const [origin, setOrigin] = useState({ x: 50, y: 50 })

  const images = useMemo(
    () => card.images.map((src, i) => (
      <img key={i} src={src} alt="" loading="lazy" decoding="async"
        className="aspect-[4/3] w-full object-cover" />
    )),
    [card.images]
  )

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setOrigin({
      x: ((e.clientX - rect.left)  / rect.width)  * 100,
      y: ((e.clientY - rect.top)   / rect.height) * 100,
    })
    setIsHovered(true)
  }

  return (
    <Link
      href={card.href}
      className="relative block rounded-2xl border border-slate-200 transition-colors duration-200 hover:border-slate-400 dark:border-slate-800 dark:hover:border-slate-600"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FillOverlay isHovered={isHovered} origin={origin} />

      <div className="relative grid grid-cols-1 md:grid-cols-2">

        {/* Image stack — right column, allowed to overflow */}
        <div className="relative h-64 overflow-visible md:order-last md:h-auto md:min-h-[380px]">
          <CardImageStack images={images} isHovered={isHovered} params={STACK_PARAMS} />
        </div>

        {/* Text — left column */}
        <div className="relative grid grid-cols-1 content-center gap-4 px-8 py-8 md:px-0 md:py-10 md:pl-10 md:pr-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-3xl">
            {card.title}
          </h2>
          <p className="mb-0 text-base font-medium leading-7 text-slate-700 dark:text-slate-400">
            {card.body}
          </p>
          <HoverButton isHovered={isHovered} />
        </div>

      </div>
    </Link>
  )
}

// ─── Small card — half width, portrait stacked layout ────────────────────────

function SmallCard({ card }) {
  const [isHovered, setIsHovered] = useState(false)
  const [origin, setOrigin] = useState({ x: 50, y: 50 })

  const images = useMemo(
    () => card.images.map((src, i) => (
      <img key={i} src={src} alt="" loading="lazy" decoding="async"
        className="aspect-[4/3] w-full object-cover" />
    )),
    [card.images]
  )

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setOrigin({
      x: ((e.clientX - rect.left)  / rect.width)  * 100,
      y: ((e.clientY - rect.top)   / rect.height) * 100,
    })
    setIsHovered(true)
  }

  return (
    <Link
      href={card.href}
      className="relative block rounded-2xl border border-slate-200 transition-colors duration-200 hover:border-slate-400 dark:border-slate-800 dark:hover:border-slate-600"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FillOverlay isHovered={isHovered} origin={origin} />

      {/* Padding above image creates breathing room inside the card */}
      <div className="relative px-5 pt-6">
        <div className="relative h-52 overflow-hidden rounded-xl">
          <CardImageStack images={images} isHovered={isHovered} params={STACK_PARAMS} />
        </div>
      </div>

      {/* Text — bottom */}
      <div className="relative px-6 pb-7 pt-5">
        <h2 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-2xl">
          {card.title}
        </h2>
        <div className="mt-2 text-sm font-medium leading-6 text-slate-700 dark:text-slate-400">
          {card.body}
        </div>
        <HoverButton isHovered={isHovered} />
      </div>
    </Link>
  )
}

// ─── Showcase ─────────────────────────────────────────────────────────────────

export default function CasestudyShowcase() {
  return (
    <div id="work">
      <div className="py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-8">
            <LargeCard card={CARDS[0]} />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <SmallCard card={CARDS[1]} />
              <SmallCard card={CARDS[2]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

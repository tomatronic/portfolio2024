'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

const images = [
  {
    src:   '/donutmock.png',
    alt:   'Concept delivery app for a fictional donut company',
    ratio: 600 / 472,   // portrait  ~1.27
  },
  {
    src:   '/404.png',
    alt:   '404 page illustration iteration',
    ratio: 236 / 236,   // square     1.00
  },
  {
    src:   '/beerapp.gif',
    alt:   'Mobile app design – Beer app',
    ratio: 710 / 472,   // portrait  ~1.50
  },
  {
    src:   '/todoList.gif',
    alt:   'UI design – To do list mobile app',
    ratio: 350 / 472,   // landscape ~0.74
  },
]

function GalleryCard({ image }) {
  const [hovered, setHovered] = useState(false)

  return (
    // Outer div holds the square grid slot — never changes size
    <div
      className="relative aspect-square"
      style={{ zIndex: hovered ? 10 : undefined }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Inner card expands from the top to the image's natural ratio */}
      <motion.div
        className="absolute inset-x-0 top-0 overflow-hidden rounded-2xl"
        animate={{
          height:    hovered ? `${image.ratio * 100}%` : '100%',
          boxShadow: hovered
            ? '0 20px 40px -8px rgba(0,0,0,0.18)'
            : '0 1px 3px rgba(0,0,0,0.08)',
        }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          loading="lazy"
          className="object-cover"
        />
      </motion.div>
    </div>
  )
}

export default function ExampleGallery() {
  return (
    <div className="py-24">
      <div className="container mx-auto max-w-6xl px-4">

        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-3xl">
          Extra Pixels
        </h2>
        <p className="text-balance pb-6 pt-0 text-base font-normal text-slate-600 dark:text-slate-400">
          Work I do when nobody&apos;s watching. Personal projects, speculative ideas, and the occasional rabbit hole.
        </p>

        <div className="grid grid-cols-2 gap-4 pb-16 md:grid-cols-4">
          {images.map((image, index) => (
            <GalleryCard key={index} image={image} />
          ))}
        </div>

      </div>
    </div>
  )
}

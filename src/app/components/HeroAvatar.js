'use client'

import Image from 'next/image'
import { useState, useRef, useCallback } from 'react'

const CYCLE_INTERVAL_MS = 3000

export default function HeroAvatar({ images, size = 96, alt = 'Tom Spencer' }) {
  const [index, setIndex] = useState(0)
  const intervalRef = useRef(null)

  const startCycling = useCallback(() => {
    if (images.length <= 1) return
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, CYCLE_INTERVAL_MS)
  }, [images.length])

  const stopCycling = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setIndex(0)
  }, [])

  if (!images?.length) return null

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full ring-2 ring-slate-200/80 dark:ring-slate-600/50 transition-transform duration-250 hover:scale-105"
      style={{ width: size, height: size }}
      onMouseEnter={startCycling}
      onMouseLeave={stopCycling}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === 0 ? alt : ''}
          fill
          className="object-cover transition-opacity duration-1000 ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
          sizes={`${size}px`}
        />
      ))}
    </div>
  )
}

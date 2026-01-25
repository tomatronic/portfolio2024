'use client'

import React, { useState, useEffect } from "react"
import Image from "next/image"
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "./ui/draggable-card"

export function DraggableImageGallery() {
  // State to track z-index for each card
  const [zIndices, setZIndices] = useState([10, 11, 12, 13])
  const [maxZIndex, setMaxZIndex] = useState(13)
  const [isClient, setIsClient] = useState(false)
  const [randomOffsets, setRandomOffsets] = useState([
    { rotation: 0, x: 0, y: 0 },
    { rotation: 0, x: 0, y: 0 },
    { rotation: 0, x: 0, y: 0 },
    { rotation: 0, x: 0, y: 0 },
  ])

  // Only run random shuffle on client side after hydration
  useEffect(() => {
    setIsClient(true)
    const getRandomRotation = () => Math.random() * 10 - 5
    const getRandomOffset = () => Math.random() * 40 - 20
    
    setRandomOffsets([0, 1, 2, 3].map(() => ({
      rotation: getRandomRotation(),
      x: getRandomOffset(),
      y: getRandomOffset(),
    })))
  }, [])

  // Function to bring card to front when tapped
  const bringToFront = (index) => {
    const newMaxZ = maxZIndex + 1
    const newZIndices = [...zIndices]
    newZIndices[index] = newMaxZ
    setZIndices(newZIndices)
    setMaxZIndex(newMaxZ)
  }

  const items = [
    {
      title: "Hiking in the South Downs",
      image: "/bio.png",
      baseRotation: -5,
      basePosition: { top: '10%', left: '20%' },
    },
    {
      title: "Nature",
      image: "/236x175.png",
      baseRotation: -7,
      basePosition: { top: '40%', left: '25%' },
    },
    {
      title: "Adventure",
      image: "/236x236.png",
      baseRotation: 8,
      basePosition: { top: '5%', left: '40%' },
    },
    {
      title: "Exploration",
      image: "/236x300.png",
      baseRotation: 10,
      basePosition: { top: '32%', left: '55%' },
    },
  ]

  return (
    <DraggableCardContainer className="relative flex h-full w-full items-center justify-center overflow-visible">
      {items.map((item, index) => (
        <DraggableCardBody 
          key={index} 
          className="absolute"
          style={{
            top: item.basePosition.top,
            left: item.basePosition.left,
            zIndex: zIndices[index],
          }}
          initialRotation={item.baseRotation + randomOffsets[index].rotation}
          initialOffset={{
            x: randomOffsets[index].x,
            y: randomOffsets[index].y,
          }}
          onTap={() => bringToFront(index)}
          index={index}
          isClient={isClient}
        >
          <div className="relative z-10 overflow-hidden rounded-lg bg-white p-3 pb-8 shadow-xl pointer-events-none">
            <Image
              src={item.image}
              alt={item.title}
              width={320}
              height={320}
              className="h-72 w-72 object-cover rounded-sm"
              draggable={false}
            />
            <p className="mt-3 text-center text-sm text-slate-600 font-medium">
              {item.title}
            </p>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  )
}
'use client'

import React from "react"
import Image from "next/image"
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "./ui/draggable-card"

export function DraggableImageGallery() {
  const items = [
    {
      title: "Hiking in the South Downs",
      image: "/bio.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Nature",
      image: "/236x175.png",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Adventure",
      image: "/236x236.png",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Exploration",
      image: "/236x300.png",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
  ]

  return (
    <DraggableCardContainer className="relative flex min-h-[400px] w-full items-center justify-center overflow-visible md:min-h-[500px]">
      {items.map((item, index) => (        
          <DraggableCardBody key={index} className={item.className} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
        
          <div className="relative z-10 overflow-hidden rounded-lg bg-white p-3 shadow-xl">
  <Image
    src={item.image}
    alt={item.title}
    width={320}
    height={320}
    className="h-80 w-80 object-cover"
    draggable={false}
  />
  <p className="mt-2 text-center text-sm font-handwriting text-slate-600">
    {item.title}
  </p>
</div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  )
}
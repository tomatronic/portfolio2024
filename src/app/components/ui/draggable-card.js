'use client'

import React from "react"
import { motion } from "framer-motion"

export function DraggableCardContainer({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  )
}

export function DraggableCardBody({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragMomentum={false}
      whileDrag={{ scale: 1.1, zIndex: 50, rotate: 0, cursor: 'grabbing' }}
      dragElastic={0.1}
      style={{ cursor: 'grab' }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  )
}



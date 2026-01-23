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
      dragMomentum={false}
      whileDrag={{ scale: 1.05, zIndex: 50 }}
      dragElastic={0.1}
      style={{ cursor: 'grab' }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  )
}


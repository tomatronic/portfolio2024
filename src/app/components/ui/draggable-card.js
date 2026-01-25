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

export function DraggableCardBody({ 
  children, 
  className = "", 
  style = {},
  initialRotation = 0,
  initialOffset = { x: 0, y: 0 },
  onTap,
  index = 0
}) {
  return (
    <motion.div
      className={className}
      style={{
        ...style,
        cursor: 'grab',
      }}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
      // Initial animation on mount
      initial={{ 
        opacity: 0, 
        scale: 0.8,
        rotate: initialRotation,
        x: initialOffset.x,
        y: initialOffset.y,
      }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: initialRotation,
        x: initialOffset.x,
        y: initialOffset.y,
      }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.4,
        ease: "easeOut" // Changed from spring to easeOut for less bounce
      }}
      // Drag feedback
      whileDrag={{ 
        scale: 1.1, 
        rotate: 0,
        cursor: 'grabbing',
        transition: { duration: 0.2 }
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      onTap={onTap}
    >
      {children}
    </motion.div>
  )
}
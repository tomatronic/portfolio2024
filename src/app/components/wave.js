'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WavingHand = () => {
  const [isWaving, setIsWaving] = useState(false);

  const handleClick = () => {
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 1000);
  };

  const waveVariants = {
    wave: {
      rotate: [0, -20, 0, 20, 0],
      transition: {
        duration: 0.5,
        repeat: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.span
      onClick={handleClick}
      animate={isWaving ? "wave" : ""}
      variants={waveVariants}
      className="cursor-pointer text-lg inline-block"
    >
      👋
    </motion.span>
  );
};

export default WavingHand;
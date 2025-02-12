'use client'

import { motion, useInView, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Number({ count }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 1 })

  const [displayCount, setDisplayCount] = useState(0)
  const springCount = useSpring(0, {
    damping: 60,
    stiffness: 100,
    duration: 5000,
  })

  springCount.on('change', (value) => {
    setDisplayCount(Math.round(value))
  })

  useEffect(() => {
    isInView ? springCount.set(count) : ''
  }),
    [isInView, springCount, count]

  return (
    <motion.p ref={ref} className="font-dmsans font-bold md:text-6xl text-4xl">
      {displayCount}
    </motion.p>
  )
}

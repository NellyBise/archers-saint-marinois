'use client'
import Image from 'next/image'
import useMeasure from 'react-use-measure'
import {
  motion,
  controls,
  animate,
  easeIn,
  useMotionValue,
} from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Sponsors() {
  let [ref, { width }] = useMeasure()
  const xTranslation = useMotionValue(0)

  const FAST_DURATION = 40
  const SLOW_DURATION = 1000000

  const [duration, setDuration] = useState(FAST_DURATION)
  const [mustFinish, setMustFinish] = useState(false)
  const [rerender, setRerender] = useState(false)

  useEffect(() => {
    let controls
    let finalPosition = -width / 2 - 20

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false)
          setRerender(!rerender)
        },
      })
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      })
    }

    return controls.stop
  }, [xTranslation, width, duration, rerender, mustFinish])

  const partners = [
    { id: 1, name: 'La chocolatine', logo: '/sponsors/chocolatine.png' },
    {
      id: 2,
      name: 'Intersport Perpignan Nord',
      logo: '/sponsors/intersport.jpg',
    },
    { id: 3, name: 'Partner 3', logo: '/sponsors/chocolatine.png' },
    { id: 4, name: 'Partner 4', logo: '/sponsors/intersport.jpg' },
    { id: 5, name: 'Partner 5', logo: '/sponsors/chocolatine.png' },
    { id: 6, name: 'Partner 6', logo: '/sponsors/intersport.jpg' },
  ]

  return (
    <section className="flex flex-col gap-8 py-16 md:py-20 overflow-hidden mx-auto">
      <div className="w-full flex flex-col justify-center text-center gap-8 md:gap-16">
        <h2 className="relative text-xl md:text-2xl text-blue-800 font-bold">
          Nos partenaires
        </h2>
        <motion.div
          className="flex gap-10 "
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            {
              setMustFinish(true)
              setDuration(SLOW_DURATION)
            }
          }}
          onHoverEnd={() => {
            {
              setMustFinish(true)
              setDuration(FAST_DURATION)
            }
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0  transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                width={300}
                height={300}
                className="h-12 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
